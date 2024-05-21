import AboutCard from "@/app/ui/AboutCard";

const ABOUT_DESCRIPTIONS = [
  {
    id: crypto.randomUUID(),
    description: "I like writing code and blogging about it",
  },
  {
    id: crypto.randomUUID(),
    description: "I am a Computer Systems Engineering Major",
  },
  {
    id: crypto.randomUUID(),
    description: "23 years old, passionate about coding as it gives me joy",
  },
  {
    id: crypto.randomUUID(),
    description:
      "I don’t limit myself to a one framework or libraries, rather I enjoy playing around with various",
  },
  {
    id: crypto.randomUUID(),
    description:
      "I love gaming, and that’s what you’ll find me do in my free time",
  },
];

function About() {
  return (
    <>
      <div className="mx-auto mb-28 flex max-w-fit flex-col gap-1">
        <h1 className="text-center text-5xl font-semibold uppercase">About</h1>
        <span className="self-end text-sm font-medium text-accent">
          a lil something about me
        </span>
      </div>
      <div className="flex flex-wrap justify-center">
        {ABOUT_DESCRIPTIONS.map(
          (
            { id, description }: { id: string; description: string },
            idx: number,
          ) => (
            <AboutCard i={idx} key={id} description={description} />
          ),
        )}
      </div>
    </>
  );
}

export default About;
