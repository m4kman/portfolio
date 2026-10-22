import { AnimatedText } from "@/components/animated-text";
import { formatDate } from "@/lib/format-date";

type BlogPostHeaderProps = {
  title: string;
  date: string;
};

export const BlogPostHeader = ({ title, date }: BlogPostHeaderProps) => (
  <AnimatedText>
    <h1 className="font-serif text-4xl text-white">{title}</h1>
    <p className="mt-3 text-muted-foreground text-sm">{formatDate(date)}</p>
  </AnimatedText>
);
