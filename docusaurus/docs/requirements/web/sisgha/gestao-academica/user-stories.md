---
sidebar_position: 1
sidebar_label: User Stories
---

# User Stories — Gestão Acadêmica (DAPE)

CRUDs de dados mestres: usuários, turmas, diários, cursos, formações, disciplinas.

---

## US-SISGHA-GA-001 — Listar e pesquisar usuários

**Figma:** `4457:9071` | **Rastreia para:** RF-SISGHA-GA-001

**Como** DAPE, **quero** listar e pesquisar todos os usuários do campus, **para que** eu encontre rapidamente um professor ou servidor.

---

## US-SISGHA-GA-002 — Cadastrar novo usuário

**Rastreia para:** RF-SISGHA-GA-001

**Como** DAPE, **quero** cadastrar um novo usuário com cargo e campus, **para que** ele tenha acesso ao sistema com o perfil correto.

### Regras de Negócio

`[RN-01]` Modal de "Disponibilidade para lecionar" aparece **apenas** se há cargo de professor em pelo menos um campus (BR-SISGHA-GA-003).

`[RN-02]` Carrossel de campus na disponibilidade aparece apenas se professor está em 2+ campi.

---

## US-SISGHA-GA-003 — Editar usuário existente

**Rastreia para:** RF-SISGHA-GA-001

**Como** DAPE, **quero** editar os dados de um usuário existente, **para que** eu atualize cargo, campus ou informações pessoais.

---

## US-SISGHA-GA-004 — Listar e pesquisar turmas

**Figma:** `9173:19012` | **Rastreia para:** RF-SISGHA-GA-002

**Como** DAPE, **quero** listar e pesquisar turmas do campus, **para que** eu gerencie as turmas ativas.

---

## US-SISGHA-GA-005 — Cadastrar nova turma

**Rastreia para:** RF-SISGHA-GA-002

**Como** DAPE, **quero** cadastrar uma nova turma vinculada a um curso e período, **para que** ela esteja disponível para alocação de horários.

---

## US-SISGHA-GA-006 — Editar turma existente

**Rastreia para:** RF-SISGHA-GA-002

**Como** DAPE, **quero** editar os dados de uma turma, **para que** eu atualize período, sala padrão ou curso.

---

## US-SISGHA-GA-007 — Gerenciar eventos de uma turma

**Rastreia para:** RF-SISGHA-GA-002

**Como** DAPE, **quero** gerenciar eventos vinculados a uma turma, **para que** eu adicione atividades ou indisponibilidades específicas.

### Regras de Negócio

`[RN-01]` Eventos de turma criados neste modal são **exclusivos dessa turma** (BR-SISGHA-GA-004).

---

## US-SISGHA-GA-008 — Listar e pesquisar diários

**Figma:** `4457:9779` | **Rastreia para:** RF-SISGHA-GA-003

**Como** DAPE, **quero** listar e pesquisar diários de classe, **para que** eu gerencie os vínculos turma+disciplina+calendário.

---

## US-SISGHA-GA-009 — Cadastrar novo diário

**Rastreia para:** RF-SISGHA-GA-003

**Como** DAPE, **quero** cadastrar um novo diário vinculando turma, disciplina e calendário letivo, **para que** o vínculo esteja disponível para alocação de horários e atribuição de professores.

### Regras de Negócio

`[RN-01]` Na edição de diário, **não é possível editar a turma** (BR-SISGHA-GA-001).
`[RN-02]` As disciplinas listadas são as vinculadas no cadastro do curso (BR-SISGHA-GA-002).

---

## US-SISGHA-GA-010 — Listar e pesquisar cursos

**Figma:** `1714:163` | **Rastreia para:** RF-SISGHA-GA-004

**Como** DAPE, **quero** listar e pesquisar cursos do campus, **para que** eu gerencie a oferta acadêmica.

---

## US-SISGHA-GA-011 — Cadastrar e editar curso

**Rastreia para:** RF-SISGHA-GA-004

**Como** DAPE, **quero** cadastrar e editar cursos com suas disciplinas por período, **para que** a matriz curricular esteja atualizada.

---

## US-SISGHA-GA-012 — Listar e pesquisar formações

**Figma:** `10772:26845` | **Rastreia para:** RF-SISGHA-GA-005

**Como** DAPE, **quero** listar e pesquisar ofertas de formação, **para que** eu gerencie modalidades e períodos.

---

## US-SISGHA-GA-013 — Cadastrar formação com etapas e níveis

**Rastreia para:** RF-SISGHA-GA-005

**Como** DAPE, **quero** cadastrar uma oferta de formação com períodos, etapas e níveis de formação, **para que** ela esteja disponível para criação de cursos e calendários.

### Regras de Negócio

`[RN-01]` "Níveis de Formação" aceita múltiplos valores (ex: técnico + ensino médio integrado).
`[RN-02]` Cada formação tem duração de períodos e cada período tem etapas (1° bimestre, recuperação, exame).
`[RN-03]` As datas de cada etapa são configuradas ao criar um calendário, não na formação.

---

## US-SISGHA-GA-014 — Listar e pesquisar disciplinas

**Figma:** `2267:2207` | **Rastreia para:** RF-SISGHA-GA-006

**Como** DAPE, **quero** listar e pesquisar disciplinas, **para que** eu gerencie os componentes curriculares.

---

## US-SISGHA-GA-015 — Cadastrar e editar disciplina

**Rastreia para:** RF-SISGHA-GA-006

**Como** DAPE, **quero** cadastrar e editar disciplinas com nome, abreviação e carga horária.

---

## US-SISGHA-GA-016 — Gerar relatório de aulas ministradas

**Figma:** `9415:10224` | **Rastreia para:** RF-SISGHA-GA-007

**Como** DAPE, **quero** gerar um relatório de aulas ministradas com filtros, **para que** eu tenha controle de carga horária efetiva.

---

*Fonte: Figma SISGHA V2.0, seção DAPE — Gestão Acadêmica.*
