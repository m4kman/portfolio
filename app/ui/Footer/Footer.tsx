import FooterSVG from "@/app/ui/FooterSVG";
import Image from "next/image";
import { Discord, Github, X } from "@/app/ui/svgs";
import Gradients from "@/app/ui/Gradients";

function Footer() {
  return (
    <div className="relative mt-64 overflow-hidden">
      <div className="-mb-3 flex justify-center">
        <FooterSVG />
      </div>
      <div className="border-t border-muted/20 ">
        <div className="flex justify-between px-36 py-24">
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
            <div className="flex gap-4">
              <Github width={25} height={25} />
              <X width={25} height={25} />
              <Discord width={25} height={25} />
            </div>
          </div>
        </div>
      </div>
      <Gradients position="-bottom-64" />
    </div>
  );
}

export default Footer;
