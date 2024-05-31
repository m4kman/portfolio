"use client";
import DragHint from "@/app/ui/DragHint";
import { useState } from "react";
import AboutCards from "@/app/ui/AboutCards";
import { Button } from "@/app/ui/button";

function About() {
  const [isStacked, setIsStacked] = useState(true);

  return (
    <div>
      <div className="mx-auto mb-28 flex max-w-fit flex-col gap-1">
        <h1 className="text-center text-5xl font-semibold uppercase">About</h1>
        <span className="self-end text-sm font-medium text-accent">
          something about me
        </span>
      </div>
      <div className="relative flex h-[500px] justify-center">
        <AboutCards isStacked={isStacked} />
        {isStacked ? <DragHint text="hey, drag me" /> : null}
      </div>
      <Button
        onClick={() => setIsStacked(!isStacked)}
        className="button-hover relative mx-auto mt-32 block bg-black px-5 py-3 text-background
          hover:text-foreground"
      >
        <span className="relative">
          {isStacked ? "Reveal Cards" : "Stack Cards"}
        </span>
      </Button>
    </div>
  );
}

export default About;
