import { spawn } from "node:child_process";
import { once } from "node:events";
import { join, resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const port = 18787;
const pluginRoot = resolve(process.argv[2] ?? "plugins/paws-on-codex");
const child = spawn("node", [join(pluginRoot, "start-server.mjs")], {
  env: {
    ...process.env,
    PORT: String(port),
    PAWS_PUBLIC_BASE_URL: `http://127.0.0.1:${port}`,
    PAWS_COMPONENT_DOMAIN: `http://127.0.0.1:${port}`,
  },
  stdio: ["pipe", "pipe", "pipe"],
});

let stderr = "";
let buffer = "";
let nextId = 1;
const pending = new Map();

child.stdout.setEncoding("utf8").on("data", (chunk) => {
  buffer += chunk;
  const lines = buffer.split("\n");
  buffer = lines.pop() ?? "";
  for (const line of lines) {
    if (!line.trim()) continue;
    const message = JSON.parse(line);
    const waiter = pending.get(message.id);
    if (waiter) {
      pending.delete(message.id);
      waiter(message);
    }
  }
});
child.stderr.setEncoding("utf8").on("data", (chunk) => (stderr += chunk));

async function request(method, params = {}) {
  const id = nextId++;
  const response = new Promise((resolveResponse, reject) => {
    const timeout = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`Timed out waiting for ${method}\n${stderr}`));
    }, 5_000);
    pending.set(id, (message) => {
      clearTimeout(timeout);
      resolveResponse(message);
    });
  });
  child.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", id, method, params })}\n`);
  const message = await response;
  if (message.error) throw new Error(`${method} failed: ${JSON.stringify(message.error)}`);
  return message.result;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

try {
  let health;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      health = await fetch(`http://127.0.0.1:${port}/health`);
      if (health.ok) break;
    } catch {
      await delay(100);
    }
  }
  assert(health?.ok, `asset server did not start\n${stderr}`);

  for (const petId of ["chapssari", "mandu"]) {
    const sprite = await fetch(
      `http://127.0.0.1:${port}/assets/${petId}/spritesheet.webp`,
    );
    assert(
      sprite.ok && (sprite.headers.get("content-type") ?? "").startsWith("image/webp"),
      `${petId} packaged asset is unavailable`,
    );
  }

  const initialized = await request("initialize", {
    protocolVersion: "2025-11-25",
    capabilities: {},
    clientInfo: { name: "paws-package-smoke", version: "1.0.0" },
  });
  assert(initialized.serverInfo?.name === "paws-on-codex", "unexpected MCP server info");
  child.stdin.write(
    `${JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized", params: {} })}\n`,
  );

  const tools = await request("tools/list");
  assert(
    tools.tools.map((tool) => tool.name).sort().join(",") === "list_pets,show_pet",
    "packaged tool discovery failed",
  );

  const catalog = await request("tools/call", { name: "list_pets", arguments: {} });
  assert(
    catalog.structuredContent.pets.map((pet) => pet.id).sort().join(",") ===
      "chapssari,mandu",
    "packaged catalog does not contain both opted-in pets",
  );

  for (const [petId, animation] of [
    ["chapssari", "idle"],
    ["mandu", "waving"],
  ]) {
    const shown = await request("tools/call", {
      name: "show_pet",
      arguments: { id: petId, animation },
    });
    assert(shown.structuredContent.pet.id === petId, `${petId} tool result is invalid`);
    assert(
      shown.structuredContent.selectedAnimation === animation,
      `${petId} animation result is invalid`,
    );
  }

  const resource = await request("resources/read", {
    uri: "ui://paws-on-codex/pet/v1.html",
  });
  const component = resource.contents[0];
  assert(
    component.mimeType === "text/html;profile=mcp-app",
    "packaged UI resource MIME type is invalid",
  );
  assert(
    component._meta?.ui?.domain === `http://127.0.0.1:${port}`,
    "packaged UI resource domain is invalid",
  );
  for (const method of [
    "ui/initialize",
    "ui/notifications/initialized",
    "ui/notifications/tool-result",
  ]) {
    assert(component.text.includes(method), `packaged UI bridge is missing ${method}`);
  }

  console.log("Packaged plugin tools, pets, resource, and MCP Apps bridge passed");
} finally {
  child.kill("SIGTERM");
  await Promise.race([once(child, "exit"), delay(2_000)]);
}
