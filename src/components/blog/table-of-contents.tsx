import { AnimatedText } from "@/components/animated-text";
import { TocLink } from "@/components/blog/toc-link";
import type { PostHeading } from "@/lib/parse-headings";
import { useActiveHeading } from "@/lib/use-active-heading";

type TableOfContentsProps = {
  headings: PostHeading[];
};

export const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const activeId = useActiveHeading(headings.map((h) => h.id));

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="absolute top-0 right-full bottom-0 mr-17 hidden w-56.5 pt-2 xl:block"
    >
      <AnimatedText className="sticky top-24 space-y-3" delay={0.3}>
        {headings.map((heading) => (
          <TocLink
            id={heading.id}
            isActive={heading.id === activeId}
            key={heading.id}
            text={heading.text}
          />
        ))}
      </AnimatedText>
    </nav>
  );
};
