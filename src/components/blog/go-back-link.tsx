import { Link } from "@tanstack/react-router";

import { AnimatedText } from "@/components/animated-text";

export const GoBackLink = () => (
  <AnimatedText className="mt-16" delay={0.4}>
    <Link
      className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
      to="/blog"
    >
      <span aria-hidden="true">←</span>
      more thoughts
    </Link>
  </AnimatedText>
);
