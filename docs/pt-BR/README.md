# Paws on Codex 🐾

> Animais de companhia reais, recriados como pets do Codex em um estilo 3D suave inspirado no Tamagotchi.

[![Codex Pet v2](https://img.shields.io/badge/Codex%20Pet-v2-6f5bd3)](https://github.com/yeony-park/paws-on-codex)
[![Pets](https://img.shields.io/badge/pets-3-f2a6b3)](#meet-the-pets)
[![Code License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](../../LICENSE)
[![Assets: CC BY-NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-lightgrey.svg)](../../ASSETS-LICENSE.md)

[English](../../README.md) · [한국어](../ko/README.md) · [日本語](../ja/README.md) · [简体中文](../zh-CN/README.md) · [Español](../es/README.md) · [Deutsch](../de/README.md) · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · **Português (Brasil)** · [Русский](../ru/README.md)

Esta tradução cobre as mesmas orientações de instalação, pets e contribuição do README em inglês. Informe erros ou omissões por issue ou PR.

<p align="center">
  <img src="../../previews/comparison.png" alt="Chapssari, Mandu, Cho" width="900">
</p>

## Por que este projeto existe

Eu queria que os animais com quem vivo, e não um gato genérico, ficassem ao meu lado enquanto programo. O projeto começou com versões 3D de Chapssari e Mandu, preservando rostos, cores, marcas, proporções e caudas em um estilo de jogo retrô claro e suave.

Agora o repositório também oferece a outros tutores um caminho repetível para apresentar um companheiro, compartilhar uma foto e criar um pet instalável no Codex.

## Os gatos reais por trás dos pixels

| Chapssari | Mandu | Cho |
| --- | --- | --- |
| <img src="../../community-pets/photos/yeony-park--chapssari.webp" alt="Chapssari" width="280"> | <img src="../../community-pets/photos/yeony-park--mandu.webp" alt="Mandu" width="280"> | <img src="../../community-pets/photos/yeony-park--cho.webp" alt="Cho" width="280"> |
| Pelos longos cinza-prateados e brancos, com uma grande cauda felpuda sem listras. | Um filhote British Shorthair de cinco meses, cinza-taupe e creme, curioso sobre tudo. | Nosso amado Cho, que partiu cedo demais para as estrelas dos gatos. Um filhote Bosque da Noruega de apenas três meses. |

## Instalação rápida

### macOS / Linux

```bash
# Chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari

# Mandu
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu

# Cho
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- cho
```

Listar os pets disponíveis:

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

O destino padrão é `~/.codex/pets/<pet-name>/`, ou o caminho equivalente dentro de `CODEX_HOME`. Atualize ou reinicie o Codex após instalar.

<a id="meet-the-pets"></a>

## Conheça os companheiros

| Chapssari | Mandu | Cho |
| --- | --- | --- |
| <img src="../../previews/chapssari.gif" alt="Chapssari — Repouso" width="180"> | <img src="../../previews/mandu.gif" alt="Mandu — Repouso" width="180"> | <img src="../../previews/cho.gif" alt="Cho — Repouso" width="180"> |
| Um Bosque da Noruega de pelagem cinza-prateada abundante, amplo peito branco, olhos verdes e uma enorme cauda felpuda sem listras. | Um filhote British Shorthair curioso e cheio de energia, com pelos cinza-taupe e branco-creme, olhos azul-esverdeados e corpo compacto e arredondado. | Em memória do nosso amado Cho, um filhote Bosque da Noruega cinza e branco que partiu para as estrelas dos gatos com apenas três meses. |

## Galeria de movimentos

| Companheiro | Repouso | Aceno | Trabalhando | Aguardando entrada | Revisão |
| --- | --- | --- | --- | --- | --- |
| **Chapssari** | ![Chapssari — Repouso](../../previews/motions/chapssari/idle.gif) | ![Chapssari — Aceno](../../previews/motions/chapssari/waving.gif) | ![Chapssari — Trabalhando](../../previews/motions/chapssari/running.gif) | ![Chapssari — Aguardando entrada](../../previews/motions/chapssari/waiting.gif) | ![Chapssari — Revisão](../../previews/motions/chapssari/review.gif) |
| **Mandu** | ![Mandu — Repouso](../../previews/motions/mandu/idle.gif) | ![Mandu — Aceno](../../previews/motions/mandu/waving.gif) | ![Mandu — Trabalhando](../../previews/motions/mandu/running.gif) | ![Mandu — Aguardando entrada](../../previews/motions/mandu/waiting.gif) | ![Mandu — Revisão](../../previews/motions/mandu/review.gif) |
| **Cho** | ![Cho — Repouso](../../previews/motions/cho/idle.gif) | ![Cho — Aceno](../../previews/motions/cho/waving.gif) | ![Cho — Trabalhando](../../previews/motions/cho/running.gif) | ![Cho — Aguardando entrada](../../previews/motions/cho/waiting.gif) | ![Cho — Revisão](../../previews/motions/cho/review.gif) |

Cada pacote v2 também inclui movimentos para a esquerda e direita, saltos, reações de falha e 16 direções do olhar.

## Upload web · v1

Use estes ZIPs de compatibilidade quando o uploader web aceitar apenas o atlas v1 de 8×9. Cada arquivo contém somente `pet.json` e `spritesheet.webp`.

- [Chapssari ZIP v1 para upload web](../../web-v1/chapssari-v1-web-upload.zip)
- [Mandu ZIP v1 para upload web](../../web-v1/mandu-v1-web-upload.zip)
- [Cho ZIP v1 para upload web](../../web-v1/cho-v1-web-upload.zip)

## Instalar com ChatGPT Work

Se o ChatGPT Work puder acessar o GitHub e seu ambiente local do Codex, forneça a pasta do GitHub do pet v2 desejado:

- [Chapssari pasta do pet v2](https://github.com/yeony-park/paws-on-codex/tree/main/pets/chapssari)
- [Mandu pasta do pet v2](https://github.com/yeony-park/paws-on-codex/tree/main/pets/mandu)
- [Cho pasta do pet v2](https://github.com/yeony-park/paws-on-codex/tree/main/pets/cho)

Cole este pedido junto com o link da pasta:

```text
Instale este pacote Codex Pet v2 do GitHub:
<PET_FOLDER_URL>

Use pet.json e spritesheet.webp exatamente como fornecidos. Instale no diretório
pets do CODEX_HOME ativo (padrão: ~/.codex/pets/<pet-id>/), preserve os nomes,
valide o pacote e informe se devo atualizar ou reiniciar o Codex.
Não converta para v1 nem gere novamente ou altere as imagens.
```

Este é um fluxo prático de instalação, não um plugin publicado separadamente. Os recursos e as permissões de escrita local do ChatGPT Work podem variar; se ele não puder gravar na pasta de pets, use o instalador de uma linha acima.

## Apresente seu companheiro

Você não precisa de uma folha de sprites pronta. Envie uma apresentação Markdown de uma linha e, opcionalmente, uma foto:

1. Copie [`community-pets/_template.md`](../../community-pets/_template.md) para `community-pets/github-id--pet-name.md`.
2. Escreva uma linha não vazia de até 180 caracteres.
3. Opcionalmente, adicione uma foto JPG, PNG ou WebP em `community-pets/photos-inbox/github-id--pet-name.<ext>`.
4. Abra um pull request.

```markdown
**Bori** · dog/Jindo · [@github-id](https://github.com/github-id) — A four-year-old explorer who reaches the front door before anyone can pick up the walking bag.
```

Após o merge, a automação remove metadados, redimensiona a foto, converte para WebP, exclui o upload original e atualiza a [galeria da comunidade](../../community-pets/GALLERY.md). Veja as regras de direitos, privacidade e nomes em [CONTRIBUTING.md](../../CONTRIBUTING.md).

## Crie seu próprio companheiro com Codex

O repositório inclui a skill de projeto [`$create-companion-pet`](../../.agents/skills/create-companion-pet/SKILL.md). Abra-o no Codex e peça:

```text
Use $create-companion-pet para transformar estas fotos do meu animal de companhia em um pet do Codex.
```

A skill reúne os traços do animal, seleciona o fluxo instalado para o destino (`hatch-pet` para Codex ou `work-pets:create-pet` para ChatGPT Work) e prepara assets v2 validados, um pacote web v1 e metadados de contribuição. Pets já aprovados podem ser importados sem gerar novamente a arte. O [guia de criação e revisão](../../.agents/skills/create-companion-pet/references/creation-quality.md) cobre identidade, movimentos e direções do olhar. Há também um pedido resumido em [`prompts/create-your-pet.md`](../../prompts/create-your-pet.md).

## Estrutura do repositório

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

## Agradecimentos

Agradecemos a [`legeling/awesome-codex-pet`](https://github.com/legeling/awesome-codex-pet): sua galeria por movimento, instalação com um comando e distribuição comunitária inspiraram este projeto. A implementação atual foi escrita de forma independente. Se código MIT desse projeto for incorporado, seus avisos de direitos autorais e permissão deverão ser preservados conforme [THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md).

## Contribuidores

Obrigado a todos que apresentam seus companheiros, melhoram pets, traduzem a documentação ou ajudam na instalação.

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

## Licença

- Código, scripts e documentação: [MIT](../../LICENSE)
- Software de terceiros incluído: os termos de cada dependência constam em [THIRD_PARTY_LICENSES.md](../../THIRD_PARTY_LICENSES.md).
- Assets e prévias de Chapssari, Mandu e Cho: [CC BY-NC 4.0](../../ASSETS-LICENSE.md)
- Fotos e assets comunitários: a licença declarada pelo contribuidor; CC BY-NC 4.0 só é o padrão quando ele possui os direitos necessários e aceita a licença.

Nomes e imagens dos animais reais continuam associados a seus tutores. Fotos de referência não recebem nova licença, a menos que sejam explicitamente incluídas e identificadas.
