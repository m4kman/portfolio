import { Link } from "@tanstack/react-router";

import type { Crumb } from "@/lib/use-trail";

const HIT_AREA = "px-2 py-3 focus-visible:-outline-offset-2";

export const TrailCrumb = ({ crumb }: { crumb: Crumb }) => {
  if (crumb.to) {
    return (
      <Link
        activeOptions={{ exact: true }}
        className={`text-muted-foreground hover:text-foreground transition-colors ${HIT_AREA}`}
        to={crumb.to}
      >
        {crumb.label}
      </Link>
    );
  }

  return (
    <span
      aria-current="page"
      className={`text-foreground ${HIT_AREA} ${
        crumb.isPostTitle ? "max-w-50 truncate lowercase max-sm:hidden" : ""
      }`}
    >
      {crumb.label}
    </span>
  );
};
