# Paws on Codex 🐾

> 実在するパートナー動物を、やわらかな3Dたまごっち風Codexペットに。

[![Codex Pet v2](https://img.shields.io/badge/Codex%20Pet-v2-6f5bd3)](https://github.com/yeony-park/paws-on-codex)
[![Pets](https://img.shields.io/badge/pets-3-f2a6b3)](#meet-the-pets)
[![Code License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](../../LICENSE)
[![Assets: CC BY-NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-lightgrey.svg)](../../ASSETS-LICENSE.md)

[English](../../README.md) · [한국어](../ko/README.md) · **日本語** · [简体中文](../zh-CN/README.md) · [Español](../es/README.md) · [Deutsch](../de/README.md) · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · [Português (Brasil)](../pt-BR/README.md) · [Русский](../ru/README.md)

この日本語版は英語READMEのインストール・ペット・貢献案内と同じ内容を扱います。翻訳の誤りや不足はIssueまたはPRでお知らせください。

<p align="center">
  <img src="../../previews/comparison.png" alt="Chapssari, Mandu, Cho" width="900">
</p>

## このプロジェクトを始めた理由

コーディング中、一般的な猫のマスコットではなく、一緒に暮らす動物にそばにいてほしいと思いました。顔、毛色、模様、体格、しっぽの特徴を保ち、明るくやわらかなレトロゲーム風にしたチャプサリとマンドゥの3Dペットから始まりました。

今では、ほかの飼い主もパートナーを紹介し、写真を1枚共有して、インストールできるCodexペットを作れる場所を目指しています。

## キャラクターのモデルになった猫たち

| チャプサリ | マンドゥ | チョ |
| --- | --- | --- |
| <img src="../../community-pets/photos/yeony-park--chapssari.webp" alt="チャプサリ" width="280"> | <img src="../../community-pets/photos/yeony-park--mandu.webp" alt="マンドゥ" width="280"> | <img src="../../community-pets/photos/yeony-park--cho.webp" alt="チョ" width="280"> |
| 豊かなシルバーグレーと白の長毛、縞模様のない大きなしっぽが特徴です。 | 何にでも興味津々な、生後5か月のブリティッシュショートヘア。トープグレーとクリーム色の子猫です。 | 幼くして猫の星へ旅立った、愛するチョ。ノルウェージャンフォレストキャット、生後3か月。 |

## クイックインストール

### macOS / Linux

```bash
# Chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari

# Mandu
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu

# Cho
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- cho
```

利用できるペットの一覧:

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

通常の保存先は `~/.codex/pets/<pet-name>/`、または `CODEX_HOME` 配下の対応するパスです。インストール後にCodexを再読み込みするか再起動してください。

<a id="meet-the-pets"></a>

## ペットの紹介

| チャプサリ | マンドゥ | チョ |
| --- | --- | --- |
| <img src="../../previews/chapssari.gif" alt="チャプサリ — 待機" width="180"> | <img src="../../previews/mandu.gif" alt="マンドゥ — 待機" width="180"> | <img src="../../previews/cho.gif" alt="チョ — 待機" width="180"> |
| 豊かなシルバーグレーの毛、広い白いタキシード模様、緑の瞳、縞模様のない大きなしっぽを持つノルウェージャンフォレストキャットです。 | トープグレーとクリームホワイトの毛、青緑の瞳、丸く小さな体の、好奇心旺盛で元気なブリティッシュショートヘアの子猫です。 | 生後わずか3か月で猫の星へ旅立った、灰色と白のノルウェージャンフォレストキャット、愛するチョをしのんで。 |

## モーションギャラリー

| ペット | 待機 | あいさつ | 作業中 | 入力待ち | レビュー |
| --- | --- | --- | --- | --- | --- |
| **チャプサリ** | ![チャプサリ — 待機](../../previews/motions/chapssari/idle.gif) | ![チャプサリ — あいさつ](../../previews/motions/chapssari/waving.gif) | ![チャプサリ — 作業中](../../previews/motions/chapssari/running.gif) | ![チャプサリ — 入力待ち](../../previews/motions/chapssari/waiting.gif) | ![チャプサリ — レビュー](../../previews/motions/chapssari/review.gif) |
| **マンドゥ** | ![マンドゥ — 待機](../../previews/motions/mandu/idle.gif) | ![マンドゥ — あいさつ](../../previews/motions/mandu/waving.gif) | ![マンドゥ — 作業中](../../previews/motions/mandu/running.gif) | ![マンドゥ — 入力待ち](../../previews/motions/mandu/waiting.gif) | ![マンドゥ — レビュー](../../previews/motions/mandu/review.gif) |
| **チョ** | ![チョ — 待機](../../previews/motions/cho/idle.gif) | ![チョ — あいさつ](../../previews/motions/cho/waving.gif) | ![チョ — 作業中](../../previews/motions/cho/running.gif) | ![チョ — 入力待ち](../../previews/motions/cho/waiting.gif) | ![チョ — レビュー](../../previews/motions/cho/review.gif) |

各v2パッケージには、左右の移動、ジャンプ、失敗時の反応、16方向の視線も含まれます。

## Webアップロード · v1

8×9のv1アトラスのみを受け付けるWebアップローダーには、以下の互換ZIPを使ってください。中身は `pet.json` と `spritesheet.webp` のみです。

- [チャプサリ v1 WebアップロードZIP](../../web-v1/chapssari-v1-web-upload.zip)
- [マンドゥ v1 WebアップロードZIP](../../web-v1/mandu-v1-web-upload.zip)
- [チョ v1 WebアップロードZIP](../../web-v1/cho-v1-web-upload.zip)

## ChatGPT Workでインストール

ChatGPT WorkがGitHubとローカルのCodex環境にアクセスできる場合、使いたいv2ペットのGitHubフォルダを渡してください。

- [チャプサリ v2ペットフォルダ](https://github.com/yeony-park/paws-on-codex/tree/main/pets/chapssari)
- [マンドゥ v2ペットフォルダ](https://github.com/yeony-park/paws-on-codex/tree/main/pets/mandu)
- [チョ v2ペットフォルダ](https://github.com/yeony-park/paws-on-codex/tree/main/pets/cho)

フォルダのリンクと一緒に次のプロンプトを入力してください:

```text
GitHubにあるこのCodex Pet v2パッケージをインストールしてください:
<PET_FOLDER_URL>

既存のpet.jsonとspritesheet.webpをそのまま使ってください。現在のCODEX_HOMEの
petsディレクトリ（既定: ~/.codex/pets/<pet-id>/）にファイル名を変えずに配置し、
検証後、Codexの再読み込みや再起動が必要か教えてください。
v1への変換や画像の再生成・変更はしないでください。
```

これは便利なインストール手順であり、別途公開されたプラグインではありません。ChatGPT Workの機能やローカルへの書き込み権限は環境により異なります。Codexのペットディレクトリに書き込めない場合は、上の1行インストーラーを使ってください。

## あなたのパートナーを紹介する

完成したスプライトシートは不要です。1行の紹介と、任意の写真1枚で参加できます。

1. [`community-pets/_template.md`](../../community-pets/_template.md)を `community-pets/github-id--pet-name.md` にコピーします。
2. 空行ではない紹介を1行、180文字以内で書きます。
3. 任意でJPG・PNG・WebPの写真1枚を `community-pets/photos-inbox/github-id--pet-name.<ext>` として追加します。
4. プルリクエストを作成します。

```markdown
**Bori** · dog/Jindo · [@github-id](https://github.com/github-id) — A four-year-old explorer who reaches the front door before anyone can pick up the walking bag.
```

マージ後、自動処理がメタデータを削除し、写真を縮小してWebPに変換し、元のアップロードを削除して[コミュニティギャラリー](../../community-pets/GALLERY.md)を更新します。権利・プライバシー・命名規則は[CONTRIBUTING.md](../../CONTRIBUTING.md)を確認してください。

## Codexで自分のペットを作る

このリポジトリにはプロジェクトスキル[`$create-companion-pet`](../../.agents/skills/create-companion-pet/SKILL.md)があります。Codexでリポジトリを開き、次のように依頼します:

```text
$create-companion-petを使って、このパートナー動物の写真をCodexペットにしてください。
```

スキルは個体の特徴を整理し、対象に合うインストール済みワークフローを選びます（Codex: `hatch-pet`、ChatGPT Work: `work-pets:create-pet`）。公開用の検証済みv2素材、v1 Webパッケージ、貢献情報を準備します。承認済みペットは画像を再生成せずに取り込めます。[作成・レビュー指針](../../.agents/skills/create-companion-pet/references/creation-quality.md)では個体・モーション・視線の確認を説明しています。短い依頼文は[`prompts/create-your-pet.md`](../../prompts/create-your-pet.md)にもあります。

## リポジトリ構成

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

## 謝辞

[`legeling/awesome-codex-pet`](https://github.com/legeling/awesome-codex-pet)のモーション別ギャラリー、1行インストール、コミュニティ中心の配布方式に着想を得ました。現在の実装は独立して作成されています。将来MITライセンスのコードを取り込む場合は、[THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md)に従い著作権表示と許諾文を保持する必要があります。

## 貢献者

パートナーの紹介、ペットの改善、文書の翻訳、インストール支援をしてくださる皆さんに感謝します。

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

## ライセンス

- コード・スクリプト・文書: [MIT](../../LICENSE)
- 同梱の外部ソフトウェア: 各依存関係の条件は[THIRD_PARTY_LICENSES.md](../../THIRD_PARTY_LICENSES.md)に収録しています。
- チャプサリ・マンドゥ・チョのペット素材とプレビュー: [CC BY-NC 4.0](../../ASSETS-LICENSE.md)
- コミュニティの写真・ペット素材: 貢献者が宣言したライセンス。必要な権利を持ち同意した場合のみ、CC BY-NC 4.0を既定とします。

実在するパートナー動物の名前と姿は、その飼い主に結び付いています。参考写真は、明示的に収録・表示されない限り再ライセンスされません。
