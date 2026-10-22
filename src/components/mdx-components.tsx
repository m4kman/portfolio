import {
  type ComponentPropsWithoutRef,
  isValidElement,
  type ReactNode,
} from "react";

import { slugify } from "@/lib/slugify";

const getNodeText = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(getNodeText).join("");
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getNodeText(node.props.children);
  }
  return "";
};

export const mdxComponents = {
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-10 mb-4 scroll-mt-24 font-bold font-serif text-2xl text-white"
      id={slugify(getNodeText(children))}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 mb-3 font-bold font-serif text-white text-xl"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-5 text-foreground/80 leading-[1.7]" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mb-5 list-disc pl-6 text-foreground/80 leading-[1.7]"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mb-5 list-decimal pl-6 text-foreground/80 leading-[1.7]"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="mb-1" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mb-5 border-muted border-l-2 pl-4 text-muted-foreground italic"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mb-5 overflow-x-auto rounded-lg p-4 text-sm leading-relaxed [&>code]:bg-transparent [&>code]:p-0"
      {...props}
    />
  ),
};
