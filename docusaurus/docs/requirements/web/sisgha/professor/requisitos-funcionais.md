---
sidebar_position: 2
sidebar_label: Requisitos Funcionais
---

# Requisitos Funcionais — Perfil Professor

## RF-SISGHA-PROF-001 — Visualização do horário próprio (semanal/diário)

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-PROF-001, US-SISGHA-PROF-002 |
| **Entidades SQL** | `diario`, `diario_professor`, `disciplina`, `ambiente`, `horario_aula`, `perfil` |
| **Prioridade** | Essential |

**Especificação:** O sistema deve exibir o horário semanal e diário do professor logado, filtrando pela entidade `diario_professor` vinculada ao perfil ativo. Duas visualizações: grid semanal (Horario-Professor-Aluno) e lista diária com cards.

---

## RF-SISGHA-PROF-002 — Visualização do horário das turmas vinculadas

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-PROF-003 |
| **Entidades SQL** | `diario`, `diario_professor`, `turma`, `disciplina` |
| **Prioridade** | Alta |

**Especificação:** O sistema deve permitir ao professor visualizar o horário completo de qualquer turma à qual esteja vinculado via `diario_professor`. A visão de turma mostra todas as disciplinas, não apenas as do professor.

---

## RF-SISGHA-PROF-003 — Cadastro de eventos de tipo atividade

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-PROF-005 |
| **Entidades SQL** | `calendario_agendamento`, `calendario_agendamento_professor` |
| **Prioridade** | Alta |

**Especificação:** O sistema deve permitir ao professor cadastrar eventos de tipo atividade (reuniões, bancas, orientações) em sua agenda. O evento é vinculado ao perfil do professor via `calendario_agendamento_professor`.

---

## RF-SISGHA-PROF-004 — Cadastro de indisponibilidade

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-PROF-004 |
| **Entidades SQL** | `calendario_agendamento` (tipo INDISPONIBILIDADE), `calendario_agendamento_professor` |
| **Prioridade** | Essential |

**Especificação:** O sistema deve permitir ao professor cadastrar períodos de indisponibilidade (PRD, compromissos pessoais). Estes bloqueios são considerados como hard constraints na geração de horário pelo timetable-generator.

---

## RF-SISGHA-PROF-005 — Configuração de disponibilidade por campus

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-PROF-007 |
| **Entidades SQL** | `perfil`, `campus` |
| **Prioridade** | Alta |

**Especificação:** O sistema deve permitir ao professor configurar sua disponibilidade para lecionar (dias da semana × turnos) por campus. Se o professor possui perfil em múltiplos campi, deve exibir carrossel para configuração individual de cada campus.

---

## RF-SISGHA-PROF-006 — Edição restrita de eventos multi-ator

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-PROF-006 |
| **Entidades SQL** | `calendario_agendamento`, tabelas junction |
| **Prioridade** | Média |

**Especificação:** Quando o professor tenta editar um evento que pertence a múltiplos atores (vinculado a turmas + professores), o sistema deve redirecionar para o modal de edição na tela de calendário do DAPE. Somente eventos exclusivos do professor podem ser editados na agenda pessoal.

---

*Fonte: Figma SISGHA V2.0, seção Professor. Regras de negócio: anotações nos frames.*
