import { type HTMLMotionProps, motion } from "motion/react";

type AnimatedTextProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export const AnimatedText = ({
  children,
  delay = 0,
  ...props
}: AnimatedTextProps) => (
  <motion.div
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
    transition={{ duration: 0.3, ease: "easeOut", delay }}
    {...props}
  >
    {children}
  </motion.div>
);
