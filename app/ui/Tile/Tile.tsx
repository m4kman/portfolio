"use client";
import * as React from "react";
import { motion } from "framer-motion";

export function Tile() {
  return (
    <motion.div
      whileHover={{ backgroundColor: "#a5b4fc" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="aspect-square bg-inherit"
    />
  );
}

export default Tile;
