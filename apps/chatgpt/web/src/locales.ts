type Messages = {
  companion: string;
  motions: string;
  by: string;
  empty: string;
};

const messages: Record<string, Messages> = {
  en: { companion: "Companion", motions: "Motions", by: "by", empty: "Ask ChatGPT to show a companion." },
  ko: { companion: "반려동물", motions: "모션", by: "제작", empty: "ChatGPT에게 반려동물을 보여 달라고 해보세요." },
  ja: { companion: "コンパニオン", motions: "モーション", by: "制作", empty: "ChatGPTにコンパニオンを表示してもらいましょう。" },
  "zh-CN": { companion: "伙伴", motions: "动作", by: "作者", empty: "请让 ChatGPT 显示一个宠物伙伴。" },
  es: { companion: "Compañero", motions: "Movimientos", by: "por", empty: "Pide a ChatGPT que muestre un compañero." },
  de: { companion: "Begleiter", motions: "Bewegungen", by: "von", empty: "Bitte ChatGPT, einen Begleiter zu zeigen." },
  hi: { companion: "साथी", motions: "गतियाँ", by: "निर्माता", empty: "ChatGPT से किसी साथी को दिखाने के लिए कहें।" },
  fr: { companion: "Compagnon", motions: "Animations", by: "par", empty: "Demandez à ChatGPT d’afficher un compagnon." },
  "pt-BR": { companion: "Companheiro", motions: "Movimentos", by: "por", empty: "Peça ao ChatGPT para mostrar um companheiro." },
  ru: { companion: "Компаньон", motions: "Движения", by: "автор", empty: "Попросите ChatGPT показать компаньона." },
};

export function getMessages(locale: string): Messages {
  return messages[locale] ?? messages[locale.split("-")[0]] ?? messages.en;
}
