---
name: Helix Helper
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#bacbbf'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#84958a'
  outline-variant: '#3b4a41'
  surface-tint: '#00e29b'
  primary: '#88ffc5'
  on-primary: '#003824'
  primary-container: '#11e8a0'
  on-primary-container: '#006342'
  inverse-primary: '#006c48'
  secondary: '#d1bcff'
  on-secondary: '#3b1184'
  secondary-container: '#522f9b'
  on-secondary-container: '#c1a7ff'
  tertiary: '#b2f3ff'
  on-tertiary: '#00363d'
  tertiary-container: '#83d9e8'
  on-tertiary-container: '#005f6b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#49ffb6'
  primary-fixed-dim: '#00e29b'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005235'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d1bcff'
  on-secondary-fixed: '#23005b'
  on-secondary-fixed-variant: '#522f9b'
  tertiary-fixed: '#9af0ff'
  tertiary-fixed-dim: '#7dd3e2'
  on-tertiary-fixed: '#001f24'
  on-tertiary-fixed-variant: '#004f58'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
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
    fontWeight: '500'
    lineHeight: 28px
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
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
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
  data-mono-dense:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
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

This design system establishes an ultra-precise, laboratory-grade dark operating environment tailored for computational biologists, genomics researchers, and life science students. 

The aesthetic fuses clinical minimalism with subtle bioluminescent instrumentation. Rather than relying on purely decorative neon trends, the interface treats color and light as functional indicators of molecular phenomena, sequence confidence, and biochemical properties. The emotional tone is dependable, focused, and scientifically rigorous—evoking the quiet authority of advanced confocal microscopy stations and automated sequencing arrays.

Visual hierarchy relies on deep obsidian grounding surfaces, crisp low-contrast delineations, and monospaced data density. Bioluminescent glows are strictly functional, utilized to direct attention toward active gene loci, nucleotide disparities, or analysis states without introducing visual fatigue during multi-hour research sessions.

## Colors

The color palette is anchored in an obsidian foundation (`#0B0F19`) that eliminates ocular strain under low-light laboratory conditions while providing infinite perceived contrast for luminous fluorophore accents.

- **Primary (`#11E8A0` / Emerald Fluorophore):** Represents positive validation, active reading frames, high sequencing quality scores (Q-score > 30), and principal interactive triggers. Paired with hover states and luminous focal borders.
- **Secondary (`#A281F0` / Bioluminescent Violet):** Identifies structural motifs, secondary protein configurations, RNA folding domains, and synthetic construct tags. Its tint highlights active selected sequences.
- **Tertiary (`#86DCEB` / Laser Cyan):** Designates systemic telemetry, reference genomes, alignment cursors, and navigational vectors.
- **Neutral Surface Palette:**
  - `surface-canvas`: `#0B0F19` (Base background)
  - `surface-panel`: `#111827` (Sidebars, sequence inspectors, instrument panels)
  - `surface-card`: `#1A2234` (Elevated analytical cards, modals, tooltips)
  - `border-subtle`: `#26334D` (Structural grid dividers)
  - `text-primary`: `#F8FAFC` (High-contrast labels and critical readings)
  - `text-secondary`: `#94A3B8` (Secondary metadata, column headers, units)
  - `text-muted`: `#64748B` (Non-coding regions, padding indexes)

Functional semantic colors map cleanly into the genomics spectrum: Guanine/Adenine/Thymine/Cytosine bases are color-coded consistently across all analytical modules using the emerald, violet, cyan, and amber alert ranges.

## Typography

The typographic hierarchy implements a deliberate dual-font architecture:

1. **System Interface & Metadata (`Inter`):** Drives application structure, metric headlines, dashboard tiles, navigation, and modal dialogues. Tight negative tracking on headlines lends an authoritative, modern feel, while uppercase micro-labels utilize wide tracking (`0.05em`) for legibility in dense operational views.
2. **Genomic Data & Telemetry (`JetBrains Mono`):** Every nucleotide strand, FASTA dump, codon translation, coordinate scale, and statistical read-out is rendered strictly in `JetBrains Mono`. Tabular figures and invariant character widths prevent vertical misalignment when scanning contiguous rows of base pairs (A, C, G, T, U) and align sequence index tracks to the exact pixel.

Font smoothing must be forced (`-webkit-font-smoothing: antialiased`) to maintain crisp letterforms against the obsidian ground.

## Layout & Spacing

This design system employs a data-dense fluid layout optimized for multi-pane sequencing workflows. The architecture relies on an invariant 4px baseline rhythm.

- **Grid Structure:** A 12-column variable fluid grid system anchored by persistent side panels (tools, genome track lists) and a flexible central viewport that scales to full device width.
- **Data Density Modes:**
  - *Standard Mode:* Uses `space-md` (12px) padding within cards and `gutter` (16px) across visual modules.
  - *Compact Analytical Mode:* Sequence inspectors drop to `space-xs` (4px) and `space-sm` (8px) internal gaps, maximizing the number of simultaneous base-pair rows visible above the fold.
- **Breakpoints:**
  - `Mobile` (< 768px): Vertical stacking, collapsed drawer navigation, simplified non-grid sequence summary cards. Margin: `margin` (1rem).
  - `Tablet / Laptop` (768px - 1280px): Collapsible left workbench toolbar, central viewport with horizontal base-pair scrolling.
  - `Desktop / Workstation` (> 1280px): Multi-pane docking layout. Viewports stretch continuously to occupy ultra-wide clinical monitors without arbitrary maximum width caps. Margin: `margin-desktop` (2rem).

## Elevation & Depth

Visual hierarchy does not use diffuse, cloudy dropshadows common in consumer software. Instead, depth is achieved via tonal surface containment and precision fluorophore borders.

- **Level 0 (Canvas Base):** Deep `#0B0F19` background. Serves as the substrate for sequence lanes and track backdrops.
- **Level 1 (Subordinate Surfaces):** `#111827` panels with a razor-thin structural outline (`1px solid #26334D`). No shadow.
- **Level 2 (Interactive Modules & Cards):** `#1A2234` surface with `1px solid #334466`. Elevates active analytical inspectors above ambient canvas tracks.
- **Level 3 (Overlays & Contextual Sheets):** `#1E293B` backdrop with a delicate fluorophore edge (`1px solid rgba(17, 232, 160, 0.3)`) and a tight laboratory ambient halo (`box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(17, 232, 160, 0.15)`).
- **Active Focus & Selection:** When a locus, primer, or hairpin loop is active, elevation is rendered as an inner containment glow (`box-shadow: inset 0 0 0 1px #11E8A0, 0 0 12px rgba(17, 232, 160, 0.25)`).

## Shapes

The design system enforces a soft, disciplined geometry (`roundedness: 1`). 

- Standard interactive controls (buttons, inputs, select triggers, nucleotide pill chips) use `0.25rem` (4px) corner radii.
- Analytical cards, modal panels, and sequence canvas viewports use `rounded-lg` (`0.5rem` / 8px).
- Large floating drawers and diagnostics viewports scale up to `rounded-xl` (`0.75rem` / 12px).
- Pill shapes are strictly forbidden for layout containers and cards; they are reserved exclusively for circular progress nodes or nucleotide base markers where rounded contours indicate distinct molecular identities.

This tight corner geometry prevents visual softness, preserves interface real estate, and reflects the precision instrumentation of hardware-level bio-analyzers.

## Components

### Buttons
- **Primary Action:** Solid `#11E8A0` background, `#0B0F19` typography (Inter, medium 13px), 4px border radius. Hover state with a subtle bioluminescent glow (`box-shadow: 0 0 14px rgba(17, 232, 160, 0.35)`). Active state scales to 0.98.
- **Secondary Action:** Transparent background with a structural border (`1px solid #26334D`), text in `#F8FAFC`. On hover, background shifts to `rgba(162, 129, 240, 0.1)` and border lights up to `#A281F0`.
- **Tertiary / Utility:** Flat transparent button with `#94A3B8` icon and text; hover uses `rgba(255, 255, 255, 0.05)`.

### Chips & Nucleotide Badges
- **Base Pair Badges:** Fixed-width 24px x 20px chips with `JetBrains Mono` bold 11px characters.
  - Adenine (A): Tinted `#11E8A0` (Emerald) background at 15% opacity with solid emerald text.
  - Thymine / Uracil (T/U): Tinted `#A281F0` (Violet) background at 15% opacity with solid violet text.
  - Cytosine (C): Tinted `#86DCEB` (Cyan) background at 15% opacity with solid cyan text.
  - Guanine (G): Tinted `#F59E0B` (Amber) background at 15% opacity with solid amber text.
- **Status Chips:** Small 20px height capsules featuring an active glowing status dot (6px) followed by uppercase Inter text (10px).

### Input Fields & Search Bars
- Background: `#111827`. Border: `1px solid #26334D`.
- Focus State: Border transitions instantly to `#11E8A0` with an ambient glow (`box-shadow: 0 0 0 2px rgba(17, 232, 160, 0.2)`).
- FASTA / Raw Sequence Inputs: Automatically switch font rendering to `JetBrains Mono` with soft line numbering along the left gutter.

### Checkboxes & Radio Buttons
- 16px x 16px dimensions with a 3px radius (radios remain circular). 
- Unchecked: `#111827` background, `#334466` border.
- Checked: `#11E8A0` background, displaying a crisp white micro-check, ringed by a 2px emerald halo.

### Cards & Analytical Panels
- Structural `#1A2234` container with 1px border `#26334D` and 8px border-radius.
- Headers are divided from body sections by a hairline separator (`1px solid #26334D`) and feature an uppercase 11px Inter sublabel alongside real-time sample metadata indicators.

### Sequence Track Visualizer (Domain-Specific)
- Horizontal genomic timeline container with a sticky base-coordinate bar (numbered every 10 bp in `data-mono-dense`).
- Highlight brushes support drag-to-select regions, filling the selected sequence range with an iridescent cyan-violet gradient wash (`rgba(134, 220, 235, 0.15)` to `rgba(162, 129, 240, 0.15)`) bounded by dual fluorophore guide wires.