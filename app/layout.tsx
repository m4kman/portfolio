import type { Metadata } from "next";
import localFont from "next/font/local";
import { Chakra_Petch } from "next/font/google";

import Navbar from "@/app/ui/Navbar";
import Gradients from "@/app/ui/Gradients";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hassam 'm4kman' Khan",
  description: "m4kman's Portfolio",
};

const monaSans = localFont({
  src: "./fonts/Mona-Sans.woff2",
  display: "swap",
  variable: "--font-mona-sans",
});

const dancingScript = localFont({
  src: "./fonts/DancingScript.woff2",
  display: "swap",
  variable: "--font-dancing-script",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
  variable: "--font-chakra-petch",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${chakraPetch.variable} ${dancingScript.variable} dark
      min-h-[100vh] scroll-smooth font-main`}
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
