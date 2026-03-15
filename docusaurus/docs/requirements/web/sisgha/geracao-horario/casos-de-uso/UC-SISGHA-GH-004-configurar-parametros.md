---
id: UC-SISGHA-GH-004
tipo: caso-de-uso
modulo: SISGHA
rastreia_de: [US-SISGHA-GH-007, US-SISGHA-GH-010]
rastreia_para: [BDD-SISGHA-GH-004]
entidades-sql: [diario_preferencia_agrupamento, diario_preferencia_agrupamento_aulas, horario_aula_configuracao, horario_aula]
status: rascunho
fonte-primaria: levantamento-notebooklm
sidebar_label: "UC-GH-004 – Configurar parâmetros"
---

# UC-SISGHA-GH-004 — Configurar parâmetros de geração

## Informações gerais

| Campo | Valor |
|-------|-------|
| **Ator primário** | DAPE |
| **Nível** | User Goal |
| **Escopo** | SISGHA |
| **Pré-condições** | DAPE autenticado; campus e oferta de formação selecionados |
| **Garantia de sucesso** | Parâmetros configurados e disponíveis para a próxima geração |
| **Garantia mínima** | Parâmetros anteriores mantidos (nenhuma alteração) |
| **Trigger** | DAPE acessa configurações de geração |

## Cenário principal — Configurar aulas germinadas

1. DAPE acessa configuração de preferências de agrupamento.
2. DAPE seleciona um diário (vínculo professor-turma-disciplina).
3. DAPE define quantidade de aulas seguidas desejada (2 ou 3).
4. Opcionalmente, define dia da semana preferido e horário preferido.
5. Sistema persiste em `diario_preferencia_agrupamento` + `diario_preferencia_agrupamento_aulas`.

## Cenário alternativo — Configurar horários de aula por campus

1. DAPE acessa tela de Intervalos (`/sisgha/dape/intervalos`).
2. DAPE visualiza slots de tempo existentes para o campus.
3. DAPE adiciona, edita ou remove slots na faixa 07:00–23:00.
4. Sistema persiste em `horario_aula_configuracao` + `horario_aula`.
5. Slots configurados ficam disponíveis como `time_slots[]` no `GenerateRequest`.

## Cenário alternativo — Configurar sábado letivo

1. DAPE acessa calendário acadêmico.
2. DAPE seleciona data de sábado marcada como letiva.
3. DAPE escolhe qual dia da semana o sábado espelha (dropdown: segunda a sexta).
4. Sistema aplica slots de tempo do dia espelhado ao sábado.
5. Na geração, solver trata sábado com constraints do dia espelhado.

## Extensões

**2a.** Diário não tem disciplina com carga compatível com germinação:
1. Sistema informa que germinação requer mínimo de 2 aulas semanais.

**3a.** Preferência de germinação conflita com slots disponíveis:
1. Sistema alerta que não há slots consecutivos suficientes no dia preferido.

## Regras de negócio aplicáveis

- BR-SISGHA-003 (DSC-007): Germinação diferenciada por nível de ensino
- BR-SISGHA-005: Sábado letivo mapeável
- BR-SISGHA-007: Linha do tempo contínua (sem turnos artificiais)

## Questões em aberto

- [ ] Constraint de germinação não implementada no solver — feature a adicionar
- [ ] Regra de germinação: preferência ou obrigatória? (DSC-007)
- [ ] Interface de configuração de sábado letivo não existe no Figma atual

---

*Fonte: Relatório NotebookLM, Seções 4 e 5. Entidades SQL: `diario_preferencia_agrupamento`, `horario_aula_configuracao`.*
