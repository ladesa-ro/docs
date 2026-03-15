---
sidebar_position: 5
sidebar_label: "ADR-004: TypeSpec"
---

# ADR-004 — TypeSpec para contratos inter-serviço

## Status

**Aceito**

## Contexto

O sistema possui múltiplos serviços (management-service, timetable-generator, authentication-service) que trocam mensagens e expõem APIs. Os contratos entre esses serviços precisam ser formalizados para evitar breaking changes silenciosas.

## Decisão

Usar **TypeSpec** (`messages/`) como linguagem de definição de contratos para APIs e mensagens entre serviços. TypeSpec gera automaticamente schemas OpenAPI, tipos TypeScript e documentação.

## Consequências

**Positivas:**
- Contratos são a fonte de verdade — geração de código garante consistência
- Syntax concisa comparada a OpenAPI YAML puro
- Suporte a geração de tipos para TypeScript (frontend e backend)
- Validação em tempo de build — erros de contrato detectados antes do deploy

**Negativas:**
- Ferramenta relativamente nova — ecossistema menor que Protobuf ou OpenAPI puro
- Curva de aprendizado para novos membros da equipe
- Geração para C# (timetable-generator) pode requerer adaptadores manuais

## Alternativas consideradas

1. **Protocol Buffers (Protobuf)** — descartado; orientado a RPC binário, menos adequado para REST/GraphQL
2. **OpenAPI YAML manual** — descartado por verbosidade e propensão a erros
3. **GraphQL SDL** — usado para a API GraphQL, mas não cobre mensageria RabbitMQ

---

*Decisão tomada pela equipe Ladesa. Confirmada pelo repositório `messages/`.*
