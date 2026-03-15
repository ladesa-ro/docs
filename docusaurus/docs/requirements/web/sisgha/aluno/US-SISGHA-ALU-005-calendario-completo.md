---
id: US-SISGHA-ALU-005
tipo: user-story
modulo: SISGHA
epico: EP-SISGHA-ALU-001
perfil-principal: P-ALUNO
tags: [P-ALUNO]
rastreia_para: [RF-SISGHA-ALU-005]
status: rascunho
fonte-primaria: figma
figma-node: "4457:15600"
sidebar_label: "US-SISGHA-ALU-005 – Calendário completo"
---

# [ALUNO] US-SISGHA-ALU-005 — Visualizar calendário completo do ano

## Descrição

**Como** aluno,
**quero** visualizar o calendário completo do ano letivo,
**para que** eu tenha visão das datas de todo o período acadêmico.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Tela "Calendário completo" — Grid com 12 meses do ano, cada um como um mini calendário (componente Calendario-Mes). Toggle para alternar com visão parcial. Botão "Ver eventos" no canto superior. | `[RI-01]` Os 12 meses são exibidos em grid de 2 colunas <br/> `[RI-02]` Dias com eventos são marcados com cor em cada mês <br/> `[RI-03]` Botão "Ver eventos" abre lista lateral de todos os eventos do ano |

> Fonte: Figma SISGHA V2.0, node `4457:15600` — Calendário completo.

## Regras de Negócio

`[RN-01]` O calendário completo exibe o ano letivo vinculado ao calendário da turma selecionada.

`[RN-02]` O término do ano letivo pode ultrapassar dezembro (BR-SISGHA-CAL-002 — ex: greve).

## Fluxos

`[FP-01]` **Fluxo Principal — Visualizar ano completo**
1. Aluno alterna para "Calendário completo" via toggle.
2. Sistema exibe grid com 12 meses.
3. Aluno pode clicar em "Ver eventos" para ver lista de eventos.
4. Aluno pode clicar em um mês para detalhar (volta para calendário parcial daquele mês).

## Critérios de Aceitação

- `[CA-01]` Grid exibe 12 meses com marcações de eventos
- `[CA-02]` Toggle entre visão parcial e completa funciona
- `[CA-03]` Botão "Ver eventos" abre lista de eventos

---

*Fonte: Figma SISGHA V2.0, node `4457:15600`.*
