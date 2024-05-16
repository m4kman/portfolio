import Hero from "@/app/ui/Hero";
import About from "@/app/ui/About";
import Projects from "@/app/ui/Projects";
import Marquee from "@/app/ui/Marquee";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <About />
      <Projects />
    </div>
  );
}
