"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

import { motionPreset } from "@/config/motion";
import { infectedTheme } from "@/config/theme";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export function Reveal({ children, className, delay = 0, amount = 0.2 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{
        duration: motionPreset.sectionRevealDuration,
        ease: infectedTheme.easingPrimary,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
