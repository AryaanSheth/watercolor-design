# Botanical Motion

## Plan states as anatomy

Before animating, write a state table with these columns:

| State | Existing anatomy | New anatomy | Persistent anatomy | Physical action |
| --- | --- | --- | --- | --- |
| Emergence | soil or base | stem | stem | extend along a curved path |
| Leafing | stem | folded leaf | stem and leaf base | lengthen, widen, then unfurl |
| Budding | stem tip | closed bud | stem and sepals | rise from the stem endpoint |
| Bloom | bud | petals and core | stem and sepals | rotate and unfold from the center |
| Seed formation | bloom | receptacle and pappus | stem and bracts | petals wither as seed structures grow |
| Release | seed head | detached seeds | stem and spent calyx | detach, drift, curl, and disperse |

Adapt the table to the actual organism. Do not assume every plant shares this lifecycle.

## Preserve attachment

Calculate child position from the parent's current geometry rather than from an independent fixed coordinate.

For a path-grown stem:

```js
const tip = stem.getPointAtLength(stemLength * growth);
head.style.transform = `translate(${tip.x}px, ${tip.y}px) scale(${headScale})`;
```

Anchor leaf transforms at the leaf base on the stem. Grow length before width, then reduce curl. This reads as unfurling instead of scaling.

## Transform between states

Use overlapping physical actions rather than opacity swaps:

- Bud to bloom: separate folded petal groups, rotate outward, extend their length, then widen.
- Bloom to seed head: curl or narrow petals toward a spent collar while pale filaments grow from the same center.
- Seed head to release: keep seeds fully formed as they detach and travel; do not darken them after detachment.
- Final state: retain biologically persistent parts as a small spent form. Fold or dry them instead of scaling them to zero.

Keep one shared transform chain for the flower head. Do not position the bud, bloom, and seed head as unrelated objects.

## Timing

- Give each state enough scroll distance to be read before the next action begins.
- Overlap adjacent actions slightly when one physically causes the next.
- Stagger repeated parts with a narrow deterministic range.
- Avoid long overlaps that show two complete lifecycle states simultaneously.
- Inspect 25%, 50%, and 75% inside every transition, not only endpoints.

Use smooth interpolation for organic motion:

```js
const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const range = (v, start, end) => clamp((v - start) / (end - start));
const smooth = (v) => v * v * (3 - 2 * v);
const mix = (from, to, amount) => from + (to - from) * amount;
```

## Dispersal

- Give every seed a stable seeded direction, distance, turn, and timing offset.
- Keep detached seeds the same or lighter in value than attached seeds.
- Use curved or oscillating drift rather than straight radial translation.
- Move seeds beyond the composition when full release is required.
- Ensure the central receptacle and persistent bracts resolve into a believable spent state.

## Performance

- Build petals, seeds, grass, and texture nodes once during setup.
- Cache path lengths before scrolling.
- Update only transform, opacity, and stroke-dash values during rendering.
- Gate scroll handling behind one pending `requestAnimationFrame`.
- Seed random values; never recompute random geometry per frame.
- Avoid stacking costly SVG filters on each repeated particle.

For reduced motion, render one coherent representative state and expose the narrative as normal document text.
