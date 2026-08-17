#!/usr/bin/env python3
"""Validate the generated plugin's v2 spritesheet contract."""

from __future__ import annotations

import json
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
PETS = ROOT / "plugins" / "paws-on-codex" / "pets"
EXPECTED_SIZE = (1536, 2288)


def main() -> int:
    pet_dirs = sorted(path for path in PETS.iterdir() if path.is_dir())
    if not pet_dirs:
        raise ValueError("the packaged plugin has no pets")

    for pet_dir in pet_dirs:
        pet = json.loads((pet_dir / "pet.json").read_text())
        distribution = json.loads((pet_dir / "distribution.json").read_text())
        if pet.get("id") != pet_dir.name:
            raise ValueError(f"{pet_dir.name}: pet id does not match its directory")
        if pet.get("spriteVersionNumber") != 2:
            raise ValueError(f"{pet_dir.name}: spriteVersionNumber must be 2")
        if distribution.get("surfaces", {}).get("chatgpt") is not True:
            raise ValueError(f"{pet_dir.name}: ChatGPT distribution is not opted in")

        with Image.open(pet_dir / "spritesheet.webp") as image:
            if image.format != "WEBP":
                raise ValueError(f"{pet_dir.name}: spritesheet must be WebP")
            if image.size != EXPECTED_SIZE:
                raise ValueError(
                    f"{pet_dir.name}: expected {EXPECTED_SIZE}, found {image.size}"
                )
            if "A" not in image.getbands():
                raise ValueError(f"{pet_dir.name}: spritesheet must retain alpha")

    print(f"Validated {len(pet_dirs)} packaged v2 pet assets")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
