import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "/content/");
  const fileNames = await fs.readdir(postsDirectory);
  let blogPosts = [];
  for (const fileName of fileNames) {
    const blogContent = await readFile(`/content/${fileName}`);
    const { data: frontmatter } = matter(blogContent);
    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      data: frontmatter,
    });
  }
  return blogPosts.sort((a, b) =>
    a.data.publishedAt > b.data.publishedAt ? -1 : 1,
  );
}

export async function loadBlogPost(slug: string) {
  try {
    const blogContent = await readFile(`/content/${slug}.mdx`);
    const { data: frontmatter, content } = matter(blogContent);
    return { frontmatter, content };
  } catch (e) {
    notFound();
  }
}

function readFile(filePath: string) {
  return fs.readFile(path.join(process.cwd(), filePath), "utf8");
}
