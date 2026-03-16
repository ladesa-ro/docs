---
id: SPEC-SISGHA-GH-CONSTRAINTS
tipo: spec-tecnica
modulo: SISGHA
sidebar_position: 8
sidebar_label: "Constraints do Solver"
rastreia_de: [RF-SISGHA-GH-005, RF-SISGHA-GH-001, RF-SISGHA-GH-006]
rastreia_para: [BDD-SISGHA-GH-001, BDD-SISGHA-GH-003]
status: rascunho
fonte-primaria: codigo
---

# Constraints do Solver — timetable-generator

O timetable-generator implementa **10 constraints** no Google OR-Tools CP-SAT, aplicadas na ordem listada abaixo. Todas são **hard constraints** — o solver só retorna soluções que satisfazem todas simultaneamente.

**Fonte:** `timetable-generator/Ladesa.TimetableGenerator.v1/Core/Constraints/`

---

## Definições de turnos e buffers

Definidos em `Core/Constants/TimeSlotConstants.cs`:

| Constante | Intervalo | Função |
|-----------|-----------|--------|
| **MorningShift** | 00:00 – 11:59 | Turno da manhã |
| **AfternoonShift** | 12:00 – 17:59 | Turno da tarde |
| **NightShift** | 18:00 – 23:59 | Turno da noite |
| **LunchBufferBefore** | 11:30 – 12:00 | Buffer pré-almoço |
| **LunchBufferAfter** | 13:00 – 13:30 | Buffer pós-almoço |

Os buffers de almoço criam uma **janela protegida de 2 horas** (11:30 – 13:30) onde nenhuma aula pode terminar ou começar.

---

## Constraints — Ordem de aplicação

### 1. ConstraintGroupOneScheduleAtSameTime

**Regra:** Uma turma não pode ter mais de uma aula no mesmo slot de tempo no mesmo dia.

**Implementação:** Para cada combinação `(data, turma_id, time_slot)`, aplica `AddAtMostOne()` sobre todas as variáveis booleanas daquele slot.

**Mapeamento:** Constraint fundamental — sem equivalente direto em BR (é premissa do domínio).

---

### 2. ConstraintTeacherOneScheduleAtSameTime

**Regra:** Um professor não pode lecionar em mais de uma turma no mesmo slot de tempo no mesmo dia.

**Implementação:** Para cada combinação `(data, professor_id, time_slot)`, aplica `AddAtMostOne()`.

**Mapeamento:** Corresponde ao conceito de **Choque** no glossário do domínio.

---

### 3. ConstraintDiaryLimitSchedulesInOneWeek

**Regra:** Cada diário (vínculo professor-turma-disciplina) tem um limite máximo de aulas por semana (`week_limit`).

**Implementação:** Agrupa propostas por diário e semana ISO (segunda-feira como início). Para cada semana: `Sum(vars) <= diary.WeekLimit`. Desativada se `WeekLimit < 0`.

**Mapeamento:** Derivado da **Matriz** curricular — carga horária semanal por disciplina.

---

### 4. ConstraintDiaryLimitRemaining

**Regra:** Cada diário tem um total máximo de aulas a alocar no período (`remaining`).

**Implementação:** Para cada diário: `Sum(todas_vars_do_diário) <= diary.Remaining`. Desativada se `Remaining < 0`.

**Mapeamento:** Controle de carga horária total da disciplina no período.

---

### 5. ConstraintTeacherLunch

**Regra:** Um professor deve ter intervalo de almoço protegido. No máximo **uma** aula por dia pode tocar os buffers de almoço (terminar entre 11:30–12:00 OU começar entre 13:00–13:30).

**Implementação:** Identifica propostas onde `TimeSlot.End` está no `LunchBufferBefore` ou `TimeSlot.Start` está no `LunchBufferAfter`. Agrupa por `(data, professor_id)` e aplica `AddAtMostOne()`.

**Mapeamento:** Nova regra de negócio descoberta no código — não documentada anteriormente.

> **BR-SOLVER-001** — Buffer de almoço obrigatório para professores: intervalo protegido de 11:30 às 13:30.

---

### 6. ConstraintGroupLunch

**Regra:** Uma turma deve ter intervalo de almoço protegido, com a mesma lógica da constraint de professor.

**Implementação:** Idêntica à `ConstraintTeacherLunch`, mas agrupada por `(data, turma_id)`.

**Mapeamento:** Nova regra de negócio — alunos também têm almoço protegido.

> **BR-SOLVER-002** — Buffer de almoço aplica-se a professores **e** turmas separadamente.

---

### 7. ConstraintTeacherNoOppositeTurns

**Regra:** Um professor não pode atuar em turnos opostos no mesmo dia. Combinações permitidas:

| Manhã | Tarde | Noite | Permitido? |
|:-----:|:-----:|:-----:|:----------:|
| - | - | - | Sim |
| M | - | - | Sim |
| - | T | - | Sim |
| - | - | N | Sim |
| M | T | - | Sim |
| - | T | N | **Não** |
| M | - | N | **Não** |

**Implementação:** Para cada `(professor_id, data)`, cria variáveis booleanas indicadoras para cada turno e aplica `AddAllowedAssignments()` com as 6 combinações válidas (incluindo nenhum turno e turnos únicos).

**Mapeamento:** Corresponde diretamente a **BR-SISGHA-GH-001** ("Professor não pode atuar nos três turnos M/T/N no mesmo dia") — mas a implementação é mais restritiva: também proíbe T+N e M+N.

---

### 8. ConstraintTeacher12Hours

**Regra:** Um professor não pode trabalhar mais de 12 horas consecutivas. Se um professor tem aula no turno da noite terminando no horário E, ele não pode ter aula no dia seguinte antes de E + 12 horas.

**Implementação:**
1. Para cada professor e data, identifica aulas no turno da noite (≥18:00).
2. Para cada aula noturna com término E, calcula `limite = E + 12h`.
3. No dia seguinte, todas as aulas do mesmo professor que começam antes de `limite` são bloqueadas via implicação: `aula_noturna = true ⟹ aula_manhã_seguinte = false`.

**Mapeamento:** Nova regra de negócio descoberta no código.

> **BR-SOLVER-003** — Limite de 12 horas contínuas de trabalho: professor com aula noturna tem descanso protegido até 12h após o término.

---

### 9. ConstraintGroupNoOverlappingTimeSlots

**Regra:** Para uma turma no mesmo dia, nenhuma aula pode ter sobreposição temporal com outra (mesmo que parcial).

**Implementação:** Para cada `(data, turma_id)`, verifica todos os pares de propostas. Se `slotA.start < slotB.end && slotA.end > slotB.start`, aplica `AddAtMostOne([a, b])`.

**Nota:** Slots adjacentes (ex: 08:00–09:00 e 09:00–10:00) são **permitidos** — a comparação é estrita.

---

### 10. ConstraintTeacherNoOverlappingTimeSlots

**Regra:** Para um professor no mesmo dia, nenhuma aula pode ter sobreposição temporal com outra.

**Implementação:** Idêntica à constraint 9, mas agrupada por `(data, professor_id)`.

---

## Sistema de scoring

Após aplicar todas as constraints, o solver configura a **função objetivo** para maximizar a qualidade da grade.

### Score base

Cada aula alocada recebe `+1` ponto — incentiva o solver a alocar o máximo de aulas possível.

### Boost de estabilidade (quando `previous_timetable_grid` existe)

Quando uma grade anterior é fornecida (regeneração/ajuste), o solver aplica bonificações para minimizar mudanças:

| Critério | Peso | Descrição |
|----------|------|-----------|
| Mesmo dia + mesmo horário | +100 | Aula mantida exatamente na mesma posição |
| Mesmo dia da semana (horário diferente) | +50 | Dia mantido, horário mudou |
| Mesmo horário (dia diferente) | +50 | Horário mantido, dia mudou |
| Distância de dia da semana | +(7 - d) × 40 | d = distância circular (0–3.5) |
| Distância de horário | -(minutos) × 40 | Penalidade proporcional à distância temporal |

O objetivo `Maximize(score)` garante que o solver prefere soluções estáveis — é a implementação algorítmica do **pinning** (BR-SISGHA-006).

### Enumeração de soluções

O solver usa `enumerate_all_solutions:true` para encontrar **todas as soluções viáveis**. O processo é iterativo:
1. Encontra a solução com score mais alto.
2. Re-resolve com score máximo mais restrito.
3. Repete até score = 0.

As soluções são retornadas como `GeneratedTimetable[]` ordenadas por score decrescente.

---

## Mapeamento: Constraints → Regras de negócio

| Constraint | BR existente | BR nova | Observação |
|-----------|-------------|---------|------------|
| GroupOneScheduleAtSameTime | — | — | Premissa do domínio |
| TeacherOneScheduleAtSameTime | — | — | Choque (glossário) |
| DiaryLimitSchedulesInOneWeek | — | — | Derivado da Matriz |
| DiaryLimitRemaining | — | — | Carga horária total |
| **TeacherLunch** | — | **BR-SOLVER-001** | Buffer 11:30–13:30 para professor |
| **GroupLunch** | — | **BR-SOLVER-002** | Buffer 11:30–13:30 para turma |
| **TeacherNoOppositeTurns** | BR-SISGHA-GH-001 | — | Implementação mais restritiva que a BR original |
| **Teacher12Hours** | — | **BR-SOLVER-003** | 12h de descanso após noturno |
| GroupNoOverlappingTimeSlots | — | — | Premissa do domínio |
| TeacherNoOverlappingTimeSlots | — | — | Choque (glossário) |

### Novas regras de negócio descobertas

**BR-SOLVER-001 — Buffer de almoço obrigatório (professor)**
Nenhuma aula de um professor pode terminar entre 11:30–12:00 ou começar entre 13:00–13:30 no mesmo dia, garantindo intervalo mínimo contínuo para almoço.

**BR-SOLVER-002 — Buffer de almoço obrigatório (turma)**
A mesma regra de buffer se aplica às turmas independentemente dos professores.

**BR-SOLVER-003 — Limite de 12 horas contínuas**
Professor com aula terminando no turno da noite não pode ter aula no dia seguinte antes de completar 12 horas de descanso desde o término da aula noturna.

---

## Questões em aberto

- [ ] Os valores de buffer de almoço (11:30–13:30) são configuráveis por campus? Atualmente são constantes hardcoded.
- [ ] O limite de 12h é um requisito institucional do IFRO ou decisão de implementação?
- [ ] BR-SISGHA-GH-001 diz "não atuar nos três turnos" mas o código proíbe T+N e M+N — a implementação é mais restritiva. Qual é a regra correta?
- [ ] Não há constraint implementada para **aulas germinadas** (BR-SISGHA-003/DSC-007) — funcionalidade a ser adicionada?

---

*Fonte: `timetable-generator/Ladesa.TimetableGenerator.v1/Core/Constraints/` (10 classes C#) | `Core/Generator/Generator.cs` (orquestração e scoring)*
