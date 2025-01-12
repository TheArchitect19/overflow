"use client";
import { HeroHighlight } from "../components/ui/hero-highlight";
import Herotext from "@/components/home/hero_section1";
import { Hero } from "@/components/home/hero_section2";

export default function Home() {
  return (
    <div>
      {/* Background Content */}
      <HeroHighlight>
        {/* Add your hero highlight content here */}
        <div className=" w-4/5 flex items-center justify-start md:px-6 lg:px-10">
          <Herotext />

          {/* TODO: Add HeroImage */}
        </div>
      </HeroHighlight>
    </div>
  );
}
