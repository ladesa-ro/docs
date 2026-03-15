---
sidebar_position: 12
sidebar_label: "Endpoints Implementados"
id: DOC-ENDPOINTS
tipo: referencia-tecnica
modulo: SHARED
status: rascunho
fonte-primaria: codigo
---

# Endpoints Implementados — Mapa de Rotas

Este documento mapeia as rotas do frontend Nuxt, os endpoints da API REST do management-service e as entidades de domínio correspondentes.

**Fontes:** `management-service/src/modules/` (24 controllers) | `web/sisgha-sisgea/app/pages/` (27 páginas)

---

## API REST — management-service

### Acesso e Autenticação

| Endpoint | Método | Entidade | Descrição |
|----------|--------|----------|-----------|
| `/autenticacao/login` | POST | — | Login via Keycloak |
| `/autenticacao/login/refresh` | POST | — | Refresh de token |
| `/autenticacao/quem-sou-eu` | GET | usuario | Dados do usuário autenticado |
| `/autenticacao/quem-sou-eu/ensino` | GET | usuario + perfil | Dados de ensino do autenticado |
| `/autenticacao/definir-senha` | POST | — | Definir senha inicial |
| `/autenticacao/redefinir-senha` | POST | — | Redefinir senha |
| `/usuarios` | GET, POST | usuario | Listar / criar usuários |
| `/usuarios/:id` | GET, PATCH, DELETE | usuario | Consultar / editar / remover |
| `/usuarios/:id/ensino` | GET | usuario + perfil | Dados de ensino do usuário |
| `/usuarios/:id/imagem/capa` | GET, PUT | imagem | Imagem de capa |
| `/usuarios/:id/imagem/perfil` | GET, PUT | imagem | Avatar do usuário |
| `/perfis` | GET, POST | perfil | Listar / criar vínculos campus-cargo |
| `/perfis/:id` | GET | perfil | Consultar perfil |
| `/perfis/:id/ensino` | GET | perfil + diario | Dados de ensino do perfil |

### Ensino (Estrutura Acadêmica)

| Endpoint | Método | Entidade | Descrição |
|----------|--------|----------|-----------|
| `/cursos` | GET, POST | curso | Listar / criar cursos |
| `/cursos/:id` | GET, PATCH, DELETE | curso | CRUD unitário |
| `/cursos/:id/imagem/capa` | GET, PUT | imagem | Imagem de capa do curso |
| `/disciplinas` | GET, POST | disciplina | Listar / criar disciplinas |
| `/disciplinas/:id` | GET, PATCH, DELETE | disciplina | CRUD unitário |
| `/disciplinas/:id/imagem/capa` | GET, PUT | imagem | Imagem de capa |
| `/turmas` | GET, POST | turma | Listar / criar turmas |
| `/turmas/:id` | GET, PATCH, DELETE | turma | CRUD unitário |
| `/turmas/:id/imagem/capa` | GET, PUT | imagem | Imagem de capa |
| `/diarios` | GET, POST | diario | Listar / criar diários |
| `/diarios/:id` | GET, PATCH, DELETE | diario | CRUD unitário |
| `/diarios-professores` | GET, POST | diario_professor | Vínculos professor-diário |
| `/diarios-professores/:id` | GET, PATCH, DELETE | diario_professor | CRUD unitário |
| `/ofertas-formacoes` | GET, POST | oferta_formacao | Listar / criar ofertas |
| `/ofertas-formacoes/:id` | GET, PATCH, DELETE | oferta_formacao | CRUD unitário |
| `/ofertas-formacoes-niveis-formacoes` | GET, POST | oferta_formacao_nivel_formacao | Vínculo oferta × nível |
| `/ofertas-formacoes-niveis-formacoes/:id` | GET, PATCH, DELETE | oferta_formacao_nivel_formacao | CRUD unitário |
| `/modalidades` | GET, POST | modalidade | Listar / criar modalidades |
| `/modalidades/:id` | GET, PATCH, DELETE | modalidade | CRUD unitário |
| `/niveis-formacoes` | GET, POST | nivel_formacao | Listar / criar níveis |
| `/niveis-formacoes/:id` | GET, PATCH, DELETE | nivel_formacao | CRUD unitário |
| `/diarios-preferencia-agrupamento` | GET, POST | diario_preferencia_agrupamento | Preferências de aulas germinadas |
| `/diarios-preferencia-agrupamento/:id` | GET, PATCH, DELETE | diario_preferencia_agrupamento | CRUD unitário |

### Ambientes (SISGEA)

| Endpoint | Método | Entidade | Descrição |
|----------|--------|----------|-----------|
| `/ambientes` | GET, POST | ambiente | Listar / criar ambientes |
| `/ambientes/:id` | GET, PATCH, DELETE | ambiente | CRUD unitário |
| `/ambientes/:id/imagem/capa` | GET, PUT | imagem | Imagem de capa |
| `/blocos` | GET, POST | bloco | Listar / criar blocos |
| `/blocos/:id` | GET, PATCH, DELETE | bloco | CRUD unitário |
| `/blocos/:id/imagem/capa` | GET, PUT | imagem | Imagem de capa |
| `/campi` | GET, POST | campus | Listar / criar campi |
| `/campi/:id` | GET, PATCH, DELETE | campus | CRUD unitário |

### Horários e Calendário

| Endpoint | Método | Entidade | Descrição |
|----------|--------|----------|-----------|
| `/calendarios-letivos` | GET, POST | calendario_letivo | Listar / criar calendários |
| `/calendarios-letivos/:id` | GET, PATCH, DELETE | calendario_letivo | CRUD unitário |
| `/dias-calendario` | GET, POST | calendario_letivo_dia | Listar / criar dias |
| `/dias-calendario/:id` | GET, PATCH, DELETE | calendario_letivo_dia | CRUD unitário |
| `/gerar-horario/poc` | GET | gerar_horario | PoC de geração (endpoint provisório) |

### Estágio

| Endpoint | Método | Entidade | Descrição |
|----------|--------|----------|-----------|
| `/estagios` | GET, POST | estagio | Listar / criar estágios |
| `/estagios/:id` | GET, PATCH, DELETE | estagio | CRUD unitário |
| `/estagiarios` | GET, POST | estagiario | Listar / criar estagiários |
| `/estagiarios/:id` | GET, PATCH, DELETE | estagiario | CRUD unitário |
| `/empresas` | GET, POST | empresa | Listar / criar empresas |
| `/empresas/:id` | GET, PATCH, DELETE | empresa | CRUD unitário |

### Localidades e Armazenamento

| Endpoint | Método | Entidade | Descrição |
|----------|--------|----------|-----------|
| `/base/estados` | GET | base_estado | Listar estados |
| `/base/estados/:id` | GET | base_estado | Consultar estado |
| `/base/cidades` | GET | base_cidade | Listar cidades |
| `/base/cidades/:id` | GET | base_cidade | Consultar cidade |
| `/arquivos/:id` | GET | arquivo | Download de arquivo |

---

## Frontend Nuxt — Rotas implementadas

### Páginas públicas

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | `pages/index.vue` | Home / redirecionamento |
| `/login` | `pages/login.vue` | Tela de login |
| `/logout` | `pages/logout.vue` | Handler de logout |
| `/protected` | `pages/protected.vue` | Página protegida (auth guard) |

### SISGHA — Consulta (Professor e Aluno)

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/sisgha/consulta` | `pages/sisgha/consulta/index.vue` | Consulta geral de horário |
| `/sisgha/consulta/horario/:id` | `pages/sisgha/consulta/horario/[id]/index.vue` | Visualizar horário específico |
| `/sisgha/professor` | `pages/sisgha/professor/index.vue` | Dashboard do professor |
| `/sisgha/professor/calendario` | `pages/sisgha/professor/calendario/index.vue` | Calendário do professor |
| `/sisgha/professor/perfil` | `pages/sisgha/professor/perfil/index.vue` | Perfil e disponibilidade |

### SISGHA — DAPE

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/sisgha/dape` | `pages/sisgha/dape/index.vue` | Dashboard DAPE |
| `/sisgha/dape/perfil` | `pages/sisgha/dape/perfil/index.vue` | Perfil / config do sistema |
| `/sisgha/dape/horario` | `pages/sisgha/dape/horario/index.vue` | Grade de horário + geração |
| `/sisgha/dape/horario/professor/:id` | `pages/sisgha/dape/horario/professor/[id]/index.vue` | Editar horário de professor |
| `/sisgha/dape/horario/turma/:id` | `pages/sisgha/dape/horario/turma/[id]/index.vue` | Editar horário de turma |
| `/sisgha/dape/calendario` | `pages/sisgha/dape/calendario/index.vue` | Calendário acadêmico |
| `/sisgha/dape/diarios` | `pages/sisgha/dape/diarios/index.vue` | Gestão de diários |
| `/sisgha/dape/disciplinas` | `pages/sisgha/dape/disciplinas/index.vue` | Gestão de disciplinas |
| `/sisgha/dape/cursos` | `pages/sisgha/dape/cursos/index.vue` | Gestão de cursos |
| `/sisgha/dape/turmas` | `pages/sisgha/dape/turmas/index.vue` | Gestão de turmas |
| `/sisgha/dape/usuarios` | `pages/sisgha/dape/usuarios/index.vue` | Gestão de usuários |
| `/sisgha/dape/usuarios/:id` | `pages/sisgha/dape/usuarios/[id]/index.vue` | Editar usuário |
| `/sisgha/dape/intervalos` | `pages/sisgha/dape/intervalos/index.vue` | Config horários de aula |
| `/sisgha/dape/relatorios/aulas-ministradas` | `pages/sisgha/dape/relatorios/aulasMinistradas.vue` | Relatório de aulas |

### SISGEA

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/sisgea/ambientes` | `pages/sisgea/ambientes/index.vue` | Ambientes / salas |
| `/sisgea/blocos` | `pages/sisgea/blocos/index.vue` | Blocos / edifícios |
| `/sisgea/reservas` | `pages/sisgea/reservas/index.vue` | Reservas (grid semanal) |

---

## Mapa de integração: Frontend → Backend → Domínio

| Funcionalidade | Rota frontend | Endpoint backend | Entidade SQL |
|---------------|---------------|-----------------|-------------|
| Login | `/login` | `POST /autenticacao/login` | — (Keycloak) |
| Dashboard DAPE | `/sisgha/dape` | `GET /autenticacao/quem-sou-eu` | usuario, perfil |
| Gestão de cursos | `/sisgha/dape/cursos` | `GET/POST /cursos` | curso |
| Gestão de turmas | `/sisgha/dape/turmas` | `GET/POST /turmas` | turma |
| Gestão de diários | `/sisgha/dape/diarios` | `GET/POST /diarios` | diario |
| Gestão de disciplinas | `/sisgha/dape/disciplinas` | `GET/POST /disciplinas` | disciplina |
| Gestão de usuários | `/sisgha/dape/usuarios` | `GET/POST /usuarios` | usuario, perfil |
| Calendário DAPE | `/sisgha/dape/calendario` | `GET /calendarios-letivos` | calendario_letivo |
| Grade de horário | `/sisgha/dape/horario` | `GET /gerar-horario/poc` | gerar_horario |
| Config intervalos | `/sisgha/dape/intervalos` | (sem endpoint dedicado ainda) | horario_aula_configuracao |
| Relatório de aulas | `/sisgha/dape/relatorios/aulas-ministradas` | (composição de endpoints) | diario, diario_professor |
| Ambientes (SISGEA) | `/sisgea/ambientes` | `GET/POST /ambientes` | ambiente |
| Blocos (SISGEA) | `/sisgea/blocos` | `GET/POST /blocos` | bloco |
| Reservas (SISGEA) | `/sisgea/reservas` | (sem endpoint dedicado ainda) | calendario_agendamento |
| Horário professor | `/sisgha/professor` | `GET /autenticacao/quem-sou-eu/ensino` | usuario, diario_professor |
| Calendário professor | `/sisgha/professor/calendario` | `GET /calendarios-letivos` | calendario_letivo |

---

## Endpoints não implementados (previstos na modelagem SQL)

As seguintes funcionalidades têm tabelas no SQL mas ainda não possuem endpoints REST:

| Funcionalidade | Entidades SQL | Status |
|---------------|-------------|--------|
| Agendamentos de calendário | `calendario_agendamento`, `calendario_agendamento_*` | Sem controller |
| Etapas do calendário | `calendario_letivo_etapa` | Sem controller |
| Horários de aula configuráveis | `horario_aula_configuracao`, `horario_aula` | Sem controller |
| Vínculo turma-horário | `turma_horario_aula` | Sem controller |
| Preferências de agrupamento (detalhes) | `diario_preferencia_agrupamento_aulas` | Sem controller |
| Reservas de ambiente | (via calendario_agendamento tipo RESERVA) | Sem controller dedicado |
| Geração de horário (produção) | `gerar_horario` (apenas PoC) | Apenas `GET /gerar-horario/poc` |

---

## Estatísticas

| Métrica | Valor |
|---------|-------|
| Controllers no backend | 24 |
| Endpoints REST totais | ~170 |
| Páginas Nuxt | 27 |
| Entidades com CRUD completo | 18 |
| Entidades sem endpoint | ~10 (calendario_agendamento, etapas, horário_aula, etc.) |

---

*Fonte: `management-service/src/modules/` | `web/sisgha-sisgea/app/pages/`*
