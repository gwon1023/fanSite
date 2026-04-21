import { DerivedImageLayer } from "@/components/DerivedImageLayer";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ThemedPanel } from "@/components/ThemedPanel";
import { derivedAssets, siteContent } from "@/config/content";

export function NarrativeSection() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl space-y-12">
        <Reveal>
          <SectionTitle
            eyebrow="World / Narrative"
            title={siteContent.narrative.title}
            description="Fragments sit at different depths of the same corridor, as if the world itself is leaving delayed notes after sustained contact."
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal delay={0.1}>
            <ThemedPanel className="relative space-y-6 overflow-hidden p-8 md:p-10">
              <div className="absolute inset-0">
                <DerivedImageLayer asset={derivedAssets.verticalCorridor} className="scale-[1.08]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/75" />
              <div className="relative space-y-6">
                <p
                  className="border-l pl-4 text-sm uppercase tracking-[0.28em] text-[var(--color-text-primary)]"
                  style={{ borderColor: "rgba(139, 17, 22, 0.4)" }}
                >
                  {siteContent.narrative.highlight}
                </p>
                <div className="space-y-4 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {siteContent.narrative.fragments.map((fragment, index) => (
                    <p
                      key={fragment}
                      className={
                        index === 0
                          ? "max-w-[21rem]"
                          : index === 1
                            ? "ml-8 max-w-[24rem]"
                            : index === 2
                              ? "ml-4 max-w-[20rem]"
                              : "ml-12 max-w-[24rem]"
                      }
                    >
                      {fragment}
                    </p>
                  ))}
                </div>
              </div>
            </ThemedPanel>
          </Reveal>

          <div className="grid gap-6">
            {siteContent.narrative.notes.map((note, index) => (
              <Reveal key={note} delay={0.18 + index * 0.08}>
                <ThemedPanel className={index === 1 ? "ml-auto max-w-[34rem] p-8" : "max-w-[34rem] p-8"}>
                  <p className="text-[0.8rem] uppercase tracking-[0.24em] text-[var(--color-text-secondary)]">
                    {note}
                  </p>
                </ThemedPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
