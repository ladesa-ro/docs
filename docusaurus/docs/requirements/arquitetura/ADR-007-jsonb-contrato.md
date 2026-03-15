---
sidebar_position: 8
sidebar_label: "ADR-007: JSONB Contrato"
---

# ADR-007 — JSONB para requisicao_gerador e resposta_gerador

## Status

**Aceito** (contrato especificado em TypeSpec — DSC-002 resolvido)

## Contexto

A tabela `gerar_horario` precisa armazenar o payload enviado ao timetable-generator (input do solver) e a resposta recebida (output: grade gerada ou erro detalhado). O formato desses dados pode evoluir à medida que novas constraints são adicionadas ao solver.

## Decisão

Usar campos **JSONB** no PostgreSQL para `requisicao_gerador` e `resposta_gerador` na tabela `gerar_horario`, em vez de tabelas relacionais normalizadas.

## Consequências

**Positivas:**
- Flexibilidade — o schema do contrato pode evoluir sem migrations destrutivas
- Indexação parcial — PostgreSQL permite índices GIN em caminhos JSONB específicos
- Auditoria — cada geração preserva o snapshot exato dos dados enviados e recebidos
- Performance de leitura — acesso direto ao JSON sem JOINs complexos

**Negativas:**
- Sem validação de schema no banco — erros de formato detectados apenas em runtime
- Queries analíticas sobre JSONB são menos performantes que tabelas normalizadas
- O contrato entre os serviços precisa ser documentado externamente (TypeSpec ou ADR dedicado)

## Contrato especificado

O contrato foi localizado em TypeSpec: `messages/apis/timetable-generator-v1/src/`. A documentação completa está em:

- **[Contrato do Solver (TypeSpec)](../web/sisgha/geracao-horario/contrato-solver.md)** — schema de request e response
- **[Constraints do Solver](../web/sisgha/geracao-horario/constraints-solver.md)** — 10 constraints + sistema de scoring

### Resumo do contrato

**Input (`requisicao_gerador`):** `GenerateRequest` com groups, teachers, diaries, time_slots, date range e grade anterior opcional.

**Output (`resposta_gerador`):** `ServiceGenerateResponse` — discriminated union:
- **Sucesso:** lista de `GeneratedTimetable[]` ordenadas por score (cada uma com grid de schedules)
- **Erro:** `error_code`, `error_message`, `additional_info`

**Disponibilidade:** modelada via RRule (RFC 5545) — regras de recorrência iCalendar para indisponibilidades de professores e turmas.

**Scoring:** 5 boost parameters para estabilidade quando regenerando a partir de grade anterior (implementação do pinning).

### Questões residuais

- [ ] O `error_code` tem enum definido ou é string livre?
- [ ] Como são representados erros parciais (grade com conflitos não totalmente resolvidos)?

---

*Decisão tomada pela equipe Ladesa. Confirmada pelo campo JSONB em `artefatos/modelagem/LADESA.sql`. Contrato em `messages/apis/timetable-generator-v1/src/`.*
