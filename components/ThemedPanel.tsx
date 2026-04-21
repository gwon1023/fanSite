import { CSSProperties, ReactNode } from "react";

import { motionPreset } from "@/config/motion";
import { infectedTheme } from "@/config/theme";
import { cn } from "@/lib/utils";

type ThemedPanelProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function ThemedPanel({ children, className, style }: ThemedPanelProps) {
  return (
    <div
      className={cn("rounded-[28px] border shadow-haze", className)}
      style={{
        background: infectedTheme.panelBg,
        borderColor: infectedTheme.panelBorder,
        backdropFilter: `blur(${motionPreset.panelBlurAmount}px)`,
        boxShadow: `0 18px 60px rgba(0,0,0,0.34), 0 0 ${motionPreset.accentGlowStrength}px ${infectedTheme.glowColor}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
