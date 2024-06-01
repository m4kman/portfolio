"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import Badge from "@/app/ui/Badge";

import { Button } from "@/app/ui/button";
import avatar from "./pf4.png";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col place-items-center gap-9"
    >
      <Badge className="text-[14px]">
        <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-foreground">
          <span className="absolute inline-flex h-[8px] w-[8px] animate-ping rounded-full bg-foreground"></span>
        </span>
        Available for work
      </Badge>
      <div className="z-50 max-h-[150px] max-w-[150px]">
        <Image
          src={avatar}
          alt="Profile Picture"
          className="h-full w-full object-cover"
        />
      </div>
      <h2 className="max-w-[815px] text-center text-5xl font-normal leading-snug">
        <span
          className="bg-gradient-to-r from-[#3F64E9] via-[#E93F3F] to-[#FFB800] bg-clip-text
            font-semibold text-transparent"
        >
          Hey, I'm Hassam,
        </span>{" "}
        software engineer and aspiring security enthusiast
      </h2>
      <p className="text-[20px] text-foreground/80">
        I like writing code and writing about it.
      </p>
      <div className="flex gap-8">
        <Button
          className="button-hover rounded bg-black px-12 py-[18px] text-[20px] font-normal uppercase
            text-primary-foreground hover:text-foreground"
        >
          <span className="relative">Get in Touch</span>
        </Button>
        <Button
          className="button-hover rounded bg-black px-12 py-[18px] text-[20px] font-normal uppercase
            text-primary-foreground hover:text-foreground"
        >
          <span className="relative">View Resume</span>
        </Button>
      </div>
    </motion.div>
  );
}
export default Hero;
