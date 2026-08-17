import { readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const appRoots = [
  join(repoRoot, "apps", "chatgpt", "server"),
  join(repoRoot, "apps", "chatgpt", "web"),
];
const outputFile = join(repoRoot, "THIRD_PARTY_LICENSES.md");
const licenseFilename = /^(licen[cs]e|notice)(\..*)?$/i;

function repositoryUrl(repository) {
  if (typeof repository === "string") return repository;
  if (repository && typeof repository.url === "string") return repository.url;
  return undefined;
}

export async function generateThirdPartyLicenses() {
  const packages = new Map();

  for (const appRoot of appRoots) {
    const lock = JSON.parse(await readFile(join(appRoot, "package-lock.json"), "utf8"));
    for (const [relativePath, lockEntry] of Object.entries(lock.packages ?? {})) {
      if (
        !relativePath.includes("node_modules") ||
        lockEntry.dev === true ||
        relativePath.endsWith("node_modules/@paws-on-codex/pet-core")
      ) {
        continue;
      }

      const packageRoot = join(appRoot, relativePath);
      const metadata = JSON.parse(await readFile(join(packageRoot, "package.json"), "utf8"));
      const key = `${metadata.name}@${metadata.version}`;
      if (packages.has(key)) continue;

      const licenseFiles = (await readdir(packageRoot, { withFileTypes: true }))
        .filter((entry) => entry.isFile() && licenseFilename.test(entry.name))
        .map((entry) => entry.name)
        .sort((left, right) => left.localeCompare(right));
      if (licenseFiles.length === 0) {
        throw new Error(`No license or notice file found for ${key}`);
      }

      packages.set(key, {
        name: metadata.name,
        version: metadata.version,
        license: metadata.license ?? lockEntry.license ?? "See included license text",
        repository: repositoryUrl(metadata.repository) ?? metadata.homepage,
        files: await Promise.all(
          licenseFiles.map(async (filename) => ({
            filename,
            text: (await readFile(join(packageRoot, filename), "utf8")).trim(),
          })),
        ),
      });
    }
  }

  const sections = [...packages.values()]
    .sort((left, right) =>
      `${left.name}@${left.version}`.localeCompare(`${right.name}@${right.version}`),
    )
    .map((entry) => {
      const source = entry.repository ? `\nSource: ${entry.repository}` : "";
      const texts = entry.files
        .map(
          ({ filename, text }) =>
            `### ${filename}\n\n\`\`\`text\n${text}\n\`\`\``,
        )
        .join("\n\n");
      return `## ${entry.name}@${entry.version}\n\nDeclared license: ${entry.license}${source}\n\n${texts}`;
    });

  const document = [
    "# Third-party software licenses",
    "",
    "This file is generated from the production dependency lockfiles used by the bundled ChatGPT/Codex plugin. It contains the complete license and notice files distributed by each dependency package.",
    "",
    ...sections.flatMap((section) => [section, ""]),
  ].join("\n");

  await writeFile(outputFile, document);
  return outputFile;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const generated = await generateThirdPartyLicenses();
  console.log(`Generated ${generated}`);
}
