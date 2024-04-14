import * as React from "react";

export function BubbleText({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((letter: string, idx: number) => (
        <span
          className="peer pointer-events-auto z-[99999999] font-thin text-[rgb(238,242,255)]
            duration-[400ms] hover:font-black hover:text-indigo-300 hover:transition-all
            hover:duration-[400ms] [&+_.peer]:hover:font-medium
            [&+_.peer]:hover:text-[rgb(199,210,254)] [&+_.peer_+_.peer]:hover:font-light
            [&:has(+_.peer:hover)]:font-medium
            [&:has(+_.peer:hover)]:text-[rgb(199,210,254)]
            [&:has(+_.peer_+_.peer:hover)]:font-light"
          key={idx}
        >
          {letter}
        </span>
      ))}
    </>
  );
}

export default BubbleText;
