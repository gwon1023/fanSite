import { LayoutShell } from "@/components/LayoutShell";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IdentitySection } from "@/components/sections/IdentitySection";
import { MotifSection } from "@/components/sections/MotifSection";
import { NarrativeSection } from "@/components/sections/NarrativeSection";

export default function Home() {
  return (
    <LayoutShell>
      <HeroSection />
      <IdentitySection />
      <NarrativeSection />
      <GallerySection />
      <MotifSection />
    </LayoutShell>
  );
}
