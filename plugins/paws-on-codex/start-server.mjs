import { access } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const pluginRoot = dirname(fileURLToPath(import.meta.url));
const entry = new URL("./dist/server.mjs", import.meta.url);

process.env.PAWS_PET_CATALOG_ROOT ??= pluginRoot;
process.env.PAWS_COMPONENT_FILE ??= resolve(pluginRoot, "assets/component.js");

try {
  await access(entry);
} catch {
  console.error(
    "Paws on Codex is not built. Run the web and server build commands in apps/chatgpt/README.md first.",
  );
  process.exit(1);
}

const { startStdio } = await import(entry.href);
await startStdio();
