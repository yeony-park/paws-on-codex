# Contributing to Paws on Codex

Companion-animal introductions, photos, installable pets, translations, and small fixes are welcome.

## Required labels and allowed external pull request paths

External contributions are welcome for pets, translations, bug fixes, and documentation. A safe `pull_request_target` workflow labels each pull request and validates its changed paths in the same job, without checking out or executing contributor code. The required `validate` check allows only the paths covered by at least one contribution label. Repository owners and collaborators may also change maintenance files directly.

| Required label | Allowed paths |
| --- | --- |
| `pet` | `community-pets/<github-id>--<pet-slug>.md`, `community-pets/photos-inbox/<github-id>--<pet-slug>.<jpg|jpeg|png|webp>`, `pets/<pet-slug>/{pet.json,distribution.json,spritesheet.webp}`, `web-v1/<pet-slug>-v1-web-upload.zip`, and matching GIFs under `previews/` |
| `translation` | `docs/<locale>/README.md` |
| `bug` | Python files under `scripts/` and `tests/`, `install.sh`, `install.ps1`, workflows, the project pet-creation skill, and focused ChatGPT adapter/plugin/core files |
| `documentation` | `README.md`, `CONTRIBUTING.md`, `community-pets/README.md`, `apps/chatgpt/README.md`, and Markdown briefs under `prompts/` |

The labels are applied automatically. If a pull request legitimately spans more than one category, it may carry multiple labels and use the union of their allowed paths. A maintainer can correct labels during review; adding or removing a contribution label reruns validation.

External pull requests must follow these additional rules:

- Submit no more than one companion and 25 changed files per pull request.
- Use one lowercase ASCII pet slug consistently across every companion file.
- Prefix introduction and inbox-photo filenames with the pull request author's GitHub ID.
- Add or modify files only; ask a maintainer before deleting or renaming published material.
- Do not submit generated gallery files or processed photos under `community-pets/photos/`.
- Use the `bug` category for focused fixes to scripts, workflows, installers, tests, or the project skill.
- Open an issue first for license changes or maintenance work outside the labeled scopes.

The required `validate` check runs the trusted copy of `scripts/validate_pr_paths.py` from the target branch. The separate `validate-content` check safely tests the pull request's repository content. Configure both as required status checks before merging. Missing labels and paths outside the active label scopes fail `validate`; maintainer review is still required even when both automated checks pass.

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
- Include `pets/<pet-slug>/pet.json`, `pets/<pet-slug>/distribution.json`, and `pets/<pet-slug>/spritesheet.webp` together.
- Prefer a validated v2 atlas; keep `spriteVersionNumber` consistent with atlas dimensions.
- Include a v1 compatibility ZIP under `web-v1/` when possible.
- Preserve the real companion's identifiable coat, face, eyes, proportions, and tail, but never expose private data.
- Declare the asset license in the PR. CC BY-NC 4.0 is the default only when you own the necessary rights.
- Add motion previews under `previews/motions/<pet-slug>/` when available.

Use this distribution metadata:

```json
{
  "contributor": {
    "github": "your-github-id",
    "displayName": "Your display name"
  },
  "license": "CC-BY-NC-4.0",
  "attribution": "Pet name art by Your display name",
  "surfaces": {
    "codex": true,
    "chatgpt": false
  }
}
```

Keep `surfaces.chatgpt` set to `false` for new contributions. It is reserved for the repository's experimental adapter code and is not a public distribution program. The ChatGPT Work GitHub-import workflow documented in `README.md` reads the v2 package directly and does not require contributor opt-in.

Open this repository in Codex and invoke `$create-companion-pet`, or start with `prompts/create-your-pet.md`.

## Issue or pull request?

Our goal is to collect companion animals from around the world in one welcoming repository. You do not need to open an issue before contributing a pet, translation, documentation improvement, or small focused fix. Follow this guide and open a pull request directly.

Open an issue first when you are proposing a large or breaking feature, security or license policy change, workflow redesign, or broad refactor. If you want to add your pet but need help preparing the files, use the **Add my pet or get contribution help** issue form. A pet-help issue starts the conversation; the reviewed pull request is what adds the pet to the collection.

## Pull request title format

Use a lowercase type, one colon, one space, and a short description:

```text
type: short description
```

| Type | Use it for |
| --- | --- |
| `feat:` | A new pet or user-facing feature |
| `fix:` | A bug or incorrect pet behavior |
| `docs:` | Documentation or translation |
| `ci:` | GitHub Actions and contribution automation |
| `chore:` | Repository maintenance |
| `refactor:` | Internal restructuring without a behavior change |
| `test:` | Test-only changes |
| `perf:` | Performance improvements |
| `build:` | Packaging, dependencies, or build tooling |
| `revert:` | Reverting an earlier change |

Examples: `feat: add bori pet`, `fix: correct idle blinking`, `docs: translate installation guide`, and `ci: validate pull request titles`.

## Pull request checklist

- [ ] This PR contains one companion or one focused repository change.
- [ ] Every changed path is listed in “Allowed external pull request paths,” or I discussed the maintenance change with a maintainer first.
- [ ] I own or have permission to publish and license every photo and asset.
- [ ] No private, contact, tag, or precise location information is visible.
- [ ] The introduction is one line and the optional photo uses the same filename stem.
- [ ] For an installable pet, `pet.json`, atlas version, and paths agree.
- [ ] I checked the transparent background, motion previews, and relative links.
- [ ] I declared the asset license and attribution.

Merged contributors appear automatically in the README contributor portraits.
