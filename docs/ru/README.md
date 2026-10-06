# Paws on Codex 🐾

> Настоящие домашние животные в образе мягких 3D-питомцев Codex в стиле тамагочи.

[![Codex Pet v2](https://img.shields.io/badge/Codex%20Pet-v2-6f5bd3)](https://github.com/yeony-park/paws-on-codex)
[![Pets](https://img.shields.io/badge/pets-3-f2a6b3)](#meet-the-pets)
[![Code License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](../../LICENSE)
[![Assets: CC BY-NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-lightgrey.svg)](../../ASSETS-LICENSE.md)

[English](../../README.md) · [한국어](../ko/README.md) · [日本語](../ja/README.md) · [简体中文](../zh-CN/README.md) · [Español](../es/README.md) · [Deutsch](../de/README.md) · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · [Português (Brasil)](../pt-BR/README.md) · **Русский**

Этот перевод охватывает те же сведения об установке, питомцах и участии, что и английский README. Об ошибках и пропусках можно сообщить через issue или PR.

<p align="center">
  <img src="../../previews/comparison.png" alt="Chapssari, Mandu, Cho" width="900">
</p>

## Зачем появился этот проект

Мне хотелось, чтобы во время программирования рядом были животные, с которыми я живу, а не безликий кошачий персонаж. Проект начался с узнаваемых 3D-версий Chapssari и Mandu: их мордочки, окрас, отметины, пропорции и хвосты сохранены в светлом и мягком стиле ретроигры.

Теперь репозиторий также предлагает другим хозяевам понятный повторяемый путь: представить питомца, поделиться одной фотографией и создать устанавливаемого спутника для Codex.

## Настоящие коты за пикселями

| Chapssari | Mandu | Cho |
| --- | --- | --- |
| <img src="../../community-pets/photos/yeony-park--chapssari.webp" alt="Chapssari" width="280"> | <img src="../../community-pets/photos/yeony-park--mandu.webp" alt="Mandu" width="280"> | <img src="../../community-pets/photos/yeony-park--cho.webp" alt="Cho" width="280"> |
| Длинная серебристо-серая и белая шерсть, большой пушистый хвост без полос. | Любопытный пятимесячный британский короткошёрстный котёнок серо-коричневого и кремового окраса. | Наш любимый Cho, слишком рано ушедший к кошачьим звёздам. Норвежский лесной котёнок, которому было всего три месяца. |

## Быстрая установка

### macOS / Linux

```bash
# Chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari

# Mandu
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu

# Cho
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- cho
```

Список доступных питомцев:

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

Путь по умолчанию — `~/.codex/pets/<pet-name>/` или соответствующий каталог внутри `CODEX_HOME`. После установки обновите или перезапустите Codex.

<a id="meet-the-pets"></a>

## Знакомьтесь с питомцами

| Chapssari | Mandu | Cho |
| --- | --- | --- |
| <img src="../../previews/chapssari.gif" alt="Chapssari — Покой" width="180"> | <img src="../../previews/mandu.gif" alt="Mandu — Покой" width="180"> | <img src="../../previews/cho.gif" alt="Cho — Покой" width="180"> |
| Норвежский лесной кот с густой серебристо-серой шерстью, широкой белой грудкой, зелёными глазами и огромным пушистым хвостом без полос. | Любопытный и энергичный британский короткошёрстный котёнок с серо-коричневой и кремово-белой шерстью, сине-зелёными глазами и компактным округлым телом. | В память о любимом Cho — серо-белом норвежском лесном котёнке, ушедшем к кошачьим звёздам в три месяца. |

## Галерея движений

| Питомец | Покой | Приветствие | Работа | Ожидание ввода | Проверка |
| --- | --- | --- | --- | --- | --- |
| **Chapssari** | ![Chapssari — Покой](../../previews/motions/chapssari/idle.gif) | ![Chapssari — Приветствие](../../previews/motions/chapssari/waving.gif) | ![Chapssari — Работа](../../previews/motions/chapssari/running.gif) | ![Chapssari — Ожидание ввода](../../previews/motions/chapssari/waiting.gif) | ![Chapssari — Проверка](../../previews/motions/chapssari/review.gif) |
| **Mandu** | ![Mandu — Покой](../../previews/motions/mandu/idle.gif) | ![Mandu — Приветствие](../../previews/motions/mandu/waving.gif) | ![Mandu — Работа](../../previews/motions/mandu/running.gif) | ![Mandu — Ожидание ввода](../../previews/motions/mandu/waiting.gif) | ![Mandu — Проверка](../../previews/motions/mandu/review.gif) |
| **Cho** | ![Cho — Покой](../../previews/motions/cho/idle.gif) | ![Cho — Приветствие](../../previews/motions/cho/waving.gif) | ![Cho — Работа](../../previews/motions/cho/running.gif) | ![Cho — Ожидание ввода](../../previews/motions/cho/waiting.gif) | ![Cho — Проверка](../../previews/motions/cho/review.gif) |

Каждый пакет v2 также содержит движение влево и вправо, прыжки, реакции на сбой и 16 направлений взгляда.

## Загрузка через веб · v1

Эти совместимые ZIP предназначены для веб-загрузчиков, принимающих только атлас v1 размером 8×9. В каждом архиве только `pet.json` и `spritesheet.webp`.

- [Chapssari ZIP v1 для веб-загрузки](../../web-v1/chapssari-v1-web-upload.zip)
- [Mandu ZIP v1 для веб-загрузки](../../web-v1/mandu-v1-web-upload.zip)
- [Cho ZIP v1 для веб-загрузки](../../web-v1/cho-v1-web-upload.zip)

## Установка через ChatGPT Work

Если ChatGPT Work имеет доступ к GitHub и локальной среде Codex, передайте ему ссылку на папку нужного питомца v2:

- [Chapssari папка питомца v2](https://github.com/yeony-park/paws-on-codex/tree/main/pets/chapssari)
- [Mandu папка питомца v2](https://github.com/yeony-park/paws-on-codex/tree/main/pets/mandu)
- [Cho папка питомца v2](https://github.com/yeony-park/paws-on-codex/tree/main/pets/cho)

Вставьте этот запрос вместе со ссылкой на папку:

```text
Установи этот пакет Codex Pet v2 из GitHub:
<PET_FOLDER_URL>

Используй существующие pet.json и spritesheet.webp без изменений. Установи их
в каталог pets активного CODEX_HOME (по умолчанию: ~/.codex/pets/<pet-id>/),
сохрани имена файлов, проверь пакет и сообщи, нужно ли обновить или перезапустить
Codex. Не преобразовывай пакет в v1 и не создавай заново и не изменяй изображения.
```

Это удобный способ установки, а не отдельно опубликованный плагин. Возможности ChatGPT Work и права локальной записи зависят от среды. Если запись в каталог питомцев недоступна, используйте однострочный установщик выше.

## Представьте своего питомца

Готовый спрайтовый атлас не обязателен. Отправьте однострочное представление в Markdown и, при желании, одну фотографию:

1. Скопируйте [`community-pets/_template.md`](../../community-pets/_template.md) в `community-pets/github-id--pet-name.md`.
2. Напишите одну непустую строку длиной до 180 символов.
3. При желании добавьте одну фотографию JPG, PNG или WebP по пути `community-pets/photos-inbox/github-id--pet-name.<ext>`.
4. Откройте pull request.

```markdown
**Bori** · dog/Jindo · [@github-id](https://github.com/github-id) — A four-year-old explorer who reaches the front door before anyone can pick up the walking bag.
```

После слияния автоматизация удалит метаданные, уменьшит фото, преобразует его в WebP, удалит исходную загрузку и обновит [галерею сообщества](../../community-pets/GALLERY.md). Правила о правах, приватности и именах файлов — в [CONTRIBUTING.md](../../CONTRIBUTING.md).

## Создайте своего питомца с Codex

В репозитории есть проектный навык [`$create-companion-pet`](../../.agents/skills/create-companion-pet/SKILL.md). Откройте репозиторий в Codex и попросите:

```text
Используй $create-companion-pet, чтобы превратить эти фотографии моего животного в питомца Codex.
```

Навык собирает индивидуальные черты, выбирает установленный процесс для нужной среды (`hatch-pet` для Codex или `work-pets:create-pet` для ChatGPT Work) и готовит проверенные ресурсы v2, веб-пакет v1 и сведения для публикации. Уже одобренных питомцев можно импортировать без повторной генерации. [Руководство по созданию и проверке](../../.agents/skills/create-companion-pet/references/creation-quality.md) описывает узнаваемость, движения и взгляд. Краткий запрос также есть в [`prompts/create-your-pet.md`](../../prompts/create-your-pet.md).

## Структура репозитория

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

## Благодарности

Спасибо [`legeling/awesome-codex-pet`](https://github.com/legeling/awesome-codex-pet): галерея по движениям, установка одной командой и подход к распространению через сообщество вдохновили этот проект. Текущая реализация написана независимо. Если позже будет включён MIT-код этого проекта, его уведомления об авторских правах и разрешении необходимо сохранить согласно [THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md).

## Участники

Спасибо всем, кто представляет питомцев, улучшает их, переводит документацию или помогает с установкой.

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

## Лицензия

- Код, скрипты и документация: [MIT](../../LICENSE)
- Включённое стороннее ПО: условия каждой зависимости приведены в [THIRD_PARTY_LICENSES.md](../../THIRD_PARTY_LICENSES.md).
- Ресурсы и превью Chapssari, Mandu и Cho: [CC BY-NC 4.0](../../ASSETS-LICENSE.md)
- Фотографии и ресурсы сообщества: лицензия, заявленная участником; CC BY-NC 4.0 используется по умолчанию только при наличии необходимых прав и согласия.

Имена и образы настоящих животных остаются связанными с их хозяевами. Лицензия референсных фотографий не меняется, если они явно не включены и не отмечены.
