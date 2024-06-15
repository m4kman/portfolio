"use client";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/ui/tooltip";
import Link from "next/link";
import FooterSVG from "@/app/ui/FooterSVG";
import Image from "next/image";
import { Discord, Github, X } from "@/app/ui/svgs";
import Gradients from "@/app/ui/Gradients";
import useCopyToClipboard from "@/app/lib/useCopyToClipboard";

function Footer() {
  const [showTooltip, setShowTooltip] = useState(false);
  const { clipboardText, setClipboardText, handleClipboardCopy } =
    useCopyToClipboard();

  return (
    <div className="relative mx-auto -mt-20 w-full overflow-hidden lg:mt-10">
      <div className="-mb-[56px] flex w-full justify-center px-4 sm:-mb-12 md:-mb-6 lg:-mb-3">
        <FooterSVG />
      </div>
      <div className="border-t border-muted/20">
        <div className="flex justify-between gap-20 ~px-12/36 ~py-20/24">
          <div className="flex flex-col gap-4">
            <Image src="/assets/Logo.svg" alt="Logo" width={42} height={42} />
            <span className="text-sm font-thin text-foreground/80">
              2024 © All rights reserved.
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-light">
              Designed and developed by{" "}
              <span className="font-medium">m4kman</span>
            </span>
            <div className="flex justify-start gap-4 fill-foreground">
              <Link
                href="https://github.com/m4kman"
                className="hover:fill-foreground/80"
              >
                <Github width={25} height={25} />
              </Link>
              <Link
                href="https://x.com/m4kman"
                className="hover:fill-foreground/80"
              >
                <X width={25} height={25} />
              </Link>
              <div onMouseLeave={() => setClipboardText("Click to Copy")}>
                <TooltipProvider delayDuration={300}>
                  <Tooltip onOpenChange={() => setShowTooltip((prev) => !prev)}>
                    <TooltipTrigger
                      onClick={(e) => {
                        e.preventDefault();
                        handleClipboardCopy("@m4kman");
                      }}
                    >
                      <Discord width={25} height={25} />
                    </TooltipTrigger>
                    {showTooltip && (
                      <TooltipContent
                        onPointerDownOutside={(e) => {
                          e.preventDefault();
                        }}
                      >
                        {clipboardText}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gradients position="-bottom-64" />
    </div>
  );
}

export default Footer;
