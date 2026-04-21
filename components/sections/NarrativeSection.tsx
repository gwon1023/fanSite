import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ThemedPanel } from "@/components/ThemedPanel";
import { siteContent } from "@/config/content";

export function NarrativeSection() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl space-y-14">
        <Reveal>
          <SectionTitle
            eyebrow="World / Narrative"
            title="Recovered Fragments From A System That Stayed Too Close"
            description="연속적인 설명보다 기록 조각, 관찰 메모, 남겨진 문장을 중심에 둡니다. 세계관과 캐릭터가 분리되지 않는 감각을 만드는 섹션입니다."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={0.1}>
            <ThemedPanel className="space-y-6 p-8 md:p-10">
              <p
                className="border-l pl-4 text-sm uppercase tracking-[0.28em] text-[var(--color-text-primary)]"
                style={{ borderColor: "rgba(139, 17, 22, 0.4)" }}
              >
                {siteContent.narrative.highlight}
              </p>
              <div className="space-y-5 text-sm leading-7 text-[var(--color-text-secondary)]">
                {siteContent.narrative.fragments.map((fragment, index) => (
                  <p key={fragment} className={index === 2 ? "ml-6 max-w-[24rem]" : "max-w-[28rem]"}>
                    {fragment}
                  </p>
                ))}
              </div>
            </ThemedPanel>
          </Reveal>

          <div className="grid gap-5">
            {siteContent.narrative.notes.map((note, index) => (
              <Reveal key={note} delay={0.18 + index * 0.08}>
                <ThemedPanel className={index === 1 ? "ml-auto max-w-[34rem] p-7" : "max-w-[32rem] p-7"}>
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
