import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  ANIMATIONS,
  ANIMATION_STATES,
  type AnimationDefinition,
  type AnimationState,
} from "@paws-on-codex/pet-core";
import { z } from "zod";

export { ANIMATIONS, ANIMATION_STATES };
export type { AnimationDefinition, AnimationState };

const petManifestSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  displayName: z.string().min(1),
  description: z.string().min(1),
  spriteVersionNumber: z.number().int(),
  spritesheetPath: z.literal("spritesheet.webp"),
});

const distributionManifestSchema = z.object({
  contributor: z.object({
    github: z.string().min(1),
    displayName: z.string().min(1),
  }),
  license: z.string().min(1),
  attribution: z.string().min(1),
  surfaces: z.object({
    codex: z.boolean(),
    chatgpt: z.boolean(),
  }),
});

type PetManifest = z.infer<typeof petManifestSchema>;
type DistributionManifest = z.infer<typeof distributionManifestSchema>;

export type CatalogPet = PetManifest &
  DistributionManifest & {
    directory: string;
    spritesheetFile: string;
  };

export const REPO_ROOT = process.env.PAWS_PET_CATALOG_ROOT
  ? resolve(process.env.PAWS_PET_CATALOG_ROOT)
  : fileURLToPath(new URL("../../../../", import.meta.url));

const parseJson = (path: string): unknown => JSON.parse(readFileSync(path, "utf8"));

export function listChatGptPets(repoRoot = REPO_ROOT): CatalogPet[] {
  const petsRoot = join(repoRoot, "pets");

  return readdirSync(petsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => {
      const directory = join(petsRoot, entry.name);
      try {
        const pet = petManifestSchema.parse(parseJson(join(directory, "pet.json")));
        const distribution = distributionManifestSchema.parse(
          parseJson(join(directory, "distribution.json")),
        );
        if (!distribution.surfaces.chatgpt) return [];
        if (pet.id !== entry.name) {
          throw new Error(`pet id ${pet.id} does not match directory ${entry.name}`);
        }
        if (pet.spriteVersionNumber !== 2) {
          throw new Error(`${pet.id} must use a v2 spritesheet for ChatGPT`);
        }
        return [
          {
            ...pet,
            ...distribution,
            directory,
            spritesheetFile: join(directory, pet.spritesheetPath),
          },
        ];
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
        throw error;
      }
    })
    .sort((left, right) => left.displayName.localeCompare(right.displayName));
}

export function getChatGptPet(id: string, repoRoot = REPO_ROOT): CatalogPet | undefined {
  return listChatGptPets(repoRoot).find((pet) => pet.id === id);
}
