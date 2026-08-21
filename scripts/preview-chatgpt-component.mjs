import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const port = Number(process.env.PORT ?? 4173);
const petId = process.env.PET_ID ?? "chapssari";
const petRoot = join(repoRoot, "pets", petId);
const component = await readFile(
  join(repoRoot, "apps", "chatgpt", "web", "dist", "component.js"),
  "utf8",
);
const pet = JSON.parse(await readFile(join(petRoot, "pet.json"), "utf8"));
const distribution = JSON.parse(
  await readFile(join(petRoot, "distribution.json"), "utf8"),
);
const core = await import(join(repoRoot, "packages", "pet-core", "index.js"));

const toolOutput = {
  pet: {
    ...pet,
    contributor: distribution.contributor,
    license: distribution.license,
    attribution: distribution.attribution,
    spritesheetUrl: `/assets/${petId}/spritesheet.webp`,
  },
  selectedAnimation: "idle",
  animations: core.ANIMATIONS,
  cell: core.CELL,
};

const html = `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
  <body>
    <div id="root"></div>
    <script>window.openai = { toolOutput: ${JSON.stringify(toolOutput)} };</script>
    <script type="module">${component}</script>
  </body>
</html>`;

const server = createServer(async (request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.end(html);
    return;
  }
  if (request.url === `/assets/${petId}/spritesheet.webp`) {
    response.writeHead(200, { "content-type": "image/webp" });
    response.end(await readFile(join(petRoot, "spritesheet.webp")));
    return;
  }
  response.writeHead(404).end();
});

server.listen(port, "127.0.0.1", () => {
  console.log(`ChatGPT component preview: http://127.0.0.1:${port}`);
});
