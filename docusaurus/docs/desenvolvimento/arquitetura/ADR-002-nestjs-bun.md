---
sidebar_position: 3
sidebar_label: "ADR-002: NestJS + Bun"
---

# ADR-002 — NestJS + Bun no management-service

## Status

**Aceito**

## Contexto

O backend precisa servir API REST e GraphQL, gerenciar entidades com ORM, e orquestrar a comunicação com o timetable-generator via mensageria. A equipe tem expertise em TypeScript.

## Decisão

Usar **NestJS** como framework do backend (`management-service/`) executado sobre **Bun** como runtime, com **TypeORM** como ORM e **PostgreSQL 15** como banco de dados.

## Consequências

**Positivas:**
- NestJS oferece estrutura modular, injeção de dependência e suporte nativo a REST + GraphQL
- Bun oferece performance superior ao Node.js para I/O e startup
- TypeORM permite modelagem por decorators com migrations automáticas
- Ecossistema TypeScript compartilhado com o frontend (Nuxt)

**Negativas:**
- Bun ainda é relativamente novo — possíveis incompatibilidades com pacotes npm
- TypeORM tem limitações conhecidas com queries complexas (mitigado por query builder)

## Alternativas consideradas

1. **Express + Prisma** — descartado por falta de estrutura modular
2. **Fastify** — descartado por ecossistema menor de plugins para GraphQL
3. **Node.js puro** — descartado; Bun oferece performance superior sem sacrifício de compatibilidade

---

*Decisão tomada pela equipe Ladesa. Confirmada pela estrutura do repositório `management-service/`.*
