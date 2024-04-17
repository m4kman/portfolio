import * as React from "react";
import Text3d from "./Text3d";

export function HeroText() {
  return (
    <div>
      <div className="container flex flex-col justify-center">
        <Text3d primary="Hassam" secondary="Hassam" />
        <Text3d primary="Khan" secondary="Khan" />
      </div>
    </div>
  );
}

export default HeroText;
