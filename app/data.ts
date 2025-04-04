const PROJECTS = [
  {
    title: "Repik",
    description:
      "Restore your old, blurry images with Repik, a web app that uses AI to enhance image quality. Relive your memories in high definition.",
    links: [
      { name: "GitHub", url: "https://github.com/m4kman/repik" },
      { name: "Live Demo", url: "https://repik.vercel.app" },
    ],
    backdrop: "/assets/repik.webp",
    stack: ["Next.js", "Cloudinary", "Replicate", "Tailwind", "Framer Motion"],
  },
  {
    title: "Movieable",
    description:
      "A movie search engine granting access to a vast database of movies across multiple genres, complete with detailed information for each film to help you choose your next watch.",
    links: [
      { name: "GitHub", url: "https://github.com/m4kman/movieable" },
      { name: "Live Demo", url: "https://movieable.vercel.app" },
    ],
    backdrop: "/assets/movie.webp",
    stack: ["Next.js", "Tailwind", "TMDB API", "Framer Motion"],
  },
  {
    title: "Portfolio v1",
    description:
      "My first portfolio, powered by Next.js and Tailwind CSS, with a touch of Framer Motion for animations.",
    links: [{ name: "GitHub", url: "https://github.com/m4kman/portfolio" }],
    backdrop: "/assets/portfolio.webp",
    stack: ["Next.js", "Tailwind", "Framer Motion", "Figma", "Next MDX-Remote"],
  },
  {
    title: "Interactive MDX Blog",
    description:
      "An MDX blog featuring an interactive design that embeds custom, dynamic components allowing for user interaction inside the content. ",
    links: [
      { name: "GitHub", url: "https://github.com/m4kman/jor-project-mdx" },
      { name: "Live Demo", url: "https://jor-project-mdx.vercel.app" },
    ],
    backdrop: "/assets/mdx-project-backdrop.webm",
    stack: ["Next.js", "CSS Modules", "Framer Motion", "Next MDX"],
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
    description: "24 years old with a degree in Computer Systems Engineering",
    number: 2,
  },
  {
    id: crypto.randomUUID(),
    description: "A guy who's passionate about coding and finds it joyful",
    number: 3,
  },
  {
    id: crypto.randomUUID(),
    description:
      "I don’t limit myself to one framework or library, rather I enjoy playing around with various technologies",
    number: 4,
  },
  {
    id: crypto.randomUUID(),
    description:
      "I love gaming, and that’s what you’ll find me doing in my free time",
    number: 5,
  },
];

export { PROJECTS, ABOUT };
