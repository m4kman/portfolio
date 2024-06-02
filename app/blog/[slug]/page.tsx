import { cache } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadBlogPost } from "@/app/lib/file-helpers";

const getPost = cache(loadBlogPost);

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost = await getPost(params.slug);
  return {
    title: blogPost.frontmatter.title,
  };
}

async function Home({ params }: { params: { slug: string } }) {
  const blogPost = await getPost(params.slug);

  return (
    <div>
      <MDXRemote source={blogPost.content} />
    </div>
  );
}

export default Home;
