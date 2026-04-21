import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";

import { LenisProvider } from "@/components/LenisProvider";
import { infectedTheme } from "@/config/theme";

import "./globals.css";

export const metadata: Metadata = {
  title: "KARAN / infected fan site prototype",
  description: "A web-art fan site prototype where the UI feels subtly contaminated by the character itself.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        style={
          {
            "--color-bg": infectedTheme.background,
            "--color-bg-secondary": infectedTheme.backgroundSecondary,
            "--color-text-primary": infectedTheme.textPrimary,
            "--color-text-secondary": infectedTheme.textSecondary,
            "--color-accent": infectedTheme.accent,
            "--color-accent-soft": infectedTheme.accentSoft,
            "--panel-bg": infectedTheme.panelBg,
            "--panel-border": infectedTheme.panelBorder,
            "--panel-blur": infectedTheme.panelBlur,
            "--glow-color": infectedTheme.glowColor,
          } as CSSProperties
        }
      >
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
