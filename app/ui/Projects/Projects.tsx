import * as React from "react";

import PinContainer from "@/app/ui/ProjectCard";
import MouseTrailGrid from "@/app/ui/MouseTrailGrid";
import Text3d from "@/app/ui/Hero/Text3d";
import range from "@/app/lib/range";

function Projects() {
  return (
    <div className="test pb-32">
      <MouseTrailGrid />
      <div className="mx-auto max-w-screen-xl">
        <div className="relative mx-auto max-w-fit text-main">
          <span
            className="absolute bottom-[-20px] right-0 min-h-fit min-w-fit text-sm font-semibold
              text-indigo-300"
          >
            selected projects I've worked on
          </span>
          <Text3d primary="Projects" secondary="Projects" />
        </div>
        <div className="mt-32 grid w-full grid-cols-3 place-items-center">
          {range(3).map((number) => (
            <PinContainer
              key={number}
              title="m4kman.dev"
              href="https://twitter.com/m4kman"
            >
              <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight sm:basis-1/2">
                <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">
                  Project Title
                </h3>
                <div className="!m-0 !p-0 text-base font-normal">
                  <span className="text-slate-500 ">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat.
                  </span>
                </div>
                <div
                  className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500
                    via-purple-500 to-blue-500"
                />
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
