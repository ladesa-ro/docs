---
sidebar_position: 3
sidebar_label: Stack Tecnológica
---

# Stack Tecnológica

## Repositórios e tecnologias

| Repositório | Tecnologia | Papel no sistema |
|---|---|---|
| `web/` | Nuxt 4 + Vue 3 + Tailwind v4 | Frontend unificado SISGHA + SISGEA (web) |
| `management-service/` | NestJS + Bun + TypeORM + PostgreSQL | API REST + GraphQL — backend principal |
| `messages/` | TypeSpec | Contratos de API e mensagens entre serviços |
| `timetable-generator/` | C# + Google OR-Tools CP-SAT | Solver de otimização para geração de grades horárias |
| `mobile/` | Flutter (Dart) | App mobile SISGHA — Aluno e Professor (tema claro/escuro) |
| `authentication-service/` | Keycloak 25.0 | SSO — autenticação e autorização |
| `docs/` | Docusaurus 3 | Documentação do projeto |

## Infraestrutura

| Componente | Tecnologia | Função |
|---|---|---|
| Banco de dados | PostgreSQL 15 | Persistência principal |
| Mensageria | RabbitMQ | Comunicação assíncrona entre management-service e timetable-generator |
| Cache | Redis | Cache de sessões e dados frequentes |
| Containerização | Docker | Empacotamento dos serviços |
| Orquestração | Kubernetes | Deploy e escalabilidade em produção |
| Package manager | Bun | Gerenciador de pacotes do frontend e backend Node.js |

## Fluxo de comunicação entre serviços

```
┌──────────┐     HTTP/GraphQL      ┌─────────────────────┐
│  web/    │ ◄──────────────────► │  management-service/ │
│  (Nuxt)  │                       │  (NestJS + Bun)      │
└──────────┘                       └──────────┬──────────┘
                                              │
                                              │ RabbitMQ (fila)
                                              ▼
                                   ┌─────────────────────┐
                                   │ timetable-generator/ │
                                   │ (C# + OR-Tools)      │
                                   └─────────────────────┘
```

1. O **frontend** (Nuxt) se comunica com o **management-service** via HTTP REST e GraphQL.
2. Quando o DAPE solicita geração de horário, o management-service cria um registro `gerar_horario` com status `SOLICITADO` e envia uma mensagem para a **fila RabbitMQ**.
3. O **timetable-generator** consome a mensagem, processa a geração usando o solver CP-SAT, e retorna o resultado pela fila.
4. O management-service atualiza o status para `SUCESSO` ou `ERRO` e armazena o resultado em JSONB.
5. O frontend faz polling do status até a conclusão.

## Autenticação

O **Keycloak 25.0** gerencia SSO (Single Sign-On) para todos os serviços. O controle de acesso é baseado em perfis:

| Perfil | Acesso web | Acesso mobile | Acesso API |
|---|---|---|---|
| P-DAPE | Total | N/A | Total |
| P-PROF | Consulta + agenda | Consulta + disponibilidade | Leitura + escrita própria |
| P-ALUNO | Consulta | Consulta | Leitura |

## Banco de dados

- **Engine:** PostgreSQL 15
- **Modelagem-alvo:** definida em `artefatos/modelagem/LADESA.sql`
- **ORM:** TypeORM (management-service)
- **IDs:** UUID v4 para todas as entidades
- **Soft delete:** campo `date_deleted` (timestamptz) em todas as tabelas principais
- **Auditoria:** campos `date_created` e `date_updated` automáticos

---

*Fonte: Repositórios do GitHub ladesa-ro, arquivo de modelagem `artefatos/modelagem/LADESA.sql`.*
