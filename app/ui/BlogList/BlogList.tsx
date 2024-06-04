import BlogDetail from "@/app/ui/BlogDetail";

import { getBlogPosts } from "@/app/lib/file-helpers";
async function BlogList() {
  const BLOGS = await getBlogPosts();
  return BLOGS.map((blog: any) => (
    <BlogDetail
      key={blog.id}
      slug={blog.slug}
      title={blog.data.title}
      date={blog.data.publishedAt}
    />
  ));
}

export default BlogList;
