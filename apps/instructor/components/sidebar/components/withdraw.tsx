"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function Withdraw() {
  return (
    <div className="flex text-center text-sm">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Withdraw</span>
      </HoverBorderGradient>
    </div>
  );
}