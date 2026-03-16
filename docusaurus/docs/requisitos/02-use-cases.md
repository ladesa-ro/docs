---
sidebar_position: 2
title: Casos de Uso
---

# Casos de Uso

Este documento especifica os 46 casos de uso do ecossistema Ladesa (SISGHA + SISGEA), organizados por categoria funcional.

**Convenções de referência:**
- `F-XX` — Fluxo de interação (flows.txt)
- `RN-XX` — Regra de negócio (rules.txt)
- `F-XXX` — Feature do sistema ([Épicos e Features](./01-epics-features.md))

**Atores:**
- **ALU** — Aluno (acesso anônimo)
- **PROF** — Professor
- **DAPE** — Operador DAPE
- **ADM_EA** — Administrador de Espaços e Ambientes

---

## Autenticação e Acesso

---

### UC-001 — Autenticar servidor (web)

**Ator primário:** Professor, DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Autenticar-se no sistema via navegador para acessar o painel correspondente ao papel do usuário.

**Pré-condições:**
- O servidor possui matrícula e senha cadastrados no sistema.
- O sistema está acessível via URL.

**Fluxo principal:**
1. O servidor acessa a URL do sistema.
2. O sistema exibe a página inicial (landing page Ladesa).
3. O servidor clica no botão de acesso principal.
4. O sistema exibe a tela de seleção de acesso.
5. O servidor seleciona o card "SISGHA".
6. O sistema exibe a tela de login de servidor.
7. O servidor preenche o campo matrícula.
8. O servidor preenche o campo senha.
9. O servidor clica no botão "Entrar".
10. O sistema valida as credenciais.
11. O sistema identifica os papéis do servidor (RN-64).
12. O sistema redireciona para a tela principal do papel: DAPE → Início com Acesso Rápido; Professor → Horário da Semana; ambos os papéis → tela do papel padrão com alternância disponível (RN-04).

**Fluxos alternativos:**
- A1 — Credenciais inválidas: o sistema exibe mensagem de erro (RN-49); o servidor corrige e tenta novamente.
- A2 — Senha esquecida: o servidor clica em "Esqueceu a senha?"; o sistema redireciona para o fluxo de recuperação.
- A3 — Acesso direto ao login: o servidor acessa a URL direta, pulando a landing page e a seleção de acesso.

**Pós-condições:**
- O servidor está autenticado com sessão ativa.
- O painel correspondente ao papel está visível.
- O cabeçalho exibe nome, avatar e seletor de papel.
- O campus padrão está selecionado.

**Regras de negócio:** RN-04, RN-49, RN-64, RN-65, RN-66
**Features:** F-001, F-003
**Fluxos relacionados:** F-01

---

### UC-002 — Autenticar servidor (mobile)

**Ator primário:** Professor
**Prioridade:** Alta
**Sistema:** SISGHA-Mobile

**Objetivo:** Autenticar-se no aplicativo mobile SISGHA.

**Pré-condições:**
- O aplicativo está instalado no dispositivo.
- O servidor possui credenciais válidas.

**Fluxo principal:**
1. O servidor abre o aplicativo.
2. O sistema exibe a splash screen com animação.
3. O sistema exibe a tela de loading.
4. O sistema exibe a tela de login.
5. O servidor preenche os campos de usuário e senha.
6. O servidor clica no botão "Login" (servidor).
7. O sistema valida as credenciais.
8. O sistema redireciona para a tela Home do professor.

**Fluxos alternativos:**
- A1 — Credenciais inválidas: o sistema exibe mensagem de validação abaixo dos campos (RN-49); o servidor corrige e tenta novamente.

**Pós-condições:**
- O professor está autenticado no aplicativo mobile.
- A tela Home exibe o horário do dia e a barra de navegação inferior.

**Regras de negócio:** RN-49
**Features:** F-001
**Fluxos relacionados:** F-02

---

### UC-003 — Acessar como aluno

**Ator primário:** Aluno
**Prioridade:** Alta
**Sistema:** SISGHA-Web, SISGHA-Mobile

**Objetivo:** Acessar o sistema para consultar horários sem autenticação.

**Pré-condições:**
- O sistema está acessível (web ou mobile).

**Fluxo principal (web):**
1. O aluno acessa a URL do sistema.
2. O sistema exibe a página inicial.
3. O aluno clica no botão de acesso.
4. O sistema exibe a tela de seleção de acesso.
5. O aluno seleciona "SISGHA".
6. O sistema exibe a tela de login.
7. O aluno clica no botão "Acessar como Aluno" (RN-02).
8. O sistema redireciona para a seleção de horário.

**Fluxo principal (mobile):**
1. O aluno abre o aplicativo.
2. O sistema exibe splash screen e loading.
3. O sistema exibe a tela de login.
4. O aluno clica no botão de acesso como aluno (RN-02).
5. O sistema redireciona para a seleção de horário.

**Fluxos alternativos:**
- Nenhum — o acesso anônimo não possui falhas de autenticação.

**Pós-condições:**
- O aluno está no sistema em modo de consulta (somente leitura).
- Não há sessão autenticada nem registro de identidade (RN-02).
- A tela de seleção de turma está exibida.

**Regras de negócio:** RN-02, RN-03
**Features:** F-002
**Fluxos relacionados:** F-01, F-02

---

### UC-004 — Alternar papel DAPE / Professor

**Ator primário:** Servidor (com papéis DAPE e Professor)
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Alternar entre a visão administrativa (DAPE) e a visão de consulta (Professor) sem necessidade de logout.

**Pré-condições:**
- O servidor está autenticado (UC-001).
- O servidor possui ambos os papéis: DAPE e Professor (RN-04).

**Fluxo principal:**
1. O servidor clica no seletor de papel no cabeçalho ("DAPE ▼" ou "Professor ▼").
2. O sistema exibe as opções de papel disponíveis.
3. O servidor seleciona o papel desejado.
4. O sistema atualiza a sidebar, o conteúdo e as permissões conforme o papel (RN-03).
5. O sistema redireciona para a tela principal do novo papel: DAPE → Início com Acesso Rápido; Professor → Horário da Semana.

**Fluxos alternativos:**
- A1 — Servidor com apenas um papel: o seletor não é exibido ou está desabilitado.

**Pós-condições:**
- A interface do papel selecionado está visível.
- A sidebar reflete as opções do novo papel.
- As permissões de leitura/escrita estão ajustadas.

**Regras de negócio:** RN-03, RN-04
**Features:** F-003
**Fluxos relacionados:** F-01 (alt-3)

---

### UC-005 — Selecionar campus ativo

**Ator primário:** Professor, DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Selecionar o campus de referência quando vinculado a múltiplos campi.

**Pré-condições:**
- O servidor está autenticado (UC-001).
- O servidor está vinculado a mais de um campus (RN-47).

**Fluxo principal:**
1. O servidor clica no badge de campus no cabeçalho (ex: "Ji-Paraná").
2. O sistema exibe o modal de seleção de campus com a lista de campi vinculados.
3. O servidor seleciona o campus desejado.
4. O sistema atualiza o contexto global: todos os dados exibidos (turmas, professores, horários, intervalos) passam a refletir o campus selecionado.
5. O badge no cabeçalho atualiza para o nome do novo campus.

**Fluxos alternativos:**
- A1 — Servidor vinculado a apenas um campus: o badge exibe o nome fixo sem opções alternativas.

**Pós-condições:**
- O campus ativo está alterado para toda a sessão.
- Os dados exibidos correspondem ao novo campus.

**Regras de negócio:** RN-46, RN-47
**Features:** F-004
**Fluxos relacionados:** Transversal

---

## Consulta de Horário

---

### UC-006 — Selecionar turma para consultar horário

**Ator primário:** Aluno
**Prioridade:** Alta
**Sistema:** SISGHA-Web, SISGHA-Mobile

**Objetivo:** Selecionar a turma desejada para visualizar seu horário.

**Pré-condições:**
- O aluno acessou o sistema (UC-003).
- Existem turmas cadastradas no sistema.

**Fluxo principal (web):**
1. O sistema exibe a tela de seleção de horário.
2. O aluno seleciona o Ano Letivo no ComboBox.
3. O aluno seleciona a Modalidade de Ensino no ComboBox.
4. O aluno seleciona o Curso no ComboBox.
5. O aluno clica no botão de busca.
6. O sistema exibe a lista de turmas/períodos disponíveis.
7. O aluno seleciona a turma desejada.
8. O sistema redireciona para o Horário da Semana.

**Fluxo principal (mobile):**
1. O sistema exibe a tela de seleção de horário.
2. O aluno expande o nível 1 do accordion (Modalidade).
3. O aluno expande o nível 2 (Curso).
4. O aluno seleciona o nível 3 (Turma) (RN-58).
5. O sistema redireciona para o horário correspondente (Técnico Integrado ou Graduação).

**Fluxos alternativos:**
- A1 — Nenhuma turma encontrada: o sistema exibe lista vazia; o aluno ajusta os filtros.
- A2 — Trocar de turma: o aluno retorna à tela de seleção e repete o fluxo.

**Pós-condições:**
- A turma está selecionada como contexto da sessão do aluno.
- O horário da turma é exibido na tela de horário.

**Regras de negócio:** RN-01, RN-58
**Features:** F-038
**Fluxos relacionados:** F-03, F-04

---

### UC-007 — Consultar horário semanal

**Ator primário:** Aluno, Professor
**Prioridade:** Alta
**Sistema:** SISGHA-Web, SISGHA-Mobile

**Objetivo:** Visualizar a grade horária semanal completa.

**Pré-condições:**
- Aluno: turma selecionada (UC-006).
- Professor: autenticado (UC-001 ou UC-002).
- Horários publicados para a semana corrente.

**Fluxo principal:**
1. O sistema exibe a grade horária semanal (dias da semana × intervalos de aula).
2. O ator visualiza as disciplinas alocadas em cada célula com diferenciação visual por cor.
3. (Opcional) O ator navega para outra semana via setas de navegação.
4. O sistema atualiza a grade com os dados da semana selecionada.

**Fluxos alternativos:**
- A1 — Alternar para visualização diária: o ator clica em "Trocar Visualização" e o sistema exibe o horário do dia (UC-008).
- A2 — Semana sem horário publicado: o sistema exibe a grade vazia para a semana.

**Pós-condições:**
- O ator visualizou a grade semanal completa.
- Nenhum dado foi alterado (somente leitura) (RN-01, RN-06).

**Regras de negócio:** RN-01, RN-06, RN-18
**Features:** F-006, F-007, F-009
**Fluxos relacionados:** F-03, F-07

---

### UC-008 — Consultar horário diário

**Ator primário:** Aluno, Professor
**Prioridade:** Alta
**Sistema:** SISGHA-Web, SISGHA-Mobile

**Objetivo:** Visualizar as aulas de um dia específico.

**Pré-condições:**
- Mesmas de UC-007.

**Fluxo principal (web):**
1. A partir do horário semanal, o ator clica em "Trocar Visualização" para a visão diária.
2. O sistema exibe a tela de horário do dia.
3. O ator visualiza as abas de dia com o dia atual selecionado.
4. O sistema exibe as aulas do dia (cards com disciplina, professor, sala e horário).
5. (Opcional) O ator clica em outra aba de dia.
6. O sistema atualiza a lista de aulas para o dia selecionado.

**Fluxo principal (mobile):**
1. O sistema exibe a tela Home (Professor) ou Horário do Aluno.
2. O ator visualiza as abas de dia.
3. O ator seleciona o dia desejado.
4. O sistema exibe a lista de aulas do dia.

**Fluxos alternativos:**
- A1 — Alternar para visualização semanal: o ator clica em "Trocar Visualização" e retorna à grade semanal (UC-007).
- A2 — Navegar para outra semana (web): o ator usa as setas de semana; o sistema atualiza os dados.

**Pós-condições:**
- O ator visualizou as aulas de um dia específico.
- Nenhum dado foi alterado (RN-01, RN-06).

**Regras de negócio:** RN-01, RN-06, RN-18
**Features:** F-006, F-008
**Fluxos relacionados:** F-03, F-04, F-07, F-08

---

## Consulta de Calendário

---

### UC-009 — Consultar calendário acadêmico

**Ator primário:** Aluno, Professor
**Prioridade:** Alta
**Sistema:** SISGHA-Web, SISGHA-Mobile

**Objetivo:** Visualizar o calendário acadêmico com eventos e datas relevantes.

**Pré-condições:**
- Ator com acesso ao sistema (UC-001, UC-002 ou UC-003).
- Pelo menos um calendário acadêmico publicado.

**Fluxo principal (web — mensal):**
1. O ator acessa o calendário via navegação (aluno: link contextual; professor: sidebar → "Calendário").
2. (Professor) O ator seleciona filtros: Ano Letivo, Modalidade, Curso.
3. O sistema exibe o calendário parcial mensal com marcações de eventos e dias não letivos.
4. O ator visualiza a lista de eventos do mês ao lado.
5. (Opcional) O ator navega entre meses.

**Fluxo principal (mobile):**
1. O ator acessa via barra de navegação inferior (ícone calendário).
2. (Opcional) O ator abre o drawer de busca para filtrar.
3. O sistema exibe o calendário mensal.
4. O ator visualiza as etiquetas de evento.

**Fluxos alternativos:**
- A1 — Visualizar calendário anual (web): o ator clica em "Trocar Visualização"; o sistema exibe o grid de 12 meses.
- A2 — Ver lista completa de eventos (mobile): o ator clica em "Ver Todos os Eventos"; o sistema exibe o modal com a lista completa.

**Pós-condições:**
- O ator visualizou o calendário com eventos.
- Nenhum dado foi alterado (RN-01).

**Regras de negócio:** RN-01, RN-37
**Features:** F-025, F-026
**Fluxos relacionados:** F-05, F-06, F-09, F-10

---

### UC-010 — Consultar eventos do calendário

**Ator primário:** Aluno, Professor
**Prioridade:** Média
**Sistema:** SISGHA-Web, SISGHA-Mobile

**Objetivo:** Visualizar detalhes de eventos de um período do calendário.

**Pré-condições:**
- Calendário exibido (UC-009).
- Existem eventos cadastrados para o período.

**Fluxo principal (web):**
1. O ator clica em um evento ou em uma data marcada no calendário.
2. O sistema exibe o modal de eventos com lista detalhada.
3. O ator consulta os detalhes dos eventos.
4. O ator fecha o modal.

**Fluxo principal (calendário anual — web):**
1. O ator clica em "Ver Eventos" na tela de calendário anual.
2. O sistema exibe o modal com todos os eventos do ano/período.

**Fluxos alternativos:**
- Nenhum — fluxo de consulta pura.

**Pós-condições:**
- O ator visualizou os eventos em detalhe.
- O modal foi fechado e o ator retornou ao calendário.

**Regras de negócio:** RN-01
**Features:** F-025, F-026
**Fluxos relacionados:** F-05, F-09

---

## Perfil e Disponibilidade

---

### UC-011 — Editar perfil do servidor

**Ator primário:** Professor, DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Atualizar dados pessoais do próprio perfil.

**Pré-condições:**
- Servidor autenticado (UC-001).

**Fluxo principal:**
1. O servidor acessa o perfil via sidebar → "Perfil".
2. O sistema exibe dados: avatar, nome, matrícula, campus, disciplinas/turmas e disponibilidade.
3. O servidor clica no botão de editar perfil.
4. O sistema exibe o modal de edição de usuário.
5. O servidor altera os campos desejados.
6. O servidor clica em "Salvar".
7. O sistema valida e persiste as alterações.
8. O sistema fecha o modal e atualiza os dados no perfil.

**Fluxos alternativos:**
- A1 — Cancelar edição: o servidor clica em "Cancelar"; o sistema fecha o modal sem salvar.
- A2 — (DAPE) Editar disponibilidade: o servidor acessa o modal de disponibilidade e ajusta a grade (UC-012).
- A3 — (DAPE) Alterar campus vinculado: o servidor acessa o modal de alteração de campus e seleciona novo campus.

**Pós-condições:**
- Os dados do perfil estão atualizados.
- Se o nome ou avatar foram alterados, o cabeçalho reflete as mudanças.

**Regras de negócio:** RN-06
**Features:** F-036
**Fluxos relacionados:** F-11, F-27

---

### UC-012 — Editar disponibilidade docente

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Atualizar a grade de disponibilidade de um professor para lecionar.

**Pré-condições:**
- DAPE autenticado.
- O professor-alvo tem função "Professor" em pelo menos um campus (RN-45).

**Fluxo principal (web):**
1. O DAPE abre o modal de edição de disponibilidade no perfil do professor ou na tela de usuários.
2. O DAPE ajusta a grade de disponibilidade (dia × turno) no modal.
3. O DAPE clica em "Salvar".
4. O sistema persiste a nova disponibilidade do professor.

**Fluxos alternativos:**
- A1 — Professor com múltiplos campi (RN-46): o DAPE seleciona o campus no modal para editar a disponibilidade específica de cada campus.

**Pós-condições:**
- A grade de disponibilidade do professor está atualizada.
- A disponibilidade atualizada será usada como restrição na geração e edição de horários.

**Regras de negócio:** RN-45, RN-46, RN-47
**Features:** F-016
**Fluxos relacionados:** F-12

---

## Gestão de Horário DAPE

---

### UC-013 — Visualizar horários globais

**Ator primário:** DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Consultar o horário de qualquer professor ou turma do campus.

**Pré-condições:**
- DAPE autenticado (UC-001).
- Horários publicados existem para o campus ativo.

**Fluxo principal:**
1. O DAPE acessa via Início (botão "Visualizar Horário") ou pela navegação.
2. O sistema exibe a visualização de horário por professor com toggle (Professor | Turma | Mesclado).
3. O DAPE busca um professor pelo nome.
4. O sistema filtra e exibe os cards de professor.
5. O DAPE clica no card do professor desejado.
6. O sistema exibe o horário semanal completo do professor selecionado.

**Fluxos alternativos:**
- A1 — Visualizar por Turma: o DAPE clica na aba "Turma", aplica filtros (Modalidade, Curso) e seleciona uma turma.
- A2 — Visualização Mesclada: o DAPE clica em "Mesclado", seleciona múltiplos professores e/ou turmas no painel lateral; o sistema sobrepõe os horários na grade.
- A3 — Exportar horário: o DAPE clica no botão de download no cabeçalho (RN-17); o sistema exporta o horário.
- A4 — Ir para edição: o DAPE clica em "Editar" no cabeçalho e continua em UC-014.

**Pós-condições:**
- O DAPE visualizou o horário do professor/turma/mesclado desejado.
- Nenhum dado foi alterado (modo visualização).

**Regras de negócio:** RN-01, RN-17
**Features:** F-010, F-011, F-014
**Fluxos relacionados:** F-13

---

### UC-014 — Editar horário de turma ou professor

**Ator primário:** DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Modificar a grade horária semanal de uma turma ou professor.

**Pré-condições:**
- DAPE visualizando o horário de uma turma ou professor (UC-013).
- Intervalos de aula configurados (UC-017).

**Fluxo principal:**
1. O DAPE clica no botão "Editar" no cabeçalho da tela de visualização.
2. O sistema alterna para o modo edição. O cabeçalho indica o contexto: "Editar agenda" (professor) ou "Editar eventos" (turma) (RN-12).
3. O DAPE clica em uma célula da grade horária.
4. O sistema exibe o popover de edição de horário (RN-14).
5. O DAPE seleciona a disciplina e/ou professor para a célula.
6. O sistema atualiza a célula na grade.
7. O DAPE repete os passos 3 a 6 conforme necessário.
8. O DAPE clica em "Salvar" no cabeçalho.
9. O sistema exibe o modal de confirmação de alterações (RN-15).
10. O DAPE seleciona o escopo: "permanente" ou "temporário".
11. O DAPE confirma.
12. O sistema persiste as alterações conforme o escopo: ambas as opções afetam apenas a semana em edição (RN-09). Para alterações globais permanentes, usar o CRUD da entidade (RN-10).

**Fluxos alternativos:**
- A1 — Remover aula existente: o DAPE seleciona "Remover" no popover; o sistema limpa a célula.
- A2 — Mover aula entre células: o DAPE reclica a aula para outra célula.
- A3 — Cancelar edição: o DAPE clica em "Cancelar"; o sistema descarta as alterações e retorna ao modo visualização.
- A4 — Gerenciar eventos durante edição: continua em UC-015.

**Pós-condições:**
- A grade horária da semana está atualizada conforme edições.
- As alterações estão persistidas no escopo selecionado.
- O modo voltou para visualização.

**Regras de negócio:** RN-09, RN-10, RN-11, RN-12, RN-13, RN-14, RN-15
**Features:** F-012
**Fluxos relacionados:** F-14

---

### UC-015 — Gerenciar eventos na edição de horário

**Ator primário:** DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Adicionar ou editar eventos de um professor ou turma durante a edição de horário semanal.

**Pré-condições:**
- DAPE está no modo edição de horário (UC-014).

**Fluxo principal:**
1. O DAPE clica no botão "Editar agenda" (professor) ou "Editar eventos" (turma) no cabeçalho.
2. O sistema exibe a agenda semanal do professor ou da turma com os eventos da semana em edição.
3. O DAPE clica no botão "+" para cadastrar novo evento.
4. O sistema exibe o modal de cadastro de evento.
5. O DAPE preenche: nome, tipo (atividade/indisponibilidade), cor, datas, horários (RN-21, RN-23, RN-27, RN-28).
6. O DAPE clica em "Cadastrar".
7. O sistema cria o evento vinculado a esta turma/professor e à semana em edição (RN-11).

**Fluxos alternativos:**
- A1 — Editar evento existente: o DAPE clica no ícone de edição de um evento (RN-13); o sistema exibe o modal de edição; o DAPE altera os dados e salva.
- A2 — Evento global detectado (RN-22): o DAPE tenta editar um evento não exclusivo; o sistema detecta e redireciona para o modal de edição na gestão de eventos do calendário.
- A3 — "Dura todo o dia" (RN-23): o DAPE marca o checkbox; os campos de horário de início e fim desaparecem.

**Pós-condições:**
- Evento cadastrado/editado vinculado à semana em edição.
- Eventos criados aqui são exclusivos desta turma/professor (RN-11).
- Se evento global, o DAPE foi redirecionado (RN-22).

**Regras de negócio:** RN-09, RN-11, RN-13, RN-21, RN-22, RN-23, RN-27, RN-28
**Features:** F-028, F-029, F-030
**Fluxos relacionados:** F-14

---

## Gestão de Usuários

---

### UC-016 — Gerar horário automaticamente

**Ator primário:** DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Gerar automaticamente uma grade de horários otimizada.

**Pré-condições:**
- DAPE autenticado (UC-001).
- Intervalos de aula configurados (UC-017).
- Turmas, professores, disciplinas e disponibilidades cadastrados.
- Disciplinas vinculadas a períodos dos cursos (UC-024).

**Fluxo principal:**
1. O DAPE acessa via Início (botão "Gerar Horário").
2. O sistema apresenta a opção de tipo de geração (RN-16).
3. O DAPE seleciona "Permanente" (substitui o horário existente).
4. O sistema exibe o modal de geração permanente.
5. O DAPE configura os parâmetros e clica em "Gerar".
6. O sistema exibe o modal de progresso (loading).
7. O sistema conclui a geração.
8. O sistema exibe o modal de confirmação de sucesso.
9. O DAPE confirma a aceitação do horário gerado.

**Fluxos alternativos:**
- A1 — Geração temporária (preview): o DAPE seleciona "Temporário"; o resultado pode ser aceito ou descartado.
- A2 — Erro na geração: o sistema exibe mensagem com detalhes do conflito; o DAPE ajusta as restrições e tenta novamente.
- A3 — Rejeitar e regenerar: o DAPE rejeita o resultado, ajusta parâmetros e repete o fluxo.

**Pós-condições:**
- (Permanente) O horário anterior foi substituído pelo gerado.
- (Temporário) O horário gerado está disponível para preview sem substituir o existente.
- Os horários respeitam: disponibilidades (F-016), intervalos (F-015), vínculos turma-disciplina-professor.

**Regras de negócio:** RN-16
**Features:** F-013
**Fluxos relacionados:** F-15

---

### UC-017 — Configurar intervalos de aula

**Ator primário:** DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Definir horários de início e fim de cada aula por turno.

**Pré-condições:**
- DAPE autenticado (UC-001).

**Fluxo principal:**
1. O DAPE acessa via sidebar → Gestão → Intervalos.
2. O sistema exibe a tela de intervalos de aula.
3. (Se necessário) O DAPE seleciona o campus no ComboBox.
4. (Se necessário) O DAPE seleciona o fuso horário no ComboBox.
5. O sistema exibe três colunas (Matutino, Vespertino, Noturno) com a lista de intervalos por turno.
6. O DAPE clica no ícone de edição de um intervalo.
7. O DAPE ajusta horário de início e/ou fim.
8. O sistema persiste a configuração.
9. O DAPE repete os passos 6 a 8 conforme necessário.

**Fluxos alternativos:**
- A1 — Trocar campus: o DAPE seleciona outro campus; o sistema carrega os intervalos do novo campus.

**Pós-condições:**
- Os intervalos de aula estão configurados para o campus.
- A estrutura temporal está definida para geração e edição de horários.

**Regras de negócio:** Nenhuma específica — configuração base.
**Features:** F-015
**Fluxos relacionados:** F-16

---

### UC-018 — Cadastrar turma

**Ator primário:** DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Registrar uma nova turma no sistema.

**Pré-condições:**
- DAPE autenticado (UC-001).
- Curso ao qual a turma pertence já cadastrado (UC-024).

**Fluxo principal:**
1. O DAPE acessa via sidebar → Gestão → Turmas.
2. O sistema exibe a listagem de turmas.
3. O DAPE clica no botão "+".
4. O sistema exibe o modal de nova turma.
5. O DAPE preenche: nome, curso vinculado, modalidade.
6. O DAPE clica em "Salvar".
7. O sistema valida e persiste a nova turma.
8. O sistema fecha o modal e exibe a turma na listagem.

**Fluxos alternativos:**
- A1 — Dados incompletos/inválidos: o sistema exibe mensagens de validação; o DAPE corrige e tenta novamente.

**Pós-condições:**
- A nova turma está cadastrada e visível na listagem.
- A turma pode receber alocação de horário (UC-014).
- A turma está disponível para seleção por alunos (UC-006).

**Regras de negócio:** Nenhuma específica.
**Features:** F-018
**Fluxos relacionados:** F-17

---

## Gestão de Turmas e Eventos

---

### UC-019 — Editar turma

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Alterar dados de uma turma existente.

**Pré-condições:**
- Turma cadastrada (UC-018).

**Fluxo principal:**
1. Na listagem de turmas, o DAPE clica no ícone de edição do card da turma.
2. O sistema exibe o modal de edição de turma.
3. O DAPE altera os dados desejados.
4. O DAPE clica em "Salvar".
5. O sistema persiste as alterações.

**Fluxos alternativos:**
- A1 — Cancelar: o DAPE clica em "Cancelar"; o modal fecha sem salvar.

**Pós-condições:**
- Os dados da turma estão atualizados.

**Regras de negócio:** Nenhuma específica.
**Features:** F-018
**Fluxos relacionados:** F-17

---

### UC-020 — Gerenciar eventos de turma

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Visualizar, cadastrar e editar eventos exclusivos de uma turma.

**Pré-condições:**
- Turma cadastrada (UC-018).

**Fluxo principal:**
1. Na listagem de turmas, o DAPE clica no botão de eventos da turma.
2. O sistema exibe o modal de eventos da turma com lista de eventos.
3. O DAPE clica no botão "+" para cadastrar novo evento.
4. O sistema exibe o modal de cadastro de evento da turma.
5. O DAPE preenche: nome, tipo, cor, datas, horários (RN-19).
6. O DAPE clica em "Cadastrar".
7. O sistema cria o evento vinculado exclusivamente a esta turma.

**Fluxos alternativos:**
- A1 — Editar evento existente: o DAPE clica no ícone de edição do evento; o sistema exibe o modal de edição; o DAPE altera e salva.
- A2 — Evento global detectado (RN-22): o DAPE tenta editar um evento não exclusivo desta turma; o sistema redireciona para a gestão de eventos.

**Pós-condições:**
- Evento cadastrado/editado vinculado à turma.
- Eventos exclusivos da turma permanecem no modal local (RN-19).
- Eventos globais são gerenciados na gestão de eventos (RN-22).

**Regras de negócio:** RN-19, RN-22, RN-23, RN-27, RN-28
**Features:** F-029, F-030
**Fluxos relacionados:** F-17

---

### UC-021 — Cadastrar usuário

**Ator primário:** DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Registrar um novo servidor (professor ou DAPE) no sistema.

**Pré-condições:**
- DAPE autenticado (UC-001).

**Fluxo principal:**
1. O DAPE acessa via sidebar → Gestão → Usuários.
2. O sistema exibe a tela de usuários.
3. O DAPE clica no botão "+".
4. O sistema exibe o modal de novo usuário.
5. O DAPE preenche: dados pessoais, função, vínculos a campus.
6. Se a função "Professor" estiver selecionada em pelo menos um campus: o sistema exibe a seção de disponibilidade (RN-45).
7. Se professor em mais de um campus: o sistema exibe o carrossel de campus para configurar disponibilidade por campus (RN-46).
8. O DAPE preenche a disponibilidade (se aplicável).
9. O DAPE clica em "Salvar".
10. O sistema persiste o novo usuário.

**Fluxos alternativos:**
- A1 — Função não-professor: a seção de disponibilidade não aparece.
- A2 — Professor em apenas um campus: carrossel não aparece; disponibilidade única.

**Pós-condições:**
- Novo usuário cadastrado com papel(is) e campus vinculado(s).
- Se professor: disponibilidade registrada por campus.
- O usuário pode autenticar no sistema (UC-001).

**Regras de negócio:** RN-04, RN-45, RN-46, RN-47
**Features:** F-017
**Fluxos relacionados:** F-18

---

### UC-022 — Editar usuário

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Alterar dados de um servidor existente.

**Pré-condições:**
- Usuário cadastrado (UC-021).

**Fluxo principal:**
1. Na tela de usuários, o DAPE clica no ícone de edição do card.
2. O sistema exibe o modal de edição de usuário.
3. O DAPE altera os campos desejados.
4. Se a função "Professor" for ativada/desativada: a seção de disponibilidade aparece/desaparece (RN-45).
5. O DAPE salva.

**Fluxos alternativos:**
- A1 — Cancelar: o DAPE fecha o modal sem salvar.

**Pós-condições:**
- Dados do usuário atualizados.
- Se a função foi alterada, as permissões são ajustadas na próxima sessão.

**Regras de negócio:** RN-04, RN-45, RN-46, RN-47
**Features:** F-017
**Fluxos relacionados:** F-18

---

### UC-023 — Gerenciar agenda do professor

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Consultar e editar eventos da agenda de um professor.

**Pré-condições:**
- Professor cadastrado com função "Professor" (UC-021).

**Fluxo principal:**
1. Na tela de usuários, o DAPE clica no botão de agenda do card do professor.
2. O sistema exibe o modal de agenda do professor com lista de eventos.
3. O DAPE consulta atividades e indisponibilidades (RN-21).
4. O DAPE clica no botão "+" para cadastrar novo evento.
5. O sistema exibe o modal de cadastro de evento do professor.
6. O DAPE preenche: nome, tipo (atividade/indisponibilidade), cor, datas, horários (RN-20, RN-21, RN-23).
7. O DAPE salva.

**Fluxos alternativos:**
- A1 — Editar evento existente: o DAPE clica no ícone de edição; o sistema exibe o modal de edição; o DAPE altera e salva.
- A2 — Evento global (RN-22): o DAPE tenta editar um evento não exclusivo; o sistema redireciona para a gestão de eventos (RN-22, RN-26).

**Pós-condições:**
- Agenda do professor atualizada.
- Indisponibilidades afetam as restrições de geração de horário (F-013).

**Regras de negócio:** RN-20, RN-21, RN-22, RN-23, RN-26, RN-27, RN-28
**Features:** F-028, F-030
**Fluxos relacionados:** F-18

---

## Gestão Acadêmica

---

### UC-024 — Cadastrar curso

**Ator primário:** DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Registrar um novo curso com disciplinas por período.

**Pré-condições:**
- DAPE autenticado (UC-001).
- Formação cadastrada (UC-026).
- Disciplinas cadastradas (UC-028).

**Fluxo principal:**
1. O DAPE acessa via sidebar → Ensino → Cursos.
2. O sistema exibe a listagem de cursos.
3. O DAPE clica no botão "+".
4. O sistema exibe o modal de cadastro de curso (passo 1 — dados básicos).
5. O DAPE preenche dados básicos (nome, formação vinculada).
6. O DAPE clica em "Avançar".
7. O sistema exibe o modal de seleção de disciplinas por período (passo 2).
8. O DAPE seleciona disciplinas para cada período na grade (RN-43).
9. O DAPE clica em "Salvar".
10. O sistema persiste o curso com vínculos disciplina-período.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.
- A2 — Voltar ao passo 1: o DAPE corrige os dados básicos.

**Pós-condições:**
- Curso cadastrado com disciplinas vinculadas a períodos.
- Curso disponível para vinculação de turmas (UC-018).
- Disciplinas do curso disponíveis para diários (UC-030).

**Regras de negócio:** RN-42, RN-43
**Features:** F-019, F-023
**Fluxos relacionados:** F-19

---

### UC-025 — Editar curso

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Alterar dados ou disciplinas de um curso existente.

**Pré-condições:**
- Curso cadastrado (UC-024).

**Fluxo principal:**
1. Na tela de cursos, o DAPE clica no ícone de edição do card.
2. O sistema exibe o modal de curso em modo edição.
3. O DAPE altera dados e/ou disciplinas por período.
4. O DAPE salva.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Dados do curso atualizados.

**Regras de negócio:** RN-42, RN-43
**Features:** F-019, F-023
**Fluxos relacionados:** F-19

---

### UC-026 — Cadastrar formação

**Ator primário:** DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Registrar um novo tipo de formação com etapas por período.

**Pré-condições:**
- DAPE autenticado (UC-001).

**Fluxo principal:**
1. O DAPE acessa a tela de formações.
2. O DAPE clica no botão "+".
3. O sistema exibe o modal de nova formação (passo 1).
4. O DAPE preenche: nome, níveis de formação (multi-select) (RN-41), duração dos períodos (semestral, anual etc.) (RN-38).
5. O DAPE clica em "Avançar".
6. O sistema exibe o modal de etapas da formação (passo 2).
7. O DAPE define as etapas de cada período (ex: 1º bimestre, recuperação, exame) (RN-39).
8. O DAPE clica em "Salvar".
9. O sistema persiste a formação com etapas.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.
- A2 — Voltar ao passo 1: o DAPE corrige os dados básicos.

**Pós-condições:**
- Formação cadastrada com etapas definidas.
- Formação disponível para vinculação a cursos (UC-024).
- Etapas disponíveis para instanciação em calendários (UC-032).
- Alterações futuras nas etapas NÃO afetam calendários já criados (RN-40).

**Regras de negócio:** RN-38, RN-39, RN-40, RN-41, RN-44
**Features:** F-020, F-021
**Fluxos relacionados:** F-20

---

### UC-027 — Editar formação e etapas

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Alterar dados de formação ou redefinir etapas dos períodos.

**Pré-condições:**
- Formação cadastrada (UC-026).

**Fluxo principal:**
1. Na tela de formações, o DAPE clica no ícone de edição do card.
2. O sistema exibe o modal de formação em modo edição.
3. O DAPE altera dados básicos (nome, níveis, duração).
4. O DAPE avança para o modal de etapas em modo edição.
5. O DAPE adiciona, remove ou renomeia etapas.
6. O DAPE salva.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Formação e/ou etapas atualizadas.
- Edições em duração de período e etapas têm efeito apenas nos calendários criados APÓS a alteração (RN-40).
- Calendários existentes permanecem inalterados (RN-40).

**Regras de negócio:** RN-38, RN-39, RN-40, RN-41, RN-44
**Features:** F-020, F-021
**Fluxos relacionados:** F-20

---

### UC-028 — Cadastrar disciplina

**Ator primário:** DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Registrar uma nova disciplina no catálogo acadêmico.

**Pré-condições:**
- DAPE autenticado (UC-001).

**Fluxo principal:**
1. O DAPE acessa via sidebar → Ensino → Disciplinas.
2. O sistema exibe a listagem de disciplinas.
3. O DAPE clica no botão "+".
4. O sistema exibe o modal de nova disciplina.
5. O DAPE preenche os dados da disciplina.
6. O DAPE salva.
7. O sistema persiste a disciplina.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Disciplina cadastrada no catálogo.
- Disponível para vinculação a cursos (UC-024) e alocação em horários (UC-014).

**Regras de negócio:** Nenhuma específica.
**Features:** F-022
**Fluxos relacionados:** F-21

---

### UC-029 — Editar disciplina

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Alterar dados de uma disciplina existente.

**Pré-condições:**
- Disciplina cadastrada (UC-028).

**Fluxo principal:**
1. Na tela de disciplinas, o DAPE clica no ícone de edição.
2. O sistema exibe o modal de edição de disciplina.
3. O DAPE altera os dados e salva.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Dados da disciplina atualizados.

**Regras de negócio:** Nenhuma específica.
**Features:** F-022
**Fluxos relacionados:** F-21

---

### UC-030 — Cadastrar diário de classe

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Criar um novo diário de classe para uma turma e disciplina.

**Pré-condições:**
- Turma cadastrada (UC-018).
- Curso da turma com disciplinas vinculadas (UC-024).

**Fluxo principal:**
1. O DAPE acessa via sidebar → Gestão → Diários.
2. O sistema exibe a listagem de diários.
3. O DAPE clica no botão "+".
4. O sistema exibe o modal de diário (passo 1 — seleção de turma e disciplina).
5. O DAPE seleciona a turma.
6. O DAPE seleciona a disciplina (lista filtrada pelo currículo do curso da turma) (RN-51).
7. O DAPE clica em "Avançar".
8. O sistema exibe o modal de diário (passo 2 — dados do diário).
9. O DAPE preenche os detalhes do diário.
10. O DAPE salva.
11. O sistema persiste o diário vinculado à turma e à disciplina.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.
- A2 — Voltar ao passo 1: o DAPE corrige turma/disciplina.

**Pós-condições:**
- Diário de classe cadastrado.
- A turma está permanentemente vinculada (não editável) (RN-50).
- O diário aparece na listagem organizado por disciplina.

**Regras de negócio:** RN-50, RN-51, RN-52
**Features:** F-033
**Fluxos relacionados:** F-22

---

### UC-031 — Editar diário de classe

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Alterar dados de um diário de classe existente.

**Pré-condições:**
- Diário cadastrado (UC-030).

**Fluxo principal:**
1. Na tela de diários, o DAPE clica no ícone de edição do card.
2. O sistema exibe o modal de diário em modo edição.
3. O campo de turma está desabilitado/somente leitura (RN-50).
4. O DAPE altera os dados permitidos.
5. O DAPE salva.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.
- A2 — Necessidade de mudar turma: o DAPE deve criar um novo diário (UC-030) e, opcionalmente, excluir o atual.

**Pós-condições:**
- Dados do diário atualizados (exceto turma, que é imutável).

**Regras de negócio:** RN-50, RN-52
**Features:** F-033
**Fluxos relacionados:** F-22

---

## Calendário Acadêmico

---

### UC-032 — Cadastrar calendário acadêmico

**Ator primário:** DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Criar um novo calendário com definição de datas das etapas.

**Pré-condições:**
- Formação com etapas definidas (UC-026).

**Fluxo principal:**
1. O DAPE acessa a gestão de calendários via calendário (botão de engrenagem).
2. O DAPE clica no botão "+".
3. O sistema exibe o modal de calendário (passo 1 — dados básicos).
4. O DAPE preenche: nome, formação, ano letivo, modalidade.
5. O DAPE avança.
6. O sistema exibe o modal de calendário (passo 2 — datas das etapas).
7. O sistema lista os períodos com as etapas herdadas da formação selecionada (RN-33, RN-39).
8. O DAPE define data de início e fim para cada etapa de cada período (RN-33).
9. O DAPE salva.
10. O sistema persiste o calendário com datas.

**Fluxos alternativos:**
- A1 — Período extrapola o ano letivo (RN-34): o DAPE define data fim posterior ao ano letivo; o sistema aceita sem restrição (cenário de paralisação institucional).
- A2 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Calendário acadêmico criado com períodos e etapas datados.
- Calendário visível para todos os atores (UC-009).
- Filtros de calendário incluem o novo calendário.

**Regras de negócio:** RN-31, RN-33, RN-34, RN-39
**Features:** F-024
**Fluxos relacionados:** F-23

---

### UC-033 — Editar calendário acadêmico

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Alterar dados ou datas de etapas de um calendário existente.

**Pré-condições:**
- Calendário cadastrado e ativo (UC-032).

**Fluxo principal:**
1. Na gestão de calendários, o DAPE clica no ícone de edição.
2. O sistema exibe os modais de calendário em modo edição.
3. O DAPE altera dados básicos e/ou datas de etapas.
4. O DAPE salva.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Calendário atualizado. Datas de etapas podem ter sido alteradas.

**Regras de negócio:** RN-31, RN-33, RN-34
**Features:** F-024
**Fluxos relacionados:** F-23

---

### UC-034 — Desativar calendário acadêmico

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Desativar um calendário que não está mais em uso.

**Pré-condições:**
- Calendário cadastrado (UC-032).

**Fluxo principal:**
1. Na gestão de calendários, o DAPE clica no ícone de desativar do card do calendário.
2. O sistema solicita confirmação.
3. O DAPE confirma.
4. O sistema marca o calendário como inativo (RN-31).

**Fluxos alternativos:**
- A1 — Cancelar: o DAPE não confirma; nenhuma ação é executada.

**Pós-condições:**
- Calendário desativado (não excluído) (RN-31).
- O calendário não aparece mais nos filtros ativos.
- Os dados históricos são preservados.

**Regras de negócio:** RN-31
**Features:** F-024
**Fluxos relacionados:** F-23

---

### UC-035 — Cadastrar evento global

**Ator primário:** DAPE
**Prioridade:** Alta
**Sistema:** SISGHA-Web

**Objetivo:** Criar um evento acadêmico compartilhado entre turmas e professores.

**Pré-condições:**
- Formações, turmas e professores cadastrados.

**Fluxo principal:**
1. O DAPE acessa a gestão de eventos via calendário.
2. O DAPE clica no botão "+".
3. O sistema exibe o modal de cadastro de evento.
4. O DAPE preenche: nome, tipo, cor (RN-27).
5. O DAPE define datas (início/fim) e horários (RN-28). Opcional: marca "Dura todo o dia" para ocultar os campos de horário (RN-23).
6. O DAPE seleciona as formações participantes.
7. Para cada formação: o sistema gera um accordion com turmas e professores vinculados (RN-24).
8. O DAPE seleciona turmas e professores em cada accordion. Opcional: marca "Todos participam" para desabilitar a seleção individual (RN-25).
9. O DAPE clica em "Cadastrar".
10. O sistema persiste o evento com vínculos.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Evento global cadastrado e visível em todos os calendários.
- Turmas e professores vinculados recebem o evento.
- Evento é editável apenas na gestão de eventos (RN-22).

**Regras de negócio:** RN-22, RN-23, RN-24, RN-25, RN-27, RN-28, RN-29
**Features:** F-027
**Fluxos relacionados:** F-24

---

### UC-036 — Editar evento global

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Alterar dados ou participantes de um evento global.

**Pré-condições:**
- Evento global cadastrado (UC-035).

**Fluxo principal:**
1. Na gestão de eventos, o DAPE clica no ícone de edição do card.
2. O sistema exibe o modal de evento em modo edição.
3. O DAPE altera os campos desejados.
4. O DAPE salva.

**Fluxos alternativos:**
- A1 — Evento acessado via turma/professor (RN-22, RN-26): o DAPE tenta editar a partir de turmas ou usuários; o sistema redireciona para o modal na gestão de eventos, com aviso informativo.
- A2 — Evento de agenda do professor (RN-26): o DAPE tenta editar evento de atividade/indisponibilidade; o sistema abre o modal de edição da agenda do professor com aviso de contexto.

**Pós-condições:**
- Evento global atualizado para todos os participantes.

**Regras de negócio:** RN-22, RN-23, RN-24, RN-25, RN-26, RN-27, RN-28
**Features:** F-027, F-030
**Fluxos relacionados:** F-24

---

### UC-037 — Cadastrar dia não letivo

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Registrar dia(s) sem atividade letiva no calendário.

**Pré-condições:**
- Calendário acadêmico ativo (UC-032).

**Fluxo principal:**
1. O DAPE acessa a tela de dias não letivos via calendário.
2. O DAPE seleciona o ano letivo no ComboBox.
3. O DAPE clica no botão "+".
4. O sistema exibe o modal de cadastro de dia não letivo.
5. O DAPE preenche: nome/motivo, data(s).
6. O DAPE salva.
7. O sistema persiste o dia não letivo.

**Fluxos alternativos:**
- A1 — Visualizar consolidado anual: o DAPE alterna para a visão anual (RN-36) e consulta os dias agrupados por mês; pode cadastrar a partir desta visão com o mesmo modal.
- A2 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Dia não letivo registrado e visível no calendário.
- A data aparece marcada no calendário mensal de todos os atores.

**Regras de negócio:** RN-36
**Features:** F-031
**Fluxos relacionados:** F-25

---

## Relatórios

---

### UC-038 — Gerar relatório de aulas ministradas

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Gerar e visualizar relatório de aulas por professor e semestre.

**Pré-condições:**
- Horários publicados com aulas registradas.
- Professores e semestres cadastrados.

**Fluxo principal:**
1. O DAPE acessa via Início (botão "Relatórios").
2. O sistema exibe a tela de relatório de aulas ministradas.
3. O DAPE seleciona o professor (obrigatório) no ComboBox.
4. O DAPE seleciona o semestre (obrigatório) no ComboBox.
5. (Opcional) O DAPE preenche até quatro filtros opcionais.
6. O DAPE clica em "Visualizar".
7. O sistema gera o relatório e exibe o preview em modal.
8. O DAPE consulta o conteúdo do relatório no modal.

**Fluxos alternativos:**
- A1 — Exportar diretamente sem preview: continua em UC-039.

**Pós-condições:**
- Relatório gerado e exibido em preview.
- O DAPE pode exportar em PDF (UC-039) ou fechar e ajustar filtros.

**Regras de negócio:** Nenhuma específica.
**Features:** F-034
**Fluxos relacionados:** F-26

---

### UC-039 — Exportar relatório em PDF

**Ator primário:** DAPE
**Prioridade:** Média
**Sistema:** SISGHA-Web

**Objetivo:** Baixar o relatório de aulas ministradas como arquivo PDF.

**Pré-condições:**
- Filtros preenchidos na tela de relatório (UC-038).

**Fluxo principal:**
1. O DAPE clica em "PDF" (botão com ícone PDF).
2. O sistema gera o arquivo PDF com os dados filtrados.
3. O sistema inicia o download do arquivo.

**Fluxos alternativos:**
- A1 — Exportar após preview: dentro do modal de preview, o DAPE clica no botão de download; continua no passo 2.

**Pós-condições:**
- Arquivo PDF baixado no dispositivo do DAPE.

**Regras de negócio:** Nenhuma específica.
**Features:** F-035
**Fluxos relacionados:** F-26

---

## Notificações

---

### UC-040 — Consultar notificações

**Ator primário:** Aluno, Professor
**Prioridade:** Baixa
**Sistema:** SISGHA-Web, SISGHA-Mobile

**Objetivo:** Verificar avisos e notificações do sistema.

**Pré-condições:**
- Ator com acesso ao sistema (UC-001, UC-002 ou UC-003).

**Fluxo principal (mobile):**
1. O ator acessa via ícone de sino no cabeçalho.
2. O sistema exibe a tela de notificações (aluno ou professor).
3. O ator visualiza a lista de notificações.

**Fluxo principal (web):**
1. O ator clica no ícone de sino no cabeçalho (RN-63).
2. O sistema exibe o dropdown com notificações recentes.

**Fluxos alternativos:**
- A1 — Sem notificações: o ícone de sino não exibe badge (RN-63); a lista aparece vazia ao abrir.

**Pós-condições:**
- Notificações consultadas.
- Badge atualizado conforme leitura.

**Regras de negócio:** RN-63
**Features:** F-037
**Fluxos relacionados:** F-31

---

## SISGEA — Gestão de Ambientes

---

### UC-041 — Cadastrar bloco

**Ator primário:** ADM_EA
**Prioridade:** Alta
**Sistema:** SISGEA-Web

**Objetivo:** Registrar uma nova edificação do campus no sistema de ambientes.

**Pré-condições:**
- ADM_EA autenticado no sistema SISGEA.

**Fluxo principal:**
1. O ADM_EA acessa via sidebar → Blocos.
2. O sistema exibe a listagem de blocos.
3. O ADM_EA clica no botão "+".
4. O sistema exibe o modal de cadastro de bloco.
5. O ADM_EA preenche os dados e salva.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Bloco cadastrado e disponível para receber ambientes (UC-043).

**Regras de negócio:** Nenhuma específica.
**Features:** F-043
**Fluxos relacionados:** F-30

---

### UC-042 — Editar bloco

**Ator primário:** ADM_EA
**Prioridade:** Média
**Sistema:** SISGEA-Web

**Objetivo:** Alterar dados de uma edificação cadastrada.

**Pré-condições:**
- Bloco cadastrado (UC-041).

**Fluxo principal:**
1. Na listagem de blocos, o ADM_EA clica no ícone de edição do card.
2. O sistema exibe o modal de edição de bloco.
3. O ADM_EA altera os dados e salva.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Dados do bloco atualizados.

**Regras de negócio:** Nenhuma específica.
**Features:** F-043
**Fluxos relacionados:** F-30

---

### UC-043 — Cadastrar ambiente

**Ator primário:** ADM_EA
**Prioridade:** Alta
**Sistema:** SISGEA-Web

**Objetivo:** Registrar um novo espaço reservável no campus.

**Pré-condições:**
- ADM_EA autenticado.
- Bloco já cadastrado (UC-041).

**Fluxo principal:**
1. O ADM_EA acessa via sidebar → Ambientes.
2. O sistema exibe a listagem de ambientes.
3. O ADM_EA clica no botão "+".
4. O sistema exibe o modal de cadastro de ambiente.
5. O ADM_EA preenche dados (nome, bloco vinculado etc.) e salva.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Ambiente cadastrado e disponível para reserva (UC-045).

**Regras de negócio:** Nenhuma específica.
**Features:** F-044
**Fluxos relacionados:** F-29

---

### UC-044 — Editar ambiente

**Ator primário:** ADM_EA
**Prioridade:** Média
**Sistema:** SISGEA-Web

**Objetivo:** Alterar dados de um ambiente cadastrado.

**Pré-condições:**
- Ambiente cadastrado (UC-043).

**Fluxo principal:**
1. Na listagem de ambientes, o ADM_EA clica no ícone de edição.
2. O sistema exibe o modal de edição de ambiente.
3. O ADM_EA altera os dados e salva.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Dados do ambiente atualizados.

**Regras de negócio:** Nenhuma específica.
**Features:** F-044
**Fluxos relacionados:** F-29

---

### UC-045 — Criar reserva de ambiente

**Ator primário:** ADM_EA
**Prioridade:** Alta
**Sistema:** SISGEA-Web

**Objetivo:** Alocar um ambiente para uso em dia e horário específicos.

**Pré-condições:**
- ADM_EA autenticado.
- Ambientes cadastrados (UC-043).

**Fluxo principal:**
1. Na tela inicial de reservas, o ADM_EA seleciona um dia da semana via abas.
2. O ADM_EA visualiza as reservas existentes na grade.
3. O ADM_EA clica em um horário vazio na grade.
4. O sistema exibe o modal de reserva de ambiente.
5. O modal exibe a lista de locais disponíveis (RN-55).
6. O ADM_EA seleciona o ambiente desejado.
7. (Opcional) O ADM_EA navega entre dias no modal via setas (RN-54).
8. O ADM_EA confirma a reserva.
9. O sistema persiste a reserva e atualiza a grade.

**Fluxos alternativos:**
- A1 — Buscar antes de reservar: o ADM_EA usa a barra de busca para filtrar a grade; o sistema filtra os ambientes.
- A2 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Reserva criada e visível na grade semanal.
- O ambiente está alocado para o dia/horário selecionado.

**Regras de negócio:** RN-53, RN-54, RN-55
**Features:** F-045
**Fluxos relacionados:** F-28

---

### UC-046 — Editar reserva de ambiente

**Ator primário:** ADM_EA
**Prioridade:** Média
**Sistema:** SISGEA-Web

**Objetivo:** Alterar uma reserva de ambiente existente.

**Pré-condições:**
- Reserva cadastrada (UC-045).

**Fluxo principal:**
1. Na tela inicial de reservas, o ADM_EA clica em uma reserva existente na grade.
2. O sistema exibe o modal de reserva em modo edição.
3. O ADM_EA altera ambiente, dia ou horário.
4. O ADM_EA salva.

**Fluxos alternativos:**
- A1 — Cancelar: fecha o modal sem salvar.

**Pós-condições:**
- Reserva atualizada na grade.

**Regras de negócio:** RN-53, RN-54
**Features:** F-045
**Fluxos relacionados:** F-28

---

## Matriz de Rastreabilidade

| Caso de Uso | Fluxo | Features | Regras-chave |
|---|---|---|---|
| UC-001 | F-01 | F-001, F-003 | RN-04, RN-49, RN-64, RN-65, RN-66 |
| UC-002 | F-02 | F-001 | RN-49 |
| UC-003 | F-01, F-02 | F-002 | RN-02, RN-03 |
| UC-004 | F-01 | F-003 | RN-03, RN-04 |
| UC-005 | Transversal | F-004 | RN-46, RN-47 |
| UC-006 | F-03, F-04 | F-038 | RN-01, RN-58 |
| UC-007 | F-03, F-07 | F-006, F-007, F-009 | RN-01, RN-06, RN-18 |
| UC-008 | F-03 a F-08 | F-006, F-008 | RN-01, RN-06, RN-18 |
| UC-009 | F-05 a F-10 | F-025, F-026 | RN-01, RN-37 |
| UC-010 | F-05, F-09 | F-025, F-026 | RN-01 |
| UC-011 | F-11, F-27 | F-036 | RN-06 |
| UC-012 | F-12 | F-016 | RN-45, RN-46, RN-47 |
| UC-013 | F-13 | F-010, F-011, F-014 | RN-01, RN-17 |
| UC-014 | F-14 | F-012 | RN-09, RN-10, RN-11, RN-12, RN-13, RN-14, RN-15 |
| UC-015 | F-14 | F-028, F-029, F-030 | RN-09, RN-11, RN-13, RN-21, RN-22, RN-23, RN-27, RN-28 |
| UC-016 | F-15 | F-013 | RN-16 |
| UC-017 | F-16 | F-015 | — |
| UC-018 | F-17 | F-018 | — |
| UC-019 | F-17 | F-018 | — |
| UC-020 | F-17 | F-029, F-030 | RN-19, RN-22, RN-23, RN-27, RN-28 |
| UC-021 | F-18 | F-017 | RN-04, RN-45, RN-46, RN-47 |
| UC-022 | F-18 | F-017 | RN-04, RN-45, RN-46, RN-47 |
| UC-023 | F-18 | F-028, F-030 | RN-20, RN-21, RN-22, RN-23, RN-26, RN-27, RN-28 |
| UC-024 | F-19 | F-019, F-023 | RN-42, RN-43 |
| UC-025 | F-19 | F-019, F-023 | RN-42, RN-43 |
| UC-026 | F-20 | F-020, F-021 | RN-38, RN-39, RN-40, RN-41, RN-44 |
| UC-027 | F-20 | F-020, F-021 | RN-38, RN-39, RN-40, RN-41, RN-44 |
| UC-028 | F-21 | F-022 | — |
| UC-029 | F-21 | F-022 | — |
| UC-030 | F-22 | F-033 | RN-50, RN-51, RN-52 |
| UC-031 | F-22 | F-033 | RN-50, RN-52 |
| UC-032 | F-23 | F-024 | RN-31, RN-33, RN-34, RN-39 |
| UC-033 | F-23 | F-024 | RN-31, RN-33, RN-34 |
| UC-034 | F-23 | F-024 | RN-31 |
| UC-035 | F-24 | F-027 | RN-22, RN-23, RN-24, RN-25, RN-27, RN-28, RN-29 |
| UC-036 | F-24 | F-027, F-030 | RN-22, RN-23, RN-24, RN-25, RN-26, RN-27, RN-28 |
| UC-037 | F-25 | F-031 | RN-36 |
| UC-038 | F-26 | F-034 | — |
| UC-039 | F-26 | F-035 | — |
| UC-040 | F-31 | F-037 | RN-63 |
| UC-041 | F-30 | F-043 | — |
| UC-042 | F-30 | F-043 | — |
| UC-043 | F-29 | F-044 | — |
| UC-044 | F-29 | F-044 | — |
| UC-045 | F-28 | F-045 | RN-53, RN-54, RN-55 |
| UC-046 | F-28 | F-045 | RN-53, RN-54 |
