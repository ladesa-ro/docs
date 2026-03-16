---
sidebar_position: 4
title: Requisitos Funcionais
---

# Requisitos Funcionais

Este documento especifica os 155 requisitos funcionais do ecossistema Ladesa (SISGHA + SISGEA), derivados do protótipo Figma, dos casos de uso e das regras de negócio. Cada requisito inclui critérios de aceitação em Gherkin, prioridade, rastreabilidade e sistema responsável.

**Convenções de prioridade:**
- **P1 — Essencial:** sistema não funciona sem este requisito.
- **P2 — Importante:** funcionalidade-chave, pode ser entregue em segunda fase.
- **P3 — Desejável:** melhoria de UX ou funcionalidade complementar.

---

## Autenticação e Controle de Acesso

### RF-001 — Autenticação de servidor por matrícula e senha

**Descrição:** O sistema deve autenticar servidores via matrícula e senha.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor com matrícula e senha cadastrados
Quando o servidor preenche os campos de matrícula e senha e clica em "Entrar"
Então o sistema valida as credenciais e redireciona para o painel do papel correspondente
```

**Prioridade:** P1
**Rastreabilidade:** UC-001, UC-002, F-001, RN-64
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-002 — Mensagem de erro sem revelar campo incorreto

**Descrição:** O sistema deve exibir mensagem de erro quando credenciais forem inválidas, sem revelar qual campo está incorreto.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor que insere matrícula ou senha incorreta
Quando o servidor clica em "Entrar"
Então o sistema exibe mensagem genérica de credenciais inválidas
E não indica se o erro está na matrícula ou na senha
```

**Prioridade:** P1
**Rastreabilidade:** UC-001 (A1), UC-002 (A1), RN-49
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-003 — Acesso anônimo de alunos sem matrícula

**Descrição:** O sistema deve permitir acesso anônimo de alunos via botão secundário na tela de login, sem exigir matrícula ou senha.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um aluno na tela de login
Quando o aluno clica no botão "Acessar como Aluno"
Então o sistema redireciona diretamente para a tela de seleção de turma
E nenhuma credencial é solicitada
```

**Prioridade:** P1
**Rastreabilidade:** UC-003, F-002, RN-02
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-004 — Redirecionamento pós-login por papel

**Descrição:** O sistema deve redirecionar o servidor autenticado para a tela principal correspondente ao seu papel: DAPE para Início — Acesso Rápido; Professor para Horário da Semana.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor autenticado com papel DAPE
Quando o login é concluído com sucesso
Então o sistema redireciona para a tela "Início — Acesso Rápido"

Dado um servidor autenticado com papel exclusivo de Professor
Quando o login é concluído com sucesso
Então o sistema redireciona para a tela "Horário da Semana — Professor"
```

**Prioridade:** P1
**Rastreabilidade:** UC-001, RN-64
**Sistema:** SISGHA-Web

---

### RF-005 — Resolução de papéis por matrícula autenticada

**Descrição:** O sistema deve resolver os papéis do servidor a partir da matrícula autenticada, sem seleção de papel pré-login.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor com matrícula registrada no sistema
Quando o servidor se autentica
Então o sistema identifica automaticamente os papéis (DAPE e/ou Professor) vinculados à matrícula
E não exibe seletor de papel antes do login
```

**Prioridade:** P1
**Rastreabilidade:** UC-001, RN-04, RN-64
**Sistema:** SISGHA-Web

---

### RF-006 — Alternância de papel sem logout

**Descrição:** O sistema deve permitir que um servidor com ambos os papéis (DAPE e Professor) alterne entre visões sem logout, via seletor no header.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor autenticado com papéis DAPE e Professor
Quando o servidor clica no seletor de papel no header e escolhe o outro papel
Então o sistema troca o contexto de exibição sem encerrar a sessão
E exibe o painel correspondente ao papel selecionado
```

**Prioridade:** P1
**Rastreabilidade:** UC-004, F-003, RN-03, RN-04
**Sistema:** SISGHA-Web

---

### RF-007 — Atualização de layout ao alternar papel

**Descrição:** O sistema deve atualizar sidebar, conteúdo e permissões ao alternar papel, redirecionando para a tela principal do novo papel.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor visualizando o painel DAPE
Quando o servidor alterna para o papel Professor
Então o sistema exibe a sidebar do Professor
E redireciona para a tela principal do Professor
E remove acessos exclusivos do DAPE da navegação
```

**Prioridade:** P1
**Rastreabilidade:** UC-004, RN-03
**Sistema:** SISGHA-Web

---

### RF-008 — Visibilidade de horários restrita por ator

**Descrição:** O sistema deve restringir a visibilidade de horários por ator: Aluno vê apenas a turma selecionada, Professor vê apenas o próprio horário e turmas vinculadas, DAPE vê todos.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um aluno autenticado anonimamente com turma selecionada
Quando o aluno acessa a tela de horário
Então o sistema exibe apenas o horário da turma escolhida

Dado um Professor autenticado
Quando o Professor acessa o horário
Então o sistema exibe apenas o horário do próprio Professor e de suas turmas vinculadas

Dado um DAPE autenticado
Quando o DAPE acessa a visualização de horários
Então o sistema exibe horários de qualquer professor ou turma do campus
```

**Prioridade:** P1
**Rastreabilidade:** UC-007, UC-008, UC-013, F-006, RN-01
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-009 — Permissão de escrita restrita ao DAPE

**Descrição:** O sistema deve restringir permissões de escrita exclusivamente ao DAPE para entidades acadêmicas. Professor pode editar apenas o próprio perfil. Aluno não tem permissão de escrita.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um Professor autenticado
Quando o Professor tenta acessar uma função de criação ou edição de entidade acadêmica
Então o sistema nega o acesso e não exibe o controle

Dado um Aluno acessando o sistema
Quando o Aluno navega pelas telas disponíveis
Então o sistema não exibe nenhum botão de escrita, edição ou exclusão
```

**Prioridade:** P1
**Rastreabilidade:** UC-011, UC-014, F-012, RN-05, RN-06
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-010 — Isolamento completo de módulos por ator

**Descrição:** O sistema deve isolar completamente os módulos por ator, com sidebars, layouts e telas distintas para Aluno, Professor e DAPE.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado três atores distintos (Aluno, Professor, DAPE)
Quando cada ator acessa o sistema
Então cada ator visualiza somente as telas, menus e controles do seu módulo
E não há telas funcionais compartilhadas entre módulos distintos
```

**Prioridade:** P1
**Rastreabilidade:** UC-004, RN-03
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-011 — Seleção de campus ativo para servidor multi-campus

**Descrição:** O sistema deve permitir que o servidor selecione o campus ativo quando vinculado a mais de um campus, via badge clicável no header.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor vinculado a mais de um campus
Quando o servidor clica no badge de campus no header
Então o sistema exibe o modal de troca de campus com a lista de campi disponíveis
E ao confirmar a seleção, o campus ativo é atualizado
```

**Prioridade:** P2
**Rastreabilidade:** UC-005, F-004, RN-46, RN-47
**Sistema:** SISGHA-Web

---

### RF-012 — Atualização de contexto ao trocar campus

**Descrição:** O sistema deve atualizar o contexto de dados exibidos (turmas, professores, horários, intervalos) ao trocar o campus ativo.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor com campus ativo selecionado
Quando o servidor troca o campus ativo
Então todas as telas do sistema passam a exibir dados relativos ao novo campus
E os dados do campus anterior não são mais exibidos
```

**Prioridade:** P2
**Rastreabilidade:** UC-005, F-004, RN-47
**Sistema:** SISGHA-Web

---

### RF-013 — Link de recuperação de senha no login

**Descrição:** O sistema deve oferecer link de recuperação de senha em todas as telas de login.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado qualquer usuário na tela de login
Quando o usuário clica em "Esqueceu a senha?"
Então o sistema inicia o fluxo de recuperação de senha
```

**Prioridade:** P2
**Rastreabilidade:** UC-001 (A2), RN-65
**Sistema:** SISGHA-Web, SISGHA-Mobile, SISGEA-Web

---

### RF-014 — Tela de seleção entre SISGHA e SISGEA

**Descrição:** O sistema deve exibir tela de seleção entre SISGHA e SISGEA antes do login, permitindo ao usuário escolher o sistema desejado.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário que acessa a URL principal do sistema
Quando o usuário clica no botão de acesso na landing page
Então o sistema exibe a tela de Seleção de Acesso com cards para SISGHA e SISGEA
E o usuário pode escolher para qual sistema deseja navegar
```

**Prioridade:** P1
**Rastreabilidade:** UC-001, RN-08
**Sistema:** SISGHA-Web, SISGEA-Web

---

### RF-015 — Acesso direto ao login via URL

**Descrição:** O sistema deve permitir acesso direto ao login via URL, pulando a landing page e a tela de seleção.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário que conhece a URL direta do login
Quando o usuário acessa essa URL
Então o sistema exibe a tela de login sem passar pela landing page ou seleção de acesso
```

**Prioridade:** P3
**Rastreabilidade:** UC-001 (A3)
**Sistema:** SISGHA-Web

---

## Gestão de Horário Acadêmico

### RF-016 — Seleção de turma por filtros hierárquicos (web)

**Descrição:** O sistema deve permitir ao aluno selecionar turma via filtros hierárquicos: Ano Letivo → Modalidade → Curso → Turma.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um aluno na tela de seleção de horário
Quando o aluno seleciona sequencialmente Ano Letivo, Modalidade, Curso e Turma
Então o sistema filtra as opções disponíveis em cada nível com base na seleção anterior
E exibe o horário da turma selecionada ao concluir a seleção
```

**Prioridade:** P1
**Rastreabilidade:** UC-006, F-038
**Sistema:** SISGHA-Web

---

### RF-017 — Seleção de turma por accordion animado (mobile)

**Descrição:** O sistema deve permitir ao aluno mobile selecionar turma via accordion animado de 3 níveis hierárquicos.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um aluno no aplicativo mobile na tela de seleção de horário
Quando o aluno expande os níveis do accordion (Modalidade → Curso → Turma)
Então o sistema anima a expansão de cada nível
E ao selecionar uma turma, exibe o horário correspondente
```

**Prioridade:** P1
**Rastreabilidade:** UC-006, F-038, RN-58
**Sistema:** SISGHA-Mobile

---

### RF-018 — Visualização de horário em grade semanal

**Descrição:** O sistema deve exibir o horário em formato de grade semanal, com dias da semana no eixo X e intervalos de aula no eixo Y.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário (Aluno, Professor ou DAPE) na tela de horário semanal
Quando o sistema renderiza a grade
Então os dias da semana são exibidos no eixo horizontal
E os intervalos de aula são exibidos no eixo vertical
E cada célula preenchida representa uma aula com disciplina identificada
```

**Prioridade:** P1
**Rastreabilidade:** UC-007, F-007
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-019 — Visualização de horário em lista diária

**Descrição:** O sistema deve exibir o horário em formato de lista diária, com tabs para seleção de dia e cards de aula (disciplina, professor, sala, horário).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário na tela de horário diário
Quando o usuário seleciona um dia via tab
Então o sistema exibe a lista de aulas do dia em cards
E cada card contém disciplina, nome do professor, sala e horário
```

**Prioridade:** P1
**Rastreabilidade:** UC-008, F-008
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-020 — Alternância bidirecional entre visualização semanal e diária

**Descrição:** O sistema deve permitir alternância bidirecional entre visualização semanal e diária via toggle.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário na visualização semanal do horário
Quando o usuário clica no toggle de visualização
Então o sistema alterna para a visualização diária mantendo o contexto de turma/professor
E o toggle permite retornar à visualização semanal da mesma forma
```

**Prioridade:** P1
**Rastreabilidade:** UC-007, UC-008, RN-59
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-021 — Navegação temporal entre semanas letivas

**Descrição:** O sistema deve permitir navegação temporal entre semanas letivas via setas de navegação, exibindo o período de referência.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário na visualização de horário semanal
Quando o usuário clica nas setas de navegação de semana
Então o sistema carrega o horário da semana anterior ou seguinte
E exibe o período de referência da semana selecionada (ex: "28/04 a 03/05")
```

**Prioridade:** P1
**Rastreabilidade:** UC-007, F-009
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-022 — Exibição de até 3 aulas visíveis por dia

**Descrição:** O sistema deve exibir até 3 aulas visíveis por dia na visualização diária, com scroll para mais.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário na visualização diária de horário
Quando o dia possui mais de 3 aulas
Então o sistema exibe os primeiros 3 cards de aula visíveis
E permite scroll para visualizar as demais aulas
```

**Prioridade:** P2
**Rastreabilidade:** UC-008, RN-18
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-023 — Grade de 6 dias letivos (segunda a sábado)

**Descrição:** O sistema deve operar com grade de 6 dias letivos (segunda a sábado).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado qualquer tela de horário
Quando o sistema renderiza a grade ou as tabs de dia
Então exibe exatamente 6 dias letivos: segunda, terça, quarta, quinta, sexta e sábado
```

**Prioridade:** P1
**Rastreabilidade:** UC-007, UC-008, RN-18
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-024 — Diferenciação visual de disciplinas por cor

**Descrição:** O sistema deve diferenciar visualmente cada disciplina na grade por meio de cores.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado uma grade horária com múltiplas disciplinas
Quando o sistema renderiza as células da grade
Então cada disciplina distinta é representada por uma cor única
E a mesma disciplina mantém a mesma cor em todas as suas ocorrências na grade
```

**Prioridade:** P1
**Rastreabilidade:** UC-007, F-007
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-025 — Visualização global de horários pelo DAPE (3 modos)

**Descrição:** O sistema deve permitir ao DAPE visualizar horários de qualquer professor ou turma do campus, com três modos: por Professor, por Turma e Mesclado.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE autenticado na tela de visualização de horários
Quando o DAPE seleciona um dos três modos (Professor, Turma ou Mesclado)
Então o sistema exibe o conteúdo correspondente ao modo selecionado
E permite consultar o horário de qualquer entidade do campus
```

**Prioridade:** P1
**Rastreabilidade:** UC-013, F-010, F-011
**Sistema:** SISGHA-Web

---

### RF-026 — Alternância entre os três modos de visualização via tabs

**Descrição:** O sistema deve permitir alternância entre os três modos de visualização (Professor, Turma, Mesclado) via toggle de tabs.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de visualização global de horários
Quando o DAPE clica em uma das tabs de modo (Professor / Turma / Mesclado)
Então o sistema alterna imediatamente para o modo selecionado
```

**Prioridade:** P1
**Rastreabilidade:** UC-013, F-010
**Sistema:** SISGHA-Web

---

### RF-027 — Modo "Por Professor" com grid de cards e busca

**Descrição:** O modo "Por Professor" deve exibir grid de cards de professores com avatar, nome e busca por texto.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no modo "Por Professor"
Quando o sistema carrega a tela
Então exibe grid de cards com avatar e nome de cada professor
E oferece campo de busca por texto para filtrar professores
```

**Prioridade:** P1
**Rastreabilidade:** UC-013, F-010
**Sistema:** SISGHA-Web

---

### RF-028 — Modo "Por Turma" com filtros de Modalidade e Curso

**Descrição:** O modo "Por Turma" deve exibir grid de cards de turmas com filtros de Modalidade e Curso, além de busca por texto.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no modo "Por Turma"
Quando o sistema carrega a tela
Então exibe grid de cards de turmas
E oferece filtros por Modalidade e Curso via ComboBox
E oferece campo de busca por texto
```

**Prioridade:** P1
**Rastreabilidade:** UC-013, F-010
**Sistema:** SISGHA-Web

---

### RF-029 — Modo "Mesclado" com seleção múltipla e sobreposição de horários

**Descrição:** O modo "Mesclado" deve permitir seleção múltipla de professores e/ou turmas em painel lateral, com sobreposição dos horários na mesma grade para detecção de conflitos.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no modo "Mesclado"
Quando o DAPE seleciona múltiplos professores e/ou turmas no painel lateral
Então o sistema sobrepõe todos os horários selecionados em uma única grade
E destaca visualmente conflitos de horário entre as entidades selecionadas
```

**Prioridade:** P1
**Rastreabilidade:** UC-013, F-011
**Sistema:** SISGHA-Web

---

### RF-030 — Exportação da visualização de horário pelo DAPE

**Descrição:** O sistema deve permitir ao DAPE exportar/baixar a visualização de horário.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE visualizando um horário
Quando o DAPE clica no botão de download no header da visualização
Então o sistema gera e inicia o download do horário em formato adequado
```

**Prioridade:** P2
**Rastreabilidade:** UC-013 (A3), F-014, RN-17
**Sistema:** SISGHA-Web

---

### RF-031 — Entrada no modo de edição de horário

**Descrição:** O sistema deve permitir ao DAPE entrar em modo de edição a partir da visualização de horário de uma turma ou professor.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE visualizando o horário de uma turma ou professor
Quando o DAPE clica no botão de edição disponível no header
Então o sistema alterna a tela para o modo de edição de horário
E habilita as interações de edição nas células da grade
```

**Prioridade:** P1
**Rastreabilidade:** UC-014, F-012
**Sistema:** SISGHA-Web

---

### RF-032 — Popover de edição ao clicar em célula da grade

**Descrição:** O sistema deve exibir popover de edição ao clicar em uma célula da grade, com opções de alocar, alterar ou remover disciplina.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no modo de edição de horário
Quando o DAPE clica em uma célula da grade
Então o sistema exibe popover com as opções pertinentes ao estado da célula
E as opções incluem: alocar disciplina (célula vazia), alterar ou remover (célula com aula)
```

**Prioridade:** P1
**Rastreabilidade:** UC-014, F-012, RN-14
**Sistema:** SISGHA-Web

---

### RF-033 — Três variantes de popover de edição por estado da célula

**Descrição:** O sistema deve suportar 3 variantes de popover de edição, adaptando a complexidade ao estado da célula (vazia, com aula, com conflito).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no modo de edição clicando em células de diferentes estados
Quando a célula está vazia
Então o sistema exibe o popover na variante simples (alocação)

Quando a célula tem aula sem conflito
Então o sistema exibe o popover na variante com opções de alteração e remoção

Quando a célula tem conflito
Então o sistema exibe o popover na variante completa indicando o conflito
```

**Prioridade:** P1
**Rastreabilidade:** UC-014, RN-14
**Sistema:** SISGHA-Web

---

### RF-034 — Ícone de edição no hover sobre evento na grade

**Descrição:** O sistema deve exibir ícone de edição ao passar o mouse sobre um evento na grade de edição.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no modo de edição de horário
Quando o DAPE posiciona o cursor sobre uma célula ocupada
Então o sistema exibe o ícone de edição sobre a célula
E ao clicar no ícone, o modal de edição do evento é aberto
```

**Prioridade:** P1
**Rastreabilidade:** UC-014, RN-13
**Sistema:** SISGHA-Web

---

### RF-035 — Botão contextual no header de edição

**Descrição:** O sistema deve exibir botão contextual no header da edição: "Editar agenda" para professor, "Editar eventos" para turma.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE editando o horário de um professor
Quando o sistema renderiza o header de edição
Então exibe o botão "Editar agenda"

Dado um DAPE editando o horário de uma turma
Quando o sistema renderiza o header de edição
Então exibe o botão "Editar eventos"
```

**Prioridade:** P1
**Rastreabilidade:** UC-014, RN-12
**Sistema:** SISGHA-Web

---

### RF-036 — Salvamento de edições com escopo permanente ou temporário

**Descrição:** O sistema deve permitir salvamento de edições com opção de escopo: "permanente" ou "temporário".

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE que realizou edições no horário
Quando o DAPE clica em "Salvar"
Então o sistema exibe modal com opção de salvar como "permanente" ou "temporário"
E ao confirmar, persiste as alterações com o escopo selecionado
```

**Prioridade:** P1
**Rastreabilidade:** UC-014, RN-15
**Sistema:** SISGHA-Web

---

### RF-037 — Edições de horário afetam apenas a semana em edição

**Descrição:** As edições de horário devem afetar apenas a semana em edição, independentemente da opção de escopo selecionada. Para alterações globais permanentes, o DAPE deve usar o CRUD da entidade correspondente.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE que salvou edições de horário como "permanente"
Quando o DAPE navega para outra semana
Então as edições realizadas não aparecem nas outras semanas
E a semana editada reflete as alterações salvas
```

**Prioridade:** P1
**Rastreabilidade:** UC-014, RN-09, RN-10
**Sistema:** SISGHA-Web

---

### RF-038 — Cancelamento de edição descartando alterações

**Descrição:** O sistema deve permitir ao DAPE cancelar a edição e retornar ao modo de visualização descartando todas as alterações.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no modo de edição com alterações não salvas
Quando o DAPE clica em "Cancelar" ou "Voltar"
Então o sistema descarta todas as alterações realizadas na sessão de edição
E retorna o horário ao modo de visualização com os dados originais
```

**Prioridade:** P2
**Rastreabilidade:** UC-014 (A3)
**Sistema:** SISGHA-Web

---

### RF-039 — Geração automática de grade de horários otimizada

**Descrição:** O sistema deve ser capaz de gerar automaticamente uma grade de horários otimizada, respeitando restrições de disponibilidade docente, intervalos de aula e vínculos turma-disciplina-professor.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado que dados de turmas, professores e disponibilidades estão cadastrados
Quando o DAPE solicita a geração automática do horário
Então o sistema executa o solver e produz uma grade respeitando disponibilidades, intervalos e vínculos
E exibe o resultado gerado para aprovação do DAPE
```

**Prioridade:** P1
**Rastreabilidade:** UC-016, F-013
**Sistema:** SISGHA-Web

---

### RF-040 — Dois modos de geração: permanente e temporário

**Descrição:** O sistema deve oferecer dois modos de geração: permanente (substitui horário existente) e temporário (preview sem substituir).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE iniciando a geração automática de horário
Quando o DAPE escolhe o modo "permanente"
Então o sistema substitui o horário existente pelo horário gerado após confirmação

Quando o DAPE escolhe o modo "temporário"
Então o sistema exibe o horário gerado como preview sem alterar o horário existente
```

**Prioridade:** P1
**Rastreabilidade:** UC-016, RN-16
**Sistema:** SISGHA-Web

---

### RF-041 — Indicador de progresso durante a geração

**Descrição:** O sistema deve exibir indicador de progresso durante a geração automática de horário.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE que iniciou a geração automática de horário
Quando o solver está em execução
Então o sistema exibe indicador visual de progresso (loading/modal)
E o DAPE não pode interagir com a grade durante o processamento
```

**Prioridade:** P2
**Rastreabilidade:** UC-016
**Sistema:** SISGHA-Web

---

### RF-042 — Confirmação de sucesso pós-geração com opção de aceitar ou rejeitar

**Descrição:** O sistema deve exibir confirmação de sucesso após geração concluída, com opção de aceitar ou rejeitar o resultado.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado que o solver concluiu a geração do horário com sucesso
Quando o sistema apresenta o modal de confirmação
Então o DAPE pode aceitar o horário gerado (aplicando-o) ou rejeitá-lo (descartando)
```

**Prioridade:** P2
**Rastreabilidade:** UC-016
**Sistema:** SISGHA-Web

---

### RF-043 — Configuração de intervalos de aula por turno e campus

**Descrição:** O sistema deve permitir ao DAPE configurar horários de início e fim de cada aula, organizados por turno (Matutino, Vespertino, Noturno) e por campus.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Intervalos
Quando o DAPE edita os horários de início e fim de um intervalo em um turno
Então o sistema persiste a configuração para o campus ativo
E os intervalos configurados são usados como referência na grade de horários
```

**Prioridade:** P1
**Rastreabilidade:** UC-017, F-015
**Sistema:** SISGHA-Web

---

## Gestão Acadêmica — Entidades

### RF-044 — Cadastro de servidores pelo DAPE

**Descrição:** O sistema deve permitir ao DAPE cadastrar servidores com dados pessoais, função (DAPE e/ou Professor) e vínculos a campus.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Usuários
Quando o DAPE preenche o formulário de novo usuário com nome, matrícula, função e campus
E clica em "Cadastrar"
Então o sistema cria o servidor e o exibe na listagem de usuários
```

**Prioridade:** P1
**Rastreabilidade:** UC-021, F-017, RN-04
**Sistema:** SISGHA-Web

---

### RF-045 — Seção de disponibilidade condicional à função Professor

**Descrição:** A seção de disponibilidade para lecionar deve aparecer no formulário de usuário apenas se a função "Professor" estiver selecionada em pelo menos um vínculo a campus.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE preenchendo o formulário de usuário
Quando a função "Professor" não está selecionada em nenhum vínculo de campus
Então a seção de disponibilidade não é exibida no formulário

Quando a função "Professor" é selecionada em pelo menos um campus
Então a seção de disponibilidade aparece no formulário
```

**Prioridade:** P1
**Rastreabilidade:** UC-021, RN-45
**Sistema:** SISGHA-Web

---

### RF-046 — Carrossel de campus na disponibilidade para professor multi-campus

**Descrição:** O carrossel de campus na seção de disponibilidade deve aparecer apenas se o servidor tiver função de professor em mais de um campus.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor com função de Professor em apenas um campus
Quando o DAPE abre o formulário de disponibilidade
Então o carrossel de campus não é exibido

Dado um servidor com função de Professor em mais de um campus
Quando o DAPE abre o formulário de disponibilidade
Então o carrossel de campus é exibido permitindo configurar disponibilidade por campus
```

**Prioridade:** P1
**Rastreabilidade:** UC-021, RN-46
**Sistema:** SISGHA-Web

---

### RF-047 — Vínculos N:N entre usuários e campus

**Descrição:** O sistema deve suportar vínculos N:N entre usuários e campus, com disponibilidade configurável separadamente por campus.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor cadastrado no sistema
Quando o DAPE vincula o servidor a múltiplos campi com funções distintas
Então o sistema persiste cada vínculo independentemente
E permite configurar disponibilidade separada para cada campus onde o servidor é Professor
```

**Prioridade:** P1
**Rastreabilidade:** UC-021, UC-005, RN-47
**Sistema:** SISGHA-Web

---

### RF-048 — Edição de dados de usuário existente

**Descrição:** O sistema deve permitir ao DAPE editar dados de usuário existente.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na listagem de usuários
Quando o DAPE abre o formulário de edição de um usuário e altera os dados
E clica em "Salvar"
Então o sistema atualiza os dados do usuário e exibe as alterações na listagem
```

**Prioridade:** P2
**Rastreabilidade:** UC-022, F-017
**Sistema:** SISGHA-Web

---

### RF-049 — Listagem de usuários em grid de cards com busca

**Descrição:** O sistema deve permitir listar usuários em grid de cards com avatar, nome e função, com busca por texto.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Usuários
Quando a tela carrega
Então o sistema exibe os usuários em grid de cards com avatar, nome e função
E oferece campo de busca por texto para filtrar a listagem em tempo real
```

**Prioridade:** P1
**Rastreabilidade:** UC-013, UC-021, F-042
**Sistema:** SISGHA-Web

---

### RF-050 — Cadastro de turmas

**Descrição:** O sistema deve permitir ao DAPE cadastrar turmas com nome, curso vinculado e modalidade.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Turmas
Quando o DAPE preenche o formulário de nova turma com nome, curso e modalidade
E clica em "Cadastrar"
Então o sistema cria a turma e a exibe na listagem
```

**Prioridade:** P1
**Rastreabilidade:** UC-018, F-018
**Sistema:** SISGHA-Web

---

### RF-051 — Edição de turma existente

**Descrição:** O sistema deve permitir ao DAPE editar dados de turma existente.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na listagem de turmas
Quando o DAPE abre o formulário de edição de uma turma, altera os dados e salva
Então o sistema atualiza a turma e exibe as alterações na listagem
```

**Prioridade:** P2
**Rastreabilidade:** UC-019, F-018
**Sistema:** SISGHA-Web

---

### RF-052 — Listagem de turmas com busca

**Descrição:** O sistema deve permitir listar turmas em grid de cards com busca por texto.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Turmas
Quando a tela carrega
Então o sistema exibe as turmas em grid de cards
E oferece campo de busca por texto para filtrar a listagem
```

**Prioridade:** P1
**Rastreabilidade:** UC-018, F-042
**Sistema:** SISGHA-Web

---

### RF-053 — Cadastro de cursos em fluxo de 2 passos

**Descrição:** O sistema deve permitir ao DAPE cadastrar cursos em fluxo de 2 passos: dados básicos (nome, formação) e seleção de disciplinas por período.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Cursos
Quando o DAPE inicia o cadastro e preenche o passo 1 (nome e formação)
E avança para o passo 2 e seleciona as disciplinas por período
E conclui o cadastro
Então o sistema cria o curso com a estrutura de disciplinas por período definida
```

**Prioridade:** P1
**Rastreabilidade:** UC-024, F-019, F-023, RN-42
**Sistema:** SISGHA-Web

---

### RF-054 — Disciplinas disponíveis no curso vêm do catálogo

**Descrição:** A lista de disciplinas disponíveis para seleção no curso deve vir do catálogo de disciplinas cadastradas.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no passo 2 do cadastro de curso
Quando o sistema carrega as disciplinas disponíveis
Então exibe apenas disciplinas presentes no catálogo de disciplinas cadastradas
E não permite vincular disciplinas inexistentes no catálogo
```

**Prioridade:** P1
**Rastreabilidade:** UC-024, RN-43
**Sistema:** SISGHA-Web

---

### RF-055 — Edição de cursos existentes

**Descrição:** O sistema deve permitir ao DAPE editar cursos existentes, incluindo alteração de disciplinas por período.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Cursos
Quando o DAPE abre o formulário de edição de um curso e altera dados ou disciplinas
E salva as alterações
Então o sistema atualiza o curso com as novas informações
```

**Prioridade:** P2
**Rastreabilidade:** UC-025, F-019, F-023
**Sistema:** SISGHA-Web

---

### RF-056 — Listagem de cursos com busca

**Descrição:** O sistema deve permitir listar cursos em grid de cards com busca por texto.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Cursos
Quando a tela carrega
Então o sistema exibe os cursos em grid de cards
E oferece campo de busca por texto para filtrar
```

**Prioridade:** P1
**Rastreabilidade:** UC-024, F-042
**Sistema:** SISGHA-Web

---

### RF-057 — Cadastro de formações em fluxo de 2 passos

**Descrição:** O sistema deve permitir ao DAPE cadastrar formações em fluxo de 2 passos: dados básicos (nome, níveis, duração dos períodos) e definição de etapas por período.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Formações
Quando o DAPE preenche o passo 1 (nome, níveis e duração)
E avança para o passo 2 e define as etapas por período
E conclui o cadastro
Então o sistema cria a formação com a estrutura de etapas definida
```

**Prioridade:** P1
**Rastreabilidade:** UC-026, F-020, F-021, RN-38, RN-39
**Sistema:** SISGHA-Web

---

### RF-058 — Campo de níveis de formação com seleção múltipla

**Descrição:** O campo "Níveis de Formação" deve aceitar seleção múltipla (ex: técnico + ensino médio para curso integrado).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE preenchendo o formulário de nova formação
Quando o DAPE seleciona múltiplos valores no campo "Níveis de Formação"
Então o sistema aceita todos os valores selecionados e os persiste no cadastro
```

**Prioridade:** P1
**Rastreabilidade:** UC-026, RN-41
**Sistema:** SISGHA-Web

---

### RF-059 — Suporte a N períodos e N etapas por formação

**Descrição:** O sistema deve suportar N períodos por formação e N etapas por período, sem limites fixos.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE configurando etapas de uma formação
Quando o DAPE adiciona múltiplos períodos e múltiplas etapas por período
Então o sistema aceita qualquer quantidade sem limite fixo
E persiste a estrutura completa
```

**Prioridade:** P1
**Rastreabilidade:** UC-026, RN-33
**Sistema:** SISGHA-Web

---

### RF-060 — Etapas da formação como template reutilizável para calendários

**Descrição:** As etapas definidas na formação devem servir como template reutilizável: a atribuição de datas concretas ocorre no cadastro de calendário acadêmico.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado uma formação com etapas definidas
Quando o DAPE cria um calendário acadêmico vinculado a essa formação
Então o sistema herda automaticamente a estrutura de períodos e etapas da formação
E solicita ao DAPE apenas as datas de início e fim de cada etapa para aquele ano
```

**Prioridade:** P1
**Rastreabilidade:** UC-026, UC-032, RN-39
**Sistema:** SISGHA-Web

---

### RF-061 — Alterações em formação afetam apenas calendários futuros

**Descrição:** Edições na duração de períodos e nas etapas da formação devem afetar apenas calendários criados após a alteração. Calendários existentes devem permanecer inalterados.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado calendários acadêmicos já criados vinculados a uma formação
Quando o DAPE edita a duração dos períodos ou as etapas da formação
Então os calendários existentes permanecem inalterados
E novos calendários criados após a alteração usam a nova estrutura
```

**Prioridade:** P1
**Rastreabilidade:** UC-027, RN-40
**Sistema:** SISGHA-Web

---

### RF-062 — Edição de formações e etapas existentes

**Descrição:** O sistema deve permitir ao DAPE editar formações existentes e suas etapas.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Formações
Quando o DAPE abre o formulário de edição de uma formação e altera dados ou etapas
E salva as alterações
Então o sistema atualiza a formação respeitando a regra de imutabilidade retroativa (RF-061)
```

**Prioridade:** P2
**Rastreabilidade:** UC-027, F-020, F-021
**Sistema:** SISGHA-Web

---

### RF-063 — Listagem de formações com busca

**Descrição:** O sistema deve permitir listar formações em grid de cards com busca por texto.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Formações
Quando a tela carrega
Então o sistema exibe as formações em grid de cards
E oferece campo de busca por texto para filtrar
```

**Prioridade:** P1
**Rastreabilidade:** UC-026, F-042
**Sistema:** SISGHA-Web

---

### RF-064 — Cadastro de disciplinas no catálogo

**Descrição:** O sistema deve permitir ao DAPE cadastrar disciplinas no catálogo acadêmico.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Disciplinas
Quando o DAPE preenche o formulário de nova disciplina e clica em "Cadastrar"
Então o sistema cria a disciplina no catálogo e a exibe na listagem
```

**Prioridade:** P1
**Rastreabilidade:** UC-028, F-022
**Sistema:** SISGHA-Web

---

### RF-065 — Edição de disciplinas existentes

**Descrição:** O sistema deve permitir ao DAPE editar disciplinas existentes.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Disciplinas
Quando o DAPE abre o formulário de edição de uma disciplina, altera os dados e salva
Então o sistema atualiza a disciplina no catálogo
```

**Prioridade:** P2
**Rastreabilidade:** UC-029, F-022
**Sistema:** SISGHA-Web

---

### RF-066 — Listagem de disciplinas com busca

**Descrição:** O sistema deve permitir listar disciplinas em grid de cards com busca por texto.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Disciplinas
Quando a tela carrega
Então o sistema exibe as disciplinas em grid de cards
E oferece campo de busca por texto para filtrar
```

**Prioridade:** P1
**Rastreabilidade:** UC-028, F-042
**Sistema:** SISGHA-Web

---

### RF-067 — Professor visualiza disponibilidade semanal no mobile

**Descrição:** O sistema deve permitir ao professor visualizar sua grade de disponibilidade semanal (dia × turno) no mobile, em modo somente leitura. A edição é feita exclusivamente pelo DAPE via web.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um Professor autenticado no aplicativo mobile na aba de Disponibilidade
Quando a aba é carregada
Então o sistema exibe a grade de disponibilidade do professor em modo somente leitura
E as células indicam visualmente os turnos disponíveis e indisponíveis
```

**Prioridade:** P1
**Rastreabilidade:** UC-012, F-016
**Sistema:** SISGHA-Mobile

---

### RF-068 — DAPE edita disponibilidade de qualquer professor

**Descrição:** O sistema deve permitir ao DAPE editar a disponibilidade de qualquer professor via modal no perfil ou cadastro de usuário.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE visualizando o perfil ou o cadastro de um professor
Quando o DAPE abre o modal de edição de disponibilidade e altera a grade
E salva as alterações
Então o sistema persiste a nova disponibilidade do professor
```

**Prioridade:** P1
**Rastreabilidade:** UC-012, UC-021, F-016, RN-45
**Sistema:** SISGHA-Web

---

### RF-069 — Disponibilidade independente por campus para professor multi-campus

**Descrição:** A disponibilidade configurada por campus deve ser independente: professor multi-campus tem uma grade por campus.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um professor vinculado a mais de um campus
Quando o DAPE edita a disponibilidade
Então o sistema permite configurar grades de disponibilidade distintas para cada campus
E as alterações em um campus não afetam os demais
```

**Prioridade:** P2
**Rastreabilidade:** UC-012 (A1), RN-46
**Sistema:** SISGHA-Web

---

### RF-070 — Cadeia de dependência para cadastro de entidades acadêmicas

**Descrição:** O sistema deve impor a cadeia de dependência para cadastro: Formação deve existir antes de Curso; Disciplinas devem existir antes de vincular a Curso; Curso deve existir antes de Turma.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado que nenhuma formação está cadastrada
Quando o DAPE tenta cadastrar um curso
Então o sistema impede a criação e orienta o DAPE a cadastrar a formação primeiro

Dado que nenhuma disciplina está cadastrada
Quando o DAPE tenta vincular disciplinas a um curso
Então o sistema indica que o catálogo de disciplinas está vazio
```

**Prioridade:** P1
**Rastreabilidade:** UC-018, UC-024, UC-026, UC-028, RN-42, RN-43, RN-44
**Sistema:** SISGHA-Web

---

### RF-071 — Validação de disciplinas do catálogo no vínculo com curso

**Descrição:** O sistema deve validar que disciplinas selecionadas para um curso pertencem ao catálogo cadastrado.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no passo de seleção de disciplinas de um curso
Quando o sistema carrega as disciplinas disponíveis
Então exibe apenas disciplinas presentes no catálogo
E não permite salvar com disciplinas inválidas
```

**Prioridade:** P1
**Rastreabilidade:** UC-024, RN-43
**Sistema:** SISGHA-Web

---

### RF-072 — Validação de curso referenciado por turma

**Descrição:** O sistema deve garantir que cursos referenciados por turmas existam e estejam ativos.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE preenchendo o formulário de nova turma
Quando o DAPE seleciona um curso no campo de vínculo
Então o sistema valida que o curso existe e está ativo antes de permitir o cadastro
```

**Prioridade:** P1
**Rastreabilidade:** UC-018, RN-44
**Sistema:** SISGHA-Web

---

### RF-073 — Busca por texto em todas as telas de listagem

**Descrição:** O sistema deve oferecer componente reutilizável de busca por texto em todas as telas de listagem de entidades.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE em qualquer tela de listagem de entidades
Quando o DAPE digita texto no campo de busca
Então o sistema filtra os itens da listagem em tempo real com base no texto digitado
```

**Prioridade:** P1
**Rastreabilidade:** Transversal, F-042
**Sistema:** SISGHA-Web, SISGEA-Web

---

### RF-074 — Filtros categóricos via ComboBox

**Descrição:** O sistema deve oferecer filtros categóricos via ComboBox em telas que necessitam filtragem multi-critério (Modalidade, Ano Letivo, Campus, Formação, Curso, Tipo de evento, Período).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário em uma tela com filtros de múltiplos critérios
Quando o usuário seleciona um valor em um ComboBox de filtro
Então o sistema atualiza a listagem exibindo apenas os itens que correspondem ao critério selecionado
```

**Prioridade:** P1
**Rastreabilidade:** Transversal, F-042
**Sistema:** SISGHA-Web, SISGEA-Web

---

### RF-075 — Busca em tempo real (filtragem progressiva)

**Descrição:** A busca por texto deve operar em tempo real (filtragem progressiva enquanto o usuário digita).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário digitando no campo de busca de uma listagem
Quando o usuário insere cada caractere
Então o sistema filtra progressivamente os resultados a cada tecla digitada
E não requer ação de submissão para aplicar o filtro
```

**Prioridade:** P2
**Rastreabilidade:** Transversal, F-042
**Sistema:** SISGHA-Web, SISGEA-Web

---

## Calendário Acadêmico

### RF-076 — Visualização mensal do calendário com lista de eventos

**Descrição:** O sistema deve exibir o calendário acadêmico em formato mensal, com marcações visuais de eventos e dias não letivos, e lista de eventos do mês ao lado.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário (Aluno, Professor ou DAPE) na tela de Calendário
Quando o sistema renderiza a visualização mensal
Então exibe o calendário do mês com marcações visuais nos dias com eventos
E exibe lista lateral de eventos do mês com seus detalhes
```

**Prioridade:** P1
**Rastreabilidade:** UC-009, F-025
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-077 — Visualização anual do calendário com grid de 12 meses

**Descrição:** O sistema deve exibir o calendário acadêmico em formato anual, com grid de 12 meses (2 colunas × 6 linhas).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário na tela de Calendário com visualização anual ativada
Quando o sistema renderiza a visualização
Então exibe todos os 12 meses do ano em grid de 2 colunas e 6 linhas
E cada mês contém mini-calendário com marcações de eventos
```

**Prioridade:** P1
**Rastreabilidade:** UC-009 (A1), F-026
**Sistema:** SISGHA-Web

---

### RF-078 — Alternância bidirecional entre visualização mensal e anual

**Descrição:** O sistema deve permitir alternância bidirecional entre visualização mensal e anual do calendário.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário na visualização mensal do calendário
Quando o usuário clica no toggle de visualização
Então o sistema alterna para a visualização anual
E o toggle permite retornar à visualização mensal da mesma forma
```

**Prioridade:** P1
**Rastreabilidade:** UC-009, RN-60
**Sistema:** SISGHA-Web

---

### RF-079 — Navegação entre meses via setas

**Descrição:** O sistema deve permitir navegação entre meses via setas no calendário mensal.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário na visualização mensal do calendário
Quando o usuário clica na seta de navegação (anterior ou próximo)
Então o sistema carrega o calendário do mês correspondente
```

**Prioridade:** P1
**Rastreabilidade:** UC-009, RN-37
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-080 — Modal com detalhes de eventos ao clicar

**Descrição:** O sistema deve exibir modal com lista detalhada de eventos ao clicar em evento ou no botão "Ver Eventos".

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário visualizando o calendário
Quando o usuário clica em um evento marcado ou no botão "Ver Eventos"
Então o sistema exibe modal com a lista detalhada dos eventos do dia ou período selecionado
```

**Prioridade:** P2
**Rastreabilidade:** UC-010, F-025
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-081 — Filtragem do calendário por Modalidade, Ano Letivo e Curso

**Descrição:** O sistema deve permitir filtragem de calendário por Modalidade, Ano Letivo e Curso (web), e por busca no drawer (mobile).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário na tela de Calendário (web)
Quando o usuário seleciona filtros de Modalidade, Ano Letivo e/ou Curso
Então o sistema atualiza o calendário exibindo apenas eventos do calendário selecionado

Dado um usuário no aplicativo mobile na tela de Calendário
Quando o usuário busca no drawer de seleção
Então o sistema filtra os calendários disponíveis conforme o texto digitado
```

**Prioridade:** P1
**Rastreabilidade:** UC-009, F-042
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-082 — Estado vazio com mensagem orientativa

**Descrição:** O sistema deve exibir estado vazio com ilustração e mensagem orientativa quando nenhum calendário estiver selecionado.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário na tela de Calendário sem calendário selecionado
Quando o sistema renderiza a área de conteúdo
Então exibe ilustração de estado vazio e a mensagem "Selecione um calendário com os filtros acima para visualizá-lo"
```

**Prioridade:** P2
**Rastreabilidade:** UC-009, RN-35
**Sistema:** SISGHA-Web

---

### RF-083 — Cadastro de calendário acadêmico em 2 passos

**Descrição:** O sistema deve permitir ao DAPE cadastrar calendários acadêmicos em 2 passos: dados básicos (nome, formação, ano, modalidade) e definição de datas de início/fim das etapas por período.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Gestão de Calendários
Quando o DAPE preenche o passo 1 (nome, formação, ano letivo, modalidade)
E avança para o passo 2 e define as datas de cada etapa por período
E conclui o cadastro
Então o sistema cria o calendário com a estrutura de datas definida
```

**Prioridade:** P1
**Rastreabilidade:** UC-032, F-024, RN-33
**Sistema:** SISGHA-Web

---

### RF-084 — Períodos e etapas herdados da formação no cadastro de calendário

**Descrição:** Os períodos e etapas exibidos no passo 2 do cadastro de calendário devem ser herdados da formação selecionada no passo 1.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no passo 2 do cadastro de calendário
Quando o sistema carrega o passo 2
Então exibe automaticamente os períodos e etapas definidos na formação selecionada no passo 1
E solicita apenas as datas de início e fim de cada etapa
```

**Prioridade:** P1
**Rastreabilidade:** UC-032, RN-33, RN-39
**Sistema:** SISGHA-Web

---

### RF-085 — Datas de término de período podem extrapolar o ano letivo

**Descrição:** O sistema deve aceitar datas de término de período posteriores ao ano letivo do calendário (cenário de greve).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE definindo datas de etapas no cadastro de calendário
Quando o DAPE insere uma data de término de período superior ao ano letivo do calendário
Então o sistema aceita a data sem erro de validação
```

**Prioridade:** P1
**Rastreabilidade:** UC-032, RN-34
**Sistema:** SISGHA-Web

---

### RF-086 — Desativação de calendário sem exclusão permanente

**Descrição:** O sistema deve permitir desativação de calendário (exclusão lógica), mas não deve permitir exclusão permanente.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Gestão de Calendários
Quando o DAPE tenta desativar um calendário existente
Então o sistema desativa o calendário (exclusão lógica) e remove-o da visualização ativa
E o histórico de dados vinculados ao calendário é preservado
E nenhuma opção de exclusão permanente é oferecida
```

**Prioridade:** P1
**Rastreabilidade:** UC-034, RN-31
**Sistema:** SISGHA-Web

---

### RF-087 — Edição de calendário existente

**Descrição:** O sistema deve permitir ao DAPE editar dados e datas de etapas de calendários existentes.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Gestão de Calendários
Quando o DAPE abre o formulário de edição de um calendário e altera dados ou datas de etapas
E salva as alterações
Então o sistema atualiza o calendário com as novas informações
```

**Prioridade:** P2
**Rastreabilidade:** UC-033, F-024
**Sistema:** SISGHA-Web

---

### RF-088 — Listagem de calendários com filtros avançados

**Descrição:** O sistema deve permitir listar calendários com filtros (Ano Letivo, Modalidade, Formação, Curso) e busca por texto.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Gestão de Calendários
Quando o DAPE aplica filtros por Ano Letivo, Modalidade, Formação ou Curso
Então o sistema exibe apenas os calendários que correspondem aos critérios
E o campo de busca por texto filtra progressivamente os resultados
```

**Prioridade:** P1
**Rastreabilidade:** UC-032, F-042
**Sistema:** SISGHA-Web

---

### RF-089 — Persistência dos filtros de calendário entre navegações

**Descrição:** O sistema deve persistir a seleção de filtros de calendário ao navegar entre telas de calendário e gestão, usando gerenciamento de estado (Pinia).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE que aplicou filtros na tela de Calendário
Quando o DAPE navega para a tela de Gestão de Calendários e retorna
Então os filtros aplicados anteriormente permanecem ativos
E a visualização do calendário é a mesma de antes da navegação
```

**Prioridade:** P2
**Rastreabilidade:** UC-032, RN-32
**Sistema:** SISGHA-Web

---

### RF-090 — Cadastro de eventos globais com configuração completa

**Descrição:** O sistema deve permitir ao DAPE cadastrar eventos globais com: nome, tipo, cor, datas de início/fim, e horários opcionais (início/fim).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Gestão de Eventos
Quando o DAPE preenche o formulário de novo evento com nome, tipo, cor e datas
E clica em "Cadastrar"
Então o sistema cria o evento e o exibe na listagem
```

**Prioridade:** P1
**Rastreabilidade:** UC-035, F-027, RN-27, RN-28, RN-29
**Sistema:** SISGHA-Web

---

### RF-091 — Checkbox "Dura todo o dia" oculta campos de horário

**Descrição:** O checkbox "Dura todo o dia" deve ocultar os campos de horário início e fim quando marcado.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no formulário de evento
Quando o DAPE marca o checkbox "Dura todo o dia"
Então os campos de horário início e fim desaparecem do formulário

Quando o DAPE desmarca o checkbox
Então os campos de horário voltam a ser exibidos
```

**Prioridade:** P1
**Rastreabilidade:** UC-035, RN-23
**Sistema:** SISGHA-Web

---

### RF-092 — Accordions dinâmicos de participantes por formação

**Descrição:** O sistema deve gerar dinamicamente um accordion de turmas e professores para cada formação selecionada no evento.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no formulário de evento selecionando formações participantes
Quando o DAPE seleciona uma formação no campo de seleção
Então o sistema gera um accordion para essa formação listando suas turmas e professores
E para cada formação adicional selecionada, um novo accordion é gerado
```

**Prioridade:** P1
**Rastreabilidade:** UC-035, RN-24
**Sistema:** SISGHA-Web

---

### RF-093 — Checkbox "Todos participam" desabilita seleção individual

**Descrição:** O checkbox "Todos participam" deve desabilitar o select de formações e os accordions de seleção individual.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no formulário de evento
Quando o DAPE marca o checkbox "Todos participam"
Então o sistema desabilita o campo de seleção de formações
E desabilita todos os accordions de seleção individual de turmas e professores
```

**Prioridade:** P1
**Rastreabilidade:** UC-035, RN-25
**Sistema:** SISGHA-Web

---

### RF-094 — Edição de eventos globais

**Descrição:** O sistema deve permitir ao DAPE editar eventos globais existentes com mesmas opções do cadastro.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na listagem de eventos globais
Quando o DAPE abre o formulário de edição de um evento e altera os dados
E salva as alterações
Então o sistema atualiza o evento com as novas informações
```

**Prioridade:** P2
**Rastreabilidade:** UC-036, F-027
**Sistema:** SISGHA-Web

---

### RF-095 — Listagem de eventos com filtros avançados

**Descrição:** O sistema deve permitir listar eventos com filtros avançados: tipo, formação, curso, período, e busca por texto.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Gestão de Eventos
Quando o DAPE aplica filtros por tipo, formação, curso ou período
Então o sistema exibe apenas os eventos correspondentes aos critérios
```

**Prioridade:** P1
**Rastreabilidade:** UC-035, F-042
**Sistema:** SISGHA-Web

---

### RF-096 — Gestão de eventos exclusivos de turma

**Descrição:** O sistema deve permitir ao DAPE gerenciar eventos exclusivos de uma turma a partir da listagem de turmas.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na listagem de turmas
Quando o DAPE acessa os eventos de uma turma específica
Então o sistema exibe apenas eventos exclusivos dessa turma
E permite criar e editar eventos vinculados somente a essa turma
```

**Prioridade:** P1
**Rastreabilidade:** UC-020, F-029, RN-19
**Sistema:** SISGHA-Web

---

### RF-097 — Gestão da agenda do professor com tipos de evento

**Descrição:** O sistema deve permitir ao DAPE gerenciar a agenda do professor com eventos do tipo "atividade" e "indisponibilidade".

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE acessando a agenda de um professor
Quando o DAPE cria um novo evento de professor
Então o sistema oferece os tipos "atividade" e "indisponibilidade" para seleção
E o evento é vinculado exclusivamente a esse professor
```

**Prioridade:** P1
**Rastreabilidade:** UC-023, F-028, RN-20, RN-21
**Sistema:** SISGHA-Web

---

### RF-098 — Escopo restrito de eventos por turma e professor

**Descrição:** Eventos cadastrados via turma ou professor devem ser vinculados exclusivamente a essa entidade. Eventos multi-entidade devem ser cadastrados na Gestão de Eventos.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE cadastrando evento pelo modal de turma
Quando o evento é salvo
Então o sistema vincula o evento exclusivamente à turma correspondente
E o evento não aparece na lista de outras turmas ou professores
```

**Prioridade:** P1
**Rastreabilidade:** UC-020, UC-023, RN-19, RN-20
**Sistema:** SISGHA-Web

---

### RF-099 — Redirecionamento para Gestão de Eventos ao editar evento global

**Descrição:** Ao tentar editar um evento que não é exclusivo da turma ou professor (evento global), o sistema deve redirecionar automaticamente para o modal de edição na Gestão de Eventos.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE tentando editar um evento compartilhado pelo modal de turma ou professor
Quando o sistema detecta que o evento é global (vinculado a múltiplas entidades)
Então redireciona automaticamente para o modal de edição na tela de Gestão de Eventos
```

**Prioridade:** P1
**Rastreabilidade:** UC-020 (A2), UC-023 (A2), UC-036 (A1), RN-22
**Sistema:** SISGHA-Web

---

### RF-100 — Aviso ao redirecionar edição de evento de professor

**Descrição:** Ao redirecionar edição de evento de professor do tipo atividade/indisponibilidade, o sistema deve exibir aviso informando que o evento será editado no contexto de agenda do professor.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na Gestão de Eventos editando um evento do tipo agenda de professor
Quando o sistema abre o contexto de edição da agenda do professor
Então exibe aviso informando que o evento será editado no contexto da agenda do professor
```

**Prioridade:** P2
**Rastreabilidade:** UC-036 (A2), RN-26
**Sistema:** SISGHA-Web

---

### RF-101 — Consulta e gestão de eventos da semana durante edição de horário

**Descrição:** O sistema deve permitir ao DAPE consultar e gerenciar eventos da semana durante a edição de horário, via modal de agenda semanal.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no modo de edição de horário
Quando o DAPE clica no botão de agenda semanal no header
Então o sistema abre o modal de agenda semanal com os eventos do professor/turma da semana em edição
E permite criar e visualizar eventos vinculados à semana e à entidade em edição
```

**Prioridade:** P1
**Rastreabilidade:** UC-015, F-028, F-029
**Sistema:** SISGHA-Web

---

### RF-102 — Eventos criados na edição vinculados à semana e entidade em edição

**Descrição:** Eventos criados durante edição de horário devem ser vinculados exclusivamente à turma/professor e à semana em edição.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE criando um evento no modal de agenda durante a edição de horário
Quando o evento é salvo
Então o sistema vincula o evento à semana em edição e à turma ou professor correspondente
E o evento não afeta outras semanas ou entidades
```

**Prioridade:** P1
**Rastreabilidade:** UC-015, RN-11
**Sistema:** SISGHA-Web

---

### RF-103 — Cadastro de dias não letivos

**Descrição:** O sistema deve permitir ao DAPE cadastrar dias não letivos com nome/motivo e data(s).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Dias Não Letivos
Quando o DAPE preenche o formulário com o nome/motivo e a data do dia não letivo
E clica em "Cadastrar"
Então o sistema cria o registro e o exibe na visualização do calendário
```

**Prioridade:** P1
**Rastreabilidade:** UC-037, F-031
**Sistema:** SISGHA-Web

---

### RF-104 — Duas visualizações de dias não letivos: mensal e anual

**Descrição:** O sistema deve exibir dias não letivos em duas visualizações alternáveis: mensal (calendário + lista) e anual (consolidado agrupado por mês).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Dias Não Letivos
Quando o DAPE seleciona a visualização mensal
Então o sistema exibe o calendário do mês e lista lateral dos dias não letivos do mês

Quando o DAPE seleciona a visualização anual
Então o sistema exibe os 12 meses do ano consolidados com seus dias não letivos agrupados
```

**Prioridade:** P1
**Rastreabilidade:** UC-037, F-031
**Sistema:** SISGHA-Web

---

### RF-105 — Calendários mensais estáticos na visão anual de dias não letivos

**Descrição:** Na visão anual de dias não letivos, o calendário de cada mês deve ser exibido sem setas de navegação (estático).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na visão anual de dias não letivos
Quando o sistema renderiza o calendário de cada mês
Então os calendários mensais são exibidos sem setas de navegação
E a navegação entre meses não é possível nos mini-calendários da visão anual
```

**Prioridade:** P2
**Rastreabilidade:** UC-037, RN-36
**Sistema:** SISGHA-Web

---

## Registro e Relatório

### RF-106 — Cadastro de diários de classe em 2 passos

**Descrição:** O sistema deve permitir ao DAPE cadastrar diários de classe em 2 passos: seleção de turma e disciplina (passo 1) e preenchimento de dados (passo 2).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Diários
Quando o DAPE seleciona turma e disciplina no passo 1
E avança para o passo 2 e preenche os dados do diário
E conclui o cadastro
Então o sistema cria o diário vinculado à turma e disciplina selecionadas
```

**Prioridade:** P1
**Rastreabilidade:** UC-030, F-033, RN-52
**Sistema:** SISGHA-Web

---

### RF-107 — Disciplinas do diário filtradas pelo currículo da turma

**Descrição:** As disciplinas disponíveis para seleção no diário devem ser filtradas pelo currículo do curso da turma selecionada.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no passo 1 do cadastro de diário com turma selecionada
Quando o sistema carrega as disciplinas disponíveis
Então exibe apenas disciplinas pertencentes ao currículo do curso da turma selecionada
```

**Prioridade:** P1
**Rastreabilidade:** UC-030, RN-51
**Sistema:** SISGHA-Web

---

### RF-108 — Turma imutável após criação do diário

**Descrição:** A turma vinculada a um diário de classe deve ser imutável após a criação. O campo deve ficar desabilitado/readonly na edição.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE editando um diário de classe existente
Quando o formulário de edição é exibido
Então o campo de turma está desabilitado (readonly) e não pode ser alterado
```

**Prioridade:** P1
**Rastreabilidade:** UC-031, RN-50
**Sistema:** SISGHA-Web

---

### RF-109 — Edição de diário existente (exceto turma)

**Descrição:** O sistema deve permitir ao DAPE editar dados de diário existente (exceto turma).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na listagem de diários
Quando o DAPE abre o formulário de edição de um diário e altera os dados permitidos
E salva as alterações
Então o sistema atualiza o diário com os novos dados, mantendo a turma original
```

**Prioridade:** P2
**Rastreabilidade:** UC-031, F-033
**Sistema:** SISGHA-Web

---

### RF-110 — Listagem de diários por disciplina com busca

**Descrição:** O sistema deve permitir listar diários organizados por disciplina em grid de cards com busca.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Diários
Quando a tela carrega
Então o sistema exibe os diários em grid de cards organizados por disciplina
E oferece campo de busca por texto para filtrar os diários
```

**Prioridade:** P1
**Rastreabilidade:** UC-030, F-042
**Sistema:** SISGHA-Web

---

### RF-111 — Geração de relatório de aulas ministradas com filtros

**Descrição:** O sistema deve permitir ao DAPE gerar relatório de aulas ministradas com filtros: Professor e Semestre (obrigatórios) e até 4 filtros opcionais.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Relatório de Aulas
Quando o DAPE seleciona os filtros obrigatórios (Professor e Semestre)
E opcionalmente aplica filtros adicionais
E clica em "Gerar Relatório"
Então o sistema gera e exibe o relatório filtrado
```

**Prioridade:** P1
**Rastreabilidade:** UC-038, F-034
**Sistema:** SISGHA-Web

---

### RF-112 — Preview do relatório antes da exportação

**Descrição:** O sistema deve exibir preview do relatório em modal antes da exportação.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE que gerou um relatório de aulas
Quando o DAPE solicita a visualização antes de exportar
Então o sistema abre modal com preview do relatório formatado
E oferece opção de exportar a partir do modal
```

**Prioridade:** P1
**Rastreabilidade:** UC-038, F-034
**Sistema:** SISGHA-Web

---

### RF-113 — Exportação de relatório em PDF

**Descrição:** O sistema deve permitir exportar o relatório em formato PDF para download.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE com relatório gerado
Quando o DAPE clica no botão de exportação PDF
Então o sistema gera o arquivo PDF e inicia o download no navegador
```

**Prioridade:** P1
**Rastreabilidade:** UC-039, F-035
**Sistema:** SISGHA-Web

---

### RF-114 — Exportação direta de PDF sem preview obrigatório

**Descrição:** O DAPE deve poder exportar o PDF diretamente (sem preview) ou a partir do modal de preview.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Relatório de Aulas com relatório gerado
Quando o DAPE clica no botão de PDF sem abrir o preview
Então o sistema gera e inicia o download diretamente

Quando o DAPE abre o preview e clica em download no modal
Então o sistema também inicia o download a partir do modal
```

**Prioridade:** P2
**Rastreabilidade:** UC-039 (A1)
**Sistema:** SISGHA-Web

---

## Perfil e Comunicação

### RF-115 — Exibição completa do perfil do servidor

**Descrição:** O sistema deve exibir o perfil do servidor com: avatar, nome, matrícula, campus vinculado, disciplinas/turmas e disponibilidade.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor autenticado (Professor ou DAPE) na tela de Perfil
Quando a tela carrega
Então o sistema exibe avatar, nome, matrícula, campus, disciplinas/turmas vinculadas e grade de disponibilidade
```

**Prioridade:** P1
**Rastreabilidade:** UC-011, F-036
**Sistema:** SISGHA-Web

---

### RF-116 — Edição de dados pessoais via modal

**Descrição:** O sistema deve permitir ao servidor editar seus dados pessoais via modal de edição acessível a partir do perfil.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor na tela de Perfil
Quando o servidor clica no botão de edição e altera seus dados pessoais no modal
E salva as alterações
Então o sistema atualiza o perfil com os novos dados
```

**Prioridade:** P1
**Rastreabilidade:** UC-011, F-036, RN-06
**Sistema:** SISGHA-Web

---

### RF-117 — DAPE edita disponibilidade via modal no perfil

**Descrição:** O sistema deve permitir ao DAPE editar sua grade de disponibilidade via modal dedicado no perfil.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Perfil
Quando o DAPE clica para editar a disponibilidade
Então o sistema abre modal dedicado de edição de grade de disponibilidade
E ao salvar, persiste a grade atualizada
```

**Prioridade:** P2
**Rastreabilidade:** UC-011 (A2), F-036
**Sistema:** SISGHA-Web

---

### RF-118 — DAPE altera campus vinculado via modal no perfil

**Descrição:** O sistema deve permitir ao DAPE alterar seu campus vinculado via modal dedicado no perfil.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE na tela de Perfil
Quando o DAPE clica para alterar o campus
Então o sistema abre modal de seleção de campus
E ao confirmar, atualiza o campus vinculado ao perfil
```

**Prioridade:** P2
**Rastreabilidade:** UC-011 (A3), F-036
**Sistema:** SISGHA-Web

---

### RF-119 — Perfil mobile do professor com duas abas alternáveis

**Descrição:** O perfil mobile do professor deve exibir duas abas alternáveis: Disponibilidade (somente leitura) e Ensino (somente leitura).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um Professor autenticado no aplicativo mobile na tela de Perfil
Quando a tela carrega
Então o sistema exibe duas abas: "Disponibilidade" e "Ensino"
E a aba "Disponibilidade" exibe a grade de disponibilidade em modo somente leitura
E a aba "Ensino" exibe disciplinas e turmas em modo somente leitura
```

**Prioridade:** P1
**Rastreabilidade:** UC-012, F-016, F-036
**Sistema:** SISGHA-Mobile

---

### RF-120 — Disciplinas e turmas em carrossel deslizável no perfil mobile

**Descrição:** O perfil mobile deve exibir disciplinas/turmas do professor em carrossel deslizável.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um Professor na aba "Ensino" do perfil mobile
Quando a aba é exibida
Então o sistema exibe disciplinas e turmas do professor em carrossel deslizável horizontal
```

**Prioridade:** P2
**Rastreabilidade:** UC-012 (A1), F-036
**Sistema:** SISGHA-Mobile

---

### RF-121 — Alteração de foto de perfil no mobile

**Descrição:** O sistema deve permitir ao professor alterar sua foto de perfil via popup de imagem (mobile).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um Professor no aplicativo mobile
Quando o Professor clica no avatar para alterar a foto
Então o sistema exibe popup de seleção de imagem
E ao confirmar, atualiza a foto de perfil
```

**Prioridade:** P3
**Rastreabilidade:** UC-012
**Sistema:** SISGHA-Mobile

---

### RF-122 — Notificação de alterações de horário e eventos

**Descrição:** O sistema deve notificar professores e alunos sobre alterações de horário, eventos e avisos administrativos.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado uma alteração de horário ou evento realizada pelo DAPE
Quando a alteração é salva
Então o sistema gera notificações para os professores e alunos afetados
E as notificações aparecem na área de notificações dos destinatários
```

**Prioridade:** P1
**Rastreabilidade:** UC-040, F-037
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-123 — Notificações geradas automaticamente pelo sistema

**Descrição:** As notificações devem ser geradas automaticamente pelo sistema, sem interface de criação manual.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado qualquer evento que gere notificação (alteração de horário, novo evento, etc.)
Quando o evento ocorre
Então o sistema gera automaticamente a notificação para os destinatários
E nenhuma interface de criação manual de notificações é exposta ao usuário
```

**Prioridade:** P1
**Rastreabilidade:** UC-040, F-037
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-124 — Indicador visual de notificações não lidas no header

**Descrição:** O sistema deve exibir indicador visual de notificações não lidas (badge on/off) no ícone de sino do header.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário com notificações não lidas
Quando o usuário visualiza o header
Então o ícone de sino exibe badge visual indicando notificações pendentes

Dado um usuário sem notificações não lidas
Quando o usuário visualiza o header
Então o ícone de sino é exibido sem badge
```

**Prioridade:** P1
**Rastreabilidade:** UC-040, RN-63
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-125 — Tela dedicada de notificações no mobile

**Descrição:** O mobile deve ter tela dedicada para listagem de notificações, acessível via ícone de sino no header.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário no aplicativo mobile
Quando o usuário clica no ícone de sino no header
Então o sistema navega para a tela de listagem de notificações
E exibe todas as notificações com seus detalhes
```

**Prioridade:** P2
**Rastreabilidade:** UC-040, F-037
**Sistema:** SISGHA-Mobile

---

### RF-126 — Notificações em dropdown no web

**Descrição:** O web deve exibir notificações em dropdown via ícone de sino, sem tela dedicada.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário no sistema web
Quando o usuário clica no ícone de sino no header
Então o sistema exibe dropdown com a lista de notificações
E não navega para uma tela dedicada de notificações
```

**Prioridade:** P3
**Rastreabilidade:** UC-040
**Sistema:** SISGHA-Web

---

## Navegação e Experiência

### RF-127 — Landing page institucional

**Descrição:** O sistema deve exibir landing page institucional com informações do Ladesa, SISGHA e SISGEA, e botão de acesso.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário que acessa a URL principal do sistema pela primeira vez
Quando a página carrega
Então o sistema exibe a landing page com descrição institucional do Ladesa, SISGHA e SISGEA
E exibe botão de acesso que direciona para a tela de seleção de sistema
```

**Prioridade:** P1
**Rastreabilidade:** UC-001, RN-67
**Sistema:** SISGHA-Web

---

### RF-128 — Dashboard de acesso rápido como tela inicial do DAPE

**Descrição:** O DAPE deve ter dashboard de acesso rápido como tela inicial, com atalhos organizados por categoria (Horário, Relatórios, Diários).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE que acaba de se autenticar
Quando o sistema redireciona para a tela inicial
Então o sistema exibe o dashboard de Acesso Rápido com atalhos organizados nas categorias "Horário Acadêmico", "Relatórios" e "Diários"
```

**Prioridade:** P1
**Rastreabilidade:** UC-013, UC-016, UC-038, F-039
**Sistema:** SISGHA-Web

---

### RF-129 — Sidebar do DAPE com accordions colapsáveis

**Descrição:** O DAPE web deve ter sidebar com itens de nível raiz (Início, Calendário, Perfil, Sair) e accordions colapsáveis para Gestão (Intervalos, Diários, Turmas, Usuários) e Ensino (Cursos, Disciplinas).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE autenticado no sistema web
Quando o sistema renderiza a sidebar
Então exibe os itens: Início, Calendário, Perfil e Sair como itens fixos
E exibe os grupos "Gestão" e "Ensino" como accordions colapsáveis com seus sub-itens
```

**Prioridade:** P1
**Rastreabilidade:** Transversal, F-040
**Sistema:** SISGHA-Web

---

### RF-130 — Sidebar do Professor com itens básicos

**Descrição:** O Professor web deve ter sidebar com: Início, Calendário, Perfil, Sair.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um Professor autenticado no sistema web
Quando o sistema renderiza a sidebar
Então exibe apenas os itens: Início, Calendário, Perfil e Sair
E não exibe itens administrativos ou de gestão
```

**Prioridade:** P1
**Rastreabilidade:** Transversal, F-040
**Sistema:** SISGHA-Web

---

### RF-131 — Sidebar com dois estados: expandido e recolhido

**Descrição:** As sidebars devem ter dois estados: expandido (ícone + label) e recolhido (somente ícone), alternáveis pelo usuário.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor autenticado no sistema web
Quando o servidor clica no controle de recolhimento da sidebar
Então a sidebar alterna entre o estado expandido (ícone + texto) e recolhido (apenas ícone)
E a área de conteúdo principal se ajusta ao espaço disponível
```

**Prioridade:** P1
**Rastreabilidade:** Transversal, RN-56
**Sistema:** SISGHA-Web, SISGEA-Web

---

### RF-132 — Barra de navegação inferior fixa no mobile

**Descrição:** O mobile deve ter barra de navegação inferior fixa com 3 ícones: Calendário, Home (SISGHA), Perfil.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário autenticado no aplicativo mobile
Quando navega por qualquer tela
Então a barra de navegação inferior permanece fixada com os ícones: Calendário, Home e Perfil
E cada ícone direciona para a seção correspondente
```

**Prioridade:** P1
**Rastreabilidade:** Transversal, F-041
**Sistema:** SISGHA-Mobile

---

### RF-133 — Header web com informações completas do usuário

**Descrição:** O header web deve exibir: perfil do usuário (avatar + nome), seletor de papel, badge de campus, toggle de tema, ícone de notificações e logomarca.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor autenticado no sistema web
Quando qualquer tela é renderizada
Então o header exibe: avatar do usuário, nome, seletor de papel, badge de campus ativo, toggle de tema, ícone de notificações e logomarca do sistema
```

**Prioridade:** P1
**Rastreabilidade:** Transversal
**Sistema:** SISGHA-Web

---

### RF-134 — Aluno web com header simplificado sem sidebar

**Descrição:** O aluno web deve ter header simplificado sem sidebar. A navegação é contextual (seleção → horário → calendário).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um aluno acessando o sistema via web
Quando qualquer tela é renderizada
Então o sistema exibe header simplificado sem sidebar
E a navegação disponível é apenas contextual: seleção de turma, horário e calendário
```

**Prioridade:** P1
**Rastreabilidade:** UC-006, UC-007, RN-03
**Sistema:** SISGHA-Web

---

### RF-135 — Suporte a tema claro e escuro

**Descrição:** O sistema deve suportar tema claro e tema escuro, alternável via ícone no header (web) e com confirmação (mobile).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário no sistema web
Quando o usuário clica no ícone de tema no header
Então o sistema alterna entre tema claro e escuro imediatamente

Dado um usuário no aplicativo mobile
Quando o usuário solicita a troca de tema
Então o sistema exibe modal de confirmação
E ao confirmar, aplica o tema selecionado
```

**Prioridade:** P2
**Rastreabilidade:** Transversal, F-005, RN-62
**Sistema:** SISGHA-Web, SISGHA-Mobile

---

### RF-136 — Aluno sem acesso a sidebar ou funções de escrita

**Descrição:** O Aluno web não deve ter acesso a sidebar ou a qualquer função de escrita, exceto seleção de turma.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um aluno acessando o sistema via web
Quando navega pelas telas disponíveis
Então nenhum elemento de sidebar é exibido
E nenhum botão de criação, edição ou exclusão é exibido
E a única interação permitida além da visualização é a seleção de turma
```

**Prioridade:** P1
**Rastreabilidade:** UC-003, UC-006, RN-02, RN-03, RN-05
**Sistema:** SISGHA-Web

---

### RF-137 — Botões "Voltar/Cancelar" e "Salvar/Cadastrar" em todos os modais

**Descrição:** Todos os modais de formulário devem ter botões "Voltar/Cancelar" e "Salvar/Cadastrar", permitindo cancelamento sem perda de dados da tela subjacente.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário em qualquer modal de formulário
Quando o modal está aberto com dados preenchidos
Então o botão "Voltar" ou "Cancelar" fecha o modal sem salvar
E os dados da tela subjacente são preservados
E o botão "Salvar" ou "Cadastrar" persiste os dados e fecha o modal
```

**Prioridade:** P2
**Rastreabilidade:** Transversal, RN-30
**Sistema:** SISGHA-Web, SISGEA-Web

---

### RF-138 — Botões de acesso rápido com ícone e label no dashboard do DAPE

**Descrição:** O sistema deve exibir botões de acesso rápido com ícone e label descritivo no dashboard do DAPE.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um DAPE no dashboard de Acesso Rápido
Quando a tela carrega
Então cada atalho é exibido com ícone representativo e label descritivo da função
```

**Prioridade:** P3
**Rastreabilidade:** UC-013, UC-016, UC-038, F-039
**Sistema:** SISGHA-Web

---

### RF-139 — Opção "Sair" em todas as sidebars

**Descrição:** O sistema deve exibir a opção "Sair" em todas as sidebars, realizando logout e redirecionando para o login.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um servidor autenticado com a sidebar visível
Quando o servidor clica em "Sair"
Então o sistema encerra a sessão do servidor
E redireciona para a tela de login
```

**Prioridade:** P1
**Rastreabilidade:** Transversal
**Sistema:** SISGHA-Web, SISGEA-Web

---

### RF-140 — Animação de splash screen no aplicativo mobile

**Descrição:** O mobile deve exibir animação de splash screen ao abrir o aplicativo, seguida de tela de loading.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário que abre o aplicativo mobile
Quando o aplicativo inicia
Então o sistema exibe a animação de splash screen
E em seguida exibe a tela de loading antes de carregar a tela principal
```

**Prioridade:** P1
**Rastreabilidade:** UC-002, F-001
**Sistema:** SISGHA-Mobile

---

## SISGEA — Gestão de Ambientes

### RF-141 — Login próprio do SISGEA separado do SISGHA

**Descrição:** O SISGEA deve ter login próprio, separado do SISGHA, acessível via card na tela de seleção de acesso.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um usuário na tela de Seleção de Acesso
Quando o usuário clica no card do SISGEA
Então o sistema redireciona para a tela de login do SISGEA
E o login do SISGEA é independente do login do SISGHA
```

**Prioridade:** P1
**Rastreabilidade:** UC-001, RN-08
**Sistema:** SISGEA-Web

---

### RF-142 — Cadastro de blocos

**Descrição:** O sistema deve permitir cadastrar blocos (edificações) com nome e dados associados.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes autenticado no SISGEA
Quando o administrador preenche o formulário de novo bloco e clica em "Cadastrar"
Então o sistema cria o bloco e o exibe na listagem
```

**Prioridade:** P1
**Rastreabilidade:** UC-041, F-043
**Sistema:** SISGEA-Web

---

### RF-143 — Edição de blocos existentes

**Descrição:** O sistema deve permitir editar dados de blocos existentes.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes na listagem de blocos
Quando o administrador abre o formulário de edição de um bloco e altera os dados
E salva as alterações
Então o sistema atualiza o bloco na listagem
```

**Prioridade:** P2
**Rastreabilidade:** UC-042, F-043
**Sistema:** SISGEA-Web

---

### RF-144 — Listagem de blocos com busca

**Descrição:** O sistema deve permitir listar blocos em grid de cards com busca por texto.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes na tela de Blocos
Quando a tela carrega
Então o sistema exibe os blocos em grid de cards
E oferece campo de busca por texto para filtrar a listagem
```

**Prioridade:** P1
**Rastreabilidade:** UC-041, F-042
**Sistema:** SISGEA-Web

---

### RF-145 — Cadastro de ambientes dentro de blocos

**Descrição:** O sistema deve permitir cadastrar ambientes (salas, labs, etc.) dentro de blocos.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes autenticado no SISGEA
Quando o administrador preenche o formulário de novo ambiente associando-o a um bloco
E clica em "Cadastrar"
Então o sistema cria o ambiente vinculado ao bloco e o exibe na listagem
```

**Prioridade:** P1
**Rastreabilidade:** UC-043, F-044
**Sistema:** SISGEA-Web

---

### RF-146 — Edição de ambientes existentes

**Descrição:** O sistema deve permitir editar dados de ambientes existentes.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes na listagem de ambientes
Quando o administrador abre o formulário de edição de um ambiente e altera os dados
E salva as alterações
Então o sistema atualiza o ambiente na listagem
```

**Prioridade:** P2
**Rastreabilidade:** UC-044, F-044
**Sistema:** SISGEA-Web

---

### RF-147 — Listagem de ambientes com busca

**Descrição:** O sistema deve permitir listar ambientes em grid de cards com busca por texto.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes na tela de Ambientes
Quando a tela carrega
Então o sistema exibe os ambientes em grid de cards
E oferece campo de busca por texto para filtrar
```

**Prioridade:** P1
**Rastreabilidade:** UC-043, F-042
**Sistema:** SISGEA-Web

---

### RF-148 — Reservas de ambientes em grade semanal de 6 dias

**Descrição:** O sistema deve exibir reservas de ambientes em grade semanal de 6 dias, com cards de reserva por faixa horária.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes na tela de Reservas
Quando a tela carrega
Então o sistema exibe a grade semanal com 6 dias letivos
E cada faixa horária ocupada exibe card com as informações da reserva correspondente
```

**Prioridade:** P1
**Rastreabilidade:** UC-045, F-045, RN-53
**Sistema:** SISGEA-Web

---

### RF-149 — Criação de reserva por clique em horário vazio

**Descrição:** O sistema deve permitir criar reserva clicando em horário vazio na grade, exibindo modal com lista de ambientes disponíveis para o horário.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes na grade de reservas
Quando o administrador clica em um horário vazio
Então o sistema abre modal com a lista de ambientes disponíveis para aquele horário
E ao selecionar um ambiente e confirmar, cria a reserva
```

**Prioridade:** P1
**Rastreabilidade:** UC-045, F-045, RN-55
**Sistema:** SISGEA-Web

---

### RF-150 — Edição de reserva existente pelo card

**Descrição:** O sistema deve permitir editar reserva existente clicando no card da reserva na grade.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes visualizando a grade de reservas
Quando o administrador clica no card de uma reserva existente
Então o sistema abre o modal de edição com os dados da reserva preenchidos
E ao salvar as alterações, a reserva é atualizada
```

**Prioridade:** P2
**Rastreabilidade:** UC-046, F-045
**Sistema:** SISGEA-Web

---

### RF-151 — Navegação entre dias no modal de reserva

**Descrição:** O modal de reserva deve permitir navegação entre dias via setas, sem necessidade de fechar e reabrir.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes com o modal de reserva aberto
Quando o administrador clica nas setas de navegação de dia dentro do modal
Então o sistema atualiza o contexto do modal para o dia selecionado
E o modal permanece aberto sem necessidade de fechar e reabrir
```

**Prioridade:** P2
**Rastreabilidade:** UC-045, UC-046, RN-54
**Sistema:** SISGEA-Web

---

### RF-152 — Filtragem de ambientes disponíveis por horário

**Descrição:** O sistema deve filtrar ambientes disponíveis com base no horário selecionado (não exibir ambientes já reservados).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes no modal de criação de reserva
Quando o modal é aberto para um horário específico
Então o sistema exibe apenas ambientes sem reservas para aquele horário
E ambientes já reservados não aparecem na lista
```

**Prioridade:** P1
**Rastreabilidade:** UC-045, RN-55
**Sistema:** SISGEA-Web

---

### RF-153 — Busca de ambiente/reserva na grade

**Descrição:** O sistema deve permitir busca de ambiente/reserva na grade.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes na tela de Reservas
Quando o administrador digita no campo de busca
Então o sistema filtra a grade exibindo apenas os ambientes ou reservas que correspondem ao texto
```

**Prioridade:** P1
**Rastreabilidade:** UC-045, F-042
**Sistema:** SISGEA-Web

---

### RF-154 — Sidebar do SISGEA com itens de navegação

**Descrição:** O SISGEA deve ter sidebar com: Reservas, Ambientes, Blocos, Configurações, Sair.

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes autenticado no SISGEA
Quando qualquer tela é renderizada
Então a sidebar exibe os itens: Reservas, Ambientes, Blocos, Configurações e Sair
E cada item direciona para a seção correspondente
```

**Prioridade:** P1
**Rastreabilidade:** Transversal, F-040
**Sistema:** SISGEA-Web

---

### RF-155 — Tela de Configurações do SISGEA (não prototipada)

**Descrição:** O SISGEA deve ter tela de Configurações (não prototipada, mas presente na sidebar como item de navegação).

**Critérios de aceitação (Gherkin):**
```gherkin
Dado um administrador de ambientes na sidebar do SISGEA
Quando o administrador clica em "Configurações"
Então o sistema navega para a tela de Configurações
E a tela existe no sistema mesmo que com conteúdo a definir
```

**Prioridade:** P3
**Rastreabilidade:** N/A
**Sistema:** SISGEA-Web

---

## Estatísticas

| Dimensão | Valor |
|---|---|
| Total de RFs | 155 |
| P1 — Essencial | 97 (63%) |
| P2 — Importante | 44 (28%) |
| P3 — Desejável | 14 (9%) |
| Sistema SISGHA | 140 |
| Sistema SISGEA | 15 |
| Módulo Autenticação | 15 (RF-001 a RF-015) |
| Módulo Horário | 28 (RF-016 a RF-043) |
| Módulo Entidades Acadêmicas | 32 (RF-044 a RF-075) |
| Módulo Calendário | 30 (RF-076 a RF-105) |
| Módulo Registro/Relatório | 9 (RF-106 a RF-114) |
| Módulo Perfil/Comunicação | 12 (RF-115 a RF-126) |
| Módulo Navegação/UX | 14 (RF-127 a RF-140) |
| Módulo SISGEA | 15 (RF-141 a RF-155) |
