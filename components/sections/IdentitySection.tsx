"use client";

import { motion } from "motion/react";

import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ThemedPanel } from "@/components/ThemedPanel";
import { motionPreset } from "@/config/motion";
import { siteContent } from "@/config/content";
import { infectedTheme } from "@/config/theme";

export function IdentitySection() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionTitle
            eyebrow="Identity"
            title="The Character Leaks Into The Frame"
            description="설명은 적게 두고, 표면과 라벨이 먼저 말하게 둡니다. 정체성은 문장보다 배치와 잔광에서 먼저 느껴져야 합니다."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <ThemedPanel className="relative overflow-hidden p-8 md:p-10">
            <div className="absolute right-8 top-8 h-px w-28" style={{ background: "rgba(139, 17, 22, 0.5)" }} />
            <div className="grid gap-10">
              <div className="relative min-h-[14rem]">
                {siteContent.identity.keywords.map((keyword, index) => (
                  <motion.span
                    key={keyword}
                    className="absolute rounded-full border px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em]"
                    style={{
                      top: `${12 + index * 16}%`,
                      left: `${index % 2 === 0 ? 4 + index * 8 : 36 + index * 7}%`,
                      borderColor: index === 1 ? "rgba(139,17,22,0.35)" : "rgba(188,166,157,0.15)",
                      color: index === 1 ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                      background: index === 1 ? "rgba(139,17,22,0.12)" : "rgba(255,255,255,0.02)",
                    }}
                    whileHover={{
                      x: infectedTheme.hoverShift,
                      color: infectedTheme.textPrimary,
                      borderColor: infectedTheme.accent,
                    }}
                    transition={{ duration: infectedTheme.motionFast, ease: infectedTheme.easingPrimary }}
                  >
                    {keyword}
                  </motion.span>
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-5 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {siteContent.identity.intro.map((line, index) => (
                    <p key={line} className={index === 1 ? "text-[var(--color-text-primary)]" : undefined}>
                      {line}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap content-start gap-3">
                  {siteContent.identity.labels.map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-text-secondary)]"
                      style={{ transform: `translateY(${label.length % 2 === 0 ? "0px" : "4px"})` }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ThemedPanel>
        </Reveal>
      </div>
    </section>
  );
}
