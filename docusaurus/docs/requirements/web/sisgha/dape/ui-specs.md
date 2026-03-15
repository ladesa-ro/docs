---
sidebar_position: 1
sidebar_label: UI Specs — Dashboard e Navegação
---

# UI Specs — Dashboard DAPE e Navegação

## UI-SISGHA-DAPE-001 — Início / Dashboard com acesso rápido

**Figma:** node `9315:25090` | **Perfis:** P-DAPE

### Estrutura da tela

Título: "Início - Acesso Rápido". Layout com Sidebar (esquerda) + Header-Main (topo) + conteúdo central.

### Seções do dashboard

| Seção | Botões de acesso rápido |
|---|---|
| **Horário Acadêmico** | "Visualizar Horário" (ícone grade), "Gerar Horário" (ícone engrenagem) |
| **Relatórios** | "Aulas Ministradas" (ícone documento) |
| **Diários** | "Visualizar Horário" (×2) |

### Header-Main

| Elemento | Descrição |
|---|---|
| Perfil do usuário | Avatar + nome + seletor de papel (DAPE dropdown) |
| Troca de campus | Botão com nome do campus ativo (ex: "Ji-Paraná") |
| Tema | Toggle sol/lua (claro/escuro) |
| Notificações | Ícone de sino (estado on/off) |
| Logo | Logomarca SISGHA no canto direito |

---

## UI-SISGHA-DAPE-002 — Sidebar DAPE

**Figma:** node `8436:8650` | **Perfis:** P-DAPE

### Estados

| Estado | Descrição |
|---|---|
| **Menu On** (expandido) | Sidebar 231px com ícones + labels de texto |
| **Menu Off** (recolhido) | Sidebar 57px com apenas ícones |

### Itens da Sidebar

| Posição | Item | Tipo | Ícone |
|---|---|---|---|
| 1 | Início | Link direto | Casa |
| 2 | Calendário | Link direto | Calendário |
| 3 | Gestão | Accordion (expandível) | Engrenagem |
| 4 | Ensino | Accordion (expandível) | Livro |
| — | *Espaço flexível* | — | — |
| 5 | Perfil | Link direto | Pessoa |
| 6 | Sair | Ação | Porta |

### Regras de interface

`[RI-01]` Sidebar recolhe automaticamente em telas menores.
`[RI-02]` Accordions "Gestão" e "Ensino" expandem para revelar sub-itens.
`[RI-03]` Item ativo é destacado visualmente (background diferenciado).

---

*Fonte: Figma SISGHA V2.0, nodes `9315:25090` e `8436:8650`.*
