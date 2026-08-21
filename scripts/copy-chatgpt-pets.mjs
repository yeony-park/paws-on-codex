import { cp, mkdir, readFile, readdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

export async function copyChatGptPets(sourceRoot, destinationRoot) {
  await rm(destinationRoot, { recursive: true, force: true });
  await mkdir(destinationRoot, { recursive: true });

  for (const entry of await readdir(sourceRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const source = resolve(sourceRoot, entry.name);
    let distribution;
    try {
      distribution = JSON.parse(await readFile(resolve(source, "distribution.json"), "utf8"));
    } catch (error) {
      if (error?.code === "ENOENT") continue;
      throw error;
    }
    if (distribution?.surfaces?.chatgpt !== true) continue;

    const destination = resolve(destinationRoot, entry.name);
    await mkdir(destination, { recursive: true });
    for (const filename of ["pet.json", "distribution.json", "spritesheet.webp"]) {
      await cp(resolve(source, filename), resolve(destination, filename));
    }
  }
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  const source = process.argv[2];
  const destination = process.argv[3];
  if (!source || !destination) {
    throw new Error("Usage: node scripts/copy-chatgpt-pets.mjs <source> <destination>");
  }
  await copyChatGptPets(resolve(source), resolve(destination));
  console.log(`Copied ChatGPT-opted-in pets to ${resolve(destination)}`);
}
