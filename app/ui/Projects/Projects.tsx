"use client";
import { useRef } from "react";
import ProjectCard from "@/app/ui/ProjectCard";
import { useScroll } from "framer-motion";

import { PROJECTS } from "@/app/data";

function Projects() {
  const projectsContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectsContainer,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={projectsContainer} id="projects">
      <div className="mx-auto mb-28 flex max-w-fit flex-col gap-1">
        <h1 className="text-center text-5xl font-semibold uppercase">
          Projects
        </h1>
        <span className="self-end text-sm font-medium text-accent">
          some of my selected work
        </span>
      </div>
      <div>
        {PROJECTS.map((project, idx: number) => {
          const scale = 1 - (PROJECTS.length - idx) * 0.05;

          return (
            <ProjectCard
              key={idx}
              {...project}
              idx={idx}
              scrollProgress={scrollYProgress}
              range={[idx * 0.25, 1]}
              scale={scale}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
