"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { FloatingLayer } from "@/components/FloatingLayer";
import { GlitchAccentText } from "@/components/GlitchAccentText";
import { motionPreset } from "@/config/motion";
import { siteContent } from "@/config/content";
import { infectedTheme } from "@/config/theme";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-24 md:px-10 md:pt-32">
      <div className="mx-auto grid min-h-[82vh] max-w-7xl items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          className="order-2 max-w-xl space-y-8 lg:order-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: infectedTheme.motionSlow, delay: 0.3 }}
        >
          <motion.p
            className="text-[0.7rem] uppercase tracking-[0.44em] text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: infectedTheme.motionMedium, delay: 0.6, ease: infectedTheme.easingPrimary }}
          >
            {hero.codename}
          </motion.p>
          <h1 className="font-display text-[3.9rem] uppercase leading-[0.9] tracking-[0.2em] text-[var(--color-text-primary)] sm:text-[5.8rem] md:text-[7.4rem]">
            <GlitchAccentText text={hero.name} />
          </h1>
          <motion.p
            className="max-w-lg text-sm leading-8 text-[var(--color-text-secondary)] md:text-base"
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: infectedTheme.motionSlow,
              delay: 0.95,
              ease: infectedTheme.easingPrimary,
            }}
          >
            {hero.statement}
          </motion.p>
          <motion.div
            className="flex items-center gap-4 pt-8 text-[0.72rem] uppercase tracking-[0.36em] text-[var(--color-text-secondary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: infectedTheme.motionMedium, delay: 1.2 }}
          >
            <span className="h-px w-12" style={{ background: "rgba(139, 17, 22, 0.7)" }} />
            <span>scroll to continue</span>
          </motion.div>
        </motion.div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <FloatingLayer className="relative w-full max-w-[34rem]" delay={0.6}>
            <motion.div
              className="relative aspect-[0.8] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/20 shadow-ember"
              initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.45, ease: infectedTheme.easingPrimary }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]/80" />
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "linear-gradient(130deg, rgba(139,17,22,0.16), transparent 28%, transparent 72%, rgba(139,17,22,0.12))",
                }}
              />
              <div
                className="absolute inset-y-0 left-[24%] w-px blur-[0.5px]"
                style={{ background: "rgba(139, 17, 22, 0.25)" }}
              />
              <Image
                src="/images/character/img1.jpg"
                alt="Main character illustration"
                fill
                priority
                className="object-cover object-center opacity-90"
              />
            </motion.div>
            <motion.div
              aria-hidden="true"
              className="absolute -left-4 top-[18%] h-24 w-24 rounded-full border"
              style={{ borderColor: "rgba(139, 17, 22, 0.25)" }}
              animate={{ x: [0, motionPreset.hoverShiftDistance, 0], y: [0, -4, 0] }}
              transition={{
                duration: motionPreset.floatingDuration + 1.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: infectedTheme.easingPrimary,
              }}
            />
          </FloatingLayer>
        </div>
      </div>
    </section>
  );
}
