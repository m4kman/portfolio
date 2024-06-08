import type { Metadata } from "next";
import BlogList from "@/app/ui/BlogList";
import PageWrapper from "@/app/ui/PageWrapper";

export const metadata: Metadata = {
  title: "Hassam's Blogs",
  description: "Read my blogs on my experiences, and different topics.",
};

function Home() {
  return (
    <PageWrapper>
      <div className="mx-auto mt-[130px] flex max-w-2xl flex-col items-center justify-center">
        <div className="flex flex-col gap-10">
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
      </div>
    </PageWrapper>
  );
}

export default Home;
