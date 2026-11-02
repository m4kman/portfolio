/// <reference types="vite/client" />
import type { ComponentType } from "react";

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

export type PostHeading = {
  id: string;
  text: string;
};

export type PostMeta = {
  frontmatter: PostFrontmatter;
  headings: PostHeading[];
};

export type MDXContentComponent = ComponentType<{
  components?: Record<string, ComponentType<Record<string, unknown>>>;
}>;

type MDXModule = {
  default: MDXContentComponent;
  frontmatter: PostFrontmatter;
  headings: PostHeading[];
};

const modules = import.meta.glob<MDXModule>("../content/posts/*.mdx", {
  eager: true,
});

const postsBySlug = new Map(
  Object.values(modules).map((mod) => [mod.frontmatter.slug, mod]),
);

export const getPosts = (): PostFrontmatter[] =>
  [...postsBySlug.values()]
    .map((mod) => mod.frontmatter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getPostMeta = (slug: string): PostMeta | null => {
  const mod = postsBySlug.get(slug);
  return mod ? { frontmatter: mod.frontmatter, headings: mod.headings } : null;
};

export const getPostContent = (slug: string): MDXContentComponent | null =>
  postsBySlug.get(slug)?.default ?? null;
