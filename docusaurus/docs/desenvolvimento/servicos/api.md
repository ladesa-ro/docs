---
sidebar_position: 2
sidebar_label: API (management-service)
---

# API — management-service

O management-service é a API REST principal do Ladesa. Gerencia todas as entidades do sistema (campus, cursos, turmas, diários, professores, ambientes, etc.).

## Stack

| Tecnologia | Versão | Papel |
|-----------|--------|-------|
| NestJS | 11.x | Framework HTTP |
| Bun | 1.x | Runtime e package manager |
| TypeORM | 0.3.x | ORM para PostgreSQL |
| PostgreSQL | 15 | Banco de dados |
| Apollo GraphQL | 5.x | API GraphQL |
| Swagger / Scalar | — | Documentação da API |
| Passport + Keycloak | — | Autenticação |
| Rascal (RabbitMQ) | 21.x | Mensageria com o solver |

## Estrutura de módulos

O código está organizado em módulos de domínio dentro de `src/modules/`:

| Módulo | Descrição |
|--------|-----------|
| `acesso/` | Controle de acesso — usuários, perfis, autenticação |
| `ensino/` | Gestão acadêmica — cursos, turmas, diários, disciplinas, ofertas de formação |
| `ambientes/` | SISGEA — blocos, ambientes, reservas |
| `horarios/` | SISGHA — geração de horário, configurações de horário de aula |
| `estagio/` | Gestão de estágios |
| `localidades/` | Campus, endereços, cidades, estados (códigos IBGE) |
| `armazenamento/` | Upload e gestão de arquivos e imagens |
| `@seguranca/` | Módulo interno de segurança |
| `@shared/` | Utilitários compartilhados |

Cada módulo segue o padrão: controllers em `presentation.rest/`, DTOs, entities TypeORM.

## Como rodar

```bash
# Instalar dependências
bun install

# Rodar em modo desenvolvimento
bun run start:dev
```

Requer PostgreSQL, Redis e Keycloak rodando. Veja [Executar Localmente](../ambiente/executar-local) para o setup completo.

## Links úteis

- [Repositório GitHub](https://github.com/ladesa-ro/api)
- [Endpoints Implementados](../../requirements/arquitetura/endpoints-implementados.md)
- [ADR-002 — NestJS + Bun](../../requirements/arquitetura/ADR-002-nestjs-bun.md)
- [Documentação Swagger](https://dev.ladesa.com.br/api/doc-api)
