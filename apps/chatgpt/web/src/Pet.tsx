import { useMemo, useState } from "react";
import { getMessages } from "./locales";
import { SpritePlayer } from "./SpritePlayer";
import type { AnimationState, PetToolResult } from "./types";

const motionOrder: AnimationState[] = [
  "idle",
  "waving",
  "running",
  "waiting",
  "review",
  "jumping",
  "failed",
  "running-left",
  "running-right",
];

export function Pet({ result }: { result: PetToolResult }) {
  const [motion, setMotion] = useState<AnimationState>(result.selectedAnimation);
  const locale = document.documentElement.lang || navigator.language || "en";
  const messages = useMemo(() => getMessages(locale), [locale]);

  return (
    <main className="pet-shell">
      <section className="pet-stage" aria-labelledby="pet-name">
        <p className="eyebrow">{messages.companion}</p>
        <SpritePlayer
          label={`${result.pet.displayName}: ${motion}`}
          spritesheetUrl={result.pet.spritesheetUrl}
          animation={result.animations[motion]}
          cell={result.cell}
        />
        <h1 id="pet-name">{result.pet.displayName}</h1>
        <p className="description">{result.pet.description}</p>
      </section>

      <section className="motion-panel" aria-label={messages.motions}>
        <p className="eyebrow">{messages.motions}</p>
        <div className="motion-list">
          {motionOrder.map((item) => (
            <button
              key={item}
              type="button"
              className={item === motion ? "selected" : undefined}
              aria-pressed={item === motion}
              onClick={() => setMotion(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <footer>
        {result.pet.attribution} · {result.pet.license} · {messages.by}{" "}
        <a href={`https://github.com/${result.pet.contributor.github}`} target="_blank" rel="noreferrer">
          @{result.pet.contributor.github}
        </a>
      </footer>
    </main>
  );
}
