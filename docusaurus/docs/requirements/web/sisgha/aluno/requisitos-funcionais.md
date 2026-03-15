---
sidebar_position: 10
sidebar_label: Requisitos Funcionais
---

# Requisitos Funcionais — Perfil Aluno

## RF-SISGHA-ALU-001 — Seleção de turma para acesso ao horário

| Campo | Valor |
|---|---|
| **ID** | RF-SISGHA-ALU-001 |
| **Rastreia de** | US-SISGHA-ALU-001 |
| **Entidades SQL** | `oferta_formacao`, `curso`, `turma`, `oferta_formacao_nivel_formacao` |
| **Prioridade** | Essential |

**Especificação:** O sistema deve permitir ao aluno selecionar uma turma através de filtros em cascata: Formação (nível) → Curso → Ano → Turma. Apenas opções válidas para o campus do aluno devem ser exibidas.

**Critério de verificação:** Selects carregam dados corretos em cascata; seleção incompleta mantém botão desabilitado.

---

## RF-SISGHA-ALU-002 — Visualização de grade semanal por turma

| Campo | Valor |
|---|---|
| **ID** | RF-SISGHA-ALU-002 |
| **Rastreia de** | US-SISGHA-ALU-002 |
| **Entidades SQL** | `diario`, `diario_professor`, `disciplina`, `ambiente`, `horario_aula`, `turma_horario_aula` |
| **Prioridade** | Essential |

**Especificação:** O sistema deve exibir o horário semanal da turma selecionada em formato de grid tabular (dias nas colunas, slots nas linhas). Cada célula deve mostrar disciplina, professor e ambiente.

**Critério de verificação:** Grid exibe corretamente as alocações da turma; navegação entre semanas funciona.

---

## RF-SISGHA-ALU-003 — Visualização de aulas do dia com detalhes

| Campo | Valor |
|---|---|
| **ID** | RF-SISGHA-ALU-003 |
| **Rastreia de** | US-SISGHA-ALU-003 |
| **Entidades SQL** | `diario`, `diario_professor`, `disciplina`, `ambiente`, `calendario_agendamento` |
| **Prioridade** | Essential |

**Especificação:** O sistema deve exibir a lista de aulas de um dia selecionado, com cards contendo disciplina, professor, sala e horário. A aula em andamento deve ser identificada automaticamente (horário atual) e destacada visualmente.

**Critério de verificação:** Aula atual destacada; aulas passadas em cinza; troca de dia funciona.

---

## RF-SISGHA-ALU-004 — Calendário mensal com eventos e dias letivos

| Campo | Valor |
|---|---|
| **ID** | RF-SISGHA-ALU-004 |
| **Rastreia de** | US-SISGHA-ALU-004 |
| **Entidades SQL** | `calendario_letivo`, `calendario_letivo_dia`, `calendario_agendamento`, `calendario_agendamento_turma` |
| **Prioridade** | Alta |

**Especificação:** O sistema deve exibir o calendário mensal com dias letivos, feriados e eventos acadêmicos relevantes para a turma do aluno. Eventos de indisponibilidade de professor não devem ser visíveis.

**Critério de verificação:** Dias com eventos marcados com cor; lista de eventos ao lado; eventos de indisponibilidade ocultos.

---

## RF-SISGHA-ALU-005 — Calendário anual completo

| Campo | Valor |
|---|---|
| **ID** | RF-SISGHA-ALU-005 |
| **Rastreia de** | US-SISGHA-ALU-005 |
| **Entidades SQL** | `calendario_letivo`, `calendario_letivo_dia`, `calendario_letivo_etapa` |
| **Prioridade** | Média |

**Especificação:** O sistema deve exibir os 12 meses do ano letivo em formato de grid, com marcações visuais de eventos em cada mês. O ano letivo pode ultrapassar dezembro (BR-SISGHA-CAL-002).

**Critério de verificação:** 12 meses exibidos; eventos marcados; toggle parcial/completo funciona.

---

*Fonte: Figma SISGHA V2.0, seção Aluno (`4457:13303`).*
