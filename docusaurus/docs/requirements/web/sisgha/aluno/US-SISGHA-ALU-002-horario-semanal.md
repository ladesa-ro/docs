---
id: US-SISGHA-ALU-002
tipo: user-story
modulo: SISGHA
epico: EP-SISGHA-ALU-001
perfil-principal: P-ALUNO
tags: [P-ALUNO]
rastreia_para: [RF-SISGHA-ALU-002]
status: rascunho
fonte-primaria: figma
figma-node: "4457:15561"
sidebar_label: "US-SISGHA-ALU-002 – Horário semanal"
---

# [ALUNO] US-SISGHA-ALU-002 — Visualizar horário semanal da turma

## Descrição

**Como** aluno,
**quero** visualizar o horário semanal completo da minha turma,
**para que** eu possa me organizar para a semana.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Tela "Horário da semana" — Grid tabular (componente Horario-Professor-Aluno) com dias da semana nas colunas e horários nas linhas. Header verde mostra "Horário Técnico em Informática - 2023 - 1°A". Menu superior com seletor de semana e toggle de visualização. | `[RI-01]` Toggle "Horário geral" / "Horário do dia" permite alternar entre visualização semanal e diária <br/> `[RI-02]` Seletor de semana ("Março - Dia 06 a 11") permite navegar entre semanas <br/> `[RI-03]` Botão menu (ícone) permite voltar para a seleção de turma <br/> `[RI-04]` Header exibe o nome completo da turma selecionada |

> Fonte: Figma SISGHA V2.0, node `4457:15561` — Horário da semana.

## Regras de Negócio

`[RN-01]` O grid exibe apenas os horários da turma selecionada em US-SISGHA-ALU-001.

`[RN-02]` Cada célula do grid mostra: disciplina, professor e ambiente (sala).

`[RN-03]` O aluno não pode editar nenhuma informação — visualização somente leitura.

## Fluxos

`[FP-01]` **Fluxo Principal — Visualizar horário semanal**
1. Aluno seleciona turma (US-SISGHA-ALU-001) e clica "Ver horário".
2. Sistema carrega o grid de horário da semana atual.
3. Grid exibe dias (Segunda a Sábado) nas colunas e slots de horário nas linhas.
4. Cada célula mostra disciplina, professor e sala.

`[FP-02]` **Fluxo — Navegar entre semanas**
1. Aluno clica no seletor de semana.
2. Sistema carrega os horários da semana selecionada.

`[FP-03]` **Fluxo — Alternar para horário do dia**
1. Aluno clica em "Horário do dia" no toggle.
2. Sistema navega para US-SISGHA-ALU-003.

## Critérios de Aceitação

- `[CA-01]` Grid exibe corretamente todas as aulas da turma na semana
- `[CA-02]` Navegação entre semanas funciona
- `[CA-03]` Toggle alterna entre visualização semanal e diária
- `[CA-04]` Aluno não vê opções de edição

---

*Fonte: Figma SISGHA V2.0, node `4457:15561`.*
