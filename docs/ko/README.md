# Paws on Codex 🐾

[English](../../README.md) · **한국어** · [日本語](../ja/README.md) · [简体中文](../zh-CN/README.md) · [Español](../es/README.md) · [Deutsch](../de/README.md) · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · [Português](../pt-BR/README.md) · [Русский](../ru/README.md)

실제 반려동물을 한눈에 알아볼 수 있는 부드러운 3D 다마고치풍 Codex 펫 프로젝트입니다. 반려동물 3D 펫이 가지고 싶어서 찹쌀이와 만두를 만들며 시작했습니다.

<p align="center"><img src="../../previews/comparison.png" alt="찹쌀이와 만두" width="800"></p>

## 빠른 설치

macOS / Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu
```

Windows PowerShell:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -Command "& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.ps1'))) chapssari"
```

기본 설치 위치는 `~/.codex/pets/<pet-name>/`입니다. 설치 후 Codex를 새로고침하거나 다시 실행하세요.

## 웹 업로드용 v1

- [찹쌀이 v1 ZIP](../../web-v1/chapssari-v1-web-upload.zip)
- [만두 v1 ZIP](../../web-v1/mandu-v1-web-upload.zip)

## 반려동물 소개와 기여

`community-pets/github-id--pet-name.md`에 180자 이내의 한 줄 소개를 추가할 수 있습니다. 선택 사진 한 장은 같은 stem으로 `community-pets/photos-inbox/`에 넣으세요. 병합 후 자동으로 메타데이터 제거, 1,600px 축소, WebP 변환과 [갤러리](../../community-pets/GALLERY.md) 갱신이 진행됩니다. 자세한 규칙은 [CONTRIBUTING.md](../../CONTRIBUTING.md)를 확인하세요.

Codex에서 다음과 같이 요청하면 저장소의 프로젝트 skill이 실행됩니다.

```text
Use $create-companion-pet to turn these photos of my companion into a Codex pet.
```

## 라이선스

코드·스크립트·문서는 [MIT](../../LICENSE), 펫 에셋·프리뷰와 기본 커뮤니티 에셋은 권리 보유자의 동의하에 [CC BY-NC 4.0](../../ASSETS-LICENSE.md)입니다.
