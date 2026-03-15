---
sidebar_position: 2
sidebar_label: Requisitos e Regras
---

# Requisitos Funcionais e Regras de Negócio — Visualização e Edição

## Requisitos Funcionais

### RF-SISGHA-VH-001 — Visualização de horário por professor (DAPE vê todos)

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-VH-001 |
| **Entidades SQL** | `diario_professor`, `perfil`, `diario`, `disciplina`, `horario_aula` |
| **Prioridade** | Essential |

**Especificação:** O DAPE pode selecionar qualquer professor do campus e visualizar seu horário semanal completo no grid Horario-Professor-Aluno.

---

### RF-SISGHA-VH-002 — Visualização de horário por turma

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-VH-002 |
| **Entidades SQL** | `turma`, `diario`, `disciplina`, `horario_aula`, `turma_horario_aula` |
| **Prioridade** | Essential |

**Especificação:** O DAPE pode selecionar qualquer turma do campus e visualizar seu horário semanal completo.

---

### RF-SISGHA-VH-003 — Visualização mesclada com filtro e busca

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-VH-003 |
| **Prioridade** | Alta |

**Especificação:** Visão unificada com múltiplos horários simultâneos, filtráveis por professor, turma, disciplina. Permite identificar conflitos visualmente.

---

### RF-SISGHA-VH-004 — Edição de eventos restrita à semana em edição

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-VH-004 |
| **Entidades SQL** | `calendario_agendamento`, tabelas junction |
| **Prioridade** | Essential |

**Especificação:** Edições de horário na visão semanal afetam apenas a semana selecionada. Alterações permanentes devem ser feitas no cadastro de turma/professor ou no calendário.

---

### RF-SISGHA-VH-005 — Botão "Editar agenda/eventos"

| Campo | Valor |
|---|---|
| **Rastreia de** | US-SISGHA-VH-005 |
| **Prioridade** | Média |

**Especificação:** Na visualização de horário por professor, botão "Editar agenda" abre painel de edição de eventos do professor. Na visualização por turma, botão "Editar eventos" abre painel de eventos da turma.

---

## Regras de Negócio

### BR-SISGHA-VH-001 — Edição afeta apenas a semana em edição

**Regra:** As edições nos eventos de horário afetam apenas a semana da edição, mesmo que marcadas como "permanentes". Esta é uma decisão de design para evitar alterações acidentais em semanas futuras.

**Fonte:** Figma SISGHA V2.0, anotações na seção DAPE.

---

### BR-SISGHA-VH-002 — Edição permanente requer calendário

**Regra:** Para alterar permanentemente o horário de um professor ou turma, é necessário fazer a edição no cadastro do professor/turma ou na tela de calendário acadêmico.

**Fonte:** Figma SISGHA V2.0, anotações na seção DAPE.

---

### BR-SISGHA-VH-003 — Evento multi-ator redireciona para calendário

**Regra:** Ao tentar editar um evento que pertence a múltiplos atores (turma + professor), o sistema redireciona para o modal de edição na tela de calendário. Apenas eventos exclusivos do contexto atual (professor ou turma) podem ser editados localmente.

**Fonte:** Figma SISGHA V2.0, anotações na seção DAPE.

---

*Fonte: Figma SISGHA V2.0, seção DAPE — Visualização de Horário (nodes `9342:20112` a `9425:10699`).*
