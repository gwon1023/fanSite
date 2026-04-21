import { motionPreset } from "@/config/motion";

export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 mix-blend-soft-light"
      style={{
        opacity: motionPreset.noiseOpacity,
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14) 0 0.7px, transparent 0.8px),
          radial-gradient(circle at 80% 30%, rgba(255,255,255,0.1) 0 0.9px, transparent 1px),
          radial-gradient(circle at 40% 80%, rgba(255,255,255,0.08) 0 0.8px, transparent 1px)
        `,
        backgroundSize: "14px 14px, 17px 17px, 19px 19px",
      }}
    />
  );
}
