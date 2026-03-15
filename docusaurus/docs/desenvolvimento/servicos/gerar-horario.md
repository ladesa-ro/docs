---
sidebar_position: 4
sidebar_label: Gerar Horário (Solver)
---

# Gerar Horário — timetable-generator

O timetable-generator é o solver de otimização do Ladesa. Ele recebe solicitações de geração de horário via fila RabbitMQ, aplica constraints de programação por restrições (CP-SAT), e retorna a grade otimizada.

## Stack

| Tecnologia | Versão | Papel |
|-----------|--------|-------|
| C# | — | Linguagem |
| .NET | 9.0 | Runtime |
| Google OR-Tools CP-SAT | — | Solver de constraint programming |
| RabbitMQ.Client | 7.x | Consumo de mensagens |
| Polly | 8.x | Resiliência (retry, circuit breaker) |
| ASP.NET Core | — | Worker service + health checks |

## Como funciona

1. A API (management-service) envia um `GenerateRequest` para uma fila RabbitMQ
2. O solver consome a mensagem e monta o modelo CP-SAT com as constraints
3. O solver executa a otimização e retorna um `ServiceGenerateResponse` pela fila
4. A API recebe a resposta e persiste a grade no banco de dados

## Constraints implementadas

O solver aplica restrições como:

- Não alocar dois professores na mesma sala/horário
- Respeitar indisponibilidades (PRD) dos professores
- Agrupar aulas germinadas conforme preferências
- Respeitar limites de turnos por dia por professor
- Validar disponibilidade de ambientes (integração com SISGEA)

Para detalhes completos, veja [Constraints do Solver](../../requirements/web/sisgha/geracao-horario/constraints-solver.md).

## Estrutura do projeto

```
timetable-generator/Ladesa.TimetableGenerator.v1/
├── Core/           # Lógica central do algoritmo
├── Core.Test/      # Testes unitários
└── Service/        # Worker service + API
```

## Como rodar

```bash
# Rodar o solver
dotnet run --project Service

# Rodar testes
dotnet test
```

Requer RabbitMQ rodando. O `docker-compose.yml` na raiz do repositório sobe o RabbitMQ automaticamente:

```bash
docker compose up -d message-broker
```

## Contrato de mensagens

O contrato entre a API e o solver é definido em TypeSpec e publicado como pacote NuGet (`Ladesa.Messages.TimetableGenerator.V1`). Veja [Contrato do Solver](../../requirements/web/sisgha/geracao-horario/contrato-solver.md).

## Links úteis

- [Repositório GitHub](https://github.com/ladesa-ro/gerar-horario-core)
- [Contrato do Solver](../../requirements/web/sisgha/geracao-horario/contrato-solver.md)
- [Constraints do Solver](../../requirements/web/sisgha/geracao-horario/constraints-solver.md)
- [ADR-003 — OR-Tools CP-SAT](../../requirements/arquitetura/ADR-003-or-tools-cpsat.md)
- [ADR-006 — RabbitMQ](../../requirements/arquitetura/ADR-006-rabbitmq.md)
