---
name: create-companion-pet
description: Create a recognizable animated Codex pet from a user's dog, cat, bird, rabbit, reptile, or other companion-animal photos, then stage validated v2 desktop assets, a v1 web-upload package, previews, attribution, and community contribution metadata. Use when the user asks to turn their real companion into a Codex pet, add a new animal to Paws on Codex, repair that pet's identity or motions, or prepare an animal-pet pull request.
---

# Create Companion Pet

Create a production-ready Codex pet while preserving the real companion's distinctive identity and the contributor's rights.

## Workflow

1. Confirm the requested destination (Codex, ChatGPT Work, or GitHub packaging), the pet's name, species or breed, age, temperament, and distinguishing visual traits. Use supplied facts and attached photos as the primary evidence; ask only for missing facts that matter. Preserve user-supplied descriptions and memorial wording verbatim; do not invent personality or age.
2. Confirm that the contributor owns the photos or has permission to publish derived assets. Remove collar tags, addresses, screens, faces, and location clues from public material.
3. Write an identity lock covering coat color and pattern, face shape, ears, eyes, nose, build, paws, and tail. Treat it as authoritative across every motion.
4. Read [references/creation-quality.md](references/creation-quality.md), then select the installed workflow for the requested destination: `hatch-pet` for Codex creation, or `work-pets:create-pet` and its shared sprite contract for ChatGPT Work creation. For GitHub registration of an existing approved pet, reuse its downloaded atlas and skip visual generation. Do not invoke a Work creation/upload lifecycle for a Codex-only request. Use a soft 3D retro virtual-pet style unless the user requests another style. Never replace the selected workflow's bundled compositor or validator with hand-built sprites or a shape-only check. If a required skill or script is unavailable, report the missing prerequisite rather than claiming equivalent execution.
5. Export the v1 web package and stage repository files according to [references/submission-contract.md](references/submission-contract.md).
6. Add one single-line community introduction. Include at most one approved public photo in `community-pets/photos-inbox/`; crop screenshot bars/UI when requested and use the repository converter to produce a metadata-free WebP. If the contributor requested a README photo entry, add the real photo, introduction, and download links there too.
7. Run all available atlas, archive, install-script, relative-link, photo-submission, and skill validations. Inspect contact sheets and GIFs at normal pet size before declaring success.

## Identity rules

- Prefer multiple angles when markings or the tail are not visible in one photo.
- Preserve individual asymmetry and unusual color boundaries; do not average the pet into a generic breed example.
- Simplify into a 2–3-head-tall, full-body 3D game character with a slightly enlarged head and a clear silhouette.
- Keep clothing, accessories, props, and markings out unless they are visible in the approved source and the user explicitly wants them.
- Use the real photo only as reference. Do not publish an unapproved source photo in generated assets.

## Delivery

Report the staged v2 path, v1 ZIP path, preview paths, validation result, license, and exact final character brief. Do not push or open a pull request unless the user explicitly requests publication.
