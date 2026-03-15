---
sidebar_position: 2
sidebar_label: Requisitos e Regras
---

# Requisitos Funcionais e Regras — Calendário Acadêmico

## Requisitos Funcionais

### RF-SISGHA-CAL-001 — CRUD de calendários letivos

**Entidades SQL:** `calendario_letivo`, `calendario_letivo_dia`, `calendario_letivo_etapa`

O sistema deve permitir criar, visualizar, editar e desativar calendários letivos por campus/oferta_formacao/ano.

### RF-SISGHA-CAL-002 — Configuração de etapas do calendário

**Entidades SQL:** `calendario_letivo_etapa`, `oferta_formacao_periodo_etapa`

O sistema deve permitir definir as datas de início e término de cada etapa (1° bimestre, recuperação, etc.) no calendário. As etapas vêm da formação; no calendário, define-se apenas as datas.

### RF-SISGHA-CAL-003 — Desativação de calendário (sem exclusão)

O sistema deve permitir desativar um calendário, mas nunca excluí-lo fisicamente. Implementado via `date_deleted` (soft delete).

### RF-SISGHA-CAL-004 — CRUD de eventos

**Entidades SQL:** `calendario_agendamento` + todas as tabelas junction

O sistema deve permitir criar, visualizar, editar e desativar eventos dos tipos: INDISPONIBILIDADE, AULA, EVENTO, RESERVA. Cada evento pode ter status RASCUNHO, ATIVO ou INATIVO.

### RF-SISGHA-CAL-005 — Seleção de participantes por formação/turma/professor

**Entidades SQL:** `calendario_agendamento_oferta_formacao`, `calendario_agendamento_turma`, `calendario_agendamento_professor`

O sistema deve permitir vincular eventos a múltiplas formações, turmas, professores e ambientes via accordions de seleção.

### RF-SISGHA-CAL-006 — "Dura todo o dia" oculta campos de horário

Quando o checkbox "Dura todo o dia" é marcado, os campos `horario_inicio` e `horario_fim` são ocultados e o evento cobre o dia inteiro.

### RF-SISGHA-CAL-007 — Marcação de dias não letivos e feriados

**Entidades SQL:** `calendario_letivo_dia`

O sistema deve permitir marcar/desmarcar dias como não letivos (`dia_letivo = false`) e/ou feriados (`feriado = true`) no calendário.

### RF-SISGHA-CAL-008 — Persistência de filtros (Pinia)

A seleção dos filtros de calendário (ano letivo, modalidade, formação) deve ser salva no estado do frontend (Pinia) para persistir entre navegações.

### RF-SISGHA-CAL-009 — Visualização filtrada por modalidade e ano

O sistema deve permitir filtrar a visualização do calendário por ano letivo e modalidade.

---

## Regras de Negócio

### BR-SISGHA-CAL-001 — Calendário nunca excluído

Um calendário pode ser apenas **desativado**, nunca excluído. Preserva integridade referencial e histórico.

### BR-SISGHA-CAL-002 — Término pode ultrapassar o ano letivo

O término de um período pode ultrapassar o ano letivo (ex: greve estende o calendário para janeiro do ano seguinte).

### BR-SISGHA-CAL-003 — Etapas na formação, datas no calendário

As etapas (1° bimestre, recuperação, exame) são **definidas na formação** (`oferta_formacao_periodo_etapa`). No calendário, apenas se definem as **datas** de cada etapa (`calendario_letivo_etapa`).

### BR-SISGHA-CAL-004 — Edições na formação afetam apenas calendários futuros

Edições em duração/etapas da oferta de formação só afetam calendários criados **após** a alteração. Calendários existentes não são retroativamente modificados.

### BR-SISGHA-CAL-005 — Evento multi-ator centralizado no calendário

Evento que pertence a múltiplos atores (turma + professor + formação), quando editado fora do calendário (ex: na agenda pessoal do professor), redireciona o usuário para o modal de edição na tela de calendário.

### BR-SISGHA-CAL-006 — Seleção de filtros salva em estado

A seleção dos filtros de calendário deve ser salva no estado (Pinia) para que o DAPE não precise refazer a seleção ao navegar entre telas.

---

*Fonte: Figma SISGHA V2.0, anotações na seção Calendário. SQL: `artefatos/modelagem/LADESA.sql`.*
