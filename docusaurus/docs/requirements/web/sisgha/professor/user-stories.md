---
sidebar_position: 1
sidebar_label: User Stories
---

# User Stories — Perfil Professor

## US-SISGHA-PROF-001 — Visualizar próprio horário semanal

---
**ID:** US-SISGHA-PROF-001 | **Perfil:** P-PROF | **Épico:** EP-SISGHA-PROF-001
**Figma:** `4457:11169` | **Rastreia para:** RF-SISGHA-PROF-001

**Como** professor,
**quero** visualizar meu horário semanal completo,
**para que** eu saiba em quais turmas e salas leciono em cada dia.

### Projeto de Interface

`[IMG-01]` Tela "Horário da semana" — Idêntica à do aluno (grid Horario-Professor-Aluno) mas com sidebar lateral e Header-Main. Seletor de semana e toggle "Horário geral" / "Horário do dia" / "Agenda".

`[RI-01]` O grid mostra apenas as aulas do professor logado.
`[RI-02]` Sidebar lateral permite navegação entre Horário, Calendário e Perfil.
`[RI-03]` Header-Main exibe nome do professor e campus ativo.

### Regras de Negócio

`[RN-01]` Professor vê o próprio horário e o horário das turmas às quais está vinculado (via `diario_professor`).
`[RN-02]` Visualização de horários de outros professores está em discussão (DSC-003).

---

## US-SISGHA-PROF-002 — Visualizar horário do dia

**ID:** US-SISGHA-PROF-002 | **Perfil:** P-PROF | **Épico:** EP-SISGHA-PROF-001
**Figma:** `4457:11177` | **Rastreia para:** RF-SISGHA-PROF-001

**Como** professor,
**quero** visualizar as aulas de um dia específico,
**para que** eu tenha uma visão rápida do meu dia.

Interface e comportamento idênticos ao do Aluno (US-SISGHA-ALU-003) com a diferença de que exibe as aulas do professor (não da turma).

---

## US-SISGHA-PROF-003 — Visualizar horário das turmas vinculadas

**ID:** US-SISGHA-PROF-003 | **Perfil:** P-PROF | **Épico:** EP-SISGHA-PROF-001
**Figma:** `4457:11169` | **Rastreia para:** RF-SISGHA-PROF-002

**Como** professor,
**quero** visualizar o horário completo das turmas em que leciono,
**para que** eu entenda o contexto da grade dos meus alunos.

### Regras de Negócio

`[RN-01]` O professor pode alternar entre "meu horário" e o horário de uma turma vinculada.
`[RN-02]` A visão de turma mostra todas as disciplinas da turma, não apenas as do professor.

---

## US-SISGHA-PROF-004 — Cadastrar indisponibilidade na agenda

**ID:** US-SISGHA-PROF-004 | **Perfil:** P-PROF | **Épico:** EP-SISGHA-PROF-002
**Rastreia para:** RF-SISGHA-PROF-004

**Como** professor,
**quero** cadastrar períodos de indisponibilidade (PRD, compromissos),
**para que** o DAPE e o algoritmo respeitem minhas restrições na geração de horário.

### Regras de Negócio

`[RN-01]` Eventos de indisponibilidade são do tipo `INDISPONIBILIDADE` no `calendario_agendamento`.
`[RN-02]` O professor pode cadastrar PRD com preferência de dia (segundas ou sextas — BR-SISGHA-002).
`[RN-03]` Indisponibilidades cadastradas são consideradas como hard constraints na geração de horário.

---

## US-SISGHA-PROF-005 — Cadastrar atividade na agenda

**ID:** US-SISGHA-PROF-005 | **Perfil:** P-PROF | **Épico:** EP-SISGHA-PROF-002
**Rastreia para:** RF-SISGHA-PROF-003

**Como** professor,
**quero** cadastrar atividades na minha agenda (reuniões, bancas, etc.),
**para que** minha agenda reflita todos os compromissos acadêmicos.

### Regras de Negócio

`[RN-01]` Professor possui dois tipos de evento: **atividade** e **indisponibilidade** (regra do Figma).
`[RN-02]` A lista de eventos do professor é chamada de **agenda**.

---

## US-SISGHA-PROF-006 — Editar evento da agenda

**ID:** US-SISGHA-PROF-006 | **Perfil:** P-PROF | **Épico:** EP-SISGHA-PROF-002
**Rastreia para:** RF-SISGHA-PROF-006

**Como** professor,
**quero** editar um evento que cadastrei na minha agenda,
**para que** eu possa ajustar horários e detalhes.

### Regras de Negócio

`[RN-01]` Se o evento pertence a múltiplos atores (ex: evento de turma + professor), o usuário é **redirecionado para o modal de edição na tela de calendário** — não pode editar localmente (regra do Figma — BR-SISGHA-PROF-003).
`[RN-02]` Apenas eventos exclusivos daquele professor podem ser editados no contexto da agenda pessoal.

---

## US-SISGHA-PROF-007 — Configurar disponibilidade para lecionar

**ID:** US-SISGHA-PROF-007 | **Perfil:** P-PROF | **Épico:** EP-SISGHA-PROF-002
**Figma:** `4457:11196` (seção Disponibilidade) | **Rastreia para:** RF-SISGHA-PROF-005

**Como** professor,
**quero** configurar minha disponibilidade para lecionar por dia da semana e turno,
**para que** o algoritmo respeite meus horários ao gerar a grade.

### Projeto de Interface

`[IMG-01]` Tela de Perfil — seção "Disponibilidade" com grid de dias da semana × turnos. Carrossel de campus se professor em 2+ campi.

`[RI-01]` Modal de "Disponibilidade para lecionar" aparece **apenas** se o usuário possui cargo de professor em pelo menos um campus (BR-SISGHA-PROF-004).
`[RI-02]` Carrossel de campus aparece **apenas** se professor está em 2+ campi (BR-SISGHA-PROF-005).

---

## US-SISGHA-PROF-008 — Visualizar calendário parcial com eventos

**ID:** US-SISGHA-PROF-008 | **Perfil:** P-PROF | **Épico:** EP-SISGHA-PROF-001
**Figma:** `4457:11226` | **Rastreia para:** RF-SISGHA-ALU-004

**Como** professor,
**quero** visualizar o calendário mensal com meus eventos e da instituição,
**para que** eu me organize para o mês.

Interface similar à do Aluno mas com filtros adicionais: Ano Letivo, Modalidade, e um terceiro combobox. Eventos do professor (agenda) também são exibidos.

---

## US-SISGHA-PROF-009 — Visualizar calendário completo do ano

**ID:** US-SISGHA-PROF-009 | **Perfil:** P-PROF | **Épico:** EP-SISGHA-PROF-001
**Figma:** `4457:11242`

**Como** professor,
**quero** visualizar o calendário completo do ano letivo,
**para que** eu planeje o semestre inteiro.

Interface idêntica à do Aluno (US-SISGHA-ALU-005) com os mesmos filtros do calendário parcial.

---

*Fonte: Figma SISGHA V2.0, seção Professor (`4457:11167`). Regras de negócio: anotação `10562:20328`.*
