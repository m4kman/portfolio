import { cloudflare } from "@cloudflare/vite-plugin";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

import { rehypeHighlights } from "./src/lib/rehype-highlights.ts";
import { remarkHeadings } from "./src/lib/remark-headings.ts";

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          remarkFrontmatter,
          remarkMdxFrontmatter,
          remarkHeadings,
        ],
        rehypePlugins: [rehypeHighlights],
      }),
    },
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart({
      prerender: {
        enabled: true,
      },
      router: {
        routesDirectory: "app",
      },
      srcDirectory: "src",
    }),
    viteReact(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
});
