#!/usr/bin/env bash

set -euo pipefail

readonly REPOSITORY="yeony-park/paws-on-codex"
readonly BASE_URL="${PAWS_ON_CODEX_BASE_URL:-https://raw.githubusercontent.com/${REPOSITORY}/main}"
readonly PET="${1:-}"

usage() {
  printf 'Usage: %s <chapssari|mandu>\n' "${0##*/}"
  printf '       %s --list\n' "${0##*/}"
}

if [[ "${PET}" == "--list" ]]; then
  printf 'chapssari\t찹쌀이\n'
  printf 'mandu\t만두\n'
  exit 0
fi

case "${PET}" in
  chapssari | mandu) ;;
  "")
    usage >&2
    exit 2
    ;;
  *)
    printf 'Unknown pet: %s\n' "${PET}" >&2
    usage >&2
    exit 2
    ;;
esac

if ! command -v curl >/dev/null 2>&1; then
  printf 'curl is required to install this pet.\n' >&2
  exit 1
fi

if [[ -n "${CODEX_HOME:-}" ]]; then
  codex_home="${CODEX_HOME}"
else
  codex_home="${HOME}/.codex"
fi

pet_dir="${codex_home}/pets/${PET}"
temp_dir="$(mktemp -d "${TMPDIR:-/tmp}/paws-on-codex.XXXXXX")"

cleanup() {
  rm -f "${temp_dir}/pet.json" "${temp_dir}/spritesheet.webp"
  rmdir "${temp_dir}" 2>/dev/null || true
}
trap cleanup EXIT

curl --fail --silent --show-error --location \
  "${BASE_URL}/pets/${PET}/pet.json" \
  --output "${temp_dir}/pet.json"
curl --fail --silent --show-error --location \
  "${BASE_URL}/pets/${PET}/spritesheet.webp" \
  --output "${temp_dir}/spritesheet.webp"

mkdir -p "${pet_dir}"
install -m 0644 "${temp_dir}/pet.json" "${pet_dir}/pet.json"
install -m 0644 "${temp_dir}/spritesheet.webp" "${pet_dir}/spritesheet.webp"

printf 'Installed %s to %s\n' "${PET}" "${pet_dir}"
printf 'Refresh or restart Codex, then select your new pet.\n'
