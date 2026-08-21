import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginRoot = join(repoRoot, "plugins", "paws-on-codex");
const manifest = JSON.parse(
  await readFile(join(pluginRoot, ".codex-plugin", "plugin.json"), "utf8"),
);

const fail = (message) => {
  throw new Error(message);
};
const requireText = (value, name) => {
  if (typeof value !== "string" || value.trim() === "") fail(name + " is required");
};
const requireFile = async (relativePath, name) => {
  requireText(relativePath, name);
  const absolute = resolve(pluginRoot, relativePath);
  if (!absolute.startsWith(pluginRoot + "/")) fail(name + " escapes the plugin archive");
  await access(absolute);
};

requireText(manifest.name, "name");
requireText(manifest.version, "version");
if (!/^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(manifest.version)) {
  fail("version must be semantic versioning");
}
requireText(manifest.description, "description");
requireText(manifest.author?.name, "author.name");

const ui = manifest.interface;
for (const key of [
  "displayName",
  "shortDescription",
  "longDescription",
  "developerName",
  "category",
]) {
  requireText(ui?.[key], "interface." + key);
}
for (const key of ["websiteURL", "privacyPolicyURL", "termsOfServiceURL"]) {
  requireText(ui?.[key], "interface." + key);
  if (!ui[key].startsWith("https://")) fail("interface." + key + " must use HTTPS");
}
if (!Array.isArray(ui.defaultPrompt) || ui.defaultPrompt.length < 1 || ui.defaultPrompt.length > 3) {
  fail("interface.defaultPrompt must contain one to three prompts");
}
if (ui.defaultPrompt.some((prompt) => typeof prompt !== "string" || prompt.length > 128)) {
  fail("starter prompts must be strings of at most 128 characters");
}

await requireFile(ui.composerIcon, "interface.composerIcon");
await requireFile(ui.logo, "interface.logo");
for (const [index, screenshot] of (ui.screenshots ?? []).entries()) {
  if (!screenshot.endsWith(".png")) fail("screenshot " + index + " must be PNG");
  await requireFile(screenshot, "interface.screenshots[" + index + "]");
}
const sourceScreenshot = await readFile(
  join(repoRoot, "apps", "chatgpt", "assets", "screenshot.png"),
);
const packagedScreenshot = await readFile(
  join(pluginRoot, "assets", "screenshot.png"),
);
if (!sourceScreenshot.equals(packagedScreenshot)) {
  fail("packaged listing screenshot is stale");
}
await requireFile(manifest.mcpServers, "mcpServers");
const mcpConfig = JSON.parse(
  await readFile(resolve(pluginRoot, manifest.mcpServers), "utf8"),
);
const mcpServers = mcpConfig.mcp_servers ?? mcpConfig;
if (
  typeof mcpServers !== "object" ||
  mcpServers === null ||
  Array.isArray(mcpServers) ||
  typeof mcpServers["paws-on-codex"]?.command !== "string"
) {
  fail(".mcp.json must contain a direct server map or wrapped mcp_servers object");
}
if ("mcpServers" in mcpConfig) {
  fail(".mcp.json uses unsupported legacy mcpServers wrapper");
}
await requireFile("./start-server.mjs", "start-server");
await requireFile("./dist/server.mjs", "bundled server");
await requireFile("./assets/component.js", "bundled component");
const componentSource = await readFile(join(pluginRoot, "assets", "component.js"), "utf8");
for (const method of [
  "ui/initialize",
  "ui/notifications/initialized",
  "ui/notifications/tool-result",
]) {
  if (!componentSource.includes(method)) {
    fail(`bundled component is missing MCP Apps bridge method ${method}`);
  }
}
await requireFile("./LICENSE", "code license");
await requireFile("./ASSETS-LICENSE.md", "pet asset license");
await requireFile("./NOTICE.md", "license notice");
await requireFile("./THIRD_PARTY_LICENSES.md", "third-party licenses");

const generatedThirdPartyLicenses = await readFile(
  join(repoRoot, "THIRD_PARTY_LICENSES.md"),
  "utf8",
);
const packagedThirdPartyLicenses = await readFile(
  join(pluginRoot, "THIRD_PARTY_LICENSES.md"),
  "utf8",
);
if (generatedThirdPartyLicenses !== packagedThirdPartyLicenses) {
  fail("packaged third-party licenses are stale");
}
for (const dependency of [
  "@modelcontextprotocol/ext-apps@",
  "@modelcontextprotocol/sdk@",
  "express@",
  "react@",
  "react-dom@",
  "zod@",
]) {
  if (!packagedThirdPartyLicenses.includes(`## ${dependency}`)) {
    fail(`third-party license entry is missing for ${dependency}`);
  }
}

const packagedPets = await readdir(join(pluginRoot, "pets"), { withFileTypes: true });
if (!packagedPets.some((entry) => entry.isDirectory())) fail("no opted-in pets were packaged");
const sourcePetsRoot = join(repoRoot, "pets");
const expectedPetIds = [];
for (const entry of await readdir(sourcePetsRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const distributionPath = join(sourcePetsRoot, entry.name, "distribution.json");
  try {
    const distribution = JSON.parse(await readFile(distributionPath, "utf8"));
    if (distribution?.surfaces?.chatgpt === true) expectedPetIds.push(entry.name);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
}
const packagedPetIds = packagedPets
  .filter((item) => item.isDirectory())
  .map((entry) => entry.name)
  .sort();
if (JSON.stringify(packagedPetIds) !== JSON.stringify(expectedPetIds.sort())) {
  fail("packaged pets do not exactly match the ChatGPT-opted-in source pets");
}
for (const entry of packagedPets.filter((item) => item.isDirectory())) {
  const packagedDirectory = join(pluginRoot, "pets", entry.name);
  const sourceDirectory = join(sourcePetsRoot, entry.name);
  for (const filename of ["pet.json", "distribution.json", "spritesheet.webp"]) {
    const packaged = await readFile(join(packagedDirectory, filename));
    const source = await readFile(join(sourceDirectory, filename));
    if (!packaged.equals(source)) fail(`${entry.name}/${filename} differs from its source`);
  }
  const pet = JSON.parse(await readFile(join(packagedDirectory, "pet.json"), "utf8"));
  const distribution = JSON.parse(
    await readFile(join(packagedDirectory, "distribution.json"), "utf8"),
  );
  if (pet.id !== entry.name) fail(`${entry.name}: pet id must match its directory`);
  if (pet.spriteVersionNumber !== 2 || pet.spritesheetPath !== "spritesheet.webp") {
    fail(`${entry.name}: packaged pet must use the v2 spritesheet contract`);
  }
  if (
    distribution?.surfaces?.chatgpt !== true ||
    typeof distribution?.contributor?.github !== "string" ||
    typeof distribution?.contributor?.displayName !== "string" ||
    typeof distribution?.license !== "string" ||
    typeof distribution?.attribution !== "string"
  ) {
    fail(`${entry.name}: invalid ChatGPT distribution manifest`);
  }
}

const cases = JSON.parse(
  await readFile(join(repoRoot, "docs", "plugin", "review-test-cases.json"), "utf8"),
);
if (!Array.isArray(cases.positive) || cases.positive.length < 5) {
  fail("at least five positive reviewer cases are required");
}
if (!Array.isArray(cases.negative) || cases.negative.length < 3) {
  fail("at least three negative reviewer cases are required");
}
for (const [index, reviewCase] of cases.positive.entries()) {
  requireText(reviewCase.prompt, `positive[${index}].prompt`);
  requireText(reviewCase.expectedBehavior, `positive[${index}].expectedBehavior`);
  if (
    typeof reviewCase.expectedResultShape !== "object" ||
    reviewCase.expectedResultShape === null ||
    Object.keys(reviewCase.expectedResultShape).length === 0
  ) {
    fail(`positive[${index}].expectedResultShape is required`);
  }
  requireText(reviewCase.fixtureData, `positive[${index}].fixtureData`);
}
for (const [index, reviewCase] of cases.negative.entries()) {
  requireText(reviewCase.prompt, `negative[${index}].prompt`);
  requireText(reviewCase.expectedFallback, `negative[${index}].expectedFallback`);
  requireText(reviewCase.whyNot, `negative[${index}].whyNot`);
}

for (const filename of ["PRIVACY.md", "TERMS.md", "SUPPORT.md"]) {
  await access(join(repoRoot, filename));
}

console.log("Plugin release validation passed");
