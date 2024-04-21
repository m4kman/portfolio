"use client";
import * as React from "react";
import Text3d from "../Hero/Text3d";
import MouseTrailGrid from "../MouseTrailGrid";

import RotatePlaneOnMouse from "@/app/lib/RotatePlaneonMouse";

export function About() {
  const plane = React.useRef<HTMLDivElement>(null);
  const maxRotate = 45;

  return (
    <div
      className="h-screen"
      onMouseMove={(e) => RotatePlaneOnMouse(e, plane, maxRotate)}
    >
      <MouseTrailGrid />
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 overflow-hidden pt-32 text-main">
        <div className="z-50">
          <span className="ml-2 text-sm font-semibold text-indigo-300">
            a little background
          </span>
          <div ref={plane} className="mt-5 max-w-fit">
            <Text3d primary="About" secondary="About" />
          </div>
        </div>
        <div className="z-50">
          <p className="text-2xl leading-10 text-neutral-300/95">
            I'm Hassam. A passionate web developer and an aspiring security
            enthusiast. I've always been in love with websites and the
            technologies that empower them. This has led me to pursue a career
            in web development. I have a major in Computer Systems Engineering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
