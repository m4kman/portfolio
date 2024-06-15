import type { Metadata } from "next";
import localFont from "next/font/local";
import { Chakra_Petch } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ReactLenis } from "@/app/lib/lenis";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";
import Gradients from "@/app/ui/Gradients";
import CV from "@/app/ui/cv";

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
      className={`${monaSans.variable} ${chakraPetch.variable} ${dancingScript.variable}
      no-scrollbar dark min-h-[100vh] font-main`}
    >
      <body className="relative flex min-h-screen flex-col overflow-x-hidden">
        <CV />
        <div className="absolute -top-96 h-1 w-1" id="scroll-top-anchor"></div>
        <Gradients position="-top-64" />
        <Navbar />
        <ReactLenis root>{children}</ReactLenis>
        <div className="mt-auto">
          <Footer />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[.021]"></div>
      </body>
    </html>
  );
}
