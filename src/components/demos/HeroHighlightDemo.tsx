"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { FlipWords } from "../ui/flip-words";
export function HeroHighlightDemo() {
  const words: any = ["UI/UX designer", "Full Stack Developer", "SEO Engineer"];
  return (
    <HeroHighlight className=" flex justify-center items-center ">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl mt-[32vh] px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Hi I'm <Highlight>Abhirup Pan</Highlight> <br />
        <span className=" font-normal">A passionate <FlipWords words={words}/> <br />
        based in India.</span>
      </motion.h1>
    </HeroHighlight>
  );
}
