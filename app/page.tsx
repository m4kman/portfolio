import Hero from "@/app/ui/Hero";
import About from "@/app/ui/About";
import Projects from "@/app/ui/Projects";
import Marquee from "@/app/ui/Marquee";
import Blog from "@/app/ui/Blog";
import Contact from "@/app/ui/Contact";
import Footer from "@/app/ui/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee>Projects</Marquee>
      <Projects />
      <Marquee>Blog</Marquee>
      <Blog />
      <Marquee>About</Marquee>
      <About />
      <Marquee>Contact</Marquee>
      <Contact />
      <Footer />
    </div>
  );
}
