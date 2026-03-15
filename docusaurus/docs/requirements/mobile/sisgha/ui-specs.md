---
sidebar_position: 3
sidebar_label: UI Specs
---

# UI Specs — SISGHA Mobile

Todas as UI Specs referenciam o Figma mobile: **fileKey `57O1MLezMDcqe5OVkfj7qE`**.
Framework: **Flutter (Dart)**. Componentes descritos em termos de widgets Flutter.

---

## Telas Compartilhadas

### UI-SISGHA-MOB-001 — Splash Screen / Animação inicialização

**Figma:** `3587:2710` | **Plataforma:** mobile

Sequência animada de 5 frames na inicialização do app. Widgets: `AnimatedContainer`, `AnimatedOpacity`, `Hero`. Duração total: ~2-3 segundos.

| Frame | Descrição | Transição |
|---|---|---|
| Inicio | Logo na base, texto "SISGHA" | Fade in |
| Inicialização | Logo move para centro | `SlideTransition` |
| Splash Screen | Logo + texto centralizados + blooms | Hold 1s |
| Transição | Blooms expandem (fullscreen) | `ScaleTransition` |
| Loading page | Animação circular + login form | Fade in |

---

### UI-SISGHA-MOB-002 — Login mobile

**Figma:** `2023:3943` | **Plataforma:** mobile

| Widget | Descrição |
|---|---|
| `CircularProgressIndicator` | Animação de loading (centro) |
| Logo SISGHA | Logomarca centralizada |
| `TextField` ×2 | Matrícula + Senha |
| `Text` | Texto de validação (erro) |
| `ElevatedButton` ×2 | "Entrar" (servidor) + "Entrar como aluno" |
| Blooms decorativos | `CustomPaint` com gradientes |

---

## Aluno — Tema Claro (referência principal)

### UI-SISGHA-MOB-003 — Seleção do Horário — Aluno

**Figma:** `2851:5314` | **Tema:** claro

| Widget | Descrição |
|---|---|
| `AppBar` (Header) | Logo SISGHA + título |
| `ExpansionPanelList` | Accordion animado com selects cascata (Formação → Curso → Ano → Turma) |
| Sem Navbar-Footer | Tela de seleção não tem bottom nav |

---

### UI-SISGHA-MOB-004 — Visualização do Horário — Aluno Técnico

**Figma:** `2851:5236` | **Tema:** claro | **Variante:** Técnico

| Widget | Descrição |
|---|---|
| `AppBar` (Header) | Título da turma |
| `ElevatedButton` | "Abrir Calendário" (navega para calendário) |
| `ToggleButtons` / `Row` | Select-DiaSemana (Seg a Sex, botões) |
| `ListView` | Lista de cards de aula (disciplina, professor, sala, horário) |
| `BottomNavigationBar` | Navbar-Footer (Horário, Calendário, Notificações) |

**Diferença do Graduação:** Aulas são individuais (separadas), não em blocos.

---

### UI-SISGHA-MOB-005 — Visualização do Horário — Aluno Graduação

**Figma:** `5003:2982` | **Tema:** claro | **Variante:** Graduação

Mesma estrutura do Técnico, mas com aulas em blocos germinados (consecutivos). Cards de aula agrupados visualmente.

---

### UI-SISGHA-MOB-006 — Calendário — Aluno

**Figma:** `3645:2117` | **Tema:** claro

| Widget | Descrição |
|---|---|
| `AppBar` (Header) | Título "Calendário" |
| `TextField` | BuscarCalendario (campo de busca) |
| `TableCalendar` | Calendário SISGHA (grid mensal com marcações) |
| `ElevatedButton` | "Ver Todos Eventos" |
| `ListView` | Etiquetas de eventos (cards com título, data, cor) |
| `BottomNavigationBar` | Navbar-Footer |

---

### UI-SISGHA-MOB-007 — Notificações — Aluno

**Figma:** `3616:2903` | **Tema:** claro

| Widget | Descrição |
|---|---|
| `AppBar` (Header) | Título "Notificações" |
| `ListView` | Lista de cards "Etiqueta Notificação" (título, mensagem, timestamp) |
| `BottomNavigationBar` | Navbar-Footer |

---

## Professor — Tema Claro (referência principal)

### UI-SISGHA-MOB-008 — Home — Professor

**Figma:** `1710:3447` | **Tema:** claro

| Widget | Descrição |
|---|---|
| `AppBar` (Header) | Nome do professor |
| `ElevatedButton` | "Abrir Calendário" |
| `ToggleButtons` | Select-DiaSemana |
| `ListView` | Aulas do dia selecionado |
| `BottomNavigationBar` | Navbar-Footer (Home, Calendário, Perfil, Notificações) |

---

### UI-SISGHA-MOB-009 — Calendário — Professor

**Figma:** `1482:4408` | **Tema:** claro

Idêntica à do aluno (UI-SISGHA-MOB-006), incluindo eventos da agenda pessoal do professor.

---

### UI-SISGHA-MOB-010 — Perfil: Disponibilidade — Professor

**Figma:** `1482:4406` | **Tema:** claro

| Widget | Descrição |
|---|---|
| Avatar | Componente Avatar do professor (foto, nome, cargo) |
| `ToggleButtons` | Toggle "Disponibilidade" / "Ensino" |
| Grid DisponibilidadeDiaSemana | Grid de dias da semana × turnos (checkboxes ou switches) |
| `BottomNavigationBar` | Navbar-Footer |

---

### UI-SISGHA-MOB-011 — Perfil: Ensino — Professor

**Figma:** `2023:3570` | **Tema:** claro

| Widget | Descrição |
|---|---|
| Avatar | Componente Avatar do professor |
| `ToggleButtons` | Toggle "Disponibilidade" / "Ensino" (aba Ensino ativa) |
| `PageView` / `Carousel` | Carrossel horizontal de cards disciplina+turma |
| `BottomNavigationBar` | Navbar-Footer |

---

### UI-SISGHA-MOB-012 — Notificações — Professor

**Figma:** `3095:4632` | **Tema:** claro

Idêntica à do aluno (UI-SISGHA-MOB-007).

---

:::info Tema Escuro
Para cada UI Spec acima, existe uma variante em tema escuro no Figma:
- Aluno escuro: seção `4005:3387`
- Professor escuro: seção `4005:3388`

As specs de tema escuro seguem a mesma estrutura com paleta invertida (fundo escuro, texto claro, acentos verdes mantidos).
:::

---

*Fonte: Figma SISGHA Mobile (fileKey: 57O1MLezMDcqe5OVkfj7qE).*
