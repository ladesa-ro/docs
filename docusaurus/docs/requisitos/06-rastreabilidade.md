---
sidebar_position: 6
title: Rastreabilidade
---

# Rastreabilidade

Este documento apresenta a matriz de rastreabilidade do ecossistema Ladesa, conectando a cadeia completa de artefatos: **Epic → Features → Casos de Uso → User Stories → Requisitos Funcionais → Regras de Negócio**.

A rastreabilidade garante que cada requisito possa ser rastreado até sua origem (protótipo, regra de negócio, caso de uso) e que nenhuma funcionalidade identificada no discovery fique sem cobertura nos artefatos de requisitos.

---

## Matriz de Rastreabilidade por Epic

### E-001 — Autenticação e Controle de Acesso

| Dimensão | IDs |
|---|---|
| **Features** | F-001, F-002, F-003, F-004, F-005 |
| **Casos de Uso** | UC-001, UC-002, UC-003, UC-004, UC-005 |
| **User Stories** | US-001 a US-014 |
| **Requisitos Funcionais** | RF-001 a RF-015 |
| **Regras de Negócio** | RN-01, RN-02, RN-03, RN-04, RN-05, RN-06, RN-07, RN-08, RN-46, RN-47, RN-48, RN-49, RN-64, RN-65, RN-66, RN-67 |

**Escopo:** Fluxos de login (web e mobile), acesso anônimo de aluno, alternância de papel DAPE/Professor, seleção de campus ativo, isolamento de módulos por ator.

---

### E-002 — Consulta de Horário

| Dimensão | IDs |
|---|---|
| **Features** | F-006, F-007, F-008, F-009, F-038 |
| **Casos de Uso** | UC-006, UC-007, UC-008, UC-009, UC-010 |
| **User Stories** | US-015 a US-023 |
| **Requisitos Funcionais** | RF-016 a RF-024 |
| **Regras de Negócio** | RN-01, RN-18, RN-58, RN-59 |

**Escopo:** Seleção hierárquica de turma (web e mobile), visualizações semanal e diária, navegação temporal entre semanas, diferenciação visual por cor.

---

### E-003 — Gestão de Horário Acadêmico (DAPE)

| Dimensão | IDs |
|---|---|
| **Features** | F-010, F-011, F-012, F-013, F-014, F-015, F-016 |
| **Casos de Uso** | UC-012, UC-013, UC-014, UC-015, UC-016, UC-017 |
| **User Stories** | US-024 a US-041 |
| **Requisitos Funcionais** | RF-025 a RF-043 |
| **Regras de Negócio** | RN-09, RN-10, RN-11, RN-12, RN-13, RN-14, RN-15, RN-16, RN-17, RN-45, RN-46 |

**Escopo:** Visualização global pelo DAPE (por professor, por turma, mesclado), edição manual de horário célula a célula, geração automática via solver, exportação de horário, configuração de intervalos de aula por turno e campus, gestão de disponibilidade docente.

---

### E-004 — Gestão Acadêmica (Entidades)

| Dimensão | IDs |
|---|---|
| **Features** | F-017, F-018, F-019, F-020, F-021, F-022, F-023 |
| **Casos de Uso** | UC-018, UC-019, UC-021, UC-022, UC-024, UC-025, UC-026, UC-027, UC-028, UC-029 |
| **User Stories** | US-042 a US-065 |
| **Requisitos Funcionais** | RF-044 a RF-075 |
| **Regras de Negócio** | RN-04, RN-05, RN-06, RN-19, RN-20, RN-21, RN-22, RN-33, RN-38, RN-39, RN-40, RN-41, RN-42, RN-43, RN-44, RN-45, RN-46, RN-47 |

**Escopo:** CRUD de usuários/servidores, turmas, cursos (com disciplinas por período), formações (com etapas), disciplinas, disponibilidade docente. Cadeia de dependência entre entidades acadêmicas.

---

### E-005 — Calendário Acadêmico

| Dimensão | IDs |
|---|---|
| **Features** | F-024, F-025, F-026, F-027, F-028, F-031, F-032 |
| **Casos de Uso** | UC-009, UC-010, UC-032, UC-033, UC-034, UC-035, UC-036, UC-037 |
| **User Stories** | US-066 a US-083 |
| **Requisitos Funcionais** | RF-076 a RF-105 |
| **Regras de Negócio** | RN-19, RN-20, RN-21, RN-22, RN-23, RN-24, RN-25, RN-26, RN-27, RN-28, RN-29, RN-30, RN-31, RN-32, RN-33, RN-34, RN-35, RN-36, RN-37, RN-39, RN-60 |

**Escopo:** Visualizações mensal e anual do calendário, gestão de calendários acadêmicos (CRUD com desativação), eventos globais e por entidade (turma/professor), dias não letivos, persistência de filtros.

---

### E-006 — Gestão de Eventos

| Dimensão | IDs |
|---|---|
| **Features** | F-029, F-030 |
| **Casos de Uso** | UC-015, UC-020, UC-023, UC-035, UC-036 |
| **User Stories** | US-033, US-034, US-045, US-049, US-071, US-072, US-073, US-075 |
| **Requisitos Funcionais** | RF-096 a RF-102 |
| **Regras de Negócio** | RN-19, RN-20, RN-33, RN-39 |

**Escopo:** Gestão de eventos exclusivos de turma, redirecionamento automático ao tentar editar evento global a partir de turma ou perfil de professor, eventos de semana durante edição de horário.

---

### E-007 — Registros e Relatórios

| Dimensão | IDs |
|---|---|
| **Features** | F-033, F-034, F-035 |
| **Casos de Uso** | UC-030, UC-031, UC-038, UC-039 |
| **User Stories** | US-084 a US-092 |
| **Requisitos Funcionais** | RF-106 a RF-114 |
| **Regras de Negócio** | RN-50, RN-51, RN-52 |

**Escopo:** Cadastro e edição de diários de classe (fluxo de 2 passos, imutabilidade de turma após criação), geração de relatório de aulas ministradas com filtros obrigatórios e opcionais, preview em modal, exportação em PDF.

---

### E-008 — Perfil e Comunicação

| Dimensão | IDs |
|---|---|
| **Features** | F-036, F-037 |
| **Casos de Uso** | UC-011, UC-012, UC-040 |
| **User Stories** | US-093 a US-103 |
| **Requisitos Funcionais** | RF-115 a RF-126 |
| **Regras de Negócio** | RN-06, RN-45, RN-46, RN-47, RN-63 |

**Escopo:** Visualização e edição de perfil do servidor (web e mobile), disponibilidade docente no mobile, notificações automáticas de alterações de horário e eventos, indicador de notificações não lidas.

---

### E-009 — Navegação e Experiência

| Dimensão | IDs |
|---|---|
| **Features** | F-005, F-039, F-040, F-041, F-042 |
| **Casos de Uso** | UC-001, UC-003, UC-006 (aspectos de UX/navegação) |
| **User Stories** | US-104 a US-111 |
| **Requisitos Funcionais** | RF-127 a RF-140 |
| **Regras de Negócio** | RN-03, RN-56, RN-57, RN-58, RN-59, RN-60, RN-61, RN-62, RN-63, RN-67 |

**Escopo:** Landing page institucional, dashboard de acesso rápido do DAPE, sidebars com accordions colapsáveis (estados expandido/recolhido), barra de navegação inferior mobile, tema claro/escuro (web e mobile), splash screen, busca e filtragem transversal.

---

### E-010 — Gestão de Ambientes (SISGEA)

| Dimensão | IDs |
|---|---|
| **Features** | F-043, F-044, F-045 |
| **Casos de Uso** | UC-041, UC-042, UC-043, UC-044, UC-045, UC-046 |
| **User Stories** | US-112 a US-117 |
| **Requisitos Funcionais** | RF-141 a RF-155 |
| **Regras de Negócio** | RN-08, RN-53, RN-54, RN-55 |

**Escopo:** Login próprio do SISGEA, CRUD de blocos e ambientes, gestão de reservas de ambientes em grade semanal (criação, edição, filtragem por disponibilidade), sidebar do SISGEA.

---

## Matriz de Rastreabilidade RF → RN

A tabela a seguir relaciona cada requisito funcional às regras de negócio que o fundamentam.

| RF | Regras de Negócio |
|---|---|
| RF-001 | RN-64 |
| RF-002 | RN-49 |
| RF-003 | RN-02 |
| RF-004 | RN-64 |
| RF-005 | RN-04, RN-64 |
| RF-006 | RN-03, RN-04 |
| RF-007 | RN-03 |
| RF-008 | RN-01 |
| RF-009 | RN-05, RN-06 |
| RF-010 | RN-03 |
| RF-011 | RN-46, RN-47 |
| RF-012 | RN-47 |
| RF-013 | RN-65 |
| RF-014 | RN-08 |
| RF-015 | — |
| RF-016 | — |
| RF-017 | RN-58 |
| RF-018 | — |
| RF-019 | — |
| RF-020 | RN-59 |
| RF-021 | — |
| RF-022 | RN-18 |
| RF-023 | RN-18 |
| RF-024 | — |
| RF-025 | — |
| RF-026 | — |
| RF-027 | — |
| RF-028 | — |
| RF-029 | — |
| RF-030 | RN-17 |
| RF-031 | — |
| RF-032 | RN-14 |
| RF-033 | RN-14 |
| RF-034 | RN-13 |
| RF-035 | RN-12 |
| RF-036 | RN-15 |
| RF-037 | RN-09, RN-10 |
| RF-038 | — |
| RF-039 | — |
| RF-040 | RN-16 |
| RF-041 | — |
| RF-042 | — |
| RF-043 | — |
| RF-044 | RN-04 |
| RF-045 | RN-45 |
| RF-046 | RN-46 |
| RF-047 | RN-47 |
| RF-048 | — |
| RF-049 | — |
| RF-050 | — |
| RF-051 | — |
| RF-052 | — |
| RF-053 | RN-42 |
| RF-054 | RN-43 |
| RF-055 | — |
| RF-056 | — |
| RF-057 | RN-38, RN-39 |
| RF-058 | RN-41 |
| RF-059 | RN-33 |
| RF-060 | RN-39 |
| RF-061 | RN-40 |
| RF-062 | — |
| RF-063 | — |
| RF-064 | — |
| RF-065 | — |
| RF-066 | — |
| RF-067 | — |
| RF-068 | RN-45 |
| RF-069 | RN-46 |
| RF-070 | RN-42, RN-43, RN-44 |
| RF-071 | RN-43 |
| RF-072 | RN-44 |
| RF-073 | — |
| RF-074 | — |
| RF-075 | — |
| RF-076 | — |
| RF-077 | — |
| RF-078 | RN-60 |
| RF-079 | RN-37 |
| RF-080 | — |
| RF-081 | — |
| RF-082 | RN-35 |
| RF-083 | RN-33 |
| RF-084 | RN-33, RN-39 |
| RF-085 | RN-34 |
| RF-086 | RN-31 |
| RF-087 | — |
| RF-088 | — |
| RF-089 | RN-32 |
| RF-090 | RN-27, RN-28, RN-29 |
| RF-091 | RN-23 |
| RF-092 | RN-24 |
| RF-093 | RN-25 |
| RF-094 | — |
| RF-095 | — |
| RF-096 | RN-19 |
| RF-097 | RN-20, RN-21 |
| RF-098 | RN-19, RN-20 |
| RF-099 | RN-22 |
| RF-100 | RN-26 |
| RF-101 | — |
| RF-102 | RN-11 |
| RF-103 | — |
| RF-104 | — |
| RF-105 | RN-36 |
| RF-106 | RN-52 |
| RF-107 | RN-51 |
| RF-108 | RN-50 |
| RF-109 | — |
| RF-110 | — |
| RF-111 | — |
| RF-112 | — |
| RF-113 | — |
| RF-114 | — |
| RF-115 | — |
| RF-116 | RN-06 |
| RF-117 | — |
| RF-118 | — |
| RF-119 | — |
| RF-120 | — |
| RF-121 | — |
| RF-122 | — |
| RF-123 | — |
| RF-124 | RN-63 |
| RF-125 | — |
| RF-126 | — |
| RF-127 | RN-67 |
| RF-128 | — |
| RF-129 | — |
| RF-130 | — |
| RF-131 | RN-56 |
| RF-132 | — |
| RF-133 | — |
| RF-134 | RN-03 |
| RF-135 | RN-62 |
| RF-136 | RN-02, RN-03, RN-05 |
| RF-137 | RN-30 |
| RF-138 | — |
| RF-139 | — |
| RF-140 | — |
| RF-141 | RN-08 |
| RF-142 | — |
| RF-143 | — |
| RF-144 | — |
| RF-145 | — |
| RF-146 | — |
| RF-147 | — |
| RF-148 | RN-53 |
| RF-149 | RN-55 |
| RF-150 | — |
| RF-151 | RN-54 |
| RF-152 | RN-55 |
| RF-153 | — |
| RF-154 | — |
| RF-155 | — |

---

## Análise de Órfãos

### Regras de Negócio sem RF associado direto

As regras a seguir foram identificadas no catálogo mas possuem cobertura indireta (via outros RFs correlatos) ou representam restrições de UI que se materializam em múltiplos RFs sem referência exclusiva:

| RN | Descrição resumida | Cobertura |
|---|---|---|
| RN-07 | Mobile exclui módulo DAPE | Coberto implicitamente por RF-010, RF-132 |
| RN-48 | Senha com campo mascarado | Coberto por RF-001, RF-002 (aspecto de segurança de formulário) |
| RN-57 | Accordions agrupam itens da sidebar | Coberto por RF-129 |
| RN-61 | Dashboard agrupa atalhos por categoria | Coberto por RF-128, RF-138 |
| RN-66 | Login com 4 variantes de branding | Decisão de design — sem impacto funcional (não gera RF) |

**Conclusão:** Todas as 67 regras de negócio têm cobertura em pelo menos um RF ou são classificadas como decisões de design sem impacto funcional direto (RN-66).

### Casos de Uso sem RF direto

Todos os 46 casos de uso identificados no arquivo de use cases possuem pelo menos um RF associado. A cobertura é de 100%.

---

## Índice de Referência Cruzada

### RN → RFs

| RN | RFs que a implementam |
|---|---|
| RN-01 | RF-008 |
| RN-02 | RF-003, RF-136 |
| RN-03 | RF-006, RF-007, RF-010, RF-134, RF-136 |
| RN-04 | RF-005, RF-006, RF-044 |
| RN-05 | RF-009, RF-136 |
| RN-06 | RF-009, RF-116 |
| RN-08 | RF-014, RF-141 |
| RN-09 | RF-037 |
| RN-10 | RF-037 |
| RN-11 | RF-102 |
| RN-12 | RF-035 |
| RN-13 | RF-034 |
| RN-14 | RF-032, RF-033 |
| RN-15 | RF-036 |
| RN-16 | RF-040 |
| RN-17 | RF-030 |
| RN-18 | RF-022, RF-023 |
| RN-19 | RF-096, RF-098 |
| RN-20 | RF-097, RF-098 |
| RN-21 | RF-097 |
| RN-22 | RF-099 |
| RN-23 | RF-091 |
| RN-24 | RF-092 |
| RN-25 | RF-093 |
| RN-26 | RF-100 |
| RN-27 | RF-090 |
| RN-28 | RF-090 |
| RN-29 | RF-090 |
| RN-30 | RF-137 |
| RN-31 | RF-086 |
| RN-32 | RF-089 |
| RN-33 | RF-059, RF-083, RF-084 |
| RN-34 | RF-085 |
| RN-35 | RF-082 |
| RN-36 | RF-105 |
| RN-37 | RF-079 |
| RN-38 | RF-057 |
| RN-39 | RF-057, RF-060, RF-084 |
| RN-40 | RF-061 |
| RN-41 | RF-058 |
| RN-42 | RF-053, RF-070 |
| RN-43 | RF-054, RF-070, RF-071 |
| RN-44 | RF-070, RF-072 |
| RN-45 | RF-045, RF-068 |
| RN-46 | RF-011, RF-046, RF-069 |
| RN-47 | RF-011, RF-012, RF-047 |
| RN-49 | RF-002 |
| RN-50 | RF-108 |
| RN-51 | RF-107 |
| RN-52 | RF-106 |
| RN-53 | RF-148 |
| RN-54 | RF-151 |
| RN-55 | RF-149, RF-152 |
| RN-56 | RF-131 |
| RN-58 | RF-017 |
| RN-59 | RF-020 |
| RN-60 | RF-078 |
| RN-62 | RF-135 |
| RN-63 | RF-124 |
| RN-64 | RF-001, RF-004, RF-005 |
| RN-65 | RF-013 |
| RN-67 | RF-127 |

---

## Estatísticas de Cobertura

| Dimensão | Total | Cobertos | Cobertura |
|---|---|---|---|
| Epics | 10 | 10 | 100% |
| Features (C-) | 45 | 45 | 100% |
| Casos de Uso (UC-) | 46 | 46 | 100% |
| User Stories (US-) | 117 | 117 | 100% |
| Requisitos Funcionais (RF-) | 155 | 155 | 100% |
| Regras de Negócio (RN-) | 67 | 66 com RF direto + 1 sem impacto funcional | 99% |
| Regras com impacto crítico | 13 | 13 | 100% |
| Regras com impacto alto | 23 | 23 | 100% |
