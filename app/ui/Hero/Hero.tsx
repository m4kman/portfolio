import Image from "next/image";

import Badge from "@/app/ui/Badge";

import { Button } from "@/app/ui/button";
import avatar from "./pf4.webp";

function Hero() {
  return (
    <div
      className="mt-24 flex flex-col place-items-center items-center justify-center gap-9 px-10
        pb-5 lg:px-0 2xl:mt-32"
    >
      <Badge className="text-[14px]">
        <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-foreground">
          <span className="absolute inline-flex h-[8px] w-[8px] animate-ping rounded-full bg-foreground"></span>
        </span>
        Available for work
      </Badge>
      <div className="z-50 max-h-[150px] max-w-[150px]">
        <Image
          src={avatar}
          alt="Profile Picture"
          className="h-full w-full object-cover"
        />
      </div>
      <h2 className="max-w-[33ch] text-center font-normal leading-snug ~text-4xl/5xl md:max-w-[30ch]">
        <span
          className="bg-gradient-to-r from-[#3F64E9] via-[#E93F3F] to-[#FFB800] bg-clip-text
            font-semibold text-transparent"
        >
          Hey, I&apos;m Hassam,
        </span>{" "}
        software engineer and aspiring security enthusiast
      </h2>
      <p className="text-[20px] text-foreground/80">
        I like writing code and writing about it.
      </p>
      <div className="flex gap-8">
        <Button
          className="button-hover rounded bg-black font-normal uppercase text-primary-foreground
            ~text-base/xl ~px-8/12 ~py-[0.875rem]/[1.125rem] hover:text-foreground"
        >
          <span className="relative">Get in Touch</span>
        </Button>
        <Button
          className="button-hover rounded bg-black font-normal uppercase text-primary-foreground
            ~text-base/xl ~px-8/12 ~py-[0.875rem]/[1.125rem] hover:text-foreground"
        >
          <span className="relative">View Resume</span>
        </Button>
      </div>
    </div>
  );
}
export default Hero;
