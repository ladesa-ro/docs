---
sidebar_position: 6
title: Perfil e Comunicação
---

# Perfil e Comunicação

User stories relacionadas à visualização e edição do perfil de servidores (professor e DAPE), gestão de disponibilidade, campus vinculado e notificações no aplicativo mobile e na web.

---

### US-093 — Visualização do perfil do próprio servidor (web)

**Como** professor ou DAPE, **quero** visualizar meu perfil com avatar, nome, matrícula, campus vinculado, disciplinas, turmas e grade de disponibilidade, **para** verificar se meus dados estão corretos no sistema.

**Critérios de aceitação:**
- [ ] A tela de perfil exibe todas as informações do servidor: avatar, nome, matrícula, campus, disciplinas/turmas e grade de disponibilidade.
- [ ] A seção de disponibilidade é visível apenas para servidores com função Professor em pelo menos um campus.
- [ ] O perfil é acessível via sidebar ("Perfil").

**Rastreabilidade:** UC-011, F-036, RF-115
**Prioridade:** Média

---

### US-094 — Edição de dados pessoais do perfil (web)

**Como** professor ou DAPE, **quero** editar meus dados pessoais pelo modal de edição disponível na tela de perfil, **para** manter minhas informações atualizadas.

**Critérios de aceitação:**
- [ ] O botão de editar perfil abre modal de edição pré-preenchido com os dados atuais.
- [ ] O servidor pode alterar os campos desejados e salvar.
- [ ] Após salvar, o header é atualizado se nome ou avatar foram alterados.
- [ ] O cancelamento fecha o modal sem persistir alterações.

**Rastreabilidade:** UC-011, F-036, RF-115, RF-116
**Prioridade:** Média

---

### US-095 — Edição de disponibilidade pelo próprio servidor no perfil web (DAPE)

**Como** DAPE, **quero** editar a disponibilidade de um professor pelo modal de edição de disponibilidade na tela de perfil, **para** ajustar as restrições de alocação diretamente.

**Critérios de aceitação:**
- [ ] A tela de perfil do DAPE exibe botão de edição de disponibilidade.
- [ ] O modal de edição exibe grade de disponibilidade editável com dias da semana e turnos.
- [ ] Após salvar, a disponibilidade atualizada é usada como restrição na geração e edição de horários.

**Rastreabilidade:** UC-011 (A2), F-036, F-016, RF-115, RF-116
**Prioridade:** Média

---

### US-096 — Alteração de campus vinculado pelo DAPE no perfil

**Como** DAPE, **quero** alterar o campus vinculado ao meu perfil ou ao perfil de outro servidor pelo modal de alteração de campus, **para** atualizar o vínculo institucional corretamente.

**Critérios de aceitação:**
- [ ] A tela de perfil exibe botão de alterar campus.
- [ ] O modal de alteração exibe os campi disponíveis para seleção.
- [ ] Após salvar, o novo campus fica vinculado ao perfil do servidor.

**Rastreabilidade:** UC-011 (A3), F-036, RF-115
**Prioridade:** Média

---

### US-097 — Visualização do perfil no aplicativo mobile

**Como** professor, **quero** visualizar meu perfil no aplicativo mobile com abas de disponibilidade e ensino, **para** consultar minha grade de disponibilidade e minhas disciplinas e turmas em um só lugar.

**Critérios de aceitação:**
- [ ] O aplicativo exibe tela de perfil com toggle entre as abas "Disponibilidade" e "Ensino".
- [ ] A aba de disponibilidade exibe a grade com dias e turnos.
- [ ] A aba de ensino exibe carrossel com disciplinas e turmas vinculadas (somente leitura).

**Rastreabilidade:** UC-012, F-036, RF-120
**Prioridade:** Média

---

### US-098 — Visualização de disponibilidade pelo professor no aplicativo mobile

**Como** professor, **quero** visualizar minha grade de disponibilidade no aplicativo mobile, **para** consultar minha agenda sem precisar acessar a web.

**Critérios de aceitação:**
- [ ] A grade de disponibilidade no aplicativo é exibida em modo somente leitura.
- [ ] Professores vinculados a mais de um campus visualizam carrossel de campus para consultar a disponibilidade de cada campus separadamente.
- [ ] A edição da disponibilidade é feita exclusivamente pelo DAPE via SISGHA-Web.

**Rastreabilidade:** UC-012, F-016, RF-067
**Prioridade:** Média

---

### US-099 — Atualização de foto de perfil no aplicativo mobile

**Como** professor, **quero** alterar minha foto de perfil pelo aplicativo mobile, **para** personalizar minha identificação no sistema.

**Critérios de aceitação:**
- [ ] O perfil mobile exibe a foto atual e opção de alterar.
- [ ] Ao acionar a opção, o sistema exibe modal com escolha de imagem.
- [ ] Após confirmar, a foto é atualizada no perfil.

**Rastreabilidade:** UC-011, F-036, RF-120
**Prioridade:** Baixa

---

### US-100 — Consulta de notificações no aplicativo mobile (aluno)

**Como** aluno no aplicativo, **quero** visualizar a lista de notificações recebidas, **para** ser informado sobre alterações de horário, eventos e avisos administrativos.

**Critérios de aceitação:**
- [ ] A tela de notificações exibe lista de cards com as notificações recebidas.
- [ ] Cada card indica o tipo de notificação, conteúdo e data.
- [ ] Quando não há notificações, a lista é exibida vazia.
- [ ] O ícone de notificação exibe badge quando há notificações não lidas.

**Rastreabilidade:** UC-040, F-037, RF-124
**Prioridade:** Baixa

---

### US-101 — Consulta de notificações no aplicativo mobile (professor)

**Como** professor no aplicativo, **quero** visualizar minhas notificações de alterações de horário e avisos administrativos, **para** me manter atualizado sobre mudanças que afetam minha agenda.

**Critérios de aceitação:**
- [ ] A tela de notificações do professor exibe lista de cards com as notificações.
- [ ] O ícone de sino no cabeçalho exibe badge quando há notificações não lidas.
- [ ] Após visualizar as notificações, o badge é atualizado.

**Rastreabilidade:** UC-040, F-037, RF-124
**Prioridade:** Baixa

---

### US-102 — Consulta de notificações via dropdown na web

**Como** professor ou DAPE acessando pela web, **quero** verificar notificações recentes clicando no ícone de sino no cabeçalho, **para** ser informado sobre alterações sem precisar sair da tela atual.

**Critérios de aceitação:**
- [ ] O cabeçalho web exibe ícone de sino com badge quando há notificações não lidas.
- [ ] Ao clicar no ícone, o sistema exibe dropdown com as notificações recentes.
- [ ] Quando não há notificações, o ícone não exibe badge.

**Rastreabilidade:** UC-040, F-037, RF-124, RF-125
**Prioridade:** Baixa

---

### US-103 — Geração automática de notificações pelo sistema

**Como** sistema, **quero** gerar notificações automaticamente ao detectar alterações em horários ou eventos, **para** manter professores e alunos informados sem necessidade de ação manual do DAPE.

**Critérios de aceitação:**
- [ ] O sistema gera notificação para professores e alunos afetados quando o horário é alterado.
- [ ] O sistema gera notificação quando um evento que afeta o professor ou aluno é criado ou modificado.
- [ ] Não há interface manual de criação de notificações; todas são geradas automaticamente.

**Rastreabilidade:** UC-040, F-037, RF-126
**Prioridade:** Baixa
