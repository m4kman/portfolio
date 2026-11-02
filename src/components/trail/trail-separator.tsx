export const TrailSeparator = ({ hideOnPhone }: { hideOnPhone?: boolean }) => (
  <span
    aria-hidden="true"
    className={`text-muted-foreground/50 ${hideOnPhone ? "max-sm:hidden" : ""}`}
  >
    /
  </span>
);
