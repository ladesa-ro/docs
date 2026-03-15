---
sidebar_position: 2
sidebar_label: User Stories
---

# User Stories — SISGHA Mobile

## Aluno Mobile

### US-SISGHA-MOB-001 — Selecionar curso/turma para visualizar horário

**Figma:** `2851:5314` | **Perfil:** P-ALUNO

**Como** aluno no app mobile,
**quero** selecionar meu curso e turma usando um accordion animado,
**para que** eu visualize meu horário.

**Interface:** Tela com accordion expansível (Accordion-Aluno-Animado) com selects em cascata. Header no topo com logo SISGHA.

**Observação:** A distinção entre Aluno Técnico e Aluno Graduação ocorre nesta seleção — o tipo de formação determina qual tela de horário será exibida.

---

### US-SISGHA-MOB-002 — Visualizar horário do dia (Aluno Técnico)

**Figma:** `2851:5236` | **Perfil:** P-ALUNO | **Variante:** Técnico

**Como** aluno do ensino técnico integrado no app mobile,
**quero** visualizar meu horário por dia da semana,
**para que** eu saiba quais aulas tenho em cada dia.

**Interface:** Select-DiaSemana (botões de dia) + lista de aulas. Botão "Abrir Calendário" no topo. Header + Navbar-Footer.

**Regra:** Grade com aulas separadas (não germinadas) — reflete BR-SISGHA-003 para Ensino Médio Integrado.

---

### US-SISGHA-MOB-003 — Visualizar horário do dia (Aluno Graduação)

**Figma:** `5003:2982` | **Perfil:** P-ALUNO | **Variante:** Graduação

**Como** aluno de graduação no app mobile,
**quero** visualizar meu horário por dia da semana,
**para que** eu saiba quais blocos de aulas tenho.

**Interface:** Mesma estrutura do técnico (Select-DiaSemana + lista), mas com blocos de aulas germinadas (consecutivas) — reflete BR-SISGHA-003 para Graduação.

---

### US-SISGHA-MOB-004 — Acessar calendário com eventos e etiquetas

**Figma:** `3645:2117` | **Perfil:** P-ALUNO

**Como** aluno no app mobile,
**quero** visualizar o calendário mensal com eventos acadêmicos,
**para que** eu saiba das datas importantes.

**Interface:** Campo de busca no topo (BuscarCalendario), calendário mensal (Calendário SISGHA), botão "Ver Todos Eventos", lista de etiquetas de eventos abaixo. Navbar-Footer na base.

---

### US-SISGHA-MOB-005 — Ver todos os eventos do calendário

**Perfil:** P-ALUNO

**Como** aluno, **quero** ver a lista completa de eventos ao clicar "Ver Todos Eventos", **para que** eu consulte todos os compromissos do período.

---

### US-SISGHA-MOB-006 — Receber e visualizar notificações

**Figma:** `3616:2903` | **Perfil:** P-ALUNO

**Como** aluno no app mobile,
**quero** receber e visualizar notificações sobre alterações de horário e eventos,
**para que** eu esteja sempre atualizado.

**Interface:** Lista de cards "Etiqueta Notificação" empilhados. Header + Navbar-Footer.

---

## Professor Mobile

### US-SISGHA-MOB-007 — Visualizar horário da semana na home

**Figma:** `1710:3447` | **Perfil:** P-PROF

**Como** professor no app mobile,
**quero** ver meu horário da semana na tela inicial,
**para que** eu tenha acesso rápido à minha agenda de aulas.

**Interface:** Botão "Abrir Calendário" + Select-DiaSemana com lista de aulas do dia. Header + Navbar-Footer.

---

### US-SISGHA-MOB-008 — Acessar calendário com eventos e etiquetas

**Figma:** `1482:4408` | **Perfil:** P-PROF

**Como** professor no app mobile,
**quero** visualizar o calendário mensal com meus eventos e da instituição,
**para que** eu me organize.

**Interface:** Idêntica à do aluno (BuscarCalendario + Calendário + Botão Ver Todos + Etiquetas).

---

### US-SISGHA-MOB-009 — Visualizar e editar disponibilidade por dia da semana

**Figma:** `1482:4406` | **Perfil:** P-PROF

**Como** professor no app mobile,
**quero** visualizar e configurar minha disponibilidade para lecionar por dia da semana,
**para que** o DAPE respeite minhas restrições na geração de horário.

**Interface:** Tela de perfil com: Avatar do professor (Componente Avatar), toggle "Disponibilidade / Ensino", componente DisponibilidadeDiaSemana (grid de dias × turnos). Navbar-Footer.

---

### US-SISGHA-MOB-010 — Visualizar ensino (disciplinas e turmas vinculadas)

**Figma:** `2023:3570` | **Perfil:** P-PROF

**Como** professor no app mobile,
**quero** visualizar minhas disciplinas e turmas vinculadas,
**para que** eu saiba onde leciono.

**Interface:** Tela de perfil com: Avatar, toggle "Disponibilidade / Ensino" (aba Ensino ativa), Carrossel-Disciplinas-Turmas (cards horizontais com disciplina + turma). Navbar-Footer.

---

### US-SISGHA-MOB-011 — Receber e visualizar notificações

**Figma:** `3095:4632` | **Perfil:** P-PROF

**Como** professor no app mobile,
**quero** receber notificações sobre alterações de horário e eventos,
**para que** eu esteja sempre informado.

---

## Geral Mobile

### US-SISGHA-MOB-012 — Fazer login no app mobile

**Figma:** `2023:3943`

**Como** usuário (aluno ou professor),
**quero** fazer login no app mobile com minhas credenciais,
**para que** eu acesse meu horário e calendário.

**Interface:** Tela Loading page com: animação de loading, logomarca SISGHA, dois campos de texto (matrícula + senha), texto de validação, dois botões de login (servidor + aluno). Blooms decorativos.

---

### US-SISGHA-MOB-013 — Visualizar splash screen e animação de inicialização

**Figma:** `3587:2710`

**Como** usuário,
**quero** ver uma animação de splash screen ao abrir o app,
**para que** a experiência de abertura seja profissional.

**Interface:** Sequência de 5 frames:
1. **Inicio** — Logo pequeno centralizado na base + texto SISGHA
2. **Inicialização** — Logo move para o centro + blooms aparecem
3. **Splash Screen** — Logo + texto SISGHA centralizados + blooms
4. **Transição** — Blooms expandem para cobrir a tela
5. **Loading page** — Animação de loading + formulário de login

---

### US-SISGHA-MOB-014 — Alternar entre tema claro e escuro

**Perfil:** P-ALUNO, P-PROF

**Como** usuário do app mobile,
**quero** alternar entre tema claro e escuro,
**para que** eu tenha conforto visual em diferentes condições de iluminação.

**Observação:** Todas as telas possuem variante tema escuro no Figma (Aluno escuro: `4005:3387`, Professor escuro: `4005:3388`).

---

*Fonte: Figma SISGHA Mobile (fileKey: 57O1MLezMDcqe5OVkfj7qE).*
