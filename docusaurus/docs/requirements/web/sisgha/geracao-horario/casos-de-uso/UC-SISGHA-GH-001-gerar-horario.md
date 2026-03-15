---
id: UC-SISGHA-GH-001
tipo: caso-de-uso
modulo: SISGHA
rastreia_de: [US-SISGHA-GH-001, US-SISGHA-GH-008, US-SISGHA-GH-009]
rastreia_para: [BDD-SISGHA-GH-001, BDD-SISGHA-GH-003]
entidades-sql: [gerar_horario, gerar_horario_oferta_formacao, gerar_horario_calendario_letivo]
status: rascunho
fonte-primaria: levantamento-notebooklm
sidebar_label: "UC-GH-001 – Gerar horário"
---

# UC-SISGHA-GH-001 — Gerar horário acadêmico

## Informações gerais

| Campo | Valor |
|-------|-------|
| **Ator primário** | DAPE |
| **Atores secundários** | timetable-generator (sistema), management-service (sistema) |
| **Nível** | User Goal |
| **Escopo** | SISGHA |
| **Pré-condições** | DAPE autenticado; ao menos uma oferta de formação com diários configurados; calendário letivo ativo; horários de aula definidos para o campus |
| **Garantia de sucesso (pós-condições)** | Grade horária gerada e armazenada em `gerar_horario.resposta_gerador` com status `SUCESSO`; grade disponível para visualização |
| **Garantia mínima** | Registro `gerar_horario` criado com status `ERRO` e detalhes do problema armazenados em `resposta_gerador` |
| **Trigger** | DAPE clica em "Gerar Horário" no modal de geração |

## Cenário principal (fluxo de sucesso)

1. DAPE acessa o módulo de geração de horário (`/sisgha/dape/horario`).
2. DAPE clica em "Gerar Horário" e sistema exibe modal de configuração.
3. DAPE seleciona oferta(s) de formação e calendário(s) letivo(s) no escopo.
4. DAPE escolhe tipo de geração: **Permanente** (com data de início) ou **Temporário** (com data de término).
5. DAPE configura parâmetros opcionais: grade anterior para otimização incremental (pinning).
6. DAPE confirma a geração.
7. Sistema cria registro `gerar_horario` com status `SOLICITADO` e persiste `requisicao_gerador` (JSONB) com o `GenerateRequest` serializado.
8. Sistema publica mensagem na fila RabbitMQ para o timetable-generator (ADR-006).
9. Status atualiza para `PENDENTE`. Sistema exibe modal de loading com polling a cada 3s.
10. timetable-generator recebe o `GenerateRequest`, executa o solver CP-SAT com 10 constraints hard e sistema de scoring.
11. Solver retorna `ServiceGenerateResponse` com lista de `GeneratedTimetable[]` ordenadas por score.
12. management-service persiste `resposta_gerador` e atualiza status para `SUCESSO`.
13. Sistema exibe modal de sucesso com formações incluídas.
14. DAPE clica em "Visualizar Horário" e navega para a grade gerada.

## Extensões

**3a.** Nenhuma oferta de formação tem diários configurados:
1. Sistema exibe alerta: "As ofertas selecionadas não possuem diários configurados."
2. Botão de confirmação permanece desabilitado.
3. DAPE precisa configurar diários antes de prosseguir.

**5a.** DAPE fornece grade anterior (pinning):
1. Sistema inclui `previous_timetable_grid` no `GenerateRequest`.
2. Solver aplica boost weights para estabilidade (BoostSameDayOfWeekAndTimeSlot = 100).
3. Células da grade anterior tendem a manter posição.

**9a.** DAPE cancela a geração:
1. Sistema envia sinal de cancelamento.
2. Status muda para `ERRO` com motivo "Cancelado pelo usuário".
3. Modal fecha e DAPE retorna à tela anterior.

**10a.** Solver encontra infeasibilidade (sem solução possível):
1. Solver retorna `ServiceGenerateResponseResultError` com `error_code` e `error_message`.
2. management-service persiste erro e atualiza status para `ERRO`.
3. Sistema exibe modal de erro com botão "Ver detalhes".
4. DAPE acessa log de conflitos (UC-SISGHA-GH-001 extensão → UC-SISGHA-GH-002 para edição manual).

**10b.** Solver demora mais que o timeout:
1. [a definir — timeout máximo não configurado ainda]

**12a.** Horário permanente substitui vigente:
1. Sistema desativa grade anterior da mesma oferta de formação.
2. Nova grade entra em vigência a partir de `data_inicio`.

## Constraints aplicadas pelo solver

Referência completa: [Constraints do Solver](../constraints-solver.md)

1. Turma: sem aula duplicada no mesmo slot
2. Professor: sem aula duplicada no mesmo slot
3. Diário: limite semanal de aulas
4. Diário: limite total de aulas restantes
5. Professor: buffer de almoço (11:30–13:30)
6. Turma: buffer de almoço (11:30–13:30)
7. Professor: sem turnos opostos no mesmo dia
8. Professor: 12h de descanso após noturno
9. Turma: sem sobreposição de horários
10. Professor: sem sobreposição de horários

## Contrato de dados

Referência completa: [Contrato do Solver (TypeSpec)](../contrato-solver.md)

**Input:** `GenerateRequest` com groups, teachers, diaries, time_slots, date range, grade anterior opcional.
**Output:** `ServiceGenerateResponse` — sucesso (grades + scores) ou erro (code + message).

---

*Fonte: Relatório NotebookLM Seções 4, 5, 11. TypeSpec: `messages/apis/timetable-generator-v1/src/`. Solver: `timetable-generator/Core/Generator/Generator.cs`.*
