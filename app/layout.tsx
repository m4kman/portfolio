import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { pacifico } from "@/app/lib/fonts";

import Navbar from "@/app/ui/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hassam Khan",
  description: "Hassam's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${pacifico.variable}`}
    >
      <body className="h-screen bg-slate-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
