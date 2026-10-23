import { slugify } from "./slugify";

export type PostHeading = {
  id: string;
  text: string;
};

const stripInlineMarkdown = (text: string): string =>
  text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ");

export const parseHeadings = (raw: string): PostHeading[] => {
  const headings: PostHeading[] = [];
  let inFence = false;

  for (const line of raw.split(/\r?\n/)) {
    if (line.trim().startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^##\s+(.+)$/.exec(line);
    if (match) {
      const text = stripInlineMarkdown(match[1]).trim();
      headings.push({ id: slugify(text), text });
    }
  }

  return headings;
};
