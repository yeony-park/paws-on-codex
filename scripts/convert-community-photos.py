#!/usr/bin/env python3
"""Normalize optional community photos to metadata-free WebP files."""

from __future__ import annotations

import argparse
import re
from pathlib import Path

from PIL import Image, ImageOps


ALLOWED_SUFFIXES = {".jpg", ".jpeg", ".png", ".webp"}
VALID_STEM = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*--[a-z0-9]+(?:-[a-z0-9]+)*$")


def convert(source: Path, output_dir: Path, max_edge: int, quality: int) -> Path:
    if source.suffix.lower() not in ALLOWED_SUFFIXES:
        raise ValueError(f"unsupported image type: {source.name}")
    if not VALID_STEM.fullmatch(source.stem):
        raise ValueError(f"invalid filename stem: {source.stem}")

    output_dir.mkdir(parents=True, exist_ok=True)
    destination = output_dir / f"{source.stem}.webp"
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGB")
        image.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=quality, method=6, exif=b"")
    source.unlink()
    return destination


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--inbox", type=Path, default=Path("community-pets/photos-inbox"))
    parser.add_argument("--output", type=Path, default=Path("community-pets/photos"))
    parser.add_argument("--max-edge", type=int, default=1600)
    parser.add_argument("--quality", type=int, default=82)
    args = parser.parse_args()

    args.inbox.mkdir(parents=True, exist_ok=True)
    sources = sorted(path for path in args.inbox.iterdir() if path.is_file() and not path.name.startswith("."))
    stems: set[str] = set()
    for source in sources:
        if source.stem in stems:
            raise SystemExit(f"more than one photo for {source.stem}")
        stems.add(source.stem)

    for source in sources:
        print(convert(source, args.output, args.max_edge, args.quality))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
