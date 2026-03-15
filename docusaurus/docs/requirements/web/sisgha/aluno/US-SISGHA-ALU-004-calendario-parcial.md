---
id: US-SISGHA-ALU-004
tipo: user-story
modulo: SISGHA
epico: EP-SISGHA-ALU-001
perfil-principal: P-ALUNO
tags: [P-ALUNO]
rastreia_para: [RF-SISGHA-ALU-004]
status: rascunho
fonte-primaria: figma
figma-node: "4457:15589"
sidebar_label: "US-SISGHA-ALU-004 – Calendário parcial"
---

# [ALUNO] US-SISGHA-ALU-004 — Visualizar calendário parcial

## Descrição

**Como** aluno,
**quero** visualizar o calendário do mês atual com os eventos acadêmicos,
**para que** eu saiba das datas importantes (feriados, provas, eventos).

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Tela "Calendário parcial" — Layout com dois painéis: à esquerda, componente Calendario-Mes com dias do mês e marcações coloridas; à direita, lista de eventos do mês (cards com título, data, tipo). Toggle para alternar entre visão parcial e completa. | `[RI-01]` Dias com eventos são marcados com cor no calendário mensal <br/> `[RI-02]` Toggle "Calendário parcial" / "Calendário completo" permite alternar entre visualizações <br/> `[RI-03]` Ao clicar em um evento, abre modal com detalhes (US-SISGHA-ALU-006) |

> Fonte: Figma SISGHA V2.0, node `4457:15589` — Calendário parcial.

## Regras de Negócio

`[RN-01]` O calendário exibe apenas eventos visíveis para o perfil de aluno da turma selecionada.

`[RN-02]` Tipos de evento visíveis: AULA, EVENTO, feriados e dias não letivos.

`[RN-03]` Eventos de INDISPONIBILIDADE de professores não são visíveis para o aluno.

## Fluxos

`[FP-01]` **Fluxo Principal — Visualizar calendário do mês**
1. Aluno acessa o calendário.
2. Sistema exibe o mês atual com dias marcados por cor.
3. À direita, exibe lista de eventos do mês.
4. Aluno pode clicar em um evento para ver detalhes.

## Critérios de Aceitação

- `[CA-01]` Calendário exibe o mês atual por padrão
- `[CA-02]` Eventos são listados ao lado do calendário
- `[CA-03]` Dias com eventos são visualmente marcados
- `[CA-04]` Aluno não vê indisponibilidades de professores

---

*Fonte: Figma SISGHA V2.0, node `4457:15589`.*
