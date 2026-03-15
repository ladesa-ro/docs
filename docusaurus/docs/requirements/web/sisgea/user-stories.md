---
sidebar_position: 2
sidebar_label: User Stories
---

# User Stories — SISGEA

## Ambientes

### US-SISGEA-001 — Listar e pesquisar ambientes

**Figma:** `1:301` (fileKey: dpeHFCqjvFeRhs2oefwPxJ) | **Rastreia para:** RF-SISGEA-001, RF-SISGEA-005

**Como** DAPE, **quero** listar e pesquisar todos os ambientes do campus, **para que** eu encontre rapidamente uma sala ou laboratório.

**Interface:** Listagem em grid de cards (2 por linha). Cada card exibe: foto do ambiente, nome (ex: "Sala 27"), bloco (ex: "Bl. Info."), estado (ex: "Ocupado"). Barra de pesquisa no topo + botão "Adicionar" (ícone +). Ícone de edição em cada card.

---

### US-SISGEA-002 — Cadastrar novo ambiente

**Figma:** `49:473` | **Rastreia para:** RF-SISGEA-001

**Como** DAPE, **quero** cadastrar um novo ambiente informando nome, código, capacidade, tipo e bloco, **para que** ele esteja disponível para reservas e alocações do SISGHA.

---

### US-SISGEA-003 — Editar ambiente existente

**Figma:** `49:616` | **Rastreia para:** RF-SISGEA-001

**Como** DAPE, **quero** editar os dados de um ambiente, **para que** eu atualize informações como capacidade ou tipo.

---

## Blocos

### US-SISGEA-004 — Listar e pesquisar blocos

**Figma:** `30:44` | **Rastreia para:** RF-SISGEA-002, RF-SISGEA-005

**Como** DAPE, **quero** listar e pesquisar blocos do campus, **para que** eu gerencie os edifícios.

---

### US-SISGEA-005 — Cadastrar novo bloco

**Figma:** `67:321` | **Rastreia para:** RF-SISGEA-002

**Como** DAPE, **quero** cadastrar um novo bloco informando nome, código e campus, **para que** ambientes possam ser vinculados a ele.

---

### US-SISGEA-006 — Editar bloco existente

**Figma:** `67:320` | **Rastreia para:** RF-SISGEA-002

**Como** DAPE, **quero** editar os dados de um bloco.

---

## Reservas

### US-SISGEA-007 — Visualizar reservas da semana em grid

**Figma:** `85:247` | **Rastreia para:** RF-SISGEA-003

**Como** DAPE, **quero** visualizar as reservas da semana em um grid semanal, **para que** eu veja a ocupação dos ambientes.

**Interface:** Home do SISGEA. Barra de pesquisa no topo. Grid semanal com botões de dia (Seg a Sáb) e lista de reservas por dia. Cards com: título, ambiente, horário. Card da reserva atual com borda verde e ícone de relógio. Reservas passadas em cinza.

---

### US-SISGEA-008 — Reservar um ambiente para um período

**Figma:** `71:418` | **Rastreia para:** RF-SISGEA-004

**Como** DAPE, **quero** reservar um ambiente para uma data e horário específicos, **para que** o ambiente fique indisponível para outros usos naquele período.

---

### US-SISGEA-009 — Consultar disponibilidade de ambiente por dia

**Rastreia para:** RF-SISGEA-003, RF-SISGEA-006

**Como** DAPE, **quero** consultar quais ambientes estão disponíveis em uma data/horário, **para que** eu escolha o melhor espaço para uma atividade.

---

*Fonte: Figma SISGEA (fileKey: dpeHFCqjvFeRhs2oefwPxJ).*
