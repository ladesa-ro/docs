---
sidebar_position: 1
sidebar_label: User Stories
---

# User Stories — Visualização e Edição de Horário (DAPE)

---

## US-SISGHA-VH-001 — Visualizar horários de todos os professores

**Perfil:** P-DAPE | **Figma:** `9342:20112` | **Rastreia para:** RF-SISGHA-VH-001

**Como** DAPE,
**quero** visualizar o horário de qualquer professor do campus,
**para que** eu tenha visão completa das alocações e identifique conflitos.

---

## US-SISGHA-VH-002 — Visualizar horários de todas as turmas

**Perfil:** P-DAPE | **Figma:** `9423:19446` | **Rastreia para:** RF-SISGHA-VH-002

**Como** DAPE,
**quero** visualizar o horário de qualquer turma do campus,
**para que** eu valide a grade de cada turma.

---

## US-SISGHA-VH-003 — Visualizar horário mesclado (professores e turmas)

**Perfil:** P-DAPE | **Figma:** `9424:19766` | **Rastreia para:** RF-SISGHA-VH-003

**Como** DAPE,
**quero** visualizar uma visão mesclada de horários de professores e turmas com filtro e busca,
**para que** eu identifique rapidamente conflitos e janelas.

---

## US-SISGHA-VH-004 — Editar horário de uma turma/professor em uma semana

**Perfil:** P-DAPE | **Figma:** `9425:10699` | **Rastreia para:** RF-SISGHA-VH-004

**Como** DAPE,
**quero** editar o horário de uma turma ou professor em uma semana específica,
**para que** eu faça ajustes pontuais na grade.

### Regras de Negócio

`[RN-01]` As edições nos eventos afetam apenas a semana da edição, mesmo marcadas como "permanentes" (BR-SISGHA-VH-001).

`[RN-02]` Para alterar permanentemente, é necessário fazer na edição de turma/professor ou no calendário (BR-SISGHA-VH-002).

`[RN-03]` Apenas eventos exclusivos daquele professor/turma e semana podem ser cadastrados neste contexto.

---

## US-SISGHA-VH-005 — Cadastrar evento na edição de horário

**Perfil:** P-DAPE | **Rastreia para:** RF-SISGHA-VH-005

**Como** DAPE,
**quero** cadastrar um evento diretamente na tela de edição de horário,
**para que** eu adicione atividades ou indisponibilidades sem navegar para o calendário.

### Regras de Negócio

`[RN-01]` Botão "Editar agenda" para professor / "Editar eventos" para turma (RF-SISGHA-VH-005).

---

## US-SISGHA-VH-006 — Editar evento na edição de horário

**Perfil:** P-DAPE | **Rastreia para:** RF-SISGHA-VH-004

**Como** DAPE,
**quero** editar um evento existente na tela de edição de horário,
**para que** eu ajuste detalhes sem sair do contexto.

### Regras de Negócio

`[RN-01]` Evento multi-ator (vinculado a turma + professor) redireciona para o modal de edição no calendário (BR-SISGHA-VH-003).

---

*Fonte: Figma SISGHA V2.0, seção DAPE — Visualização de Horário.*
