"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { ABOUT } from "@/app/data";

function AboutCards({}) {
  const [cards, setCards] = useState(ABOUT);
  // let rotateX;
  // let translateX = "0";
  // let translateY = "0";
  // let z = 0;
  // if (i === 0) {
  //   rotateX = 4;
  //   translateX = "50px";
  // } else if (i === 1) {
  //   rotateX = 3;
  //   translateX = "25px";
  //   translateY = "25px";
  // } else if (i === 2) {
  //   rotateX = 1;
  //   z = 999;
  //   translateY = "15px";
  // } else if (i === 3) {
  //   rotateX = -5;
  //   translateX = "-45px";
  //   translateY = "15px";
  //   z = 99;
  // } else {
  //   rotateX = -9;
  //   translateX = "-70px";
  //   translateY = "-15px";
  // }

  function moveCardToEnd() {
    setCards((prevCards) => {
      const shallow = [...prevCards];
      const first = shallow.shift()!;
      shallow.push(first);
      console.log(shallow);
      return shallow;
    });
  }

  return cards.map(({ id, description }, i) => (
    <motion.div
      drag={i === 0}
      key={id}
      dragSnapToOrigin
      onDragEnd={moveCardToEnd}
      dragMomentum={false}
      className="absolute grid h-[500px] w-[380px] place-items-center rounded bg-card
        text-card-foreground shadow-lg shadow-black/25"
      animate={{ top: i * -10, scale: 1 - i * 0.03, zIndex: 5 - i }}
      style={{
        transformOrigin: "top center",
        // transform: `rotate(${rotateX}deg) translateX(${translateX}) translateY(${translateY})`,
        // zIndex: z,
      }}
    >
      <h3 className="max-w-[14ch] text-center font-chakra text-[22px] leading-snug">
        {description}
      </h3>
    </motion.div>
  ));
}

export default AboutCards;
