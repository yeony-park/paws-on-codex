# Paws on Codex 🐾

[English](../../README.md) · [한국어](../ko/README.md) · [日本語](../ja/README.md) · [简体中文](../zh-CN/README.md) · [Español](../es/README.md) · **Deutsch** · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · [Português](../pt-BR/README.md) · [Русский](../ru/README.md)

Weiche 3D-Codex-Haustiere im Retro-Virtual-Pet-Stil, die Fell, Gesicht, Augen, Körperbau und Schwanz des echten Tieres erkennbar bewahren. Das Projekt entstand aus dem Wunsch nach 3D-Versionen der eigenen Haustiere Chapssari und Mandu.

<p align="center"><img src="../../previews/comparison.png" alt="Chapssari und Mandu" width="800"></p>

## Schnellinstallation

```bash
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu
```

Standardziel ist `~/.codex/pets/<pet-name>/`. Danach Codex neu laden oder starten.

## v1 für Web-Uploads

- [Chapssari v1 ZIP](../../web-v1/chapssari-v1-web-upload.zip)
- [Mandu v1 ZIP](../../web-v1/mandu-v1-web-upload.zip)

## Community

Füge unter `community-pets/github-id--pet-name.md` eine einzeilige Vorstellung mit höchstens 180 Zeichen hinzu. Optional kann ein Foto mit gleichem Dateistamm in `community-pets/photos-inbox/` liegen. Nach dem Merge werden Metadaten entfernt, das Bild verkleinert, nach WebP konvertiert und die [Galerie](../../community-pets/GALLERY.md) aktualisiert. Siehe [CONTRIBUTING.md](../../CONTRIBUTING.md).

Mit `$create-companion-pet` erzeugt Codex aus Fotos ein geprüftes v2-Paket und ein v1-Webpaket.

## Lizenz

Code, Skripte und Dokumentation: [MIT](../../LICENSE). Gekennzeichnete Pet-Assets und Vorschauen: [CC BY-NC 4.0](../../ASSETS-LICENSE.md).
