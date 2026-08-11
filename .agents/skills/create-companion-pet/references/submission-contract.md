# Paws on Codex submission contract

## Required v2 files

```text
pets/<pet-slug>/pet.json
pets/<pet-slug>/spritesheet.webp
```

Use an ASCII lowercase hyphenated slug. Set `spriteVersionNumber` to `2`. The atlas must be RGBA WebP, `1536×2288`, with `192×208` cells in an `8×11` grid. Preserve the Codex row contract and fully transparent unused cells.

## Required v1 web package

Crop the approved v2 atlas to rows `0–8`, clear the v2 neutral cell at row 0 column 6, and export an RGBA `1536×1872` WebP. Set `spriteVersionNumber` to `1`. Zip only these two root-level files:

```text
pet.json
spritesheet.webp
```

Save the archive as `web-v1/<pet-slug>-v1-web-upload.zip`.

## Preview and introduction

Render `previews/<pet-slug>.gif` plus motion GIFs under `previews/motions/<pet-slug>/`. Add `community-pets/<github-id>--<pet-slug>.md` containing one non-empty line of at most 180 characters.

An optional public photo must use the same filename stem under `community-pets/photos-inbox/`. Accept only JPG, PNG, or WebP; one photo per companion.

## License and attribution

Use MIT for contributed code and documentation. Use CC BY-NC 4.0 for original pet art and public companion photos only when the contributor owns the necessary rights and accepts those terms. Record any different asset license explicitly in the pull request and beside the asset.
