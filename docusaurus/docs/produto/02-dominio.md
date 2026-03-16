---
sidebar_position: 2
title: Domínio
---

# Domínio do Ladesa

Este documento descreve os conceitos fundamentais do ecossistema Ladesa: os atores, as entidades de dados, as regras de negócio e o glossário de termos usados em toda a documentação.

---

## Atores do sistema

| Código | Nome completo | Sistema | Descrição | Permissão |
|---|---|---|---|---|
| **VIS** | Visitante | SISGHA Web | Usuário não autenticado. Acessa a landing page institucional do Ladesa. | Leitura pública |
| **ALU** | Aluno | SISGHA Web + Mobile | Estudante de curso técnico integrado ou de graduação. Acessa o sistema sem autenticação de servidor, selecionando a própria turma para consultar horário e calendário. | Somente leitura (seleção de turma como filtro de sessão, sem persistência) |
| **PROF** | Professor | SISGHA Web + Mobile | Servidor docente. Consulta o próprio horário e calendário. Edita somente o próprio perfil e grade de disponibilidade. | Leitura + escrita do próprio perfil |
| **DAPE** | DAPE (Dir. de Apoio ao Ensino) | SISGHA Web | Administrador acadêmico do campus. Único ator com permissão de criação, edição e exclusão de todas as entidades acadêmicas. | Leitura + escrita global no SISGHA |
| **ADM_EA** | Administrador de Ambientes | SISGEA Web | Gestor de espaços físicos. Opera exclusivamente dentro do SISGEA, sem acesso ao SISGHA. | Leitura + escrita no SISGEA |

> Professor e DAPE são **papéis** (roles) que um mesmo servidor pode acumular. O sistema permite alternar entre as visões sem novo login, por meio do seletor no cabeçalho principal.

---

## Entidades de domínio

As 28 entidades do ecossistema estão organizadas em sete categorias.

### Pessoas

#### 01. Usuário (Servidor)
Pessoa vinculada ao instituto com matrícula e credenciais de acesso. Entidade base de autenticação e perfil de todos os servidores.

- **Atributos:** nome completo, matrícula, senha, avatar/foto, papel (DAPE/Professor), campus(i) vinculado(s), disciplinas vinculadas, turmas vinculadas.
- **Operações:** criar (DAPE), visualizar (DAPE), editar (DAPE + próprio servidor), buscar (DAPE).
- **Ator responsável:** DAPE para gestão global; Professor/DAPE para autoedição.

#### 02. Professor
Especialização de Usuário com papel docente. Possui atributos adicionais de disponibilidade e agenda.

- **Atributos adicionais:** grade de disponibilidade semanal (por dia e turno), agenda de eventos (atividades e indisponibilidades), disciplinas que leciona, turmas vinculadas.
- **Operações:** visualizar listagem (DAPE), selecionar para ver horário (DAPE), editar disponibilidade (PROF via mobile; DAPE via perfil), gerenciar agenda (DAPE).
- **Ator responsável:** DAPE para gestão; PROF para autoedição de disponibilidade.

#### 03. Aluno
Ator de consulta que seleciona a turma para visualizar o horário. Não é cadastrado como entidade persistente no sistema — o acesso é anônimo.

- **Atributos:** turma selecionada (contexto de sessão), tipo de curso (técnico integrado ou graduação).
- **Operações:** selecionar turma (filtro de sessão, sem persistência).
- **Nota:** qualquer pessoa com acesso ao sistema pode visualizar horários de qualquer turma.

---

### Estrutura Institucional

#### 04. Campus
Unidade física do IFRO onde operam cursos, turmas e servidores. Contexto global do sistema.

- **Atributos:** nome (ex.: "Ji-Paraná"), usuários vinculados.
- **Operações:** selecionar campus ativo (DAPE/PROF via seletor no cabeçalho), editar vínculo ao perfil (DAPE).
- **Nota:** não há tela de CRUD de Campus no protótipo. O campus é gerenciado externamente.

---

### Estrutura Acadêmica

#### 05. Formação
Tipo/nível de formação acadêmica (ex.: Técnico Integrado, Graduação, Pós-Graduação). Define a duração dos períodos letivos e as etapas de cada período.

- **Atributos:** nome, níveis de formação (multi-seleção), duração dos períodos (semestral, anual, trimestral etc.), lista de etapas por período.
- **Operações:** criar, visualizar, editar (DAPE).
- **Dependência:** é a raiz da cascata Formação → Curso → Turma → Horário e Formação → Etapas → Calendário.

#### 06. Curso
Programa acadêmico vinculado a uma formação, com disciplinas organizadas por período.

- **Atributos:** nome, formação vinculada, disciplinas por período.
- **Operações:** criar, visualizar, editar, buscar (DAPE); filtrar (ALU/PROF/DAPE em seletores de horário e calendário).

#### 07. Disciplina
Componente curricular lecionado por um professor em uma turma. Vinculada a cursos por período e a professores por ensino.

- **Atributos:** nome.
- **Operações:** criar, visualizar, editar, buscar (DAPE); visualizar próprias disciplinas (PROF).

#### 08. Turma
Grupo de alunos vinculado a um curso, com horário próprio e eventos específicos. Entidade central que conecta alunos, professores, disciplinas e horários.

- **Atributos:** nome/código, curso vinculado, modalidade, lista de eventos vinculados.
- **Operações:** criar, visualizar, editar (DAPE); selecionar para ver horário (DAPE e ALU).

#### 09. Período Letivo
Divisão temporal dentro de um ano letivo (ex.: 1.º semestre, 2.º semestre). A duração é definida pela Formação. Cada período contém N etapas.

- **Atributos:** número/nome do período, datas de início e fim (definidas no calendário), etapas contidas.
- **Operações:** configurar duração (DAPE via Formação); definir datas (DAPE via Calendário); filtrar (DAPE em Gestão de Eventos).

#### 10. Etapa do Período
Subdivisão de um período letivo (ex.: 1.º Bimestre, Recuperação, Exame). Definida na Formação e instanciada com datas específicas em cada Calendário Acadêmico.

- **Atributos:** nome da etapa, data de início e fim por calendário.
- **Operações:** criar, editar, remover (DAPE via Formação); atribuir datas (DAPE via Calendário).

---

### Planejamento de Horário

#### 11. Horário Acadêmico
Grade semanal de aulas de uma turma ou professor. Entidade principal do SISGHA. Composta por células que associam disciplina + professor + sala a um dia/horário.

- **Atributos:** semana de referência, turma ou professor vinculado, grade de células (dia × intervalo), modo (visualização ou edição).
- **Operações:** visualizar (ALU, PROF, DAPE); editar células (DAPE); gerar automaticamente (DAPE); exportar (DAPE); alternar semana/dia (todos).

#### 12. Aula (Célula de Horário)
Unidade atômica do horário: alocação de disciplina + professor em um intervalo horário de um dia específico para uma turma.

- **Atributos:** disciplina, professor, sala/ambiente, dia da semana, intervalo horário, cor de diferenciação visual.
- **Operações:** visualizar detalhes (ALU/PROF); criar, editar, mover, remover (DAPE via popover de edição).

#### 13. Intervalo de Aula
Faixa de tempo definida para cada aula dentro de um turno (ex.: 07:30–08:20). Configura a estrutura temporal base da grade.

- **Atributos:** nome/número, horário de início, horário de fim, turno vinculado.
- **Operações:** visualizar, configurar, editar (DAPE via tela de Intervalos).

#### 14. Turno
Divisão do dia em períodos de funcionamento: Matutino, Vespertino e Noturno. Agrupa os intervalos de aula. Entidade de referência — sem CRUD próprio.

#### 15. Dia da Semana
Cada dia da semana letiva (segunda a sábado — 6 dias). Eixo horizontal da grade horária. Entidade de referência — sem CRUD.

#### 16. Semana Letiva
Semana específica do ano letivo, usada como unidade de navegação temporal na grade de horário.

#### 17. Disponibilidade
Grade de disponibilidade semanal do professor, indicando em quais dias e turnos ele pode ser alocado para lecionar.

- **Atributos:** grade por dia e turno (disponível/indisponível), campus de referência.
- **Operações:** visualizar e editar (PROF via mobile/web, DAPE via perfil do professor).

---

### Calendário e Eventos

#### 18. Calendário Acadêmico
Calendário do ano letivo associado a uma formação, definindo as datas de início e fim de cada etapa de cada período. Pode ser desativado, mas não excluído.

- **Atributos:** ano letivo, formação vinculada, modalidade, datas por etapa e período, estado (ativo/inativo).
- **Operações:** criar (2 passos), visualizar, editar, desativar (DAPE).

#### 19. Evento
Ocorrência acadêmica registrada no calendário (ex.: prova, Campus Party, feriado acadêmico). Pode ser exclusivo de uma turma, exclusivo de um professor (atividade ou indisponibilidade) ou global (compartilhado entre múltiplas turmas e professores).

- **Atributos:** título, tipo, cor, data de início, data de fim, horário de início/fim (opcional), duração todo o dia (flag), participantes (turmas e professores por formação).
- **Operações:** criar, visualizar, editar, buscar (DAPE). Eventos globais são editados exclusivamente na Gestão de Eventos do Calendário.

#### 20. Dia Não Letivo
Dia sem aula marcado no calendário (ex.: feriado, recesso). Gerenciado pelo DAPE separadamente dos eventos.

- **Atributos:** data, descrição.
- **Operações:** criar, visualizar por mês, visualizar consolidado anual (DAPE).

---

### Registros Acadêmicos

#### 21. Diário de Classe
Registro formal de uma disciplina em uma turma, vinculado ao calendário para registro de aulas e frequência.

- **Atributos:** turma (imutável após criação), disciplina (do currículo do curso da turma).
- **Operações:** criar (2 passos), visualizar, editar dados (DAPE). A turma não pode ser alterada após a criação do diário.

#### 22. Relatório de Aulas Ministradas
Relatório gerado pelo DAPE com o resumo de aulas ministradas por professor e semestre. Pode ser exportado como PDF.

- **Operações:** configurar parâmetros, visualizar prévia, exportar PDF (DAPE).

#### 23. Notificação
Aviso sobre alterações no horário, eventos ou comunicados do sistema. No mobile, possui tela dedicada para Aluno e Professor.

---

### Comunicação e Classificação

#### 24. Ano Letivo
Entidade temporal de filtro (ex.: "2025"), usada como parâmetro em seletores de horário e calendário.

#### 25. Modalidade de Ensino
Classificação do tipo de curso (ex.: Técnico Integrado, Graduação). Usada como filtro em seletores.

---

### Infraestrutura SISGEA

#### 26. Bloco
Prédio ou edificação do campus que agrupa ambientes.

- **Operações:** criar, visualizar, editar, buscar (ADM_EA).

#### 27. Ambiente
Sala, laboratório ou outro espaço físico vinculado a um bloco.

- **Atributos:** nome, bloco vinculado, feature, tipo.
- **Operações:** criar, visualizar, editar, buscar (ADM_EA).

#### 28. Reserva de Ambiente
Alocação de um ambiente para uso em um dia e horário específicos.

- **Atributos:** ambiente, dia, faixa horária, finalidade.
- **Operações:** criar, visualizar em grade semanal (ADM_EA).

---

## Regras de negócio

As 67 regras de negócio do ecossistema estão organizadas por grupo temático. O impacto é classificado como **CRÍTICO**, **ALTO**, **MÉDIO** ou **BAIXO**.

### Controle de acesso e visibilidade (RN-01 a RN-08)

| ID | Descrição | Impacto |
|---|---|---|
| **RN-01** | Professor vê apenas o próprio horário e o das turmas vinculadas. Aluno vê apenas o horário da turma selecionada. DAPE vê horários de todos os professores e turmas. | CRÍTICO |
| **RN-02** | Aluno acessa o sistema sem matrícula ou senha, pelo botão "Acessar como Aluno" na tela de login. O acesso é anônimo — qualquer pessoa pode visualizar horários. | ALTO |
| **RN-03** | Os módulos de cada ator são completamente isolados. Nenhuma tela funcional é compartilhada entre Aluno, Professor e DAPE. Mesmo telas análogas (ex.: Calendário Parcial) são instâncias separadas para cada ator. | ALTO |
| **RN-04** | Professor e DAPE são papéis do mesmo servidor. Um servidor pode alternar entre as visões DAPE e Professor via seletor no cabeçalho, sem necessidade de novo login. | CRÍTICO |
| **RN-05** | O DAPE é o único ator com permissão de escrita global no SISGHA. Professor e Aluno são consumidores de informação (somente leitura), exceto edição do próprio perfil (Professor) e seleção de turma (Aluno). | CRÍTICO |
| **RN-06** | O Professor edita apenas seus próprios dados pessoais e grade de disponibilidade. Não pode editar dados de outros servidores, horários, turmas ou qualquer outra entidade acadêmica. | ALTO |
| **RN-07** | O aplicativo mobile não possui interface para o DAPE. Apenas Aluno e Professor têm telas mobile. Operações administrativas exigem acesso via desktop. | MÉDIO |
| **RN-08** | O SISGEA é um sistema separado com login próprio. Os dois sistemas compartilham apenas a landing page e a tela de seleção de acesso. Não há integração de dados entre eles no protótipo atual. | ALTO |

### Edição de horário (RN-09 a RN-18)

| ID | Descrição | Impacto |
|---|---|---|
| **RN-09** | Edições no horário afetam **apenas a semana em edição**, mesmo que a opção "permanente" seja selecionada no salvamento. | CRÍTICO |
| **RN-10** | Para alterar permanentemente eventos de uma turma ou professor, é necessário fazê-lo no CRUD de turma/professor ou na Gestão de Eventos do Calendário — não na edição de horário. | CRÍTICO |
| **RN-11** | Na edição de horário, só é possível cadastrar eventos vinculados exclusivamente àquele professor/turma e àquela semana. Eventos globais não podem ser criados nesse contexto. | ALTO |
| **RN-12** | O botão contextual muda conforme o tipo de edição: "Editar agenda" para horário de professor; "Editar eventos" para horário de turma. | MÉDIO |
| **RN-13** | Ao passar o cursor sobre um evento na grade de edição, aparece um ícone de edição. O ícone é visível apenas no hover, mantendo a grade limpa. | BAIXO |
| **RN-14** | O popover de edição de célula existe em 3 variantes de complexidade (simples, com opções, completo), adaptando-se ao estado da célula (vazia, com aula, com conflito). | MÉDIO |
| **RN-15** | Ao salvar alterações no horário, o DAPE escolhe entre "permanente" (persiste além da semana) e "temporário" (apenas esta semana). Combinado com RN-09, "permanente" na edição de horário afeta apenas a semana. | CRÍTICO |
| **RN-16** | A geração automática de horário oferece dois modos: permanente (substitui o horário existente) e temporário (prévia sem substituir). | ALTO |
| **RN-17** | O cabeçalho de visualização de horário do DAPE possui uma variante com botão de download para exportar a grade. | MÉDIO |
| **RN-18** | A grade opera com 6 dias letivos (segunda a sábado). A visualização diária exibe até 3 aulas por dia como cards visíveis. A grade semanal comporta 9+ intervalos por turno. | MÉDIO |

### Gestão de eventos (RN-19 a RN-30)

| ID | Descrição | Impacto |
|---|---|---|
| **RN-19** | Nos modais de eventos de turma, só é possível cadastrar eventos vinculados exclusivamente àquela turma. Eventos multi-turma são gerenciados na Gestão de Eventos do Calendário. | ALTO |
| **RN-20** | Nos modais de eventos de professor, só é possível cadastrar eventos vinculados exclusivamente àquele professor. | ALTO |
| **RN-21** | Um professor possui dois tipos de evento: "atividade" e "indisponibilidade". A lista de eventos vinculados a ele é chamada de "agenda". | ALTO |
| **RN-22** | Se o DAPE tentar editar, na tela de turma ou professor, um evento que pertence a múltiplas entidades (evento global), o sistema redireciona para o modal de edição na Gestão de Eventos do Calendário. | CRÍTICO |
| **RN-23** | No cadastro de evento, ao marcar "Dura todo o dia", os campos de horário de início e fim desaparecem. | MÉDIO |
| **RN-24** | Para cada formação selecionada no campo de participantes do evento, aparece um accordion com as turmas e professores daquela formação para seleção individual. | ALTO |
| **RN-25** | Ao marcar "Todos participam", o seletor de formações e os accordions são desabilitados. Todos participam do evento automaticamente. | MÉDIO |
| **RN-26** | Ao editar eventos de professor (do tipo "atividade" ou "indisponibilidade") na Gestão de Eventos, o sistema abre o modal específico de agenda e exibe um aviso informativo. | ALTO |
| **RN-27** | Cada evento possui uma cor configurável usada para diferenciação visual no calendário e na grade de horário. | BAIXO |
| **RN-28** | Cada evento possui data de início e fim (obrigatórias) e, opcionalmente, horário de início e fim. Os campos de horário desaparecem se "Dura todo o dia" estiver marcado (RN-23). | MÉDIO |
| **RN-29** | Cada evento tem um campo de título livre. | BAIXO |
| **RN-30** | Todos os formulários de evento possuem botões "Voltar" (cancela) e "Cadastrar"/"Salvar" (confirma). | BAIXO |

### Calendário acadêmico (RN-31 a RN-37)

| ID | Descrição | Impacto |
|---|---|---|
| **RN-31** | Um calendário pode ser apenas **desativado**, não excluído. Garante integridade referencial de histórico. | CRÍTICO |
| **RN-32** | Os filtros de calendário persistem entre navegações. O estado dos filtros é salvo ao sair e retornar da tela (gerenciamento de estado via Pinia). | MÉDIO |
| **RN-33** | Um calendário suporta N períodos e cada período suporta N etapas. As etapas são definidas na Formação; no cadastro do calendário, apenas se define quando cada etapa começa e termina. | ALTO |
| **RN-34** | O término de um período pode ultrapassar o ano letivo do calendário (ex.: em caso de greve, o período pode terminar no ano seguinte). A validação de datas não deve restringir o fim ao ano letivo. | ALTO |
| **RN-35** | Quando nenhum calendário está selecionado nos filtros, o sistema exibe um estado vazio com mensagem orientativa. | BAIXO |
| **RN-36** | Na visão anual de dias não letivos, o calendário mensal contextual não tem setas de navegação. | BAIXO |
| **RN-37** | Na visualização mensal (parcial), o calendário possui setas para navegar entre meses. Na visão anual, não há setas (12 meses fixos). | BAIXO |

### Formação e etapas (RN-38 a RN-44)

| ID | Descrição | Impacto |
|---|---|---|
| **RN-38** | Cada formação define a duração dos períodos letivos (semestral, anual, trimestral, quadrimestral etc.) e as etapas de cada período. | CRÍTICO |
| **RN-39** | As etapas da formação são templates reutilizáveis: definem os tipos de subdivisão (ex.: 1.º Bimestre, Recuperação, Exame) que existem em todos os anos. No cadastro de calendário, são atribuídas as datas concretas. | ALTO |
| **RN-40** | Edições em "Duração de cada período" e nas etapas afetam **apenas calendários criados após a alteração**. Calendários já existentes não são afetados — garante imutabilidade retroativa. | CRÍTICO |
| **RN-41** | O campo "Níveis de Formação" aceita múltiplos valores (ex.: para técnico integrado ao médio, selecionam-se os níveis "técnico" e "ensino médio"). | ALTO |
| **RN-42** | Cada curso é vinculado a uma formação, que determina a duração dos períodos, as etapas e a estrutura do calendário. | ALTO |
| **RN-43** | As disciplinas do cadastro de curso vêm do catálogo de disciplinas (CRUD de Disciplinas). Disciplinas devem existir no catálogo antes de serem vinculadas a um curso. | ALTO |
| **RN-44** | A Formação é a raiz de uma cascata de dependências: Formação → Curso → Turma → Horário e Formação → Etapas → Calendário. Alterações na Formação afetam (apenas dados futuros) todo o ecossistema acadêmico. | CRÍTICO |

### Cadastro de usuário (RN-45 a RN-49)

| ID | Descrição | Impacto |
|---|---|---|
| **RN-45** | A seção "Disponibilidade para lecionar" no formulário de usuário aparece apenas se a função "Professor" estiver selecionada para ao menos um vínculo a um campus. | ALTO |
| **RN-46** | O carrossel de campus na seção de disponibilidade aparece apenas se o professor estiver vinculado a mais de um campus. A disponibilidade é gerenciada separadamente por campus. | MÉDIO |
| **RN-47** | Um servidor pode estar vinculado a mais de um campus do IFRO, com papéis potencialmente diferentes em cada campus (modelo N:N). | ALTO |
| **RN-48** | O campo de senha usa componente dedicado com mascaramento. | BAIXO |
| **RN-49** | O login exibe mensagem de validação em caso de credenciais inválidas. | BAIXO |

### Diários de classe (RN-50 a RN-52)

| ID | Descrição | Impacto |
|---|---|---|
| **RN-50** | A turma não pode ser editada após a criação do diário. Para mudar de turma, é necessário criar um novo diário. | ALTO |
| **RN-51** | As disciplinas disponíveis no cadastro de diário vêm do currículo do curso da turma selecionada. Dependência transitiva: Diário → Turma → Curso → Disciplinas. | ALTO |
| **RN-52** | O cadastro de diário é feito em 2 passos sequenciais: Passo 1 (selecionar turma e disciplina) → Passo 2 (preencher detalhes do diário). | MÉDIO |

### Reservas de ambiente — SISGEA (RN-53 a RN-55)

| ID | Descrição | Impacto |
|---|---|---|
| **RN-53** | As reservas de ambiente são organizadas em grade semanal de 6 dias, com faixas horárias visíveis. A interação é por clique na célula. | MÉDIO |
| **RN-54** | Dentro do modal de reserva, é possível navegar entre dias via setas sem fechar e reabrir o modal. | BAIXO |
| **RN-55** | O modal de reserva exibe uma lista de ambientes disponíveis para o horário selecionado. | MÉDIO |

### Navegação e experiência (RN-56 a RN-63)

| ID | Descrição | Impacto |
|---|---|---|
| **RN-56** | A sidebar possui dois estados: expandido (com ícones + rótulos) e recolhido (apenas ícones). | BAIXO |
| **RN-57** | Na sidebar DAPE, os menus "Gestão" e "Ensino" são accordions colapsáveis com sub-itens. | BAIXO |
| **RN-58** | No mobile, o aluno seleciona a turma por um accordion animado de 3 níveis (modalidade → curso → turma), em contraste com os comboboxes sequenciais da versão web. | BAIXO |
| **RN-59** | O toggle de visualização semana/dia é bidirecional e mantém o contexto de semana ao alternar. | BAIXO |
| **RN-60** | O toggle de visualização de calendário (parcial/completo) é bidirecional. | BAIXO |
| **RN-61** | O dashboard de Acesso Rápido do DAPE organiza os atalhos em 3 seções temáticas: Horário Acadêmico, Relatórios e Diários. | BAIXO |
| **RN-62** | O sistema oferece tema claro e escuro em ambas as plataformas (web e mobile). | BAIXO |
| **RN-63** | O ícone de notificação no cabeçalho possui indicador visual (badge) para notificações não lidas. | BAIXO |

### Autenticação (RN-64 a RN-67)

| ID | Descrição | Impacto |
|---|---|---|
| **RN-64** | Servidores (DAPE/Professor) autenticam-se com matrícula e senha. | CRÍTICO |
| **RN-65** | O aluno acessa sem autenticação de servidor — usa botão secundário na tela de login. | ALTO |
| **RN-66** | O SISGEA possui tela de login própria, separada da do SISGHA. | ALTO |
| **RN-67** | A recuperação de senha está disponível via link na tela de login, mas o fluxo completo não está prototipado. | MÉDIO |

---

## Regras institucionais

As seguintes regras refletem restrições operacionais e pedagógicas do instituto que impactam diretamente o planejamento de horários.

| ID | Descrição | Impacto |
|---|---|---|
| **R-001** | O sistema anterior impedia dois usuários de trabalhar simultaneamente, exigindo encerrar a sessão ativa do outro. O Ladesa elimina essa restrição com acesso web multi-usuário. | Workflow |
| **R-002** | Cada turma possui um delineamento específico de aulas por turno (ex.: 30 aulas matutinas, 27 vespertinas), exigindo bloqueios de janelas específicas para respeitar a carga horária. | Solver |
| **R-003** | No Ensino Médio Integrado, prefere-se aulas separadas (1+2) para não sobrecarregar alunos. Na Graduação, a regra é aulas geminadas para maior produtividade. | Solver |
| **R-004** | É obrigatório registrar o motivo da indisponibilidade do docente (Teletrabalho, PRD, NAP, CEP), pois o horário é documento público sujeito a questionamentos. | Gestão de dados |
| **R-005** | Deve haver descanso entre os turnos da manhã e da tarde. A regra padrão é 1h30, podendo ser reduzida a 40 minutos apenas em casos excepcionais e acordados. | Solver |
| **R-006** | Um professor não pode ser alocado em três turnos seguidos (manhã, tarde e noite) por questões de saúde e normas institucionais. | Solver |
| **R-007** | No período de recuperação semestral, a carga horária das disciplinas deve ser reduzida a 10% da carga do semestre, exigindo uma grade horária sazonal diferente. | Gestão de dados |
| **R-008** | Sábados letivos não são fixos. São dinâmicos: cada sábado pode repor o horário de um dia diferente da semana, conforme o calendário acadêmico. | Solver |
| **R-009** | Trocas pontuais de aulas entre professores não alteram a grade fixa e exigem aprovação formal da coordenação ou do DAPE. | Workflow |
| **R-010** | O sistema deve ser capaz de restringir o número máximo de aulas consecutivas de um mesmo professor com a mesma turma (ex.: evitar 4 aulas seguidas). | Solver |
| **R-011** | Ao gerar um novo horário automático, o sistema deve ser capaz de manter ("travar") edições manuais anteriores para evitar que a grade seja completamente reorganizada. | Solver |
| **R-012** | Disciplinas como Educação Física dependem da disponibilidade de espaços externos (ex.: ginásio municipal), impondo horários fixos e inegociáveis para determinadas turmas. | Solver |

---

## Glossário

| Termo | Definição |
|---|---|
| **DAPE** | Diretoria de Apoio ao Ensino. Setor responsável pela gestão de horários e calendários acadêmicos no campus. No sistema, também é o nome do papel administrativo do servidor. |
| **SISGHA** | Sistema de Gestão de Horários Acadêmicos. Compreende a aplicação web e o aplicativo mobile para Alunos e Professores. |
| **SISGEA** | Sistema de Gestão de Espaços Acadêmicos. Sistema independente para gestão de ambientes físicos e reservas. |
| **Formação** | Nível/tipo de programa acadêmico (ex.: Técnico Integrado, Graduação). Define a estrutura temporal de períodos e etapas. |
| **Período Letivo** | Subdivisão do ano letivo (ex.: semestre, trimestre). A duração é definida pela Formação. |
| **Etapa** | Subdivisão de um período letivo (ex.: 1.º Bimestre, Recuperação, Exame). Definida como template na Formação e instanciada com datas no Calendário Acadêmico. |
| **Calendário Acadêmico** | Calendário de um ano letivo que define as datas concretas de início e fim de cada etapa e período para uma formação. |
| **Diário de Classe** | Registro formal de uma disciplina em uma turma, usado para acompanhamento de frequência e conteúdo. |
| **Grade Horária** | Representação semanal das aulas, organizada por dia (eixo X) e intervalo de aula (eixo Y). |
| **Intervalo de Aula** | Faixa de tempo de uma aula (ex.: 07:30–08:20). Configurado pelo DAPE na tela de Intervalos por turno. |
| **Disponibilidade** | Grade semanal que indica em quais dias e turnos um professor está disponível para ser alocado. |
| **Agenda** | Lista de eventos vinculados a um professor específico (atividades e indisponibilidades). |
| **Evento** | Ocorrência registrada no calendário: pode ser exclusivo de uma turma, de um professor ou global (multi-turma/professor). |
| **Dia Não Letivo** | Dia sem aula registrado no calendário acadêmico (feriado, recesso etc.). |
| **PRD** | Programa de Redistribuição Docente — um dos tipos de indisponibilidade registráveis para professores. |
| **Solver** | Algoritmo (worker) responsável pela geração automática de grades horárias, respeitando restrições institucionais. |
| **IFRO** | Instituto Federal de Educação, Ciência e Tecnologia de Rondônia — instituição onde o Ladesa é implantado. |
| **Campus Ji-Paraná** | Campus piloto onde o Ladesa foi concebido e validado. |
| **Papel (Role)** | Função exercida por um servidor no sistema (DAPE ou Professor). Um mesmo servidor pode acumular ambos os papéis. |
| **Modo Mesclado** | Visualização do DAPE que sobrepõe horários de múltiplos professores ou turmas em uma única grade para identificar conflitos. |
| **Acesso Rápido** | Dashboard inicial do DAPE com atalhos organizados para as funções mais usadas. |
