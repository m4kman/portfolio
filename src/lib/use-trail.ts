import { useMatch } from "@tanstack/react-router";

export type Crumb = {
  label: string;
  to?: "/" | "/blog";
  isPostTitle?: boolean;
};

const SIGNATURE: Crumb = { label: "m4kman", to: "/" };

export const useTrail = (): Crumb[] => {
  const postTitle = useMatch({
    from: "/blog/$slug",
    select: (match) => match.loaderData?.frontmatter.title,
    shouldThrow: false,
  });
  const isBlogIndex = useMatch({
    from: "/blog/",
    select: () => true,
    shouldThrow: false,
  });

  if (postTitle) {
    return [
      SIGNATURE,
      { label: "thoughts", to: "/blog" },
      { isPostTitle: true, label: postTitle },
    ];
  }
  if (isBlogIndex) return [SIGNATURE, { label: "thoughts" }];
  return [SIGNATURE];
};
