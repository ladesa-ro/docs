---
sidebar_position: 4
title: Protótipo de Interface
---

# Protótipo de Interface

Este documento descreve a interface do ecossistema Ladesa conforme mapeado no protótipo. Inclui o inventário de telas, os mapas de navegação por ator, os mecanismos de navegação, as transições e a matriz de acesso.

---

## Inventário de telas

O protótipo conta com **50 telas** distribuídas entre SISGHA Web, SISGEA Web e SISGHA Mobile.

### SISGHA Web — Módulo Geral

| Tela | Módulo | Ator primário | Acesso |
|---|---|---|---|
| Home (Landing LADESA) | Geral | VIS | R |
| Seleção de Acesso | Geral | PROF/DAPE/ADM_EA | R |
| Login de Servidor | Geral | PROF/DAPE | RW |

### SISGHA Web — Módulo Aluno

| Tela | Módulo | Ator primário | Acesso |
|---|---|---|---|
| Seleção de Horário | Aluno | ALU | RW (filtro de sessão) |
| Horário da Semana (Aluno) | Aluno | ALU | R |
| Horário do Dia (Aluno) | Aluno | ALU | R |
| Calendário Parcial (Aluno) | Aluno | ALU | R |
| Calendário Completo (Aluno) | Aluno | ALU | R |
| Modal de Eventos do Calendário (Aluno) | Aluno | ALU | R |

### SISGHA Web — Módulo Professor

| Tela | Módulo | Ator primário | Acesso |
|---|---|---|---|
| Horário da Semana (Professor) | Professor | PROF | R |
| Horário do Dia (Professor) | Professor | PROF | R |
| Perfil - Professor | Professor | PROF | R |
| Calendário Parcial (Professor) | Professor | PROF | R |
| Calendário Completo (Professor) | Professor | PROF | R |
| Modal de Eventos do Calendário (Professor) | Professor | PROF | R |

### SISGHA Web — Módulo DAPE

| Tela | Módulo | Ator primário | Acesso |
|---|---|---|---|
| Início - Acesso Rápido | DAPE | DAPE | R |
| Visualização de Horário - Por Professor | DAPE | DAPE | R |
| Visualização de Horário - Por Turma | DAPE | DAPE | R |
| Visualização de Horário - Mesclado | DAPE | DAPE | R |
| Horário Selecionado (Modo Visualização) | DAPE | DAPE | R |
| Horário Selecionado (Modo Edição) | DAPE | DAPE | RW |
| Horários de Aula (Intervalos) | DAPE | DAPE | RW |
| Turmas: Listagem | DAPE | DAPE | RW |
| Diários | DAPE | DAPE | RW |
| Usuários | DAPE | DAPE | RW |
| Cursos | DAPE | DAPE | RW |
| Formações | DAPE | DAPE | RW |
| Disciplinas: Listagem | DAPE | DAPE | RW |
| Perfil - DAPE | DAPE | DAPE | RW |
| Calendário Acadêmico - Parcial | DAPE | DAPE | RW |
| Calendário Acadêmico - Completo | DAPE | DAPE | R |
| Calendário Acadêmico - Estado Vazio | DAPE | DAPE | R |
| Relatório de Aulas Ministradas | DAPE | DAPE | RW |
| Dias Não Letivos do Mês | DAPE | DAPE | RW |
| Dias Não Letivos do Ano | DAPE | DAPE | R |
| Gestão de Eventos | DAPE | DAPE | RW |
| Gestão de Calendários Acadêmicos | DAPE | DAPE | RW |

### SISGEA Web

| Tela | Módulo | Ator primário | Acesso |
|---|---|---|---|
| Login (SISGEA) | SISGEA | ADM_EA | RW |
| Home - Reservas | SISGEA | ADM_EA | RW |
| Ambientes | SISGEA | ADM_EA | RW |
| Blocos | SISGEA | ADM_EA | RW |

### SISGHA Mobile

| Tela | Módulo | Ator primário | Acesso |
|---|---|---|---|
| Splash Screen + Loading | Mobile | ALU/PROF | R |
| Login (Mobile) | Mobile | ALU/PROF | RW (PROF), R (ALU) |
| Seleção do Horário (Aluno Mobile) | Mobile — Aluno | ALU | RW (filtro de sessão) |
| Visualização do Horário - Aluno Técnico | Mobile — Aluno | ALU | R |
| Visualização do Horário - Aluno Graduação | Mobile — Aluno | ALU | R |
| Calendário (Aluno Mobile) | Mobile — Aluno | ALU | R |
| Notificações (Aluno Mobile) | Mobile — Aluno | ALU | R |
| Home (Professor Mobile) | Mobile — Professor | PROF | R |
| Calendário (Professor Mobile) | Mobile — Professor | PROF | R |
| Perfil - Disponibilidade (Professor Mobile) | Mobile — Professor | PROF | R |
| Perfil - Ensino (Professor Mobile) | Mobile — Professor | PROF | R |
| Notificações (Professor Mobile) | Mobile — Professor | PROF | R |

**Legenda:** R = Somente leitura | RW = Leitura + Escrita

---

## Contagem de telas por ator

| Ator | Exclusivas | Compartilhadas | Total | Tipo de permissão |
|---|---|---|---|---|
| VIS | 0 | 1 | 1 | R |
| ALU | 11 | 3 | 14 | R (+ RW na seleção de turma, que é filtro de sessão) |
| PROF | 10 | 3 | 13 | R (+ RW no perfil) |
| DAPE | 19 | 3 | 22 | RW na maioria |
| ADM_EA | 4 | 0 | 4 | RW |
| **Total** | **44** | **3 (×multi-ator)** | **50** | |

---

## Mapas de navegação por ator

### Fluxo do Aluno (Web)

```
Home (Landing LADESA)
└── Seleção de Acesso
    └── Login de Servidor
        └── [Botão: Acessar como Aluno]
            │
            └── Seleção de Horário  ←── ENTRY POINT
                │   Filtros: Ano Letivo → Modalidade → Curso → Turma
                │
                └── [Selecionar turma]
                    │
                    ├── Horário da Semana ◄──toggle──► Horário do Dia
                    │   • Selecionar-Semana (navegar semanas)
                    │
                    └── Calendário Parcial ◄──toggle──► Calendário Completo
                        │   • Trocar-Visualizacao-Calendario
                        └── [Clicar evento] → Modal de Eventos
```

### Fluxo do Professor (Web)

```
Login de Servidor
│
└── Professor: ENTRY POINT
    │
    ├── [Sidebar] Início → Horário da Semana
    │   └── toggle ──► Horário do Dia (tabs: Seg–Sáb, cards: Aula 1–3)
    │
    ├── [Sidebar] Calendário
    │   ├── Calendário Parcial (filtros: Ano, Modalidade, Curso)
    │   │   └── toggle ──► Calendário Completo
    │   │       └── [Ver-Eventos] → Modal de Eventos
    │   └── [Clicar evento] → Modal de Eventos
    │
    ├── [Sidebar] Perfil
    │   • Dados pessoais, Campus, Ensino, Disponibilidade
    │   └── [Editar] → Modal: Form-Editar-Usuário
    │
    └── [Sidebar] Sair → Login
```

### Fluxo do DAPE (Web)

```
Login de Servidor
│
└── DAPE: ENTRY POINT
    │
    ├── [Sidebar] Início - Acesso Rápido
    │   ├── [Botão] → Visualização de Horário (Prof / Turma / Mesclado)
    │   │   └── Horário Selecionado (Visualização)
    │   │       └── [Editar] → Horário Selecionado (Edição)
    │   │           ├── Popover de edição (3 variantes)
    │   │           ├── Agenda-Semanal / Eventos da Turma
    │   │           └── [Salvar] → Modal de confirmação (permanente/temporário)
    │   ├── [Botão] → Gerar Horário (Permanente ou Temporário)
    │   ├── [Botão] → Relatório de Aulas Ministradas
    │   └── [Botão] → Diários
    │
    ├── [Sidebar] Calendário Acadêmico
    │   ├── Calendário Parcial → toggle → Calendário Completo
    │   ├── Estado Vazio (nenhum calendário selecionado)
    │   ├── [Botão ⚙️] → Gestão de Calendários
    │   │   └── Form-Calendário-1-1 → Form-Calendário-1-2
    │   ├── [Botão ➕] → Gestão de Eventos
    │   │   └── Form-Evento
    │   └── [Botão] → Dias Não Letivos
    │       ├── Dias Não Letivos do Mês → toggle → Dias Não Letivos do Ano
    │       └── Cadastrar-Nao-Letivo
    │
    ├── [Sidebar] Gestão ▼
    │   ├── Intervalos (campus + fuso + turnos: Mat/Vesp/Not)
    │   ├── Diários → Form-Diario-1 → Form-Diario-2
    │   ├── Turmas → Form-Nova/Editar-Turma + Eventos-Turma
    │   └── Usuários → Form-Novo/Editar-Usuário + Agenda-Professor
    │
    ├── [Sidebar] Ensino ▼
    │   ├── Cursos → Cadastrar-Curso → Form-Selecionar-Disciplinas-Período
    │   │   └── → Formações → Form-Nova-Formação → Form-Etapas-Formação
    │   └── Disciplinas → Form-Nova/Editar-Disciplina
    │
    ├── [Sidebar] Perfil
    │   ├── [Editar] → Form-Editar-Usuário
    │   ├── [Disponibilidade] → Form-Editar-Disponibilidade
    │   └── [Campus] → Form-Alterar-Campus
    │
    └── [Sidebar] Sair → Login
```

### Fluxo do ADM_EA (SISGEA Web)

```
Home (Landing LADESA)
└── Seleção de Acesso → [Card SISGEA]
    └── Login SISGEA
        │
        └── SISGEA: ENTRY POINT
            │
            ├── [Sidebar] Reservas (Home)
            │   • Grade semanal: 6 dias × 4 faixas horárias
            │   └── [Clicar] → Form-Reserva-Ambiente
            │       • Trocar-Dia (navegação interna)
            │       • Lista de ambientes disponíveis
            │
            ├── [Sidebar] Ambientes
            │   └── Form-Cadastrar/Editar-Ambiente
            │
            ├── [Sidebar] Blocos
            │   └── Form-Cadastrar/Editar-Bloco
            │
            └── [Sidebar] Sair → Login
```

### Fluxo do Aluno (Mobile)

```
Splash Screen → Loading → Login
│
└── [Botão: Acessar como Aluno]
    │
    └── Seleção do Horário  ←── ENTRY POINT
        │   Accordion animado: Modalidade → Curso → Turma
        │
        └── Horário (Técnico OU Graduação)
            │   Select-DiaSemana (tabs de dia + lista de aulas)
            │
            ├── [Botão Abrir Calendário] → Calendário (Aluno)
            │   • BuscarCalendario (drawer)
            │   • Etiquetas de eventos
            │   └── [Ver Todos] → Modal de listagem
            │
            ├── [Navbar: 📅] → Calendário
            ├── [Navbar: 🏠] → Horário
            └── [Ícone sino] → Notificações (Aluno)
```

### Fluxo do Professor (Mobile)

```
Splash Screen → Loading → Login
│
└── [Login como servidor]
    │
    └── Home (Professor)  ←── ENTRY POINT
        │   Select-DiaSemana (horário do dia)
        │
        ├── [Navbar: 📅] → Calendário (Professor)
        │   • BuscarCalendario
        │   • Etiquetas de eventos
        │   └── [Ver Todos] → Modal de listagem
        │
        ├── [Navbar: 🏠] → Home
        │
        ├── [Navbar: 👤] → Perfil
        │   ├── [Toggle] Disponibilidade (grade somente leitura por dia/turno)
        │   └── [Toggle] Ensino (carrossel disciplinas/turmas — somente leitura)
        │
        └── [Ícone sino] → Notificações (Professor)
```

---

## Mecanismos de navegação

O ecossistema utiliza cinco mecanismos distintos de navegação primária, cada um associado a um ator ou plataforma.

### Header-Main (Web — Professor e DAPE)

Barra superior presente em todas as telas web dos módulos Professor e DAPE. Contém:

- **Logo SISGHA** → retorna ao início.
- **Seletor de papel** (DAPE ▼ / Professor ▼) → alterna entre as visões do servidor.
- **Troca de Campus** (badge "Ji-Paraná" clicável) → abre modal de seleção de campus.
- **Notificações** (ícone de sino com badge) → abre dropdown de notificações.
- **Alternância de tema** (ícone sol/lua) → alterna entre tema claro e escuro.

### Header-Aluno (Web — Aluno)

Barra superior simplificada para o módulo do Aluno. Não há sidebar. A navegação é contextual — feita pelos controles dentro de cada tela.

### Sidebar DAPE (Web)

Menu lateral esquerdo com dois estados: expandido (251 px, ícones + rótulos) e recolhido (57 px, apenas ícones).

| Item | Destino |
|---|---|
| Início | Acesso Rápido |
| Calendário | Calendário Acadêmico (Parcial/Completo) |
| Gestão ▼ | Accordion: Intervalos, Diários, Turmas, Usuários |
| Ensino ▼ | Accordion: Cursos, Disciplinas |
| Perfil | Perfil DAPE |
| Sair | Logout → Login |

Sub-telas acessíveis via ações contextuais (não na sidebar diretamente): Formações, Horários (visualização/edição), Relatórios, Gestão de Eventos, Gestão de Calendários, Dias Não Letivos.

### Sidebar Professor (Web)

| Item | Destino |
|---|---|
| Início | Horário da Semana |
| Calendário | Calendário Parcial |
| Perfil | Perfil Professor |
| Sair | Logout → Login |

### Sidebar SISGEA (Web)

| Item | Destino |
|---|---|
| Reservas | Home - Reservas |
| Ambientes | Tela de Ambientes |
| Blocos | Tela de Blocos |
| Configurações | (não prototipado) |
| Sair | Logout → Login |

### Navbar-Footer (Mobile)

Barra fixa na parte inferior do app com 3 ícones:

| Posição | Ícone | Destino |
|---|---|---|
| Esquerda | 📅 Calendário | Calendário do ator |
| Centro | Logo SISGHA | Home (horário principal) |
| Direita | 👤 Perfil | Perfil do ator |

---

## Tipos de transição e interação

### Por toggle (alternância bidirecional)

| Toggle | Telas envolvidas |
|---|---|
| Semana ↔ Dia | Horário da Semana ↔ Horário do Dia (Aluno web e Professor web) |
| Parcial ↔ Completo | Calendário Parcial ↔ Calendário Completo (todos os atores) |
| Mensal ↔ Anual | Dias Não Letivos do Mês ↔ Dias Não Letivos do Ano |
| Disponibilidade ↔ Ensino | Perfil: Disponibilidade ↔ Perfil: Ensino (Professor Mobile) |
| Visualização ↔ Edição | Horário Selecionado (Visualização) ↔ Horário Selecionado (Edição) |
| Prof/Turma/Mesclado | Visualização de Horário — tabs de modo (DAPE) |

### Por modal (sobreposição)

Principais modais do sistema:

| Modal | Acionado por |
|---|---|
| Form-Novo/Editar-Usuário | Botão editar no perfil ou na listagem de usuários |
| Form-Nova/Editar-Turma | Botão "+" ou ícone editar na listagem de turmas |
| Form-Nova/Editar-Disciplina | Botão "+" ou ícone editar na listagem |
| Cadastrar-Curso / Form-Selecionar-Disciplinas-Período | Botão "+" em Cursos (fluxo de 2 passos) |
| Form-Nova-Formação / Form-Etapas-Formação | Botão "+" em Formações (2 passos) |
| Form-Calendário-1-1 / Form-Calendário-1-2 | Botão "+" em Gestão de Calendários (2 passos) |
| Form-Evento | Botão "+" em Gestão de Eventos |
| Form-Diario-1 / Form-Diario-2 | Botão "+" em Diários (2 passos) |
| Cadastrar/Editar-Evento-Turma | Ações em Eventos-Turma |
| Cadastrar/Editar-Evento-Professor | Ações em Agenda-Professor |
| Agenda-Professor / Eventos-Turma | Botão de agenda/eventos na listagem |
| Form-Reserva-Ambiente | Clicar em horário na grade de reservas |
| Modal de Eventos do Calendário | Clicar em evento ou botão "Ver Eventos" |
| popover-edicao-horario | Clicar em célula da grade no modo de edição |
| Modal de Alterações (permanente/temporário) | Botão "Salvar" na edição de horário |
| Gerar-Horário-Permanente / Temporário | Botão "Gerar Horário" no Início |
| Form-Alterar-Campus | Botão de alteração de campus no perfil |
| Form-Editar-Disponibilidade | Botão de edição de disponibilidade no perfil |
| Relatorio-Modal | Botão "Visualizar" no Relatório de Aulas |

### Por navegação contextual (redirecionamentos automáticos)

Situações em que o sistema navega automaticamente para outra tela ou modal:

- Tentativa de editar um **evento global** na tela de turma ou professor → sistema redireciona para o modal de edição na Gestão de Eventos.
- Seleção de turma no accordion mobile (Aluno) → redireciona para tela de horário da turma.
- Seleção de professor ou turma na listagem do DAPE → abre Horário Selecionado.
- Login de servidor bem-sucedido → redireciona para tela principal do papel (DAPE → Início; PROF → Horário da Semana).

---

## Estatísticas de ações por tela

O protótipo mapeou **219 ações** distribuídas entre todos os atores e telas.

| Tipo de ação | Descrição | Quantidade |
|---|---|---|
| `navigate` | Navegar para outra tela ou seção | 53 |
| `filter` | Filtrar/buscar dados | 45 |
| `view` | Consultar/visualizar dados | 47 |
| `create` | Cadastrar nova entidade | 23 |
| `edit` | Editar entidade existente | 21 |
| `validate` | Confirmar/salvar alterações | 14 |
| `toggle` | Alternar entre visualizações | 12 |
| `generate` / `export` | Gerar artefato ou exportar | 5 |
| `configure` | Definir parâmetros de configuração | 3 |
| `pin` | Fixar/selecionar item para contexto | 7 |
| `move` | Reposicionar aula na grade | 1 |
| `delete` | Excluir/desativar entidade | 2 |

---

## Matriz de acesso

Legenda: **R** = Somente leitura | **RW** = Leitura + Escrita | **--** = Sem acesso | **\*** = Transitório (tela de passagem)

### SISGHA Web — Geral

| Tela | VIS | ALU | PROF | DAPE | ADM_EA |
|---|---|---|---|---|---|
| Home (Landing LADESA) | R | \* | \* | \* | \* |
| Seleção de Acesso | -- | -- | R | R | R |
| Login de Servidor | -- | R | RW | RW | -- |

### SISGHA Web — Aluno

| Tela | VIS | ALU | PROF | DAPE | ADM_EA |
|---|---|---|---|---|---|
| Seleção de Horário | -- | RW | -- | -- | -- |
| Horário da Semana (Aluno) | -- | R | -- | -- | -- |
| Horário do Dia (Aluno) | -- | R | -- | -- | -- |
| Calendário Parcial (Aluno) | -- | R | -- | -- | -- |
| Calendário Completo (Aluno) | -- | R | -- | -- | -- |
| Modal de Eventos Calendário (Aluno) | -- | R | -- | -- | -- |

### SISGHA Web — Professor

| Tela | VIS | ALU | PROF | DAPE | ADM_EA |
|---|---|---|---|---|---|
| Horário da Semana (Professor) | -- | -- | R | -- | -- |
| Horário do Dia (Professor) | -- | -- | R | -- | -- |
| Perfil - Professor | -- | -- | R | -- | -- |
| Calendário Parcial (Professor) | -- | -- | R | -- | -- |
| Calendário Completo (Professor) | -- | -- | R | -- | -- |
| Modal de Eventos Calendário (Professor) | -- | -- | R | -- | -- |

### SISGHA Web — DAPE

| Tela | VIS | ALU | PROF | DAPE | ADM_EA |
|---|---|---|---|---|---|
| Início - Acesso Rápido | -- | -- | -- | R | -- |
| Viz. Horário - Por Professor | -- | -- | -- | R | -- |
| Viz. Horário - Por Turma | -- | -- | -- | R | -- |
| Viz. Horário - Mesclado | -- | -- | -- | R | -- |
| Horário Selecionado (Visualização) | -- | -- | -- | R | -- |
| Horário Selecionado (Edição) | -- | -- | -- | RW | -- |
| Horários de Aula (Intervalos) | -- | -- | -- | RW | -- |
| Turmas: Listagem | -- | -- | -- | RW | -- |
| Diários | -- | -- | -- | RW | -- |
| Usuários | -- | -- | -- | RW | -- |
| Cursos | -- | -- | -- | RW | -- |
| Formações | -- | -- | -- | RW | -- |
| Disciplinas: Listagem | -- | -- | -- | RW | -- |
| Perfil - DAPE | -- | -- | -- | RW | -- |
| Calendário Acadêmico - Parcial | -- | -- | -- | RW | -- |
| Calendário Acadêmico - Completo | -- | -- | -- | R | -- |
| Calendário Acadêmico - Estado Vazio | -- | -- | -- | R | -- |
| Relatório de Aulas Ministradas | -- | -- | -- | RW | -- |
| Dias Não Letivos do Mês | -- | -- | -- | RW | -- |
| Dias Não Letivos do Ano | -- | -- | -- | R | -- |
| Gestão de Eventos | -- | -- | -- | RW | -- |
| Gestão de Calendários Acadêmicos | -- | -- | -- | RW | -- |

### SISGEA Web

| Tela | VIS | ALU | PROF | DAPE | ADM_EA |
|---|---|---|---|---|---|
| Login (SISGEA) | -- | -- | -- | -- | RW |
| Home - Reservas | -- | -- | -- | -- | RW |
| Ambientes | -- | -- | -- | -- | RW |
| Blocos | -- | -- | -- | -- | RW |

### SISGHA Mobile

| Tela | VIS | ALU | PROF | DAPE | ADM_EA |
|---|---|---|---|---|---|
| Splash Screen + Loading | -- | \* | \* | -- | -- |
| Login (Mobile) | -- | R | RW | -- | -- |
| Seleção do Horário (Aluno Mobile) | -- | RW | -- | -- | -- |
| Horário - Aluno Técnico | -- | R | -- | -- | -- |
| Horário - Aluno Graduação | -- | R | -- | -- | -- |
| Calendário (Aluno Mobile) | -- | R | -- | -- | -- |
| Notificações (Aluno Mobile) | -- | R | -- | -- | -- |
| Home (Professor Mobile) | -- | -- | R | -- | -- |
| Calendário (Professor Mobile) | -- | -- | R | -- | -- |
| Perfil - Disponibilidade (Mobile) | -- | -- | R | -- | -- |
| Perfil - Ensino (Mobile) | -- | -- | R | -- | -- |
| Notificações (Professor Mobile) | -- | -- | R | -- | -- |

---

## Observações de design

1. **Isolamento total entre módulos de ator.** Módulos de Aluno, Professor, DAPE e ADM_EA são completamente isolados. Não há telas funcionais compartilhadas entre eles. Mesmo telas análogas (ex.: Calendário Parcial) são instâncias separadas para cada ator, com layouts, menus e permissões distintos.

2. **DAPE é o único com escrita ampla no SISGHA.** Aluno e Professor são estritamente consumidores de informação (somente leitura), exceto: Aluno realiza seleção de turma como filtro de sessão sem persistência; Professor pode alterar a foto de perfil. A disponibilidade do professor é editada exclusivamente pelo DAPE.

3. **SISGEA é um sistema separado.** ADM_EA opera exclusivamente dentro do SISGEA, sem interação com telas do SISGHA. Os dois sistemas compartilham apenas a landing page e a Seleção de Acesso.

4. **Mobile exclui o DAPE.** O aplicativo mobile não possui módulo DAPE. Apenas Aluno e Professor têm interfaces mobile. Isso reflete que operações administrativas requerem interface desktop completa.

5. **Notificações são exclusivas do mobile.** Telas dedicadas de notificações existem apenas no app (Aluno e Professor). No desktop, notificações são acessadas via dropdown no cabeçalho.

6. **Tema claro e escuro.** O mobile protótipo as telas em duas versões (claro e escuro). O web alterna via ícone sol/lua no cabeçalho.

7. **Suporte a multi-campus.** O cabeçalho web permite trocar o campus ativo. A disponibilidade do professor é gerenciada por campus separadamente. Um servidor pode estar vinculado a múltiplos campi com papéis diferentes em cada um.
