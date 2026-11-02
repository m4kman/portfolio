import { createFileRoute, notFound } from "@tanstack/react-router";

import { BlogPostBody } from "@/components/blog/blog-post-body";
import { BlogPostHeader } from "@/components/blog/blog-post-header";
import { GoBackLink } from "@/components/blog/go-back-link";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { getPostContent, getPostMeta } from "@/lib/posts";

const BlogPost = () => {
  const { slug } = Route.useParams();
  const { frontmatter, headings } = Route.useLoaderData();
  const Component = getPostContent(slug);

  if (!Component) return null;

  return (
    <main className="mx-auto max-w-2xl px-6 pt-24 pb-32 text-pretty">
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
    const meta = getPostMeta(params.slug);
    if (!meta) throw notFound();
    return meta;
  },
  component: BlogPost,
});
