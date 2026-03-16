---
sidebar_position: 2
sidebar_label: "ADR-001: Nuxt Unificado"
---

# ADR-001 — Frontend unificado Nuxt para SISGHA e SISGEA

## Status

**Aceito**

## Contexto

O Ladesa possui dois sistemas (SISGHA e SISGEA) com públicos parcialmente sobrepostos. O DAPE opera ambos. Separar em dois frontends geraria duplicação de componentes (header, sidebar, login, design system) e inconsistência de UX.

## Decisão

Usar uma única aplicação **Nuxt 4 + Vue 3 + Tailwind v4** (`web/`) que serve ambos os sistemas, com rotas separadas por prefixo (`/sisgha/...` e `/sisgea/...`) e layouts distintos por perfil.

## Consequências

**Positivas:**
- Componentes de UI compartilhados (design system único)
- Sessão e autenticação unificadas via Keycloak
- Deploy simplificado (um único artefato)
- UX consistente entre os dois sistemas

**Negativas:**
- Bundle maior (mitigado por code splitting do Nuxt)
- Acoplamento de deploy — mudança no SISGEA requer redeploy do SISGHA
- Complexidade de rotas e guards de acesso por perfil

## Alternativas consideradas

1. **Dois SPAs separados** — descartado por duplicação de componentes e inconsistência de UX
2. **Micro-frontends** — descartado por complexidade excessiva para o tamanho da equipe

---

*Decisão tomada pela equipe Ladesa. Confirmada pela estrutura do repositório `web/`.*
