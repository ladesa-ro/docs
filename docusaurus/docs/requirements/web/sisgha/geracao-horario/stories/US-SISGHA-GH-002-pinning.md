---
id: US-SISGHA-GH-002
tipo: user-story
modulo: SISGHA
endereco: "1.2"
epico: EP-SISGHA-GH-001
perfil-principal: P-DAPE
tags: [P-DAPE]
rastreia_para: [RF-SISGHA-GH-002]
status: rascunho
fonte-primaria: levantamento-notebooklm
fonte-secao: "Seção 4 — RF-SISGHA-002"
figma-node: "10145:25187"
sidebar_label: "[DAPE] US-SISGHA-GH-002 – Pinning"
---

# [DAPE] US-SISGHA-GH-002 — [1.2] Bloquear (pin) horários para proteger edições manuais

## Descrição

**Como** DAPE,
**quero** marcar células da grade como "travadas" (pinning),
**para que** novas gerações automáticas não alterem o que já foi ajustado manualmente.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Grade visual de horário — célula com ícone de cadeado indica slot travado. DAPE pode clicar no cadeado para travar/destravar. | `[RI-01]` Ícone de cadeado aparece no canto superior direito de cada célula ocupada <br/> `[RI-02]` Célula travada tem borda visual diferenciada (ex: borda sólida mais escura) <br/> `[RI-03]` Drag & drop é bloqueado para células travadas — cursor muda para "not-allowed" |

## Regras de Negócio

`[RN-01]` Horários editados manualmente e marcados como "travados" não devem ser alterados em novas gerações automáticas (BR-SISGHA-006). Esta é a funcionalidade mais crítica identificada como ausente no sistema anterior.

`[RN-02]` O pinning é implementado no solver via `previous_timetable_grid` — células travadas são enviadas na grade anterior e o sistema de scoring com `BoostSameDayOfWeekAndTimeSlot = 100` garante forte preferência por mantê-las na mesma posição.

`[RN-03]` Para pinning absoluto (hard constraint), a célula travada deve ser excluída do pool de propostas do solver — removendo-a do espaço de busca.

## Fluxos

`[FP-01]` **Fluxo Principal — Travar célula na grade**
1. DAPE visualiza a grade de horário de uma turma ou professor.
2. Identifica uma célula que deseja proteger.
3. Clica no ícone de cadeado da célula.
4. Sistema marca a célula como travada (persistido no backend).
5. Na próxima geração, esta célula é incluída em `previous_timetable_grid` com boost máximo.

`[FE-01]` **Fluxo de Exceção — Destravar célula**
1. DAPE clica no cadeado de uma célula já travada.
2. Sistema remove a marcação de travamento.
3. Célula volta a ser elegível para realocação em futuras gerações.

## Ações

| ID | Título | Tela | Ação |
|----|--------|------|------|
| `[AC-01]` | Travar célula | Grade de horário | Persiste flag de pinning no registro do schedule |
| `[AC-02]` | Destravar célula | Grade de horário | Remove flag de pinning |
| `[AC-03]` | Incluir no request | Geração | Monta `previous_timetable_grid` com schedules travados |

## Mensagens

N/A — ação silenciosa com feedback visual (ícone muda de cadeado aberto para fechado).

## Critérios de Aceitação

- `[CA-01]` Célula travada mantém posição após nova geração
- `[CA-02]` Célula travada não pode ser movida via drag & drop
- `[CA-03]` DAPE pode destravar célula a qualquer momento
- `[CA-04]` Visual de travamento é claramente distinguível

## Questões em aberto

- [ ] Pinning é soft (boost de scoring) ou hard (remove do espaço de busca)?
- [ ] Deve haver limite máximo de células travadas por grade?

---

*Fonte: Relatório NotebookLM, Seção 4 (RF-SISGHA-002) — DAPE Jaru [01:18]. Solver: boost parameters em `Generator.cs`.*
