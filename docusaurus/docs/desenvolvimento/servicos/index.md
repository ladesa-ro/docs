---
sidebar_position: 1
sidebar_label: Visão Geral
---

# Serviços do Ladesa

O Ladesa é composto por serviços independentes que podem operar em conjunto ou individualmente. Todos são gratuitos e de código aberto.

| Serviço | Tecnologia | Repositório | Descrição |
|---------|-----------|-------------|-----------|
| **API** (management-service) | NestJS + Bun + TypeORM + PostgreSQL | [ladesa-ro/api](https://github.com/ladesa-ro/api) | API REST principal — CRUD de todas as entidades |
| **Gerar Horário** (timetable-generator) | C# + .NET 9 + Google OR-Tools CP-SAT | [ladesa-ro/gerar-horario-core](https://github.com/ladesa-ro/gerar-horario-core) | Solver de otimização (consome fila RabbitMQ) |
| **Web** | Nuxt 4 + Vue 3 + Tailwind v4 | [ladesa-ro/web](https://github.com/ladesa-ro/web) | Frontend unificado SISGHA + SISGEA |
| **Mobile** | Flutter (Dart) | [ladesa-ro/mobile](https://github.com/ladesa-ro/mobile) | App Android/iOS para Aluno e Professor |
| **Autenticação** | Keycloak 25.0 | [ladesa-ro/auth](https://github.com/ladesa-ro/auth) | SSO — OAuth2/OIDC |
| **Mensageria** (messages) | TypeSpec | [ladesa-ro/messages](https://github.com/ladesa-ro/messages) | Contratos de API entre serviços |
| **Documentação** (docs) | Docusaurus 3 | [ladesa-ro/docs](https://github.com/ladesa-ro/docs) | Este site de documentação |

## Infraestrutura

Os serviços dependem dos seguintes componentes de infraestrutura:

| Componente | Tecnologia | Papel |
|-----------|-----------|-------|
| Banco de dados | PostgreSQL 15 | Persistência principal |
| Cache | Redis | Cache de sessões e dados temporários |
| Mensageria | RabbitMQ | Comunicação assíncrona entre API e Solver |
| Autenticação | Keycloak 25.0 | SSO com OAuth2/OIDC |

## Arquitetura

O fluxo de dados principal é:

1. **Web/Mobile** se comunica com a **API** via HTTP REST
2. **API** gerencia todas as entidades no **PostgreSQL**
3. Para geração de horário, a **API** envia uma mensagem para o **RabbitMQ**
4. O **Gerar Horário** (solver) consome a mensagem, processa e retorna o resultado pela fila
5. **Keycloak** cuida da autenticação e autorização para todos os serviços

Para detalhes sobre a arquitetura, consulte os [ADRs](../arquitetura/visao-geral.md).
