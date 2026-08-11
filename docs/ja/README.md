# Paws on Codex 🐾

[English](../../README.md) · [한국어](../ko/README.md) · **日本語** · [简体中文](../zh-CN/README.md) · [Español](../es/README.md) · [Deutsch](../de/README.md) · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · [Português](../pt-BR/README.md) · [Русский](../ru/README.md)

実在するペットの特徴を保った、やわらかな3Dたまごっち風Codexペットです。自分のペットの3Dキャラクターが欲しくて、チャプサリとマンドゥから始めました。

<p align="center"><img src="../../previews/comparison.png" alt="チャプサリとマンドゥ" width="800"></p>

## クイックインストール

```bash
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu
```

インストール先は通常 `~/.codex/pets/<pet-name>/` です。完了後にCodexを再読み込みしてください。

## Web用v1

- [Chapssari v1 ZIP](../../web-v1/chapssari-v1-web-upload.zip)
- [Mandu v1 ZIP](../../web-v1/mandu-v1-web-upload.zip)

## コミュニティ

`community-pets/github-id--pet-name.md` に180文字以内の紹介を1行追加できます。任意の写真1枚を同じstemで `community-pets/photos-inbox/` に置くと、マージ後にメタデータ削除・縮小・WebP変換・[ギャラリー](../../community-pets/GALLERY.md)更新が自動実行されます。詳細は [CONTRIBUTING.md](../../CONTRIBUTING.md) を参照してください。

Codexでは `$create-companion-pet` を使って、写真から検証済みv2ペットとv1パッケージを作成できます。

## ライセンス

コード・スクリプト・文書は [MIT](../../LICENSE)、対象のペット素材とプレビューは [CC BY-NC 4.0](../../ASSETS-LICENSE.md) です。
