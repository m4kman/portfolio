import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/ui/Navbar";

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
      <body className="h-screen bg-gradient-to-tr from-slate-950 to-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
