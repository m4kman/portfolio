"use client";
import * as React from "react";
import { motion } from "framer-motion";

import HeroText from "./HeroText";
import HeroButton from "./HeroButton";
import Tile from "../Tile";

import range from "@/app/lib/range";

function Hero() {
  const plane = React.useRef<HTMLDivElement>(null);
  const maxRotate = 45;
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;
    if (plane.current !== null)
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  };
  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      className="grid h-screen w-screen place-items-center font-sans text-neutral-50"
    >
      <section
        className="absolute grid h-screen w-full grid-cols-[repeat(24,minmax(0,1fr))]
          overflow-y-clip"
      >
        {range(24 * 12).map((number: number) => (
          <Tile key={number} />
        ))}
      </section>

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
