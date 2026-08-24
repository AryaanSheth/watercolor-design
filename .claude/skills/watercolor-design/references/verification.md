# Verification

## Source checks

Run the project's syntax check, typecheck, or build as applicable. Check the diff for whitespace errors and accidental unrelated changes.

These checks support visual verification; they do not replace it.

## Rendered-state checks

Open the actual site and inspect:

1. Opening composition.
2. First visible growth.
3. Leaf attachment and fully grown leaf position.
4. Bud attachment to the live stem tip.
5. Mid-bloom petal unfolding.
6. Fully open bloom.
7. Mid-transition from bloom to seed head.
8. Fully formed seed head.
9. Mid-release with attached and detached seeds.
10. Final state after complete dispersal.

At every boundary, ask:

- Does the old anatomy physically become or reveal the new anatomy?
- Does anything float, pop, crossfade, or scale from the wrong origin?
- Does pigment retain variation during motion?
- Do persistent structures end in a believable pose?

## Typography checks

- Inspect one early, middle, and complete handwriting frame.
- Confirm visible glyphs are complete rather than rectangularly clipped.
- Confirm lines stay within the viewport and do not overlap the focal subject unintentionally.
- Confirm inactive text is actually removed from rendering, not merely hidden through inherited visibility that children can override.
- Hover the illustration long enough to catch browser-native tooltips. Remove unintended SVG `<title>` tooltips while keeping an accessible name and description.

## Responsive checks

Verify at 320, 375, 414, 768, and a desktop width such as 1200 or 1280 pixels.

For each width, confirm:

- `scrollWidth - clientWidth` equals zero.
- The focal subject remains legible and intentionally positioned.
- Text does not clip or overflow.
- A narrow-screen static or simplified version is coherent when scroll scrubbing is disabled.
- No essential content depends only on hover.

## Performance checks

- Scroll from start to finish and back without visible lag.
- Confirm the scroll handler schedules at most one animation frame at a time.
- Confirm repeated SVG or DOM nodes are not created during scrolling.
- Check the browser console for new errors and warnings.
- Avoid claiming a frame-rate number unless it was actually measured.

## Reporting

Separate evidence:

- `changed`: source was edited.
- `compiled`: syntax, typecheck, or build passed.
- `product flow verified`: the rendered lifecycle and responsive states were visually inspected.

Name the exact missing check if verification stops before the product flow.
