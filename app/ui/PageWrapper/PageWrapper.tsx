"use client";
import { motion } from "framer-motion";

function PageWrapper({
  children,
  y = 20,
}: Readonly<{ children: React.ReactNode; y?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      exit={{ opacity: 0, y: y }}
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;
