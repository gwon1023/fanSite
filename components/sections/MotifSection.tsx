"use client";

import { motion } from "motion/react";

import { FloatingLayer } from "@/components/FloatingLayer";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { siteContent } from "@/config/content";
import { infectedTheme } from "@/config/theme";

export function MotifSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-24 md:px-10 md:pb-36 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle
            eyebrow="Motif / Keywords"
            title="What Remains After The Page Tries To Recover"
            description="마지막 섹션은 목록보다 설치물에 가깝게 두고, 캐릭터의 성질이 잔향처럼 남는 인상을 목표로 합니다."
          />
        </Reveal>

        <div className="relative mt-16 min-h-[28rem]">
          {siteContent.motifs.map((motif, index) => (
            <FloatingLayer key={motif} delay={index * 0.2} className="absolute">
              <motion.span
                className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 font-display text-xl uppercase tracking-[0.28em] text-[var(--color-text-primary)] md:text-3xl"
                style={{
                  left: `${4 + (index % 3) * 28}%`,
                  top: `${10 + Math.floor(index / 2) * 26 + (index % 2) * 7}%`,
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
            She leaves the layout mostly intact. The damage lives in the hesitation between one section and the next.
          </div>
        </div>
      </div>
    </section>
  );
}
