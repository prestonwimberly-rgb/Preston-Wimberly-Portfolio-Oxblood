---
name: Preston Wimberly Portfolio
description: Prairie Airframe, an editorial working portfolio built on a warm object inside a cool frame.
colors:
  prairie-bone: "#e8e1d4"
  airframe-aluminum: "#a7a8a3"
  instrument-black: "#252624"
  walnut: "#4b382c"
  aviation-blue: "#39566a"
  wright-brick: "#8b3f2f"
  saddle: "#7a4f32"
  field-olive: "#646455"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 6.2vw, 7rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.5rem, 2rem + 2vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.99
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(1.875rem, 1.5rem + 1.5vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.1em"
  metadata:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0"
rounded:
  none: "0px"
spacing:
  "1": "8px"
  "2": "16px"
  "3": "24px"
  "4": "32px"
  "5": "40px"
  "6": "48px"
  "7": "56px"
  "8": "64px"
  "9": "72px"
components:
  button-contact:
    backgroundColor: "{colors.aviation-blue}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-contact-hover:
    backgroundColor: "{colors.instrument-black}"
    textColor: "{colors.white}"
  text-link:
    textColor: "{colors.instrument-black}"
    typography: "{typography.label}"
    height: "44px"
  text-link-hover:
    textColor: "{colors.wright-brick}"
  site-header:
    backgroundColor: "{colors.prairie-bone}"
    textColor: "{colors.instrument-black}"
    height: "72px"
  contact-section:
    backgroundColor: "{colors.aviation-blue}"
    textColor: "{colors.white}"
  site-footer:
    backgroundColor: "{colors.instrument-black}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
---

# Design System: Preston Wimberly Portfolio

This file records the Prairie Airframe system as it is implemented in
`app/globals.css`, `app/case-studies.css`, and `app/memoir.css` on November 23,
2026. Tokens above are normative. The reasoning and dated decisions behind them
live in [docs/design-direction.md](docs/design-direction.md); when the two
disagree, check the CSS and update whichever file is stale.
[DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) records the superseded Oxblood direction.

## Overview

**Creative North Star: "Warm Object, Cool Frame"**

The work is the warm object: documentary photographs of hay, guitars, stages,
and manuscript pages, with captions that name the place, date, and credit. The
frame is cool and exact: Prairie Bone paper, Instrument Black ink, fine
Aluminum rules, square edges, and an 8px rhythm. The governing tension is
warmth without sentimentality, precision without sterility, history without
nostalgia, and modernism without coldness.

Hierarchy comes from scale, whitespace, placement, and rules, not from
surfaces or effects. Large Archivo display type acts as composition at the
opening and the contact statement; Newsreader carries narrative and section
headings; IBM Plex Mono appears only for true numbers, dates, and identifiers.
Each page has one dominant visual idea, and photographs supply the broad areas
of material warmth.

Confirmed rejections: fake age, decorative aviation motifs, generic agency
theatrics, stock atmosphere, bubbly UI, rounded cards, soft shadows, gradients,
and global texture effects.

**Key Characteristics:**
- Square construction; no radius and no shadow anywhere in the system.
- Fine 1px Aluminum rules separate sections, captions, and list rows.
- Asymmetric editorial grid that alternates image and text sides.
- Captions sit directly under or on the image and carry credit lines.
- Short, functional motion with full reduced-motion support.

## Colors

A warm paper-and-ink system with one blue for authority and one brick red used
as a measured signal.

### Primary
- **Aviation Blue** (#39566a): authority. Header contact button, project
  kickers, the wordmark subtitle, and the full-bleed contact section. White on
  Aviation Blue meets AAA. Prairie Bone on Aviation Blue meets AA.

### Secondary
- **Wright Brick** (#8b3f2f): signal. The 3px opening rule, section numbers,
  chapter indexes, writing labels, link hover, and text selection. Meets AA on
  Prairie Bone.

### Tertiary
- **Saddle** (#7a4f32) and **Field Olive** (#646455): approved palette members,
  defined in CSS and currently unused. Prairie Bone on Saddle is tested to meet
  AA. Reserve them for evidence that needs a warm field, not for decoration.

### Neutral
- **Prairie Bone** (#e8e1d4): the page. Default background for the header,
  sections, practice note, and About copy.
- **Instrument Black** (#252624): ink and night. Body text, the opening hero
  field, image backgrounds, and the footer. AAA on Prairie Bone.
- **Walnut** (#4b382c): secondary ink for caption credits, metadata lines, and
  list separators. AAA on Prairie Bone, AA on Airframe Aluminum.
- **Airframe Aluminum** (#a7a8a3): rules, dividers, the gap between manuscript
  pages, and the writing-row hover fill. Also secondary caption text on
  Instrument Black, where it meets AA.
- **White** (#ffffff): text on Aviation Blue, Instrument Black, and Wright
  Brick; manuscript page fill.

### Named Rules
**The Measured Signal Rule.** Wright Brick marks; it never fills. Use it for a
rule, a number, a label, or a hover state, never as a section background, and
never as small text on Instrument Black.

**The Aluminum Is Structure Rule.** Airframe Aluminum is a rule or fill, never
text on Prairie Bone and never the color of an essential control.

**The Tested Pairing Rule.** Use only the pairings asserted in
`tests/design-system.test.mjs`. A new foreground and background combination
needs a contrast test before it ships.

## Typography

**Display Font:** Archivo (with Arial, sans-serif)
**Body Font:** Newsreader (with Georgia, serif)
**Label/Mono Font:** IBM Plex Mono (with monospace), for numbers and dates only

**Character:** Archivo gives orientation and structure; Newsreader brings the
human voice and consequence. Self-hosted through Fontsource: Archivo 400, 500,
600, 700, 900; Newsreader 400, 400 italic, 600; Plex Mono 400, 500.

### Hierarchy
- **Display** (Archivo 900, clamp(3.5rem, 6.2vw, 7rem), 0.92): the opening
  headline, with an italic Newsreader phrase inside it. The contact statement
  runs larger, clamp(4rem, 8.5vw, 10rem) at 0.9.
- **Headline** (Newsreader 400, clamp(2.3rem, 4vw, 4.5rem), 0.99): the Selected Work and Writing section headings. The practice note and About
  use their own display sizes. Case-study section headings use `--text-h2`
  (clamp(2rem, 1.45rem + 2.2vw, 4.1rem), at 1.1).
- **Title** (Archivo 600, clamp(2.3rem, 3.6vw, 3.25rem), 1.04): homepage
  project titles, capped near 52px. Sandpaper's title switches to Newsreader
  400 to match the manuscript.
- **Body** (Newsreader 400, 17px base, 1.6): reading text, held to a 46rem
  measure. Project premises and proof paragraphs share the fluid body size.
- **Label** (Archivo 700, 0.75rem, 0.08 to 0.14em, uppercase): navigation,
  eyebrows, section numbers, text links, caption credits, and the footer.
- **Metadata** (IBM Plex Mono 400, 0.75rem): chapter numbers and years.

### Named Rules
**The Heaviest Weight Rule.** Archivo 900 is reserved for the opening and
contact statements and the wordmark. Project titles stay at 600.

**The True Data Rule.** IBM Plex Mono appears only for real numbers, dates,
and identifiers, never as texture.

**The Twelve Pixel Rule.** Interface text and metadata stay at 12px or larger.

## Layout

Content sits in a 1368px maximum width. Pages share a 16px gutter up to
760px. Above 760px, the editorial gutter is clamp(24px, 4.45vw, 64px) and the
case-study gutter is clamp(24px, 5vw, 72px). Spacing follows an 8px base with
4px steps for smaller adjustments and fluid clamps for editorial gaps.

The homepage opens with a full-viewport split: copy on Instrument Black at
left, photograph at right. Selected work follows as alternating two-column
rows (1.25fr image, 0.8fr text, swapping sides on even rows); the third row
lets its photograph span the full grid. Section headings use a narrow label
column beside a wide heading column. The practice note, writing list, About
split, contact block, and three-column footer close the page.

Breakpoints are 1050px, 760px, and 430px. Below 760px, rows collapse to one
column in source order: title, image and caption, premise, role and date,
result, link. At phone widths the header keeps Work, Résumé, and Contact. The
sticky header is 72px tall, with matching scroll padding for anchors.

## Elevation & Depth

The system is flat. No element uses `box-shadow`. Depth comes from tonal
fields (Prairie Bone, Instrument Black, Aviation Blue), 1px Aluminum rules,
and the photographs themselves. No captions or text sit over images.

### Named Rules
**The Flat Paper Rule.** Surfaces never lift. Separate content with a rule, a
field change, or space.

## Shapes

Every corner is square: no `border-radius` anywhere in the shipped CSS. A
2px `--radius-detail` variable survives from the Oxblood system and is unused.
Borders are 1px Aluminum rules, with three deliberate exceptions: the 3px
Wright Brick opening rule, the 2px white underline on the contact link, and
the 1px left rule on pull-quote excerpts. Images sit in fixed aspect-ratio
frames (8:5 for projects, 4:3 for the manuscript spread, 16:9 for About) with
`overflow: hidden` crops that keep the subject intact.

## Components

### Buttons
- **Shape:** square (0px).
- **Contact button:** Aviation Blue with white label text, 16px desktop side padding,
  44px minimum height. The only filled control in the header.
- **Hover / Focus:** the background switches to Instrument Black immediately
  on fine-pointer hover. Focus shows a 3px Instrument Black outline at 4px offset.

### Text Links
- **Style:** uppercase label type with a 1px underline in the current color,
  24px gap before any arrow, 44px minimum height.
- **Hover:** color shifts to Wright Brick (to white inside the dark hero) over
  160ms on fine pointers.
- **Inline links** in excerpts and email use a standard underline with 4 to 5px
  offset.

### Navigation
- **Style:** sticky 72px Prairie Bone bar with a 1px Aluminum bottom rule.
  Wordmark in Archivo 900 uppercase with an Aviation Blue subtitle.
- **Links:** uppercase labels at 0.1em tracking. A 1px Instrument Black
  underline appears immediately on fine-pointer hover. Every target is at least 44 × 44px.
- **Mobile:** gaps tighten to 4px under 430px; the contact button keeps its
  fill with reduced padding. Links use a translucent Airframe Aluminum tap highlight.

### Captions
- **Style:** a 1px Aluminum top rule, Archivo at 0.76rem and 1.45 line height,
  then an uppercase Walnut credit line (0.75rem, 0.08em). On dark fields the
  rule and credit switch to translucent Bone and Aluminum.

### Project Rows
The signature component. Chapter number in Wright Brick Plex Mono beside an
Aviation Blue kicker, an Archivo 600 title, an 8:5 image with caption, a
Newsreader premise, a compact role and date line, a dated proof sentence, and
a text link. Rows alternate sides on desktop and read straight down on phones.

### Writing Rows
A four-column row (label, title, note, arrow) between 1px Aluminum rules,
minimum 152px tall on desktop. Titles use Newsreader 400, starting at 28px.
Fine-pointer hover switches the fill to Airframe Aluminum and the label and
note to Instrument Black in the same frame.

### Opening Index
Four rows under the opening headline, between translucent Bone rules: a Plex
Mono chapter number and a short fact in Airframe Aluminum, with the project
name in Archivo 700 Bone. Each row links to its homepage project, with a 44px
minimum height. The project name gains an underline on hover. On phones the fact
drops beneath the name.

### Contact Section
A full-width Aviation Blue block, at least 500px tall, with the display-weight
statement, a short fit paragraph, a large email link with a 2px underline
in the link color, and the visible address beneath. The link shifts from
white to Prairie Bone on fine-pointer hover.

## Do's and Don'ts

### Do:
- **Do** keep every corner square and every surface flat.
- **Do** separate content with 1px Airframe Aluminum rules and space on the
  8px rhythm.
- **Do** let photographs carry warmth, framed at 8:5, 4:3, or 16:9 with a
  caption and credit directly beneath.
- **Do** keep Wright Brick to rules, numbers, labels, and hover states.
- **Do** keep interactive targets at 44px or larger with a visible 3px focus
  outline.
- **Do** use 160ms ease-out for fine-pointer editorial link fades, including
  the opening index. Keep the navigation underline, keyboard navigation,
  and disclosures immediate.

### Don't:
- **Don't** add rounded cards, soft shadows, gradients, or global texture.
- **Don't** add fake age, decorative aviation motifs, or stock atmosphere.
- **Don't** set Airframe Aluminum as text on Prairie Bone, or Wright Brick as
  small text on Instrument Black.
- **Don't** use Archivo 900 for project titles or Plex Mono for anything that
  is not a number, date, or identifier.
- **Don't** fill a section with Wright Brick.
- **Don't** add runtime JavaScript for visual effects; the export ships none.
