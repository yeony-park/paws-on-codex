import React from "react";
import { createRoot } from "react-dom/client";
import { getMessages } from "./locales";
import { Pet } from "./Pet";
import { styles } from "./styles";
import { useToolResult } from "./use-tool-result";

const style = document.createElement("style");
style.textContent = styles;
document.head.append(style);

function App() {
  const result = useToolResult();
  if (!result) {
    const locale = document.documentElement.lang || navigator.language || "en";
    return <main className="empty">{getMessages(locale).empty}</main>;
  }
  return <Pet result={result} />;
}

const root = document.getElementById("root");
if (!root) throw new Error("Paws on Codex root element is missing");
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
