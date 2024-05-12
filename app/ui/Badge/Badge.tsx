import React from "react";
function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex max-w-fit items-center justify-center gap-2 rounded-full bg-muted/15 px-5
      py-1 ${className}`}
    >
      {children}
    </div>
  );
}

export default Badge;
