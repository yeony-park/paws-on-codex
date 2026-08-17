import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { ANIMATIONS, getChatGptPet, listChatGptPets } from "./pet-catalog.js";
import { componentDomain } from "./tools.js";

test("lists the two opted-in repository pets", () => {
  const pets = listChatGptPets();
  assert.deepEqual(
    pets.map((pet) => pet.id).sort(),
    ["chapssari", "mandu"],
  );
  assert.equal(getChatGptPet("chapssari")?.surfaces.chatgpt, true);
});

test("keeps the v2 animation contract", () => {
  assert.deepEqual(ANIMATIONS.idle.durations, [280, 110, 110, 140, 140, 320]);
  assert.equal(ANIMATIONS.review.row, 8);
  assert.equal(ANIMATIONS["running-right"].frames, 8);
});

test("excludes a pet without ChatGPT distribution consent", () => {
  const root = mkdtempSync(join(tmpdir(), "paws-catalog-"));
  const petDir = join(root, "pets", "private-pet");
  mkdirSync(petDir, { recursive: true });
  writeFileSync(
    join(petDir, "pet.json"),
    JSON.stringify({
      id: "private-pet",
      displayName: "Private Pet",
      description: "Codex only",
      spriteVersionNumber: 2,
      spritesheetPath: "spritesheet.webp",
    }),
  );
  writeFileSync(
    join(petDir, "distribution.json"),
    JSON.stringify({
      contributor: { github: "owner", displayName: "Owner" },
      license: "CC-BY-NC-4.0",
      attribution: "Private Pet by Owner",
      surfaces: { codex: true, chatgpt: false },
    }),
  );

  assert.deepEqual(listChatGptPets(root), []);
});

test("declares the dedicated MCP Apps component origin", () => {
  const previous = process.env.PAWS_COMPONENT_DOMAIN;
  process.env.PAWS_COMPONENT_DOMAIN = "https://pets.example.test/component";
  try {
    assert.equal(componentDomain("https://api.example.test"), "https://pets.example.test");
  } finally {
    if (previous === undefined) delete process.env.PAWS_COMPONENT_DOMAIN;
    else process.env.PAWS_COMPONENT_DOMAIN = previous;
  }
});
