import * as React from "react";
import HeroText from "./HeroText";
import HeroButton from "./HeroButton";
import Tile from "../Tile";

function Hero() {
  return (
    <div className="grid h-screen w-screen place-items-center font-sans text-neutral-50">
      <section
        className="absolute grid h-screen w-full grid-cols-[repeat(24,minmax(0,1fr))]
          overflow-y-clip"
      >
        {Array.from(Array(24 * 12), (idx) => (
          <Tile key={idx} />
        ))}
      </section>

      <div className="z-50">
        <HeroText />
        <div className="mt-14 bg-inherit text-center">
          <HeroButton />
        </div>
      </div>
    </div>
  );
}

export default Hero;
