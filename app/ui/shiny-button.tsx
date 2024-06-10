"use client";
import { type AnimationProps, motion } from "framer-motion";

const animationProps = {
  initial: { "--x": "100%" },
  animate: { "--x": "-100%" },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

const ShinyButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.button
      {...animationProps}
      className="relative z-[99] rounded px-6 py-[14px] font-normal backdrop-blur-xl
        backdrop-filter transition-[box-shadow] duration-300 ease-in-out hover:shadow
        dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary))_0%,hsl(var(--primary))_60%)]
        dark:hover:shadow-[0_0_20px_hsl(var(--primary)/60%)]"
    >
      <span
        className="relative block h-full w-full text-sm font-normal uppercase tracking-wide
          text-primary-foreground"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary-foreground)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary-foreground)) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit]
          bg-[linear-gradient(-75deg,hsl(var(--primary-foreground)/10%)_calc(var(--x)+20%),hsl(var(--primary-foreground)/50%)_calc(var(--x)+25%),hsl(var(--primary-foreground)/10%)_calc(var(--x)+100%))]
          p-px"
      ></span>
    </motion.button>
  );
};

export default ShinyButton;
