import { AnimatedText } from "@/components/animated-text";
import { mdxComponents } from "@/components/mdx-components";
import type { MDXContentComponent } from "@/lib/posts";

type BlogPostBodyProps = {
  Component: MDXContentComponent;
};

export const BlogPostBody = ({ Component }: BlogPostBodyProps) => (
  <AnimatedText className="font-sans" delay={0.2}>
    <Component components={mdxComponents} />
  </AnimatedText>
);
