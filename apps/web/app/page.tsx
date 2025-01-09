"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "../components/ui/hero-highlight";
import Herotext from "@/components/home/hero_section1";
import { Hero } from "@/components/home/hero_section2";

export default function Home() {
  return (
    <div>
      {/* Background Content */}
      <HeroHighlight>
        <motion.h1>
          {/* Add your hero highlight content here */}
          <div className=" w-[50%] h-full items-start ">
            <Herotext />
          </div>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
}
