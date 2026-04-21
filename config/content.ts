export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  variant: "portrait" | "detail" | "fracture" | "silhouette";
  objectPosition: string;
};

export const siteContent = {
  hero: {
    name: "KARAN",
    codename: "specimen / red-01",
    statement: "The screen keeps its order, but her gaze has already rewritten the rules.",
  },
  identity: {
    intro: [
      "She does not arrive with noise. The page is simply less stable after she is present.",
      "The red is not decoration. It behaves more like a warning that learned restraint.",
      "Every aligned edge survives, but only after a slight surrender.",
    ],
    keywords: ["residual signal", "measured fracture", "mute static", "borrowed warmth", "held breath"],
    labels: ["observer-bound", "low lux", "slow response", "single point failure", "soft corruption"],
  },
  narrative: {
    fragments: [
      "The room was archived before the lights dimmed.",
      "No one recalls when the logs started speaking in singular pronouns.",
      "The signal stayed polite. That was the first mistake.",
      "She is not inside the system. The system has started to imitate her posture.",
    ],
    notes: [
      "[trace 03] cursor latency increased after eye contact with the primary frame.",
      "[note 12] red lines appear only where a decision has already been made.",
      "[archive] audio remained clean, but every silence carried additional weight.",
    ],
    highlight: "The world does not orbit her. It quietly learns her tension.",
  },
  motifs: ["eye", "fracture", "static", "silence", "red", "distortion"],
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/character/img1.jpg",
    alt: "Character portrait with red gaze",
    caption: "specimen 01 / full frame",
    variant: "portrait",
    objectPosition: "center 24%",
  },
  {
    src: "/images/character/img1.jpg",
    alt: "Close detail of the character eye",
    caption: "trace 02 / retinal bloom",
    variant: "detail",
    objectPosition: "32% 28%",
  },
  {
    src: "/images/character/img1.jpg",
    alt: "Glitched character silhouette",
    caption: "trace 07 / contour slip",
    variant: "silhouette",
    objectPosition: "58% 40%",
  },
  {
    src: "/images/character/img1.jpg",
    alt: "Distorted fragment of the illustration",
    caption: "trace 11 / fracture hold",
    variant: "fracture",
    objectPosition: "70% 18%",
  },
];
