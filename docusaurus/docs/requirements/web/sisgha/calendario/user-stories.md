---
sidebar_position: 1
sidebar_label: User Stories
---

# User Stories — Calendário Acadêmico (DAPE)

**Épico:** EP-SISGHA-CAL-001 — Gestão de calendários letivos e eventos

---

## US-SISGHA-CAL-001 — Visualizar calendário parcial (mês + eventos)

**Figma:** `4457:9921` | **Rastreia para:** RF-SISGHA-CAL-009

**Como** DAPE,
**quero** visualizar o calendário do mês com lista de eventos ao lado,
**para que** eu acompanhe as atividades acadêmicas do período.

Interface com filtros: Ano Letivo, Modalidade, e filtro adicional. Calendário-Mes à esquerda + cards de eventos à direita.

---

## US-SISGHA-CAL-002 — Visualizar calendário completo (ano inteiro)

**Figma:** `4457:9938` | **Rastreia para:** RF-SISGHA-CAL-009

**Como** DAPE,
**quero** visualizar todos os 12 meses do ano letivo,
**para que** eu tenha a visão completa do calendário acadêmico.

---

## US-SISGHA-CAL-003 — Criar novo calendário letivo

**Figma:** `10659:26894` | **Rastreia para:** RF-SISGHA-CAL-001

**Como** DAPE,
**quero** criar um novo calendário letivo vinculado a um campus, oferta de formação e ano,
**para que** eu defina o período acadêmico com dias letivos e etapas.

### Regras de Negócio

`[RN-01]` O calendário é vinculado a um campus + oferta de formação + ano letivo.
`[RN-02]` As etapas (1° bimestre, recuperação, exame) são definidas na formação — no calendário, define-se apenas as **datas** de cada etapa (BR-SISGHA-CAL-003).

---

## US-SISGHA-CAL-004 — Editar etapas de um calendário letivo

**Rastreia para:** RF-SISGHA-CAL-002

**Como** DAPE,
**quero** editar as datas de início e término de cada etapa do calendário,
**para que** o calendário reflita ajustes (ex: greves, reposições).

### Regras de Negócio

`[RN-01]` O término de um período pode ultrapassar o ano letivo (BR-SISGHA-CAL-002 — ex: greve).
`[RN-02]` Edições em duração/etapas da formação afetam apenas calendários criados **após** a alteração (BR-SISGHA-CAL-004).

---

## US-SISGHA-CAL-005 — Desativar calendário letivo

**Rastreia para:** RF-SISGHA-CAL-003

**Como** DAPE,
**quero** desativar um calendário letivo que não será mais usado,
**para que** ele não apareça mais nas listagens ativas.

### Regras de Negócio

`[RN-01]` Um calendário pode ser apenas **desativado**, nunca excluído (BR-SISGHA-CAL-001). Soft delete — preserva histórico.

---

## US-SISGHA-CAL-006 — Cadastrar evento com turmas e professores

**Figma:** `10659:26836` | **Rastreia para:** RF-SISGHA-CAL-004, RF-SISGHA-CAL-005

**Como** DAPE,
**quero** cadastrar um evento acadêmico selecionando quais formações, turmas e professores participam,
**para que** o evento afete corretamente os horários de todos os envolvidos.

### Projeto de Interface

`[RI-01]` Ao marcar "Dura todo o dia", os campos de horário (início/fim) desaparecem.
`[RI-02]` Para cada formação selecionada, aparece um accordion para selecionar turmas e professores.
`[RI-03]` Se "todos participam" for marcado, o select de formações e os accordions são desabilitados.

### Regras de Negócio

`[RN-01]` Tipos de evento: `INDISPONIBILIDADE`, `AULA`, `EVENTO`, `RESERVA`.
`[RN-02]` Status de evento: `RASCUNHO` → `ATIVO` → `INATIVO`.
`[RN-03]` Participantes são vinculados via tabelas junction (`calendario_agendamento_turma`, `calendario_agendamento_professor`, etc.).

---

## US-SISGHA-CAL-007 — Editar evento existente

**Rastreia para:** RF-SISGHA-CAL-004

**Como** DAPE,
**quero** editar um evento existente no calendário,
**para que** eu ajuste datas, participantes ou detalhes.

### Regras de Negócio

`[RN-01]` Evento multi-ator editado **fora** do calendário (ex: na agenda do professor) redireciona para esta tela (BR-SISGHA-CAL-005).

---

## US-SISGHA-CAL-008 — Gerenciar dias não letivos do mês

**Figma:** `10659:26531` | **Rastreia para:** RF-SISGHA-CAL-007

**Como** DAPE,
**quero** marcar ou desmarcar dias como não letivos ou feriados em um mês específico,
**para que** o calendário reflita a realidade institucional.

### Projeto de Interface

`[RI-01]` Ao lado da listagem de eventos de cada mês, aparece o calendário do mês **sem** as setas de troca (mês fixo).

---

## US-SISGHA-CAL-009 — Gerenciar dias não letivos do ano

**Figma:** `10678:26852` | **Rastreia para:** RF-SISGHA-CAL-007

**Como** DAPE,
**quero** gerenciar dias não letivos em visão anual,
**para que** eu tenha panorama completo dos feriados e recessos.

---

*Fonte: Figma SISGHA V2.0, seção DAPE — Calendário. Regras: anotações nos frames.*
