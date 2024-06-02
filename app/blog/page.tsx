import BlogList from "@/app/ui/BlogList";

function Home() {
  return (
    <>
      <div className="mx-auto flex flex-col justify-center gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">Read my blogs</h1>
          <p className="font-chakra text-foreground/80">
            I write about different topics, from tech to my experience, and
            more.
          </p>
        </div>
        <div className="max-w-fit font-main">
          <BlogList />
        </div>
      </div>
    </>
  );
}

export default Home;
