"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Scanning resume",
  },
  {
    text: "Reviewing skills",
  },
  {
    text: "Analyzing experience",
  },
  {
    text: "Assessing qualifications",
  },
  {
    text: "Verifying references",
  },
  {
    text: "Cross-checking achievements",
  },
  {
    text: "Matching job requirements",
  },
  {
    text: "Generating recommendations",
  },
  {
    text: "Processing completed",
  },
  {
    text: "Resume ready for review",
  },
];

export function StepLoading() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        onClick={() => setLoading(true)}
        className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Click to load
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
