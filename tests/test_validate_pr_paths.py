from __future__ import annotations

import unittest

from scripts.validate_pr_paths import (
    Change,
    InvalidContribution,
    github_status_to_code,
    validate_external_changes,
)


class ValidateExternalChangesTest(unittest.TestCase):
    def test_maps_github_file_statuses(self) -> None:
        self.assertEqual(github_status_to_code("added"), "A")
        self.assertEqual(github_status_to_code("modified"), "M")
        self.assertEqual(github_status_to_code("removed"), "D")
        self.assertEqual(github_status_to_code("renamed"), "R")

    def test_rejects_unknown_github_file_status(self) -> None:
        with self.assertRaisesRegex(InvalidContribution, "unsupported GitHub file status"):
            github_status_to_code("unknown")

    def test_accepts_one_complete_companion(self) -> None:
        validate_external_changes(
            [
                Change("A", "community-pets/example-user--bori.md"),
                Change("A", "community-pets/photos-inbox/example-user--bori.jpg"),
                Change("A", "pets/bori/pet.json"),
                Change("A", "pets/bori/spritesheet.webp"),
                Change("A", "web-v1/bori-v1-web-upload.zip"),
                Change("A", "previews/bori.gif"),
                Change("A", "previews/motions/bori/idle.gif"),
            ],
            "example-user",
            {"pet"},
        )

    def test_accepts_translation_readme(self) -> None:
        validate_external_changes(
            [Change("M", "docs/ko/README.md")], "translator", {"translation"}
        )

    def test_accepts_bug_fix_with_test(self) -> None:
        validate_external_changes(
            [
                Change("M", "scripts/convert-community-photos.py"),
                Change("A", "tests/test_photo_conversion.py"),
            ],
            "example-user",
            {"bug"},
        )

    def test_accepts_documentation_fix(self) -> None:
        validate_external_changes([Change("M", "README.md")], "writer", {"documentation"})

    def test_rejects_missing_label(self) -> None:
        with self.assertRaisesRegex(InvalidContribution, "contribution label is required"):
            validate_external_changes([Change("M", "README.md")], "writer", set())

    def test_rejects_path_outside_label_scope(self) -> None:
        with self.assertRaisesRegex(InvalidContribution, "not allowed by contribution labels"):
            validate_external_changes([Change("M", "install.sh")], "example-user", {"documentation"})

    def test_rejects_another_users_intro(self) -> None:
        with self.assertRaisesRegex(InvalidContribution, "PR author's GitHub ID"):
            validate_external_changes(
                [Change("A", "community-pets/someone-else--bori.md")],
                "example-user",
                {"pet"},
            )

    def test_rejects_multiple_companions(self) -> None:
        with self.assertRaisesRegex(InvalidContribution, "one companion"):
            validate_external_changes(
                [
                    Change("A", "pets/bori/pet.json"),
                    Change("A", "pets/maru/pet.json"),
                ],
                "example-user",
                {"pet"},
            )

    def test_rejects_delete_or_rename(self) -> None:
        with self.assertRaisesRegex(InvalidContribution, "only add or modify"):
            validate_external_changes(
                [Change("D", "pets/bori/pet.json")], "example-user", {"pet"}
            )


if __name__ == "__main__":
    unittest.main()
