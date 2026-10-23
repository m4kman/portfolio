import { PostListItem } from "@/components/blog/post-list-item";
import type { PostFrontmatter } from "@/lib/posts";
import { symbolFor } from "@/lib/symbols";

type PostListProps = {
  posts: PostFrontmatter[];
};

export const PostList = ({ posts }: PostListProps) => (
  <div className="mt-12 flex flex-col gap-6">
    {posts.map((post, index) => (
      <PostListItem
        delay={0.15 + index * 0.08}
        key={post.slug}
        slug={post.slug}
        symbol={symbolFor(index)}
        title={post.title}
      />
    ))}
  </div>
);
