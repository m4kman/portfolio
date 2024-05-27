const PROJECTS = [
  {
    title: "Movieable",
    description:
      "A movie search engine granting access to a vast database of movies across multiple genres, complete with detailed information for each film to help you choose your next watch.",
    github: "/movieable",
    demo: "#",
    backdrop: "/assets/movie.png",
    stack: ["Next.js", "Tailwind", "TMDB API", "Framer Motion"],
  },
  {
    title: "Portfolio v1",
    description:
      "My first portfolio, powered by Next.js and Tailwind CSS, with a touch of Framer Motion for animations.",
    github: "/portfolio",
    demo: "#",
    backdrop: "",
    stack: ["Next.js", "Tailwind", "Framer Motion", "Figma"],
  },
  {
    title: "Interactive MDX Blog",
    description:
      "An MDX blog featuring an interactive design that embeds custom, dynamic components allowing for user interaction inside the content. ",
    github: "/interactive-blog-joy",
    demo: "#",
    backdrop: "",
    stack: ["Next.js", "CSS Modules", "Framer Motion", "Next MDX"],
  },
  {
    title: "Repik (ongoing)",
    description:
      "Restore your old, blurry images with Repik, a web app that uses AI to enhance image quality. Relive your memories in high definition.",
    github: "/repik",
    demo: "#",
    backdrop: "",
    stack: ["Next.js", "Tailwind", "Replicate", "Framer Motion"],
  },
];

const ABOUT = [
  {
    id: crypto.randomUUID(),
    description: "I like writing code and blogging about it",
    number: 1,
  },
  {
    id: crypto.randomUUID(),
    description: "I am a Computer Systems Engineering Major",
    number: 2,
  },
  {
    id: crypto.randomUUID(),
    description: "23 years old, passionate about coding as it gives me joy",
    number: 3,
  },
  {
    id: crypto.randomUUID(),
    description:
      "I don’t limit myself to one framework or library, rather I enjoy playing around with various",
    number: 4,
  },
  {
    id: crypto.randomUUID(),
    description:
      "I love gaming, and that’s what you’ll find me do in my free time",
    number: 5,
  },
];

export { PROJECTS, ABOUT };
