#!/usr/bin/env python3
"""Reject external pull-request changes outside contribution-owned paths."""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import urllib.request
from dataclasses import dataclass


TRUSTED_ASSOCIATIONS = {"OWNER", "MEMBER", "COLLABORATOR"}
MAX_EXTERNAL_FILES = 25
CONTRIBUTION_LABELS = {"pet", "translation", "bug", "documentation"}
SLUG = r"[a-z0-9]+(?:-[a-z0-9]+)*"
MOTION_STATES = {
    "failed",
    "idle",
    "jumping",
    "review",
    "running",
    "running-left",
    "running-right",
    "waiting",
    "waving",
}


@dataclass(frozen=True)
class Change:
    status: str
    path: str


class InvalidContribution(ValueError):
    pass


def changed_files(base: str, head: str) -> list[Change]:
    result = subprocess.run(
        ["git", "diff", "--name-status", "--find-renames", f"{base}...{head}"],
        check=True,
        capture_output=True,
        text=True,
    )
    changes: list[Change] = []
    for line in result.stdout.splitlines():
        fields = line.split("\t")
        status = fields[0]
        if status.startswith(("R", "C")):
            changes.append(Change(status, fields[-1]))
        else:
            changes.append(Change(status, fields[1]))
    return changes


def github_status_to_code(status: str) -> str:
    status_codes = {
        "added": "A",
        "modified": "M",
        "changed": "M",
        "removed": "D",
        "renamed": "R",
        "copied": "C",
    }
    try:
        return status_codes[status]
    except KeyError as error:
        raise InvalidContribution(f"unsupported GitHub file status: {status}") from error


def pull_request_files(repository: str, number: int, token: str) -> list[Change]:
    changes: list[Change] = []
    page = 1
    while True:
        url = (
            f"https://api.github.com/repos/{repository}/pulls/{number}/files"
            f"?per_page=100&page={page}"
        )
        request = urllib.request.Request(
            url,
            headers={
                "Accept": "application/vnd.github+json",
                "Authorization": f"Bearer {token}",
                "X-GitHub-Api-Version": "2022-11-28",
            },
        )
        with urllib.request.urlopen(request) as response:
            files = json.load(response)
        changes.extend(
            Change(github_status_to_code(file["status"]), file["filename"])
            for file in files
        )
        if len(files) < 100:
            return changes
        page += 1


def allowed_external_path(path: str, actor: str, labels: set[str]) -> str | None:
    actor = actor.lower()

    match = re.fullmatch(rf"community-pets/(?P<owner>{SLUG})--(?P<slug>{SLUG})\.md", path)
    if match and "pet" in labels:
        if match.group("owner") != actor:
            raise InvalidContribution(
                f"{path}: introduction filenames must start with the PR author's GitHub ID ({actor}--)"
            )
        return match.group("slug")

    match = re.fullmatch(
        rf"community-pets/photos-inbox/(?P<owner>{SLUG})--(?P<slug>{SLUG})\.(?:jpe?g|png|webp)",
        path,
        flags=re.IGNORECASE,
    )
    if match and "pet" in labels:
        if match.group("owner").lower() != actor:
            raise InvalidContribution(
                f"{path}: photo filenames must start with the PR author's GitHub ID ({actor}--)"
            )
        return match.group("slug").lower()

    match = re.fullmatch(
        rf"pets/(?P<slug>{SLUG})/(?:pet\.json|distribution\.json|spritesheet\.webp)",
        path,
    )
    if match and "pet" in labels:
        return match.group("slug")

    match = re.fullmatch(
        rf"plugins/paws-on-codex/pets/(?P<slug>{SLUG})/(?:pet\.json|distribution\.json|spritesheet\.webp)",
        path,
    )
    if match and "pet" in labels:
        return match.group("slug")

    match = re.fullmatch(rf"web-v1/(?P<slug>{SLUG})-v1-web-upload\.zip", path)
    if match and "pet" in labels:
        return match.group("slug")

    match = re.fullmatch(rf"previews/(?P<slug>{SLUG})\.gif", path)
    if match and "pet" in labels:
        return match.group("slug")

    match = re.fullmatch(rf"previews/motions/(?P<slug>{SLUG})/(?P<state>{SLUG})\.gif", path)
    if match and match.group("state") in MOTION_STATES and "pet" in labels:
        return match.group("slug")

    if "translation" in labels and re.fullmatch(r"docs/[a-z]{2}(?:-[A-Z]{2})?/README\.md", path):
        return None

    bug_paths = (
        r"\.dockerignore",
        r"(?:install\.sh|install\.ps1)",
        r"scripts/[A-Za-z0-9_./-]+\.py",
        r"scripts/[A-Za-z0-9_./-]+\.mjs",
        r"tests/[A-Za-z0-9_./-]+\.py",
        r"\.github/workflows/[A-Za-z0-9_.-]+\.ya?ml",
        r"\.agents/plugins/marketplace\.json",
        r"THIRD_PARTY_LICENSES\.md",
        r"\.agents/skills/create-companion-pet/(?:SKILL\.md|agents/openai\.yaml|references/[A-Za-z0-9_.-]+\.md)",
        r"apps/chatgpt/assets/screenshot\.png",
        r"apps/chatgpt/(?:server|web)/(?:Dockerfile|package(?:-lock)?\.json|tsconfig\.json|src/[A-Za-z0-9_./-]+\.tsx?)",
        r"plugins/paws-on-codex/(?:\.codex-plugin/plugin\.json|\.mcp\.json|start-server\.mjs|LICENSE|ASSETS-LICENSE\.md|NOTICE\.md|THIRD_PARTY_LICENSES\.md|dist/server\.mjs|assets/(?:component\.js|icon\.png|logo\.png|screenshot\.png)|skills/choose-companion/(?:SKILL\.md|agents/openai\.yaml))",
        r"packages/pet-core/(?:package\.json|index\.js|index\.d\.ts)",
    )
    if "bug" in labels and any(re.fullmatch(pattern, path) for pattern in bug_paths):
        return None

    documentation_paths = (
        r"README\.md",
        r"CONTRIBUTING\.md",
        r"(?:PRIVACY|SUPPORT|TERMS)\.md",
        r"community-pets/README\.md",
        r"prompts/[A-Za-z0-9_.-]+\.md",
        r"apps/chatgpt/README\.md",
        r"docs/plugin/[A-Za-z0-9_.-]+\.(?:md|json)",
    )
    if "documentation" in labels and any(
        re.fullmatch(pattern, path) for pattern in documentation_paths
    ):
        return None

    active = ", ".join(sorted(labels & CONTRIBUTION_LABELS)) or "none"
    raise InvalidContribution(f"{path}: path is not allowed by contribution labels ({active})")


def validate_external_changes(changes: list[Change], actor: str, labels: set[str]) -> None:
    if not changes:
        raise InvalidContribution("the pull request does not contain any changed files")
    if not labels & CONTRIBUTION_LABELS:
        raise InvalidContribution(
            "at least one contribution label is required: "
            + ", ".join(sorted(CONTRIBUTION_LABELS))
        )
    if len(changes) > MAX_EXTERNAL_FILES:
        raise InvalidContribution(
            f"external pull requests may change at most {MAX_EXTERNAL_FILES} files; found {len(changes)}"
        )

    slugs: set[str] = set()
    errors: list[str] = []
    for change in changes:
        if change.status not in {"A", "M"}:
            errors.append(f"{change.path}: external pull requests may only add or modify files")
            continue
        try:
            slug = allowed_external_path(change.path, actor, labels)
            if slug:
                slugs.add(slug)
        except InvalidContribution as error:
            errors.append(str(error))

    if len(slugs) > 1:
        errors.append(
            "one companion per pull request is required; found slugs: " + ", ".join(sorted(slugs))
        )
    if errors:
        raise InvalidContribution("\n".join(errors))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--base")
    parser.add_argument("--head")
    parser.add_argument("--repository")
    parser.add_argument("--pull-request", type=int)
    parser.add_argument("--author-association", required=True)
    parser.add_argument("--actor", required=True)
    parser.add_argument("--labels", default="")
    args = parser.parse_args()

    association = args.author_association.upper()
    if association in TRUSTED_ASSOCIATIONS:
        print(f"trusted contributor ({association}); repository-maintenance paths are allowed")
        return 0

    if args.repository and args.pull_request:
        token = os.environ.get("GITHUB_TOKEN")
        if not token:
            parser.error("GITHUB_TOKEN is required with --repository and --pull-request")
        changes = pull_request_files(args.repository, args.pull_request, token)
    elif args.base and args.head:
        changes = changed_files(args.base, args.head)
    else:
        parser.error(
            "provide --repository and --pull-request, or provide --base and --head"
        )
    labels = {label.strip().lower() for label in args.labels.split(",") if label.strip()}
    try:
        validate_external_changes(changes, args.actor, labels)
    except InvalidContribution as error:
        print("External contribution path validation failed:")
        print(error)
        print("See CONTRIBUTING.md#allowed-external-pull-request-paths.")
        return 1

    active = ", ".join(sorted(labels & CONTRIBUTION_LABELS))
    print(f"validated {len(changes)} external contribution paths for @{args.actor} ({active})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
