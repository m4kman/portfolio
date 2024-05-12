import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "@/app/ui/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hassam Khan",
  description: "Hassam's Portfolio",
};

const myFont = localFont({
  src: "./fonts/Mona-Sans.woff2",
  display: "swap",
  variable: "--font-mona-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${myFont.variable} dark min-h-[100vh] scroll-smooth font-main`}
    >
      <body className="relative min-h-screen overflow-x-hidden px-40">
        <div className="mx-auto w-full">
          <Navbar />
        </div>
        {children}
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[.05]"></div>
      </body>
    </html>
  );
}
