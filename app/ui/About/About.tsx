"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DragHint from "@/app/ui/DragHint";
import AboutCards from "@/app/ui/AboutCards";
import { Button } from "@/app/ui/button";
import useWindowSIze from "@/app/lib/useWindowSize";

function About() {
  const [isStacked, setIsStacked] = useState(true);
  const { width: windowWidth } = useWindowSIze();

  useEffect(() => {
    if (isStacked === false && windowWidth <= 1280) setIsStacked(true);
  }, [windowWidth]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-20 px-10"
    >
      <div className="mx-auto mb-28 flex max-w-fit flex-col gap-1">
        <h1 className="text-center text-5xl font-semibold uppercase">About</h1>
        <span className="self-end text-sm font-medium text-accent">
          something about me
        </span>
      </div>
      <div className="relative flex h-[500px] justify-center">
        <AboutCards isStacked={isStacked} />
        {isStacked && windowWidth >= 900 ? (
          <DragHint text="hey, drag me" />
        ) : null}
      </div>
      {windowWidth > 1280 && (
        <Button
          onClick={() => setIsStacked(!isStacked)}
          className="button-hover relative mx-auto mt-32 block bg-black px-5 py-3 text-background
            hover:text-foreground"
        >
          <span className="relative">
            {isStacked ? "Reveal Cards" : "Stack Cards"}
          </span>
        </Button>
      )}
    </motion.div>
  );
}

export default About;
