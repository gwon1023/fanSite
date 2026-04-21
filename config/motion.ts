export type MotionPreset = {
  overlayOpacity: number;
  sectionRevealDuration: number;
  floatingAmplitude: number;
  floatingDuration: number;
  panelBlurAmount: number;
  accentGlowStrength: number;
  hoverShiftDistance: number;
  textRevealStagger: number;
};

export const motionPreset: MotionPreset = {
  overlayOpacity: 0.1,
  sectionRevealDuration: 1.1,
  floatingAmplitude: 12,
  floatingDuration: 8.5,
  panelBlurAmount: 14,
  accentGlowStrength: 28,
  hoverShiftDistance: 6,
  textRevealStagger: 0.12,
};
