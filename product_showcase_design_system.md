---
version: alpha
name: "Crimson Pulse: Technical Product Showcase"
description: >-
  A high-contrast, technical editorial design system for bleeding-edge hardware products.
  Features a commanding crimson primary, balanced by emerald and cobalt telemetry accents,
  anchored in deep obsidian ink, graphite greys, and crisp clean whites.
colors:
  primary: "#D92D20"
  primary-strong: "#B42318"
  primary-ink: "#7A1B14"
  primary-soft: "#FEF3F2"
  primary-soft-2: "#FEE4E2"
  primary-border: "#FECDCA"
  on-primary: "#FFFFFF"
  primary-bright: "#F97066"
  accent-green: "#12B76A"
  accent-green-soft: "#ECFDF3"
  accent-green-border: "#A6F4C5"
  accent-blue: "#0284C7"
  accent-blue-soft: "#F0F9FF"
  accent-blue-border: "#B9E6FE"
  secondary: "#0B0F17"
  on-secondary: "#FFFFFF"
  neutral: "#FFFFFF"
  surface: "#FFFFFF"
  surface-2: "#FBFCFD"
  surface-muted: "#F8FAFC"
  surface-sunken: "#F1F5F9"
  on-surface: "#334155"
  on-surface-strong: "#0F172A"
  on-surface-variant: "#64748B"
  on-surface-muted: "#94A3B8"
  outline: "#E2E8F0"
  outline-strong: "#CBD5E1"
  error: "#D92D20"
  on-error: "#FFFFFF"
typography:
  headline-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 58px
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: -0.035em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.025em
  stat-number:
    fontFamily: Plus Jakarta Sans
    fontSize: 50px
    fontWeight: 800
    lineHeight: 1
    letterSpacing: -0.035em
    fontFeature: '"tnum" 1'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13.5px
    fontWeight: 500
    lineHeight: 1.5
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
rounded:
  sm: 10px
  md: 16px
  lg: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section: 132px
  section-min: 76px
  shell: 1180px
  shell-narrow: 880px
  gutter: 40px
  gutter-min: 20px
components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  text-selection:
    backgroundColor: "{colors.primary-soft-2}"
    textColor: "{colors.primary-ink}"
  divider:
    backgroundColor: "{colors.outline}"
    height: 1px
  divider-strong:
    backgroundColor: "{colors.outline-strong}"
    height: 1px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
  button-dark:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 10px 22px
  button-dark-hover:
    backgroundColor: "{colors.primary}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-ghost-hover:
    backgroundColor: "{colors.surface-muted}"
  pill-label:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  pill-green:
    backgroundColor: "{colors.accent-green-soft}"
    textColor: "{colors.accent-green}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  pill-blue:
    backgroundColor: "{colors.accent-blue-soft}"
    textColor: "{colors.accent-blue}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 30px
  card-nested:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 20px
  card-callout:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-ink}"
    rounded: "{rounded.md}"
    padding: 28px
  stat-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.stat-number}"
    padding: 28px
  stat-cell-hot:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.stat-number}"
  section-dark:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    padding: 132px
  headline-card:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary-bright}"
    rounded: "{rounded.lg}"
    padding: 44px
  ticker:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.label-sm}"
    padding: 12px
  header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    height: 72px
  footer:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
    padding: 64px
---

# Crimson Pulse: Technical Product Showcase

## Overview
A precision-crafted design system created specifically for high-end hardware announcements, compute platforms, and engineering showcases. Built with an editorial hierarchy: bold crimson focal points, emerald telemetry accents, cyan interface highlights, obsidian contrast panels, slate grey intermediate tones, and crisp white surface structures.

## Color Hierarchy
Adhering directly to the priority scale: **Red > Green > Blue > Black > Grey > White**:
- **Crimson (#D92D20) - Primary Brand Driver:** Used for primary action buttons, key metrics, hero highlights, active focus states, and the primary badge border.
- **Emerald (#12B76A) - First Accent:** Applied to active telemetry indicators, validation marks, zero-telemetry confirmation pills, and system health badges.
- **Cobalt/Cyan (#0284C7) - Second Accent:** Highlights data streaming indicators, port chips, technical specs, and interactive code tags.
- **Obsidian Black (#0B0F17) - Structural Contrast:** Used for high-contrast headline panels, dark terminal sections, navigation buttons, and typography anchors.
- **Slate Greys (#334155 to #F8FAFC) - Structural Tiers:** Body text, metadata, subtle borders, card separators, and recessed element backdrops.
- **Pure White (#FFFFFF) - Canvas:** Primary background and elevated card surfaces ensuring maximum contrast and legibility.

## Typography
- **Headlines & Numbers:** Plus Jakarta Sans ExtraBold (800) with tight tracking (`-0.035em`). Displays authoritative, mechanical solidity.
- **Technical Readouts & Badges:** JetBrains Mono Medium (500) with uppercase styling and wide letter-spacing (`0.14em`) for model numbers, specs, and status labels.
- **Body & Paragraphs:** Plus Jakarta Sans Regular (400) set at 16px to 19px for effortless reading.

## Layout & Components
- **Centred Shells:** Standard `1180px` container width with `20px` to `40px` adaptive gutter padding.
- **Header:** Sticky white navbar (`92%` opacity with backdrop blur), containing the brand mark, navigation anchors, and a dark pill CTA button.
- **Feature Grid:** Structured two-column or four-column layouts displaying numbered hardware capabilities with clear separation lines.
- **Telemetry Callout:** A dark obsidian container with bright crimson and emerald text showing real-time compute metrics.

## Do's and Don'ts
- **Do** prioritize Crimson (`#D92D20`) for the primary interaction path and focal buttons.
- **Do** use Emerald and Blue strictly for data telemetry, status chips, or hardware tags.
- **Do** preserve monospaced uppercase formatting on section pills and technical specifications.
- **Don't** add rainbow gradients or heavy drop shadows—keep shadows soft and neutral.
- **Don't** place red text on top of dark sections without using the bright variant (`#F97066`).