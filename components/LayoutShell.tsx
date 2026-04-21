import type { ReactNode } from "react";

import { DerivedImageLayer } from "@/components/DerivedImageLayer";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { derivedAssets } from "@/config/content";
import { motionPreset } from "@/config/motion";

type LayoutShellProps = {
  children: ReactNode;
};

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <>
      <NoiseOverlay />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          <DerivedImageLayer asset={derivedAssets.fullCity} className="scale-[1.08]" priority />
        </div>
        <div className="absolute inset-0">
          <DerivedImageLayer asset={derivedAssets.redHazeCity} className="scale-[1.18]" />
        </div>
        <div className="absolute inset-0">
          <DerivedImageLayer asset={derivedAssets.darkCity} className="scale-[1.12]" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(6,6,8,${motionPreset.bgDarkness}) 0%, rgba(10,10,12,0.08) 34%, rgba(6,6,8,0.72) 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, transparent 32%, rgba(0,0,0,${motionPreset.vignetteStrength}) 100%)`,
          }}
        />
        <div
          className="absolute inset-x-0 top-[-10%] h-[46rem] blur-3xl"
          style={{ background: `radial-gradient(circle, rgba(139,17,22,${motionPreset.redGlowOpacity}) 0%, rgba(139,17,22,0) 70%)` }}
        />
        <div
          className="absolute inset-0"
          style={{
            opacity: motionPreset.overlayOpacity,
            backdropFilter: `blur(${motionPreset.blurAmountBg}px)`,
          }}
        />
        <div className="absolute left-[-10%] top-[18%] h-72 w-72 rounded-full border border-white/5" />
        <div className="absolute inset-x-[8%] top-[33%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute inset-x-[16%] top-[62%] h-px bg-gradient-to-r from-transparent to-transparent"
          style={{ backgroundImage: "linear-gradient(to right, transparent, rgba(139, 17, 22, 0.2), transparent)" }}
        />
      </div>
      <main className="relative z-20">{children}</main>
    </>
  );
}
