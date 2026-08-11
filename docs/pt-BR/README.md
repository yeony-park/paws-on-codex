# Paws on Codex 🐾

[English](../../README.md) · [한국어](../ko/README.md) · [日本語](../ja/README.md) · [简体中文](../zh-CN/README.md) · [Español](../es/README.md) · [Deutsch](../de/README.md) · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · **Português (Brasil)** · [Русский](../ru/README.md)

Pets 3D para o Codex com estética de bichinho virtual retrô, mantendo as características reconhecíveis do animal real. O projeto nasceu da vontade de ter versões 3D dos meus companheiros Chapssari e Mandu.

<p align="center"><img src="../../previews/comparison.png" alt="Chapssari e Mandu" width="800"></p>

## Instalação rápida

```bash
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu
```

O destino padrão é `~/.codex/pets/<pet-name>/`. Atualize ou reinicie o Codex após a instalação.

## v1 para upload na Web

- [Chapssari v1 ZIP](../../web-v1/chapssari-v1-web-upload.zip)
- [Mandu v1 ZIP](../../web-v1/mandu-v1-web-upload.zip)

## Comunidade

Adicione uma apresentação de uma linha, com até 180 caracteres, em `community-pets/github-id--pet-name.md`. Opcionalmente, envie uma foto com o mesmo nome-base para `community-pets/photos-inbox/`. Após o merge, a automação remove metadados, redimensiona, converte para WebP e atualiza a [galeria](../../community-pets/GALLERY.md). Veja [CONTRIBUTING.md](../../CONTRIBUTING.md).

No Codex, use `$create-companion-pet` para criar, a partir de fotos, um pacote v2 validado e um pacote Web v1.

## Licença

Código, scripts e documentação: [MIT](../../LICENSE). Assets e prévias indicados: [CC BY-NC 4.0](../../ASSETS-LICENSE.md).
