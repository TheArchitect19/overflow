"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export function UploadResume() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  };

  return (
    <div className="w-full mx-auto h-screen border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}
