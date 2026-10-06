# Creation and review guidance

Use this guidance to align the repository workflow with the installed Work pet creation workflow. It is a repository-authored adaptation, not a bundled copy of that skill or evidence that a particular historical run used the same version. Resolve the selected skill from the current environment and read its instructions and relevant references before execution.

## New artwork or visual repairs

- Establish one canonical full-body pet from the real references, or reuse the existing approved artwork for a motion update. Approved artwork controls rendering style; real photos clarify identity. Ground every later image-generation job in that base and the identity-defining photos. Retain coat boundaries, face, ears, eyes, nose, paws, tail, proportions, fur, lighting, and requested material across poses.
- Generate one coherent strip per animation state, not a complete atlas. Check each strip's frame count, identity, spacing, silhouette, background, and state meaning before assembly. Use the selected skill's bundled extraction and validation scripts.
- Apply a shared scale and registration across frames. Do not independently enlarge every pose; preserve the jump's actual vertical displacement and landing baseline. Correct extraction errors before regenerating good artwork.
- Keep `idle` calm and visibly alive. For blink-only idle, fix the head, torso, wrapped tail, camera, and framing; animate only the eyelids. `running-right` and `running-left` depict directional movement; `running` depicts focused work. Keep waiting, reviewing, waving, jumping, and failure reactions distinct. Do not add accessories or detached effects absent from the approved identity.
- For a requested pilot, limit generation to the requested states and preserve all current motion-stability checks. Show old/new native-size loops and an enlarged appearance comparison, then wait for user approval. Technical validity alone does not approve a changed visual style. Do not package or install an incomplete pilot.
- For motion-only updates or appearance-locked pilots, read [approved-appearance.md](approved-appearance.md) before preparing generation inputs.
- For v2, approve cardinal gaze anchors in screen coordinates: 000 up, 090 right, 180 down, 270 left. Generate and register the first coherent eight-pose look row before generating the second, using the same scale and anchor. Inspect the complete clockwise loop, including both row boundaries; repair wrong directions or visible jumps in the affected source row.
- Run the selected skill's required structural and visual quality gates on the final encoded bytes. Retain the actual reports; do not report a gate as passed unless it ran successfully. Show motion at native pet size, including state loops and idle-to-jump-to-idle, alongside contact sheets and look-direction previews.

For ChatGPT Work creation, use the installed `work-pets:create-pet` workflow and its Library, validation, preview, upload, and stable-ID verification steps. Save its artifacts to Library. For Codex creation, follow `hatch-pet` and save local artifacts; the Work upload lifecycle is not required.

## Register an existing approved pet

- Resolve the intended pet and retrieve its actual sprite sheet through the environment's supported read/download workflow. Preserve its source bytes and metadata as a local reference.
- Do not regenerate approved artwork just to publish it. Check its actual MIME type, dimensions, alpha, state occupancy, and native-size previews. A file named `.webp` may contain PNG bytes.
- Apply only deterministic target-format adaptations. This repository's Codex v2 contract uses a neutral reference at row 0, column 6; the installed Work contract may leave that cell empty. Validate each destination against its own contract. Do not alter the active Work pet while preparing a GitHub package.
- Encode actual lossless RGBA WebP, clear RGB beneath fully transparent pixels, and preserve it with `exact=True` when using Pillow. Validate again after encoding. Follow [submission-contract.md](submission-contract.md) for v1 export and repository layout.
- When only the description changes, update both v2 `pet.json` and the manifest inside the v1 ZIP without changing the sprite bytes. Keep README, community introduction, installer entries, download links, and attribution consistent with the requested publication scope.
