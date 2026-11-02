import { useEffect, useState } from "react";

const PHONE_QUERY = "(width < 40rem)";
const DIRECTION_THRESHOLD = 6;
const EDGE_ZONE = 40;

export const useTuckOnScroll = (): boolean => {
  const [tucked, setTucked] = useState(false);

  useEffect(() => {
    const phone = window.matchMedia(PHONE_QUERY);
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      const atEdge = y < EDGE_ZONE || y > maxY - EDGE_ZONE;

      if (!phone.matches || atEdge) setTucked(false);
      else if (y > lastY + DIRECTION_THRESHOLD) setTucked(true);
      else if (y < lastY - DIRECTION_THRESHOLD) setTucked(false);
      else return;

      lastY = y;
    };

    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    phone.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      phone.removeEventListener("change", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  return tucked;
};
