import AboutCards from "@/app/ui/AboutCards";

function About() {
  return (
    <>
      <div className="mx-auto mb-28 flex max-w-fit flex-col gap-1">
        <h1 className="text-center text-5xl font-semibold uppercase">About</h1>
        <span className="self-end text-sm font-medium text-accent">
          a lil something about me
        </span>
      </div>
      <div className="relative flex h-[500px] justify-center">
        <AboutCards />
      </div>
    </>
  );
}

export default About;
