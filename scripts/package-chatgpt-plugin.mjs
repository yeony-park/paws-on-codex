import { cp, mkdir, rm } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { generateThirdPartyLicenses } from "./generate-third-party-licenses.mjs";
import { copyChatGptPets } from "./copy-chatgpt-pets.mjs";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginRoot = join(repoRoot, "plugins", "paws-on-codex");
const assetsRoot = join(pluginRoot, "assets");
const packagedPetsRoot = join(pluginRoot, "pets");
const requireFromWeb = createRequire(
  pathToFileURL(join(repoRoot, "apps", "chatgpt", "web", "package.json")),
);
const { build } = requireFromWeb("esbuild");

await generateThirdPartyLicenses();

await rm(join(pluginRoot, "dist"), { recursive: true, force: true });
await mkdir(join(pluginRoot, "dist"), { recursive: true });
await mkdir(assetsRoot, { recursive: true });

await build({
  entryPoints: [join(repoRoot, "apps", "chatgpt", "server", "src", "index.ts")],
  outfile: join(pluginRoot, "dist", "server.mjs"),
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node20",
  minify: true,
  sourcemap: false,
  logLevel: "info",
  banner: {
    js: 'import { createRequire as __pawsCreateRequire } from "node:module"; const require = __pawsCreateRequire(import.meta.url);',
  },
});

await cp(
  join(repoRoot, "apps", "chatgpt", "web", "dist", "component.js"),
  join(assetsRoot, "component.js"),
);
await cp(
  join(repoRoot, "apps", "chatgpt", "assets", "screenshot.png"),
  join(assetsRoot, "screenshot.png"),
);
await cp(join(repoRoot, "LICENSE"), join(pluginRoot, "LICENSE"));
await cp(join(repoRoot, "ASSETS-LICENSE.md"), join(pluginRoot, "ASSETS-LICENSE.md"));
await cp(
  join(repoRoot, "THIRD_PARTY_LICENSES.md"),
  join(pluginRoot, "THIRD_PARTY_LICENSES.md"),
);

const sourcePetsRoot = join(repoRoot, "pets");
await copyChatGptPets(sourcePetsRoot, packagedPetsRoot);

console.log(`Packaged ChatGPT plugin at ${pluginRoot}`);
