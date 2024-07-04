"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ShinyButton from "../shiny-button";

function ResumeCTA() {
  return (
    <AnimatePresence>
      <Link
        href="/resume.pdf"
        className="absolute right-0 z-[999] mt-12 hidden md:mx-5 lg:mx-10 lg:block xl:mx-20
          2xl:mx-40"
      >
        <motion.div
          key="resume-cta"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          exit={{ y: -50, opacity: 0 }}
        >
          <ShinyButton>Press B for Resume</ShinyButton>
        </motion.div>
      </Link>
    </AnimatePresence>
  );
}

export default ResumeCTA;
