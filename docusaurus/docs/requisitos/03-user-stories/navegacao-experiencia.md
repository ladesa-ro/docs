---
sidebar_position: 7
title: Navegação e Experiência
---

# Navegação e Experiência

User stories relacionadas ao painel de acesso rápido do DAPE, navegação por sidebar com accordions, barra de navegação inferior no aplicativo mobile e busca e filtragem de entidades.

---

### US-104 — Uso do painel de acesso rápido pelo DAPE

**Como** DAPE, **quero** ter um painel inicial com atalhos ilustrados para as funcionalidades mais usadas, **para** iniciar as tarefas principais com um único clique sem precisar abrir menus da sidebar.

**Critérios de aceitação:**
- [ ] O painel exibe botões de acesso rápido agrupados por categoria: Horário Acadêmico (Visualizar Horário, Gerar Horário) e Registro (Relatórios, Diários — Visualizar, Diários — Cadastrar).
- [ ] Cada botão exibe ícone ilustrativo e rótulo descritivo.
- [ ] Clicar em qualquer botão redireciona para a tela correspondente.
- [ ] O painel é a primeira tela exibida após login do DAPE.

**Rastreabilidade:** F-039, RF-127
**Prioridade:** Alta

---

### US-105 — Navegação pela sidebar com accordions colapsáveis (web)

**Como** DAPE ou professor, **quero** navegar entre as seções do sistema pela barra lateral com agrupamentos colapsáveis, **para** organizar visualmente as opções e acessar qualquer tela com poucos cliques.

**Critérios de aceitação:**
- [ ] A sidebar do DAPE organiza as opções em grupos: Gestão (Intervalos, Diários, Turmas, Usuários) e Ensino (Cursos, Disciplinas), além de itens de nível raiz (Início, Calendário, Perfil, Sair).
- [ ] A sidebar do professor exibe apenas as seções pertinentes ao papel.
- [ ] Cada grupo pode ser expandido ou recolhido independentemente.
- [ ] A sidebar inteira pode ser expandida ou recolhida para ganhar espaço na tela.
- [ ] O item ativo na sidebar é destacado visualmente.

**Rastreabilidade:** F-040, RF-127, RF-128
**Prioridade:** Alta

---

### US-106 — Expansão e recolhimento da sidebar (web)

**Como** DAPE ou professor, **quero** expandir e recolher a sidebar inteira com um único clique, **para** ampliar a área de conteúdo quando precisar de mais espaço visual.

**Critérios de aceitação:**
- [ ] Um botão ou ação permite alternar a sidebar entre os estados expandido (com rótulos) e recolhido (apenas ícones).
- [ ] A transição entre os estados é suave e não causa recarregamento de dados.
- [ ] A preferência de estado da sidebar é mantida durante a sessão.

**Rastreabilidade:** F-040, RF-128
**Prioridade:** Média

---

### US-107 — Navegação pela barra inferior no aplicativo mobile

**Como** aluno ou professor no aplicativo, **quero** navegar entre as seções principais usando a barra de ícones fixa na parte inferior da tela, **para** alternar entre calendário, horário e perfil com um único toque.

**Critérios de aceitação:**
- [ ] A barra inferior exibe três ícones: Calendário, Home (logo SISGHA) e Perfil.
- [ ] O ícone correspondente à tela atual é destacado visualmente.
- [ ] A barra permanece visível em todas as telas principais do aplicativo.
- [ ] Cada ícone redireciona para a respectiva seção ao ser acionado.

**Rastreabilidade:** F-041, RF-129
**Prioridade:** Alta

---

### US-108 — Busca por texto em listagens de entidades (DAPE e ADM_EA)

**Como** DAPE ou administrador de espaços, **quero** buscar entidades por texto em qualquer tela de listagem, **para** localizar rapidamente o item desejado sem precisar rolar por toda a lista.

**Critérios de aceitação:**
- [ ] Todas as telas de listagem (turmas, usuários, cursos, formações, disciplinas, diários, ambientes, blocos) exibem campo de busca por texto.
- [ ] A busca filtra os resultados em tempo real conforme o texto digitado.
- [ ] A lista retorna ao estado completo ao limpar o campo de busca.

**Rastreabilidade:** F-042, RF-130, RF-131
**Prioridade:** Alta

---

### US-109 — Filtragem por categoria em telas de listagem (DAPE)

**Como** DAPE, **quero** filtrar listas de entidades por categorias como modalidade, ano letivo, formação e curso, **para** restringir os resultados ao contexto que estou trabalhando.

**Critérios de aceitação:**
- [ ] Telas de listagem com categorização exibem ComboBoxes de filtro por modalidade, ano letivo, formação, curso, tipo de evento ou período, conforme aplicável.
- [ ] Os filtros por categoria e por texto podem ser combinados.
- [ ] A aplicação dos filtros atualiza a lista imediatamente.

**Rastreabilidade:** F-042, RF-130, RF-131
**Prioridade:** Alta

---

### US-110 — Busca em painel lateral de visualização mesclada (DAPE)

**Como** DAPE na visualização mesclada de horários, **quero** buscar professores e turmas no painel lateral para selecioná-los, **para** compor a sobreposição de horários com os itens exatos que preciso visualizar.

**Critérios de aceitação:**
- [ ] O painel lateral exibe barra de pesquisa por texto para professores e turmas.
- [ ] Os resultados de busca são exibidos em lista com opção de seleção múltipla.
- [ ] Os itens selecionados são refletidos imediatamente na grade de sobreposição.

**Rastreabilidade:** UC-013, F-011, F-042, RF-029, RF-130
**Prioridade:** Alta

---

### US-111 — Busca e filtragem em reservas de ambientes (ADM_EA)

**Como** administrador de espaços e ambientes, **quero** buscar ambientes e filtrar reservas na grade semanal, **para** localizar rapidamente a disponibilidade do espaço que preciso reservar.

**Critérios de aceitação:**
- [ ] A tela de reservas exibe barra de pesquisa para filtrar por ambiente ou reserva.
- [ ] A busca filtra os itens exibidos na grade em tempo real.
- [ ] É possível combinar busca textual com navegação por dia da semana.

**Rastreabilidade:** UC-045, F-042, F-045, RF-130, RF-148
**Prioridade:** Alta
