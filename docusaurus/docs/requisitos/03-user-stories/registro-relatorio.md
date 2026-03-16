---
sidebar_position: 5
title: Registros e Relatórios
---

# Registros e Relatórios

User stories relacionadas à geração de relatórios de aulas ministradas, aplicação de filtros obrigatórios e opcionais, visualização em preview e exportação em PDF.

---

### US-084 — Acesso à tela de relatório de aulas ministradas (DAPE)

**Como** DAPE, **quero** acessar a tela de relatório de aulas ministradas a partir do painel de acesso rápido ou da sidebar, **para** iniciar o processo de geração de relatório sem precisar navegar por múltiplos menus.

**Critérios de aceitação:**
- [ ] O painel de acesso rápido exibe botão "Relatórios" que direciona para a tela de relatório.
- [ ] A tela é acessível também pela sidebar ou pela navegação principal.

**Rastreabilidade:** UC-038, F-034, RF-106
**Prioridade:** Média

---

### US-085 — Configuração de filtros obrigatórios para geração de relatório (DAPE)

**Como** DAPE, **quero** selecionar obrigatoriamente o professor e o semestre antes de gerar o relatório de aulas ministradas, **para** que o relatório contenha apenas os dados relevantes para aquele período e docente.

**Critérios de aceitação:**
- [ ] A tela de relatório exibe ComboBox de professor (obrigatório) e ComboBox de semestre (obrigatório).
- [ ] O botão de visualização fica desabilitado até que ambos os campos obrigatórios sejam preenchidos.
- [ ] Ao preencher os campos, o sistema valida a seleção antes de prosseguir.

**Rastreabilidade:** UC-038, F-034, RF-106, RF-107
**Prioridade:** Média

---

### US-086 — Aplicação de filtros opcionais no relatório (DAPE)

**Como** DAPE, **quero** aplicar filtros opcionais adicionais ao relatório de aulas, **para** refinar os dados exibidos conforme a necessidade de análise.

**Critérios de aceitação:**
- [ ] A tela oferece até quatro filtros opcionais além dos obrigatórios.
- [ ] Os filtros opcionais podem ser combinados livremente.
- [ ] A ausência de filtros opcionais não impede a geração do relatório.

**Rastreabilidade:** UC-038, F-034, RF-107
**Prioridade:** Média

---

### US-087 — Visualização de preview do relatório antes de exportar (DAPE)

**Como** DAPE, **quero** visualizar o relatório em preview antes de exportá-lo, **para** confirmar que os dados estão corretos antes de gerar o arquivo final.

**Critérios de aceitação:**
- [ ] Ao acionar o botão "Visualizar" (ícone de olho), o sistema gera o relatório e exibe em modal de preview.
- [ ] O preview apresenta o conteúdo completo do relatório conforme os filtros aplicados.
- [ ] O modal permite fechar e ajustar os filtros ou prosseguir para exportação.

**Rastreabilidade:** UC-038, F-034, RF-108
**Prioridade:** Média

---

### US-088 — Exportação direta do relatório em PDF sem preview (DAPE)

**Como** DAPE, **quero** exportar o relatório diretamente em PDF sem precisar abrir o preview, **para** agilizar o processo quando já sei que os filtros estão corretos.

**Critérios de aceitação:**
- [ ] O botão "PDF" (ícone PDF) inicia a geração e o download do arquivo sem abrir o modal de preview.
- [ ] O arquivo é gerado com os dados dos filtros selecionados no momento da exportação.

**Rastreabilidade:** UC-039, F-035, RF-109
**Prioridade:** Média

---

### US-089 — Exportação do relatório em PDF a partir do preview (DAPE)

**Como** DAPE, **quero** exportar o relatório em PDF diretamente a partir do modal de preview, **para** confirmar visualmente o conteúdo e baixar o arquivo em uma sequência de passos fluída.

**Critérios de aceitação:**
- [ ] O modal de preview exibe botão de download.
- [ ] Ao acionar o botão, o sistema inicia o download do arquivo PDF com o conteúdo exibido no preview.

**Rastreabilidade:** UC-039 (A1), F-035, RF-109
**Prioridade:** Média

---

### US-090 — Listagem de diários de classe na tela de relatórios (DAPE)

**Como** DAPE, **quero** acessar a visualização de diários de classe também a partir do painel de acesso rápido, **para** ter um caminho alternativo de navegação sem depender exclusivamente da sidebar.

**Critérios de aceitação:**
- [ ] O painel de acesso rápido exibe botões "Diários — Visualizar" e "Diários — Cadastrar".
- [ ] Cada botão redireciona para a respectiva tela de diários.

**Rastreabilidade:** F-039, F-033, RF-106
**Prioridade:** Média

---

### US-091 — Consulta de diários cadastrados como referência para relatório (DAPE)

**Como** DAPE, **quero** consultar os diários de classe cadastrados para verificar quais disciplinas e turmas estão formalmente registradas, **para** garantir que o relatório de aulas reflita apenas os diários ativos.

**Critérios de aceitação:**
- [ ] A listagem de diários exibe disciplina, turma e status de cada diário.
- [ ] A busca por texto permite localizar diários específicos rapidamente.

**Rastreabilidade:** UC-030, UC-031, F-033, RF-057
**Prioridade:** Média

---

### US-092 — Navegação entre painel de acesso rápido e seção de relatórios

**Como** DAPE, **quero** navegar do painel de acesso rápido diretamente para a seção de relatórios com um único clique, **para** iniciar a geração de relatórios de forma eficiente.

**Critérios de aceitação:**
- [ ] O botão "Relatórios" no painel de acesso rápido está sempre visível e funcional.
- [ ] A navegação leva diretamente à tela de relatório de aulas ministradas com filtros em branco prontos para preenchimento.

**Rastreabilidade:** UC-038, F-034, F-039, RF-106
**Prioridade:** Média
