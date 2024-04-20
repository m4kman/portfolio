import * as React from "react";

import PinContainer from "@/app/ui/ProjectCard";
import Text3d from "../Hero/Text3d";
import range from "@/app/lib/range";

function Projects() {
  return (
    <div className="test pb-32">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-fit text-[4vw] text-main">
          <Text3d primary="Projects" secondary="Projects" />
        </div>
        <div className="mt-32 grid w-full grid-cols-3 items-center justify-center">
          {range(3).map((number) => (
            <PinContainer
              key={number}
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
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
