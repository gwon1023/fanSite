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
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionTitle
            eyebrow="Motif / Keywords"
            title={siteContent.motifs.title}
            description="The bottom of the page should feel like leftover system language rather than a neat footer. Keywords remain as debris instead of navigation."
          />
        </Reveal>

        <div className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-black/10 px-6 py-8 md:px-10 md:py-10">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <DerivedImageLayer asset={derivedAssets.darkCity} className="scale-[1.24]" />
            <DerivedImageLayer asset={derivedAssets.redHazeCity} className="scale-[1.14]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/24 via-black/44 to-black/76" />
          </div>
          <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.motifs.words.map((motif, index) => (
              <FloatingLayer key={motif} delay={index * 0.16} className="relative">
              <motion.span
                className="flex min-h-[6.5rem] items-center rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-4 font-display text-lg uppercase tracking-[0.24em] text-[var(--color-text-primary)] md:text-2xl"
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
          </div>
          <div
            className="relative mt-8 max-w-md border-l pl-6 text-sm leading-7 text-[var(--color-text-secondary)] md:ml-auto md:mt-10"
            style={{ borderColor: "rgba(139, 17, 22, 0.35)" }}
          >
            {siteContent.motifs.linger}
          </div>
        </div>
      </div>
    </section>
  );
}
