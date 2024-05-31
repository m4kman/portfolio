import * as React from "react";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        `inline-flex items-center justify-center overflow-hidden whitespace-nowrap
        rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground
        ring-offset-background focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
        disabled:opacity-50`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
