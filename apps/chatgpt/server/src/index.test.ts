import assert from "node:assert/strict";
import type { AddressInfo } from "node:net";
import test from "node:test";
import { createHttpApp } from "./index.js";

test("serves health, domain verification, and opted-in pet assets", async () => {
  const previousChallenge = process.env.OPENAI_APPS_CHALLENGE;
  process.env.OPENAI_APPS_CHALLENGE = "review-challenge";
  const listener = createHttpApp(false).listen(0, "127.0.0.1");
  await new Promise<void>((resolve, reject) => {
    listener.once("listening", resolve);
    listener.once("error", reject);
  });

  try {
    const address = listener.address() as AddressInfo;
    const origin = `http://127.0.0.1:${address.port}`;

    const health = await fetch(`${origin}/health`);
    assert.equal(health.status, 200);
    assert.deepEqual(await health.json(), { ok: true, service: "paws-on-codex" });

    const challenge = await fetch(`${origin}/.well-known/openai-apps-challenge`);
    assert.equal(challenge.status, 200);
    assert.equal(await challenge.text(), "review-challenge");

    const spritesheet = await fetch(`${origin}/assets/chapssari/spritesheet.webp`);
    assert.equal(spritesheet.status, 200);
    assert.match(spritesheet.headers.get("content-type") ?? "", /^image\/webp/);
    assert.ok((await spritesheet.arrayBuffer()).byteLength > 0);
  } finally {
    if (previousChallenge === undefined) {
      delete process.env.OPENAI_APPS_CHALLENGE;
    } else {
      process.env.OPENAI_APPS_CHALLENGE = previousChallenge;
    }
    await new Promise<void>((resolve, reject) => {
      listener.close((error) => (error ? reject(error) : resolve()));
    });
  }
});

test("initializes over stateless Streamable HTTP MCP", async () => {
  const listener = createHttpApp(true).listen(0, "127.0.0.1");
  await new Promise<void>((resolve, reject) => {
    listener.once("listening", resolve);
    listener.once("error", reject);
  });

  try {
    const address = listener.address() as AddressInfo;
    const response = await fetch(`http://127.0.0.1:${address.port}/mcp`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json, text/event-stream",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: {
          protocolVersion: "2025-11-25",
          capabilities: {},
          clientInfo: { name: "paws-test", version: "1.0.0" },
        },
      }),
    });

    assert.equal(response.status, 200);
    assert.match(await response.text(), /"serverInfo"/);
  } finally {
    await new Promise<void>((resolve, reject) => {
      listener.close((error) => (error ? reject(error) : resolve()));
    });
  }
});
