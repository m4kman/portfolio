import React from "react";

export default function Text3d({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div
      className="text-container group relative mx-auto cursor-pointer transition-transform
        duration-[400ms]"
    >
      <p
        className="m-0 text-[8vw] font-bold capitalize leading-[8vw] transition-all
          duration-[400ms] group-hover:translate-y-[-100%] group-hover:opacity-0"
      >
        {primary}
      </p>
      <p
        className="secondary absolute top-0 m-0 text-[8vw] font-bold leading-[8vw] text-indigo-300
          opacity-0 transition-all duration-[400ms] group-hover:opacity-100"
      >
        {secondary}
      </p>
    </div>
  );
}
