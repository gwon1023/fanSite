import { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[var(--color-text-secondary)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl uppercase tracking-[0.18em] text-[var(--color-text-primary)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <div className="max-w-xl text-sm leading-7 text-[var(--color-text-secondary)] md:text-base">
          {description}
        </div>
      ) : null}
    </div>
  );
}
