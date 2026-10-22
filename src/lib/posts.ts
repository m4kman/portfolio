/// <reference types="vite/client" />
import type { ComponentType } from "react";

import { parseHeadings, type PostHeading } from "./parse-headings";

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

export type MDXContentComponent = ComponentType<{
  components?: Record<string, ComponentType<Record<string, unknown>>>;
}>;

type MDXModule = {
  default: MDXContentComponent;
  frontmatter: PostFrontmatter;
};

const modules = import.meta.glob<MDXModule>("../content/posts/*.mdx", {
  eager: true,
});

const rawModules = import.meta.glob<string>("../content/posts/*.mdx", {
  eager: true,
  import: "default",
  query: "?raw",
});

export const getPostHeadings = (slug: string): PostHeading[] => {
  const path = Object.keys(modules).find(
    (key) => modules[key].frontmatter.slug === slug,
  );
  if (!path) return [];
  const raw = rawModules[path];
  return raw ? parseHeadings(raw) : [];
};

export const getPosts = (): PostFrontmatter[] =>
  Object.values(modules)
    .map((mod) => mod.frontmatter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getPost = (
  slug: string,
): { frontmatter: PostFrontmatter; Component: MDXContentComponent } | null => {
  const entry = Object.values(modules).find(
    (mod) => mod.frontmatter.slug === slug,
  );
  if (!entry) return null;
  return { frontmatter: entry.frontmatter, Component: entry.default };
};
