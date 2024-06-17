"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../lamp";

import ContactCard from "../ContactCard";

function Contact() {
  return (
    <div className="relative flex flex-col items-center">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center font-medium ~text-6xl/8xl"
        >
          <span className="bg-gradient-to-br from-foreground to-gray-500 bg-clip-text text-transparent">
            Let&apos;s build
            <br /> something together
          </span>
        </motion.h1>
      </LampContainer>

      <div className="w-[90%] -translate-y-28 md:w-fit 2xl:-translate-y-56">
        <ContactCard />
      </div>
    </div>
  );
}

export default Contact;
