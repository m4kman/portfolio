"use client";
import { useRef } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";

import ProjectDescription from "@/app/ui/ProjectDescription";

function ProjectCard({
  title,
  description,
  links,
  backdrop,
  idx,
  stack,
  scrollProgress,
  range,
  scale,
}: {
  title: string;
  description: string;
  links: [{ name: string; url: string }];
  backdrop: string;
  stack: string[];
  idx: number;
  scrollProgress: any;
  range: number[];
  scale: number;
}) {
  const cardContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ["start end", "start start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(scrollProgress, range, [1, scale]);
  return (
    <div
      ref={cardContainer}
      className="sticky top-0 flex h-[80vh] items-center justify-center"
    >
      <motion.div
        className={`relative h-[475px] w-[900px] rounded border-2 border-muted/5 bg-gradient-to-b
          from-[#1c1c22] to-[rgb(24,24,27)] p-12 shadow-sm shadow-muted/5`}
        style={{
          top: `calc(${idx}*50px)`,
          scale: cardScale,
        }}
      >
        <h1 className="mb-10 text-center text-3xl font-semibold">{title}</h1>
        <div className="grid grid-cols-2 gap-8">
          <ProjectDescription
            description={description}
            stack={stack}
            links={links}
          />
          <div className="overflow-hidden rounded">
            <motion.div
              style={{ scale: imgScale }}
              className="relative h-full w-full"
            >
              <Image
                src={backdrop}
                fill
                alt="Project Image"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
