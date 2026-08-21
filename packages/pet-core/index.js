export const CELL = Object.freeze({ width: 192, height: 208 });

export const ANIMATION_STATES = Object.freeze([
  "idle",
  "running-right",
  "running-left",
  "waving",
  "jumping",
  "failed",
  "waiting",
  "running",
  "review",
]);

const repeated = (count, duration, final) => [
  ...Array.from({ length: count - 1 }, () => duration),
  final,
];

export const ANIMATIONS = Object.freeze({
  idle: { row: 0, frames: 6, durations: [280, 110, 110, 140, 140, 320] },
  "running-right": { row: 1, frames: 8, durations: repeated(8, 120, 220) },
  "running-left": { row: 2, frames: 8, durations: repeated(8, 120, 220) },
  waving: { row: 3, frames: 4, durations: repeated(4, 140, 280) },
  jumping: { row: 4, frames: 5, durations: repeated(5, 140, 280) },
  failed: { row: 5, frames: 8, durations: repeated(8, 140, 240) },
  waiting: { row: 6, frames: 6, durations: repeated(6, 150, 260) },
  running: { row: 7, frames: 6, durations: repeated(6, 120, 220) },
  review: { row: 8, frames: 6, durations: repeated(6, 150, 280) },
});
