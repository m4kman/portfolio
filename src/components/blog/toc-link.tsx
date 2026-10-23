type TocLinkProps = {
  id: string;
  isActive: boolean;
  text: string;
};

export const TocLink = ({ id, isActive, text }: TocLinkProps) => (
  <a
    aria-current={isActive ? "true" : undefined}
    className={`block text-xs leading-tight transition-colors duration-200 hover:text-white ${
      isActive ? "text-foreground" : "text-muted-foreground"
    }`}
    href={`#${id}`}
  >
    {text}
  </a>
);
