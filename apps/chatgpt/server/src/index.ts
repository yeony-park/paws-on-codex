import express from "express";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { getChatGptPet } from "./pet-catalog.js";
import { createPawsServer } from "./tools.js";

const port = Number(process.env.PORT ?? 8787);
const host = process.env.HOST ?? "127.0.0.1";
const configuredBaseUrl = (process.env.PAWS_PUBLIC_BASE_URL ?? `http://localhost:${port}`).replace(
  /\/$/,
  "",
);

export function createHttpApp(includeMcp: boolean, publicBaseUrl = configuredBaseUrl) {
  const app = express();
  app.use(express.json({ limit: "1mb" }));

  app.use((request, response, next) => {
    const startedAt = performance.now();
    response.on("finish", () => {
      console.error(
        JSON.stringify({
          event: "http_request",
          method: request.method,
          path: request.path,
          status: response.statusCode,
          durationMs: Math.round(performance.now() - startedAt),
        }),
      );
    });
    next();
  });

  app.get("/health", (_request, response) => {
    response.json({ ok: true, service: "paws-on-codex" });
  });

  app.get("/.well-known/openai-apps-challenge", (_request, response) => {
    const challenge = process.env.OPENAI_APPS_CHALLENGE;
    if (!challenge) {
      response.status(404).type("text/plain").send("challenge not configured");
      return;
    }
    response.type("text/plain").send(challenge);
  });

  app.get("/assets/:petId/spritesheet.webp", async (request, response) => {
    const pet = getChatGptPet(request.params.petId);
    if (!pet) {
      response.status(404).json({ error: "unknown pet" });
      return;
    }
    try {
      const spritesheet = await readFile(pet.spritesheetFile);
      response.set("Access-Control-Allow-Origin", "*");
      response.type("image/webp").send(spritesheet);
    } catch (error) {
      console.error(
        JSON.stringify({
          event: "asset_read_failed",
          petId: pet.id,
          message: error instanceof Error ? error.message : "unknown error",
        }),
      );
      response.status(500).json({ error: "pet asset unavailable" });
    }
  });

  if (includeMcp) {
    app.all("/mcp", async (request, response) => {
      try {
        const server = createPawsServer(publicBaseUrl);
        const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
        response.on("close", () => {
          void transport.close();
          void server.close();
        });
        await server.connect(transport);
        await transport.handleRequest(request, response, request.body);
      } catch (error) {
        console.error(
          JSON.stringify({
            event: "mcp_request_failed",
            message: error instanceof Error ? error.message : "unknown error",
          }),
        );
        if (!response.headersSent) {
          response.status(500).json({ error: "MCP request failed" });
        }
      }
    });
  }

  return app;
}

async function listen(includeMcp: boolean, listenPort = port): Promise<string> {
  const app = createHttpApp(includeMcp);
  let listenerPort = listenPort;

  await new Promise<void>((resolveListen, reject) => {
    const listener = app.listen(listenPort, host, () => {
      const address = listener.address();
      if (address && typeof address === "object") listenerPort = address.port;
      resolveListen();
    });
    listener.once("error", reject);
  });

  const runtimeBaseUrl = process.env.PAWS_PUBLIC_BASE_URL
    ? configuredBaseUrl
    : `http://localhost:${listenerPort}`;
  const endpoint = includeMcp ? `${runtimeBaseUrl}/mcp` : runtimeBaseUrl;
  console.error(`Paws on Codex server listening at ${endpoint}`);
  return runtimeBaseUrl;
}

export async function startStdio(): Promise<void> {
  // The Canvas component still needs an HTTP origin for the selected spritesheet.
  // Keep that read-only asset server alive beside the stdio MCP transport.
  const localPort = process.env.PORT ? port : 0;
  const assetBaseUrl = await listen(false, localPort);
  const server = createPawsServer(assetBaseUrl);
  await server.connect(new StdioServerTransport());
}

export async function startHttp(): Promise<void> {
  if (process.env.NODE_ENV === "production" && !configuredBaseUrl.startsWith("https://")) {
    throw new Error("PAWS_PUBLIC_BASE_URL must use HTTPS in production");
  }
  if (
    process.env.NODE_ENV === "production" &&
    process.env.PAWS_COMPONENT_DOMAIN &&
    !process.env.PAWS_COMPONENT_DOMAIN.startsWith("https://")
  ) {
    throw new Error("PAWS_COMPONENT_DOMAIN must use HTTPS in production");
  }
  await listen(true);
}

const isMain =
  process.argv[1] !== undefined &&
  resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url));

if (isMain) {
  const run = process.argv.includes("--http") ? startHttp : startStdio;
  run().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
