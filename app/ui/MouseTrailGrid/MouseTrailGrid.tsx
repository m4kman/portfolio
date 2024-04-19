import * as React from "react";
import Tile from "../Tile";
import range from "@/app/lib/range";

function MouseTrailGrid() {
  return (
    <section
      className="absolute grid h-screen w-full grid-cols-[repeat(24,minmax(0,1fr))]
        overflow-y-clip"
    >
      {range(24 * 12).map((number: number) => (
        <Tile key={number} />
      ))}
    </section>
  );
}

export default MouseTrailGrid;
