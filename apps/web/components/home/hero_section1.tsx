import { Button } from "../ui/button";
import { Cover } from "../ui/cover";
import { motion } from "framer-motion";

export default function Herotext() {
  return (
    <div className=" flex w-1/2 flex-col gap-4 justify-between items-start">
      <motion.h1 className=" w-4/5 text-4xl md:text-4xl lg:text-6xl font-semibold  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Unlock <br /> your dream
        <br />
        <Cover>Tech Job</Cover>
      </motion.h1>
      <div>
        Use Gen AI driven ATS algorithm and give <br /> Mock Interviews from
        industry experts.
      </div>
      <div className="flex gap-4 items-center">
        <Button>ATS</Button>
        <Button>Mock Interview</Button>
      </div>
    </div>
  );
}
