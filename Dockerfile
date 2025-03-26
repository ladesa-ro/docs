# ========================================
# CORE IMAGE
# ========================================

FROM oven/bun:1 AS core

# ========================================
# BASE IMAGE
# ========================================

FROM core AS base
ENV BUN_INSTALL_CACHE_DIR="/bun/install/cache"

RUN mkdir -p /var/lib/ladesa/.sources
RUN chown -R 1000:1000 /var/lib/ladesa/.sources

WORKDIR "/var/lib/ladesa/.sources/docs/"

# ========================================
# DEVELOPMENT AND BUILD DEPENDENCIES
# ========================================

FROM base AS dev-dependencies
RUN mkdir -p /var/lib/ladesa/.builds

COPY ./docusaurus "/var/lib/ladesa/.sources/docs"

RUN --mount=type=cache,id=bun,target=/bun/install/cache bun install --frozen-lockfile 

# ========================================
# DOCS -- BUILD
# ========================================

FROM dev-dependencies AS docs-builder

RUN bun run build
RUN cp -r /var/lib/ladesa/.sources/docs/build "/var/lib/ladesa/.builds/docs"


# ========================================
# DOCS -- RUNTIME
# ========================================

FROM nginx:alpine AS runtime
COPY nginx.conf /etc/nginx/nginx.conf 
COPY --from=docs-builder /var/lib/ladesa/.builds/docs /var/lib/ladesa-ro/cr/docs/dist
EXPOSE 80

# FROM node:22 AS base

# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable

# WORKDIR /tmp/ladesa/docs
# COPY package.json pnpm-lock.yaml ./

# #

# FROM base AS prod-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# #

# FROM base AS build-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# #

# FROM build-deps AS build
# COPY . .
# RUN pnpm run build

# #

# FROM nginx:alpine AS runtime
# COPY nginx.conf /etc/nginx/nginx.conf 
# COPY --from=build /tmp/ladesa/docs/build /var/lib/ladesa-ro/cr/docs/dist
# EXPOSE 80

# ==================================================

# FROM node:22 AS base
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
# WORKDIR /tmp/ladesa/docs

# COPY package.json pnpm-lock.yaml ./

# FROM base AS prod-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# FROM base AS build-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# FROM build-deps AS build
# COPY . .
# RUN pnpm run build

# FROM httpd:2.4 AS runtime
# COPY --from=build /tmp/ladesa/docs/.vitepress/dist /usr/local/apache2/htdocs/
# EXPOSE 80

# ==================================================

# FROM node:22 AS base
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
# WORKDIR /tmp/ladesa/docs

# COPY package.json pnpm-lock.yaml ./

# FROM base AS prod-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# FROM base AS build-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# FROM build-deps AS build
# COPY . .
# RUN pnpm run build

# FROM base AS runtime
# COPY --from=prod-deps /tmp/ladesa/docs/node_modules ./node_modules
# COPY --from=build /tmp/ladesa/docs/dist ./dist

# ENV HOST=0.0.0.0
# ENV PORT=4321
# EXPOSE 4321
# CMD node ./dist/server/entry.mjs

# ==================================================
