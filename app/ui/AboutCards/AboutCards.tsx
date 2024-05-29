"use client";
import { useState, useId } from "react";
import { motion } from "framer-motion";

import { ABOUT } from "@/app/data";

function AboutCards({ isStacked }: { isStacked: boolean }) {
  const [cards, setCards] = useState(ABOUT);
  const cardId = useId();

  function moveCardToEnd() {
    setCards((prevCards) => {
      const shallow = [...prevCards];
      const first = shallow.shift()!;
      shallow.push(first);
      return shallow;
    });
  }

  const dragTransition = isStacked
    ? { bounceStiffness: 700, bounceDamping: 80 }
    : {};

  return cards.map(({ id, description, number }, i) => {
    let rotateX;
    let translateX = "0";
    let translateY = "0";
    let z = 0;
    if (i === 0) {
      isStacked ? (rotateX = 0) : (rotateX = 4);
      isStacked ? null : (translateX = "50px");
    } else if (i === 1) {
      isStacked ? (rotateX = -1) : (rotateX = 3);
      translateY = "15px";
      translateX = "35px";
    } else if (i === 2) {
      isStacked ? (rotateX = 1) : (rotateX = 1);
      z = 999;
      translateY = "15px";
      translateX = "10px";
    } else if (i === 3) {
      isStacked ? (rotateX = -5) : (rotateX = -5);
      translateX = "-45px";
      translateY = "20px";
      z = 99;
    } else {
      isStacked ? (rotateX = -5) : (rotateX = -9);
      translateX = "-85px";
      translateY = "-10px";
    }

    const draggable = i === 0;
    const layoutId = `${cardId}-${i}`;

    return (
      <motion.div
        layout={true}
        layoutId={layoutId}
        className={isStacked ? "absolute" : "static"}
        drag={isStacked ? draggable : true}
        key={id}
        dragSnapToOrigin
        onDragEnd={isStacked ? moveCardToEnd : undefined}
        dragMomentum={false}
        dragTransition={dragTransition}
        whileDrag={{ rotate: 0, scale: 1.1, zIndex: 999999 }}
        animate={{
          zIndex: isStacked ? 5 - i : z,
        }}
      >
        <motion.div
          className="relative grid h-[500px] w-[340px] place-items-center rounded
            text-card-foreground shadow-lg shadow-black/25"
          animate={{
            transform: `rotate(${rotateX}deg) translateX(${translateX}) translateY(${translateY})`,
          }}
          whileDrag={{ rotate: 0 }}
          style={{
            transformOrigin: "top center",
            cursor: isStacked ? (i === 0 ? "grab" : "default") : "grab",
            backgroundColor: !isStacked
              ? "hsl(var(--card) / 1)"
              : i === 0
                ? "hsl(var(--card))"
                : "hsl(var(--card) / 0.7)",
            backdropFilter: isStacked ? "blur(64px)" : undefined,
          }}
        >
          <motion.span
            style={{ display: isStacked ? "inline-block" : "none" }}
            className="absolute left-0 top-0 px-6 py-4 font-dancing font-semibold"
          >
            {number}
          </motion.span>
          <h3 className="max-w-[13ch] text-center font-chakra text-[22px] leading-snug">
            {description}
          </h3>
        </motion.div>
      </motion.div>
    );
  });
}

export default AboutCards;
