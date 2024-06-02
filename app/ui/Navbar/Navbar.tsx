"use client";
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { useLenis } from "@/app/lib/lenis";
import ShinyButton from "@/app/ui/shiny-button";
import { Github, X } from "@/app/ui/svgs";
import Logo from "@/app/ui/Logo";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

function Navbar({ onlyNav = false }: { onlyNav?: boolean }) {
  const lenis = useLenis();
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative mb-[130px] flex items-center justify-center pt-[72px]"
      id="home"
    >
      <Link href="/" className="absolute left-0 mx-40">
        <Logo width={40} height={40} />
      </Link>
      <ol
        className="fixed z-[9999999] flex items-center justify-center gap-6 rounded-full
          bg-muted/10 px-9 py-[15px] backdrop-blur-md"
      >
        {navItems.map((item) => {
          return (
            <li
              className="cursor-pointer text-sm font-medium hover:text-foreground/85"
              key={item.name}
            >
              <Link
                href={item.link}
                onClick={() => {
                  if (item.link[0] === "#" || item.link[1] === "#") {
                    lenis?.scrollTo(item.link, {
                      offset: -50,
                      duration: 1.5,
                      lerp: 0.05,
                    });
                  }
                  return;
                }}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <div
          className="h-6 w-[0.5px] shrink-0 bg-gradient-to-b from-muted/20 from-0% via-muted/80
            to-muted/20 to-100%"
        />

        <li className="cursor-pointer fill-foreground hover:fill-foreground/85">
          <Link href="https://github.com/m4kman" target="_blank">
            <Github width={24} height={24} />
          </Link>
        </li>
        <li className="cursor-pointer fill-foreground hover:fill-foreground/85">
          <Link href="https://x.com/m4kman" target="_blank" className="">
            <X width={24} height={24} />
          </Link>
        </li>
      </ol>
      {!onlyNav ? (
        <div className="absolute right-0 mx-40">
          <ShinyButton>
            <Link href="#">Press B for Resume</Link>
          </ShinyButton>
        </div>
      ) : null}
    </motion.nav>
  );
}

export default Navbar;
