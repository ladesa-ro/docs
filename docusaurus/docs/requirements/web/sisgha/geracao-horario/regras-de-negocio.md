---
sidebar_position: 4
sidebar_label: Regras de Negócio
---

# Regras de Negócio — Geração de Horário

Regras exclusivas do relatório de levantamento NotebookLM (Seção 5). Não aparecem no Figma nem no código atual. São fundamentais para o algoritmo do timetable-generator.

---

## BR-SISGHA-GH-001 — Professor não pode atuar nos três turnos M/T/N no mesmo dia

**Regra:** Um docente não pode atuar nos três turnos (Manhã, Tarde, Noite) em um único dia. O sistema deve alertar se houver alocação em turnos extremos (Manhã e Noite no mesmo dia).

**Tipo de constraint:** Hard constraint no solver (impossível alocar M+T+N); soft constraint com alerta para M+N.

**Fonte:** Relatório NotebookLM, Seção 5 — BR-SISGHA-001.

---

## BR-SISGHA-GH-002 — PRD priorizado às segundas ou sextas-feiras

**Regra:** O algoritmo deve priorizar o bloqueio de PRD (Planejamento e Recuperação Docente) às segundas ou sextas-feiras, conforme solicitação docente.

**Tipo de constraint:** Soft constraint (preferência, não obrigação).

**Fonte:** Relatório NotebookLM, Seção 5 — BR-SISGHA-002.

---

## BR-SISGHA-GH-003 — Germinação diferenciada por nível de ensino

:::caution Pendente de confirmação (DSC-007)
Esta regra foi identificada no levantamento mas precisa de confirmação formal de todos os campi antes de ser implementada como constraint no solver.
:::

**Regra:**
- **Ensino Médio Integrado:** Preferência por aulas separadas (ex: 1+2 ou 2+1) para evitar desgaste pedagógico.
- **Graduação/Superior:** Preferência obrigatória por aulas germinadas (consecutivas) para otimização de conteúdo.

**Tipo de constraint:** Soft constraint configurável por oferta de formação.

**Fonte:** Relatório NotebookLM, Seção 5 — BR-SISGHA-003. Citação: "No integrado, preferem aulas separadas... já na graduação, é mais produtivo aulas germinadas."

---

## BR-SISGHA-GH-004 — Contraturno para Educação Física

**Regra:** Disciplinas de Educação Física devem ser tratadas como "Esquema de Contraturno" para turmas do Ensino Médio, vinculadas ao deslocamento para o ginásio municipal.

**Tipo de constraint:** Hard constraint para turmas EM com Ed. Física.

**Fonte:** Relatório NotebookLM, Seção 5 — BR-SISGHA-004.

---

## BR-SISGHA-GH-005 — Sábado letivo dinâmico

**Regra:** O sistema deve permitir que o sábado seja mapeado dinamicamente para o esquema de qualquer dia da semana (segunda a sexta), conforme o calendário acadêmico.

**Tipo de constraint:** Configuração de calendário, não constraint do solver.

**Fonte:** Relatório NotebookLM, Seção 5 — BR-SISGHA-005.

---

## BR-SISGHA-006 — Pinning (Travamento de Células)

**Regra:** Horários editados manualmente e marcados como "travados" (pinning) não devem ser alterados em novas gerações automáticas.

**Tipo de constraint:** Hard constraint — o solver trata células pinadas como variáveis fixas.

**Fonte:** Relatório NotebookLM, Seção 5 — DAPE Jaru [01:18]. Esta é a funcionalidade mais crítica identificada como ausente no sistema anterior.

---

## BR-SISGHA-007 — Linha do Tempo Contínua

**Regra:** O sistema deve trabalhar com uma linha do tempo contínua de horários (07:30 às 22:30), sem turnos artificiais. Cada turma define seu "janelamento" específico dentro desta linha. Elimina completamente a necessidade de "Macotinho/Vespertinho".

**Tipo de constraint:** Decisão arquitetural — não há entidade "turno" no modelo.

**Fonte:** Relatório NotebookLM, Seção 5 — BR-SISGHA-007.

---

## BR-SISGHA-008 — Transparência do Algoritmo

**Regra:** Se o algoritmo não conseguir alocar uma disciplina, deve indicar o motivo específico (ex: "Choque de PRD do Prof. X" ou "Sala Ambiente Ocupada via SISGEA"). Não deve ser uma caixa-preta.

**Tipo de constraint:** Requisito do output do solver — campo `resposta_gerador` (JSONB) deve incluir lista de conflitos.

**Fonte:** Relatório NotebookLM, Seção 11.

---

*Fonte: Relatório de levantamento NotebookLM, Seção 5 — Regras de Negócio Identificadas.*
