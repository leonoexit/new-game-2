# Eel Sighting opportunity study v0.1

- Purpose: test whether a face-up Fishing opportunity can show why the player already knows the exact Catch before committing a Rod
- Status: `approved reference` for Eel opportunity art; not runtime approved
- Generation date: 2026-09-22
- Tool/model: built-in `image_gen`; model metadata unavailable
- Composition input: `art/style-studies/landmark-river-fishing-spot-v0.1/processed/river-fishing-spot-512-v0.1.png`
- Rendering reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png`
- Source: `source/eel-sighting-opportunity-source-v0.1.png` (`1254x1254`)
- Delivery study: `processed/eel-sighting-opportunity-512-v0.1.png`
- Logical-size review: `processed/eel-sighting-opportunity-preview-160-v0.1.png`
- Card crop: `processed/eel-sighting-opportunity-cardcrop-512-v0.1.png`; shifts the lower-water target upward under the fixed card chrome
- Transformation: point-filter resize to exact `512x512` and `160x160`; volatile PNG metadata stripped

## Design correction

The opportunity is revealed automatically by day/weather setup. It is not a generic River card that must be clicked to reveal an Eel, and it is not the acquired fish item. The visible underwater Eel justifies exact foreknowledge; Character + Rod committed to the card produces `Fresh Eel`.

This also narrows the root visual grammar:

- action cards may depict the verb and target;
- opportunity cards depict the visible target/context, while the stacked Tool/Item supplies the verb;
- tags carry cost, requirement and condition;
- description carries the result, not a redundant CTA.

## Exploration prompt

```text
Edit Image 1 into a Little Valley Cards square paper-test opportunity illustration named Eel Sighting. Preserve the same broad river bend, near-bank timber platform, reeds, banks, mountains, camera and square composition. The important semantic change: show one unmistakable long eel silhouette already visible just below the clear water beside the platform and circular eddy, with a readable curved S-shaped body and small head under the surface. It must look like a living eel that has been spotted in the river, not an inventory fish, not caught, and not on land. Add restrained bright-rain cues: several small rain rings on the water and a few visible falling rain streaks, while keeping the scene high-key, inviting and readable rather than dark or stormy. The eel silhouette and its surface disturbance must remain legible at 160x160 and should be the first focal target after the dock. Use Image 2 only for approved native-pixel construction, high-key palette, colored outlines, roughly three values per material, and compact cool-teal shadows. No character, no fishing rod, no hook, no line, no net, no caught fish, no text, no numbers, no UI, no card frame, no logo, no watermark, no photorealism, no painterly gradients, no smooth vector edges, no pure black universal outlines, no heavy dithering.
```

## Pre-review

- The Eel is visibly alive below the surface and remains distinct from an acquired item.
- Rain streaks and surface rings support the condition without making the scene dark.
- No Rod appears, so the art does not imply that the Catch action has already happened.
- User review: the informed project owner confirmed the final art reads as the intended pre-catch Eel opportunity after questioning how exact fish identity could be known before using the Rod.
- Evidence limit: this confirms the design correction with an informed reviewer; a fresh participant must still distinguish Eel from a generic dark water trail without explanation.
- Approval decision: explicitly approved by the user on 2026-09-22 as one of the reviewed Mine/Fishing images.
- Direction result: approved reference for a visible pre-catch Fishing opportunity. This does not approve the underlying generic River landmark or establish runtime Fishing art.
