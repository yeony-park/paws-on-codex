# Contributing to Paws on Codex

Companion-animal introductions, photos, installable pets, translations, and small fixes are welcome.

## 1. Submit a one-line introduction

1. Copy `community-pets/_template.md`.
2. Name the copy `github-id--pet-name.md` using lowercase ASCII letters, numbers, and hyphens.
3. Keep exactly one non-empty Markdown line, at most 180 characters.

```markdown
**Name** · species/breed · [@github-id](https://github.com/github-id) — A warm one-line introduction.
```

Do not include an address, phone number, precise location, collar tag, or other sensitive information.

## 2. Optionally submit one photo

- Add at most one JPG, PNG, or WebP photo per companion.
- Use the same stem as the introduction: `community-pets/photos-inbox/github-id--pet-name.jpg`.
- The automation removes EXIF metadata, resizes the longest side to 1,600 px, converts the file to WebP, deletes the inbox source, and rebuilds `community-pets/GALLERY.md` after merge.
- You must own the photo or have permission to publish and license it.
- Crop or blur people, addresses, tags, screens, and location clues before submission.
- By submitting without different explicit terms in the PR, you agree to publish the contributed photo under CC BY-NC 4.0.

To preview the conversion locally:

```bash
python3 -m pip install Pillow
python3 scripts/convert-community-photos.py
python3 scripts/generate-community-gallery.py
```

## 3. Submit an installable Codex pet

- Submit one pet per pull request.
- Include `pets/<pet-slug>/pet.json` and `pets/<pet-slug>/spritesheet.webp` together.
- Prefer a validated v2 atlas; keep `spriteVersionNumber` consistent with atlas dimensions.
- Include a v1 compatibility ZIP under `web-v1/` when possible.
- Preserve the real companion's identifiable coat, face, eyes, proportions, and tail, but never expose private data.
- Declare the asset license in the PR. CC BY-NC 4.0 is the default only when you own the necessary rights.
- Add motion previews under `previews/motions/<pet-slug>/` when available.

Open this repository in Codex and invoke `$create-companion-pet`, or start with `prompts/create-your-pet.md`.

## Pull request checklist

- [ ] This PR contains one companion or one focused repository change.
- [ ] I own or have permission to publish and license every photo and asset.
- [ ] No private, contact, tag, or precise location information is visible.
- [ ] The introduction is one line and the optional photo uses the same filename stem.
- [ ] For an installable pet, `pet.json`, atlas version, and paths agree.
- [ ] I checked the transparent background, motion previews, and relative links.
- [ ] I declared the asset license and attribution.

Merged contributors appear automatically in the README contributor portraits.
