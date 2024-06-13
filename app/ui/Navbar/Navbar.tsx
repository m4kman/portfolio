"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLenis } from "@/app/lib/lenis";

import { Github, X } from "@/app/ui/svgs";
import Logo from "@/app/ui/Logo";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

function Navbar() {
  const pathname = usePathname();
  const lenis = useLenis();
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-[999] flex items-center justify-center pt-[72px]"
      id="home"
    >
      <ol
        className="fixed z-[99999999999] flex items-center justify-center gap-6 rounded-full
          bg-muted/10 px-7 py-[15px] backdrop-blur-3xl xl:px-9"
      >
        <li className="mr-4 flex items-center justify-center">
          <Link href="/" className="h-9 w-9 fill-foreground xl:h-9 xl:w-9">
            <Logo width="full" height="full" />
          </Link>
        </li>
        {navItems.map((item, index) => {
          const layoutId = `${item.name}-${index}`;
          return (
            <motion.li
              className="relative cursor-pointer text-sm font-semibold hover:text-foreground/85"
              key={index}
            >
              {pathname === item.link && (
                <motion.div
                  layoutId="nav-item"
                  key={layoutId}
                  className="absolute inset-x-0 -bottom-2 mx-auto h-1 w-1 rounded-full bg-gradient-to-br
                    from-gray-300 to-gray-500"
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                    stiffness: 600,
                    damping: 60,
                  }}
                />
              )}
              <Link
                href={item.link}
                onClick={() => lenis?.scrollTo("#scroll-top-anchor")}
              >
                {item.name}
              </Link>
            </motion.li>
          );
        })}
        <div
          className="h-7 w-px shrink-0 bg-gradient-to-b from-muted/20 from-0% via-muted/80
            to-muted/20 to-100%"
        />

        <li className="cursor-pointer fill-foreground hover:fill-foreground/85">
          <Link href="https://github.com/m4kman" target="_blank">
            <Github width={24} height={24} />
          </Link>
        </li>
        <li className="cursor-pointer fill-foreground hover:fill-foreground/85">
          <Link href="https://x.com/m4kman" target="_blank">
            <X width={24} height={24} />
          </Link>
        </li>
      </ol>
    </motion.nav>
  );
}

export default Navbar;
