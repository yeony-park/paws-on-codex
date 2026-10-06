# Paws on Codex 🐾

> 把真实的伴侣动物变成柔和的 3D 拓麻歌子风格 Codex 宠物。

[![Codex Pet v2](https://img.shields.io/badge/Codex%20Pet-v2-6f5bd3)](https://github.com/yeony-park/paws-on-codex)
[![Pets](https://img.shields.io/badge/pets-3-f2a6b3)](#meet-the-pets)
[![Code License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](../../LICENSE)
[![Assets: CC BY-NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-lightgrey.svg)](../../ASSETS-LICENSE.md)

[English](../../README.md) · [한국어](../ko/README.md) · [日本語](../ja/README.md) · **简体中文** · [Español](../es/README.md) · [Deutsch](../de/README.md) · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · [Português (Brasil)](../pt-BR/README.md) · [Русский](../ru/README.md)

本中文版与英文 README 的安装、宠物和贡献指南保持内容一致。欢迎通过 Issue 或 PR 指出翻译错误或遗漏。

<p align="center">
  <img src="../../previews/comparison.png" alt="Chapssari, Mandu, Cho" width="900">
</p>

## 为什么创建这个项目

我想让陪伴自己生活的动物在写代码时待在身旁，而不是一个普通的猫咪吉祥物。这个项目从 Chapssari 和 Mandu 的 3D 虚拟宠物开始，保留它们真实的脸型、毛色、花纹、体型和尾巴，并转化为明亮柔和的复古游戏风格。

现在，这个仓库也为其他宠物家长提供一条可重复的路径：介绍自己的伙伴，分享一张照片，并创建可安装的 Codex 宠物。

## 角色背后的真实猫咪

| Chapssari | Mandu | Cho |
| --- | --- | --- |
| <img src="../../community-pets/photos/yeony-park--chapssari.webp" alt="Chapssari" width="280"> | <img src="../../community-pets/photos/yeony-park--mandu.webp" alt="Mandu" width="280"> | <img src="../../community-pets/photos/yeony-park--cho.webp" alt="Cho" width="280"> |
| 银灰与白色的长毛，以及没有条纹的蓬松大尾巴。 | 五个月大的英短幼猫，拥有灰褐色和奶油色毛发，对一切都充满好奇。 | 我们深爱的 Cho，年幼时就去了猫咪星球。挪威森林猫，仅三个月大。 |

## 快速安装

### macOS / Linux

```bash
# Chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari

# Mandu
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu

# Cho
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- cho
```

列出可用的宠物：

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

默认安装位置是 `~/.codex/pets/<pet-name>/`，或 `CODEX_HOME` 下对应的路径。安装后请刷新或重启 Codex。

<a id="meet-the-pets"></a>

## 认识这些宠物

| Chapssari | Mandu | Cho |
| --- | --- | --- |
| <img src="../../previews/chapssari.gif" alt="Chapssari — 空闲" width="180"> | <img src="../../previews/mandu.gif" alt="Mandu — 空闲" width="180"> | <img src="../../previews/cho.gif" alt="Cho — 空闲" width="180"> |
| 挪威森林猫，拥有丰厚的银灰色毛发、宽阔的白色燕尾服花色、绿色眼睛和没有条纹的蓬松大尾巴。 | 好奇又活泼的英短幼猫，灰褐色与奶油白色毛发、蓝绿色眼睛，以及紧凑圆润的体型。 | 纪念我们深爱的 Cho：一只灰白相间的挪威森林幼猫，仅三个月大就去了猫咪星球。 |

## 动作展示

| 宠物 | 空闲 | 挥手 | 工作中 | 等待输入 | 检查 |
| --- | --- | --- | --- | --- | --- |
| **Chapssari** | ![Chapssari — 空闲](../../previews/motions/chapssari/idle.gif) | ![Chapssari — 挥手](../../previews/motions/chapssari/waving.gif) | ![Chapssari — 工作中](../../previews/motions/chapssari/running.gif) | ![Chapssari — 等待输入](../../previews/motions/chapssari/waiting.gif) | ![Chapssari — 检查](../../previews/motions/chapssari/review.gif) |
| **Mandu** | ![Mandu — 空闲](../../previews/motions/mandu/idle.gif) | ![Mandu — 挥手](../../previews/motions/mandu/waving.gif) | ![Mandu — 工作中](../../previews/motions/mandu/running.gif) | ![Mandu — 等待输入](../../previews/motions/mandu/waiting.gif) | ![Mandu — 检查](../../previews/motions/mandu/review.gif) |
| **Cho** | ![Cho — 空闲](../../previews/motions/cho/idle.gif) | ![Cho — 挥手](../../previews/motions/cho/waving.gif) | ![Cho — 工作中](../../previews/motions/cho/running.gif) | ![Cho — 等待输入](../../previews/motions/cho/waiting.gif) | ![Cho — 检查](../../previews/motions/cho/review.gif) |

每个 v2 包还包含左右移动、跳跃、失败反应和 16 个视线方向。

## 网页上传 · v1

网页上传器仅支持 8×9 的 v1 图集时，请使用这些兼容 ZIP。每个压缩包只含 `pet.json` 和 `spritesheet.webp`。

- [Chapssari v1 网页上传 ZIP](../../web-v1/chapssari-v1-web-upload.zip)
- [Mandu v1 网页上传 ZIP](../../web-v1/mandu-v1-web-upload.zip)
- [Cho v1 网页上传 ZIP](../../web-v1/cho-v1-web-upload.zip)

## 通过 ChatGPT Work 安装

如果 ChatGPT Work 能访问 GitHub 和本地 Codex 环境，请把目标 v2 宠物的 GitHub 文件夹链接交给它。

- [Chapssari v2 宠物文件夹](https://github.com/yeony-park/paws-on-codex/tree/main/pets/chapssari)
- [Mandu v2 宠物文件夹](https://github.com/yeony-park/paws-on-codex/tree/main/pets/mandu)
- [Cho v2 宠物文件夹](https://github.com/yeony-park/paws-on-codex/tree/main/pets/cho)

将文件夹链接和下面的提示词一起粘贴：

```text
请安装 GitHub 上的这个 Codex Pet v2 包：
<PET_FOLDER_URL>

原样使用现有的 pet.json 和 spritesheet.webp。安装到当前 CODEX_HOME 的 pets
目录（默认：~/.codex/pets/<pet-id>/），保留文件名，验证包，并告诉我是否需要
刷新或重启 Codex。不要转换为 v1，也不要重新生成或修改图像。
```

这是便捷的安装流程，而不是单独发布的插件。ChatGPT Work 的功能和本地写入权限因环境而异；若它无法写入 Codex 宠物目录，请使用上方的一行安装命令。

## 介绍你的伙伴

不需要先完成精灵图集。提交一行 Markdown 介绍，并可选附上一张照片：

1. 将 [`community-pets/_template.md`](../../community-pets/_template.md) 复制为 `community-pets/github-id--pet-name.md`。
2. 写一行不超过 180 个字符的非空介绍。
3. 可选添加一张 JPG、PNG 或 WebP 照片，路径为 `community-pets/photos-inbox/github-id--pet-name.<ext>`。
4. 提交拉取请求。

```markdown
**Bori** · dog/Jindo · [@github-id](https://github.com/github-id) — A four-year-old explorer who reaches the front door before anyone can pick up the walking bag.
```

合并后，自动化会移除照片元数据、缩小尺寸、转换为 WebP、删除原始上传文件，并更新[社区画廊](../../community-pets/GALLERY.md)。权利、隐私和命名规则见 [CONTRIBUTING.md](../../CONTRIBUTING.md)。

## 用 Codex 创建自己的宠物

仓库内置项目技能 [`$create-companion-pet`](../../.agents/skills/create-companion-pet/SKILL.md)。在 Codex 中打开仓库并输入：

```text
使用 $create-companion-pet，把这些伴侣动物的照片制作成 Codex 宠物。
```

技能会整理个体特征，并根据目标选择已安装的工作流（Codex 使用 `hatch-pet`，ChatGPT Work 使用 `work-pets:create-pet`），为仓库发布准备已验证的 v2 资源、v1 网页包和贡献元数据。已获认可的宠物可以直接导入，无须重绘。[创建与检查指南](../../.agents/skills/create-companion-pet/references/creation-quality.md)涵盖身份、动作及视线检查，也可使用更简短的 [`prompts/create-your-pet.md`](../../prompts/create-your-pet.md)。

## 仓库结构

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

## 致谢

感谢 [`legeling/awesome-codex-pet`](https://github.com/legeling/awesome-codex-pet)：它的分动作展示、一行安装和社区优先的分发方式启发了本项目。当前实现独立编写。如果以后引入其 MIT 代码，必须按照 [THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md) 保留版权和许可声明。

## 贡献者

感谢所有介绍伙伴、改进宠物、翻译文档或帮助他人安装的贡献者。

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

## 许可证

- 代码、脚本和文档：[MIT](../../LICENSE)
- 捆绑的第三方软件：各依赖条款收录于 [THIRD_PARTY_LICENSES.md](../../THIRD_PARTY_LICENSES.md)。
- Chapssari、Mandu 和 Cho 的宠物资源及预览：[CC BY-NC 4.0](../../ASSETS-LICENSE.md)
- 社区照片和宠物资源：遵循贡献者声明的许可证；仅在贡献者拥有必要权利且同意时，才默认使用 CC BY-NC 4.0。

真实伴侣动物的形象与名字仍与其监护人相关联。参考照片除非被明确收录并标明，否则不会被重新许可。
