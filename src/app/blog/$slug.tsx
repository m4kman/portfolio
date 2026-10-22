import { createFileRoute, notFound } from "@tanstack/react-router";
import { useMemo } from "react";

import { BlogPostBody } from "@/components/blog/blog-post-body";
import { BlogPostHeader } from "@/components/blog/blog-post-header";
import { GoBackLink } from "@/components/blog/go-back-link";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { getPost, getPostHeadings, getPosts } from "@/lib/posts";

const BlogPost = () => {
  const { slug } = Route.useParams();
  const post = getPost(slug);
  const headings = useMemo(() => getPostHeadings(slug), [slug]);

  if (!post) return null;

  const { frontmatter, Component } = post;

  return (
    <main className="mx-auto max-w-2xl px-6 pt-24 pb-32">
      <BlogPostHeader date={frontmatter.date} title={frontmatter.title} />
      <div className="relative mt-10">
        <TableOfContents headings={headings} />
        <BlogPostBody Component={Component} />
      </div>
      <GoBackLink />
    </main>
  );
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const posts = getPosts();
    const exists = posts.some((p) => p.slug === params.slug);
    if (!exists) throw notFound();
    return null;
  },
  component: BlogPost,
});
