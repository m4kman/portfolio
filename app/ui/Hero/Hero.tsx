"use client";
import * as React from "react";
import { motion } from "framer-motion";

import HeroText from "./HeroText";
import HeroButton from "./HeroButton";
import MouseTrailGrid from "../MouseTrailGrid";
import RotatePlaneOnMouse from "@/app/lib/RotatePlaneonMouse";

function Hero() {
  const plane = React.useRef<HTMLDivElement>(null);
  const maxRotate = 45;

  return (
    <div
      onMouseMove={(e) => RotatePlaneOnMouse(e, plane, maxRotate)}
      className="grid h-screen place-items-center font-sans"
    >
      <MouseTrailGrid />
      <div className="z-50">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center font-cursive text-4xl text-[rgb(238,242,255)]">
            Hi, I'm
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          ref={plane}
          className="text-[rgb(238,242,255)]"
        >
          <HeroText />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 1.75 }}
          className="mt-6 text-center text-xl font-thin tracking-wide text-[rgb(238,242,255)]"
        >
          web developer & security enthusiast
        </motion.p>
        <div className="mt-10 text-center">
          <HeroButton />
        </div>
      </div>
    </div>
  );
}

export default Hero;
