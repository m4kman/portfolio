"use client";
import * as React from "react";
import { motion } from "framer-motion";

export default function HeroButton() {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.75,
        type: "spring",
        stiffness: 40,
        damping: 10,
      }}
      whileHover={{ scale: 1.1 }}
      className="group relative inline-block cursor-pointer rounded-full bg-slate-800 p-px
        text-sm font-semibold text-white shadow-2xl shadow-slate-900"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span
          className="absolute inset-0 rounded-full
            bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.8)_0%,rgba(56,189,248,0.2)_75%)]
            opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        ></span>
      </span>
      <div
        className="relative z-10 flex items-center space-x-2 rounded-full bg-gradient-to-b
          from-slate-900 to-slate-950 px-7 py-3 ring-1 ring-white/10"
      >
        <span>Reach out</span>
      </div>
      <span
        className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r
          from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity
          duration-500 group-hover:opacity-40"
      ></span>
    </motion.button>
  );
}
