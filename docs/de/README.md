# Paws on Codex 🐾

> Echte Haustiere, neu interpretiert als sanfte 3D-Begleiter im Tamagotchi-Stil für Codex.

[![Codex Pet v2](https://img.shields.io/badge/Codex%20Pet-v2-6f5bd3)](https://github.com/yeony-park/paws-on-codex)
[![Pets](https://img.shields.io/badge/pets-3-f2a6b3)](#meet-the-pets)
[![Code License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](../../LICENSE)
[![Assets: CC BY-NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-lightgrey.svg)](../../ASSETS-LICENSE.md)

[English](../../README.md) · [한국어](../ko/README.md) · [日本語](../ja/README.md) · [简体中文](../zh-CN/README.md) · [Español](../es/README.md) · **Deutsch** · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · [Português (Brasil)](../pt-BR/README.md) · [Русский](../ru/README.md)

Diese Übersetzung enthält dieselben Installations-, Begleiter- und Beitragsinformationen wie die englische README. Übersetzungsfehler oder Lücken bitte per Issue oder PR melden.

<p align="center">
  <img src="../../previews/comparison.png" alt="Chapssari, Mandu, Cho" width="900">
</p>

## Warum dieses Projekt entstand

Ich wollte beim Programmieren die Tiere an meiner Seite haben, mit denen ich lebe – keine beliebige Katze. Das Projekt begann mit erkennbaren 3D-Versionen von Chapssari und Mandu. Gesicht, Fellfarben, Muster, Proportionen und Schwanz blieben erhalten und wurden in einen hellen, weichen Retro-Spielstil übertragen.

Inzwischen bietet das Repository auch anderen Tierhaltern einen wiederholbaren Weg, ihren Begleiter vorzustellen, ein Foto zu teilen und ein installierbares Codex-Haustier zu erstellen.

## Die echten Katzen hinter den Pixeln

| Chapssari | Mandu | Cho |
| --- | --- | --- |
| <img src="../../community-pets/photos/yeony-park--chapssari.webp" alt="Chapssari" width="280"> | <img src="../../community-pets/photos/yeony-park--mandu.webp" alt="Mandu" width="280"> | <img src="../../community-pets/photos/yeony-park--cho.webp" alt="Cho" width="280"> |
| Langes silbergraues und weißes Fell mit einem großen, buschigen Schwanz ohne Streifen. | Ein neugieriges, fünf Monate altes Britisch-Kurzhaar-Kätzchen in Taupegrau und Creme. | Unser geliebter Cho, der viel zu früh zu den Katzensternen ging. Ein Norwegisches-Waldkatzen-Kätzchen, erst drei Monate alt. |

## Schnellinstallation

### macOS / Linux

```bash
# Chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari

# Mandu
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu

# Cho
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- cho
```

Verfügbare Begleiter auflisten:

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

Das Standardziel ist `~/.codex/pets/<pet-name>/` oder der entsprechende Pfad unter `CODEX_HOME`. Codex nach der Installation aktualisieren oder neu starten.

<a id="meet-the-pets"></a>

## Die Begleiter kennenlernen

| Chapssari | Mandu | Cho |
| --- | --- | --- |
| <img src="../../previews/chapssari.gif" alt="Chapssari — Ruhe" width="180"> | <img src="../../previews/mandu.gif" alt="Mandu — Ruhe" width="180"> | <img src="../../previews/cho.gif" alt="Cho — Ruhe" width="180"> |
| Eine Norwegische Waldkatze mit üppigem silbergrauem Fell, breiter weißer Brust, grünen Augen und großem, ungestreiftem Federschwanz. | Ein neugieriges, lebhaftes Britisch-Kurzhaar-Kätzchen mit taupegrauem und cremeweißem Fell, blaugrünen Augen und kompakter, runder Statur. | In Erinnerung an unseren geliebten Cho: ein grau-weißes Norwegisches-Waldkatzen-Kätzchen, das mit nur drei Monaten zu den Katzensternen ging. |

## Animationsgalerie

| Begleiter | Ruhe | Winken | Bei der Arbeit | Warten auf Eingabe | Prüfen |
| --- | --- | --- | --- | --- | --- |
| **Chapssari** | ![Chapssari — Ruhe](../../previews/motions/chapssari/idle.gif) | ![Chapssari — Winken](../../previews/motions/chapssari/waving.gif) | ![Chapssari — Bei der Arbeit](../../previews/motions/chapssari/running.gif) | ![Chapssari — Warten auf Eingabe](../../previews/motions/chapssari/waiting.gif) | ![Chapssari — Prüfen](../../previews/motions/chapssari/review.gif) |
| **Mandu** | ![Mandu — Ruhe](../../previews/motions/mandu/idle.gif) | ![Mandu — Winken](../../previews/motions/mandu/waving.gif) | ![Mandu — Bei der Arbeit](../../previews/motions/mandu/running.gif) | ![Mandu — Warten auf Eingabe](../../previews/motions/mandu/waiting.gif) | ![Mandu — Prüfen](../../previews/motions/mandu/review.gif) |
| **Cho** | ![Cho — Ruhe](../../previews/motions/cho/idle.gif) | ![Cho — Winken](../../previews/motions/cho/waving.gif) | ![Cho — Bei der Arbeit](../../previews/motions/cho/running.gif) | ![Cho — Warten auf Eingabe](../../previews/motions/cho/waiting.gif) | ![Cho — Prüfen](../../previews/motions/cho/review.gif) |

Jedes v2-Paket enthält außerdem Links-/Rechtsbewegungen, Sprünge, Fehlerreaktionen und 16 Blickrichtungen.

## Web-Upload · v1

Diese Kompatibilitäts-ZIPs sind für Web-Uploader gedacht, die nur den 8×9-v1-Atlas akzeptieren. Jedes Archiv enthält ausschließlich `pet.json` und `spritesheet.webp`.

- [Chapssari v1-Web-Upload-ZIP](../../web-v1/chapssari-v1-web-upload.zip)
- [Mandu v1-Web-Upload-ZIP](../../web-v1/mandu-v1-web-upload.zip)
- [Cho v1-Web-Upload-ZIP](../../web-v1/cho-v1-web-upload.zip)

## Mit ChatGPT Work installieren

Wenn ChatGPT Work auf GitHub und deine lokale Codex-Umgebung zugreifen kann, gib ihm den GitHub-Ordner des gewünschten v2-Begleiters:

- [Chapssari v2-Begleiterordner](https://github.com/yeony-park/paws-on-codex/tree/main/pets/chapssari)
- [Mandu v2-Begleiterordner](https://github.com/yeony-park/paws-on-codex/tree/main/pets/mandu)
- [Cho v2-Begleiterordner](https://github.com/yeony-park/paws-on-codex/tree/main/pets/cho)

Füge diese Anweisung zusammen mit dem Ordnerlink ein:

```text
Installiere dieses Codex-Pet-v2-Paket von GitHub:
<PET_FOLDER_URL>

Verwende pet.json und spritesheet.webp unverändert. Installiere sie unter pets
im aktiven CODEX_HOME (Standard: ~/.codex/pets/<pet-id>/), behalte die Dateinamen,
prüfe das Paket und sage mir, ob Codex aktualisiert oder neu gestartet werden muss.
Nicht nach v1 konvertieren und keine Bilder neu generieren oder verändern.
```

Dies ist ein praktischer Installationsablauf, kein separat veröffentlichtes Plugin. Fähigkeiten und lokale Schreibrechte von ChatGPT Work können je nach Umgebung abweichen. Wenn es nicht in den Codex-Begleiterordner schreiben kann, nutze den Einzeilen-Installer oben.

## Deinen Begleiter vorstellen

Ein fertiges Spritesheet ist nicht nötig. Reiche eine einzeilige Markdown-Vorstellung und optional ein Foto ein:

1. Kopiere [`community-pets/_template.md`](../../community-pets/_template.md) nach `community-pets/github-id--pet-name.md`.
2. Schreibe eine nicht leere Zeile mit höchstens 180 Zeichen.
3. Füge optional ein JPG-, PNG- oder WebP-Foto unter `community-pets/photos-inbox/github-id--pet-name.<ext>` hinzu.
4. Öffne einen Pull Request.

```markdown
**Bori** · dog/Jindo · [@github-id](https://github.com/github-id) — A four-year-old explorer who reaches the front door before anyone can pick up the walking bag.
```

Nach dem Merge entfernt die Automatisierung Metadaten, verkleinert das Foto, konvertiert es nach WebP, löscht den ursprünglichen Upload und aktualisiert die [Community-Galerie](../../community-pets/GALLERY.md). Rechte, Datenschutz und Dateinamen sind in [CONTRIBUTING.md](../../CONTRIBUTING.md) beschrieben.

## Mit Codex einen eigenen Begleiter erstellen

Das Repository enthält den Projekt-Skill [`$create-companion-pet`](../../.agents/skills/create-companion-pet/SKILL.md). Öffne das Repository in Codex und bitte darum:

```text
Verwende $create-companion-pet, um aus diesen Fotos meines Haustiers einen Codex-Begleiter zu erstellen.
```

Der Skill erfasst individuelle Merkmale, wählt den installierten Ablauf für das Ziel (`hatch-pet` für Codex oder `work-pets:create-pet` für ChatGPT Work) und bereitet geprüfte v2-Assets, ein v1-Web-Paket und Beitragsmetadaten vor. Bereits freigegebene Begleiter lassen sich ohne neue Bilderzeugung importieren. Der [Erstellungs- und Prüfungsleitfaden](../../.agents/skills/create-companion-pet/references/creation-quality.md) behandelt Identität, Bewegung und Blickrichtungen. Eine Kurzvorlage steht in [`prompts/create-your-pet.md`](../../prompts/create-your-pet.md).

## Repository-Struktur

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

## Danksagung

Dank an [`legeling/awesome-codex-pet`](https://github.com/legeling/awesome-codex-pet): Die bewegungsbezogene Galerie, Installation mit einem Befehl und Community-orientierte Verteilung haben dieses Projekt inspiriert. Die aktuelle Implementierung wurde unabhängig geschrieben. Falls später MIT-Code daraus übernommen wird, müssen Urheberrechts- und Erlaubnishinweise gemäß [THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md) erhalten bleiben.

## Mitwirkende

Danke an alle, die Begleiter vorstellen, Haustiere verbessern, Dokumentation übersetzen oder anderen bei der Installation helfen.

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

## Lizenz

- Code, Skripte und Dokumentation: [MIT](../../LICENSE)
- Mitgelieferte Drittsoftware: Die Bedingungen jeder Abhängigkeit stehen in [THIRD_PARTY_LICENSES.md](../../THIRD_PARTY_LICENSES.md).
- Assets und Vorschauen von Chapssari, Mandu und Cho: [CC BY-NC 4.0](../../ASSETS-LICENSE.md)
- Community-Fotos und -Assets: die vom Beitragenden erklärte Lizenz; CC BY-NC 4.0 gilt nur standardmäßig, wenn die erforderlichen Rechte vorliegen und zugestimmt wird.

Namen und Abbilder echter Haustiere bleiben ihren Haltern zugeordnet. Referenzfotos werden nur bei ausdrücklicher Aufnahme und Kennzeichnung neu lizenziert.
