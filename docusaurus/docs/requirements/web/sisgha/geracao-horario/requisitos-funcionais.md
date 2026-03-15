---
sidebar_position: 3
sidebar_label: Requisitos Funcionais
---

# Requisitos Funcionais — Geração de Horário

## RF-SISGHA-GH-001 — Suporte nativo a três turnos (M, T, N)

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-GH-001 |
| **Entidades SQL** | `horario_aula_configuracao`, `horario_aula`, `turma_horario_aula` |
| **Prioridade** | Essential |

**Especificação:** O sistema deve operar com linha do tempo contínua (07:30–22:30) sem entidades de turno separadas. Cada campus define seus slots de horário via `horario_aula_configuracao`, e cada turma seleciona seus slots via `turma_horario_aula`. Turnos são derivados dos slots, não cadastrados como entidade.

---

## RF-SISGHA-GH-002 — Pinning de células protegidas de regeneração

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-GH-002 |
| **Entidades SQL** | `calendario_agendamento` (flag de pinning), `gerar_horario` |
| **Prioridade** | Essential |

**Especificação:** O sistema deve permitir ao DAPE marcar alocações de horário como "travadas". Estas alocações devem ser incluídas como hard constraints no payload `requisicao_gerador` enviado ao timetable-generator, garantindo que não sejam alteradas em novas gerações.

---

## RF-SISGHA-GH-003 — Importação de vínculos e matrizes via SUAP/CSV

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-GH-003 |
| **Entidades SQL** | `diario`, `diario_professor`, `curso`, `disciplina`, `oferta_formacao` |
| **Prioridade** | Importante |
| **Bloqueio** | DSC-008 (API SUAP disponível?) |

**Especificação:** O sistema deve permitir importação em lote de vínculos (professor+disciplina+turma) e matrizes curriculares a partir de arquivo CSV ou integração direta com a API do SUAP.

---

## RF-SISGHA-GH-004 — Edição drag & drop com validação instantânea de conflito

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-GH-004 |
| **Entidades SQL** | `calendario_agendamento`, `diario`, `ambiente` |
| **Prioridade** | Importante |

**Especificação:** O sistema deve permitir arrastar aulas entre slots na grade visual. Ao soltar em um novo slot, o sistema valida instantaneamente se há conflito (professor em duas turmas, sala ocupada, violação de PRD). Se houver conflito, exibe motivo específico e reverte a operação.

---

## RF-SISGHA-GH-005 — Geração assíncrona com log de conflitos em tempo real

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-GH-008, US-SISGHA-GH-009 |
| **Entidades SQL** | `gerar_horario`, `gerar_horario_oferta_formacao`, `gerar_horario_calendario_letivo` |
| **Prioridade** | Essential |

**Especificação:** A geração é 100% assíncrona via RabbitMQ (ADR-006). O management-service cria o registro `gerar_horario` com status `SOLICITADO`, publica na fila, e o frontend faz polling do status. O timetable-generator retorna `resposta_gerador` (JSONB) com alocações (sucesso) ou lista de conflitos com motivo (erro).

### Interface de estados

| Estado | Modal | Ações disponíveis |
|---|---|---|
| SOLICITADO → PENDENTE | "Gerando Horário..." com animação | Cancelar (vermelho) |
| SUCESSO | "Horário Gerado!" com check | Visualizar Horário (verde) |
| ERRO | Log de conflitos com motivos | Tentar Novamente, Voltar |

---

## RF-SISGHA-GH-006 — Alerta de alocação em turnos extremos

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-GH-006 |
| **Prioridade** | Importante |

**Especificação:** O sistema deve exibir alerta visual quando um professor está alocado nos turnos Manhã e Noite no mesmo dia. O alerta deve aparecer tanto na grade visual (ícone/cor de warning) quanto no log de geração.

---

## RF-SISGHA-GH-007 — Configuração de aulas germinadas por disciplina/nível

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-GH-007 |
| **Entidades SQL** | `diario_preferencia_agrupamento`, `diario_preferencia_agrupamento_aulas` |
| **Prioridade** | Importante |
| **Bloqueio parcial** | DSC-007 (regra deve ser configurável, não fixa) |

**Especificação:** O sistema deve permitir configurar preferências de aulas germinadas por diário (via `diario_preferencia_agrupamento`), com detalhes de dia da semana, quantidade de aulas seguidas, e horário de início/término (`diario_preferencia_agrupamento_aulas`). A regra padrão por nível de ensino (EM=separadas, Graduação=germinadas) deve ser configurável por oferta de formação.

---

## RF-SISGHA-GH-008 — Relatório PDF individual por professor e por turma

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-GH-005 |
| **Prioridade** | Importante |

**Especificação:** O sistema deve gerar relatórios PDF da grade de horário filtrados por professor ou por turma. O PDF deve incluir: nome do professor/turma, campus, período, grid semanal com disciplinas, salas e horários.

---

## RF-SISGHA-GH-009 — Sábado letivo dinâmico mapeável

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-GH-010 |
| **Entidades SQL** | `calendario_letivo_dia` |
| **Prioridade** | Média |

**Especificação:** O sistema deve permitir que o sábado letivo seja configurado como espelho de qualquer dia da semana (segunda a sexta), reproduzindo o esquema de aulas daquele dia. A configuração é por calendário letivo.

---

## RF-SISGHA-GH-010 — Salvamento automático / transações atômicas

| Campo | Valor |
|---|---|
| **Rastreia de** | RNF-REL-002 |
| **Prioridade** | Essential |

**Especificação:** Toda operação de edição na grade deve ser persistida automaticamente (auto-save). Não deve existir botão "Salvar" manual. Transações devem ser atômicas — em caso de falha, nenhuma alteração parcial é persistida.

---

*Fonte: Relatório NotebookLM Seções 4-6, `artefatos/modelagem/LADESA.sql`, Figma SISGHA V2.0.*
