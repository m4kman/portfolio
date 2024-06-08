"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { Github, X } from "@/app/ui/svgs";
import Logo from "@/app/ui/Logo";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-50 flex items-center justify-center pt-[72px]"
      id="home"
    >
      <Link href="/" className="absolute left-0 mx-40">
        <Logo width={40} height={40} />
      </Link>
      <ol
        className="fixed flex items-center justify-center gap-6 rounded-full bg-muted/10 px-9
          py-[15px] backdrop-blur-md"
      >
        {navItems.map((item, index) => {
          const layoutId = `${item.name}-${index}`;
          return (
            <motion.li
              className="relative cursor-pointer text-sm font-medium hover:text-foreground/85"
              key={index}
            >
              {pathname === item.link && (
                <motion.div
                  layoutId="nav-item"
                  key={layoutId}
                  className="absolute inset-x-0 -bottom-2 mx-auto h-1 w-1 rounded-full bg-gradient-to-br
                    from-gray-300 to-gray-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Link href={item.link} replace={true} scroll={true}>
                {item.name}
              </Link>
            </motion.li>
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
    </motion.nav>
  );
}

export default Navbar;
