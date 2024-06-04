import { cache } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { loadBlogPost } from "@/app/lib/file-helpers";
import BlogHero from "@/app/ui/BlogHero";

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
  console.log(blogPost.frontmatter.title);
  return (
    <>
      <BlogHero
        title={blogPost.frontmatter.title}
        date={blogPost.frontmatter.publishedAt}
      />
      <article className="prose prose-main isolate opacity-100 lg:prose-xl">
        <MDXRemote source={blogPost.content} components={{ Link: Link }} />
      </article>
    </>
  );
}

export default Home;
