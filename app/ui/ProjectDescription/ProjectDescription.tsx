"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function ProjectDescription({
  description,
  stack,
  links,
}: {
  description: string;
  stack: string[];
  links: [{ name: string; url: string }];
}) {
  const arrowMotion = {
    initial: {},
    hover: {
      transform: "translate(2px, -2px)",
    },
  };

  return (
    <div className="mt-6 flex flex-col gap-5 text-foreground/90">
      <p className="max-w-[40ch] text-balance text-lg font-normal">
        {description}
      </p>

      <div className="flex items-center gap-4 text-gray-300/80">
        {links.map((link, index) => (
          <motion.div key={index} initial="initial" whileHover="hover">
            <Link
              className="flex items-center gap-2 hover:text-foreground"
              href={link.url}
              target="_blank"
            >
              <span className="text-base font-medium">{link.name}</span>
              <motion.div variants={arrowMotion}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {stack.map((tech: string, idx: number) => (
          <div
            key={idx}
            className="pointer-events-none rounded bg-muted px-[18px] py-[6px] text-center text-[14px]
              font-medium text-black"
          >
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDescription;
