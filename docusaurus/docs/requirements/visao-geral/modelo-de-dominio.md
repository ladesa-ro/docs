---
sidebar_position: 5
sidebar_label: Modelo de Domínio
---

# Modelo de Domínio

Mapa das entidades do sistema Ladesa, seus atributos principais e relacionamentos. Baseado na modelagem-alvo em `artefatos/modelagem/LADESA.sql`.

:::info Modelagem-alvo vs. código atual
Este modelo representa o **estado-alvo** do sistema, não o que está implementado atualmente no management-service. As entidades de calendário e geração de horário ainda **não existem no código** — são funcionalidades planejadas.
:::

## Domínios do sistema

O modelo é organizado em 7 domínios lógicos:

```
┌─────────────────────────────────────────────────────────────┐
│                    ESTRUTURA INSTITUCIONAL                    │
│  campus ← bloco ← ambiente                                  │
│  endereco ← base_cidade ← base_estado                       │
├─────────────────────────────────────────────────────────────┤
│                    ESTRUTURA ACADÊMICA                        │
│  modalidade ← oferta_formacao → nivel_formacao               │
│  oferta_formacao → periodo → etapa                           │
│  curso → turma → diario → diario_professor                   │
│  disciplina ↗                                                │
├─────────────────────────────────────────────────────────────┤
│                        PESSOAS                               │
│  usuario → perfil (campus + cargo)                           │
├─────────────────────────────────────────────────────────────┤
│                  CALENDÁRIO (NOVO)                            │
│  calendario_letivo → calendario_letivo_dia                   │
│  calendario_letivo → calendario_letivo_etapa                 │
│  calendario_agendamento → junction tables (N:N)              │
├─────────────────────────────────────────────────────────────┤
│              GERAÇÃO DE HORÁRIO (NOVO)                       │
│  gerar_horario → gerar_horario_oferta_formacao               │
│  gerar_horario → gerar_horario_calendario_letivo             │
│  horario_aula_configuracao → horario_aula → turma_horario    │
│  diario_preferencia_agrupamento → aulas                      │
├─────────────────────────────────────────────────────────────┤
│                       ESTÁGIO                                │
│  empresa → estagio ← estagiario                              │
│  responsavel_empresa, horario_estagio                        │
├─────────────────────────────────────────────────────────────┤
│                       SUPORTE                                │
│  imagem → imagem_arquivo ← arquivo                           │
└─────────────────────────────────────────────────────────────┘
```

---

## Estrutura Institucional

Entidades que representam a infraestrutura física do IFRO.

### campus

Unidade física do IFRO (ex: Campus Ji-Paraná, Campus Jaru).

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | uuid PK | Identificador único |
| `nome_fantasia` | text | Nome de exibição |
| `razao_social` | text | Razão social oficial |
| `apelido` | text | Nome curto (ex: "Ji-Paraná") |
| `cnpj` | text | CNPJ da unidade |
| `id_endereco_fk` | uuid FK → endereco | Localização física |

### bloco

Edifício dentro de um campus.

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | uuid PK | Identificador único |
| `nome` | text | Nome do bloco |
| `codigo` | text | Código identificador |
| `id_campus_fk` | uuid FK → campus | Campus ao qual pertence |

### ambiente

Espaço físico (sala, laboratório, auditório) — entidade central do SISGEA.

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | uuid PK | Identificador único |
| `nome` | text | Nome do ambiente |
| `descricao` | text | Descrição do espaço |
| `codigo` | text | Código identificador |
| `capacidade` | int | Capacidade de pessoas |
| `tipo` | text | Tipo (sala, laboratório, auditório, etc.) |
| `id_bloco_fk` | uuid FK → bloco | Bloco ao qual pertence |

**Relacionamentos:** campus → bloco → ambiente (hierarquia de contenção).

---

## Estrutura Acadêmica

Entidades que representam a organização curricular.

### oferta_formacao

Oferta de um curso em um campus, com modalidade e duração definidas.

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | uuid PK | Identificador único |
| `nome` | text | Nome da oferta |
| `apelido` | text | Nome curto |
| `duracao_periodo_em_meses` | int | Duração de cada período |
| `id_modalidade_fk` | uuid FK → modalidade | Presencial, EAD, etc. |
| `id_campus_fk` | uuid FK → campus | Campus da oferta |

**Tabela N:N:** `oferta_formacao_nivel_formacao` — uma oferta pode ter múltiplos níveis (ex: técnico + ensino médio integrado).

### oferta_formacao_periodo / oferta_formacao_periodo_etapa

Cada formação tem **períodos** (ex: 1° semestre, 2° semestre) e cada período tem **etapas** (ex: 1° bimestre, recuperação, exame).

| Tabela | Campos principais |
|---|---|
| `oferta_formacao_periodo` | `numero_periodo`, FK → oferta_formacao |
| `oferta_formacao_periodo_etapa` | `nome`, `cor`, FK → oferta_formacao_periodo |

### curso

Curso vinculado a um campus e a uma oferta de formação.

| Campo | Tipo | Descrição |
|---|---|---|
| `nome` | text | Nome do curso |
| `nome_abreviado` | text | Abreviação |
| `id_campus_fk` | uuid FK → campus | Campus |
| `id_oferta_formacao_fk` | uuid FK → oferta_formacao | Formação vinculada |

### turma

Grupo de alunos em um curso/período.

| Campo | Tipo | Descrição |
|---|---|---|
| `periodo` | text | Período da turma |
| `id_curso_fk` | uuid FK → curso | Curso da turma |
| `id_ambiente_padrao_aula_fk` | uuid FK → ambiente | Sala padrão da turma |

### disciplina

Componente curricular com carga horária.

| Campo | Tipo | Descrição |
|---|---|---|
| `nome` | text | Nome da disciplina |
| `nome_abreviado` | text | Abreviação |
| `carga_horaria` | int | Carga horária total |

### diario

**Entidade central do sistema.** Liga turma + disciplina + calendário letivo. Representa o **vínculo** no vocabulário do DAPE.

| Campo | Tipo | Descrição |
|---|---|---|
| `ativo` | boolean | Se o diário está ativo |
| `id_calendario_letivo_fk` | uuid FK → calendario_letivo | Calendário de referência |
| `id_turma_fk` | uuid FK → turma | Turma |
| `id_disciplina_fk` | uuid FK → disciplina | Disciplina |
| `id_ambiente_padrao_fk` | uuid FK → ambiente | Sala padrão para esta disciplina |

### diario_professor

Vínculo de um professor (perfil) a um diário — completa a **associação triádica** Professor + Disciplina + Turma.

| Campo | Tipo | Descrição |
|---|---|---|
| `situacao` | boolean | Status do vínculo |
| `id_diario_fk` | uuid FK → diario | Diário |
| `id_perfil_fk` | uuid FK → perfil | Professor (via perfil) |

---

## Pessoas

### usuario

Identidade no sistema.

| Campo | Tipo | Descrição |
|---|---|---|
| `nome` | text | Nome completo |
| `matricula` | text | Matrícula institucional |
| `email` | text | E-mail |
| `is_super_user` | boolean | Administrador do sistema |

### perfil

Vínculo de um usuário a um campus com cargo específico. Um mesmo usuário pode ter múltiplos perfis em campi diferentes.

| Campo | Tipo | Descrição |
|---|---|---|
| `ativo` | boolean | Se o perfil está ativo |
| `cargo` | text | Cargo (professor, DAPE, etc.) |
| `apelido` | text | Apelido no campus |
| `id_usuario_fk` | uuid FK → usuario | Usuário |
| `id_campus_fk` | uuid FK → campus | Campus |

---

## Calendário (NOVO — não implementado)

Entidades que representam o calendário acadêmico e eventos.

### calendario_letivo

Calendário de um campus/oferta de formação para um ano letivo.

| Campo | Tipo | Descrição |
|---|---|---|
| `nome` | text | Nome do calendário |
| `ano_letivo` | int | Ano letivo |
| `id_campus_fk` | uuid FK → campus | Campus |
| `id_oferta_formacao_fk` | uuid FK → oferta_formacao | Formação |

### calendario_letivo_dia

Cada dia do calendário com flags de dia letivo e feriado.

| Campo | Tipo | Descrição |
|---|---|---|
| `data` | date | Data |
| `dia_letivo` | boolean | Se é dia letivo |
| `feriado` | boolean | Se é feriado |
| `id_calendario_letivo_fk` | uuid FK → calendario_letivo | Calendário |

### calendario_letivo_etapa

Quando cada etapa da formação ocorre neste calendário (datas de início e término).

| Campo | Tipo | Descrição |
|---|---|---|
| `data_inicio` | date | Início da etapa |
| `data_termino` | date | Término da etapa |
| `id_oferta_formacao_periodo_etapa_fk` | uuid FK | Etapa da formação |
| `id_calendario_letivo_fk` | uuid FK → calendario_letivo | Calendário |

### calendario_agendamento

Evento/agendamento genérico — a entidade mais flexível do calendário.

| Campo | Tipo | Descrição |
|---|---|---|
| `tipo` | ENUM | `INDISPONIBILIDADE`, `AULA`, `EVENTO`, `RESERVA` |
| `data_inicio` | date | Data de início |
| `data_fim` | date | Data de fim (opcional) |
| `dia_inteiro` | boolean | Se dura o dia todo |
| `horario_inicio` | time | Horário de início |
| `horario_fim` | time | Horário de fim |
| `repeticao` | text | Regra de repetição |
| `nome` | text | Nome do evento |
| `cor` | text | Cor de exibição |
| `status` | ENUM | `RASCUNHO`, `ATIVO`, `INATIVO` |

**Tabelas junction (N:N)** — vinculam agendamentos a múltiplos atores:

| Tabela junction | Vincula agendamento a |
|---|---|
| `calendario_agendamento_diario` | Diários |
| `calendario_agendamento_oferta_formacao` | Ofertas de formação |
| `calendario_agendamento_ambiente` | Ambientes |
| `calendario_agendamento_professor` | Professores (perfis) |
| `calendario_agendamento_turma` | Turmas |
| `calendario_agendamento_modalidade` | Modalidades |
| `calendario_agendamento_calendario_letivo` | Calendários letivos |

---

## Geração de Horário (NOVO — não implementado)

Entidades que suportam a geração automatizada de grades horárias.

### gerar_horario

Job de geração de horário — entidade principal.

| Campo | Tipo | Descrição |
|---|---|---|
| `status` | ENUM | `SOLICITADO` → `PENDENTE` → `SUCESSO` / `ERRO` |
| `duracao` | ENUM | `TEMPORARIO` ou `PERMANENTE` |
| `data_inicio` | date | Data de início da vigência |
| `data_termino` | date | Data de término (apenas para temporário) |
| `requisicao_gerador` | jsonb | Payload enviado ao timetable-generator (contrato não especificado — ver DSC-002) |
| `resposta_gerador` | jsonb | Resposta do timetable-generator (contrato não especificado — ver DSC-002) |
| `id_usuario_geracao_fk` | uuid FK → usuario | Quem solicitou a geração |

**Tabelas junction (escopo da geração):**

| Tabela | Descrição |
|---|---|
| `gerar_horario_oferta_formacao` | Quais ofertas de formação estão no escopo da geração |
| `gerar_horario_calendario_letivo` | Quais calendários letivos estão no escopo |

### horario_aula_configuracao / horario_aula

Configuração dos slots de tempo de aula por campus.

| Tabela | Campos principais |
|---|---|
| `horario_aula_configuracao` | `data_inicio`, `data_fim`, `ativo`, FK → campus |
| `horario_aula` | `inicio` (time), `fim` (time), FK → configuracao |

### turma_horario_aula

Quais slots de horário uma turma possui.

| Campo | Descrição |
|---|---|
| `id_horario_aula_fk` | FK → horario_aula |
| `id_turma_fk` | FK → turma |

### diario_preferencia_agrupamento / diario_preferencia_agrupamento_aulas

Preferências de **aulas germinadas** por diário.

| Tabela | Campos principais |
|---|---|
| `diario_preferencia_agrupamento` | `data_inicio`, `data_fim`, `ativo`, FK → diario |
| `diario_preferencia_agrupamento_aulas` | `dia_semana`, `aulas_seguidas`, `horario_inicio`, `horario_termino` |

---

## Máquinas de Estado (ENUMs)

### Status de Agendamento (`calendario_agendamento_status`)

```
RASCUNHO → ATIVO → INATIVO
```

### Tipo de Agendamento (`calendario_agendamento_tipo`)

```
INDISPONIBILIDADE | AULA | EVENTO | RESERVA
```

### Status de Geração de Horário (`gerar_horario_status`)

```
SOLICITADO → PENDENTE → SUCESSO
                      → ERRO
```

### Duração de Geração (`gerar_horario_duracao`)

```
TEMPORARIO | PERMANENTE
```

---

## Questões em aberto

- O contrato JSONB entre management-service e timetable-generator (`requisicao_gerador` / `resposta_gerador`) não está especificado — ver DSC-002
- O módulo de estágio (`estagio`, `estagiario`, `empresa`) existe no SQL mas não tem representação no Figma — ver DSC-004

---

*Fonte: `artefatos/modelagem/LADESA.sql` — modelagem-alvo do sistema Ladesa.*
