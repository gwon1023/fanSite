"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ThemedPanel } from "@/components/ThemedPanel";
import { galleryItems } from "@/config/content";
import { motionPreset } from "@/config/motion";
import { infectedTheme } from "@/config/theme";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = galleryItems[activeIndex];

  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl space-y-14">
        <Reveal>
          <SectionTitle
            eyebrow="Gallery"
            title="Evidence Rather Than Collection"
            description="이미지는 예쁜 정리본이 아니라, 남겨진 감정의 증거물처럼 다룹니다. 선택 상태만 아주 얇게 붉은 반응을 갖도록 제한합니다."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal delay={0.08}>
            <ThemedPanel className="relative overflow-hidden p-5">
              <div className="relative aspect-[0.84] overflow-hidden rounded-[22px] border border-white/10">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  className="object-cover transition-[filter,transform] duration-700"
                  style={{ objectPosition: activeItem.objectPosition }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/35 to-transparent p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--color-text-secondary)]">
                    active evidence
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--color-text-primary)]">
                    {activeItem.caption}
                  </p>
                </div>
              </div>
            </ThemedPanel>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {galleryItems.map((item, index) => (
              <Reveal key={item.caption} delay={0.12 + index * 0.08}>
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
                    y: -3,
                  }}
                  transition={{ duration: infectedTheme.motionFast, ease: infectedTheme.easingPrimary }}
                >
                  <ThemedPanel
                    className="overflow-hidden p-4 transition-colors duration-500"
                    style={activeIndex === index ? { borderColor: "rgba(139, 17, 22, 0.4)" } : undefined}
                  >
                    <div className="relative aspect-[1.1] overflow-hidden rounded-[20px] border border-white/10">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover opacity-85 transition duration-700 group-hover:opacity-100"
                        style={{ objectPosition: item.objectPosition }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/65 to-transparent" />
                    </div>
                    <div className="flex items-center justify-between gap-4 px-1 pb-1 pt-4">
                      <span className="text-[0.68rem] uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
                        {item.variant}
                      </span>
                      <span
                        className="h-px w-10 bg-white/10 transition-all duration-500"
                        style={activeIndex === index ? { background: "rgba(139, 17, 22, 0.7)" } : undefined}
                      />
                    </div>
                    <p className="px-1 text-sm uppercase tracking-[0.18em] text-[var(--color-text-primary)]">
                      {item.caption}
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
