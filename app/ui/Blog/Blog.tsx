import Badge from "@/app/ui/Badge";
import BlogList from "@/app/ui/BlogList";
import Link from "next/link";

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
        <BlogList />
      </div>
      <div className="group">
        <Link
          className="group mt-4 flex max-w-fit items-center gap-3 font-semibold
            hover:text-foreground/90"
          href="/blog"
        >
          More articles
          <div className="transition-all duration-300 group-hover:translate-x-[3px]">
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
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
