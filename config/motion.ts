export type MotionPreset = {
  bgDarkness: number;
  overlayOpacity: number;
  redGlowOpacity: number;
  noiseOpacity: number;
  heroRevealDuration: number;
  sectionRevealDuration: number;
  floatAmplitude: number;
  floatDuration: number;
  hoverShiftDistance: number;
  borderDelayDuration: number;
  blurAmountSoft: number;
  blurAmountBg: number;
  vignetteStrength: number;
  colorSplitStrength: number;
  panelBlurAmount: number;
  accentGlowStrength: number;
  textRevealStagger: number;
};

export const motionPreset: MotionPreset = {
  bgDarkness: 0.24,
  overlayOpacity: 0.035,
  redGlowOpacity: 0.14,
  noiseOpacity: 0.11,
  heroRevealDuration: 1.45,
  sectionRevealDuration: 1.08,
  floatAmplitude: 12,
  floatDuration: 8.4,
  hoverShiftDistance: 6,
  borderDelayDuration: 0.42,
  blurAmountSoft: 5,
  blurAmountBg: 4,
  vignetteStrength: 0.18,
  colorSplitStrength: 0.012,
  panelBlurAmount: 14,
  accentGlowStrength: 28,
  textRevealStagger: 0.12,
};
