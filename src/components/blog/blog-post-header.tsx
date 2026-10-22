import { AnimatedText } from "@/components/animated-text";
import { formatDate } from "@/lib/format-date";

type BlogPostHeaderProps = {
  title: string;
  date: string;
};

export const BlogPostHeader = ({ title, date }: BlogPostHeaderProps) => (
  <AnimatedText>
    <h1 className="font-serif text-4xl text-white">{title}</h1>
    <p className="text-muted-foreground mt-3 text-sm">{formatDate(date)}</p>
  </AnimatedText>
);
