"use client";

import { motion } from "motion/react";

import { infectedTheme } from "@/config/theme";

type GlitchAccentTextProps = {
  text: string;
  className?: string;
};

export function GlitchAccentText({ text, className }: GlitchAccentTextProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: infectedTheme.motionSlow, ease: infectedTheme.easingPrimary, delay: 0.45 }}
    >
      <span className="relative inline-flex">
        <span>{text}</span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[0.04em] top-[0.03em] text-[var(--color-accent)]"
          style={{ opacity: infectedTheme.glitchOpacity }}
        >
          {text}
        </span>
      </span>
    </motion.span>
  );
}
