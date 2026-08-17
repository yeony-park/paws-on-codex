FROM node:20-bookworm-slim AS build

WORKDIR /app

COPY packages/pet-core ./packages/pet-core

COPY apps/chatgpt/web/package.json apps/chatgpt/web/package-lock.json ./apps/chatgpt/web/
RUN npm --prefix apps/chatgpt/web ci --ignore-scripts
COPY apps/chatgpt/web/src ./apps/chatgpt/web/src
COPY apps/chatgpt/web/tsconfig.json ./apps/chatgpt/web/tsconfig.json
RUN npm --prefix apps/chatgpt/web run build

COPY apps/chatgpt/server/package.json apps/chatgpt/server/package-lock.json ./apps/chatgpt/server/
RUN npm --prefix apps/chatgpt/server ci --ignore-scripts
COPY apps/chatgpt/server/src ./apps/chatgpt/server/src
COPY apps/chatgpt/server/tsconfig.json ./apps/chatgpt/server/tsconfig.json
RUN npm --prefix apps/chatgpt/server run build && npm --prefix apps/chatgpt/server prune --omit=dev

COPY scripts/copy-chatgpt-pets.mjs ./scripts/copy-chatgpt-pets.mjs
COPY pets ./source-pets
RUN node scripts/copy-chatgpt-pets.mjs source-pets pets

FROM node:20-bookworm-slim AS runtime

WORKDIR /app

COPY --from=build --chown=node:node /app/packages ./packages
COPY --from=build --chown=node:node /app/apps/chatgpt/server/package.json ./apps/chatgpt/server/package.json
COPY --from=build --chown=node:node /app/apps/chatgpt/server/dist ./apps/chatgpt/server/dist
COPY --from=build --chown=node:node /app/apps/chatgpt/server/node_modules ./apps/chatgpt/server/node_modules
COPY --from=build --chown=node:node /app/apps/chatgpt/web/dist ./apps/chatgpt/web/dist
COPY --from=build --chown=node:node /app/pets ./pets
COPY --chown=node:node LICENSE ASSETS-LICENSE.md THIRD_PARTY_LICENSES.md ./

ENV HOST=0.0.0.0
ENV PORT=8787
ENV NODE_ENV=production

EXPOSE 8787

USER node

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "const port=process.env.PORT||8787; fetch('http://127.0.0.1:'+port+'/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "apps/chatgpt/server/dist/index.js", "--http"]
