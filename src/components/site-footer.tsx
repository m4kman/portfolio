import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/logo";

export const SiteFooter = () => (
  <>
    <Link
      className="fixed bottom-6 left-8 z-10 font-serif text-muted-foreground text-sm italic transition-colors hover:text-foreground"
      to="/"
    >
      m4kman
    </Link>
    <Logo className="fixed right-8 bottom-6 z-10 text-[#E3E3E3] size-5" />
  </>
);
