---
sidebar_position: 1
title: Autenticação e Acesso
---

# Autenticação e Acesso

User stories relacionadas à autenticação de servidores, acesso anônimo de alunos, alternância de papel, seleção de campus, troca de tema e seleção de sistema.

---

### US-001 — Login de servidor via web

**Como** professor ou DAPE, **quero** autenticar-me no SISGHA pelo navegador informando minha matrícula e senha, **para** acessar o painel correspondente ao meu papel.

**Critérios de aceitação:**
- [ ] O sistema exibe a tela de login com campos de matrícula e senha.
- [ ] Ao submeter credenciais válidas, o sistema redireciona o DAPE para o painel de acesso rápido e o professor para a tela de horário da semana.
- [ ] Ao submeter credenciais inválidas, o sistema exibe mensagem de erro sem indicar qual campo está incorreto.
- [ ] O header exibe nome, avatar e seletor de papel após autenticação.

**Rastreabilidade:** UC-001, F-001, RF-001, RF-002, RF-004
**Prioridade:** Alta

---

### US-002 — Login de servidor via aplicativo mobile

**Como** professor, **quero** autenticar-me no aplicativo SISGHA pelo celular informando meu usuário e senha, **para** acessar meu horário e perfil de forma móvel.

**Critérios de aceitação:**
- [ ] O aplicativo exibe splash screen, tela de loading e tela de login em sequência.
- [ ] Ao autenticar com sucesso, o sistema exibe a tela Home com o horário do dia e a barra de navegação inferior.
- [ ] Ao informar credenciais inválidas, o sistema exibe mensagem de validação abaixo dos campos.

**Rastreabilidade:** UC-002, F-001, RF-001, RF-002
**Prioridade:** Alta

---

### US-003 — Acesso como aluno via web (sem autenticação)

**Como** aluno, **quero** acessar o sistema pela web sem precisar criar conta ou informar matrícula, **para** consultar o horário da minha turma de forma rápida e anônima.

**Critérios de aceitação:**
- [ ] A tela de login exibe botão secundário "Acessar como Aluno".
- [ ] Ao clicar no botão, o sistema redireciona para a tela de seleção de turma sem exigir credenciais.
- [ ] O acesso é somente leitura; nenhum dado é gravado sobre o aluno.

**Rastreabilidade:** UC-003, F-002, RF-003
**Prioridade:** Alta

---

### US-004 — Acesso como aluno via aplicativo mobile (sem autenticação)

**Como** aluno, **quero** acessar o aplicativo mobile sem criar conta, **para** consultar o horário da minha turma diretamente no celular.

**Critérios de aceitação:**
- [ ] A tela de login do aplicativo exibe botão de acesso como aluno.
- [ ] Ao acionar o botão, o sistema exibe a tela de seleção hierárquica de turma.
- [ ] Não é criada sessão autenticada nem registro de identidade.

**Rastreabilidade:** UC-003, F-002, RF-003
**Prioridade:** Alta

---

### US-005 — Alternância de papel DAPE / Professor

**Como** servidor com os papéis DAPE e Professor, **quero** alternar entre as visões administrativa e docente sem precisar sair e entrar novamente, **para** agilizar meu trabalho no mesmo dispositivo.

**Critérios de aceitação:**
- [ ] O header exibe seletor de papel quando o servidor tem ambos os papéis atribuídos.
- [ ] Ao selecionar outro papel, a sidebar, o conteúdo e as permissões são atualizados imediatamente.
- [ ] O sistema redireciona para a tela principal do papel selecionado (DAPE → acesso rápido; Professor → horário da semana).
- [ ] Servidores com apenas um papel não visualizam o seletor.

**Rastreabilidade:** UC-004, F-003, RF-006, RF-007
**Prioridade:** Alta

---

### US-006 — Seleção de campus ativo

**Como** professor ou DAPE vinculado a mais de um campus, **quero** selecionar qual campus estou gerenciando no momento, **para** que todos os dados exibidos reflitam o campus correto.

**Critérios de aceitação:**
- [ ] O header exibe badge com o nome do campus ativo, clicável quando houver mais de um campus vinculado.
- [ ] Ao clicar no badge, o sistema exibe lista de campi disponíveis.
- [ ] Após a seleção, todos os dados (turmas, professores, horários, intervalos) são atualizados para o campus escolhido.
- [ ] Servidores vinculados a apenas um campus visualizam o nome fixo, sem interação.

**Rastreabilidade:** UC-005, F-004, RF-011, RF-012
**Prioridade:** Alta

---

### US-007 — Seleção de sistema (SISGHA ou SISGEA)

**Como** usuário que acessa a URL principal do Ladesa, **quero** escolher entre os sistemas disponíveis antes de fazer login, **para** ser direcionado ao módulo correto.

**Critérios de aceitação:**
- [ ] A landing page exibe botão de acesso principal.
- [ ] Ao acionar o botão, o sistema exibe tela de seleção com cards para SISGHA e SISGEA.
- [ ] A seleção redireciona para a tela de login do sistema escolhido.
- [ ] O acesso direto via URL de login pula a landing page e a seleção.

**Rastreabilidade:** UC-001, F-001, RF-014, RF-015
**Prioridade:** Alta

---

### US-008 — Recuperação de senha

**Como** servidor que esqueceu a senha, **quero** acessar o fluxo de recuperação diretamente pela tela de login, **para** recuperar acesso sem depender de suporte manual.

**Critérios de aceitação:**
- [ ] Todas as telas de login exibem link "Esqueceu a senha? Clique aqui."
- [ ] Ao clicar no link, o sistema inicia o fluxo de recuperação de senha.

**Rastreabilidade:** UC-001 (A2), F-001, RF-013
**Prioridade:** Média

---

### US-009 — Troca de tema visual (claro/escuro) na web

**Como** professor ou DAPE, **quero** alternar entre o tema claro e o tema escuro da interface web, **para** adaptar a visualização às minhas preferências ou condições de iluminação.

**Critérios de aceitação:**
- [ ] O header exibe ícone de alternância de tema (sol/lua).
- [ ] Ao clicar no ícone, a interface alterna entre tema claro e tema escuro imediatamente.
- [ ] A preferência persiste durante a sessão.

**Rastreabilidade:** F-005, RF-127
**Prioridade:** Média

---

### US-010 — Troca de tema visual no aplicativo mobile

**Como** professor ou aluno, **quero** alternar o tema do aplicativo mobile entre claro e escuro, **para** melhorar a leitura conforme a situação.

**Critérios de aceitação:**
- [ ] O aplicativo exibe opção de alternância de tema.
- [ ] Ao acionar a opção, o sistema exibe modal de confirmação antes de aplicar a mudança.
- [ ] O tema selecionado é aplicado em todas as telas do aplicativo.

**Rastreabilidade:** F-005, RF-128
**Prioridade:** Média

---

### US-011 — Redirecionamento pós-login por papel

**Como** servidor recém-autenticado, **quero** ser redirecionado automaticamente para a tela principal do meu papel, **para** não precisar navegar manualmente após o login.

**Critérios de aceitação:**
- [ ] DAPE é redirecionado para o painel de acesso rápido.
- [ ] Professor é redirecionado para a tela de horário da semana.
- [ ] Servidor com ambos os papéis é redirecionado para a tela do papel padrão, com alternância disponível.

**Rastreabilidade:** UC-001, F-001, F-003, RF-004, RF-005
**Prioridade:** Alta

---

### US-012 — Restrição de acesso por papel

**Como** sistema, **quero** aplicar permissões distintas por papel após o login, **para** garantir que cada ator acesse apenas as funcionalidades e dados pertinentes ao seu papel.

**Critérios de aceitação:**
- [ ] Aluno tem acesso apenas a consulta de horário e calendário da turma selecionada.
- [ ] Professor tem acesso de leitura ao próprio horário e à edição do próprio perfil e disponibilidade.
- [ ] DAPE tem acesso de escrita a todas as entidades acadêmicas do campus ativo.
- [ ] Sidebars e menus exibem apenas as opções do papel ativo.

**Rastreabilidade:** UC-004, F-003, RF-008, RF-009, RF-010
**Prioridade:** Alta

---

### US-013 — Login no SISGEA

**Como** administrador de espaços e ambientes, **quero** autenticar-me no SISGEA com minhas credenciais, **para** gerenciar blocos, ambientes e reservas do campus.

**Critérios de aceitação:**
- [ ] A tela de login do SISGEA aceita matrícula e senha do servidor.
- [ ] Ao autenticar com sucesso, o sistema exibe a tela principal de reservas.
- [ ] Mensagem de erro é exibida em caso de credenciais inválidas.

**Rastreabilidade:** UC-001, F-001, RF-001
**Prioridade:** Alta

---

### US-014 — Isolamento de módulos por sistema

**Como** usuário, **quero** que SISGHA e SISGEA sejam módulos distintos com layouts e menus próprios, **para** que a interface seja clara e não haja confusão entre funcionalidades dos dois sistemas.

**Critérios de aceitação:**
- [ ] SISGHA e SISGEA possuem sidebars, layouts e telas independentes.
- [ ] Não há mistura de funcionalidades entre os dois sistemas na mesma sessão.
- [ ] A navegação entre sistemas ocorre somente via tela de seleção ou URL direta.

**Rastreabilidade:** F-001, F-043, F-044, F-045, RF-010
**Prioridade:** Alta
