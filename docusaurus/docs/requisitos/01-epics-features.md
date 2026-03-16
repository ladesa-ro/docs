---
sidebar_position: 1
title: Epics e Features
---

# Epics e Features

Este documento organiza as 45 features do ecossistema Ladesa (SISGHA + SISGEA) em dez épicos funcionais. Cada épico agrupa features relacionadas por domínio e objetivo de negócio.

**Legenda de atores:**
- **ALU** — Aluno (acesso anônimo)
- **PROF** — Professor (servidor autenticado)
- **DAPE** — Operador da Divisão Acadêmica de Pesquisa e Ensino
- **ADM_EA** — Administrador de Espaços e Ambientes (SISGEA)

---

## E-001 — Autenticação e Controle de Acesso

**Objetivo:** Garantir que cada ator acesse o sistema com as permissões corretas para seu papel, incluindo acesso anônimo para alunos e alternância de papel para servidores com dupla função.

**Sistemas:** SISGHA-Web, SISGHA-Mobile

**Prioridade:** Alta

### Features (Features)

| ID | Feature | Domínio | Atores |
|---|---|---|---|
| F-001 | Autenticação de servidor | Autenticação | PROF, DAPE |
| F-002 | Acesso anônimo de aluno | Autenticação | ALU |
| F-003 | Alternância de papel (DAPE/Professor) | Autenticação | PROF, DAPE |
| F-004 | Seleção de campus ativo | Contexto Global | PROF, DAPE |
| F-005 | Alternância de tema visual | Experiência | PROF, DAPE |

**Detalhamento:**

- **F-001** — O sistema autentica servidores (professores e DAPE) via matrícula e senha, redirecionando para o painel correspondente ao papel. Inclui fluxo de recuperação de senha. Disponível em web e mobile.
- **F-002** — Alunos acessam o sistema sem matrícula ou senha, via botão secundário "Acessar como Aluno". O acesso é anônimo e somente leitura, sem registro de identidade.
- **F-003** — Servidores com ambos os papéis (DAPE e Professor) alternam entre interfaces sem necessidade de logout/login, via seletor no cabeçalho.
- **F-004** — Quando vinculado a mais de um campus, o servidor seleciona o campus ativo, que define o contexto de todos os dados exibidos (turmas, professores, horários, intervalos).
- **F-005** — O sistema suporta tema claro e escuro, alternável a qualquer momento via ícone no cabeçalho. O mobile possui ambos os temas prototipados com confirmação via modal.

**Dependências:** F-001 é pré-condição para F-003 e F-004.

---

## E-002 — Consulta de Horário

**Objetivo:** Permitir que alunos e professores consultem a grade horária semanal e diária, com navegação temporal, sem feature de edição.

**Sistemas:** SISGHA-Web, SISGHA-Mobile

**Prioridade:** Alta

### Features (Features)

| ID | Feature | Domínio | Atores |
|---|---|---|---|
| F-006 | Publicação de horário para consulta | Horário | ALU, PROF, DAPE |
| F-007 | Visualização de horário semanal | Horário | ALU, PROF, DAPE |
| F-008 | Visualização de horário diário | Horário | ALU, PROF |
| F-009 | Navegação temporal por semana | Horário | ALU, PROF, DAPE |
| F-038 | Seleção hierárquica de turma (aluno) | Consulta Aluno | ALU |

**Detalhamento:**

- **F-006** — Os horários gerados ou editados pelo DAPE ficam disponíveis para consulta por professores e alunos em modo somente leitura.
- **F-007** — Grade semanal com dias da semana no eixo horizontal e intervalos de aula no eixo vertical. Células coloridas representam cada disciplina.
- **F-008** — Lista de aulas de um dia específico em formato de cards (disciplina, professor, sala, horário). Navegação por abas de dia.
- **F-009** — Setas de navegação permitem avançar ou recuar semanas letivas. O cabeçalho exibe o período de referência (ex: "Abril — 28/04 a 03/05").
- **F-038** — Alunos selecionam sua turma por seleção hierárquica: Ano Letivo → Modalidade → Curso → Turma. No web, via ComboBoxes em cascata; no mobile, via accordion animado com três níveis.

**Dependências:** F-038 é pré-condição para ALU acessar F-006, F-007 e F-008. F-006 depende de E-003 (horários publicados pelo DAPE).

---

## E-003 — Gestão de Horário Acadêmico (DAPE)

**Objetivo:** Prover ao DAPE ferramentas completas para visualizar, editar manualmente, gerar automaticamente e exportar grades horárias, além de configurar os intervalos de aula e gerenciar a disponibilidade docente.

**Sistemas:** SISGHA-Web

**Prioridade:** Alta

### Features (Features)

| ID | Feature | Domínio | Atores |
|---|---|---|---|
| F-010 | Visualização global de horários (DAPE) | Horário | DAPE |
| F-011 | Visualização mesclada de horários | Horário | DAPE |
| F-012 | Edição manual de horário | Horário | DAPE |
| F-013 | Geração automática de horário | Horário | DAPE |
| F-014 | Exportação de horário | Horário | DAPE |
| F-015 | Configuração de intervalos de aula | Horário | DAPE |
| F-016 | Gestão de disponibilidade docente | Horário | PROF, DAPE |

**Detalhamento:**

- **F-010** — O DAPE consulta o horário de qualquer professor ou turma do campus em três modos: por professor, por turma e mesclado. Inclui busca por nome e filtros por modalidade/curso.
- **F-011** — Sobreposição de horários de múltiplos professores e/ou turmas na mesma grade para detectar conflitos de alocação. Painel lateral com seleção múltipla e busca.
- **F-012** — Edição célula a célula da grade horária via popover: alocar, alterar, remover ou mover disciplinas. Alterações podem ter escopo permanente ou temporário (apenas a semana em edição).
- **F-013** — Geração automática de grade otimizada com base em disponibilidade docente, turmas, disciplinas e intervalos cadastrados. Dois modos: permanente (substitui o horário atual) e temporário (preview sem substituição).
- **F-014** — Download da visualização de horário via botão no cabeçalho da tela de visualização DAPE.
- **F-015** — Configuração de horários de início e fim de cada aula, organizados por turno (Matutino, Vespertino, Noturno) e por campus. Define a estrutura temporal base de todas as grades.
- **F-016** — Registro da disponibilidade de cada professor em formato de grade semanal (dia × turno). Professor edita pelo mobile; DAPE edita via modal na web. Usada como restrição na geração e edição de horários.

**Dependências:** F-012 e F-013 dependem de F-015 (intervalos configurados) e de E-004 (turmas, professores e disciplinas cadastrados). F-013 depende também de F-016 (disponibilidade docente).

---

## E-004 — Gestão Acadêmica (Entidades)

**Objetivo:** Permitir ao DAPE cadastrar e manter o registro das entidades acadêmicas fundamentais: usuários, turmas, cursos, formações, etapas e disciplinas.

**Sistemas:** SISGHA-Web

**Prioridade:** Alta

### Features (Features)

| ID | Feature | Domínio | Atores |
|---|---|---|---|
| F-017 | Cadastro e gestão de usuários | Gestão Acadêmica | DAPE |
| F-018 | Cadastro e gestão de turmas | Gestão Acadêmica | DAPE |
| F-019 | Cadastro e gestão de cursos | Gestão Acadêmica | DAPE |
| F-020 | Cadastro e gestão de formações | Gestão Acadêmica | DAPE |
| F-021 | Definição de etapas por período | Gestão Acadêmica | DAPE |
| F-022 | Cadastro e gestão de disciplinas | Gestão Acadêmica | DAPE |
| F-023 | Vinculação de disciplinas a períodos | Gestão Acadêmica | DAPE |

**Detalhamento:**

- **F-017** — CRUD de servidores (professores e DAPE): dados pessoais, função, vínculos a campus e disponibilidade. A seção de disponibilidade aparece condicionalmente apenas quando a função Professor está selecionada em pelo menos um campus.
- **F-018** — CRUD de turmas com vínculo a curso e modalidade. Turmas cadastradas ficam disponíveis para alunos consultarem e para o DAPE alocar horários.
- **F-019** — Cadastro de cursos em dois passos: dados básicos (passo 1) e seleção de disciplinas por período (passo 2). Requer formação e disciplinas já cadastradas.
- **F-020** — Cadastro de formações acadêmicas (ex: Técnico Integrado, Graduação) em dois passos: dados básicos e definição de etapas. Formação define a estrutura de períodos letivos.
- **F-021** — Subdivisões de cada período letivo (ex: 1º bimestre, recuperação, exame) definidas na formação de forma abstrata. Recebem datas concretas ao serem vinculadas a um calendário acadêmico.
- **F-022** — CRUD de disciplinas do catálogo acadêmico, disponíveis para vínculo a cursos e alocação em horários.
- **F-023** — Associação de disciplinas a períodos letivos de um curso via grade interativa de seleção. Realizado no passo 2 do cadastro de curso.

**Dependências:** F-019 depende de F-020 e F-022. F-021 é parte integrante de F-020. F-023 é parte integrante de F-019.

---

## E-005 — Calendário Acadêmico

**Objetivo:** Prover ao DAPE ferramentas para criar e manter calendários acadêmicos com datas de etapas, e permitir a todos os atores consultar o calendário com eventos e dias não letivos.

**Sistemas:** SISGHA-Web, SISGHA-Mobile

**Prioridade:** Alta

### Features (Features)

| ID | Feature | Domínio | Atores |
|---|---|---|---|
| F-024 | Gestão de calendário acadêmico | Calendário | DAPE |
| F-025 | Visualização de calendário mensal | Calendário | ALU, PROF, DAPE |
| F-026 | Visualização de calendário anual | Calendário | ALU, PROF, DAPE |
| F-027 | Gestão de eventos acadêmicos | Calendário | DAPE |
| F-028 | Gestão de agenda do professor | Calendário | DAPE |
| F-031 | Gestão de dias não letivos | Calendário | DAPE |
| F-032 | Persistência de filtros de calendário | Calendário | DAPE |

**Detalhamento:**

- **F-024** — Criação, edição e desativação de calendários acadêmicos em dois passos: dados básicos (passo 1) e definição de datas das etapas por período (passo 2). Calendários não são excluídos, apenas desativados. O término de um período pode extrapolar o ano letivo (cenário de paralisação institucional).
- **F-025** — Exibição do calendário em formato mensal com marcações de eventos e dias não letivos. Lista de eventos do mês ao lado. Disponível para todos os atores. DAPE e Professor têm filtros adicionais por modalidade/curso.
- **F-026** — Exibição do calendário em grade anual com os 12 meses simultaneamente. Disponível para todos os atores.
- **F-027** — Criação e edição de eventos acadêmicos globais compartilhados entre múltiplas turmas e professores. Suporta tipos variados, configuração de cor, datas, horários e seleção de participantes por formação via accordions. Eventos globais só podem ser editados na gestão centralizada de eventos.
- **F-028** — Consulta e edição de eventos da agenda de cada professor (atividades e indisponibilidades). Acessível pela listagem de usuários ou pelo modo de edição de horário.
- **F-031** — Cadastro de dias não letivos (feriados, recessos) vinculados ao calendário acadêmico, com visualização mensal e anual. Dias registrados aparecem marcados no calendário de todos os atores.
- **F-032** — Os filtros de calendário (modalidade, ano letivo, formação, curso) são persistidos entre navegações via gerenciamento de estado, sem perda ao transitar entre telas.

**Dependências:** F-024 depende de F-020 e F-021 (formação com etapas). F-027 depende de F-024 (calendário ativo). F-031 depende de F-024.

---

## E-006 — Gestão de Eventos

**Objetivo:** Prover ao DAPE mecanismos para gerenciar eventos associados a turmas e professores, garantindo que eventos compartilhados entre múltiplos participantes sejam editados em ponto central único.

**Sistemas:** SISGHA-Web

**Prioridade:** Média

### Features (Features)

| ID | Feature | Domínio | Atores |
|---|---|---|---|
| F-029 | Gestão de eventos por turma | Calendário | DAPE |
| F-030 | Redirecionamento de evento global | Calendário | DAPE |

**Detalhamento:**

- **F-029** — Consulta e gerenciamento de eventos exclusivos de uma turma, acessível a partir da listagem de turmas. Eventos criados aqui pertencem exclusivamente à turma.
- **F-030** — Quando o DAPE tenta editar um evento compartilhado entre múltiplos participantes a partir de uma turma ou perfil de professor, o sistema detecta o vínculo global e redireciona automaticamente para a gestão centralizada de eventos, exibindo aviso informativo.

**Dependências:** F-029 e F-030 dependem de F-018 (turmas cadastradas) e F-027 (eventos globais).

---

## E-007 — Registros e Relatórios

**Objetivo:** Permitir ao DAPE criar diários de classe e gerar relatórios de aulas ministradas, com exportação em PDF.

**Sistemas:** SISGHA-Web

**Prioridade:** Média

### Features (Features)

| ID | Feature | Domínio | Atores |
|---|---|---|---|
| F-033 | Cadastro e gestão de diários de classe | Registro | DAPE |
| F-034 | Geração de relatório de aulas ministradas | Relatórios | DAPE |
| F-035 | Exportação de relatório em PDF | Relatórios | DAPE |

**Detalhamento:**

- **F-033** — Criação e edição de diários de classe em dois passos: seleção de turma e disciplina (passo 1) e preenchimento dos dados do diário (passo 2). A turma não é editável após a criação do diário.
- **F-034** — Geração de relatório de aulas ministradas por professor e semestre, com filtros obrigatórios (professor e semestre) e até quatro filtros opcionais. Oferece preview em modal antes da exportação.
- **F-035** — Exportação do relatório de aulas em formato PDF para download, acionável diretamente ou após preview.

**Dependências:** F-033 depende de F-018 (turmas) e F-019 (cursos com disciplinas vinculadas). F-034 depende de horários publicados com aulas registradas.

---

## E-008 — Perfil e Comunicação

**Objetivo:** Permitir que servidores mantenham seus dados pessoais atualizados e que alunos e professores recebam notificações automáticas sobre alterações de horário e eventos.

**Sistemas:** SISGHA-Web, SISGHA-Mobile

**Prioridade:** Média

### Features (Features)

| ID | Feature | Domínio | Atores |
|---|---|---|---|
| F-036 | Gestão de perfil do servidor | Perfil | PROF, DAPE |
| F-037 | Notificação de alterações | Comunicação | ALU, PROF |

**Detalhamento:**

- **F-036** — Visualização e edição de dados pessoais, campus vinculado, disciplinas e turmas de ensino, e grade de disponibilidade. Professor edita disponibilidade no mobile via células clicáveis e na web via modal. DAPE possui modais adicionais para disponibilidade e troca de campus.
- **F-037** — Notificações automáticas sobre alterações de horário, eventos e avisos administrativos. Exibidas como lista de cards no mobile (tela dedicada) e como dropdown via ícone de sino no web. Não há criação manual; as notificações são geradas pelo sistema.

**Dependências:** F-037 é disparado por alterações em E-003 e E-005.

---

## E-009 — Navegação e Experiência

**Objetivo:** Prover padrões de navegação e busca consistentes em toda a interface, garantindo acesso rápido às funcionalidades e experiência de uso eficiente em web e mobile.

**Sistemas:** SISGHA-Web, SISGHA-Mobile

**Prioridade:** Média

### Features (Features)

| ID | Feature | Domínio | Atores |
|---|---|---|---|
| F-039 | Dashboard de acesso rápido | Navegação | DAPE |
| F-040 | Navegação por sidebar com accordions | Navegação | PROF, DAPE, ADM_EA |
| F-041 | Navegação mobile por barra inferior | Navegação | ALU, PROF |
| F-042 | Busca e filtragem de entidades | Transversal | ALU, PROF, DAPE, ADM_EA |

**Detalhamento:**

- **F-039** — Dashboard inicial do DAPE com atalhos organizados por categoria (Horário Acadêmico, Relatórios, Diários). Funciona como hub de navegação para funcionalidades não acessíveis diretamente pela sidebar.
- **F-040** — Barra de navegação lateral persistente com menus hierárquicos via accordions colapsáveis. Dois estados: expandido e recolhido. Agrupa funcionalidades em Gestão (Intervalos, Diários, Turmas, Usuários) e Ensino (Cursos, Disciplinas).
- **F-041** — Barra de navegação inferior fixa no mobile com três ícones: Calendário, Home e Perfil. Presente em todas as telas de aluno e professor.
- **F-042** — Componentes reutilizáveis de busca e filtragem presentes em todas as telas de listagem: busca por texto em tempo real e filtros categóricos (modalidade, ano letivo, campus, formação, curso, tipo de evento, período etc.).

**Dependências:** F-039 é ponto de entrada para E-003 e E-007. F-042 é transversal a todos os épicos com listagem de entidades.

---

## E-010 — Gestão de Ambientes (SISGEA)

**Objetivo:** Permitir ao Administrador de Espaços e Ambientes cadastrar blocos e ambientes do campus, e gerenciar reservas por grade semanal.

**Sistemas:** SISGEA-Web

**Prioridade:** Alta

### Features (Features)

| ID | Feature | Domínio | Atores |
|---|---|---|---|
| F-043 | Cadastro e gestão de blocos | Infraestrutura | ADM_EA |
| F-044 | Cadastro e gestão de ambientes | Infraestrutura | ADM_EA |
| F-045 | Reserva de ambientes por grade semanal | Infraestrutura | ADM_EA |

**Detalhamento:**

- **F-043** — CRUD de blocos (prédios/edificações) do campus. Blocos são containers de ambientes. Acesso via sistema SISGEA com autenticação própria.
- **F-044** — CRUD de ambientes (salas, laboratórios, auditórios) dentro de blocos, tornando-os disponíveis para reserva.
- **F-045** — Alocação de ambientes para dias e horários específicos via grade semanal (6 dias × N horários). Reserva feita via modal com lista de locais disponíveis e navegação entre dias.

**Dependências:** F-044 depende de F-043 (bloco cadastrado). F-045 depende de F-044 (ambientes cadastrados).

---

## Matriz de Rastreabilidade: Épico × Sistemas

| Épico | SISGHA-Web | SISGHA-Mobile | SISGEA-Web |
|---|---|---|---|
| E-001 Autenticação | ✓ | ✓ | — |
| E-002 Consulta de Horário | ✓ | ✓ | — |
| E-003 Gestão de Horário (DAPE) | ✓ | — | — |
| E-004 Gestão Acadêmica | ✓ | — | — |
| E-005 Calendário Acadêmico | ✓ | ✓ | — |
| E-006 Gestão de Eventos | ✓ | — | — |
| E-007 Registros e Relatórios | ✓ | — | — |
| E-008 Perfil e Comunicação | ✓ | ✓ | — |
| E-009 Navegação e Experiência | ✓ | ✓ | ✓ |
| E-010 Gestão de Ambientes | — | — | ✓ |

---

## Resumo por Prioridade

| Prioridade | Épicos |
|---|---|
| Alta | E-001, E-002, E-003, E-004, E-005, E-010 |
| Média | E-006, E-007, E-008, E-009 |

**Total de features:** 45 (F-001 a F-045, exceto F-038 realocada em E-002)
