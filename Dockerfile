# ========================================
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
