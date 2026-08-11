# Paws on Codex 🐾

[English](../../README.md) · [한국어](../ko/README.md) · [日本語](../ja/README.md) · [简体中文](../zh-CN/README.md) · [Español](../es/README.md) · [Deutsch](../de/README.md) · **हिन्दी** · [Français](../fr/README.md) · [Português](../pt-BR/README.md) · [Русский](../ru/README.md)

असली पालतू साथी की पहचान—रंग, चेहरे का आकार, आँखें, शरीर और पूँछ—बचाए रखने वाले नरम 3D रेट्रो वर्चुअल-पेट शैली के Codex pets। यह प्रोजेक्ट अपने साथियों Chapssari और Mandu के 3D pets बनाने की इच्छा से शुरू हुआ।

<p align="center"><img src="../../previews/comparison.png" alt="Chapssari और Mandu" width="800"></p>

## तुरंत इंस्टॉल करें

```bash
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu
```

डिफ़ॉल्ट स्थान `~/.codex/pets/<pet-name>/` है। इंस्टॉल के बाद Codex को रीफ़्रेश या रीस्टार्ट करें।

## वेब अपलोड के लिए v1

- [Chapssari v1 ZIP](../../web-v1/chapssari-v1-web-upload.zip)
- [Mandu v1 ZIP](../../web-v1/mandu-v1-web-upload.zip)

## समुदाय में योगदान

`community-pets/github-id--pet-name.md` में अधिकतम 180 अक्षरों की एक-पंक्ति पहचान जोड़ें। वैकल्पिक रूप से उसी stem वाली एक फोटो `community-pets/photos-inbox/` में रखें। merge के बाद metadata हटाकर फोटो को resize और WebP में बदला जाएगा तथा [gallery](../../community-pets/GALLERY.md) अपडेट होगी। नियम [CONTRIBUTING.md](../../CONTRIBUTING.md) में हैं।

Codex में `$create-companion-pet` चलाकर तस्वीरों से validated v2 pet और v1 web package बनाएं।

## लाइसेंस

कोड, scripts और documentation: [MIT](../../LICENSE)। चिह्नित pet assets और previews: [CC BY-NC 4.0](../../ASSETS-LICENSE.md)।
