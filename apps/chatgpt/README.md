# OpenAI plugin adapter (release candidate)

This directory wraps the existing Paws on Codex v2 pet assets as a read-only MCP server and a Canvas-based MCP Apps component. It does not use Three.js or render new 3D models; it plays the existing transparent sprite atlas one cell at a time.

## Architecture

```text
pets/*/pet.json + distribution.json + spritesheet.webp
                    │
          packages/pet-core (states and timing)
                    │
                    ▼
server/src/pet-catalog.ts
                    │
          list_pets / show_pet
                    │
                    ▼
web/src/SpritePlayer.tsx (Canvas)
```

Only pets with `surfaces.chatgpt: true` in `distribution.json` enter the ChatGPT catalog. This makes ChatGPT distribution an explicit contributor choice. Git attribution and the declared asset license travel with every tool result.

## Build and test

Node.js 20 or newer is required.

```bash
npm --prefix apps/chatgpt/web ci
npm --prefix apps/chatgpt/web run typecheck
npm --prefix apps/chatgpt/web run build

npm --prefix apps/chatgpt/server ci
npm --prefix apps/chatgpt/server test
npm --prefix apps/chatgpt/server run typecheck
npm --prefix apps/chatgpt/server run build

node scripts/package-chatgpt-plugin.mjs
node scripts/test-plugin-package.mjs
```

Run the local HTTP endpoint:

```bash
PAWS_PUBLIC_BASE_URL=http://localhost:8787 \
  npm --prefix apps/chatgpt/server run dev:http
```

The health endpoint is `http://localhost:8787/health`; the MCP endpoint is `http://localhost:8787/mcp`.

## Test the local Codex plugin

Build and package both apps first, then add this repository as a local marketplace:

```bash
codex plugin marketplace add .
codex plugin add paws-on-codex@paws-on-codex
```

Restart Codex and begin a new task so the bundled skill and MCP server are loaded. The local plugin uses stdio for MCP and starts its read-only Canvas asset server on an available loopback port. Set `PORT` only when a fixed port is required.

## Test in ChatGPT

1. Build the web component and server.
2. Expose the server through a public HTTPS development tunnel.
3. Set `PAWS_PUBLIC_BASE_URL` to that public origin, set `PAWS_COMPONENT_DOMAIN` to the plugin's dedicated HTTPS component origin, and, when deploying in a container, set `HOST=0.0.0.0`.
4. In ChatGPT developer mode, create a connection to `https://your-development-origin.example/mcp`.
5. Scan the `list_pets` and `show_pet` tools, then ask ChatGPT to show Chapssari or Mandu.

Follow the official OpenAI guides for [building an MCP server](https://developers.openai.com/plugins/build/mcp-server), [adding MCP Apps UI](https://developers.openai.com/plugins/build/chatgpt-ui), and [connecting the plugin to ChatGPT](https://developers.openai.com/plugins/deploy/connect-chatgpt). The production deployment and submission checklist is in [docs/plugin/SUBMISSION.md](../../docs/plugin/SUBMISSION.md).

The repository maintainer owns deployment, connection registration, review submission, and release publication. Contributors can add opted-in pets, translations, documentation, tests, and focused fixes without becoming plugin publishers.
