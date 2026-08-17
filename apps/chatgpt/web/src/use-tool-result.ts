import { App as McpApp } from "@modelcontextprotocol/ext-apps";
import { useEffect, useState } from "react";
import type { PetToolResult } from "./types";

type ToolResultEnvelope = {
  structuredContent?: unknown;
};

function isPetToolResult(value: unknown): value is PetToolResult {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<PetToolResult>;
  return Boolean(
    candidate.pet &&
      typeof candidate.pet.id === "string" &&
      typeof candidate.pet.spritesheetUrl === "string" &&
      candidate.animations &&
      candidate.cell,
  );
}

function extract(value: unknown): PetToolResult | null {
  if (isPetToolResult(value)) return value;
  const envelope = value as ToolResultEnvelope | null;
  return isPetToolResult(envelope?.structuredContent) ? envelope.structuredContent : null;
}

export function useToolResult(): PetToolResult | null {
  const [result, setResult] = useState<PetToolResult | null>(() =>
    extract(window.openai?.toolOutput),
  );

  useEffect(() => {
    const app = new McpApp(
      { name: "paws-on-codex-view", version: "0.1.0" },
      {},
      { autoResize: true },
    );
    let disposed = false;

    app.ontoolresult = (toolResult) => {
      const next = extract(toolResult);
      if (next) setResult(next);
    };

    void app.connect().catch((error) => {
      if (!disposed) console.warn("MCP Apps bridge initialization failed", error);
    });

    return () => {
      disposed = true;
      app.ontoolresult = undefined;
      void app.close();
    };
  }, []);

  return result;
}
