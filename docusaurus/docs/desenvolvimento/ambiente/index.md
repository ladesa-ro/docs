---
sidebar_position: 1
sidebar_label: Visão Geral
---

# Ambiente de Desenvolvimento

Para contribuir com o Ladesa, você precisa configurar seu ambiente local com as ferramentas adequadas para cada serviço.

## Pré-requisitos

| Ferramenta | Versão mínima | Usado por |
|-----------|-------------|-----------|
| Git | 2.x | Todos os repositórios |
| Node.js | 20.x | web, management-service, docs |
| Bun | 1.x | management-service, docs |
| pnpm | 10.x | web (frontend Nuxt) |
| Docker + Docker Compose | 24.x | Infraestrutura local |
| .NET SDK | 9.0 | timetable-generator |
| Flutter | 3.x | mobile |

:::tip Nem tudo é obrigatório
Você só precisa instalar as ferramentas do serviço no qual vai trabalhar. Se vai contribuir apenas com o frontend web, basta Git, Node.js e pnpm.
:::

## Serviços de infraestrutura

Os seguintes serviços são necessários para rodar o sistema completo localmente. Todos podem ser iniciados via Docker:

| Serviço | Imagem Docker | Porta |
|---------|--------------|-------|
| PostgreSQL 15 | `postgres:15` | 5432 |
| Redis | `redis:alpine` | 6379 |
| RabbitMQ | `rabbitmq:3.13-alpine` | 5672 / 15672 (UI) |
| Keycloak 25.0 | `quay.io/keycloak/keycloak:25.0.0` | 8080 |

## Próximos passos

- [Instalação de Ferramentas](./ferramentas) — Guia de instalação detalhado
- [Executar Localmente](./executar-local) — Como subir o sistema completo
