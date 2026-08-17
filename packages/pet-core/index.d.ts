export type AnimationState =
  | "idle"
  | "running-right"
  | "running-left"
  | "waving"
  | "jumping"
  | "failed"
  | "waiting"
  | "running"
  | "review";

export type AnimationDefinition = {
  row: number;
  frames: number;
  durations: number[];
};

export const CELL: Readonly<{ width: 192; height: 208 }>;
export const ANIMATION_STATES: readonly AnimationState[];
export const ANIMATIONS: Readonly<Record<AnimationState, AnimationDefinition>>;
