import { Logo } from "@/components/logo";
import { SignatureTrail } from "@/components/trail/signature-trail";
import { TrailScrim } from "@/components/trail/trail-scrim";

export const SiteFooter = () => (
  <>
    <TrailScrim />
    <SignatureTrail />
    <Logo className="fixed right-[max(1.5rem,env(safe-area-inset-right))] bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-10 size-5 text-[#E3E3E3] sm:right-[max(2rem,env(safe-area-inset-right))]" />
  </>
);
