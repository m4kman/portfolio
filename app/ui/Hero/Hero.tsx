"use client";
import * as React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="font-sans text-neutral-50">
      <div className="grid h-screen w-screen place-items-center ">
        <div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ duration: 1, stifness: 1000, damping: 220 }}
          >
            <h1 className="font-mono text-8xl font-thin uppercase tracking-widest">
              Hassam
            </h1>
            <h1 className="mt-5 text-center font-mono text-8xl font-thin uppercase tracking-widest">
              Khan
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 5 }}
            className="ml-1 mt-6 text-center text-xl font-thin tracking-wide"
          >
            web developer & security enthusiast
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
