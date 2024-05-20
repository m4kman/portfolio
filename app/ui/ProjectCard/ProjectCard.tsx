"use client";
import { useRef } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";

import ProjectDescription from "@/app/ui/ProjectDescription";
import projectImg from "./project-img.jpg";

function ProjectCard({
  title,
  description,
  github,
  demo,
  idx,
  stack,
  scrollProgress,
  range,
  scale,
}: {
  title: string;
  description: string;
  github: string;
  demo: string;
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
        className="relative h-[500px] w-[900px] rounded bg-gradient-to-b from-[#1c1c22] to-black
          p-12 shadow-sm shadow-muted/10"
        style={{ top: `calc(${idx}*50px)`, scale: cardScale }}
      >
        <h1 className="mb-10 text-center text-3xl font-semibold">{title}</h1>
        <div className="grid grid-cols-2 gap-6">
          <ProjectDescription description={description} stack={stack} />
          <div className="overflow-hidden rounded">
            <motion.div style={{ scale: imgScale }} className="h-full w-full">
              <Image
                src={projectImg}
                alt="Project Image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
