"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type SectionRevealProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function SectionReveal({ children, delay = 0 }: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className="landing-section-reveal">{children}</div>;
  }

  return (
    <motion.div
      className="landing-section-reveal"
      initial={{ y: 24, scale: 0.995 }}
      whileInView={{ y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.24, margin: "-12% 0px -12% 0px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
