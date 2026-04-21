import Image from "next/image";

import type { DerivedImageAsset } from "@/config/content";
import { getDerivedImageStyle } from "@/lib/image-style";
import { cn } from "@/lib/utils";

type DerivedImageLayerProps = {
  asset: DerivedImageAsset;
  className?: string;
  priority?: boolean;
};

export function DerivedImageLayer({ asset, className, priority = false }: DerivedImageLayerProps) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      priority={priority}
      className={cn("pointer-events-none select-none", className)}
      style={getDerivedImageStyle(asset)}
    />
  );
}
