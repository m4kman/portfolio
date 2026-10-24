import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { AnimatedText } from "@/components/animated-text";

const SerifAccent = ({ children }: { children: ReactNode }) => (
  <span className="font-serif leading-relaxed text-white italic">
    {children}
  </span>
);

export const LandingHero = () => (
  <div className="max-w-96 font-serif">
    <AnimatedText>
      <h1 className="font-serif text-4xl text-white italic">Hi,</h1>
    </AnimatedText>

    <AnimatedText className="mt-4.5" delay={0.1}>
      <p className="text-foreground/80 text-2xl leading-relaxed">
        I am <SerifAccent>Hassam</SerifAccent>, a{" "}
        <SerifAccent>software engineer</SerifAccent> with a passion for gaming,
        and sometimes writing.
      </p>
    </AnimatedText>

    <AnimatedText className="mt-4.5" delay={0.2}>
      <p className="text-foreground/80 text-2xl leading-relaxed">
        Currently at{" "}
        <a
          className="hover:text-foreground transition-colors"
          href="https://imagine.art"
          rel="noopener noreferrer"
          target="_blank"
        >
          Vyro
        </a>
        .{" "}
        <Link
          className="hover:text-foreground/60 font-bold text-white transition-colors"
          to="/blog"
        >
          Thoughts
        </Link>{" "}
        linger here.
      </p>
    </AnimatedText>
  </div>
);
