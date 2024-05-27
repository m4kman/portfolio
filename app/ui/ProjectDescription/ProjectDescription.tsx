import Link from "next/link";

function ProjectDescription({
  description,
  stack,
}: {
  description: string;
  stack: string[];
}) {
  return (
    <div className="mt-6 flex flex-col gap-5 text-foreground/90">
      <p className="max-w-[40ch] text-balance text-lg font-normal">
        {description}
      </p>

      <div className="flex items-center gap-4 text-gray-300/80">
        <Link
          className="flex items-center gap-2 hover:text-foreground"
          href="#"
        >
          <span className="text-base font-medium">GitHub</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link
          className="flex items-center gap-2 hover:text-foreground"
          href="#"
        >
          <span className="text-base font-medium">Live Demo</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {stack.map((tech: string, idx: number) => (
          <div
            key={idx}
            className="rounded bg-muted px-[18px] py-[6px] text-center text-[14px] font-medium
              text-black"
          >
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDescription;
