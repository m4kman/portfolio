import { useEffect, useState } from "react";

export const useActiveHeading = (ids: string[]): string | null => {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);
  const idsKey = ids.join(",");

  useEffect(() => {
    const headingIds = idsKey === "" ? [] : idsKey.split(",");
    const headings = headingIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const updateActive = () => {
      const line = window.innerHeight / 3;
      let current = headings[0].id;
      for (const el of headings) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActiveId(current);
    };

    const observer = new IntersectionObserver(updateActive, {
      rootMargin: "0px 0px -66% 0px",
    });
    for (const el of headings) observer.observe(el);
    updateActive();

    return () => observer.disconnect();
  }, [idsKey]);

  return activeId;
};
