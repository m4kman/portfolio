import Link from "next/link";
function BlogDetail({ title, date }: { title: string; date: string }) {
  return (
    <div
      className="mt-[18px] flex flex-col gap-2 border-b border-white/20 pb-4 last:border-none
        last:pb-0"
    >
      <Link href="#" className="max-w-fit">
        <div className="flex gap-[18px]">
          <h3 className="font-medium">{title}</h3>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 self-center"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="text-[13px] text-muted/60">{date}</span>
      </Link>
    </div>
  );
}

export default BlogDetail;
