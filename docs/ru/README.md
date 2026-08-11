# Paws on Codex 🐾

[English](../../README.md) · [한국어](../ko/README.md) · [日本語](../ja/README.md) · [简体中文](../zh-CN/README.md) · [Español](../es/README.md) · [Deutsch](../de/README.md) · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · [Português](../pt-BR/README.md) · **Русский**

Мягкие 3D-питомцы Codex в стиле ретро-игры, сохраняющие узнаваемые особенности настоящего животного. Проект начался с желания иметь 3D-версии домашних любимцев Chapssari и Mandu.

<p align="center"><img src="../../previews/comparison.png" alt="Chapssari и Mandu" width="800"></p>

## Быстрая установка

```bash
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu
```

Путь по умолчанию: `~/.codex/pets/<pet-name>/`. После установки обновите или перезапустите Codex.

## v1 для веб-загрузки

- [Chapssari v1 ZIP](../../web-v1/chapssari-v1-web-upload.zip)
- [Mandu v1 ZIP](../../web-v1/mandu-v1-web-upload.zip)

## Сообщество

Добавьте однострочное описание длиной до 180 символов в `community-pets/github-id--pet-name.md`. Одну фотографию с тем же базовым именем можно положить в `community-pets/photos-inbox/`. После слияния автоматика удалит метаданные, уменьшит изображение, преобразует его в WebP и обновит [галерею](../../community-pets/GALLERY.md). Правила описаны в [CONTRIBUTING.md](../../CONTRIBUTING.md).

В Codex используйте `$create-companion-pet`, чтобы получить из фотографий проверенный пакет v2 и веб-пакет v1.

## Лицензия

Код, скрипты и документация: [MIT](../../LICENSE). Указанные ресурсы и превью: [CC BY-NC 4.0](../../ASSETS-LICENSE.md).
