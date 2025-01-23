import express, { Request, Response } from "express";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import {
  GoogleGenerativeAI,
  SingleRequestOptions,
} from "@google/generative-ai";
import mime from "mime";
import multer from "multer";
import path from "path";
import fs from "fs/promises";
import { writeFile } from "fs/promises";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

const generationConfig: any = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  responseMimeType: "text/plain",
};

type JobDetailsRes = { text_content: string };

const get_job_details = async (url: string): Promise<JobDetailsRes> => {
  const res = await axios.post("http://localhost:4000/fetch_job_details", {
    url: url,
  });
  return res.data as JobDetailsRes;
};

const writeStringToFile = async (filePath: string, data: string) => {
  try {
    await writeFile(filePath, data, "utf8");
    console.log(`Data successfully written to ${filePath}`);
  } catch (err) {
    console.error("Error writing to file:", err);
  }
};

app.post(
  "/generate",
  upload.single("file"),
  async (req: Request, res: Response): Promise<any> => {
    try {
      const file = req.file;

      if (!file) {
        return res.json({ ok: false, message: "No file provided" });
      }

      const tempFilePath = path.join(
        __dirname,
        `../tmp/temp_${file.originalname}`
      );

      await fs.writeFile(tempFilePath, file.buffer);

      const mimeType =
        mime.getType(file.originalname) || "application/octet-stream";

      const fileManager = new GoogleAIFileManager(
        process.env.GEMINI_API_KEY ?? ""
      );
      const uploadResult = await fileManager.uploadFile(tempFilePath, {
        mimeType: mimeType,
        displayName: file.originalname,
      });

      console.log(
        `Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`
      );

      await fs.unlink(tempFilePath);

      let job_details = req.body.job_details;
      const url = req.body.url;

      if (!job_details) {
        job_details = (await get_job_details(url)).text_content;
      }

      const prompt = `Here is the content of a job opening\n\n${job_details}, you have to compare it with the resume file(pdf or image) that i have provided, give a thorough comparison of what skills, qualifications and responsibilities are matching or not matching. Show the comparison output in json format. Comparison output should follow a format, for every comparing criteria there should be four things, required, resume_match, resume_missing, comment. At last, also find the similarity percentage with the job opneing and the resume and share a comment of one or two paragraph`;

      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? "");
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
      const result = await model.generateContent(
        [
          prompt,
          {
            fileData: {
              fileUri: uploadResult.file.uri,
              mimeType: uploadResult.file.mimeType,
            },
          },
        ],
        generationConfig
      );

      await fileManager.deleteFile(uploadResult.file.name);

      writeStringToFile("./src/output.json", result.response.text());
      return res.json({ response: result.response.text() });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  }
);

app.listen(5000, () => console.log("Server running on port 5000"));
