# Paws on Codex 🐾

[English](../../README.md) · [한국어](../ko/README.md) · [日本語](../ja/README.md) · **简体中文** · [Español](../es/README.md) · [Deutsch](../de/README.md) · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · [Português](../pt-BR/README.md) · [Русский](../ru/README.md)

把真实宠物的毛色、脸型、眼睛、体型和尾巴保留下来，制作成柔软明亮的3D电子宠物风Codex宠物。这个项目始于“我想拥有自己宠物的3D角色”。

<p align="center"><img src="../../previews/comparison.png" alt="Chapssari 和 Mandu" width="800"></p>

## 快速安装

```bash
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu
```

默认安装到 `~/.codex/pets/<pet-name>/`。安装后请刷新或重启Codex。

## 网页上传v1

- [Chapssari v1 ZIP](../../web-v1/chapssari-v1-web-upload.zip)
- [Mandu v1 ZIP](../../web-v1/mandu-v1-web-upload.zip)

## 社区贡献

在 `community-pets/github-id--pet-name.md` 中添加一行、最多180个字符的介绍。可在 `community-pets/photos-inbox/` 中提交一张同名照片；合并后会自动移除元数据、缩放、转换为WebP并更新[图库](../../community-pets/GALLERY.md)。详情见 [CONTRIBUTING.md](../../CONTRIBUTING.md)。

在Codex中调用 `$create-companion-pet`，即可从照片生成经过验证的v2宠物和v1网页包。

## 许可证

代码、脚本和文档采用 [MIT](../../LICENSE)；指定的宠物资源与预览采用 [CC BY-NC 4.0](../../ASSETS-LICENSE.md)。
