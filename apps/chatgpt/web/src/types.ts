import type { AnimationDefinition, AnimationState } from "@paws-on-codex/pet-core";

export type { AnimationDefinition, AnimationState };

export type PetToolResult = {
  pet: {
    id: string;
    displayName: string;
    description: string;
    contributor: {
      github: string;
      displayName: string;
    };
    license: string;
    attribution: string;
    spritesheetUrl: string;
  };
  selectedAnimation: AnimationState;
  animations: Record<AnimationState, AnimationDefinition>;
  cell: {
    width: number;
    height: number;
  };
};

declare global {
  interface Window {
    openai?: {
      toolOutput?: unknown;
    };
  }
}
