"use client";
import * as React from "react";
import { motion } from "framer-motion";
import BubbleText from "../BubbleText";

export function HeroText() {
  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{ opacity: 100, y: 0 }}
        transition={{
          duration: 1,
          stifness: 400,
          damping: 20,
          delay: 0.2,
        }}
      >
        <h1 className="pointer-events-auto font-mono text-9xl uppercase tracking-wide">
          <BubbleText text="Hassam" />
        </h1>
        <h1 className="mt-5 text-center font-mono text-9xl uppercase tracking-wide">
          <BubbleText text="Khan" />
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 5 }}
        className="mt-6 text-center text-xl font-thin tracking-wide text-[rgb(238,242,255)]"
      >
        web developer & security enthusiast
      </motion.p>
    </div>
  );
}

export default HeroText;
