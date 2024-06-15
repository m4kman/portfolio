import { cache } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { loadBlogPost } from "@/app/lib/file-helpers";
import BlogHero from "@/app/ui/BlogHero";
import PageWrapper from "@/app/ui/PageWrapper";

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
    <PageWrapper>
      <div
        className="mx-auto mb-20 mt-[130px] flex max-w-2xl flex-col items-center justify-center
          px-16 md:px-0"
      >
        <div className="flex flex-col items-start justify-center">
          <BlogHero
            title={blogPost.frontmatter.title}
            date={blogPost.frontmatter.publishedAt}
          />
          <article className="prose prose-main opacity-100 lg:prose-xl">
            <MDXRemote source={blogPost.content} components={{ Link: Link }} />
          </article>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
