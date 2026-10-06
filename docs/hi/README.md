# Paws on Codex 🐾

> असली पालतू साथियों को नरम 3D Tamagotchi-शैली के Codex पेट के रूप में पेश करना।

[![Codex Pet v2](https://img.shields.io/badge/Codex%20Pet-v2-6f5bd3)](https://github.com/yeony-park/paws-on-codex)
[![Pets](https://img.shields.io/badge/pets-3-f2a6b3)](#meet-the-pets)
[![Code License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](../../LICENSE)
[![Assets: CC BY-NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-lightgrey.svg)](../../ASSETS-LICENSE.md)

[English](../../README.md) · [한국어](../ko/README.md) · [日本語](../ja/README.md) · [简体中文](../zh-CN/README.md) · [Español](../es/README.md) · [Deutsch](../de/README.md) · **हिन्दी** · [Français](../fr/README.md) · [Português (Brasil)](../pt-BR/README.md) · [Русский](../ru/README.md)

इस हिंदी अनुवाद में अंग्रेज़ी README वाली इंस्टॉलेशन, पेट और योगदान की जानकारी शामिल है। अनुवाद की गलती या छूटी जानकारी के लिए issue या PR भेजें।

<p align="center">
  <img src="../../previews/comparison.png" alt="Chapssari, Mandu, Cho" width="900">
</p>

## यह प्रोजेक्ट क्यों बनाया

मैं चाहता था कि कोड लिखते समय कोई आम बिल्ली का पात्र नहीं, बल्कि मेरे साथ रहने वाले जानवर मेरे पास हों। प्रोजेक्ट की शुरुआत Chapssari और Mandu के पहचाने जा सकने वाले 3D रूपों से हुई। उनके चेहरे, फर के रंग, निशान, अनुपात और पूँछ को बनाए रखते हुए उन्हें चमकदार, नरम रेट्रो गेम शैली दी गई।

अब यह रिपॉज़िटरी दूसरे अभिभावकों को भी अपने साथी का परिचय देने, एक फोटो साझा करने और इंस्टॉल किए जा सकने वाले Codex पेट बनाने का दोहराने योग्य तरीका देती है।

## पिक्सेल के पीछे की असली बिल्लियाँ

| Chapssari | Mandu | Cho |
| --- | --- | --- |
| <img src="../../community-pets/photos/yeony-park--chapssari.webp" alt="Chapssari" width="280"> | <img src="../../community-pets/photos/yeony-park--mandu.webp" alt="Mandu" width="280"> | <img src="../../community-pets/photos/yeony-park--cho.webp" alt="Cho" width="280"> |
| लंबा चाँदी-धूसर और सफेद फर, और बिना धारियों की बड़ी, घनी पूँछ। | पाँच महीने का जिज्ञासु British Shorthair बिलौटा, धूसर-भूरे और क्रीम रंग के फर के साथ। | हमारा प्यारा Cho, जो बहुत कम उम्र में बिल्लियों के सितारों के पास चला गया। सिर्फ तीन महीने का Norwegian Forest बिलौटा। |

## त्वरित इंस्टॉलेशन

### macOS / Linux

```bash
# Chapssari
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- chapssari

# Mandu
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- mandu

# Cho
curl -fsSL https://raw.githubusercontent.com/yeony-park/paws-on-codex/main/install.sh | bash -s -- cho
```

उपलब्ध पेट की सूची:

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

डिफ़ॉल्ट स्थान `~/.codex/pets/<pet-name>/` है, या `CODEX_HOME` के अंतर्गत उसका समकक्ष पथ। इंस्टॉल करने के बाद Codex को रीफ़्रेश या रीस्टार्ट करें।

<a id="meet-the-pets"></a>

## साथियों से मिलें

| Chapssari | Mandu | Cho |
| --- | --- | --- |
| <img src="../../previews/chapssari.gif" alt="Chapssari — आराम" width="180"> | <img src="../../previews/mandu.gif" alt="Mandu — आराम" width="180"> | <img src="../../previews/cho.gif" alt="Cho — आराम" width="180"> |
| घने चाँदी-धूसर फर, चौड़े सफेद सीने, हरी आँखों और बिना धारियों की बड़ी, घनी पूँछ वाला Norwegian Forest साथी। | जिज्ञासु और चंचल British Shorthair बिलौटा, धूसर-भूरे और क्रीम-सफेद फर, नीली-हरी आँखों और छोटे गोल शरीर के साथ। | हमारे प्यारे Cho की याद में: धूसर-सफेद Norwegian Forest बिलौटा, जो केवल तीन महीने की उम्र में बिल्लियों के सितारों के पास चला गया। |

## एनिमेशन गैलरी

| साथी | आराम | अभिवादन | काम करते हुए | इनपुट की प्रतीक्षा | समीक्षा |
| --- | --- | --- | --- | --- | --- |
| **Chapssari** | ![Chapssari — आराम](../../previews/motions/chapssari/idle.gif) | ![Chapssari — अभिवादन](../../previews/motions/chapssari/waving.gif) | ![Chapssari — काम करते हुए](../../previews/motions/chapssari/running.gif) | ![Chapssari — इनपुट की प्रतीक्षा](../../previews/motions/chapssari/waiting.gif) | ![Chapssari — समीक्षा](../../previews/motions/chapssari/review.gif) |
| **Mandu** | ![Mandu — आराम](../../previews/motions/mandu/idle.gif) | ![Mandu — अभिवादन](../../previews/motions/mandu/waving.gif) | ![Mandu — काम करते हुए](../../previews/motions/mandu/running.gif) | ![Mandu — इनपुट की प्रतीक्षा](../../previews/motions/mandu/waiting.gif) | ![Mandu — समीक्षा](../../previews/motions/mandu/review.gif) |
| **Cho** | ![Cho — आराम](../../previews/motions/cho/idle.gif) | ![Cho — अभिवादन](../../previews/motions/cho/waving.gif) | ![Cho — काम करते हुए](../../previews/motions/cho/running.gif) | ![Cho — इनपुट की प्रतीक्षा](../../previews/motions/cho/waiting.gif) | ![Cho — समीक्षा](../../previews/motions/cho/review.gif) |

हर v2 पैकेज में बाएँ/दाएँ चलना, कूदना, विफलता की प्रतिक्रिया और देखने की 16 दिशाएँ भी हैं।

## वेब अपलोड · v1

अगर वेब अपलोडर केवल 8×9 v1 एटलस स्वीकार करता है, तो ये संगत ZIP इस्तेमाल करें। हर ZIP में सिर्फ `pet.json` और `spritesheet.webp` हैं।

- [Chapssari v1 वेब अपलोड ZIP](../../web-v1/chapssari-v1-web-upload.zip)
- [Mandu v1 वेब अपलोड ZIP](../../web-v1/mandu-v1-web-upload.zip)
- [Cho v1 वेब अपलोड ZIP](../../web-v1/cho-v1-web-upload.zip)

## ChatGPT Work से इंस्टॉल करें

अगर ChatGPT Work को GitHub और आपके स्थानीय Codex वातावरण का ऐक्सेस है, तो उसे अपने चुने हुए v2 पेट का GitHub फ़ोल्डर दें:

- [Chapssari v2 पेट फ़ोल्डर](https://github.com/yeony-park/paws-on-codex/tree/main/pets/chapssari)
- [Mandu v2 पेट फ़ोल्डर](https://github.com/yeony-park/paws-on-codex/tree/main/pets/mandu)
- [Cho v2 पेट फ़ोल्डर](https://github.com/yeony-park/paws-on-codex/tree/main/pets/cho)

फ़ोल्डर के लिंक के साथ यह प्रॉम्प्ट पेस्ट करें:

```text
GitHub से यह Codex Pet v2 पैकेज इंस्टॉल करो:
<PET_FOLDER_URL>

मौजूदा pet.json और spritesheet.webp को बिल्कुल वैसे ही इस्तेमाल करो। सक्रिय
CODEX_HOME के pets फ़ोल्डर (डिफ़ॉल्ट: ~/.codex/pets/<pet-id>/) में वही फ़ाइल नाम
रखते हुए इंस्टॉल करो, पैकेज जाँचो और बताओ कि Codex को रीफ़्रेश या रीस्टार्ट
करना है या नहीं। v1 में न बदलो और चित्रों को दोबारा बनाओ या संशोधित मत करो।
```

यह सुविधाजनक इंस्टॉलेशन प्रक्रिया है, अलग से प्रकाशित प्लगइन नहीं। ChatGPT Work की क्षमताएँ और स्थानीय लिखने की अनुमति वातावरण के अनुसार बदल सकती हैं। अगर वह Codex के पेट फ़ोल्डर में नहीं लिख सकता, तो ऊपर दिया एक-कमांड इंस्टॉलर इस्तेमाल करें।

## अपने साथी का परिचय दें

तैयार स्प्राइट शीट की ज़रूरत नहीं है। Markdown में एक पंक्ति का परिचय और चाहें तो एक फोटो भेजें:

1. [`community-pets/_template.md`](../../community-pets/_template.md) को `community-pets/github-id--pet-name.md` में कॉपी करें।
2. अधिकतम 180 अक्षरों की एक गैर-खाली पंक्ति लिखें।
3. चाहें तो एक JPG, PNG या WebP फोटो `community-pets/photos-inbox/github-id--pet-name.<ext>` में जोड़ें।
4. एक pull request खोलें।

```markdown
**Bori** · dog/Jindo · [@github-id](https://github.com/github-id) — A four-year-old explorer who reaches the front door before anyone can pick up the walking bag.
```

मर्ज होने पर ऑटोमेशन मेटाडेटा हटाता है, फोटो का आकार घटाता है, उसे WebP में बदलता है, मूल अपलोड मिटाता है और [कम्युनिटी गैलरी](../../community-pets/GALLERY.md) अपडेट करता है। अधिकार, गोपनीयता और फ़ाइल नाम के नियम [CONTRIBUTING.md](../../CONTRIBUTING.md) में हैं।

## Codex से अपना पेट बनाएँ

इस रिपॉज़िटरी में प्रोजेक्ट स्किल [`$create-companion-pet`](../../.agents/skills/create-companion-pet/SKILL.md) है। इसे Codex में खोलें और कहें:

```text
$create-companion-pet का इस्तेमाल करके मेरे साथी की इन तस्वीरों से Codex पेट बनाओ।
```

स्किल जानवर की विशिष्ट पहचान जुटाती है और लक्ष्य के लिए इंस्टॉल किया हुआ वर्कफ़्लो चुनती है (`hatch-pet` Codex के लिए, `work-pets:create-pet` ChatGPT Work के लिए)। फिर यह जाँचे हुए v2 एसेट, v1 वेब पैकेज और योगदान की जानकारी तैयार करती है। पहले से स्वीकृत पेट की कला को दोबारा बनाए बिना आयात किया जा सकता है। [निर्माण और समीक्षा मार्गदर्शन](../../.agents/skills/create-companion-pet/references/creation-quality.md) में पहचान, गति और नज़र की जाँच है। छोटा प्रॉम्प्ट [`prompts/create-your-pet.md`](../../prompts/create-your-pet.md) में भी है।

## रिपॉज़िटरी की संरचना

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

## आभार

[`legeling/awesome-codex-pet`](https://github.com/legeling/awesome-codex-pet) की हर मोशन की गैलरी, एक-कमांड पहुँच और कम्युनिटी-केंद्रित वितरण ने इस प्रोजेक्ट को प्रेरित किया। वर्तमान कार्यान्वयन स्वतंत्र रूप से लिखा गया है। भविष्य में उसका MIT कोड शामिल करने पर [THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md) के अनुसार कॉपीराइट और अनुमति नोटिस रखने होंगे।

## योगदानकर्ता

अपने साथी का परिचय देने, पेट बेहतर बनाने, दस्तावेज़ों का अनुवाद करने या इंस्टॉलेशन में मदद करने वाले सभी लोगों का धन्यवाद।

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

## लाइसेंस

- कोड, स्क्रिप्ट और दस्तावेज़: [MIT](../../LICENSE)
- शामिल तृतीय-पक्ष सॉफ़्टवेयर: हर निर्भरता की शर्तें [THIRD_PARTY_LICENSES.md](../../THIRD_PARTY_LICENSES.md) में हैं।
- Chapssari, Mandu और Cho के पेट एसेट और प्रीव्यू: [CC BY-NC 4.0](../../ASSETS-LICENSE.md)
- कम्युनिटी फोटो और पेट एसेट: योगदानकर्ता का घोषित लाइसेंस; CC BY-NC 4.0 तभी डिफ़ॉल्ट है जब आवश्यक अधिकार उसके पास हों और वह सहमत हो।

असली जानवरों के नाम और रूप उनके अभिभावकों से जुड़े रहते हैं। संदर्भ फोटो का लाइसेंस तब तक नहीं बदलता जब तक उन्हें स्पष्ट रूप से शामिल और चिह्नित न किया गया हो।
