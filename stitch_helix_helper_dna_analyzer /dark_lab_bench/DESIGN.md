---
name: Dark Lab Bench
colors:
  surface: '#0f1511'
  surface-dim: '#0f1511'
  surface-bright: '#343b37'
  surface-container-lowest: '#0a0f0c'
  surface-container-low: '#171d19'
  surface-container: '#1b211d'
  surface-container-high: '#252b28'
  surface-container-highest: '#303632'
  on-surface: '#dee4de'
  on-surface-variant: '#bccac0'
  inverse-surface: '#dee4de'
  inverse-on-surface: '#2c322e'
  outline: '#87948b'
  outline-variant: '#3d4a42'
  surface-tint: '#68dba9'
  primary: '#68dba9'
  on-primary: '#003825'
  primary-container: '#25a475'
  on-primary-container: '#00311f'
  inverse-primary: '#006c4a'
  secondary: '#93ccff'
  on-secondary: '#003351'
  secondary-container: '#3198dc'
  on-secondary-container: '#002c47'
  tertiary: '#ffb3ae'
  on-tertiary: '#601214'
  tertiary-container: '#dd706b'
  on-tertiary-container: '#570b0e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ae'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#7f2928'
  background: '#0f1511'
  on-background: '#dee4de'
  surface-variant: '#303632'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
  data-mono-dense:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes a high-precision, dark-mode clinical workstation interface engineered for biotechnology laboratories, molecular diagnostics, and computational genomics platforms. 

Inspired by sterile cleanrooms, digital PCR analyzers, and advanced mass spectrometry consoles, the visual style combines clinical minimalism with surgical data density. Deep charcoal surfaces and cool, sterile slate tones replace consumer-app gradients, creating an ergonomic, non-fatiguing workspace that maintains optimal legibility under subdued ambient laboratory lighting.

The aesthetic projects rigorous scientific authority, mechanical precision, and operational clarity. High-contrast slate typography anchors dense sequences and instrument telemetry, while deliberate emerald validation accents, bio-cyan coordinates, sapphire markers, and magenta nucleotide indicators supply instant semantic classification without visual noise.

## Colors

The palette models clinical benchtop instrument displays: deep dark substrates, sterile slate neutral layers, and vivid spectral fluorophores engineered for high contrast and precise visual triage.

- **Primary (`#059669` / Lab Emerald):** Marks positive validations, passed QC thresholds, valid primer alignments, active toggle states, and primary execution controls.
- **Secondary (`#0284c7` / Bio-Cyan):** Designates structural genomic landmarks, telemetry tracks, coordinate rulers, and active sequence selections.
- **Tertiary (`#2563eb` / Sapphire Instrument Blue):** Applied to system controls, analytical run status, reference databases, and secondary action targets.
- **Neutral Surface Hierarchy:**
  - `surface-canvas` (`#0b1329`): Foundations, workbench canvas, and background frames.
  - `surface-panel` (`#111c38`): Toolbars, track sidebars, docked instrument trays, and table header rows.
  - `surface-card` (`#182449`): Focused analytical cards, data viewports, sequence cards, and contextual modals.
  - `border-subtle` (`#23345e`) & `border-strong` (`#334b82`): Hairline dividers and grid structures mimicking milled physical instruments.
  - `text-primary` (`#f8fafc`): Light ink for mission-critical readouts and labels.
  - `text-secondary` (`#cbd5e1`) & `text-muted` (`#94a3b8`): Metadata, units of measure, coordinates, and disabled states.

- **Genomic Base-Pair Mapping:** Nucleotide taxonomy adheres to strict chromatic separation against dark substrates: Adenine in Emerald (`#059669`), Cytosine in Bio-Cyan (`#0284c7`), Guanine in Amber (`#d97706`), and Thymine/Uracil in Bio-Magenta (`#c026d3`).

## Typography

The typography implements a dual-typeface structure separating executive orchestration from raw scientific computation:

1. **Structural Metadata & Application Interface (`Inter`):** Powers application headers, metric summaries, status badges, and interactive controls. Tightly kerned headline weights ensure an authoritative, instrument-grade appearance, while uppercase micro-labels utilize positive letter spacing (`0.06em`) for immediate readability at rapid glance.
2. **Genomic Data, Telemetry, and Logs (`JetBrains Mono`):** Renders all molecular sequences, FASTA datasets, locus coordinates, reading frames, and scalar outputs. Monospaced character widths guarantee strict vertical alignment across continuous base pairs and ensure that sequence differences pop without character-width jitter.

## Layout & Spacing

This design system uses an invariant 4px geometric baseline across all viewports to maximize data density and multi-pane spatial alignment.

- **Grid Architecture:** Multi-column modular arrangement engineered for simultaneous sequence inspection and instrument monitoring. Persistent diagnostic side rails pair with a fluid central analysis canvas that stretches dynamically across high-resolution displays.
- **Density Tiers:**
  - *Standard Tier:* Uses `space-md` (0.75rem / 12px) internal component padding and `gutter` (1rem / 16px) modular gaps for analytical dashboards and summary views.
  - *Compact Analytical Tier:* Sequence viewers, coordinate timelines, and pipetting logs compress to `space-xs` (0.25rem / 4px) and `space-sm` (0.5rem / 8px) gaps to pack maximum contiguous data within standard laboratory display dimensions.
- **Responsive Adaptations:**
  - `Mobile` (< 768px): Stacks modular trays into single-column vertical cards; sequences collapse into scrollable snapshot rows with pinned index markers. Canvas margins set to `margin` (1rem).
  - `Tablet / Bench Panel` (768px - 1200px): Preserves a slim 64px icon navigation rail with split-pane inspection panels.
  - `Workstation Monitor` (> 1200px): Employs full fluid multi-dock layouts with `margin-desktop` (2rem) and `gutter-desktop` (1.5rem), allowing horizontal expansion across panoramic monitors.

## Elevation & Depth

Visual depth is achieved through surgical, crisp plane layering and low-contrast borders rather than deep atmospheric shadows, preserving the sterile physical bench aesthetic under dark-mode constraints:

- **Surface Base (Level 0):** Deep `#0b1329` canvas background representing the structural lab counter.
- **Instrument Panels (Level 1):** `#111c38` sidebars and auxiliary trays framed with `1px solid #23345e`. Zero shadow.
- **Active Diagnostic Viewports (Level 2):** `#182449` primary inspection cards. Grounded by crisp `1px solid #334b82` boundaries and an ultra-subtle, clean ambient floor lift: `box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.2)`.
- **Floating Modals & Inspection Overlays (Level 3):** `#182449` panels bordered by `1px solid #475569` paired with an elevated directional drop: `box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)`.
- **Target Locus Focus:** Active chromosome regions, mutated codons, or validated inputs emit a sharp inward boundary outline: `box-shadow: 0 0 0 1px #059669, 0 0 0 3px rgba(5, 150, 105, 0.25)`.

## Shapes

The design system enforces a disciplined architectural corner geometry (`roundedness: 1`), embodying lab equipment casing and precision digital displays.

- **Standard Interactive Elements:** Form inputs, buttons, search bars, and base-pair markers use a razor-sharp `0.25rem` (4px) corner radius.
- **Analytical Containers & Viewports:** Cards, data tables, and modal trays feature `rounded-lg` (`0.5rem` / 8px) geometry.
- **Floating Diagnostic Drawers:** Scaled utility sidebars and drawer dialogs use `rounded-xl` (`0.75rem` / 12px).
- **Pills:** Full pill radiuses are strictly limited to sequence indicators, status indicators, and nucleotide token badges where pill geometry distinguishes discrete molecular identities from rectilinear workspace containers.

## Components

### Buttons
- **Primary Action:** Solid `#059669` emerald fill, crisp `#ffffff` Inter medium typography (13px), 4px border radius. Hover state shifts to `#047857` with subtle edge definition (`box-shadow: 0 1px 2px rgba(5, 150, 105, 0.2)`). Focus ring: `2px solid #059669` with 2px offset.
- **Secondary Action:** `#182449` surface, `1px solid #334b82` border, text `#f8fafc`. Hover transitions to `#23345e` background with `#475569` border.
- **Tertiary / Utility:** Transparent background, `#cbd5e1` text and icon; hover triggers `#111c38` fill.

### Nucleotide Badges & Data Chips
- **Base Pair Tokens:** Monospaced 24px x 20px pills (`rounded-full`) in `JetBrains Mono` bold 11px:
  - Adenine (A): Tinted `#064e3b` background, `#34d399` text, `1px solid #059669`.
  - Cytosine (C): Tinted `#082f49` background, `#38bdf8` text, `1px solid #0284c7`.
  - Guanine (G): Tinted `#451a03` background, `#fbbf24` text, `1px solid #d97706`.
  - Thymine/Uracil (T/U): Tinted `#4a044e` background, `#e879f9` text, `1px solid #c026d3`.
- **System Status Indicators:** 20px height capsules with a 6px status LED, colored by operational state (`#059669` running, `#d97706` calibrating, `#f43f5e` error), followed by uppercase 10px Inter text.

### Input Fields & Search Bars
- Background: `#111c38` with a crisp `1px solid #334b82` edge and 4px radius.
- Focus: Instant transition to `1px solid #059669` with an outer ring `0 0 0 3px rgba(5, 150, 105, 0.2)`.
- Monospace Input Mode: Sequence paste fields switch to `JetBrains Mono` 12px with a `#182449` left-hand line numbering strip.

### Checkboxes & Radio Buttons
- 16px x 16px boxes with 3px corner radius (radios remain circular).
- Unchecked: `#111c38` surface with `1px solid #475569` border.
- Checked: `#059669` emerald fill with pure `#ffffff` check icon.

### Analytical Cards & Data Modules
- Structured `#182449` card body encased in a `1px solid #23345e` border with 8px radius.
- Headers are delineated by a 1px solid `#23345e` divider, pairing a slate-100 title with an uppercase 10px Inter coordinate tag.

### Sequence Track Visualizer
- Clean horizontal timeline container featuring a dark-slate coordinate track (`#111c38`) with hairline tick indicators every 10 base pairs.
- Selection brush creates an azure wash (`rgba(2, 132, 199, 0.2)`) bounded by dual `#0284c7` hairline vertical calipers.