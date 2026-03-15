---
id: US-SISGHA-GH-006
tipo: user-story
modulo: SISGHA
endereco: "1.6"
epico: EP-SISGHA-GH-001
perfil-principal: P-DAPE
tags: [P-DAPE]
rastreia_para: [RF-SISGHA-GH-006]
status: rascunho
fonte-primaria: levantamento-notebooklm
fonte-secao: "Seção 4 — RF-SISGHA-006"
sidebar_label: "[DAPE] US-SISGHA-GH-006 – Alerta turnos opostos"
---

# [DAPE] US-SISGHA-GH-006 — [1.6] Ver alerta de professor em turnos opostos

## Descrição

**Como** DAPE,
**quero** receber um alerta quando um professor estiver alocado nos turnos Manhã e Noite no mesmo dia,
**para que** eu evite sobrecarga de trabalho e deslocamento excessivo.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Ícone de alerta (triângulo amarelo) na célula do professor quando há alocação em turnos opostos no mesmo dia | `[RI-01]` Alerta aparece como badge na célula do professor na grade de horário <br/> `[RI-02]` Tooltip ao hover explica o motivo: "Prof. [nome] está alocado em turnos opostos (Manhã e Noite) no dia [data]" <br/> `[RI-03]` Alerta é informativo, não bloqueante — DAPE pode optar por manter |

## Regras de Negócio

`[RN-01]` Professor não pode atuar nos três turnos (M, T, N) em um único dia (BR-SISGHA-GH-001).

`[RN-02]` O sistema deve alertar se houver alocação em turnos extremos (Manhã + Noite no mesmo dia).

`[RN-03]` **No solver, a regra é mais restritiva:** `ConstraintTeacherNoOppositeTurns` proíbe M+N e T+N no mesmo dia. Apenas combinações adjacentes (M, T, M+T, ou turno único) são permitidas.

`[RN-04]` Adicionalmente, `ConstraintTeacher12Hours` garante que professor com aula noturna tem mínimo de 12h de descanso antes da próxima aula no dia seguinte (BR-SOLVER-003).

## Fluxos

`[FP-01]` **Fluxo Principal — Visualizar alertas na grade**
1. DAPE visualiza a grade de horário.
2. Sistema analisa alocações e identifica professores em turnos opostos.
3. Exibe ícone de alerta nas células afetadas.
4. DAPE pode hover para ver detalhes.

`[FE-01]` **Fluxo de Exceção — Tentativa manual de alocar em turnos opostos**
1. DAPE tenta arrastar aula de professor para turno oposto (M→N ou N→M) no mesmo dia.
2. Sistema bloqueia o drop se o solver tiver a constraint ativa.
3. Exibe motivo: "Combinação de turnos Manhã + Noite não permitida para o mesmo dia."

## Ações

| ID | Título | Tela | Ação |
|----|--------|------|------|
| `[AC-01]` | Detectar turnos opostos | Grade de horário | Analisa alocações por professor/dia e marca conflitos |
| `[AC-02]` | Exibir alerta | Grade de horário | Renderiza badge + tooltip nas células afetadas |

## Mensagens

| ID | Mensagem | Tipo | Contexto |
|----|----------|------|---------|
| `[MS-01]` | "Prof. [nome] está alocado em turnos opostos (Manhã e Noite) neste dia." | Alerta | Tooltip na grade |
| `[MS-02]` | "Combinação de turnos Manhã + Noite não permitida para o mesmo dia." | Erro | Tentativa de drag & drop bloqueada |

## Critérios de Aceitação

- `[CA-01]` Alertas aparecem corretamente para combinações M+N no mesmo dia
- `[CA-02]` Solver rejeita grades com turnos opostos (M+N, T+N)
- `[CA-03]` Drag & drop bloqueado quando resulta em turnos opostos

## Questões em aberto

- [ ] BR-SISGHA-GH-001 diz "três turnos" mas o solver proíbe T+N e M+N — qual é a regra correta?
- [ ] O alerta deve ser bloqueante ou apenas informativo na edição manual?

---

*Fonte: Relatório NotebookLM, Seção 4 (RF-SISGHA-006) — DAPE Ji-Paraná [03:52]. Solver: `ConstraintTeacherNoOppositeTurns.cs`.*
