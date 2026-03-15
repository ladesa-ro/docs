---
id: US-SISGHA-GH-007
tipo: user-story
modulo: SISGHA
endereco: "1.7"
epico: EP-SISGHA-GH-001
perfil-principal: P-DAPE
tags: [P-DAPE]
rastreia_para: [RF-SISGHA-GH-007]
status: pendente-alinhamento
fonte-primaria: levantamento-notebooklm
fonte-secao: "Seção 5 — BR-SISGHA-003"
sidebar_label: "[DAPE] US-SISGHA-GH-007 – Aulas germinadas"
---

# [DAPE] US-SISGHA-GH-007 — [1.7] Configurar aulas germinadas por nível de ensino

## Descrição

**Como** DAPE,
**quero** configurar preferências de aulas germinadas diferenciadas por nível de ensino,
**para que** o algoritmo respeite as necessidades pedagógicas de cada modalidade.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` [a mapear no Figma — configuração de preferências de agrupamento por diário] | `[RI-01]` Seleção de "aulas seguidas" (2 ou 3) por disciplina/diário <br/> `[RI-02]` Indicação visual de nível de ensino da oferta para contexto |

## Regras de Negócio

`[RN-01]` Ensino Médio Integrado: preferência por aulas separadas (1+2 ou 2+1) — evita desgaste pedagógico (BR-SISGHA-003).

`[RN-02]` Graduação/Superior: preferência obrigatória por aulas germinadas (consecutivas) — otimização de conteúdo (BR-SISGHA-003).

`[RN-03]` Esta regra deve ser configurável por oferta de formação, não hardcoded no algoritmo (DSC-007).

`[RN-04]` A configuração é armazenada em `diario_preferencia_agrupamento` + `diario_preferencia_agrupamento_aulas`.

## Fluxos

`[FP-01]` **Fluxo Principal — Configurar agrupamento de aulas**
1. DAPE acessa configurações de um diário.
2. Define preferência de agrupamento: aulas seguidas (2 ou 3), dia da semana preferido, horário preferido.
3. Sistema persiste em `diario_preferencia_agrupamento`.
4. Na próxima geração, solver considera estas preferências.

## Ações

| ID | Título | Tela | Ação |
|----|--------|------|------|
| `[AC-01]` | Salvar preferência | Config diário | Persiste em `diario_preferencia_agrupamento` + `diario_preferencia_agrupamento_aulas` |

## Mensagens

| ID | Mensagem | Tipo | Contexto |
|----|----------|------|---------|
| `[MS-01]` | "Preferência de agrupamento salva." | Sucesso | Após `[FP-01]` |

## Critérios de Aceitação

- `[CA-01]` Configuração de agrupamento diferente por nível de ensino
- `[CA-02]` Solver respeita preferências configuradas
- `[CA-03]` Padrão por nível pode ser ajustado por diário individual

## Questões em aberto

- [ ] Regra de germinação é preferência institucional do IFRO ou regra por campus? (DSC-007)
- [ ] Constraint de germinação **não está implementada** no solver atual — a ser adicionada?
- [ ] Endpoint REST para `diario_preferencia_agrupamento` existe, mas lógica do solver não consome ainda

---

*Fonte: Relatório NotebookLM, Seção 5 (BR-SISGHA-003) — DAPE Jaru [37:00].*
