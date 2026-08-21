import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  registerAppResource,
  RESOURCE_MIME_TYPE,
} from "@modelcontextprotocol/ext-apps/server";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  ANIMATIONS,
  ANIMATION_STATES,
  CELL,
  type AnimationState,
} from "@paws-on-codex/pet-core";
import {
  getChatGptPet,
  listChatGptPets,
  type CatalogPet,
} from "./pet-catalog.js";

const UI_URI = "ui://paws-on-codex/pet/v1.html";

export function componentDomain(baseUrl: string): string {
  return new URL(process.env.PAWS_COMPONENT_DOMAIN ?? baseUrl).origin;
}

function publicPet(pet: CatalogPet, baseUrl: string) {
  return {
    id: pet.id,
    displayName: pet.displayName,
    description: pet.description,
    contributor: pet.contributor,
    license: pet.license,
    attribution: pet.attribution,
    spritesheetUrl: `${baseUrl}/assets/${encodeURIComponent(pet.id)}/spritesheet.webp`,
  };
}

export function createPawsServer(baseUrl: string): McpServer {
  const server = new McpServer(
    { name: "paws-on-codex", version: "0.1.0" },
    {
      instructions:
        "List published companions before choosing one. Use show_pet to display a selected pet. All tools are read-only.",
    },
  );

  server.registerTool(
    "list_pets",
    {
      title: "List companion pets",
      description:
        "List companion animals whose contributors opted into the Paws on Codex ChatGPT catalog.",
      inputSchema: {},
      outputSchema: {
        pets: z.array(
          z.object({
            id: z.string(),
            displayName: z.string(),
            description: z.string(),
            contributor: z.object({ github: z.string(), displayName: z.string() }),
            license: z.string(),
            attribution: z.string(),
          }),
        ),
      },
      annotations: {
        readOnlyHint: true,
        openWorldHint: false,
        destructiveHint: false,
      },
    },
    async () => {
      const pets = listChatGptPets().map((pet) => ({
        id: pet.id,
        displayName: pet.displayName,
        description: pet.description,
        contributor: pet.contributor,
        license: pet.license,
        attribution: pet.attribution,
      }));
      return {
        structuredContent: { pets },
        content: [{ type: "text", text: `Found ${pets.length} published companions.` }],
      };
    },
  );

  server.registerTool(
    "show_pet",
    {
      title: "Show a companion pet",
      description:
        "Display one published companion pet in a Canvas-based retro virtual-pet viewer.",
      inputSchema: {
        id: z.string().min(1),
        animation: z.enum(ANIMATION_STATES).default("idle"),
      },
      outputSchema: {
        pet: z.object({
          id: z.string(),
          displayName: z.string(),
          description: z.string(),
          contributor: z.object({ github: z.string(), displayName: z.string() }),
          license: z.string(),
          attribution: z.string(),
          spritesheetUrl: z.string().url(),
        }),
        selectedAnimation: z.enum(ANIMATION_STATES),
        animations: z.record(
          z.string(),
          z.object({ row: z.number(), frames: z.number(), durations: z.array(z.number()) }),
        ),
        cell: z.object({ width: z.number(), height: z.number() }),
      },
      annotations: {
        readOnlyHint: true,
        openWorldHint: false,
        destructiveHint: false,
      },
      _meta: {
        ui: { resourceUri: UI_URI },
        "openai/outputTemplate": UI_URI,
      },
    },
    async ({ id, animation }) => {
      const pet = getChatGptPet(id);
      if (!pet) {
        const ids = listChatGptPets().map((item) => item.id).join(", ");
        throw new Error(`Unknown pet '${id}'. Available pet IDs: ${ids}`);
      }
      const selectedAnimation = animation as AnimationState;
      const structuredContent = {
        pet: publicPet(pet, baseUrl),
        selectedAnimation,
        animations: ANIMATIONS,
        cell: CELL,
      };
      return {
        structuredContent,
        content: [
          {
            type: "text",
            text: `Showing ${pet.displayName} with the ${selectedAnimation} animation. ${pet.attribution}; ${pet.license}.`,
          },
        ],
      };
    },
  );

  registerAppResource(server, "paws-pet", UI_URI, {}, async () => {
    const componentFile = process.env.PAWS_COMPONENT_FILE
      ? resolve(process.env.PAWS_COMPONENT_FILE)
      : new URL("../../web/dist/component.js", import.meta.url);
    const component = readFileSync(componentFile, "utf8");
    const resourceOrigin = new URL(baseUrl).origin;
    return {
      contents: [
        {
          uri: UI_URI,
          mimeType: RESOURCE_MIME_TYPE,
          text: `<div id="root"></div><script type="module">${component}</script>`,
          _meta: {
            ui: {
              domain: componentDomain(baseUrl),
              prefersBorder: false,
              csp: {
                connectDomains: [resourceOrigin],
                resourceDomains: [resourceOrigin],
              },
            },
          },
        },
      ],
    };
  });

  return server;
}
