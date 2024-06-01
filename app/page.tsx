import Hero from "@/app/ui/Hero";
import About from "@/app/ui/About";
import Projects from "@/app/ui/Projects";
import Marquee from "@/app/ui/Marquee";
import Blog from "@/app/ui/Blog";
import Contact from "@/app/ui/Contact";
import Navbar from "./ui/Navbar";

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full">
        <Navbar onlyNav={false} />
      </div>
      <div className="mt-[130px]">
        <Hero />
        <Marquee>Projects</Marquee>
        <Projects />
        <Marquee>Blog</Marquee>
        <Blog />
        <Marquee>About</Marquee>
        <About />
        <Contact />
      </div>
    </>
  );
}
