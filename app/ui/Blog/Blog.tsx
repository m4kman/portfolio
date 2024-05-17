import Badge from "@/app/ui/Badge";
import BlogDetail from "@/app/ui/BlogDetail";
import Link from "next/link";

const BLOGS = [
  {
    id: crypto.randomUUID(),
    title: "How I built my first portfolio with Next.js and Tailwind",
    date: "19th June 2024",
  },
  {
    id: crypto.randomUUID(),
    title: "Ricing my developer environment and workflow",
    date: "19th June 2024",
  },
  {
    id: crypto.randomUUID(),
    title: "Journey to 10X engineer - New Beginnings",
    date: "19th June 2024",
  },
];

function Blog() {
  return (
    <div className="mx-auto max-w-fit">
      <div className="mx-auto mb-28 flex max-w-fit flex-col gap-1">
        <h1 className="text-center text-5xl font-semibold uppercase">Blog</h1>
        <span className="self-end text-sm font-medium text-accent">
          recent articles
        </span>
      </div>
      <Badge className="text-xs text-foreground/80">Featured</Badge>
      <div>
        {BLOGS.map(
          ({
            id,
            title,
            date,
          }: {
            id: string;
            title: string;
            date: string;
          }) => (
            <BlogDetail key={id} title={title} date={date} />
          ),
        )}
      </div>
      <Link
        className="mt-4 flex items-center gap-[18px] font-semibold"
        href="/blog"
      >
        More articles
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Blog;
