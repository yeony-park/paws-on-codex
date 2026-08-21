# OpenAI plugin release checklist

This is the maintainer's release packet for the public OpenAI plugin directory shared by ChatGPT and Codex.

## Repository-complete items

- Plugin name: **Paws On Codex**
- Short description: **Real companions as coding pets.**
- Category: **Lifestyle**
- Website: <https://github.com/yeony-park/paws-on-codex>
- Support: <https://github.com/yeony-park/paws-on-codex/issues/new/choose>
- Privacy policy: <https://github.com/yeony-park/paws-on-codex/blob/main/PRIVACY.md>
- Terms: <https://github.com/yeony-park/paws-on-codex/blob/main/TERMS.md>
- Production logo, composer icon, screenshot, three starter prompts, tool annotations, exact CSP origins, and reviewer cases are versioned with the plugin.
- Five positive and three negative reviewer scenarios are in [review-test-cases.json](review-test-cases.json).

## Owner actions required before submission

1. Complete individual or business identity verification and obtain **Apps Management Write** access in the OpenAI Platform organization.
2. Build the server, then deploy apps/chatgpt/server/Dockerfile to a stable public HTTPS origin.
3. Set PAWS_PUBLIC_BASE_URL to the production HTTPS origin, PAWS_COMPONENT_DOMAIN to the plugin's dedicated HTTPS component origin, OPENAI_APPS_CHALLENGE to the portal value, HOST to 0.0.0.0, and PORT as required by the host.
4. Verify GET /health, GET /.well-known/openai-apps-challenge, pet assets, and Streamable HTTP MCP at POST /mcp.
5. In ChatGPT developer mode, connect to the production /mcp URL, rescan tools, and run every case in review-test-cases.json.
6. Configure the hosting and log provider to retain application logs for no more than 30 days, verify the effective retention setting, and record the provider and setting for the review packet. Confirm alerts cover failed startup, MCP initialization, tool calls, and asset delivery without logging prompts or tool arguments.
7. Submit a **new server URL** in the OpenAI Platform plugin portal, choose universal availability unless regional restrictions are needed, paste the release notes below, and upload the versioned listing assets.

## Tool review notes

| Tool | Annotation justification |
| --- | --- |
| `list_pets` | Read-only because it reads the packaged, contributor-approved catalog; not open-world because it calls no external service; not destructive because it changes no state. |
| `show_pet` | Read-only because it returns one packaged catalog entry and UI data; not open-world because it fetches only the selected bundled spritesheet from the declared origin; not destructive because it changes no state. |

The UI fetches only the selected spritesheet from the configured public origin. The MCP Apps CSP lists that exact origin for both connection and resource loading.

## Suggested release notes

> Initial public release. Browse contributor-approved companion pets and display Chapssari or Mandu in an interactive Canvas viewer with idle, movement, waiting, review, waving, jumping, and failure animations. Includes attribution and declared asset licenses in every result.

## Build and local package verification

Run the web typecheck and build, server tests, typecheck and build, then:

    node scripts/package-chatgpt-plugin.mjs
    node scripts/test-plugin-package.mjs

Temporary development tunnels are suitable for developer-mode tests but not for public submission.
