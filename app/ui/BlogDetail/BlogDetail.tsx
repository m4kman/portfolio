"use client";
import { motion } from "framer-motion";
import Link from "next/link";
function BlogDetail({ title, date }: { title: string; date: string }) {
  const arrowMotion = {
    initial: {},
    hover: {
      transform: "translate(3px, -3px)",
    },
  };
  return (
    <motion.div
      className="group mt-[18px] flex flex-col gap-2 border-b border-white/20 pb-4
        last:border-none last:pb-0"
      initial="initial"
      whileHover="hover"
    >
      <Link href="#" className="max-w-fit group-hover:text-foreground/90">
        <div className="flex gap-3">
          <h3 className="font-medium">{title}</h3>

          <motion.div variants={arrowMotion}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 self-center"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </div>
        <span className="text-[13px] text-muted/60">{date}</span>
      </Link>
    </motion.div>
  );
}

export default BlogDetail;
