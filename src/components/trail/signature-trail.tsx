import { TrailCrumb } from "@/components/trail/trail-crumb";
import { TrailTail } from "@/components/trail/trail-tail";
import { useTrail } from "@/lib/use-trail";
import { useTuckOnScroll } from "@/lib/use-tuck-on-scroll";

export const SignatureTrail = () => {
  const [signature, ...tail] = useTrail();
  const tucked = useTuckOnScroll();

  return (
    <nav
      aria-label="Breadcrumb"
      className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-10 flex items-center font-serif text-sm italic sm:left-[max(1.5rem,env(safe-area-inset-left))]"
    >
      <TrailCrumb crumb={signature} />
      {tail.length > 0 && <TrailTail crumbs={tail} tucked={tucked} />}
    </nav>
  );
};
