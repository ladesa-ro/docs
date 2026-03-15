---
sidebar_position: 1
sidebar_label: Visão Geral de Arquitetura
---

# DOC-010 — Visão Geral de Arquitetura

## Arquitetura de alto nível

O Ladesa adota uma arquitetura de **microsserviços desacoplados** conectados por mensageria assíncrona, com um frontend unificado que serve ambos os sistemas (SISGHA e SISGEA).

```
┌────────────────────────────────────────────────────────────────────┐
│                         CLIENTES                                    │
│                                                                     │
│  ┌──────────┐    ┌──────────────┐                                  │
│  │ Web      │    │ Mobile       │                                  │
│  │ (Nuxt 4) │    │ (Flutter)    │                                  │
│  └────┬─────┘    └──────┬───────┘                                  │
│       │                  │                                          │
│       └──────┬───────────┘                                          │
│              │ HTTPS                                                │
├──────────────┼──────────────────────────────────────────────────────┤
│              ▼           BACKEND                                    │
│  ┌─────────────────────┐                                           │
│  │  Keycloak 25.0      │◄─── SSO / OAuth2 / OIDC                  │
│  │  (authentication)   │                                           │
│  └─────────────────────┘                                           │
│              │                                                      │
│  ┌─────────────────────┐     ┌──────────┐     ┌──────────────────┐│
│  │ management-service  │◄───►│ RabbitMQ │◄───►│ timetable-gen.   ││
│  │ (NestJS + Bun)      │     │ (fila)   │     │ (C# + OR-Tools)  ││
│  └────────┬────────────┘     └──────────┘     └──────────────────┘│
│           │                                                        │
│  ┌────────┴────────┐                                               │
│  │  PostgreSQL 15  │     ┌───────┐                                 │
│  │  (persistência)  │     │ Redis │ (cache)                        │
│  └─────────────────┘     └───────┘                                 │
├────────────────────────────────────────────────────────────────────┤
│                      INFRAESTRUTURA                                 │
│  Docker → Kubernetes                                                │
└────────────────────────────────────────────────────────────────────┘
```

## Decisões arquiteturais

Cada decisão técnica está documentada como um ADR (Architecture Decision Record) nesta seção:

| ADR | Decisão | Motivação principal |
|---|---|---|
| [ADR-001](./ADR-001-nuxt-unificado) | Frontend unificado Nuxt para SISGHA + SISGEA | Reutilização de componentes, UX consistente |
| [ADR-002](./ADR-002-nestjs-bun) | NestJS + Bun no backend | Performance + ecossistema TypeScript |
| [ADR-003](./ADR-003-or-tools-cpsat) | Google OR-Tools CP-SAT como solver | Solver open-source de referência para timetabling |
| [ADR-004](./ADR-004-typespec) | TypeSpec para contratos inter-serviço | Type-safety entre serviços, geração de código |
| [ADR-005](./ADR-005-keycloak) | Keycloak 25.0 para SSO | Padrão open-source, suporte OIDC, federação |
| [ADR-006](./ADR-006-rabbitmq) | RabbitMQ para mensageria assíncrona | Desacoplamento do solver, retry nativo |
| [ADR-007](./ADR-007-jsonb-contrato) | JSONB para contrato com o solver | Flexibilidade durante evolução do contrato |
| [ADR-008](./ADR-008-flutter-mobile) | Flutter para app mobile | Multiplataforma, performance nativa, tema dinâmico |

## Princípios arquiteturais

1. **Desacoplamento via mensageria**: o timetable-generator não conhece o management-service diretamente — comunicação exclusivamente via fila RabbitMQ.
2. **Frontend unificado**: SISGHA e SISGEA compartilham a mesma aplicação Nuxt, com rotas e layouts separados por sistema.
3. **Soft delete universal**: nenhuma entidade é excluída fisicamente — campo `date_deleted` em todas as tabelas.
4. **UUID como identificador**: todas as entidades usam UUID v4, eliminando conflitos de ID entre ambientes.
5. **Geração assíncrona**: a geração de horário é um background job — o usuário não fica bloqueado esperando o solver.

---

*Fonte: Repositórios GitHub ladesa-ro, `artefatos/modelagem/LADESA.sql`, relatório NotebookLM Seção 11.*
