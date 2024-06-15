"use client";
import { useState, MouseEvent } from "react";
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
import { Mail } from "lucide-react";
import { WhatsApp, X } from "@/app/ui/svgs";

function ContactCard() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [showTooltip, setShowTooltip] = useState(false);

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
    <>
      <div
        className="group flex w-full flex-col items-center justify-center gap-4 overflow-hidden
          rounded border border-muted/10 bg-gradient-to-b from-[#1c1c1c]/10
          to-[#18181B]/20 px-10 py-16 shadow-md shadow-muted/5 backdrop-blur-3xl
          md:~w-[35.375rem]/[53.375rem]"
        onMouseMove={handleMouseMove}
      >
        <div className="z-50 flex flex-col items-center justify-center gap-4">
          <h1 className="font-semibold ~text-4xl/5xl">Reach Out</h1>
          <p className="font-normal text-foreground/80 ~text-sm/lg">
            Drop me an email or a message, and I&apos;ll get back to you
            promptly.
          </p>
          <div className="mt-8 flex items-center justify-center gap-8">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
            >
              <Link
                href=""
                className="flex flex-col items-center justify-center gap-4 fill-foreground
                  hover:fill-foreground/80 hover:text-foreground/90"
              >
                <WhatsApp
                  width="2.5em"
                  height="2.5em"
                  className="fill-inherit"
                />
                <span className="text-sm font-medium">WhatsApp</span>
              </Link>
            </motion.div>
            <div>
              <TooltipProvider delayDuration={300}>
                <Tooltip onOpenChange={() => setShowTooltip((prev) => !prev)}>
                  <TooltipTrigger
                    onMouseLeave={() => setClipboardText("Click to Copy")}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClipboardCopy("ihassam187@gmail.com");
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="flex cursor-pointer flex-col items-center justify-center gap-4
                        hover:text-foreground/90"
                    >
                      <Mail size={40} />
                      <span className="mt-0.5 text-sm font-medium">Email</span>
                    </motion.div>
                  </TooltipTrigger>
                  {showTooltip && (
                    <TooltipContent
                      onPointerDownOutside={(e) => e.preventDefault()}
                    >
                      {clipboardText}
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </div>
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
            >
              <Link
                href="https://x.com/m4kman"
                target="_blank"
                className="flex flex-col items-center justify-center gap-4 fill-foreground
                  hover:fill-foreground/80 hover:text-foreground/90"
              >
                <X width="2.5em" height="2.5em" />
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
    </>
  );
}

export default ContactCard;
