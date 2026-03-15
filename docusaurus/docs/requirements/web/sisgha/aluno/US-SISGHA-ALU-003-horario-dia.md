---
id: US-SISGHA-ALU-003
tipo: user-story
modulo: SISGHA
epico: EP-SISGHA-ALU-001
perfil-principal: P-ALUNO
tags: [P-ALUNO]
rastreia_para: [RF-SISGHA-ALU-003]
status: rascunho
fonte-primaria: figma
figma-node: "4457:15571"
sidebar_label: "US-SISGHA-ALU-003 – Horário do dia"
---

# [ALUNO] US-SISGHA-ALU-003 — Visualizar horário do dia

## Descrição

**Como** aluno,
**quero** visualizar as aulas de um dia específico da semana,
**para que** eu tenha uma visão detalhada das aulas do dia.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Tela "Horário do dia" — Barra de dias da semana (Seg a Sáb) como botões. Dia selecionado em verde sólido. Abaixo, lista de cards de aula com: Disciplina + Professor, Ambiente (sala), Horário (início - fim). Card da aula atual tem borda verde e ícone de relógio. Cards de aulas passadas têm borda cinza. | `[RI-01]` Dia selecionado fica com fundo verde sólido e texto branco <br/> `[RI-02]` Dias não selecionados ficam com borda verde e texto verde <br/> `[RI-03]` Card da aula em andamento tem borda verde e ícone de relógio à direita <br/> `[RI-04]` Cards de aulas já encerradas têm borda cinza e texto cinza <br/> `[RI-05]` Cards de aulas futuras do dia têm borda verde e texto preto |

> Fonte: Figma SISGHA V2.0, node `4457:15571` — Horário do dia.

## Regras de Negócio

`[RN-01]` O sistema identifica automaticamente a aula em andamento com base no horário atual.

`[RN-02]` Aulas já encerradas são visualmente distintas (cinza) das aulas futuras (verde).

`[RN-03]` Cada card de aula exibe: nome da disciplina, nome do professor, ambiente (sala) e horário (início - fim).

## Fluxos

`[FP-01]` **Fluxo Principal — Visualizar aulas do dia**
1. Aluno acessa a tela de horário do dia (via toggle em US-SISGHA-ALU-002).
2. Sistema exibe o dia atual selecionado por padrão.
3. Lista de cards de aula é exibida ordenada por horário.
4. Aula em andamento é destacada com borda verde e ícone de relógio.

`[FP-02]` **Fluxo — Trocar dia da semana**
1. Aluno clica em outro dia na barra de dias.
2. Sistema carrega as aulas do dia selecionado.

## Critérios de Aceitação

- `[CA-01]` Dia atual é selecionado por padrão ao abrir
- `[CA-02]` Aula em andamento é destacada corretamente
- `[CA-03]` Aulas passadas ficam em cinza
- `[CA-04]` Troca de dia funciona corretamente

---

*Fonte: Figma SISGHA V2.0, node `4457:15571`.*
