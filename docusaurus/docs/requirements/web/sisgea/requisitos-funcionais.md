---
sidebar_position: 3
sidebar_label: Requisitos Funcionais
---

# Requisitos Funcionais — SISGEA

## RF-SISGEA-001 — CRUD de ambientes

**Entidades SQL:** `ambiente`, `bloco`, `imagem`

Criar, visualizar, editar e desativar ambientes. Campos: nome, descrição, código, capacidade, tipo (sala, laboratório, auditório), bloco, imagem de capa.

---

## RF-SISGEA-002 — CRUD de blocos

**Entidades SQL:** `bloco`, `campus`, `imagem`

Criar, visualizar, editar e desativar blocos. Campos: nome, código, campus, imagem de capa.

---

## RF-SISGEA-003 — Visualização de reservas semanais em grid por ambiente

**Entidades SQL:** `calendario_agendamento` (tipo RESERVA), `calendario_agendamento_ambiente`

Exibir reservas da semana em grid semanal (dias como botões, lista de reservas por dia). Card da reserva atual destacado com borda verde. Reservas passadas em cinza.

---

## RF-SISGEA-004 — Criação de reserva com data, horário e ambiente

**Entidades SQL:** `calendario_agendamento` (tipo RESERVA), `calendario_agendamento_ambiente`

Permitir criar reserva informando: ambiente, data, horário início, horário fim, descrição. O sistema valida disponibilidade antes de confirmar.

---

## RF-SISGEA-005 — Busca/pesquisa de ambientes e blocos

Barra de pesquisa com filtro por nome, código ou bloco para ambientes e blocos.

---

## RF-SISGEA-006 — Validar disponibilidade física antes de alocação no SISGHA

**Entidades SQL:** `calendario_agendamento_ambiente`, `ambiente`

Quando o SISGHA tentar alocar uma aula em um ambiente, o sistema deve verificar se o ambiente está disponível no horário solicitado (sem reservas conflitantes). Se ocupado, retornar conflito com motivo "Sala Ambiente Ocupada via SISGEA" (BR-SISGHA-008).

**Fonte:** Relatório NotebookLM, Seção 4, DAPE Jaru [08:44].

---

*Fonte: Figma SISGEA (fileKey: dpeHFCqjvFeRhs2oefwPxJ). SQL: `artefatos/modelagem/LADESA.sql`.*
