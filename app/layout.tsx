import type { Metadata } from "next";
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
      <body className="bg-gradient-to-tr from-slate-950 to-slate-900 h-screen">
        {children}
      </body>
    </html>
  );
}
