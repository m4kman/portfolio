"use client";
import * as React from "react";
import { useLenis } from "@/app/lib/lenis";
import Link from "next/link";
import Image from "next/image";

import ShinyButton from "@/app/ui/shiny-button";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Blog", link: "#blog" },
  { name: "Contact", link: "#contact" },
];

function Navbar() {
  const lenis = useLenis();
  console.log("rendered");
  return (
    <nav
      className="relative flex items-center justify-center pt-[72px]"
      id="home"
    >
      <Link href="/" className="absolute left-0 mx-40">
        <Image width={40} height={40} src="/assets/Logo.svg" alt="My Logo" />
      </Link>
      <ol
        className="fixed z-[9999999] flex items-center justify-center gap-6 rounded-full
          bg-muted/10 px-9 py-[15px] backdrop-blur-sm"
      >
        {navItems.map((item) => {
          return (
            <li
              className="cursor-pointer text-sm font-medium hover:text-foreground/85"
              key={item.name}
            >
              <Link
                href={item.link}
                onClick={() =>
                  lenis?.scrollTo(item.link, {
                    offset: -50,
                    duration: 1.5,
                    lerp: 0.05,
                  })
                }
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ol>
      <div className="absolute right-0 mx-40">
        <ShinyButton>
          <Link href="#">Press B for Resume</Link>
        </ShinyButton>
      </div>
    </nav>
  );
}

export default Navbar;
