import Image from "next/image";
import Link from "next/link";

import Badge from "@/app/ui/Badge";

import { Button } from "@/app/ui/button";
import avatar from "./pf4.webp";

function Hero() {
  return (
    <div
      className="mt-20 flex max-h-full flex-col place-items-center items-center justify-center
        gap-6 px-10 pb-5 lg:px-0 2xl:mt-32 2xl:gap-9"
    >
      <Badge className="text-[14px]">
        <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-foreground">
          <span className="absolute inline-flex h-[8px] w-[8px] animate-ping rounded-full bg-foreground"></span>
        </span>
        Available for work
      </Badge>
      <div className="z-50 max-h-32 max-w-32 2xl:max-h-[150px] 2xl:max-w-[150px]">
        <Image
          priority={true}
          placeholder="blur"
          src={avatar}
          alt="Profile Picture"
          className="h-full w-full object-cover"
        />
      </div>
      <h2 className="max-w-[33ch] text-center font-normal leading-snug ~text-3xl/5xl md:max-w-[30ch]">
        <span
          className="bg-gradient-to-r from-foreground via-accent to-accent bg-clip-text font-semibold
            text-transparent"
        >
          Hey, I&apos;m Hassam,
        </span>{" "}
        software engineer and aspiring security enthusiast
      </h2>
      <p className="text-[20px] text-foreground/80">
        I like coding and writing about it.
      </p>
      <div className="flex gap-8">
        <Button
          className="button-hover rounded bg-black font-normal uppercase text-primary-foreground
            ~text-base/lg ~px-7/12 ~py-[0.75rem]/[1.125rem] hover:text-foreground"
        >
          <Link href="/contact" className="relative">
            Get in Touch
          </Link>
        </Button>
        <Button
          className="button-hover rounded bg-black font-normal uppercase text-primary-foreground
            ~text-base/lg ~px-8/12 ~py-[0.875rem]/[1.125rem] hover:text-foreground"
        >
          <Link href="/resume.pdf" className="relative">
            View Resume
          </Link>
        </Button>
      </div>
    </div>
  );
}
export default Hero;
