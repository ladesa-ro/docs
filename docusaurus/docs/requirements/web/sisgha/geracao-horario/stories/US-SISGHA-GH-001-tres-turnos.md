---
id: US-SISGHA-GH-001
tipo: user-story
modulo: SISGHA
endereco: "1.1"
epico: EP-SISGHA-GH-001
perfil-principal: P-DAPE
tags: [P-DAPE]
rastreia_para: [RF-SISGHA-GH-001]
status: rascunho
fonte-primaria: levantamento-notebooklm
fonte-secao: "Seção 4 — RF-SISGHA-001"
figma-node: "10145:25187"
sidebar_label: "[DAPE] US-SISGHA-GH-001 – Três turnos nativos"
---

# [DAPE] US-SISGHA-GH-001 — [1.1] Suportar três turnos nativamente

## Descrição

**Como** DAPE,
**quero** que o sistema suporte nativamente os três turnos (Manhã, Tarde, Noite) em uma linha do tempo contínua,
**para que** eu não precise criar entidades artificiais como no sistema anterior.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Configuração de horários de aula por campus — grid de slots temporais sem separação artificial de turnos. Cada slot tem horário de início e término. | `[RI-01]` A interface de configuração de intervalos exibe todos os slots em sequência contínua, sem separadores de turno <br/> `[RI-02]` O DAPE pode adicionar/remover slots livremente na faixa 07:00–23:00 |

> Fonte: Figma SISGHA V2.0, node `9305:26346` (Horários de Aula / Intervalos).

## Regras de Negócio

`[RN-01]` O sistema trabalha com linha do tempo contínua de 07:30 às 22:30 (BR-SISGHA-007). Cada turma define seu "janelamento" dentro desta linha.

`[RN-02]` Não existem entidades de turno no modelo — os turnos são derivados dos horários de aula configurados por campus (`horario_aula_configuracao` + `horario_aula`).

`[RN-03]` No solver, os turnos são definidos como constantes: Manhã (00:00–11:59), Tarde (12:00–17:59), Noite (18:00–23:59) — usados apenas para constraints de turnos opostos e buffer de almoço.

## Fluxos

`[FP-01]` **Fluxo Principal — Configurar horários de aula**
1. DAPE acessa a tela de Intervalos (`/sisgha/dape/intervalos`).
2. Visualiza os slots de tempo existentes para o campus selecionado.
3. Adiciona ou edita slots conforme necessidade do campus (ex: 5 slots manhã, 5 tarde, 4 noite).
4. Sistema salva via `horario_aula_configuracao` e `horario_aula`.
5. Os slots configurados ficam disponíveis como `time_slots` no `GenerateRequest` do solver.

## Ações

| ID | Título | Tela | Ação |
|----|--------|------|------|
| `[AC-01]` | Salvar configuração de intervalos | Tela Intervalos | Persiste slots em `horario_aula_configuracao` + `horario_aula` |
| `[AC-02]` | Montar time_slots do request | Geração | Monta array `TimeSlot[]` a partir da configuração do campus |

## Mensagens

| ID | Mensagem | Tipo | Contexto |
|----|----------|------|---------|
| `[MS-01]` | "Intervalos salvos com sucesso." | Sucesso | Após `[FP-01]` step 4 |

## Critérios de Aceitação

- `[CA-01]` Sistema permite configurar slots de 07:00 a 23:00 sem separação artificial de turnos
- `[CA-02]` Grade gerada respeita os slots configurados para cada campus
- `[CA-03]` Nenhuma referência a "Matutino/Vespertinho" aparece na interface

## Questões em aberto

- [ ] O intervalo 07:30–22:30 é fixo ou configurável por campus?
- [ ] Existe validação mínima de duração de slot (ex: mínimo 30 min)?

---

*Fonte: Relatório NotebookLM, Seção 4 (RF-SISGHA-001) — DAPE Jaru [11:00]. Solver: `TimeSlotConstants.cs`.*
