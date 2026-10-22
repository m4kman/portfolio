import { Link } from "@tanstack/react-router";

import { AnimatedText } from "@/components/animated-text";

export const GoBackLink = () => (
  <AnimatedText className="mt-16" delay={0.4}>
    <Link
      className="inline-flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground"
      to="/blog"
    >
      <span aria-hidden="true">←</span>
      Go back
    </Link>
  </AnimatedText>
);
