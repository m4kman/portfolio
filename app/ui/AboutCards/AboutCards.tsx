"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { ABOUT } from "@/app/data";

function AboutCards({}) {
  const [cards, setCards] = useState(ABOUT);

  function moveCardToEnd() {
    setCards((prevCards) => {
      const shallow = [...prevCards];
      const first = shallow.shift()!;
      shallow.push(first);
      console.log(shallow);
      return shallow;
    });
  }

  return cards.map(({ id, description, number }, i) => {
    let rotateX;
    let translateX = "0";
    let translateY = "0";
    let z = 0;
    if (i === 0) {
      rotateX = 0;
      translateX = "50px";
    } else if (i === 1) {
      rotateX = -2;
      translateX = "25px";
      translateY = "25px";
    } else if (i === 2) {
      rotateX = 6;
      z = 999;
      translateY = "15px";
    } else if (i === 3) {
      rotateX = 3;
      translateX = "-45px";
      translateY = "15px";
      z = 99;
    } else {
      rotateX = -9;
      translateX = "-70px";
      translateY = "-15px";
    }

    const draggable = i === 0;

    return (
      <motion.div
        className="absolute"
        drag={draggable}
        key={id}
        dragSnapToOrigin
        onDragEnd={moveCardToEnd}
        dragMomentum={false}
        dragTransition={{ bounceStiffness: 700, bounceDamping: 80 }}
        whileDrag={{ rotate: 0, scale: 1.1, zIndex: 999 }}
      >
        <motion.div
          className="relative grid h-[500px] w-[380px] place-items-center rounded bg-card
            text-card-foreground shadow-lg shadow-black/25"
          animate={{
            top: i * -10,
            zIndex: 5 - i,
            transform: `rotateX(${rotateX}deg) translateX(${translateX}) translateY(${translateY})`,
          }}
          style={{
            transformOrigin: "top center",
            cursor: i === 0 ? "grab" : "default",
          }}
        >
          <span className="absolute left-0 top-0 px-6 py-4 font-dancing font-semibold">
            {number}
          </span>
          <h3 className="max-w-[13ch] text-center font-chakra text-[22px] leading-snug">
            {description}
          </h3>
        </motion.div>
      </motion.div>
    );
  });
}

export default AboutCards;
