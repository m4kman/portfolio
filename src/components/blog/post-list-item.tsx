import { Link } from "@tanstack/react-router";

import { AnimatedText } from "@/components/animated-text";

type PostListItemProps = {
  slug: string;
  title: string;
  symbol: string;
  delay: number;
};

export const PostListItem = ({
  slug,
  title,
  symbol,
  delay,
}: PostListItemProps) => (
  <AnimatedText delay={delay}>
    <Link
      className="flex items-baseline gap-4 transition-opacity hover:opacity-70"
      params={{ slug }}
      to="/blog/$slug"
    >
      <span className="text-foreground/90 font-serif italic">{symbol}</span>
      <span className="text-foreground/90">{title}</span>
    </Link>
  </AnimatedText>
);
