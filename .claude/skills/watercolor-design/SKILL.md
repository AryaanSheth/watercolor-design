---
name: watercolor-design
description: Create or revise websites, interfaces, illustrations, and scroll-driven art in a tactile watercolor and pencil style. Use when a request mentions watercolor, hand-painted UI, paper texture, pigment bleed, botanical illustration, sketch lines, pencil lettering, poetic portfolios, organic growth animation, or asks to soften digital-looking solid fills and rigid geometry.
---

# Watercolor Design

Create digital work that behaves like pigment, paper, and graphite rather than flat vector art with a texture overlay.

## Workflow

1. Inspect the existing implementation, visual tokens, animation ownership, and closest analogous component before editing.
2. Identify the subject's physical structure and lifecycle. Define what grows from what and which forms persist between states.
3. Build the composition from translucent layers: paper, broad washes, subject pigment, pooled accents, then sparse graphite.
4. Animate continuous transformation. Preserve attachment points, mass, direction, and visual identity across every state.
5. Add text only when it earns space in the artwork. Treat lettering as graphite, not interface chrome.
6. Verify the rendered result at representative scroll positions and at 320, 375, 414, 768, and desktop widths.

## Non-negotiable visual rules

- Use several translucent washes instead of one opaque fill.
- Vary wash position, edge, opacity, and hue slightly. Avoid uniform duplicates.
- Let pigment pool selectively near folds, overlaps, bases, or shadowed edges.
- Make silhouettes softly irregular. Avoid hard rectangles, perfect polygons, and ruler-straight botanical lines.
- Keep some paper showing through the subject.
- Use sketch lines on roughly 10–30% of meaningful contours, not every edge.
- Keep graphite dull, broken, and slightly inconsistent. Never use pure black for pencil work.
- Preserve restraint. Do not stack blur, noise, displacement, hatching, halftone, glow, and grain on every element.
- Make the focal subject carry the composition. Do not add decorative content after the requested artwork merely to fill the page.

Read [references/visual-language.md](references/visual-language.md) before creating or revising the painted surface.

## Motion rules

- Make emergence causal: stem first, then attached leaf or bud, then bloom, seed head, and release.
- Keep every new form connected to its parent from the first visible frame.
- Unfurl leaves from their base; do not scale a finished leaf from its center.
- Open petals from a folded bud; do not spawn a completed flower and crossfade.
- Transform old anatomy into the next state whenever physically plausible.
- After dispersal, fold persistent structures into a spent form instead of fading or shrinking them away.
- Move detached particles along individual curved paths with small variations; release all particles when the story requires full dispersal.
- Animate `transform` and `opacity` where possible. Create SVG nodes once, outside the scroll loop.
- Schedule scroll rendering through one `requestAnimationFrame` gate. Never rebuild texture or geometry per frame.
- Provide a reduced-motion composition that remains understandable without spatial scrubbing.

Read [references/botanical-motion.md](references/botanical-motion.md) for lifecycle planning and implementation patterns.

## Typography rules

- Prefer a real handwritten or pencil-like face only when it fits the project; otherwise use restrained humanist type with graphite treatment.
- Use a dull, low-contrast color with subtle positional or rotational inconsistency.
- Keep words as wrapping units.
- For handwriting reveals, expose complete glyphs sequentially. Never animate a rectangular `clip-path` through cursive letters.
- Avoid dark caption plaques, high-contrast labels, and browser-native SVG title tooltips over the artwork.
- Preserve accessibility with `aria-label` and `aria-describedby`; do not depend on an SVG `<title>` when its native hover tooltip harms the composition.

## Implementation choices

- Prefer inline SVG for organic multi-part illustration and scroll-linked transformation.
- Prefer CSS backgrounds and pseudo-elements for paper grain and broad atmospheric washes.
- Use Canvas or p5 only when the work genuinely needs procedural painting, many independent marks, or raster-style accumulation.
- Reuse the project's framework and animation model. Do not add a large motion library for a single sequence.
- Keep deterministic randomness seeded so the painting remains stable between renders.

## Verification contract

Do not claim completion from source inspection alone. Read and follow [references/verification.md](references/verification.md).

At minimum:

- Inspect the opening, each transformation boundary, one mid-transition frame, and the final state.
- Confirm no element floats away from its attachment point.
- Confirm no state merely pops in, crossfades, or collapses without narrative reason.
- Confirm text is complete, readable, and free of clipped glyphs.
- Confirm no horizontal overflow at required widths.
- Confirm the browser console has no errors or warnings introduced by the work.

Report exactly which rendered states and viewport widths were verified. Label anything not visually checked as unverified.
