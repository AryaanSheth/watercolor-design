---
name: painted-web-design
description: Create or redesign websites, landing pages, portfolios, editorial pages, product surfaces, and digital visual systems in a tactile hand-painted style using watercolor glazing, ink and pencil marks, botanical ornament, imperfect geometry, and paper-like texture. Use when a user asks for a painterly, watercolor, handmade, illustrated, botanical-journal, folk-art, art-nouveau, or visibly hand-drawn web experience, or asks to translate painted artwork or p5.brush references into a functional interface. Supports concept direction, frontend implementation, generated art assets, responsive behavior, interaction design, accessibility, and visual QA.
---

# Painted Web Design

Create interfaces that feel composed by a painter without making them behave like an art project. Put expression in color, texture, silhouette, ornament, and rhythm; keep content, controls, focus states, and responsive behavior exact.

## Establish the direction

1. Read the brief, existing repository, and supplied visual references before changing code. Find the closest existing page or component pattern and reuse its architecture.
2. Identify the page's real job, primary action, content hierarchy, audience, and required states. Do not let decoration obscure them.
3. Write a one-sentence art-direction thesis before implementation. Specify:
   - medium: watercolor, gouache, ink, graphite, pastel, block print, or a deliberate mix;
   - mood: nocturnal botanical, sun-faded field journal, ornamental folk garden, gallery sketchbook, or another brief-specific direction;
   - contrast: dark saturated ground with luminous washes, or warm paper with restrained pigment;
   - recurring motif: petals, leaves, stains, brush arcs, ruled lines, marginalia, or geometric ornament;
   - density: one focal painting with quiet space, or a patterned editorial field.
4. Choose one direction and commit to it. Do not produce a generic option menu unless the user asks for alternatives.

## Use a coherent painting grammar

Build the design from a small vocabulary repeated with variation:

- **Ground:** Use a deep pigmented field or a warm paper tone. Avoid flat black and sterile pure white.
- **Glazes:** Layer translucent color instead of relying on glossy gradients. Let overlaps create darker or richer color.
- **Edges:** Mix crisp functional edges with feathered, pooled, dry-brush, or irregular decorative edges.
- **Marks:** Use sparse pencil construction lines, ink hatching, botanical leader lines, small dots, or registration marks as secondary detail.
- **Focal color:** Reserve the brightest coral, magenta, gold, or ivory for the main story or action.
- **Rhythm:** Repeat shapes without cloning them. Vary scale, rotation, crop, opacity, and spacing.
- **Depth:** Separate background stains, middle foliage or ornament, foreground content, and occasional marks crossing a boundary.
- **Material:** Suggest paper tooth and pigment granulation subtly. Texture should reward looking, not reduce legibility.

Use custom properties or theme tokens for ground, paper, ink, foliage, focal pigments, border, shadow, and texture opacity. Limit the palette; derive secondary colors from transparent overlaps rather than adding unrelated hues.

## Compose the page like a painting

- Start with one dominant focal area, one supporting area, and quiet negative space.
- Prefer asymmetrical balance, controlled overlap, generous crops, and varied vertical rhythm over a stack of interchangeable centered sections.
- Let botanical or painted elements enter from edges and sit partly behind content. Keep important copy and controls unobstructed.
- Use grids for alignment, then break the grid only for an intentional focal gesture.
- Treat each viewport as a composition. Recompose for mobile; do not merely shrink the desktop painting.
- Give dense painted passages a quiet neighboring area. Do not texture every surface at equal strength.

For a dark tropical treatment, use near-black blue-green or forest washes, layered leaves, luminous ivory/coral/magenta focal forms, and small warm-gold details. For a field-journal treatment, use warm paper, faded stains, restrained dusty pigments, graphite grids, and sparse diagrammatic marks. Combine these modes only when the transition has a clear compositional purpose.

## Choose the right rendering medium

Select the simplest medium that preserves the intended character:

- Use CSS for color fields, layout, translucent layers, masks, grain overlays, and responsive composition.
- Use inline SVG for deterministic hand-drawn borders, botanical line work, separators, masks, and small ornaments. Vary paths deliberately; avoid applying a global wobble filter to everything.
- Use Canvas or p5/p5.brush for generative washes, blooms, procedural petals, or ambient marks that benefit from controlled randomness. Seed randomness when repeatability matters and provide a static fallback.
- Generate or paint raster assets when authentic pigment behavior is the focal content. Request transparent or edge-compatible assets where needed, optimize them, and keep source prompts or editable originals when the project expects iteration.
- Use semantic HTML for all meaningful content. Never bake navigation, headings, labels, or calls to action into artwork.

If the repository already has a framework, component system, or styling convention, extend it. Do not replace the stack merely to obtain the look.

## Build expressive but usable components

- Typography: Pair one characterful display face with a highly readable text face. Use display lettering sparingly; do not imitate illegible handwriting for body copy.
- Buttons and links: Keep generous targets, obvious hover/focus/pressed states, and readable labels. Painted fills and imperfect borders may decorate a conventional control box.
- Cards: Use only when grouping is real. Prefer layered paper panels, ruled notes, framed specimens, or open editorial groupings over a uniform grid of rounded rectangles.
- Navigation: Keep orientation and active state unmistakable. Texture may surround navigation but must not compete with it.
- Forms: Keep labels persistent, errors explicit, and inputs calm. Never use painterly ambiguity for validation state.
- Icons: Use a consistent ink or cut-paper language. Avoid mixing generic icon packs with detailed botanical illustration without adapting weight and color.
- Motion: Use slow wash reveals, restrained drift, line drawing, parallax between material layers, or a subtle bloom on emphasis. Respect `prefers-reduced-motion`; avoid continuous motion behind reading text.

## Protect against synthetic-looking output

Avoid these defaults unless the brief requires them:

- generic purple-blue gradients;
- glassmorphism, glossy 3D blobs, and neon bloom;
- identical five-petal stamps or perfectly mirrored ornament;
- a dashboard-like grid of rounded cards;
- texture pasted uniformly over every element;
- excessive torn-paper edges, doodles, tape, or coffee stains used as shorthand for handmade;
- stock watercolor clip art placed beside otherwise generic UI;
- decorative handwriting used where users must read quickly;
- fake labels, specimen numbers, or historical claims added only for atmosphere.

Imperfection must have hierarchy. Keep structural alignment, text rendering, hit areas, and component state consistent; vary the marks that convey material and authorship.

## Implement in passes

1. **Structure:** Build the semantic page, content hierarchy, responsive layout, and actual interactions without decorative effects.
2. **Color and type:** Establish the palette, type scale, contrast, and dominant focal relationship.
3. **Material layers:** Add washes, texture, border variation, illustration, and marks from back to front.
4. **Interaction:** Add state changes and motion that use the same visual grammar.
5. **Reduction:** Remove decorative marks that do not improve hierarchy, atmosphere, or continuity.

Keep generated artwork separate from interface logic. Name layers and assets by purpose rather than appearance so the system remains editable.

## Verify the real result

Run the project and inspect the actual page, not only the source or component tests.

- Capture at least one wide and one narrow viewport.
- Check the first impression, focal hierarchy, text legibility, control discoverability, contrast, keyboard focus, reduced motion, overflow, cropping, and loading behavior.
- Test empty, short, and long content where the surface is reusable.
- Confirm that painted assets do not cause layout shift or dominate bandwidth.
- Compare the rendered page with the art-direction thesis. If the style survives only as a background texture, strengthen composition or silhouette rather than adding more noise.
- If browser or device verification is unavailable, state that exact gap and do not claim the product flow is verified.

Report completion with the strongest status actually demonstrated: `changed`, `compiled`, `unit behavior covered`, `api layer verified`, or `product flow verified`.

## Interpret common requests

- “Make this feel watercolor” means introduce translucent color relationships, pigment edges, paper response, and compositional softness—not place a watercolor PNG behind the page.
- “Make it hand drawn” means vary line character, silhouettes, and spacing while preserving layout and interaction precision.
- “Use this painting as a reference” means extract its palette, density, mark vocabulary, and focal structure. Do not copy a living artist's distinctive composition or signature motifs.
- “Make a whole site in this style” means define reusable tokens and primitives first, then allow each page a different painted composition within the same visual grammar.
- “Create a design” means deliver an implementable responsive system or artifact, not only a mood board, unless the user explicitly asks for exploration.
