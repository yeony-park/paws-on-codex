import { useEffect, useRef } from "react";
import type { AnimationDefinition } from "./types";

type Props = {
  label: string;
  spritesheetUrl: string;
  animation: AnimationDefinition;
  cell: { width: number; height: number };
};

export function SpritePlayer({ label, spritesheetUrl, animation, cell }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const image = new Image();
    image.crossOrigin = "anonymous";
    let timeout: number | undefined;
    let cancelled = false;

    const draw = (frame: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(
        image,
        frame * cell.width,
        animation.row * cell.height,
        cell.width,
        cell.height,
        0,
        0,
        canvas.width,
        canvas.height,
      );
    };

    image.onload = () => {
      if (cancelled) return;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        draw(0);
        return;
      }
      let frame = 0;
      const advance = () => {
        draw(frame);
        const duration = animation.durations[frame] ?? 160;
        timeout = window.setTimeout(() => {
          frame = (frame + 1) % animation.frames;
          advance();
        }, duration);
      };
      advance();
    };
    image.src = spritesheetUrl;

    return () => {
      cancelled = true;
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, [animation, cell.height, cell.width, spritesheetUrl]);

  return (
    <canvas
      ref={canvasRef}
      className="sprite"
      width={384}
      height={416}
      role="img"
      aria-label={label}
    />
  );
}
