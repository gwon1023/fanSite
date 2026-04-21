"use client";

import { motion } from "motion/react";

import { DerivedImageLayer } from "@/components/DerivedImageLayer";
import { FloatingLayer } from "@/components/FloatingLayer";
import { GlitchAccentText } from "@/components/GlitchAccentText";
import { derivedAssets, siteContent } from "@/config/content";
import { motionPreset } from "@/config/motion";
import { infectedTheme } from "@/config/theme";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-24 md:px-10 md:pt-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <DerivedImageLayer asset={derivedAssets.fullCity} className="scale-[1.2]" priority />
        </div>
        <div className="absolute inset-0 opacity-80">
          <DerivedImageLayer asset={derivedAssets.redHazeCity} className="scale-[1.34]" />
        </div>
        <div className="absolute right-[-8%] top-[-4%] h-[108%] w-[64%]">
          <DerivedImageLayer asset={derivedAssets.fullClose} className="origin-center" priority />
        </div>
        <div className="absolute right-[8%] top-[12%] h-[34%] w-[24%]">
          <DerivedImageLayer asset={derivedAssets.eyeCrop} className="opacity-60" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(8,8,10,0.84) 0%, rgba(8,8,10,0.4) 42%, rgba(8,8,10,0.62) 100%)",
          }}
        />
      </div>
      <div className="mx-auto grid min-h-[82vh] max-w-7xl items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="order-2 max-w-xl space-y-6 lg:order-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: motionPreset.heroRevealDuration, delay: 0.2 }}
        >
          <motion.p
            className="text-[0.7rem] uppercase tracking-[0.44em] text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: infectedTheme.motionMedium, delay: 0.48, ease: infectedTheme.easingPrimary }}
          >
            {hero.codename}
          </motion.p>
          <h1 className="font-display text-[3.9rem] uppercase leading-[0.9] tracking-[0.2em] text-[var(--color-text-primary)] sm:text-[5.8rem] md:text-[7.4rem]">
            <GlitchAccentText text={hero.name} />
          </h1>
          <motion.p
            className="max-w-lg text-sm leading-7 text-[var(--color-text-primary)] md:text-base"
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: motionPreset.heroRevealDuration,
              delay: 0.78,
              ease: infectedTheme.easingPrimary,
            }}
          >
            {hero.statement}
          </motion.p>
          <motion.p
            className="max-w-md text-[0.78rem] uppercase tracking-[0.24em] text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: infectedTheme.motionMedium, delay: 1.02, ease: infectedTheme.easingPrimary }}
          >
            {hero.subline}
          </motion.p>
          <motion.div
            className="flex items-center gap-4 pt-8 text-[0.72rem] uppercase tracking-[0.36em] text-[var(--color-text-secondary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: infectedTheme.motionMedium, delay: 1.16 }}
          >
            <span className="h-px w-12" style={{ background: "rgba(139, 17, 22, 0.7)" }} />
            <span>scroll to continue</span>
          </motion.div>
        </motion.div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <FloatingLayer className="relative w-full max-w-[40rem]" delay={0.45}>
            <motion.div
              className="relative aspect-[0.86] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/20 shadow-ember"
              initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: motionPreset.heroRevealDuration, delay: 0.32, ease: infectedTheme.easingPrimary }}
            >
              <div className="absolute inset-0">
                <DerivedImageLayer asset={derivedAssets.blurredCity} className="scale-[1.3]" />
              </div>
              <div className="absolute inset-0">
                <DerivedImageLayer asset={derivedAssets.fullClose} />
              </div>
              <div className="absolute inset-0 translate-x-[4px]">
                <DerivedImageLayer
                  asset={{ ...derivedAssets.fullClose, opacity: motionPreset.colorSplitStrength * 4.2, blendMode: "screen" }}
                />
              </div>
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]/80" />
            </motion.div>
            <motion.div
              aria-hidden="true"
              className="absolute -left-4 top-[18%] h-24 w-24 rounded-full border"
              style={{ borderColor: "rgba(139, 17, 22, 0.25)" }}
              animate={{ x: [0, motionPreset.hoverShiftDistance, 0], y: [0, -4, 0] }}
              transition={{
                duration: motionPreset.floatDuration + 1.8,
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
