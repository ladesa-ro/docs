---
sidebar_position: 7
sidebar_label: Mensageria (TypeSpec + RabbitMQ)
---

# Mensageria — Contratos TypeSpec + RabbitMQ

A comunicação entre a API e o solver de geração de horário é feita de forma assíncrona via RabbitMQ, com contratos definidos em TypeSpec.

## TypeSpec — Contratos de mensagem

O repositório `messages/` contém as definições de contrato usando [TypeSpec](https://typespec.io/), no namespace `Ladesa.Messages.TimetableGenerator.v1`.

### Estrutura

```
messages/apis/timetable-generator-v1/src/
├── main.tsp                         # Entry point
├── vos/                             # Value Objects
│   ├── time_slot.tsp                # Slots de tempo
│   └── weekday.tsp                  # Dias da semana
├── entities/                        # Entidades do domínio
│   ├── availability.tsp             # Disponibilidade
│   ├── diary.tsp                    # Diário
│   ├── generated_timetable.tsp      # Grade gerada
│   ├── group.tsp                    # Grupo/Turma
│   ├── subject.tsp                  # Disciplina
│   ├── teacher.tsp                  # Professor
│   ├── timetable_grid.tsp           # Grid de horário
│   └── timetable_grid_schedule.tsp  # Configuração do grid
└── commands/generate/               # Comandos
    ├── generate_request.tsp         # Requisição de geração
    └── generate_response.tsp        # Resposta da geração
```

Os contratos são compilados e publicados como:
- **Pacote NuGet** (`Ladesa.Messages.TimetableGenerator.V1`) para o solver em C#
- **Schemas JSON** gerados em `tsp-output/` para validação

## RabbitMQ — Mensageria assíncrona

O RabbitMQ é o broker de mensagens que conecta a API ao solver:

- A **API** publica mensagens de solicitação de geração na fila
- O **solver** consome as mensagens, processa e retorna o resultado
- Comunicação desacoplada — a API não precisa esperar o solver responder sincronamente

### Configuração local

O solver inclui um `docker-compose.yml` com RabbitMQ:

```bash
cd timetable-generator
docker compose up -d message-broker
```

Isso sobe o RabbitMQ na porta `5672` (AMQP) e `15672` (management UI).

## Links úteis

- [Repositório Messages](https://github.com/ladesa-ro/messages)
- [Contrato do Solver](../../requirements/web/sisgha/geracao-horario/contrato-solver.md)
- [ADR-004 — TypeSpec](../../requirements/arquitetura/ADR-004-typespec.md)
- [ADR-006 — RabbitMQ](../../requirements/arquitetura/ADR-006-rabbitmq.md)
