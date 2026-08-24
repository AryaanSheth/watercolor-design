# Watercolor Visual Language

## Surface hierarchy

Build the image in this order:

1. Paper base with warm or cool off-white color.
2. Fine fiber or tooth pattern at very low contrast.
3. Two or three broad atmospheric washes with large soft boundaries.
4. Main subject washes with overlapping transparent color.
5. Selective pigment pools and blooms.
6. Sparse graphite construction or contour marks.
7. Text treated as another dry medium on the same paper.

Texture must affect the composition without becoming a visible repeating wallpaper.

## Pigment construction

For each major painted form, combine a small number of purposeful layers:

- Base wash: translucent local color.
- Wandering-edge duplicate: slightly offset, blurred, or displaced.
- Pool: smaller darker shape near an overlap, fold, root, or center.
- Dry-brush gap: partial transparency or an interrupted edge.

Avoid placing identical duplicates directly on top of one another. The viewer should perceive material variation, not a software effect.

For SVG, prefer low-frequency `feTurbulence` feeding a modest `feDisplacementMap`, followed by a sub-pixel or very small blur. Apply expensive filters to grouped layers, not hundreds of individual marks.

## Color

- Avoid pure black and pure white in the painted surface.
- Mix neighboring hues inside one subject. A green leaf may include olive, moss, and muted blue-green.
- Keep most alpha values below fully opaque.
- Reserve the strongest chroma for the focal bloom, a pigment pool, or a small narrative event.
- Preserve contrast through value structure, not hard outlines.

## Shape

- Use Bézier curves with slight asymmetry for stems, leaves, hills, and petals.
- Vary paired forms. Left and right leaves or sepals should not be exact mirrors.
- Let edges wander by a few pixels at the artwork's native scale.
- Avoid perfect circles for organic centers; layer offset circles or use an irregular path.
- Do not blur every form. Combine soft washes with a few dry, lightly articulated edges.

## Sketch lines

Sketch lines are evidence of process, not an outline system.

- Add them to selected veins, construction arcs, petal folds, or one side of a contour.
- Use low opacity, round caps, and slightly varied paths.
- Leave most painted edges without graphite.
- Never trace every leaf, petal, seed, or hill.
- Remove a sketch line if it competes with the pigment instead of supporting form.

## Pencil text

- Choose graphite-brown, blue-grey, or green-grey instead of black.
- Use modest variation between words or short runs, not random distortion on every glyph.
- Keep line-height generous enough for ascenders and descenders.
- Test every wrap at the actual viewport.
- Animate complete characters or use a true path-drawing treatment. Never reveal cursive text by slicing through glyph boxes.

## Common failure modes

- Flat vector fills under global noise: add internal wash variation and paper gaps.
- Hard, straight silhouettes: redraw the geometry; blur alone will not make it organic.
- Too many visible sketch lines: remove most of them.
- Excessive softness: restore a few dry edges or graphite details near the focal area.
- Uniform watercolor filters: vary the material treatment by layer and purpose.
- Decorative UI plaques over art: integrate text into the paper or remove it.
