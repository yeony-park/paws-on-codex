---
name: choose-companion
description: Browse and display Paws on Codex companion pets through the bundled MCP tools. Use when a user asks which pets are available, wants to choose Chapssari, Mandu, or another published companion, or wants to preview a pet animation.
---

# Choose a companion

1. Call `list_pets` when the user has not named a published pet or asks what is available.
2. Preserve a pet ID returned by the catalog; do not invent or normalize IDs.
3. Call `show_pet` with the chosen ID and the requested animation. Use `idle` when no animation is requested.
4. Summarize the pet's name, description, contributor, attribution, and asset license from the tool result.
5. If the requested pet is unavailable, show the catalog and ask the user to select an available ID.

Treat every tool as read-only. Do not claim that choosing a companion installs files or changes the user's Codex pet; installation remains a separate repository workflow.
