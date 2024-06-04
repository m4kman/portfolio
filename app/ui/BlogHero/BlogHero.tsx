import { format } from "date-fns";
function BlogHero({ title, date }: { title: string; date: string }) {
  const formattedDate = format(new Date(date), "do MMMM yyyy");
  return (
    <>
      <div className="mb-10 flex flex-col gap-4">
        <h1 className="text-pretty text-3xl font-bold tracking-tight lg:text-5xl">
          {title}
        </h1>
        <span className="text-sm font-medium text-foreground/80">
          {formattedDate}
        </span>
      </div>
    </>
  );
}

export default BlogHero;
