---
sidebar_position: 2
title: Gestão de Horário
---

# Gestão de Horário

User stories relacionadas à seleção de turma, visualização de horários (semanal e diária), navegação temporal, visualização global pelo DAPE, edição manual, geração automática, exportação e configuração de intervalos.

---

### US-015 — Seleção de turma via filtros hierárquicos (web)

**Como** aluno acessando pela web, **quero** selecionar minha turma usando filtros em cascata de ano letivo, modalidade, curso e turma, **para** visualizar o horário correto sem navegar por longos menus.

**Critérios de aceitação:**
- [ ] A tela de seleção exibe ComboBoxes para ano letivo, modalidade e curso em sequência.
- [ ] Ao acionar a busca, o sistema exibe a lista de turmas correspondentes aos filtros.
- [ ] Ao selecionar uma turma, o sistema redireciona para a tela de horário da semana.
- [ ] Lista vazia é exibida quando nenhuma turma corresponde aos filtros.

**Rastreabilidade:** UC-006, F-038, RF-016
**Prioridade:** Alta

---

### US-016 — Seleção de turma via accordion hierárquico (mobile)

**Como** aluno acessando pelo aplicativo mobile, **quero** selecionar minha turma por meio de um accordion animado com três níveis (modalidade, curso e turma), **para** encontrar minha turma de forma intuitiva na tela do celular.

**Critérios de aceitação:**
- [ ] O accordion exibe três níveis colapsáveis: modalidade, curso e turma.
- [ ] Ao selecionar o nível de turma, o sistema redireciona para a tela de horário correspondente (técnico integrado ou graduação).
- [ ] Apenas um item por nível fica expandido por vez.

**Rastreabilidade:** UC-006, F-038, RF-017
**Prioridade:** Alta

---

### US-017 — Visualização de horário semanal como aluno (web)

**Como** aluno, **quero** visualizar o horário semanal da turma selecionada em formato de grade com dias da semana e intervalos de aula, **para** planejar minha semana escolar.

**Critérios de aceitação:**
- [ ] A grade exibe seis dias letivos (segunda a sábado) no eixo horizontal e os intervalos de aula no eixo vertical.
- [ ] Cada célula ocupada mostra a disciplina com diferenciação visual por cor.
- [ ] O horário é somente leitura para o aluno.

**Rastreabilidade:** UC-007, F-006, F-007, RF-018, RF-023, RF-024
**Prioridade:** Alta

---

### US-018 — Visualização de horário semanal como professor (web)

**Como** professor, **quero** visualizar meu horário semanal completo em formato de grade, **para** saber quais turmas tenho em cada dia e intervalo.

**Critérios de aceitação:**
- [ ] A grade exibe as disciplinas atribuídas ao professor com diferenciação visual por cor.
- [ ] O professor visualiza apenas o próprio horário e as turmas às quais está vinculado.
- [ ] O horário é somente leitura para o professor.

**Rastreabilidade:** UC-007, F-006, F-007, RF-018, RF-024
**Prioridade:** Alta

---

### US-019 — Visualização de horário diário como aluno (web)

**Como** aluno, **quero** visualizar o horário de um dia específico com tabs de navegação entre os dias, **para** verificar rapidamente quais aulas tenho hoje.

**Critérios de aceitação:**
- [ ] A tela exibe tabs numeradas para cada dia letivo (Dia 1 a Dia 6).
- [ ] O dia atual fica selecionado por padrão.
- [ ] Cada aula é exibida como card com disciplina, professor, sala e horário.
- [ ] Até três aulas são exibidas diretamente; demais ficam disponíveis via scroll.

**Rastreabilidade:** UC-008, F-006, F-008, RF-019, RF-022, RF-023
**Prioridade:** Alta

---

### US-020 — Visualização de horário diário como professor (web e mobile)

**Como** professor, **quero** visualizar meu horário do dia com navegação por tabs de dia, tanto na web quanto no celular, **para** acompanhar minha agenda docente de qualquer dispositivo.

**Critérios de aceitação:**
- [ ] Na web, a tela exibe tabs de dia e cards de aula com disciplina, sala e horário.
- [ ] No aplicativo, a tela Home exibe os tabs de dia e a lista de aulas do dia selecionado.
- [ ] A alternância entre dias atualiza a lista de aulas imediatamente.

**Rastreabilidade:** UC-008, F-006, F-008, RF-019, RF-022
**Prioridade:** Alta

---

### US-021 — Visualização de horário do aluno no aplicativo mobile

**Como** aluno, **quero** visualizar o horário diário da turma selecionada diretamente no aplicativo, **para** consultar as aulas do dia sem precisar abrir o navegador.

**Critérios de aceitação:**
- [ ] O aplicativo exibe o horário diário com tabs de seleção de dia da semana.
- [ ] As aulas do dia selecionado são listadas em cards com disciplina, professor e horário.
- [ ] A tela se adapta à modalidade (técnico integrado ou graduação).

**Rastreabilidade:** UC-008, F-006, F-008, RF-019
**Prioridade:** Alta

---

### US-022 — Alternância entre visualização semanal e diária

**Como** aluno ou professor, **quero** alternar entre a visualização semanal (grade) e diária (lista de aulas) por meio de um botão de troca, **para** escolher o formato mais adequado ao que preciso no momento.

**Critérios de aceitação:**
- [ ] Um botão de alternância de visualização está disponível nas telas de horário web.
- [ ] Ao acionar o botão, o sistema alterna entre grade semanal e lista diária sem recarregar dados.
- [ ] A semana de referência é preservada ao alternar entre os modos.

**Rastreabilidade:** UC-007, UC-008, F-007, F-008, RF-020
**Prioridade:** Alta

---

### US-023 — Navegação temporal entre semanas

**Como** aluno, professor ou DAPE, **quero** navegar entre semanas letivas usando setas de navegação, **para** consultar o horário de semanas passadas ou futuras.

**Critérios de aceitação:**
- [ ] As setas de navegação (anterior/seguinte) estão visíveis nas telas de horário semanal.
- [ ] O período de referência é exibido no formato "Mês — DD/MM a DD/MM".
- [ ] Ao navegar, a grade é atualizada com os dados da semana selecionada.
- [ ] Semanas sem horário publicado exibem a grade vazia.

**Rastreabilidade:** UC-007, F-009, RF-021
**Prioridade:** Alta

---

### US-024 — Visualização global de horários por professor (DAPE)

**Como** DAPE, **quero** visualizar o horário de qualquer professor do campus buscando pelo nome, **para** verificar a carga horária e identificar disponibilidades.

**Critérios de aceitação:**
- [ ] A tela de visualização exibe grid de cards de professores com avatar e nome.
- [ ] Uma barra de pesquisa filtra os cards por nome em tempo real.
- [ ] Ao selecionar um professor, o sistema exibe a grade semanal completa daquele professor.

**Rastreabilidade:** UC-013, F-010, RF-025, RF-026, RF-027
**Prioridade:** Alta

---

### US-025 — Visualização global de horários por turma (DAPE)

**Como** DAPE, **quero** visualizar o horário de qualquer turma do campus aplicando filtros de modalidade e curso, **para** verificar a distribuição de aulas entre as turmas.

**Critérios de aceitação:**
- [ ] A aba "Por Turma" exibe grid de cards de turmas filtráveis por modalidade e curso.
- [ ] Uma barra de pesquisa por texto complementa os filtros por categoria.
- [ ] Ao selecionar uma turma, o sistema exibe a grade semanal completa daquela turma.

**Rastreabilidade:** UC-013, F-010, RF-025, RF-026, RF-028
**Prioridade:** Alta

---

### US-026 — Visualização mesclada de horários (DAPE)

**Como** DAPE, **quero** sobrepor na mesma grade os horários de múltiplos professores e/ou turmas simultaneamente, **para** identificar conflitos de alocação e otimizar a distribuição.

**Critérios de aceitação:**
- [ ] A aba "Mesclado" exibe painel lateral com toggle entre professores e turmas.
- [ ] O painel lateral permite busca e seleção múltipla de até dez itens.
- [ ] A grade exibe sobreposição dos horários selecionados com diferenciação visual.

**Rastreabilidade:** UC-013, F-011, RF-029
**Prioridade:** Alta

---

### US-027 — Exportação de horário (DAPE)

**Como** DAPE, **quero** baixar a visualização de horário de uma turma ou professor, **para** compartilhar ou arquivar o horário em formato acessível.

**Critérios de aceitação:**
- [ ] O cabeçalho da tela de visualização exibe botão de download.
- [ ] Ao acionar o botão, o sistema inicia o download do horário.

**Rastreabilidade:** UC-013 (A3), F-014, RF-030
**Prioridade:** Média

---

### US-028 — Entrada no modo de edição de horário (DAPE)

**Como** DAPE, **quero** entrar no modo de edição de horário a partir da tela de visualização de uma turma ou professor, **para** fazer ajustes manuais na grade.

**Critérios de aceitação:**
- [ ] O cabeçalho da tela de visualização exibe botão "Editar".
- [ ] Ao acionar o botão, a grade passa para o modo de edição.
- [ ] O modo de edição indica no cabeçalho o contexto: "Editar agenda" para professor ou "Editar eventos" para turma.

**Rastreabilidade:** UC-014, F-012, RF-031, RF-035
**Prioridade:** Alta

---

### US-029 — Alocação de disciplina em célula da grade (DAPE)

**Como** DAPE no modo de edição, **quero** clicar em uma célula vazia da grade e alocar uma disciplina com seu professor, **para** preencher o horário manualmente.

**Critérios de aceitação:**
- [ ] Ao clicar em uma célula, o sistema exibe popover de edição com opções de disciplina e professor.
- [ ] A célula é atualizada na grade imediatamente após a seleção.
- [ ] O popover adapta seu conteúdo ao estado da célula (vazia, com aula, ou com conflito).

**Rastreabilidade:** UC-014, F-012, RF-032, RF-033
**Prioridade:** Alta

---

### US-030 — Remoção de aula da grade (DAPE)

**Como** DAPE no modo de edição, **quero** remover uma aula alocada na grade por meio do popover de edição, **para** liberar o intervalo de tempo.

**Critérios de aceitação:**
- [ ] O popover de edição exibe opção de remover a aula da célula.
- [ ] Ao confirmar a remoção, a célula volta ao estado vazio.
- [ ] A remoção é refletida na grade em tempo real.

**Rastreabilidade:** UC-014 (A1), F-012, RF-032
**Prioridade:** Alta

---

### US-031 — Salvamento de edições com escopo (DAPE)

**Como** DAPE, **quero** salvar as edições de horário escolhendo entre escopo permanente e temporário, **para** distinguir ajustes pontuais da semana de alterações estruturais.

**Critérios de aceitação:**
- [ ] Ao acionar "Salvar", o sistema exibe modal com opção de escopo: permanente ou temporário.
- [ ] Independente do escopo, as edições afetam apenas a semana em edição.
- [ ] Após confirmar, o sistema persiste as alterações e retorna ao modo de visualização.
- [ ] Alterações estruturais permanentes devem ser feitas via CRUD das entidades (turma, professor, disciplina).

**Rastreabilidade:** UC-014, F-012, RF-036, RF-037
**Prioridade:** Alta

---

### US-032 — Cancelamento de edição de horário (DAPE)

**Como** DAPE, **quero** cancelar a edição de horário a qualquer momento sem salvar as alterações, **para** evitar modificações acidentais.

**Critérios de aceitação:**
- [ ] O cabeçalho do modo de edição exibe botão de cancelar.
- [ ] Ao cancelar, todas as alterações não salvas são descartadas.
- [ ] O sistema retorna ao modo de visualização sem modificar o horário.

**Rastreabilidade:** UC-014 (A3), F-012, RF-038
**Prioridade:** Média

---

### US-033 — Gerenciamento de eventos de professor durante edição de horário (DAPE)

**Como** DAPE no modo de edição, **quero** acessar a agenda do professor e cadastrar atividades ou indisponibilidades, **para** registrar compromissos que afetam o horário daquele professor naquela semana.

**Critérios de aceitação:**
- [ ] O cabeçalho do modo de edição exibe botão "Editar agenda".
- [ ] Ao acionar, o sistema exibe modal com a agenda semanal do professor.
- [ ] O DAPE pode criar novo evento preenchendo nome, tipo (atividade ou indisponibilidade), cor, datas e horários.
- [ ] O checkbox "Dura todo o dia" oculta os campos de horário de início e fim.
- [ ] Evento global detectado dispara redirecionamento para a gestão central de eventos.

**Rastreabilidade:** UC-015, F-028, F-029, F-030, RF-035
**Prioridade:** Alta

---

### US-034 — Gerenciamento de eventos de turma durante edição de horário (DAPE)

**Como** DAPE no modo de edição, **quero** acessar os eventos exclusivos de uma turma e cadastrar novos, **para** registrar ocorrências específicas daquela turma naquela semana.

**Critérios de aceitação:**
- [ ] O cabeçalho do modo de edição exibe botão "Editar eventos" quando o contexto é uma turma.
- [ ] O sistema exibe modal com a lista de eventos exclusivos da turma.
- [ ] O DAPE pode criar evento preenchendo nome, tipo, cor, datas e horários.
- [ ] Eventos globais detectados são redirecionados para a gestão central.

**Rastreabilidade:** UC-015, F-029, F-030, RF-035
**Prioridade:** Alta

---

### US-035 — Geração automática de horário em modo permanente (DAPE)

**Como** DAPE, **quero** gerar automaticamente uma grade de horários que substitua o horário atual, **para** obter uma proposta inicial válida sem precisar alocar cada aula manualmente.

**Critérios de aceitação:**
- [ ] O painel de acesso rápido exibe atalho "Gerar Horário".
- [ ] O DAPE seleciona o modo permanente e configura os parâmetros de geração.
- [ ] Durante a geração, o sistema exibe modal de progresso.
- [ ] Ao concluir, o sistema exibe confirmação de sucesso e o horário anterior é substituído.
- [ ] Em caso de restrições conflitantes, o sistema exibe mensagem de erro com detalhes.

**Rastreabilidade:** UC-016, F-013, RF-039
**Prioridade:** Alta

---

### US-036 — Geração automática de horário em modo temporário/preview (DAPE)

**Como** DAPE, **quero** gerar automaticamente um horário em modo de preview sem substituir o atual, **para** avaliar o resultado antes de decidir se aceito ou descarto.

**Critérios de aceitação:**
- [ ] O DAPE seleciona modo temporário na tela de geração.
- [ ] O horário gerado fica disponível para análise sem substituir o horário publicado.
- [ ] O DAPE pode aceitar ou descartar o resultado.

**Rastreabilidade:** UC-016 (A1), F-013, RF-039
**Prioridade:** Alta

---

### US-037 — Configuração de intervalos de aula por turno (DAPE)

**Como** DAPE, **quero** definir os horários de início e fim de cada aula organizados por turno (matutino, vespertino e noturno), **para** estabelecer a estrutura temporal base sobre a qual os horários são construídos.

**Critérios de aceitação:**
- [ ] A tela de intervalos exibe três colunas de turno com a lista de intervalos de cada um.
- [ ] O DAPE pode editar o horário de início e fim de cada intervalo clicando no ícone de edição.
- [ ] O DAPE pode selecionar o campus e o fuso horário via ComboBox antes de editar.
- [ ] As configurações são salvas por campus.

**Rastreabilidade:** UC-017, F-015, RF-040
**Prioridade:** Alta

---

### US-038 — Consulta de intervalos de aula configurados (DAPE)

**Como** DAPE, **quero** visualizar os intervalos de aula configurados para cada turno do campus ativo, **para** verificar se a estrutura temporal está correta antes de gerar horários.

**Critérios de aceitação:**
- [ ] A tela de intervalos exibe todos os intervalos configurados por turno.
- [ ] A filtragem por campus atualiza os intervalos exibidos imediatamente.

**Rastreabilidade:** UC-017, F-015, RF-040
**Prioridade:** Alta

---

### US-039 — Visualização de disponibilidade docente (DAPE e Professor)

**Como** DAPE ou professor, **quero** visualizar a grade de disponibilidade de um professor em formato de tabela dia-por-turno, **para** entender em quais horários o professor pode ser alocado.

**Critérios de aceitação:**
- [ ] A grade de disponibilidade exibe dias da semana no eixo X e turnos no eixo Y.
- [ ] Células marcadas indicam disponibilidade; células em branco indicam indisponibilidade.
- [ ] A seção de disponibilidade é exibida apenas para servidores com função Professor em pelo menos um campus.

**Rastreabilidade:** UC-012, F-016, RF-041
**Prioridade:** Alta

---

### US-040 — Visualização de disponibilidade pelo professor (mobile)

**Como** professor, **quero** visualizar minha grade de disponibilidade pelo aplicativo mobile, **para** consultar rapidamente minha agenda sem precisar acessar a web.

**Critérios de aceitação:**
- [ ] A grade de disponibilidade no aplicativo é exibida em modo somente leitura.
- [ ] Professores vinculados a mais de um campus visualizam carrossel de campus para consultar a disponibilidade de cada campus separadamente.
- [ ] A edição da disponibilidade é feita exclusivamente pelo DAPE via SISGHA-Web.

**Rastreabilidade:** UC-012, F-016, RF-067
**Prioridade:** Média

---

### US-041 — Edição de disponibilidade pelo DAPE (web)

**Como** DAPE, **quero** editar a disponibilidade de qualquer professor a partir do perfil ou da tela de usuários, **para** ajustar restrições de alocação sem depender do professor.

**Critérios de aceitação:**
- [ ] O DAPE pode abrir modal de edição de disponibilidade a partir do perfil do professor ou da tela de usuários.
- [ ] A grade no modal é editável; as alterações são salvas ao confirmar.
- [ ] Professores vinculados a mais de um campus têm disponibilidade editável por campus via seleção no modal.

**Rastreabilidade:** UC-012, F-016, RF-041, RF-042
**Prioridade:** Média
