# Paws on Codex 🐾

> 실제 반려동물을 부드러운 3D 다마고치풍 Codex 펫으로 재해석했습니다.

[![Codex Pet v2](https://img.shields.io/badge/Codex%20Pet-v2-6f5bd3)](https://github.com/yeony-park/paws-on-codex)
[![Pets](https://img.shields.io/badge/pets-3-f2a6b3)](#meet-the-pets)
[![Code License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](../../LICENSE)
[![Assets: CC BY-NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-lightgrey.svg)](../../ASSETS-LICENSE.md)

[English](../../README.md) · **한국어** · [日本語](../ja/README.md) · [简体中文](../zh-CN/README.md) · [Español](../es/README.md) · [Deutsch](../de/README.md) · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · [Português (Brasil)](../pt-BR/README.md) · [Русский](../ru/README.md)

이 문서는 영어 README의 설치·펫·기여 안내와 동일한 내용을 한국어로 제공합니다. 번역 오류나 누락은 이슈 또는 PR로 알려주세요.

<p align="center">
  <img src="../../previews/comparison.png" alt="Chapssari, Mandu, Cho" width="900">
</p>

## 이 프로젝트를 만든 이유

코딩하는 동안 흔한 고양이 캐릭터가 아니라, 함께 사는 반려동물이 곁에 있으면 좋겠다고 생각했습니다. 실제 얼굴, 털색과 무늬, 체형, 꼬리를 유지하면서 밝고 부드러운 레트로 게임 스타일로 바꾼 찹쌀이와 만두의 3D 펫에서 시작했습니다.

이제는 다른 보호자도 반려동물을 소개하고 사진 한 장을 공유하며 설치 가능한 Codex 펫을 만들 수 있는 공간입니다.

## 픽셀 속 고양이들의 실제 모습

| 찹쌀이 | 만두 | 쵸 |
| --- | --- | --- |
| <img src="../../community-pets/photos/yeony-park--chapssari.webp" alt="찹쌀이" width="280"> | <img src="../../community-pets/photos/yeony-park--mandu.webp" alt="만두" width="280"> | <img src="../../community-pets/photos/yeony-park--cho.webp" alt="쵸" width="280"> |
| 풍성한 은회색과 흰색의 긴 털, 줄무늬 없는 커다란 꼬리가 특징입니다. | 무엇이든 궁금한 5개월 브리티시 쇼트헤어 아기 고양이. 토프 그레이와 크림색 털을 지녔습니다. | 어릴 때 일찍 고양이 별로 가버린 사랑하는 쵸. · 노르웨이숲 · 3개월 |

## 빠른 설치

### macOS / Linux

```bash
# Chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari

# Mandu
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu

# Cho
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- cho
```

설치 가능한 펫 목록:

```bash
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- --list
```

### Windows PowerShell

```powershell
# Chapssari
powershell -NoProfile -ExecutionPolicy Bypass -Command "& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.ps1'))) chapssari"

# Mandu
powershell -NoProfile -ExecutionPolicy Bypass -Command "& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.ps1'))) mandu"

# Cho
powershell -NoProfile -ExecutionPolicy Bypass -Command "& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.ps1'))) cho"
```

기본 설치 위치는 `~/.codex/pets/<pet-name>/`이며, `CODEX_HOME`이 설정되어 있으면 그 아래에 설치됩니다. 설치 후 Codex를 새로고침하거나 다시 실행하세요.

<a id="meet-the-pets"></a>

## 펫 소개

| 찹쌀이 | 만두 | 쵸 |
| --- | --- | --- |
| <img src="../../previews/chapssari.gif" alt="찹쌀이 — 대기" width="180"> | <img src="../../previews/mandu.gif" alt="만두 — 대기" width="180"> | <img src="../../previews/cho.gif" alt="쵸 — 대기" width="180"> |
| 풍성한 은회색 털과 넓은 흰색 턱시도, 초록색 눈, 줄무늬 없는 커다란 꼬리를 가진 노르웨이숲 고양이입니다. | 토프 그레이와 크림빛 흰색 털, 청록색 눈, 작고 둥근 체형의 호기심 많고 활발한 브리티시 쇼트헤어 아기 고양이입니다. | 생후 3개월에 고양이 별로 떠난, 회색과 흰색 털의 노르웨이숲 아기 고양이 쵸를 기억합니다. |

## 모션 갤러리

| 펫 | 대기 | 인사 | 작업 중 | 입력 대기 | 검토 |
| --- | --- | --- | --- | --- | --- |
| **찹쌀이** | ![찹쌀이 — 대기](../../previews/motions/chapssari/idle.gif) | ![찹쌀이 — 인사](../../previews/motions/chapssari/waving.gif) | ![찹쌀이 — 작업 중](../../previews/motions/chapssari/running.gif) | ![찹쌀이 — 입력 대기](../../previews/motions/chapssari/waiting.gif) | ![찹쌀이 — 검토](../../previews/motions/chapssari/review.gif) |
| **만두** | ![만두 — 대기](../../previews/motions/mandu/idle.gif) | ![만두 — 인사](../../previews/motions/mandu/waving.gif) | ![만두 — 작업 중](../../previews/motions/mandu/running.gif) | ![만두 — 입력 대기](../../previews/motions/mandu/waiting.gif) | ![만두 — 검토](../../previews/motions/mandu/review.gif) |
| **쵸** | ![쵸 — 대기](../../previews/motions/cho/idle.gif) | ![쵸 — 인사](../../previews/motions/cho/waving.gif) | ![쵸 — 작업 중](../../previews/motions/cho/running.gif) | ![쵸 — 입력 대기](../../previews/motions/cho/waiting.gif) | ![쵸 — 검토](../../previews/motions/cho/review.gif) |

각 v2 패키지에는 좌우 이동, 점프, 실패 반응, 16방향 시선도 포함됩니다.

## 웹 업로드 · v1

8×9 v1 아틀라스만 받는 웹 업로더에는 아래 호환 ZIP을 사용하세요. 각 ZIP에는 `pet.json`과 `spritesheet.webp`만 들어 있습니다.

- [찹쌀이 v1 웹 업로드 ZIP](../../web-v1/chapssari-v1-web-upload.zip)
- [만두 v1 웹 업로드 ZIP](../../web-v1/mandu-v1-web-upload.zip)
- [쵸 v1 웹 업로드 ZIP](../../web-v1/cho-v1-web-upload.zip)

## ChatGPT Work로 설치

ChatGPT Work가 GitHub와 로컬 Codex 환경에 접근할 수 있다면 원하는 v2 펫의 GitHub 폴더를 전달하세요.

- [찹쌀이 v2 펫 폴더](https://github.com/yeony-park/paws-on-codex/tree/main/pets/chapssari)
- [만두 v2 펫 폴더](https://github.com/yeony-park/paws-on-codex/tree/main/pets/mandu)
- [쵸 v2 펫 폴더](https://github.com/yeony-park/paws-on-codex/tree/main/pets/cho)

폴더 링크와 함께 다음 프롬프트를 입력하세요:

```text
GitHub의 이 Codex Pet v2 패키지를 설치해줘:
<PET_FOLDER_URL>

기존 pet.json과 spritesheet.webp를 그대로 사용해줘. 활성 CODEX_HOME의 pets
디렉터리(기본값: ~/.codex/pets/<pet-id>/)에 파일명을 유지해서 설치하고,
패키지를 검증한 뒤 Codex를 새로고침하거나 다시 실행해야 하는지 알려줘.
v1으로 변환하거나 이미지를 다시 생성·수정하지 마.
```

별도로 배포된 플러그인이 아니라 설치를 돕는 작업 방식입니다. 환경에 따라 ChatGPT Work의 기능과 로컬 쓰기 권한이 다를 수 있습니다. Codex 펫 디렉터리에 쓸 수 없다면 위의 한 줄 설치 명령을 사용하세요.

## 반려동물 소개하기

완성된 스프라이트 시트가 없어도 됩니다. 한 줄 소개와 선택 사항인 사진 한 장으로 참여할 수 있습니다.

1. [`community-pets/_template.md`](../../community-pets/_template.md)를 `community-pets/github-id--pet-name.md`로 복사하세요.
2. 공백만 있는 줄이 아닌 소개 한 줄을 180자 이내로 작성하세요.
3. 원한다면 JPG, PNG 또는 WebP 사진 한 장을 `community-pets/photos-inbox/github-id--pet-name.<ext>`로 추가하세요.
4. 풀 리퀘스트를 여세요.

```markdown
**Bori** · dog/Jindo · [@github-id](https://github.com/github-id) — A four-year-old explorer who reaches the front door before anyone can pick up the walking bag.
```

병합 후 자동화가 사진의 메타데이터를 제거하고 크기를 줄여 WebP로 변환한 다음 원본 업로드를 삭제하고 [커뮤니티 갤러리](../../community-pets/GALLERY.md)를 갱신합니다. 권리·개인정보·파일명 규칙은 [CONTRIBUTING.md](../../CONTRIBUTING.md)를 확인하세요.

## Codex로 나만의 펫 만들기

이 저장소에는 프로젝트 스킬 [`$create-companion-pet`](../../.agents/skills/create-companion-pet/SKILL.md)이 있습니다. Codex에서 저장소를 열고 다음과 같이 요청하세요:

```text
$create-companion-pet을 사용해 이 반려동물 사진들을 Codex 펫으로 만들어줘.
```

스킬은 개체의 특징을 정리하고 대상에 맞는 설치된 워크플로를 선택합니다(Codex: `hatch-pet`, ChatGPT Work: `work-pets:create-pet`). 저장소 공개용으로 검증된 v2 에셋, v1 웹 패키지와 기여 정보를 준비합니다. 승인된 기존 펫은 이미지를 다시 생성하지 않고 가져올 수 있습니다. [생성·검토 지침](../../.agents/skills/create-companion-pet/references/creation-quality.md)에 개체·모션·시선 검사가 정리되어 있고, 짧은 프롬프트는 [`prompts/create-your-pet.md`](../../prompts/create-your-pet.md)에 있습니다.

## 저장소 구조

```text
.
├── .agents/skills/create-companion-pet/
├── pets/
│   ├── chapssari/{pet.json,distribution.json,spritesheet.webp}
│   ├── mandu/{pet.json,distribution.json,spritesheet.webp}
│   └── cho/{pet.json,distribution.json,spritesheet.webp}
├── previews/
├── web-v1/
├── community-pets/
│   ├── photos-inbox/
│   └── photos/
├── docs/
├── scripts/
├── install.sh
├── install.ps1
├── CONTRIBUTING.md
├── LICENSE
└── ASSETS-LICENSE.md
```

## 감사의 말

[`legeling/awesome-codex-pet`](https://github.com/legeling/awesome-codex-pet)의 모션별 갤러리, 한 줄 설치, 커뮤니티 중심 배포 방식에서 영감을 받았습니다. 현재 구현은 독립적으로 작성되었습니다. 앞으로 해당 프로젝트의 MIT 코드를 포함한다면 [THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md)에 따라 저작권과 허가 고지를 보존해야 합니다.

## 기여자

반려동물을 소개하고, 펫을 개선하고, 문서를 번역하고, 설치를 도와주는 모든 기여자에게 감사합니다.

<a href="https://github.com/yeony-park/paws-on-codex/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=yeony-park/paws-on-codex" alt="Paws on Codex contributors">
</a>

## Star History

<a href="https://www.star-history.com/?type=date&repos=yeony-park%2Fpaws-on-codex">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=yeony-park/paws-on-codex&type=date&theme=dark&legend=top-left&sealed_token=o0IJiSSZX6T_MmBNYLqJ4NVQ5LSJPV7KcZrQRvBzom2EZMf6_8yQlb5KTlqmi3jJ9_vl6ZBkzCBgLUTGhcH8u543gs1Oyt1eramLvwUjxTSXyd5et_iY7Sgkme5uIadIsm5yApWregMD-TtEdxAoaH-c9c8Sx4ZhMn4dQPlXtJ7BWwDqSl-IncLoZC5C" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=yeony-park/paws-on-codex&type=date&legend=top-left&sealed_token=o0IJiSSZX6T_MmBNYLqJ4NVQ5LSJPV7KcZrQRvBzom2EZMf6_8yQlb5KTlqmi3jJ9_vl6ZBkzCBgLUTGhcH8u543gs1Oyt1eramLvwUjxTSXyd5et_iY7Sgkme5uIadIsm5yApWregMD-TtEdxAoaH-c9c8Sx4ZhMn4dQPlXtJ7BWwDqSl-IncLoZC5C" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=yeony-park/paws-on-codex&type=date&legend=top-left&sealed_token=o0IJiSSZX6T_MmBNYLqJ4NVQ5LSJPV7KcZrQRvBzom2EZMf6_8yQlb5KTlqmi3jJ9_vl6ZBkzCBgLUTGhcH8u543gs1Oyt1eramLvwUjxTSXyd5et_iY7Sgkme5uIadIsm5yApWregMD-TtEdxAoaH-c9c8Sx4ZhMn4dQPlXtJ7BWwDqSl-IncLoZC5C" />
 </picture>
</a>

## 라이선스

- 코드·스크립트·문서: [MIT](../../LICENSE)
- 포함된 외부 소프트웨어: 각 의존성의 조건은 [THIRD_PARTY_LICENSES.md](../../THIRD_PARTY_LICENSES.md)에 기재되어 있습니다.
- 찹쌀이·만두·쵸의 펫 에셋과 프리뷰: [CC BY-NC 4.0](../../ASSETS-LICENSE.md)
- 커뮤니티 사진·펫 에셋: 기여자가 선언한 라이선스를 따릅니다. 필요한 권리를 보유하고 동의한 경우에만 CC BY-NC 4.0이 기본값입니다.

실제 반려동물의 이름과 모습은 보호자와 연결되어 있습니다. 참고 사진은 명시적으로 포함하고 표시하지 않는 한 재라이선스되지 않습니다.
