---
sidebar_position: 4
title: Calendário Acadêmico
---

# Calendário Acadêmico

User stories relacionadas à consulta do calendário por alunos, professores e DAPE, gestão de calendários acadêmicos, gestão de eventos globais e cadastro de dias não letivos.

---

### US-066 — Consulta de calendário mensal como aluno (web)

**Como** aluno, **quero** visualizar o calendário acadêmico em formato mensal com marcação de eventos e dias não letivos, **para** saber as datas importantes do meu semestre.

**Critérios de aceitação:**
- [ ] O calendário exibe o mês atual com marcações visuais de eventos e dias não letivos.
- [ ] A lista de eventos do mês é exibida ao lado do calendário.
- [ ] O aluno pode navegar entre meses usando setas de navegação.
- [ ] O acesso é somente leitura.

**Rastreabilidade:** UC-009, F-025, RF-076
**Prioridade:** Alta

---

### US-067 — Consulta de calendário mensal como professor (web)

**Como** professor, **quero** visualizar o calendário acadêmico mensal aplicando filtros de ano letivo, modalidade e curso, **para** acompanhar os eventos relevantes para minhas turmas.

**Critérios de aceitação:**
- [ ] O professor pode filtrar o calendário por ano letivo, modalidade e curso via ComboBoxes.
- [ ] O calendário exibe os eventos e dias não letivos do período filtrado.
- [ ] A navegação entre meses está disponível.
- [ ] O acesso é somente leitura.

**Rastreabilidade:** UC-009, F-025, RF-076, RF-077
**Prioridade:** Alta

---

### US-068 — Consulta de calendário mensal via aplicativo mobile

**Como** aluno ou professor, **quero** visualizar o calendário acadêmico mensal pelo aplicativo, **para** consultar eventos e datas importantes em qualquer lugar.

**Critérios de aceitação:**
- [ ] A barra de navegação inferior exibe ícone de calendário que direciona para a tela de calendário.
- [ ] O calendário exibe o mês atual com marcações de eventos.
- [ ] O usuário pode abrir drawer de busca para filtrar o calendário.
- [ ] Cards de evento são exibidos abaixo do calendário mensal.

**Rastreabilidade:** UC-009, F-025, RF-076
**Prioridade:** Alta

---

### US-069 — Consulta de calendário anual (web)

**Como** aluno ou professor, **quero** alternar para a visualização anual do calendário que exibe todos os 12 meses simultaneamente, **para** ter uma visão global do ano letivo.

**Critérios de aceitação:**
- [ ] Um botão de alternância de visualização está disponível na tela de calendário.
- [ ] A visualização anual exibe os 12 meses em grade de duas colunas.
- [ ] Eventos e dias não letivos são marcados em cada mês.
- [ ] O usuário pode abrir modal de eventos ao acionar "Ver Eventos".

**Rastreabilidade:** UC-009 (A1), F-026, RF-078
**Prioridade:** Média

---

### US-070 — Consulta de detalhes de eventos do calendário (web)

**Como** aluno ou professor, **quero** clicar em um evento ou data marcada no calendário para ver os detalhes, **para** saber o que acontece naquela data sem precisar buscar em outra tela.

**Critérios de aceitação:**
- [ ] Clicar em um evento ou data marcada abre modal com lista detalhada de eventos do período.
- [ ] O modal exibe nome, tipo e horário de cada evento.
- [ ] O modal pode ser fechado retornando ao calendário.

**Rastreabilidade:** UC-010, F-025, F-026, RF-079
**Prioridade:** Média

---

### US-071 — Consulta de eventos via "Ver Todos os Eventos" (mobile)

**Como** aluno ou professor no aplicativo, **quero** acessar a lista completa de eventos do calendário a partir do calendário mensal, **para** visualizar todos os eventos sem limitação de espaço na tela.

**Critérios de aceitação:**
- [ ] O botão "Ver Todos os Eventos" abre modal com lista completa de eventos do calendário.
- [ ] Os eventos são listados em ordem cronológica com nome, tipo e data.

**Rastreabilidade:** UC-009 (A2), F-025, RF-079
**Prioridade:** Média

---

### US-072 — Consulta do calendário pelo DAPE com filtros avançados

**Como** DAPE, **quero** visualizar o calendário acadêmico aplicando filtros de ano letivo, modalidade, formação e curso, com persistência dos filtros ao navegar entre telas, **para** acompanhar os calendários relevantes sem precisar refazer os filtros a cada acesso.

**Critérios de aceitação:**
- [ ] O DAPE pode filtrar o calendário por ano letivo, modalidade, formação e curso.
- [ ] Os filtros selecionados são preservados ao navegar para gestão de calendários e retornar.
- [ ] O DAPE tem acesso às opções de gestão (engrenagem) a partir da tela de calendário.

**Rastreabilidade:** UC-009, F-025, F-032, RF-076, RF-080
**Prioridade:** Alta

---

### US-073 — Listagem e busca de calendários acadêmicos (DAPE)

**Como** DAPE, **quero** visualizar todos os calendários acadêmicos cadastrados e filtrar por ano, modalidade, formação e curso, **para** localizar e gerenciar o calendário desejado.

**Critérios de aceitação:**
- [ ] A tela de gestão exibe cards de calendário com filtros de ano, modalidade, formação e curso.
- [ ] Uma barra de pesquisa por texto complementa os filtros por categoria.
- [ ] Calendários inativos são diferenciados visualmente dos ativos.

**Rastreabilidade:** UC-032, UC-033, UC-034, F-024, RF-082
**Prioridade:** Alta

---

### US-074 — Cadastro de calendário acadêmico (DAPE)

**Como** DAPE, **quero** criar um novo calendário acadêmico em dois passos — dados básicos e definição de datas das etapas por período —, **para** estabelecer o cronograma do ano letivo com todas as datas de início e fim de cada etapa.

**Critérios de aceitação:**
- [ ] O passo 1 coleta nome, formação vinculada, ano letivo e modalidade.
- [ ] O passo 2 exibe os períodos e etapas herdados da formação selecionada.
- [ ] O DAPE define data de início e fim para cada etapa de cada período.
- [ ] O sistema aceita datas de término que extrapolam o ano letivo (cenário de necessidades especiais no calendário escolar).
- [ ] Após salvar, o calendário fica visível para todos os atores.

**Rastreabilidade:** UC-032, F-024, RF-082, RF-083
**Prioridade:** Alta

---

### US-075 — Edição de calendário acadêmico (DAPE)

**Como** DAPE, **quero** editar os dados ou as datas de etapas de um calendário existente, **para** ajustar o cronograma conforme necessidades institucionais.

**Critérios de aceitação:**
- [ ] O ícone de edição no card do calendário abre formulário de edição em dois passos.
- [ ] O DAPE pode alterar dados básicos e/ou datas de etapas.
- [ ] Após salvar, as atualizações são refletidas imediatamente para todos os atores.

**Rastreabilidade:** UC-033, F-024, RF-082
**Prioridade:** Média

---

### US-076 — Desativação de calendário acadêmico (DAPE)

**Como** DAPE, **quero** desativar um calendário que não está mais em uso, **para** removê-lo dos filtros ativos sem perder o histórico de dados.

**Critérios de aceitação:**
- [ ] O ícone de desativar no card do calendário solicita confirmação antes de prosseguir.
- [ ] Após confirmação, o calendário é marcado como inativo e não aparece nos filtros ativos.
- [ ] Os dados históricos do calendário são preservados e não são excluídos.

**Rastreabilidade:** UC-034, F-024, RF-084
**Prioridade:** Média

---

### US-077 — Cadastro de evento global (DAPE)

**Como** DAPE, **quero** criar um evento acadêmico global que pode ser compartilhado com múltiplas turmas e professores, **para** comunicar acontecimentos importantes a todos os envolvidos de uma vez.

**Critérios de aceitação:**
- [ ] O modal de cadastro coleta nome, tipo, cor, datas e horários do evento.
- [ ] O checkbox "Dura todo o dia" oculta os campos de horário de início e fim.
- [ ] O DAPE seleciona formações participantes; o sistema gera accordions com turmas e professores de cada formação.
- [ ] O checkbox "Todos participam" desabilita a seleção individual de turmas e professores.
- [ ] Após salvar, o evento fica visível nos calendários de todos os participantes vinculados.

**Rastreabilidade:** UC-035, F-027, RF-086, RF-087, RF-088
**Prioridade:** Alta

---

### US-078 — Edição de evento global (DAPE)

**Como** DAPE, **quero** editar os dados ou participantes de um evento global a partir da gestão central de eventos, **para** manter as informações do evento atualizadas para todos os participantes.

**Critérios de aceitação:**
- [ ] O ícone de edição no card do evento abre modal de edição pré-preenchido.
- [ ] O DAPE pode alterar qualquer campo, incluindo a lista de participantes.
- [ ] Após salvar, as alterações são refletidas para todos os participantes vinculados.
- [ ] Tentativas de editar o evento a partir de turmas ou professores resultam em redirecionamento para a gestão central com aviso informativo.

**Rastreabilidade:** UC-036, F-027, F-030, RF-086, RF-089
**Prioridade:** Média

---

### US-079 — Listagem e filtragem de eventos globais (DAPE)

**Como** DAPE, **quero** visualizar todos os eventos globais cadastrados e filtrá-los por tipo, formação, curso, período e texto, **para** localizar e gerenciar eventos específicos.

**Critérios de aceitação:**
- [ ] A tela de gestão de eventos exibe cards de evento com nome, tipo, data e cor.
- [ ] Filtros por tipo, formação, curso e período estão disponíveis.
- [ ] Uma barra de pesquisa por texto complementa os filtros.
- [ ] Filtros avançados expandem as opções de filtragem.

**Rastreabilidade:** UC-035, UC-036, F-027, RF-086
**Prioridade:** Alta

---

### US-080 — Redirecionamento ao editar evento global a partir de turma ou professor (DAPE)

**Como** DAPE, **quero** ser redirecionado automaticamente para a gestão central ao tentar editar um evento global a partir de uma turma ou professor, **para** garantir que eventos compartilhados sejam editados em um único ponto.

**Critérios de aceitação:**
- [ ] Ao tentar editar um evento global a partir do modal de turma ou agenda de professor, o sistema detecta que o evento não é exclusivo.
- [ ] O sistema exibe aviso informativo e redireciona para o modal de edição na gestão de eventos.
- [ ] As alterações feitas no redirecionamento afetam todos os participantes do evento.

**Rastreabilidade:** UC-020 (A2), UC-036 (A1), F-030, RF-089
**Prioridade:** Média

---

### US-081 — Cadastro de dia não letivo (DAPE)

**Como** DAPE, **quero** registrar dias sem atividade letiva (feriados, recessos, etc.) vinculados ao calendário acadêmico, **para** que as datas apareçam marcadas no calendário de todos os atores.

**Critérios de aceitação:**
- [ ] A tela de dias não letivos exibe calendário mensal com lista de dias cadastrados.
- [ ] O DAPE seleciona o ano letivo via ComboBox antes de cadastrar.
- [ ] O modal de cadastro solicita nome/motivo e data(s) do dia não letivo.
- [ ] Após salvar, o dia aparece marcado no calendário mensal para todos os atores.

**Rastreabilidade:** UC-037, F-031, RF-090
**Prioridade:** Média

---

### US-082 — Consulta consolidada de dias não letivos por mês e por ano (DAPE)

**Como** DAPE, **quero** alternar entre a visualização mensal e a anual dos dias não letivos, **para** ter tanto o detalhe mensal quanto a visão consolidada do ano inteiro.

**Critérios de aceitação:**
- [ ] Um toggle permite alternar entre as visualizações mensal e anual.
- [ ] A visualização mensal exibe calendário + lista de dias do mês.
- [ ] A visualização anual exibe todos os meses consolidados agrupados.
- [ ] O botão de cadastrar está disponível em ambas as visualizações.

**Rastreabilidade:** UC-037 (A1), F-031, RF-090, RF-091
**Prioridade:** Média

---

### US-083 — Persistência de filtros ao navegar entre calendário e gestão (DAPE)

**Como** DAPE, **quero** que os filtros selecionados no calendário (modalidade, ano letivo, formação, curso) sejam preservados ao navegar para a gestão de calendários e retornar, **para** não precisar refazer a configuração dos filtros a cada mudança de tela.

**Critérios de aceitação:**
- [ ] Os filtros selecionados na tela de calendário DAPE são mantidos ao acessar a gestão de calendários.
- [ ] Ao retornar para o calendário, os filtros anteriores estão preservados.

**Rastreabilidade:** F-032, RF-080
**Prioridade:** Média
