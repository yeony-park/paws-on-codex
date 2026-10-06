# Paws on Codex 🐾

> Animales de compañía reales, convertidos en mascotas de Codex con un suave estilo 3D tipo Tamagotchi.

[![Codex Pet v2](https://img.shields.io/badge/Codex%20Pet-v2-6f5bd3)](https://github.com/yeony-park/paws-on-codex)
[![Pets](https://img.shields.io/badge/pets-3-f2a6b3)](#meet-the-pets)
[![Code License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](../../LICENSE)
[![Assets: CC BY-NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-lightgrey.svg)](../../ASSETS-LICENSE.md)

[English](../../README.md) · [한국어](../ko/README.md) · [日本語](../ja/README.md) · [简体中文](../zh-CN/README.md) · **Español** · [Deutsch](../de/README.md) · [हिन्दी](../hi/README.md) · [Français](../fr/README.md) · [Português (Brasil)](../pt-BR/README.md) · [Русский](../ru/README.md)

Esta traducción cubre las mismas instrucciones de instalación, mascotas y contribuciones que el README en inglés. Comunica errores u omisiones mediante un issue o PR.

<p align="center">
  <img src="../../previews/comparison.png" alt="Chapssari, Mandu, Cho" width="900">
</p>

## Por qué existe este proyecto

Quería que los animales con los que vivo, y no un gato genérico, me acompañaran mientras programo. El proyecto comenzó con versiones 3D de Chapssari y Mandu, conservando sus caras, colores, marcas, proporciones y colas en un estilo de juego retro luminoso y suave.

Ahora también ofrece a otros cuidadores una forma reproducible de presentar a su compañero, compartir una foto y crear una mascota instalable para Codex.

## Los gatos reales detrás de los píxeles

| Chapssari | Mandu | Cho |
| --- | --- | --- |
| <img src="../../community-pets/photos/yeony-park--chapssari.webp" alt="Chapssari" width="280"> | <img src="../../community-pets/photos/yeony-park--mandu.webp" alt="Mandu" width="280"> | <img src="../../community-pets/photos/yeony-park--cho.webp" alt="Cho" width="280"> |
| Pelo largo gris plateado y blanco, con una gran cola plumosa sin rayas. | Un curioso gatito British Shorthair de cinco meses, de tonos gris topo y crema. | Nuestro querido Cho, que se fue a las estrellas de los gatos demasiado pronto. Un gatito Bosque de Noruega de solo tres meses. |

## Instalación rápida

### macOS / Linux

```bash
# Chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari

# Mandu
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu

# Cho
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- cho
```

Lista de mascotas disponibles:

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

La ubicación predeterminada es `~/.codex/pets/<pet-name>/`, o la ruta equivalente dentro de `CODEX_HOME`. Actualiza o reinicia Codex después de instalar.

<a id="meet-the-pets"></a>

## Conoce a los compañeros

| Chapssari | Mandu | Cho |
| --- | --- | --- |
| <img src="../../previews/chapssari.gif" alt="Chapssari — Reposo" width="180"> | <img src="../../previews/mandu.gif" alt="Mandu — Reposo" width="180"> | <img src="../../previews/cho.gif" alt="Cho — Reposo" width="180"> |
| Un Bosque de Noruega con abundante pelo gris plateado, amplio pecho blanco, ojos verdes y una enorme cola plumosa sin rayas. | Un gatito British Shorthair curioso y enérgico, de pelo gris topo y blanco cremoso, ojos azul verdoso y cuerpo compacto y redondeado. | En memoria de nuestro querido Cho, un gatito Bosque de Noruega gris y blanco que se fue a las estrellas de los gatos con solo tres meses. |

## Galería de movimientos

| Compañero | Reposo | Saludo | Trabajando | Esperando entrada | Revisión |
| --- | --- | --- | --- | --- | --- |
| **Chapssari** | ![Chapssari — Reposo](../../previews/motions/chapssari/idle.gif) | ![Chapssari — Saludo](../../previews/motions/chapssari/waving.gif) | ![Chapssari — Trabajando](../../previews/motions/chapssari/running.gif) | ![Chapssari — Esperando entrada](../../previews/motions/chapssari/waiting.gif) | ![Chapssari — Revisión](../../previews/motions/chapssari/review.gif) |
| **Mandu** | ![Mandu — Reposo](../../previews/motions/mandu/idle.gif) | ![Mandu — Saludo](../../previews/motions/mandu/waving.gif) | ![Mandu — Trabajando](../../previews/motions/mandu/running.gif) | ![Mandu — Esperando entrada](../../previews/motions/mandu/waiting.gif) | ![Mandu — Revisión](../../previews/motions/mandu/review.gif) |
| **Cho** | ![Cho — Reposo](../../previews/motions/cho/idle.gif) | ![Cho — Saludo](../../previews/motions/cho/waving.gif) | ![Cho — Trabajando](../../previews/motions/cho/running.gif) | ![Cho — Esperando entrada](../../previews/motions/cho/waiting.gif) | ![Cho — Revisión](../../previews/motions/cho/review.gif) |

Cada paquete v2 también incluye movimiento a izquierda y derecha, saltos, reacciones de fallo y 16 direcciones de mirada.

## Carga web · v1

Usa estos ZIP de compatibilidad cuando el cargador web solo acepte el atlas v1 de 8×9. Cada archivo contiene únicamente `pet.json` y `spritesheet.webp`.

- [Chapssari ZIP v1 para carga web](../../web-v1/chapssari-v1-web-upload.zip)
- [Mandu ZIP v1 para carga web](../../web-v1/mandu-v1-web-upload.zip)
- [Cho ZIP v1 para carga web](../../web-v1/cho-v1-web-upload.zip)

## Instalar con ChatGPT Work

Si ChatGPT Work tiene acceso a GitHub y a tu entorno local de Codex, dale la carpeta de GitHub de la mascota v2 que quieras:

- [Chapssari carpeta de la mascota v2](https://github.com/yeony-park/paws-on-codex/tree/main/pets/chapssari)
- [Mandu carpeta de la mascota v2](https://github.com/yeony-park/paws-on-codex/tree/main/pets/mandu)
- [Cho carpeta de la mascota v2](https://github.com/yeony-park/paws-on-codex/tree/main/pets/cho)

Pega este mensaje junto con el enlace de la carpeta:

```text
Instala este paquete Codex Pet v2 desde GitHub:
<PET_FOLDER_URL>

Usa pet.json y spritesheet.webp exactamente como se proporcionan. Instálalos en
el directorio pets del CODEX_HOME activo (predeterminado: ~/.codex/pets/<pet-id>/),
conserva los nombres, valida el paquete e indica si debo actualizar o reiniciar
Codex. No conviertas a v1 ni regeneres o modifiques las imágenes.
```

Es un flujo práctico de instalación, no un plugin publicado por separado. Las capacidades y los permisos locales de ChatGPT Work varían según el entorno; si no puede escribir en el directorio de mascotas, usa el instalador de una línea de arriba.

## Presenta a tu compañero

No necesitas una hoja de sprites terminada. Envía una presentación Markdown de una línea y, opcionalmente, una foto:

1. Copia [`community-pets/_template.md`](../../community-pets/_template.md) a `community-pets/github-id--pet-name.md`.
2. Escribe una línea no vacía de un máximo de 180 caracteres.
3. Opcionalmente, añade una foto JPG, PNG o WebP en `community-pets/photos-inbox/github-id--pet-name.<ext>`.
4. Abre un pull request.

```markdown
**Bori** · dog/Jindo · [@github-id](https://github.com/github-id) — A four-year-old explorer who reaches the front door before anyone can pick up the walking bag.
```

Tras fusionarlo, la automatización elimina metadatos, reduce la foto, la convierte a WebP, borra el archivo original y actualiza la [galería comunitaria](../../community-pets/GALLERY.md). Consulta las reglas de derechos, privacidad y nombres en [CONTRIBUTING.md](../../CONTRIBUTING.md).

## Crea tu propio compañero con Codex

El repositorio incluye la habilidad de proyecto [`$create-companion-pet`](../../.agents/skills/create-companion-pet/SKILL.md). Ábrelo en Codex y pide:

```text
Usa $create-companion-pet para convertir estas fotos de mi animal de compañía en una mascota de Codex.
```

La habilidad recopila los rasgos del animal, selecciona el flujo instalado según el destino (`hatch-pet` para Codex o `work-pets:create-pet` para ChatGPT Work) y prepara recursos v2 validados, un paquete web v1 y metadatos para publicar en el repositorio. Se pueden importar mascotas aprobadas sin regenerar sus imágenes. La [guía de creación y revisión](../../.agents/skills/create-companion-pet/references/creation-quality.md) cubre identidad, movimientos y miradas. También hay un mensaje breve en [`prompts/create-your-pet.md`](../../prompts/create-your-pet.md).

## Estructura del repositorio

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

## Agradecimientos

Gracias a [`legeling/awesome-codex-pet`](https://github.com/legeling/awesome-codex-pet): su galería por movimientos, acceso con un comando y distribución comunitaria inspiraron este proyecto. La implementación actual se escribió de forma independiente. Si se incorpora código MIT de ese proyecto, deberán conservarse los avisos de copyright y permiso según [THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md).

## Colaboradores

Gracias a quienes presentan a sus compañeros, mejoran mascotas, traducen documentación o ayudan con la instalación.

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

## Licencia

- Código, scripts y documentación: [MIT](../../LICENSE)
- Software de terceros incluido: los términos de cada dependencia figuran en [THIRD_PARTY_LICENSES.md](../../THIRD_PARTY_LICENSES.md).
- Recursos y vistas previas de Chapssari, Mandu y Cho: [CC BY-NC 4.0](../../ASSETS-LICENSE.md)
- Fotos y recursos comunitarios: la licencia declarada por su autor; CC BY-NC 4.0 solo es la opción predeterminada si posee los derechos necesarios y la acepta.

Los nombres y las imágenes de animales reales siguen vinculados a sus cuidadores. Las fotos de referencia no se relicencian salvo que se incluyan y se indiquen expresamente.
