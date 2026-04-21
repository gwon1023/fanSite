import type { CSSProperties } from "react";

import type { DerivedImageAsset } from "@/config/content";

export function getDerivedImageStyle(asset: DerivedImageAsset): CSSProperties {
  return {
    objectFit: "cover",
    objectPosition: asset.objectPosition,
    transform: `scale(${asset.scale})`,
    opacity: asset.opacity,
    filter: `blur(${asset.blur}px) brightness(${asset.brightness}) contrast(${asset.contrast}) saturate(${asset.saturate})`,
    mixBlendMode: asset.blendMode,
  };
}
