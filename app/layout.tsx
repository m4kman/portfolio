import type { Metadata } from "next";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
