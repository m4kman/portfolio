import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "@/app/ui/Navbar";
import Gradients from "@/app/ui/Gradients";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hassam 'm4kman' Khan",
  description: "m4kman's Portfolio",
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
      <body className="relative min-h-screen overflow-x-hidden">
        <Gradients />
        <div className="mx-auto w-full">
          <Navbar />
        </div>
        {children}
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[.06]"></div>
      </body>
    </html>
  );
}
