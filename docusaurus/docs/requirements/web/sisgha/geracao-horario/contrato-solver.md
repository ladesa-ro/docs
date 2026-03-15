---
id: SPEC-SISGHA-GH-CONTRATO
tipo: spec-integracao
modulo: SISGHA
sidebar_position: 7
sidebar_label: "Contrato do Solver (TypeSpec)"
rastreia_de: [ADR-007, RF-SISGHA-GH-005]
rastreia_para: [UC-SISGHA-GH-001, BDD-SISGHA-GH-003]
entidades-sql: [gerar_horario]
status: rascunho
fonte-primaria: typespec
resolve: DSC-002
---

# Contrato JSONB do Solver — TypeSpec

Este documento especifica o contrato de dados entre o **management-service** e o **timetable-generator**, definido em TypeSpec no namespace `Ladesa.Messages.TimetableGenerator.v1`.

**Fonte:** `messages/apis/timetable-generator-v1/src/`

> Este documento **resolve a DSC-002** — o contrato JSONB que estava marcado como "não especificado" já existia em TypeSpec desde o início do projeto.

---

## Visão geral do fluxo

```
management-service                          timetable-generator
      │                                            │
      │── GenerateRequest (via RabbitMQ) ─────────>│
      │                                            │ (CP-SAT solver)
      │<── ServiceGenerateResponse ────────────────│
      │                                            │
      ▼                                            │
gerar_horario.requisicao_gerador (JSONB)           │
gerar_horario.resposta_gerador (JSONB)             │
```

O management-service serializa o `GenerateRequest` no campo `requisicao_gerador` e a `ServiceGenerateResponse` no campo `resposta_gerador` da tabela `gerar_horario`.

---

## GenerateRequest — Input do solver

```typespec
model GenerateRequest {
  request_id: string;        // Identificador único da requisição
  date_start: string;        // @format("date") — início do período
  date_end: string;          // @format("date") — fim do período
  groups: Group[];           // Turmas a considerar
  teachers: Teacher[];       // Professores disponíveis
  diaries: Diary[];          // Vínculos professor-turma-disciplina
  time_slots: TimeSlot[];    // Slots de tempo disponíveis para aulas
  previous_timetable_grid: TimetableGrid | null;  // Grade anterior (otimização incremental)
}
```

### Entidades do request

#### Group (Turma)

```typespec
model Group {
  id: string;
  availability: Availability;
}
```

#### Teacher (Professor)

```typespec
model Teacher {
  id: string;
  availability: Availability;
}
```

#### Availability (Disponibilidade — RFC 5545 RRule)

```typespec
model Availability {
  rules: AvailabilityRuleUnavailability[];
}

model AvailabilityRuleUnavailability {
  r_rule: string;          // Regra de recorrência no formato RRule (RFC 5545)
  date_start: string;      // @format("date") — início da vigência
  date_end: string | null;  // @format("date") — null = sem fim
}
```

A disponibilidade é modelada como **lista de indisponibilidades recorrentes**. Cada regra usa o padrão iCalendar RRule (RFC 5545), permitindo padrões complexos como "toda segunda-feira das 14:00 às 15:00 por 10 semanas".

#### Diary (Vínculo/Diário)

```typespec
model Diary {
  id: string;
  group_id: string;        // Referência à turma
  teacher_id: string;      // Referência ao professor
  subject_id: string;      // Referência à disciplina
  week_limit: uint16;      // Limite de aulas por semana
  remaining: uint16;       // Aulas restantes a alocar no período
}
```

O campo `week_limit` controla quantas aulas deste vínculo podem ocorrer por semana. O campo `remaining` controla o total de aulas ainda por alocar no período inteiro.

#### Subject (Disciplina)

```typespec
model Subject {
  id: string;
  name: string;
}
```

#### TimeSlot (Slot de tempo)

```typespec
model TimeSlot {
  start: string;   // @format("time") — HH:mm:ss
  end: string;     // @format("time") — HH:mm:ss
}
```

#### WeekDay (Dia da semana)

```typespec
enum WeekDay {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
}
```

---

## ServiceGenerateResponse — Output do solver

```typespec
model ServiceGenerateResponse {
  request_id: string;
  date_time_issued: string;   // @format("date-time")
  result: Result;
}

alias Result = ServiceGenerateResponseResultSuccess | ServiceGenerateResponseResultError;
```

### Resultado de sucesso

```typespec
model ServiceGenerateResponseResultSuccess {
  request_id: string;
  generate_request: GenerateRequest;             // Cópia do request original
  generated_timetables: GeneratedTimetable[];    // Grades geradas, ordenadas por score
}

model GeneratedTimetable {
  time_table: TimetableGrid;
  score: uint16;              // Pontuação de qualidade (maior = melhor)
}
```

O solver pode retornar **múltiplas grades ordenadas por score**, permitindo que o DAPE escolha entre soluções ótimas e alternativas.

### Grade horária gerada

```typespec
model TimetableGrid {
  date_start: string;         // @format("date")
  date_end: string;           // @format("date")
  time_slots: TimeSlot[];
  schedules: TimetableGridSchedule[];
}

model TimetableGridSchedule {
  date: string;               // @format("date") — data da aula
  diary_id: string;           // Vínculo professor-turma-disciplina
  teacher_id: string;
  group_id: string;
  time_slot: TimeSlot;        // Slot de tempo da aula
}
```

### Resultado de erro

```typespec
model ServiceGenerateResponseResultError {
  error_code: string;
  error_message: string;
  additional_info: string | null;
}
```

---

## Parâmetros de scoring (otimização incremental)

Quando `previous_timetable_grid` é fornecido, o solver aplica **boost weights** para priorizar estabilidade:

| Parâmetro | Valor padrão | Descrição |
|-----------|-------------|-----------|
| `BoostSameDayOfWeekAndTimeSlot` | 100 | Manter aula no mesmo dia e horário (prioridade máxima) |
| `BoostSameDayOfWeekOnly` | 50 | Manter aula no mesmo dia da semana |
| `BoostSameTimeSlotOnly` | 50 | Manter aula no mesmo horário |
| `BoostLesserDistanceFromDayOfWeek` | 40 | Minimizar distância circular de dia da semana |
| `BoostLesserDistanceFromTimeSlot` | 40 | Minimizar distância temporal em minutos |

A função objetivo é: `Maximize(score)` onde:
- Base: `+1` por aula alocada
- `+100` se aula mantém exatamente o mesmo dia+horário anterior
- `+50` se mantém mesmo dia da semana (horário diferente OK)
- `+50` se mantém mesmo horário (dia diferente OK)
- `+(7 - distância_circular) × 40` se dia precisou mudar
- `-(distância_em_minutos) × 40` se horário precisou mudar

Este sistema de scoring é o que implementa o **pinning** (BR-SISGHA-006) — aulas previamente alocadas têm forte incentivo a permanecer na mesma posição.

---

## Validações na entrada

O solver valida ao receber o request:

1. Cada `TimeSlot` deve ter `start < end` (sem slots de duração zero ou invertidos)
2. IDs de `Group`, `Teacher` e `Diary` devem ser únicos
3. Cada `Diary` deve referenciar um `Group` e um `Teacher` existentes no request

---

## Questões em aberto

- [ ] O campo `error_code` do `ServiceGenerateResponseResultError` tem um enum definido? Ou é string livre?
- [ ] Como são representados erros parciais (grade parcialmente gerada com conflitos)? O solver retorna grades com score mais baixo como alternativas?

---

*Fonte: TypeSpec em `messages/apis/timetable-generator-v1/src/` | Solver em `timetable-generator/Ladesa.TimetableGenerator.v1/Core/`*
