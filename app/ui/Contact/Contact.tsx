"use client";
import { MouseEvent } from "react";
import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/ui/tooltip";
import { Meteors } from "@/app/ui/meteors";
import useCopyToClipboard from "@/app/lib/useCopyToClipboard";

import { LampContainer } from "@/app/ui/lamp";
import { Mail } from "lucide-react";
import { WhatsApp, X } from "@/app/ui/svgs";

function Contact() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const { clipboardText, setClipboardText, handleClipboardCopy } =
    useCopyToClipboard();

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    let xPos = clientX - left;
    let yPos = clientY - top;

    mouseX.set(xPos);
    mouseY.set(yPos);
  }

  return (
    <div className="mt-52 flex flex-col items-center justify-center">
      <LampContainer className="">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-foreground to-gray-500 bg-clip-text py-4 text-center
            text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Let&apos;s build
          <br /> something together
        </motion.h1>
      </LampContainer>

      <div
        className="group relative flex w-[850px] -translate-y-36 flex-col items-center
          justify-center gap-4 overflow-hidden rounded border border-muted/10
          bg-gradient-to-b from-[#1c1c1c]/50 to-[#18181B]/50 p-16 shadow-md shadow-muted/5
          backdrop-blur-3xl"
        onMouseMove={handleMouseMove}
      >
        <div className="z-50 flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-semibold">Reach Out</h1>
          <p className="text-lg font-normal text-foreground/80">
            Drop me an email or a message, and I&apos;ll get back to you
            promptly.
          </p>
          <div className="mt-8 flex items-center justify-center gap-8">
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
            >
              <Link
                href=""
                className="flex flex-col items-center justify-center gap-4 fill-foreground
                  hover:fill-foreground/80 hover:text-foreground/90"
              >
                <WhatsApp width="2em" height="2em" className="fill-inherit" />
                <span className="text-sm font-medium">WhatsApp</span>
              </Link>
            </motion.div>
            <div onMouseLeave={() => setClipboardText("Click to Copy")}>
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger
                    onClick={(e) => {
                      e.preventDefault();
                      handleClipboardCopy("ihassam187@gmail.com");
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                      }}
                      className="flex cursor-pointer flex-col items-center justify-center gap-4
                        hover:text-foreground/90"
                    >
                      <Mail size={32} />
                      <span className="mt-0.5 text-sm font-medium">Email</span>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent
                    onPointerDownOutside={(e) => e.preventDefault()}
                  >
                    {clipboardText}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
            >
              <Link
                href="https://x.com/m4kman"
                target="_blank"
                className="flex flex-col items-center justify-center gap-4 fill-foreground
                  hover:fill-foreground/80 hover:text-foreground/90"
              >
                <X width="2em" height="2em" />
                <span className="mt-0.5 text-sm font-medium">X (Twitter)</span>
              </Link>
            </motion.div>
          </div>
        </div>
        <Meteors number={20} />
        <div
          className="absolute bottom-0 left-0 h-48 w-48 animate-blob rounded-full bg-accent/80
            opacity-50 blur-3xl"
        />
        <div
          className="absolute inset-y-0 right-0 h-48 w-48 animate-blob rounded-full bg-muted/80
            opacity-35 blur-3xl"
        />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 blur-xl backdrop-blur-3xl
            group-hover:opacity-20"
          style={{
            background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, #94a3b8, transparent 90%)`,
          }}
        />
      </div>
    </div>
  );
}

export default Contact;
