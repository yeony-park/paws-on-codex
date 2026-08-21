export const styles = `
  :root { color-scheme: light dark; font-family: ui-rounded, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
  * { box-sizing: border-box; }
  body { margin: 0; background: transparent; color: #24242a; }
  button, a { font: inherit; }
  .pet-shell { max-width: 720px; margin: 0 auto; padding: 12px; display: grid; gap: 12px; }
  .pet-stage { min-height: 340px; padding: 14px; display: grid; justify-items: center; align-content: center; text-align: center; background: radial-gradient(circle at 50% 38%, #ffffff 0, #f2f3f6 58%, #e4e6eb 100%); border-radius: 28px; }
  .eyebrow { margin: 0 0 6px; color: #666a73; font-size: 12px; font-weight: 750; letter-spacing: .12em; text-transform: uppercase; }
  .sprite { display: block; width: min(70vw, 240px); height: auto; }
  h1 { margin: 2px 0 4px; font-size: clamp(24px, 5vw, 36px); }
  .description { max-width: 520px; margin: 0; color: #555963; line-height: 1.45; }
  .motion-panel { display: grid; gap: 8px; }
  .motion-list { display: flex; flex-wrap: wrap; gap: 8px; }
  button { appearance: none; padding: 8px 12px; border: 0; border-radius: 999px; background: #eceef2; color: #383b43; cursor: pointer; }
  button:hover { background: #dfe2e8; }
  button.selected { background: #6667ab; color: white; }
  button:focus-visible, a:focus-visible { outline: 3px solid #7677bd; outline-offset: 2px; }
  footer { color: #6a6e77; font-size: 12px; line-height: 1.5; }
  footer a { color: inherit; }
  .empty { min-height: 220px; display: grid; place-items: center; padding: 24px; text-align: center; color: #666a73; }
  @media (prefers-color-scheme: dark) {
    body { color: #f4f4f6; }
    .pet-stage { background: radial-gradient(circle at 50% 38%, #383941 0, #292a31 60%, #202126 100%); }
    .eyebrow, .description, footer { color: #c4c6ce; }
    button { background: #393b44; color: #f0f0f3; }
    button:hover { background: #474a55; }
    button.selected { background: #8b8cd2; color: #15151a; }
  }
`;
