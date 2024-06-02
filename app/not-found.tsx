import Link from "next/link";
function NotFound() {
  return (
    <div className="grid h-screen place-items-center gap-6">
      <div className="flex flex-col place-items-center gap-4">
        <h1 className="font-foreground font-main text-3xl font-medium tracking-tight">
          You have entered the void! This page doesn't exist.
        </h1>
        <p className="text-lg text-foreground/80">
          If you expected to see something here, let me know
          (hassam@m4kman.dev).
        </p>
        <Link
          href="/"
          className="mt-2 flex items-center justify-center gap-2 self-end text-xl text-foreground/60
            hover:text-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 rotate-180"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
          Go back
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
