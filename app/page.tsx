import Hero from "@/app/ui/Hero";
import About from "@/app/ui/About";
import Projects from "@/app/ui/Projects";
import Marquee from "@/app/ui/Marquee";
import Blog from "@/app/ui/Blog";

export default function Home() {
  return (
    <div className="pb-28">
      <Hero />
      <Marquee>Projects</Marquee>
      <Projects />
      <Marquee>Blog</Marquee>
      <Blog />
      <Marquee>About</Marquee>
      <About />
    </div>
  );
}
