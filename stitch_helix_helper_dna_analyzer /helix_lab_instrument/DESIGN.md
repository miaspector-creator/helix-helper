---
name: Helix Lab Instrument
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#8d4b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b15f00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
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
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.005em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  metric-display:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
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

This design system delivers a clinical, high-precision instrumentation environment designed for daily bench work, wet lab informatics, and molecular workflow tracking. It balances sterile clarity with vibrant biological accents to minimize cognitive load during extended computational and physical analysis sessions.

### Brand Personality & Philosophy
- **Clinical Rigor:** Every border, line of microcopy, and reading metric is calibrated to deliver immediate data legibility under bright overhead lab illumination.
- **Instrument Precision:** Surfaces avoid ornamental fluff, mirroring the machined, seamless tolerances of modern laboratory automation hardware and microfluidic control units.
- **Biotic Vitality:** Controlled bursts of bio-emerald signal active telemetry, successful assays, and optimal equipment states, providing reassurance without distraction.

### Visual Style
The design system operates within a **Clean Modern Laboratory** aesthetic. It relies on crisp, hairline structural division, subtle slate foundations, pure white card platters, and surgical typography. Elevation is driven by hairline boundaries and minute tonal shifts rather than heavy atmospheric diffusion, keeping complex data density razor-sharp.

## Colors

The palette is engineered around cleanroom visibility, utilizing neutral cool slates to build an ergonomic working canvas that prevents optical fatigue over 12-hour shifts.

### Palette Architecture
- **Primary (`#059669` - Bio-Emerald):** The signature state color representing healthy assays, primary system actions, confirmed telemetry, and valid sequencing pipelines.
- **Secondary (`#0284c7` - Scientific Cyan):** Analytical controls, secondary telemetry, informational tags, interactive chart nodes, and selection highlights.
- **Tertiary (`#d97706` - Warm Reagent Amber):** Caution states, incubation timers approaching threshold, volume warnings, and non-blocking system alerts.
- **Neutral Core (`#0f172a` to `#f8fafc` - Cool Slate):**
  - **Base Canvas (`#f8fafc`):** Laboratory bench background tint providing contrast against pure white card surfaces.
  - **Platter / Container (`#ffffff`):** Pure clinical white for data tables, microplate grids, and reading panels.
  - **Subtle Partition Border (`#e2e8f0`):** Hairline demarcations separating dense scientific parameters.
  - **Muted Slate (`#64748b`):** Metadata, units of measure, and inactive state markers.
  - **Deep Slate Body (`#334155`):** High-readability continuous reading text and configuration values.
  - **Primary Ink Slate (`#0f172a`):** Maximum-contrast headlines, critical values, and column headers.

### Alert Tints & System States
- **Success / Optimal:** Emerald tint background (`#ecfdf5`), border (`#a7f3d0`), foreground text (`#065f46`).
- **Informational:** Cyan tint background (`#f0f9ff`), border (`#bae6fd`), foreground text (`#0369a1`).
- **Warning:** Amber tint background (`#fffbeb`), border (`#fde68a`), foreground text (`#92400e`).
- **Critical / Contamination Alert:** Crimson tint background (`#fef2f2`), border (`#fecaca`), foreground text (`#991b1b`).

## Typography

The typographic system relies on **Inter** configured with tabular numeric figures (`tnum`) across all analytical workflows to maintain alignment in measurement columns, pipetting sequences, and real-time readouts.

### Hierarchy & Treatment
- **Headlines (`headline-xl` to `headline-sm`):** Rendered in Deep Slate (`#0f172a`) with subtle negative tracking. Used exclusively for run identifiers, assay names, and dockable workstation headers.
- **Body (`body-lg` to `body-sm`):** Set in Neutral Slate (`#334155`) for continuous procedural protocols and diagnostic notes. Line heights remain generous to ensure effortless legibility when reading from standing desk positions.
- **Labels & Micro-data (`label-lg` to `label-sm`):** Rendered with medium/semibold weights. `label-sm` leverages uppercase styling with expanded letter-spacing for protocol stages, unit suffixes (e.g., `μL`, `ng/μL`, `°C`), and device connection badges.
- **Metric Display (`metric-display`):** Dedicated token for live sensor data, PCR cycle counts, and spectrometer optical density results.

## Layout & Spacing

This design system uses a dense desktop-first layout designed for widescreen bench terminals and instrumentation control screens.

### Grid & Canvas Structure
- **Screen Canvas:** Outer margins adjust from `1rem` on narrow viewports to `2rem` on fixed high-resolution lab displays.
- **Column System:** A 12-column variable grid architecture. Standard multi-panel configurations employ a persistent left navigation rail (64px collapsed, 240px expanded), an active assay workspace (8 to 9 columns), and a contextual telemetry/inspector panel (3 to 4 columns).
- **Sub-Grid Rhythm:** Built on a disciplined 4px base increment. Spacing values prioritize tight information density (`space-xs` and `space-sm`) inside analytical controls, expanding to `space-lg` and `space-xl` between modular equipment cards.

## Elevation & Depth

The design system minimizes dramatic dropshadows, replacing them with flat clinical segmentation that mirrors clean lab equipment interfaces.

### Elevation Levels
- **Level 0 (Workbench Substrate):** Slate background (`#f8fafc`). Baseline canvas hosting passive modules.
- **Level 1 (Clinical Platters & Panels):** Pure white fill (`#ffffff`) bounded by a hairline border (`1px solid #e2e8f0`). No shadow is cast; separation is achieved entirely via luminance difference against the canvas.
- **Level 2 (Active Modules & Drag Target Wells):** Pure white platter with a crisp border (`#cbd5e1`) and an ultra-subtle directional lift: `0 1px 3px 0 rgba(15, 23, 42, 0.05)`.
- **Level 3 (Diagnostic Flyouts & Popovers):** Elevated overlays for calibration menus, filter pickers, and tooltips. Enclosed in `#e2e8f0` with ambient soft attenuation: `0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)`.
- **Level 4 (Critical Run Modals):** Top-tier procedural interruptions requiring full attention. Rendered with `0 12px 24px -4px rgba(15, 23, 42, 0.12)` over a 40% cool slate backdrop scrim (`#0f172a` with 40% opacity).

## Shapes

The design system adheres to a disciplined, slightly softened geometric radius structure (roundedness level `1`), imparting modern machine precision without playful or casual exaggerations.

### Curvature Guidelines
- **Structural Framing (`0.25rem` / `4px`):** Used for base buttons, inputs, segmented controls, table row highlights, and status tags.
- **Panels & Containers (`0.5rem` / `8px`):** Applied to data card platters, well-plate matrix containers, modal panels, and alert banners.
- **Pill Exceptions (`9999px`):** Restricted solely to micro-status indicators (e.g., "Active Run", "Calibrated", "Standby") and live numerical count badges.

## Components

### Buttons
- **Primary Bio Action:** Background `#059669`, border `1px solid #047857`, text `#ffffff`. Hover: `#047857`. Focus: 2px ring `#059669` offset by 2px `#ffffff`.
- **Secondary Analytical:** Background `#f0fdf4`, border `1px solid #a7f3d0`, text `#065f46`. Hover: `#dcfce7`.
- **Tertiary Surface:** Background `#ffffff`, border `1px solid #e2e8f0`, text `#334155`. Hover: `#f8fafc`, text `#0f172a`.
- **Destructive Reagent Stop:** Background `#fef2f2`, border `1px solid #fecaca`, text `#b91c1c`. Hover: `#dc2626`, text `#ffffff`.

### Chips & Badges
- Constructed with `label-sm`, height 24px, padding 0 8px, and rounded-sm (4px) or full pill (9999px).
- **Run Active:** Background `#ecfdf5`, border `1px solid #a7f3d0`, text `#047857`, featuring a leading 6px pulsing emerald dot.
- **Data Metric / Spec:** Background `#f1f5f9`, border `1px solid #e2e8f0`, text `#475569`.
- **Incubation Warning:** Background `#fffbeb`, border `1px solid #fde68a`, text `#b45309`.

### Input Fields & Controls
- **Text Inputs & Selects:** Height 36px, background `#ffffff`, border `1px solid #cbd5e1`, font `body-md`, padding 0 10px. Active focus switches border to `#059669` accompanied by a 1px glow outline. Placeholder text is `#94a3b8`.
- **Tabular Numeric Inputs:** Fixed monospace tabular figure arrangement with integrated engineering units (`μL`, `rpm`, `s`) pinned to the right edge in `#64748b`.
- **Checkboxes & Radios:** 16x16px boxes, border `1px solid #cbd5e1`, rounded 3px (checkbox) or circular (radio). Checked state fills `#059669` with crisp white inner glyph.

### Cards & Platter Containers
- White `#ffffff` background with 1px hairline border `#e2e8f0`. Header zones feature a bottom divider border `#f1f5f9`, housing `headline-sm` titles and accompanying tool actions. Internal padding remains uniform at `1rem` or `1.25rem`.

### Specialized Laboratory Components
- **Well Plate Matrix (96 / 384):** Circular sample cells (1:1 ratio) with hairline gray rims (`#e2e8f0`). Blank wells show subtle `#f8fafc` fills; populated wells display concentration gradients across cyan (`#0284c7`) and emerald (`#059669`).
- **Telemetry Readout Strip:** Continuous horizontal data bar featuring micro-labels (`label-sm`), high-contrast metrics (`metric-display`), and integrated sparklines rendered with a 1.5px bio-emerald stroke.