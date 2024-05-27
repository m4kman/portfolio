import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/app/ui/button";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
];

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-40 pt-12">
      <Link href="/">
        <Image width={48} height={48} src="/assets/Logo.svg" alt="My Logo" />
      </Link>
      <ol className="flex gap-4 rounded-full bg-muted/10 px-9 py-[15px] backdrop-blur-sm">
        {navItems.map((item) => {
          return (
            <li className="cursor-pointer text-[15px]" key={item.name}>
              <Link href={`${item.link}`}>{item.name}</Link>
            </li>
          );
        })}
      </ol>
      <Button type="button" className="px-[30px] py-6 text-base font-normal">
        <Link href="#">Press B for Resume</Link>
      </Button>
    </nav>
  );
}

export default Navbar;
