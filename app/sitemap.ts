import { getBlogPosts } from "@/app/lib/file-helpers";

export default async function sitemap() {
  let blogs = await getBlogPosts();
  let blogPosts = blogs.map((blog: any) => ({
    url: `https://m4kman.dev/blog/${blog.slug}`,
    lastModified: blog.data.publishedAt,
  }));

  let routes = ["", "/blog", "/contact"].map((route) => ({
    url: `https://m4kman.dev${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogPosts];
}
