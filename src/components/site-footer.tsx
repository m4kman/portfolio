import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/logo";

export const SiteFooter = () => (
  <>
    <Link
      className="text-muted-foreground hover:text-foreground fixed bottom-6 left-8 z-10 font-serif text-sm italic transition-colors"
      to="/"
    >
      m4kman
    </Link>
    <Logo className="fixed right-8 bottom-6 z-10 size-5 text-[#E3E3E3]" />
  </>
);
