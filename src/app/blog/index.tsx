import { createFileRoute } from "@tanstack/react-router";

import { BlogIndexHeader } from "@/components/blog/blog-index-header";
import { PostList } from "@/components/blog/post-list";
import { getPosts } from "@/lib/posts";

const BlogIndex = () => {
  const posts = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-2xl px-6 pt-24 pb-32">
      <BlogIndexHeader />
      <PostList posts={posts} />
    </main>
  );
};

export const Route = createFileRoute("/blog/")({
  loader: () => getPosts(),
  component: BlogIndex,
});
