import BlogDetail from "@/app/ui/BlogDetail";
const BLOGS = [
  {
    id: crypto.randomUUID(),
    title: "How I built my first portfolio with Next.js and Tailwind",
    slug: "my-first-portfolio",
    date: "19th June 2024",
  },
  {
    id: crypto.randomUUID(),
    title: "Ricing my developer environment and workflow",
    slug: "ricing-my-dev-environment",
    date: "19th June 2024",
  },
  {
    id: crypto.randomUUID(),
    title: "Journey to 10X engineer - New Beginnings",
    slug: "journey-to-10x-engineer",
    date: "19th June 2024",
  },
];

function BlogList() {
  return BLOGS.map(
    ({ id, title, date }: { id: string; title: string; date: string }) => (
      <BlogDetail key={id} title={title} date={date} />
    ),
  );
}

export default BlogList;
