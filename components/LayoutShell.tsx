import { ReactNode } from "react";

import { NoiseOverlay } from "@/components/NoiseOverlay";

type LayoutShellProps = {
  children: ReactNode;
};

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <>
      <NoiseOverlay />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-x-0 top-[-10%] h-[46rem] bg-radial-blood opacity-70 blur-3xl" />
        <div className="absolute left-[-10%] top-[18%] h-72 w-72 rounded-full border border-white/5" />
        <div
          className="absolute right-[8%] top-[46%] h-80 w-80 rounded-full border blur-sm"
          style={{ borderColor: "rgba(139, 17, 22, 0.1)" }}
        />
        <div className="absolute inset-x-[8%] top-[33%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <main className="relative z-20">{children}</main>
    </>
  );
}
