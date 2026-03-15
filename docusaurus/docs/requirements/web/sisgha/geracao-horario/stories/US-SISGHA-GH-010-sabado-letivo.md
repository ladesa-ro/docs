---
id: US-SISGHA-GH-010
tipo: user-story
modulo: SISGHA
endereco: "1.10"
epico: EP-SISGHA-GH-001
perfil-principal: P-DAPE
tags: [P-DAPE]
rastreia_para: [RF-SISGHA-GH-009]
status: rascunho
fonte-primaria: levantamento-notebooklm
fonte-secao: "Seção 5 — BR-SISGHA-005"
sidebar_label: "[DAPE] US-SISGHA-GH-010 – Sábado letivo"
---

# [DAPE] US-SISGHA-GH-010 — [1.10] Configurar sábado letivo mapeado para qualquer dia

## Descrição

**Como** DAPE,
**quero** configurar o sábado letivo como espelho de qualquer dia da semana (segunda a sexta),
**para que** o calendário acadêmico reflita a realidade de reposições.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` [a mapear no Figma — configuração de sábado letivo no calendário] | `[RI-01]` Dropdown para selecionar qual dia da semana o sábado espelha <br/> `[RI-02]` Ao selecionar, a grade do sábado mostra os mesmos slots do dia espelhado |

## Regras de Negócio

`[RN-01]` O sábado pode ser mapeado dinamicamente para o esquema de qualquer dia da semana (segunda a sexta) conforme o calendário acadêmico (BR-SISGHA-005).

`[RN-02]` O mapeamento afeta o solver: o sábado herda os slots de tempo e as constraints do dia espelhado.

`[RN-03]` O mapeamento é por data específica (cada sábado letivo pode espelhar um dia diferente).

## Fluxos

`[FP-01]` **Fluxo Principal — Configurar sábado letivo**
1. DAPE acessa o calendário acadêmico.
2. Seleciona uma data de sábado marcada como letiva.
3. Escolhe qual dia da semana esse sábado espelha (ex: "terça-feira").
4. Sistema aplica os slots de tempo da terça ao sábado.
5. Na próxima geração, o solver trata este sábado como se fosse terça.

## Ações

| ID | Título | Tela | Ação |
|----|--------|------|------|
| `[AC-01]` | Mapear sábado | Calendário | Persiste mapeamento dia_semana para o sábado letivo |
| `[AC-02]` | Aplicar no solver | Geração | Inclui sábado como dia adicional com slots do dia espelhado |

## Mensagens

| ID | Mensagem | Tipo | Contexto |
|----|----------|------|---------|
| `[MS-01]` | "Sábado [data] configurado como espelho de [dia]." | Sucesso | Após `[FP-01]` |

## Critérios de Aceitação

- `[CA-01]` Sábado letivo pode espelhar qualquer dia de segunda a sexta
- `[CA-02]` Grade do sábado exibe os mesmos professores/disciplinas do dia espelhado
- `[CA-03]` Solver trata sábado com as mesmas constraints do dia espelhado

## Questões em aberto

- [ ] O WeekDay enum do TypeSpec inclui Saturday (6) — já previsto no contrato
- [ ] Mapeamento de sábado é por calendário letivo ou por data individual?

---

*Fonte: Relatório NotebookLM, Seção 5 (BR-SISGHA-005). TypeSpec: `WeekDay.Saturday = 6`.*
