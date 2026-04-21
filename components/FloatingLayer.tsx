"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { motionPreset } from "@/config/motion";
import { infectedTheme } from "@/config/theme";

type FloatingLayerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FloatingLayer({ children, className, delay = 0 }: FloatingLayerProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-motionPreset.floatAmplitude / 2, motionPreset.floatAmplitude / 2, -motionPreset.floatAmplitude / 2],
      }}
      transition={{
        duration: motionPreset.floatDuration,
        ease: infectedTheme.easingPrimary,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
