import type { CSSProperties } from "react";

export type DerivedImageAsset = {
  id:
    | "fullClose"
    | "eyeCrop"
    | "silhouetteCrop"
    | "blurredCrop"
    | "highContrastCrop"
    | "fullCity"
    | "verticalCorridor"
    | "blurredCity"
    | "darkCity"
    | "redHazeCity";
  src: string;
  alt: string;
  objectPosition: string;
  scale: number;
  opacity: number;
  blur: number;
  brightness: number;
  contrast: number;
  saturate: number;
  blendMode?: CSSProperties["mixBlendMode"];
  variant: "character" | "city";
};

export type EvidenceItem = {
  id: string;
  label: string;
  title: string;
  note: string;
  primaryAsset: DerivedImageAsset["id"];
  secondaryAsset?: DerivedImageAsset["id"];
};

export const derivedAssets: Record<DerivedImageAsset["id"], DerivedImageAsset> = {
  fullClose: {
    id: "fullClose",
    src: "/images/character/close1.jpg",
    alt: "Close character portrait",
    objectPosition: "48% 18%",
    scale: 1.18,
    opacity: 1,
    blur: 0,
    brightness: 1.02,
    contrast: 1.18,
    saturate: 1.04,
    variant: "character",
  },
  eyeCrop: {
    id: "eyeCrop",
    src: "/images/character/close1.jpg",
    alt: "Character eye crop",
    objectPosition: "38% 25%",
    scale: 2.1,
    opacity: 0.84,
    blur: 0,
    brightness: 1,
    contrast: 1.28,
    saturate: 1.18,
    blendMode: "screen",
    variant: "character",
  },
  silhouetteCrop: {
    id: "silhouetteCrop",
    src: "/images/character/close1.jpg",
    alt: "Character silhouette crop",
    objectPosition: "58% 50%",
    scale: 1.25,
    opacity: 0.42,
    blur: 1.2,
    brightness: 0.45,
    contrast: 1.5,
    saturate: 0.6,
    blendMode: "multiply",
    variant: "character",
  },
  blurredCrop: {
    id: "blurredCrop",
    src: "/images/character/close1.jpg",
    alt: "Blurred character crop",
    objectPosition: "64% 30%",
    scale: 1.35,
    opacity: 0.3,
    blur: 9,
    brightness: 0.82,
    contrast: 1.1,
    saturate: 0.7,
    variant: "character",
  },
  highContrastCrop: {
    id: "highContrastCrop",
    src: "/images/character/close1.jpg",
    alt: "High contrast character crop",
    objectPosition: "50% 32%",
    scale: 1.12,
    opacity: 0.75,
    blur: 0,
    brightness: 1.05,
    contrast: 1.55,
    saturate: 0.78,
    variant: "character",
  },
  fullCity: {
    id: "fullCity",
    src: "/images/character/bg1.jpg",
    alt: "Red city background",
    objectPosition: "50% 58%",
    scale: 1,
    opacity: 0.72,
    blur: 0,
    brightness: 0.72,
    contrast: 1.08,
    saturate: 1.04,
    variant: "city",
  },
  verticalCorridor: {
    id: "verticalCorridor",
    src: "/images/character/bg1.jpg",
    alt: "Vertical city corridor crop",
    objectPosition: "50% 40%",
    scale: 1.26,
    opacity: 0.8,
    blur: 0,
    brightness: 0.7,
    contrast: 1.2,
    saturate: 1.08,
    variant: "city",
  },
  blurredCity: {
    id: "blurredCity",
    src: "/images/character/bg1.jpg",
    alt: "Blurred city crop",
    objectPosition: "48% 38%",
    scale: 1.18,
    opacity: 0.48,
    blur: 8,
    brightness: 0.62,
    contrast: 1.08,
    saturate: 1,
    variant: "city",
  },
  darkCity: {
    id: "darkCity",
    src: "/images/character/bg1.jpg",
    alt: "Dark city crop",
    objectPosition: "52% 68%",
    scale: 1.14,
    opacity: 0.14,
    blur: 2,
    brightness: 0.46,
    contrast: 1.1,
    saturate: 0.82,
    blendMode: "multiply",
    variant: "city",
  },
  redHazeCity: {
    id: "redHazeCity",
    src: "/images/character/bg1.jpg",
    alt: "Red haze city crop",
    objectPosition: "52% 46%",
    scale: 1.32,
    opacity: 0.18,
    blur: 9,
    brightness: 0.86,
    contrast: 1.16,
    saturate: 1.28,
    blendMode: "screen",
    variant: "city",
  },
};

export const siteContent = {
  hero: {
    name: "KARAN",
    codename: "observer / red corridor",
    statement: "The city was already lit before her gaze reached the frame.",
    subline: "Nothing here introduces her. The space has already adjusted.",
  },
  identity: {
    title: "Identity Settles Into The Surface",
    intro: [
      "She behaves less like a subject and more like a condition the page has accepted.",
      "Red persists only where attention has become irreversible.",
      "Every clean edge survives with a small amount of surrender still attached.",
    ],
    keywords: ["retinal lock", "soft breach", "measured static", "borrowed corridor", "silent pressure"],
    labels: ["tracebound", "low visibility", "delayed response", "residual subject", "quiet contamination"],
  },
  narrative: {
    title: "The World Keeps Notes After Contact",
    fragments: [
      "The alley kept its geometry. Only the light became personal.",
      "No one recorded an arrival. The system simply started speaking in proximity.",
      "Distance failed first. Then the archive learned to breathe slower.",
      "The city does not host her. It reorganizes itself around the fact of being seen.",
    ],
    notes: [
      "[trace 03] corridor depth increased after repeated visual contact with the primary subject.",
      "[log 09] red persistence remained localized to decisions, thresholds, and eyes.",
      "[archive] all silence measurements rose without a matching change in sound.",
    ],
    highlight: "What looks like atmosphere is actually compliance.",
  },
  evidence: {
    title: "Evidence Never Looks Neutral For Long",
  },
  motifs: {
    title: "Residual Terms The System Could Not Flush",
    words: ["eye", "corridor", "static", "compliance", "red", "residue", "threshold"],
    linger: "The interface remains usable. The hesitation is what stays behind.",
  },
};

export const evidenceItems: EvidenceItem[] = [
  {
    id: "evidence-01",
    label: "close record",
    title: "retinal spiral",
    note: "Primary fixation remains strongest at the left eye threshold.",
    primaryAsset: "eyeCrop",
    secondaryAsset: "redHazeCity",
  },
  {
    id: "evidence-02",
    label: "surface record",
    title: "corridor drift",
    note: "Urban depth begins reading as a held breath instead of distance.",
    primaryAsset: "verticalCorridor",
    secondaryAsset: "blurredCity",
  },
  {
    id: "evidence-03",
    label: "contrast file",
    title: "subject outline",
    note: "Edges sharpen only after the background has already darkened around them.",
    primaryAsset: "verticalCorridor",
    secondaryAsset: "darkCity",
  },
  {
    id: "evidence-04",
    label: "afterimage",
    title: "residual witness",
    note: "The frame keeps a silhouette even after the face appears to soften.",
    primaryAsset: "fullCity",
    secondaryAsset: "redHazeCity",
  },
];
