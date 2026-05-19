---
name: Rythamo Studio Freelance Presentation
description: High-contrast Swiss minimalism meeting premium engineering
colors:
  primary: "#E0FF4F"
  neutral-bg: "#FFFFFF"
  neutral-fg: "#00272B"
  surface: "#00272B"
  subtle: "rgba(0,39,43,0.08)"
typography:
  display:
    fontFamily: "Outfit, Inter, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 1.05
  body:
    fontFamily: "Outfit, Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.2em"
rounded:
  full: "9999px"
  xl: "12px"
spacing:
  section-py: "24px"
components:
  button-primary:
    backgroundColor: "{colors.neutral-fg}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  nav-pill:
    backgroundColor: "rgba(0,39,43,0.05)"
    rounded: "{rounded.full}"
---

# Design System: Rythamo Studio Freelance Presentation

## 1. Overview

**Creative North Star: "High-Contrast Swiss Tech"**

This system represents a bold, high-contrast digital architecture. We combine a stark, light canvas with deep Midnight Forest typography and structural elements, and a singular, electric Neon Lime accent for maximum visual energy. This palette is designed to look razor-sharp, technically exceptional, and absolutely premium.

### Key Characteristics:
* **High-Contrast Digital Framing**: Stark white backgrounds and thick structural borders in Midnight Forest.
* **Vibrant Accent Energy**: Electric Neon Lime highlights to draw focus to core actions and active metrics.
* **Precise Technical Grids**: Strict editorial typography layout with mono technical accents.

## 2. Colors

### Primary / Accent
* **Neon Lime** (`#E0FF4F`): An electric, high-chroma green-yellow brand color used exclusively for core call-to-actions, active indicators, and high-impact metric backdrops.

### Neutral
* **Pure White** (`#FFFFFF`): The default clean background.
* **Midnight Forest** (`#00272B`): A very deep dark teal/navy blue. Used for all main typography, dark section blocks, floating borders, and primary button containers.

### Named Rules
**The Neon Focal Rule.** Neon Lime is a high-energy structural accent. It must be used selectively (≤5% of any screen surface) on buttons, tags, or numbers to preserve its premium, high-impact weight.

## 3. Typography

**Display Font:** Outfit (with Inter / system fallback)
**Body Font:** Outfit (with Inter / system fallback)
**Label/Mono Font:** JetBrains Mono

### Hierarchy
* **Display** (ExtraBold (800), `clamp(2.5rem, 7vw, 5.5rem)`, `1.05`): Used for primary section titles.
* **Headline** (Bold (700), `2.25rem`, `1.2`): Section subtitles.
* **Body** (Normal (400), `1.125rem`, `1.625`): Max width capped at `65ch` for perfect readability.
* **Label** (SemiBold (600), `0.75rem`, `0.2em` uppercase): Mono tags and section counts.

## 4. Elevation

The visual system is completely flat and high-contrast, conveying depth via strong overlapping grids and stark outline strokes in Midnight Forest, rather than drop shadows.

### Named Rules
**The Flat-Grid Rule.** Surfaces are completely flat at rest. Cards and containers use fine `1px` solid Midnight Forest strokes rather than soft shadows.

## 5. Components

### Buttons
* **Shape:** Full pill (`9999px` border-radius)
* **Primary:** Deep Midnight Forest (`#00272B`) with White (`#FFFFFF`) text. Internal padding `16px 32px`.
* **Hover / Focus:** Scale shift with electric Neon Lime background transition.

### Navigation Pill
* **Shape:** Pill outline (`9999px`)
* **Background:** Semi-transparent light overlay (`rgba(255,255,255,0.85)`) with a structural Midnight Forest border (`border-[#00272B]/10`).

## 6. Do's and Don'ts

### Do:
* **Do** pair Neon Lime with Midnight Forest for high-contrast, fully accessible text readability.
* **Do** use stark solid lines and borders to divide grid cards.
* **Do** keep headings extremely bold and tight.

### Don't:
* **Don't** use generic grays; use translucent tints of Midnight Forest (`rgba(0,39,43,0.08)`) for subtle borders and surface cards.
* **Don't** place white text directly on Neon Lime due to poor contrast. Always use Midnight Forest text on Neon Lime.
* **Don't** use decorative drop shadows.
