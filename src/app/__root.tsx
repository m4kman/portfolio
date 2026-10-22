import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

import { Glow } from "@/components/glow";
import { SiteFooter } from "@/components/site-footer";

import "./globals.css";

export const RootLayout = () => (
  <html className="dark" lang="en">
    <head>
      <HeadContent />
    </head>
    <body className="noise bg-background text-foreground relative isolate min-h-screen overflow-x-clip font-sans">
      <Glow />
      <Outlet />
      <SiteFooter />
      <Scripts />
    </body>
  </html>
);

export const Route = createRootRoute({
  component: RootLayout,
  head: () => ({
    meta: [
      { charSet: "utf8" },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      {
        title: "Hassam 'm4kman' Khan",
      },
    ],
    links: [
      { href: "/favicon.ico", rel: "icon", sizes: "48x48" },
      {
        href: "/favicon-32x32.png",
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        href: "/favicon-16x16.png",
        rel: "icon",
        sizes: "16x16",
        type: "image/png",
      },
      { href: "/apple-touch-icon.png", rel: "apple-touch-icon" },
      { href: "/site.webmanifest", rel: "manifest" },
      { href: "https://fonts.googleapis.com", rel: "preconnect" },
      {
        crossOrigin: "anonymous",
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&display=swap",
        rel: "stylesheet",
      },
    ],
  }),
});
