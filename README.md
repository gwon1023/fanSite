# fanSite Prototype

This prototype is a web-art style character fan site built around contamination, gaze, and environmental pressure rather than straightforward character introduction. The second pass strengthens that direction by reusing only two source images and treating the whole page as a scene already occupied by the character and the city.

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

Static export for Cloudflare Pages:

```bash
npm run build
```

The static files are generated in `out/`.

## Folder Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  sections/
  DerivedImageLayer.tsx
  FloatingLayer.tsx
  GlitchAccentText.tsx
  LayoutShell.tsx
  LenisProvider.tsx
  NoiseOverlay.tsx
  Reveal.tsx
  SectionTitle.tsx
  ThemedPanel.tsx
config/
  content.ts
  motion.ts
  theme.ts
lib/
  image-style.ts
  utils.ts
public/images/character/
  close1.jpg
  bg1.jpg
```

## Derived Image Strategy

This pass uses only two source files:

- `close1.jpg`: the character close-up
- `bg1.jpg`: the red city corridor

Instead of adding supporting assets, the site derives multiple scene roles from those two images using configuration only:

- Character variants: `fullClose`, `eyeCrop`, `silhouetteCrop`, `blurredCrop`, `highContrastCrop`
- City variants: `fullCity`, `verticalCorridor`, `blurredCity`, `darkCity`, `redHazeCity`

Each variant is defined with reusable settings such as:

- `objectPosition`
- `scale`
- `opacity`
- `blur`
- `brightness`
- `contrast`
- `saturate`
- optional `blendMode`

This lets the same image behave as foreground subject, background surface, haze, afterimage, corridor depth, or evidence fragment without introducing new files.

## Adjustable Config

Most visual intensity now lives in `config/motion.ts` so the prototype can be tuned quickly from one file.

- `bgDarkness`: darkens the whole scene before text and panels sit on top
- `overlayOpacity`: controls general overlay density
- `redGlowOpacity`: strength of red atmospheric bloom
- `noiseOpacity`: grain intensity
- `heroRevealDuration`: slower opening reveal for the hero
- `sectionRevealDuration`: reveal speed for all other sections
- `floatAmplitude`: drift distance for suspended layers
- `floatDuration`: drift cycle length
- `hoverShiftDistance`: how far cards and keywords move on hover
- `borderDelayDuration`: delayed border response timing
- `blurAmountSoft`: gentle blur used for soft contamination
- `blurAmountBg`: heavier blur used in deep background layers
- `vignetteStrength`: darkens the frame edges
- `colorSplitStrength`: very weak offset used only where a restrained split helps

Color and surface materials still live in `config/theme.ts`, while `config/content.ts` holds copy, evidence data, and derived image definitions.

## Effects Built From Image Reuse

The stronger atmosphere in this pass comes from reusing the two images in layered ways:

- Hero: full city, haze city, full close, and eye crop are stacked to create a contaminated first scene
- Identity: blurred character and city variants sit behind drifting keywords
- World/Narrative: the corridor crop becomes a depth axis for fragmented logs
- Gallery/Evidence: cards use different derived presets instead of separate images
- Motif: dark city and silhouette variants remain as almost-erased residue under the final keywords

Other effects are intentionally restrained:

- weak grain overlay
- low red haze
- delayed border response
- subtle drift
- text reveal
- vignette
- weak color split only in a few focal places

## Cloudflare Deployment

This project remains configured for static export:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npx next build`
- Build output directory: `out`

Key settings are in `next.config.ts`:

- `output: "export"`
- `images.unoptimized: true`
- `trailingSlash: true`

## Possible Next-Step Assets

If a later pass allows additional assets, the most useful additions would be:

- a second city image with a different distance scale
- a dedicated monochrome detail texture for panel contamination
- one sparse emblem or symbol graphic for repeated system marks
- one alternate close-up with a different gaze direction for stronger narrative contrast
