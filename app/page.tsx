import Hero from "@/app/ui/Hero";
import About from "@/app/ui/About";
import Projects from "@/app/ui/Projects";
import Marquee from "@/app/ui/Marquee";
import Blog from "@/app/ui/Blog";
import Contact from "@/app/ui/Contact";
import ResumeCTA from "@/app/ui/ResumeCTA";
import PageWrapper from "@/app/ui/PageWrapper";

export default function Home() {
  return (
    <>
      <ResumeCTA />
      <PageWrapper y={40}>
        <Hero />
        <Marquee>Projects</Marquee>
        <Projects />
        <Marquee>Blog</Marquee>
        <Blog />
        <Marquee>About</Marquee>
        <About />
        <Contact />
      </PageWrapper>
    </>
  );
}
