import { Fragment } from "react";

import { TrailCrumb } from "@/components/trail/trail-crumb";
import { TrailSeparator } from "@/components/trail/trail-separator";
import type { Crumb } from "@/lib/use-trail";

type TrailTailProps = {
  crumbs: Crumb[];
  tucked: boolean;
};

export const TrailTail = ({ crumbs, tucked }: TrailTailProps) => (
  <div
    className={`grid transition-[grid-template-columns,opacity,translate] duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none ${
      tucked ? "-translate-x-2 grid-cols-[0fr] opacity-0" : "grid-cols-[1fr]"
    }`}
    inert={tucked}
  >
    <div className="flex min-w-0 items-center overflow-hidden">
      {crumbs.map((crumb) => (
        <Fragment key={crumb.label}>
          <TrailSeparator hideOnPhone={crumb.isPostTitle} />
          <TrailCrumb crumb={crumb} />
        </Fragment>
      ))}
    </div>
  </div>
);
