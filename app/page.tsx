import Hero from "@/app/ui/Hero";
import About from "@/app/ui/About";
import Tile from "@/app/ui/Tile";

import range from "@/app/lib/range";

export default function Home() {
  return (
    <div>
      <section className="fixed grid h-screen w-full grid-cols-[repeat(24,minmax(0,1fr))] overflow-y-clip">
        {range(24 * 12).map((number: number) => (
          <Tile key={number} />
        ))}
      </section>
      <Hero />;
      <About />
    </div>
  );
}
