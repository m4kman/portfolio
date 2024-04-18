"use client";
import * as React from "react";
import Text3d from "../Hero/Text3d";

export function About() {
  const plane = React.useRef<HTMLDivElement>(null);
  const maxRotate = 45;
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;
    if (plane.current !== null)
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  };
  return (
    <div className="h-screen" onMouseMove={(e) => handleMouseMove(e)}>
      <div
        className="mx-auto mt-32 grid h-screen max-w-screen-xl grid-cols-2 overflow-hidden
          text-main"
      >
        <div>
          <span className="ml-2 text-sm font-semibold text-indigo-300">
            a little background
          </span>
          <div ref={plane} className="mt-5 max-w-fit">
            <Text3d primary="About" secondary="About" />
          </div>
        </div>
        <p className="text-2xl leading-10 text-neutral-300/95">
          I'm Hassam. A passionate web developer and an aspiring security
          enthusiast. I've always been in love with websites and the
          technologies that empower them. This has led me to pursue a career in
          web development. I have a major in Computer Systems Engineering.{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
