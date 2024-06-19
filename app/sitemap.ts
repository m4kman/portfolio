import { getBlogPosts } from "@/app/lib/file-helpers";

export default async function sitemap() {
  let blogs = await getBlogPosts();
  let blogPosts = blogs.map((post: any) => ({
    url: `https://m4kman.dev/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/blog", "/contact"].map((route) => ({
    url: `https://m4kman.dev${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogPosts];
}
