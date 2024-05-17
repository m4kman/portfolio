import { Fragment } from "react";
import Image from "next/image";
import star from "./star.svg";
import range from "@/app/lib/range";

function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="pointer-events-none my-52 flex gap-8 overflow-hidden">
      <div className="flex min-w-full shrink-0 animate-marquee select-none justify-around gap-8">
        {range(5).map((idx) => (
          <Fragment key={idx}>
            <h1 className="text-stroke text-[64px] font-medium uppercase">
              {children}
            </h1>
            <Image src={star} alt="Star SVG" />
          </Fragment>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="flex min-w-full shrink-0 animate-marquee select-none justify-around gap-8"
      >
        {range(5).map((idx) => (
          <Fragment key={idx}>
            <h1 className="text-stroke text-[64px] font-medium uppercase">
              {children}
            </h1>
            <Image src={star} alt="Star SVG" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
