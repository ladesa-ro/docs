---
sidebar_position: 2
sidebar_label: Requisitos e Regras
---

# Requisitos Funcionais e Regras — Gestão Acadêmica

## Requisitos Funcionais

### RF-SISGHA-GA-001 — CRUD de usuários com vínculo a campus e cargo
**Entidades SQL:** `usuario`, `perfil`, `campus`
Criar, visualizar, editar usuários. Cada usuário pode ter múltiplos perfis (campus + cargo).

### RF-SISGHA-GA-002 — CRUD de turmas
**Entidades SQL:** `turma`, `curso`, `ambiente`
Criar, visualizar, editar turmas. Vincular a curso, período e sala padrão.

### RF-SISGHA-GA-003 — CRUD de diários
**Entidades SQL:** `diario`, `diario_professor`, `turma`, `disciplina`, `calendario_letivo`
Criar, visualizar, editar diários (turma + disciplina + calendário). Atribuir professores via `diario_professor`.

### RF-SISGHA-GA-004 — CRUD de cursos com disciplinas por período
**Entidades SQL:** `curso`, `disciplina`, `oferta_formacao`
Criar e editar cursos vinculados a campus e oferta de formação, com disciplinas organizadas por período.

### RF-SISGHA-GA-005 — CRUD de formações com períodos, etapas e níveis
**Entidades SQL:** `oferta_formacao`, `oferta_formacao_periodo`, `oferta_formacao_periodo_etapa`, `oferta_formacao_nivel_formacao`, `nivel_formacao`, `modalidade`
Criar e editar ofertas de formação com duração, períodos, etapas e múltiplos níveis.

### RF-SISGHA-GA-006 — CRUD de disciplinas
**Entidades SQL:** `disciplina`
Criar, visualizar, editar disciplinas com nome, abreviação e carga horária.

### RF-SISGHA-GA-007 — Relatório de aulas ministradas com filtros
Gerar relatório de aulas efetivamente ministradas, filtrado por professor, turma, disciplina e período.

---

## Regras de Negócio

### BR-SISGHA-GA-001 — Turma não editável no diário
Na edição de diário, a turma não pode ser alterada. Para trocar a turma, é necessário criar novo diário.

### BR-SISGHA-GA-002 — Disciplinas do diário vêm do curso
As disciplinas disponíveis para seleção no diário são apenas as vinculadas no cadastro do curso.

### BR-SISGHA-GA-003 — Disponibilidade condicionada ao cargo
O modal de "Disponibilidade para lecionar" aparece apenas se o usuário possui cargo de professor em pelo menos um campus.

### BR-SISGHA-GA-004 — Eventos de turma exclusivos
Eventos de turma criados no modal de gestão de turma são exclusivos dessa turma — não compartilhados.

---

*Fonte: Figma SISGHA V2.0, seção DAPE — Gestão Acadêmica. SQL: `artefatos/modelagem/LADESA.sql`.*
