---
id: US-SISGHA-GH-004
tipo: user-story
modulo: SISGHA
endereco: "1.4"
epico: EP-SISGHA-GH-001
perfil-principal: P-DAPE
tags: [P-DAPE]
rastreia_para: [RF-SISGHA-GH-004]
status: rascunho
fonte-primaria: levantamento-notebooklm
fonte-secao: "Seção 4 — RF-SISGHA-004"
sidebar_label: "[DAPE] US-SISGHA-GH-004 – Drag & drop"
---

# [DAPE] US-SISGHA-GH-004 — [1.4] Editar grade visual com drag & drop

## Descrição

**Como** DAPE,
**quero** editar a grade de horário arrastando aulas entre slots,
**para que** ajustes manuais sejam rápidos e intuitivos.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Grade visual de horário com células arrastáveis. Slots válidos se destacam em verde ao arrastar; slots com conflito ficam em vermelho. | `[RI-01]` Ao iniciar drag, slots válidos para drop se destacam (feedback visual imediato) <br/> `[RI-02]` Ao tentar drop em slot com conflito, exibe tooltip com motivo do choque <br/> `[RI-03]` Células travadas (pinning) não podem ser arrastadas — cursor "not-allowed" |

## Regras de Negócio

`[RN-01]` Ao mover uma aula para um novo slot, o sistema valida instantaneamente se há choque (professor em duas turmas, sala ocupada).

`[RN-02]` Se houver choque, exibe o motivo específico (BR-SISGHA-008 — transparência).

`[RN-03]` Edições na grade de horário afetam apenas a semana em edição (BR-SISGHA-VH-001).

## Fluxos

`[FP-01]` **Fluxo Principal — Mover aula via drag & drop**
1. DAPE seleciona uma célula da grade (não travada).
2. Arrasta para um novo slot no mesmo dia ou em outro dia.
3. Sistema valida instantaneamente: sem choque de professor, sem choque de turma, sem sobreposição de horário.
4. Se válido, célula é depositada no novo slot.
5. Sistema persiste a alteração.

`[FE-01]` **Fluxo de Exceção — Conflito detectado**
1. DAPE tenta depositar aula em slot com conflito.
2. Sistema rejeita o drop e exibe tooltip: "Prof. [nome] já tem aula com [turma] neste horário."
3. Célula retorna à posição original.

## Ações

| ID | Título | Tela | Ação |
|----|--------|------|------|
| `[AC-01]` | Validar drop | Grade de horário | Verifica choques de professor, turma e sala |
| `[AC-02]` | Persistir movimentação | Grade de horário | Atualiza schedule no backend |
| `[AC-03]` | Desfazer (undo) | Grade de horário | Reverte última movimentação (Ctrl+Z) |

## Mensagens

| ID | Mensagem | Tipo | Contexto |
|----|----------|------|---------|
| `[MS-01]` | "Prof. [nome] já tem aula com [turma] neste horário." | Erro inline | Drop inválido — choque de professor |
| `[MS-02]` | "[Turma] já tem aula neste horário." | Erro inline | Drop inválido — choque de turma |

## Critérios de Aceitação

- `[CA-01]` Drag & drop funciona entre slots do mesmo dia e entre dias
- `[CA-02]` Conflitos são detectados e exibidos instantaneamente (< 200ms)
- `[CA-03]` Células travadas não podem ser arrastadas
- `[CA-04]` Undo disponível para reverter última ação

## Questões em aberto

- [ ] Suporte a multi-select (arrastar múltiplas aulas de uma vez)?
- [ ] Integração com SISGEA para validar sala ocupada durante o drop?

---

*Fonte: Relatório NotebookLM, Seção 4 (RF-SISGHA-004) — DAPE Ji-Paraná [06:17].*
