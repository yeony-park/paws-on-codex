#!/usr/bin/env python3
"""Validate one-line introductions and one-photo-per-companion naming."""

from __future__ import annotations

import re
from pathlib import Path


VALID_STEM = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*--[a-z0-9]+(?:-[a-z0-9]+)*$")
SKIP_NAMES = {"README.md", "GALLERY.md", "_template.md"}
ALLOWED_SUFFIXES = {".jpg", ".jpeg", ".png", ".webp"}


def main() -> int:
    community = Path("community-pets")
    intro_stems: set[str] = set()
    for path in sorted(community.glob("*.md")):
        if path.name in SKIP_NAMES:
            continue
        if not VALID_STEM.fullmatch(path.stem):
            raise SystemExit(f"invalid introduction filename: {path.name}")
        lines = [line.strip() for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]
        if len(lines) != 1 or len(lines[0]) > 180:
            raise SystemExit(f"{path}: use exactly one non-empty line of at most 180 characters")
        intro_stems.add(path.stem)

    photo_stems: set[str] = set()
    for directory in (community / "photos-inbox", community / "photos"):
        directory.mkdir(parents=True, exist_ok=True)
        for path in sorted(directory.iterdir()):
            if not path.is_file() or path.name.startswith("."):
                continue
            if path.suffix.lower() not in ALLOWED_SUFFIXES:
                raise SystemExit(f"unsupported photo type: {path}")
            if path.stem in photo_stems:
                raise SystemExit(f"more than one photo for {path.stem}")
            if path.stem not in intro_stems:
                raise SystemExit(f"photo has no matching introduction: {path}")
            photo_stems.add(path.stem)
    print(f"validated {len(intro_stems)} introductions and {len(photo_stems)} photos")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
