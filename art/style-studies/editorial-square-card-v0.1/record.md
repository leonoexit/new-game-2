# Editorial square card study v0.1

- Purpose: answer the owner's correction that the earlier studies looked like scenery or simple outlined icons, while the two new references are composed graphic tiles with repeated motifs, flat saturated color, thick dark lines, and compact information bands.
- Status: `superseded` as an art direction. The owner rejected this treatment on 2026-09-26 because it reads like educational content. The square-card layout remains a useful UI study; neither art nor layout is approved for runtime.
- Date: 2026-09-26.
- Tool: built-in `image_gen` for three raster motifs; model version and seed unavailable. HTML/CSS authors the two square-card layout comparisons.
- Subjects: `Hedgerow (Berries ready)`, `Turnip Crop (Mature)`, and `Farmhouse`. These cover Vegetation, Crop, and Building without assuming every card needs a mascot character.
- Reference inputs: the two posters supplied by the owner in the 2026-09-26 conversation were inspected for graphic principles only. They were not passed to generation, copied into the repo, or used for their logos, brands, fish/coffee content, Japanese text, or exact layout.
- Open separately: [phone-size card comparison](index.html). `Art led` restates the present image-plus-name idea; `Graphic frame` is a UI hypothesis with top identity, side location band and a short bottom state/context label. Both use the same generated motifs.
- Art sources: [Hedgerow initial](source/hedgerow-initial-source-v0.1.png), [Hedgerow final](source/hedgerow-motif-source-v0.1.png), [Mature Turnip Crop](source/turnip-crop-mature-motif-source-v0.1.png), [Farmhouse](source/farmhouse-motif-source-v0.1.png).
- Processed 1:1 assets: [Hedgerow](processed/hedgerow-motif-512-v0.1.png), [Mature Turnip Crop](processed/turnip-crop-mature-motif-512-v0.1.png), [Farmhouse](processed/farmhouse-motif-512-v0.1.png). Transparent margins were trimmed; each motif was resized with ImageMagick Lanczos to fit within 480 × 480 and centered on a transparent 512 × 512 square. These files are studies, not runtime assets.

## Reading the references

The repeated fish and cups establish rhythm rather than a naturalistic scene. Deep navy lines hold bright blocks together. A large word, a narrow side strip and small badge form a hierarchy inside the square. The colorful poster background is outside the card and is not needed for the game UI. This study borrows those principles without making a Japanese setting or language choice. The owner later rejected this art direction for the game; the composition and information hierarchy remain separate lessons for square tableau UI.

## Review at phone tableau size

- The three motifs remain identifiable in the `Art led` row at roughly 160–180 square pixels. This row retains the current important property: the subject occupies most of the square and the name is readable at the foot.
- The `Graphic frame` row creates a stronger collected-card identity, but its Type and state/context microtext is small. Identity is the only text this study expects a player to rely on at tableau size; full information remains in the existing Preview mode.
- Repetition works naturally for berries and three turnips. Farmhouse stays a single icon. That is preferable to forcing one character or repeated house on every card.
- The Hedgerow source was revised from an upright fruit branch into a compact rooted shrub so its card identity reads as a bush rather than a held item.
- The motif art and UI frame are deliberately separate. The study does not change the square-card contract, action grammar, Card Register, runtime art assignments, or the project's approved pixel-art skill.
- Japan-inspired setting, architecture and terminology remain an open future direction. These posters alone do not decide the game's world.

## Generation prompts

### Mature Turnip Crop

> Use case: stylized-concept. Asset type: a SINGLE square 1:1 raster ART MOTIF for a Little Valley Cards UI study, not a finished card and not runtime approved. Subject: MATURE TURNIP CROP. Draw exactly THREE mature turnips in a tight graphic staggered stack, each white round root with a violet shoulder and oversized green leafy top, with only two small geometric soil marks. Repetition is the composition, like a playful editorial print. Style: high-contrast contemporary graphic illustration, confident very dark navy continuous outlines of uniform weight, flat saturated cobalt blue, bright citrus yellow, grassy green, warm coral and clean white, 2-3 solid tones per object, slightly abstract geometry, clean hard edges, an energetic diagonal rhythm. Think compact Japanese-influenced graphic design principles but DO NOT copy any reference artwork, packaging, product, brand, or layout. Transparent background around all motifs so a code-rendered square card frame can be added separately. No landscape, horizon, sky, person, face, text, Japanese characters, labels, symbols, number, card border, frame, UI, logos, watermarks, painterly textures, gradients, or 3D render. All three turnips must remain legible at 160 px.

### Hedgerow initial

> Use case: stylized-concept. Asset type: SINGLE square 1:1 raster ART MOTIF for Little Valley Cards graphic-card UI study, transparent background, not a finished card. Subject: HEDGEROW, a small dense berry-producing BUSH, clearly not a tree. Make one simplified angular leafy bush built from overlapping graphic leaf shapes and FOUR oversized blue berry clusters arranged in a strong rhythmic pattern; one branch curves through the composition. No loose fruit, basket, people, or landscape. Visual language must match a contemporary flat editorial graphic print: thick uniform very dark navy outlines, bold cobalt/ultramarine berry blue, lively leaf green, one small citrus-yellow accent, flat solid color areas, crisp hard edges, subtle asymmetry, very little detail, visually readable at 160px. Strong graphic silhouette and repeating berry circles are the point. Leave generous transparent space around the entire motif so a separate code-rendered square card frame can contain it. No text, labels, Japanese characters, numbers, logos, card frame, UI, packaging, background scenery, sky, ground, texture, gradient, gloss, 3D, or watermark. Fresh original artwork; do not reproduce any referenced fish or coffee poster.

### Hedgerow revision

> Edit the attached Little Valley Cards HEDGEROW ART MOTIF. Keep the transparent square canvas, flat saturated graphic-print colors, thick uniform very dark navy outlines, bright cobalt blue berries and crisp edges. Change the silhouette from an upright open berry branch into a LOW, COMPACT, ROUNDED HEDGEROW BUSH rooted in one small dark base. Multiple short stems and dense overlapping leaf masses should form one unmistakable shrub, with four rhythmic blue berry clusters visible across its surface. Reduce individual berry star marks; use simple dots/highlights instead. Leave generous transparent outer space. Keep it an original art-only motif, not a scenic illustration. Do not add sky, ground, horizon, basket, person, card border, frame, typography, UI, logo, gradients, 3D, or watermark. Readable at 160 pixels.

### Farmhouse

> Use case: stylized-concept. Asset type: SINGLE square 1:1 raster ART MOTIF for a Little Valley Cards graphic-card UI study, transparent background, not a finished card. Subject: FARMHOUSE, one small welcoming cream cottage with a bold terracotta gabled roof, cobalt-blue shutters, and a clearly visible wooden front door. Simplify the architecture to a memorable nearly abstract icon; use only a couple of geometric details: one chimney and one window flower box. Compose it on a diagonal, broad and compact, leaving transparent breathing room for a separate code-rendered card frame. Contemporary flat editorial graphic-print visual language: extremely thick uniform dark-navy outline, flat warm cream, terracotta orange, cobalt blue, bright citrus yellow and one tiny leaf-green accent, crisp hard edges, solid geometric color blocks, no painterly shading, no scenic detail. Must be readable at 160px. No sky, grass, trees, landscape, path, people, other buildings, text, Japanese characters, numbers, logos, card frame, UI, packaging, texture, gradient, gloss, 3D render, or watermark. Original design; do not copy the user's reference posters' branding or layout.
