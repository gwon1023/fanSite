export type CharacterThemeTokens = {
  background: string;
  backgroundSecondary: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  accentSoft: string;
  panelBg: string;
  panelBorder: string;
  panelBlur: string;
  glowColor: string;
  noiseOpacity: number;
  motionFast: number;
  motionMedium: number;
  motionSlow: number;
  easingPrimary: [number, number, number, number];
  hoverShift: number;
  glitchOpacity: number;
};

export const infectedTheme: CharacterThemeTokens = {
  background: "#131111",
  backgroundSecondary: "#1a1718",
  textPrimary: "#f2ece7",
  textSecondary: "#958980",
  accent: "#8b1116",
  accentSoft: "#7d3d45",
  panelBg: "rgba(26, 23, 24, 0.62)",
  panelBorder: "rgba(188, 166, 157, 0.16)",
  panelBlur: "14px",
  glowColor: "rgba(139, 17, 22, 0.18)",
  noiseOpacity: 0.11,
  motionFast: 0.28,
  motionMedium: 0.82,
  motionSlow: 1.28,
  easingPrimary: [0.21, 0.0, 0.12, 1.0],
  hoverShift: 8,
  glitchOpacity: 0.22,
};
