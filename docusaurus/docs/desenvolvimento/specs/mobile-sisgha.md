---
sidebar_position: 1
sidebar_label: Visão Geral
---

# SISGHA Mobile — Requisitos e Especificações

App mobile do SISGHA desenvolvido em **Flutter (Dart)** para Android e iOS. Cobre apenas os perfis **Aluno** e **Professor** — sem interface DAPE no mobile.

## Escopo

| Perfil | Funcionalidades |
|---|---|
| **Aluno** | Seleção de turma, visualização de horário (Técnico vs Graduação), calendário, notificações |
| **Professor** | Horário da semana (home), calendário, disponibilidade por dia, ensino (disciplinas/turmas), notificações |

## Características do app

- **Tema claro e escuro** em todas as telas
- **Splash screen animada** com 4 frames de transição
- **Bottom navigation bar** (Navbar-Footer) para navegação principal
- **Variante Técnico vs Graduação** para alunos — visualização de horário estruturalmente diferente

## Navegação (Navbar-Footer)

### Aluno
| Aba | Tela |
|---|---|
| Horário | Visualização do horário por dia |
| Calendário | Calendário com eventos e etiquetas |
| Notificações | Lista de notificações |

### Professor
| Aba | Tela |
|---|---|
| Home | Horário da semana |
| Calendário | Calendário com eventos |
| Perfil | Disponibilidade / Ensino |
| Notificações | Lista de notificações |

## Figma

Os designs estão no Figma mobile do projeto, com variantes para tema claro e escuro em ambos os perfis (Aluno e Professor), além de telas de Splash/Login.

---

*Fonte: Figma SISGHA Mobile.*
