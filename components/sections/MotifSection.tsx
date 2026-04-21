"use client";

import { motion } from "motion/react";

import { DerivedImageLayer } from "@/components/DerivedImageLayer";
import { FloatingLayer } from "@/components/FloatingLayer";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { derivedAssets, siteContent } from "@/config/content";
import { infectedTheme } from "@/config/theme";

export function MotifSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-24 md:px-10 md:pb-36 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle
            eyebrow="Motif / Keywords"
            title={siteContent.motifs.title}
            description="The bottom of the page should feel like leftover system language rather than a neat footer. Keywords remain as debris instead of navigation."
          />
        </Reveal>

        <div className="relative mt-16 min-h-[28rem]">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <DerivedImageLayer asset={derivedAssets.darkCity} className="scale-[1.24]" />
            <DerivedImageLayer asset={derivedAssets.silhouetteCrop} className="scale-[1.08]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
          </div>
          {siteContent.motifs.words.map((motif, index) => (
            <FloatingLayer key={motif} delay={index * 0.2} className="absolute">
              <motion.span
                className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 font-display text-xl uppercase tracking-[0.28em] text-[var(--color-text-primary)] md:text-3xl"
                style={{
                  left: `${4 + (index % 3) * 23}%`,
                  top: `${10 + Math.floor(index / 2) * 23 + (index % 2) * 7}%`,
                  position: "absolute",
                }}
                whileHover={{
                  x: infectedTheme.hoverShift,
                  borderColor: infectedTheme.accent,
                  color: infectedTheme.textPrimary,
                }}
                transition={{ duration: infectedTheme.motionFast, ease: infectedTheme.easingPrimary }}
              >
                {motif}
              </motion.span>
            </FloatingLayer>
          ))}
          <div
            className="absolute bottom-0 right-0 max-w-sm border-l pl-6 text-sm leading-7 text-[var(--color-text-secondary)]"
            style={{ borderColor: "rgba(139, 17, 22, 0.35)" }}
          >
            {siteContent.motifs.linger}
          </div>
        </div>
      </div>
    </section>
  );
}
