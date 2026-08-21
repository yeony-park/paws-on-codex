# Orca compatibility

This note refers to the Orca Agent Development Environment at <https://www.onorca.dev/>.

## Current verdict

**Codex tool and skill reuse is plausible; embedded pet rendering is not yet certified.**

Orca launches the installed Codex CLI and, for the **System default** account, uses the same ~/.codex home as Codex outside Orca. A Paws on Codex plugin installed for that Codex home should therefore be visible to the Codex process launched inside Orca. Orca-managed extra Codex accounts use separate homes, so installation must be repeated for each extra account.

The published Orca documentation also exposes MCP server and marketplace settings. However, it does not currently state that Orca's terminal or experimental native Chat UI renders MCP Apps resources and their embedded Canvas UI. Until that is documented or manually verified, do not promise that the animated pet will appear inside Orca; the tools may still return text and structured results.

## Manual verification matrix

1. Select **System default** in Orca and restart the Codex session after installing Paws on Codex.
2. Ask Codex to list Paws companions and show Chapssari.
3. Confirm the plugin MCP server initializes and the local spritesheet endpoint responds.
4. Record separately whether the skill is discovered, list_pets and show_pet are callable, and the Canvas MCP Apps UI is rendered.
5. Repeat only if needed with an Orca-managed extra account after installing the plugin into that account's Codex home.

If Orca does not render the MCP Apps UI, a native Orca panel adapter would be a separate integration and should not be added until Orca's plugin and panel API is stable and documented.
