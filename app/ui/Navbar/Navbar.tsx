"use client";
import * as React from "react";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/cn";
import Link from "next/link";

const navItems = [
  // { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
];

function Navbar() {
  return (
    <motion.div
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="absolute z-[100] flex w-full flex-col"
    >
      <div
        className={cn(
          `fixed inset-x-0 top-8 z-[5000] mx-auto flex max-w-fit items-center
          justify-center space-x-11 rounded-full border border-transparent bg-transparent
          px-8 py-2 font-sans backdrop-blur-lg`,
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              `relative flex items-center space-x-1 tracking-wide text-neutral-600
              hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300`,
            )}
          >
            <span className="hidden sm:block">{navItem.name}</span>
          </Link>
        ))}
      </div>
      <div className="mr-14 self-end pt-10">
        <Link
          href="/resume"
          className="text-neutral-600 hover:text-neutral-500 dark:text-neutral-50
            dark:hover:text-neutral-300"
        >
          <span
            className="animate-shimmer rounded-full border border-slate-100/20
              bg-[linear-gradient(110deg,transparent,45%,#1e293b,55%,transparent)]
              bg-[length:200%_100%] px-6 py-4 font-sans text-neutral-50/90 transition-colors
              hover:border-slate-100/50 hover:transition-[border-color] hover:duration-500
              focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50"
          >
            Press C for Resume
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export default Navbar;
