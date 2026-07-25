# ── Stage 1: install & build ──────────────────────────────────────────────────
FROM node:22-alpine AS builder

# Enable corepack so pnpm is available without a separate install step
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /workspace

# Copy workspace manifests first — Docker layer-caches these separately from
# source code so a source-only change does not re-run pnpm install.
COPY package.json pnpm-workspace.yaml .npmrc ./
COPY tsconfig.base.json tsconfig.json ./

COPY lib/db/package.json            lib/db/
COPY lib/shared-sdk/package.json    lib/shared-sdk/
COPY scripts/package.json           scripts/
COPY artifacts/api-server/package.json artifacts/api-server/

RUN pnpm install --frozen-lockfile

# Copy all source files
COPY lib/       lib/
COPY scripts/   scripts/
COPY artifacts/api-server/ artifacts/api-server/

# Build only the api-server (shared-sdk is source-linked, no separate build step)
WORKDIR /workspace/artifacts/api-server
RUN pnpm run build

# ── Stage 2: lean production image ───────────────────────────────────────────
FROM node:22-alpine AS runner

ENV NODE_ENV=production
ENV PORT=8080

WORKDIR /app

# Copy the self-contained bundle produced by esbuild
COPY --from=builder /workspace/artifacts/api-server/dist/ ./dist/

# No node_modules needed — esbuild bundles everything except Node built-ins.
# If you add native addons that can't be bundled, install them here:
# COPY --from=builder /workspace/artifacts/api-server/node_modules/ ./node_modules/

EXPOSE 8080

# Run as a non-root user for security
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 apiserver
USER apiserver

CMD ["node", "--enable-source-maps", "./dist/index.mjs"]
