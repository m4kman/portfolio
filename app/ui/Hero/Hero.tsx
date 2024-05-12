import Image from "next/image";

import Badge from "@/app/ui/Badge";

import avatar from "./pfp.png";
import { Button } from "@/app/ui/button";

function Hero() {
  return (
    <div className="mt-[130px] flex flex-col place-items-center gap-9">
      <Badge className="text-[14px]">
        <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-foreground">
          <span className="absolute inline-flex h-[8px] w-[8px] animate-ping rounded-full bg-foreground"></span>
        </span>
        Available for work
      </Badge>
      <Image src={avatar} alt="Profile Picture" className="rounded-full" />
      <h2 className="max-w-[815px] text-center text-5xl font-normal leading-snug">
        <span
          className="bg-gradient-to-r from-[#3F64E9] via-[#E93F3F] to-[#FFB800] bg-clip-text
            font-semibold text-transparent"
        >
          Hey, I'm Hassam,
        </span>{" "}
        software engineer and aspiring security enthusiast
      </h2>
      <p className="text-foreground/80">
        I like writing code and writing about it.
      </p>
      <div className="flex gap-8">
        <Button className="px-9 py-6 text-[20px] font-normal uppercase">
          Get in Touch
        </Button>
        <Button className="px-9 py-6 text-[20px] font-normal uppercase">
          View Resume
        </Button>
      </div>
    </div>
  );
}
export default Hero;
