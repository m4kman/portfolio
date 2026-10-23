import { cloudflare } from "@cloudflare/vite-plugin";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

import { rehypeHighlights } from "./src/lib/rehype-highlights.ts";

const mdxPlugin = mdx({
  remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  rehypePlugins: [rehypeHighlights],
});

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      enforce: "pre",
      ...mdxPlugin,
      // @mdx-js/rollup strips the query before matching, so it would also
      // compile `.mdx?raw` imports (used for TOC headings) into components.
      transform: (code, id) =>
        /[?&]raw\b/.test(id) ? undefined : mdxPlugin.transform(code, id),
    },
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart({
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
