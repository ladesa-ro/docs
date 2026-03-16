---
sidebar_position: 3
title: Gestão Acadêmica
---

# Gestão Acadêmica

User stories relacionadas ao cadastro e edição de usuários, turmas, cursos, formações, disciplinas e diários de classe, incluindo eventos vinculados a cada entidade.

---

### US-042 — Listagem e busca de usuários (DAPE)

**Como** DAPE, **quero** visualizar todos os servidores cadastrados em grid de cards e buscar por nome ou matrícula, **para** encontrar rapidamente o servidor que preciso gerenciar.

**Critérios de aceitação:**
- [ ] A tela de usuários exibe cards com avatar, nome e funções do servidor.
- [ ] A barra de pesquisa filtra os cards em tempo real por nome ou matrícula.
- [ ] Os cards exibem ações disponíveis: editar dados e acessar agenda.

**Rastreabilidade:** UC-021, UC-022, F-017, RF-044
**Prioridade:** Alta

---

### US-043 — Cadastro de novo usuário servidor (DAPE)

**Como** DAPE, **quero** registrar um novo servidor no sistema informando dados pessoais, função e campus vinculado, **para** que ele possa autenticar-se e ser alocado em horários.

**Critérios de aceitação:**
- [ ] O botão "+" abre modal de cadastro com campos para dados pessoais, função (DAPE ou Professor) e vínculo de campus.
- [ ] Quando a função Professor é selecionada para pelo menos um campus, o sistema exibe a seção de disponibilidade.
- [ ] Professores vinculados a mais de um campus têm disponibilidade configurável por campus via carrossel.
- [ ] Após salvar, o novo usuário aparece na listagem e pode autenticar-se no sistema.

**Rastreabilidade:** UC-021, F-017, RF-044, RF-045
**Prioridade:** Alta

---

### US-044 — Edição de dados de usuário servidor (DAPE)

**Como** DAPE, **quero** editar os dados de um servidor existente, incluindo função, campus vinculado e disponibilidade, **para** manter o cadastro atualizado.

**Critérios de aceitação:**
- [ ] O ícone de edição no card do servidor abre modal de edição pré-preenchido.
- [ ] A seção de disponibilidade aparece ou desaparece conforme a função Professor é ativada ou desativada.
- [ ] Após salvar, as permissões são ajustadas na próxima sessão do servidor.
- [ ] O cancelamento fecha o modal sem persistir alterações.

**Rastreabilidade:** UC-022, F-017, RF-044, RF-045, RF-046
**Prioridade:** Média

---

### US-045 — Gerenciamento da agenda de um professor (DAPE)

**Como** DAPE, **quero** consultar e editar a agenda de eventos de um professor a partir da tela de usuários, **para** registrar atividades e indisponibilidades que afetam o planejamento de horários.

**Critérios de aceitação:**
- [ ] O botão de agenda no card do professor abre modal com lista de eventos.
- [ ] O DAPE pode criar evento do tipo atividade ou indisponibilidade preenchendo nome, cor, datas e horários.
- [ ] O checkbox "Dura todo o dia" oculta campos de horário de início e fim.
- [ ] Eventos globais detectados são redirecionados para a gestão central de eventos.

**Rastreabilidade:** UC-023, F-028, F-030, RF-047
**Prioridade:** Média

---

### US-046 — Listagem e busca de turmas (DAPE)

**Como** DAPE, **quero** visualizar todas as turmas cadastradas em grid de cards e buscar por nome, **para** localizar rapidamente a turma que preciso gerenciar.

**Critérios de aceitação:**
- [ ] A tela de turmas exibe cards com nome da turma e curso vinculado.
- [ ] A barra de pesquisa filtra os cards por nome em tempo real.
- [ ] Cada card exibe ações: editar e acessar eventos da turma.

**Rastreabilidade:** UC-018, UC-019, F-018, RF-048
**Prioridade:** Alta

---

### US-047 — Cadastro de nova turma (DAPE)

**Como** DAPE, **quero** registrar uma nova turma vinculando-a a um curso existente, **para** que alunos possam selecionar a turma e visualizar o horário.

**Critérios de aceitação:**
- [ ] O botão "+" abre modal de cadastro com campos de nome, curso vinculado e modalidade.
- [ ] O sistema exige que o curso já esteja cadastrado antes de vincular a turma.
- [ ] Após salvar, a turma aparece na listagem e fica disponível para seleção por alunos.
- [ ] Dados incompletos ou inválidos exibem mensagens de validação nos campos correspondentes.

**Rastreabilidade:** UC-018, F-018, RF-048, RF-049
**Prioridade:** Alta

---

### US-048 — Edição de dados de uma turma (DAPE)

**Como** DAPE, **quero** alterar os dados de uma turma existente, **para** corrigir informações ou atualizar o curso vinculado.

**Critérios de aceitação:**
- [ ] O ícone de edição no card da turma abre modal de edição pré-preenchido.
- [ ] Após salvar, os dados atualizados são refletidos na listagem e nas telas de horário.
- [ ] O cancelamento fecha o modal sem persistir alterações.

**Rastreabilidade:** UC-019, F-018, RF-048
**Prioridade:** Média

---

### US-049 — Cadastro de evento exclusivo de turma (DAPE)

**Como** DAPE, **quero** cadastrar eventos exclusivos para uma turma específica, **para** registrar ocorrências que afetam apenas aquela turma.

**Critérios de aceitação:**
- [ ] O botão de eventos no card da turma abre modal com lista de eventos da turma.
- [ ] O DAPE pode criar evento preenchendo nome, tipo, cor, datas e horários.
- [ ] O evento criado fica vinculado exclusivamente à turma selecionada.
- [ ] Eventos globais detectados são redirecionados para a gestão central.

**Rastreabilidade:** UC-020, F-029, F-030, RF-050
**Prioridade:** Média

---

### US-050 — Edição de evento exclusivo de turma (DAPE)

**Como** DAPE, **quero** editar os dados de um evento exclusivo de uma turma, **para** corrigir informações ou ajustar datas e horários.

**Critérios de aceitação:**
- [ ] O ícone de edição em um evento da turma abre modal de edição pré-preenchido.
- [ ] Após salvar, as alterações são refletidas no calendário da turma.
- [ ] Se o evento for global, o sistema redireciona para a gestão central de eventos.

**Rastreabilidade:** UC-020 (A1), F-029, F-030, RF-050
**Prioridade:** Média

---

### US-051 — Listagem e busca de cursos (DAPE)

**Como** DAPE, **quero** visualizar todos os cursos cadastrados e buscar por nome, **para** localizar e gerenciar o curso desejado.

**Critérios de aceitação:**
- [ ] A tela de cursos exibe cards de curso com nome e formação vinculada.
- [ ] A barra de pesquisa filtra os cards por texto em tempo real.
- [ ] Cada card exibe ação de edição.

**Rastreabilidade:** UC-024, UC-025, F-019, RF-051
**Prioridade:** Alta

---

### US-052 — Cadastro de curso com disciplinas por período (DAPE)

**Como** DAPE, **quero** registrar um novo curso em dois passos — dados básicos e seleção de disciplinas por período —, **para** estruturar o currículo do curso com as disciplinas de cada semestre.

**Critérios de aceitação:**
- [ ] O passo 1 coleta nome do curso e formação vinculada.
- [ ] O passo 2 exibe grade interativa para selecionar disciplinas por período.
- [ ] O sistema requer que a formação e as disciplinas estejam previamente cadastradas.
- [ ] Após salvar, o curso fica disponível para vinculação de turmas.

**Rastreabilidade:** UC-024, F-019, F-023, RF-051, RF-052
**Prioridade:** Alta

---

### US-053 — Edição de curso e disciplinas por período (DAPE)

**Como** DAPE, **quero** alterar os dados de um curso ou atualizar as disciplinas vinculadas a cada período, **para** manter o currículo atualizado.

**Critérios de aceitação:**
- [ ] O ícone de edição no card do curso abre o formulário de edição em dois passos.
- [ ] O DAPE pode alterar dados básicos e/ou modificar a grade de disciplinas por período.
- [ ] Após salvar, as alterações são refletidas para turmas vinculadas ao curso.

**Rastreabilidade:** UC-025, F-019, F-023, RF-051, RF-052
**Prioridade:** Média

---

### US-054 — Listagem e busca de formações (DAPE)

**Como** DAPE, **quero** visualizar todas as formações acadêmicas cadastradas e buscar por nome, **para** localizar e gerenciar a formação desejada.

**Critérios de aceitação:**
- [ ] A tela de formações exibe cards com nome e tipo de formação.
- [ ] A barra de pesquisa filtra as formações por texto em tempo real.

**Rastreabilidade:** UC-026, UC-027, F-020, RF-053
**Prioridade:** Alta

---

### US-055 — Cadastro de formação com etapas por período (DAPE)

**Como** DAPE, **quero** registrar uma nova formação acadêmica definindo niveis, duração dos períodos e as etapas de cada período, **para** estruturar o modelo de organização curricular que será usado em cursos e calendários.

**Critérios de aceitação:**
- [ ] O passo 1 coleta nome da formação, níveis de formação (multi-seleção) e duração dos períodos.
- [ ] O passo 2 permite definir as etapas de cada período (ex.: 1º bimestre, recuperação, exame).
- [ ] Após salvar, a formação fica disponível para vinculação a cursos e calendários.

**Rastreabilidade:** UC-026, F-020, F-021, RF-053, RF-054
**Prioridade:** Alta

---

### US-056 — Edição de formação e suas etapas (DAPE)

**Como** DAPE, **quero** alterar os dados de uma formação ou redefinir as etapas de seus períodos, **para** ajustar o modelo curricular sem afetar os calendários já criados.

**Critérios de aceitação:**
- [ ] O ícone de edição abre formulário em dois passos pré-preenchido.
- [ ] O DAPE pode adicionar, remover ou renomear etapas.
- [ ] Alterações nas etapas e na duração de período afetam apenas calendários criados após a alteração; calendários existentes permanecem inalterados.

**Rastreabilidade:** UC-027, F-020, F-021, RF-053, RF-054, RF-055
**Prioridade:** Média

---

### US-057 — Listagem e busca de disciplinas (DAPE)

**Como** DAPE, **quero** visualizar todas as disciplinas do catálogo e buscar por nome, **para** localizar e gerenciar a disciplina desejada.

**Critérios de aceitação:**
- [ ] A tela de disciplinas exibe lista de cards com nome da disciplina.
- [ ] A barra de pesquisa filtra as disciplinas por texto em tempo real.

**Rastreabilidade:** UC-028, UC-029, F-022, RF-056
**Prioridade:** Alta

---

### US-058 — Cadastro de disciplina (DAPE)

**Como** DAPE, **quero** registrar uma nova disciplina no catálogo acadêmico, **para** que ela fique disponível para vinculação a cursos e alocação em horários.

**Critérios de aceitação:**
- [ ] O botão "+" abre modal de cadastro de disciplina.
- [ ] Após salvar, a disciplina aparece no catálogo e pode ser vinculada a períodos de cursos.
- [ ] O cancelamento fecha o modal sem persistir dados.

**Rastreabilidade:** UC-028, F-022, RF-056
**Prioridade:** Alta

---

### US-059 — Edição de disciplina (DAPE)

**Como** DAPE, **quero** alterar os dados de uma disciplina existente, **para** manter o catálogo atualizado.

**Critérios de aceitação:**
- [ ] O ícone de edição no card da disciplina abre modal de edição pré-preenchido.
- [ ] Após salvar, as alterações são refletidas nos cursos que utilizam a disciplina.

**Rastreabilidade:** UC-029, F-022, RF-056
**Prioridade:** Média

---

### US-060 — Vinculação de disciplinas a períodos de um curso (DAPE)

**Como** DAPE, **quero** associar disciplinas do catálogo a períodos específicos de um curso, **para** definir quais disciplinas são ofertadas em cada semestre ou ano.

**Critérios de aceitação:**
- [ ] No passo 2 do cadastro ou edição de curso, o sistema exibe grade interativa período x disciplina.
- [ ] O DAPE seleciona ou desseleciona disciplinas em cada célula da grade.
- [ ] Após salvar, as disciplinas vinculadas ficam disponíveis para alocação em horários e criação de diários.

**Rastreabilidade:** UC-024, F-023, RF-052
**Prioridade:** Alta

---

### US-061 — Listagem e busca de diários de classe (DAPE)

**Como** DAPE, **quero** visualizar todos os diários de classe organizados por disciplina e buscar por texto, **para** localizar e gerenciar o diário desejado.

**Critérios de aceitação:**
- [ ] A tela de diários exibe cards agrupados por disciplina.
- [ ] A barra de pesquisa filtra os diários por texto em tempo real.

**Rastreabilidade:** UC-030, UC-031, F-033, RF-057
**Prioridade:** Média

---

### US-062 — Cadastro de diário de classe (DAPE)

**Como** DAPE, **quero** criar um diário de classe em dois passos — seleção de turma e disciplina, seguida de preenchimento dos detalhes —, **para** registrar formalmente o vínculo de ensino de uma disciplina a uma turma.

**Critérios de aceitação:**
- [ ] O passo 1 permite selecionar turma e disciplina (filtrada pelo currículo do curso da turma).
- [ ] O passo 2 coleta os demais dados do diário.
- [ ] Após salvar, a turma fica permanentemente vinculada ao diário e não pode ser alterada.
- [ ] O diário aparece na listagem organizado por disciplina.

**Rastreabilidade:** UC-030, F-033, RF-057, RF-058
**Prioridade:** Média

---

### US-063 — Edição de diário de classe (DAPE)

**Como** DAPE, **quero** editar os dados de um diário de classe existente, **para** corrigir informações ou atualizar detalhes.

**Critérios de aceitação:**
- [ ] O ícone de edição abre modal de edição com os dados do diário pré-preenchidos.
- [ ] O campo de turma é somente leitura e não pode ser alterado.
- [ ] Se for necessário mudar a turma, o DAPE deve criar um novo diário.

**Rastreabilidade:** UC-031, F-033, RF-057, RF-058
**Prioridade:** Média

---

### US-064 — Acesso rápido a funcionalidades de gestão acadêmica (DAPE)

**Como** DAPE, **quero** acessar as funcionalidades de gestão acadêmica (diários, relatórios, horários) diretamente pelo painel de acesso rápido, **para** iniciar tarefas comuns sem precisar navegar pelos menus da sidebar.

**Critérios de aceitação:**
- [ ] O painel de acesso rápido exibe botões ilustrados para: Visualizar Horário, Gerar Horário, Relatórios, Diários (visualizar e cadastrar).
- [ ] Cada botão redireciona para a tela correspondente.

**Rastreabilidade:** F-039, RF-127
**Prioridade:** Alta

---

### US-065 — Navegação pela sidebar com accordions (web)

**Como** DAPE ou professor, **quero** navegar entre as seções do sistema pela barra lateral com menus colapsáveis por grupos, **para** acessar qualquer funcionalidade de forma organizada.

**Critérios de aceitação:**
- [ ] A sidebar exibe grupos colapsáveis: Gestão (Intervalos, Diários, Turmas, Usuários) e Ensino (Cursos, Disciplinas).
- [ ] Itens de nível raiz (Início, Calendário, Perfil, Sair) são sempre visíveis.
- [ ] A sidebar pode ser expandida ou recolhida por completo.
- [ ] O professor vê apenas as seções pertinentes ao seu papel.

**Rastreabilidade:** F-040, RF-127
**Prioridade:** Alta
