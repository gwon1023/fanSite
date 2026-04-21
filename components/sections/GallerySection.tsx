"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { DerivedImageLayer } from "@/components/DerivedImageLayer";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ThemedPanel } from "@/components/ThemedPanel";
import { derivedAssets, evidenceItems, siteContent } from "@/config/content";
import { motionPreset } from "@/config/motion";
import { infectedTheme } from "@/config/theme";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = evidenceItems[activeIndex];
  const primaryAsset = derivedAssets[activeItem.primaryAsset];
  const secondaryAsset = activeItem.secondaryAsset ? derivedAssets[activeItem.secondaryAsset] : null;

  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl space-y-14">
        <Reveal>
          <SectionTitle
            eyebrow="Gallery / Evidence"
            title={siteContent.evidence.title}
            description="Each card is a derived observation, not a separate asset. The same two files keep reappearing at different distances, as if the archive cannot stop reusing what infected it."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal delay={0.08}>
            <ThemedPanel className="relative overflow-hidden p-5">
              <div className="relative aspect-[0.84] overflow-hidden rounded-[22px] border border-white/10">
                <DerivedImageLayer asset={primaryAsset} className="transition-[filter,transform] duration-700" />
                {secondaryAsset ? (
                  <DerivedImageLayer asset={secondaryAsset} className="transition-[filter,transform] duration-700" />
                ) : null}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/35 to-transparent p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--color-text-secondary)]">
                    active evidence
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--color-text-primary)]">
                    {activeItem.title}
                  </p>
                  <p className="mt-3 max-w-sm text-xs uppercase tracking-[0.18em] text-[var(--color-text-secondary)]">
                    {activeItem.note}
                  </p>
                </div>
              </div>
            </ThemedPanel>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {evidenceItems.map((item, index) => (
              <Reveal key={item.id} delay={0.12 + index * 0.08}>
                <motion.button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group text-left",
                    index === 1 ? "md:translate-y-8" : "",
                    index === 2 ? "md:-translate-y-4" : ""
                  )}
                  whileHover={{
                    x: index % 2 === 0 ? motionPreset.hoverShiftDistance : -motionPreset.hoverShiftDistance,
                    y: -2,
                  }}
                  transition={{ duration: infectedTheme.motionFast, ease: infectedTheme.easingPrimary }}
                >
                  <ThemedPanel
                    className="overflow-hidden p-4 transition-colors duration-500"
                    style={activeIndex === index ? { borderColor: "rgba(139, 17, 22, 0.4)" } : undefined}
                  >
                    <div className="relative aspect-[1.1] overflow-hidden rounded-[20px] border border-white/10">
                      <DerivedImageLayer
                        asset={derivedAssets[item.primaryAsset]}
                        className="opacity-85 transition duration-700 group-hover:opacity-100"
                      />
                      {item.secondaryAsset ? (
                        <DerivedImageLayer asset={derivedAssets[item.secondaryAsset]} className="opacity-60 transition duration-700" />
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/65 to-transparent" />
                    </div>
                    <div className="flex items-center justify-between gap-4 px-1 pb-1 pt-4">
                      <span className="text-[0.68rem] uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
                        {item.label}
                      </span>
                      <span
                        className="h-px w-10 bg-white/10 transition-all duration-500"
                        style={activeIndex === index ? { background: "rgba(139, 17, 22, 0.7)" } : undefined}
                      />
                    </div>
                    <p className="px-1 text-sm uppercase tracking-[0.18em] text-[var(--color-text-primary)]">
                      {item.title}
                    </p>
                  </ThemedPanel>
                </motion.button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
