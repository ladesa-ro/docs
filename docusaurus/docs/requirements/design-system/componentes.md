---
sidebar_position: 2
sidebar_label: Componentes
---

# Componentes do Design System

Catálogo dos componentes reutilizáveis identificados no Figma SISGHA V2.0 e SISGEA.

## Inputs e Formulários

### DS-011 — TextBox

Input de texto com label flutuante (floating label pattern).

| Estado | Descrição |
|---|---|
| Off | Borda cinza (`--ldsa-grey/100`), label cinza no topo |
| On | Borda verde (`--ldsa-green-1/100`), label verde |
| Disabled | Fundo cinza claro (`#F0F0F0`) |

**Variantes:** TextBox simples, Password (com toggle de visibilidade).

### DS-012 — ComboBox / Select

Dropdown com label flutuante e seta indicadora.

| Estado | Descrição |
|---|---|
| Fechado | Borda cinza, seta para baixo |
| Aberto | Borda verde, opções listadas abaixo |
| Item selecionado | Texto preto, ícone de check |

### DS-010 — Botões

| Variante | Cor | Uso |
|---|---|---|
| Primary | Fundo verde (`--ldsa-green-1/100`), texto branco | Ações principais (Entrar, Gerar, Confirmar) |
| Outline Green | Borda verde, texto verde | Ações secundárias (Visualizar, Cadastrar) |
| Outline Red | Borda vermelha (`--ldsa-red/100`), texto vermelho | Cancelar, excluir |
| Disabled | Fundo cinza (`--ldsa-grey/100`), texto branco | Ação indisponível |
| Icon Button | Fundo verde, ícone branco (47×47px) | Adicionar, pesquisar |

### DS-020 — Modais e Forms

Container com borda cinza, border-radius 8px, shadow verde, padding 21.5px.
Título com borda verde à esquerda (3px). Botões "Cancelar" + "Confirmar" no rodapé.

## Navegação

### DS-013 — Header-Main (DAPE/Professor)

Barra superior com: perfil do usuário (avatar + nome + seletor de papel), troca de campus, toggle tema, notificações, logomarca.

### DS-014 — Sidebar DAPE

Sidebar verde com dois estados (expandida/recolhida). Items com ícone + label. Accordions para subitens (Gestão, Ensino). Perfil e Sair fixos na base.

### DS-015 — Sidebar Professor

Sidebar recolhida (57px) com apenas ícones. Itens: Horário, Calendário, Perfil.

### DS-013 — Header-Aluno

Barra verde sólida com botão "Voltar" + título da turma selecionada.

## Componentes de Horário

### DS-017 — Horario-Professor-Aluno

Grid tabular de horário semanal. Colunas: dias da semana. Linhas: slots de horário. Células com disciplina + professor + sala.

### DS-016 — Calendário-Mes

Componente de calendário mensal com:
- Grid 7 colunas (Dom a Sáb)
- Dias com marcação colorida (eventos)
- Dia atual destacado (fundo verde, borda branca)
- Navegação entre meses

### DS-018 — Card de Evento

Card de evento do calendário com: título, data, descrição, cor lateral indicativa do tipo.

### DS-019 — Card de Item

Card genérico para listagens (cursos, turmas, disciplinas, ambientes):
- Foto de capa (quando aplicável)
- Nome
- Informações secundárias (bloco, estado, período)
- Ícone de edição

## Componentes de Dia/Semana

### Dia da Semana (Toggle)

Botão de dia da semana com dois estados:
- **Selecionado:** fundo verde, texto branco, borda verde
- **Não selecionado:** fundo transparente, texto verde, borda verde

### Card de Aula (Horário do dia)

Card de aula com informações empilhadas:
- **Aula passada:** borda cinza, texto cinza
- **Aula atual:** borda verde, texto preto, ícone de relógio à direita
- **Aula futura:** borda verde, texto preto

## Componentes Mobile (Flutter)

### Navbar-Footer

`BottomNavigationBar` com ícones e labels. Variantes por perfil:
- Aluno: 3 abas (Horário, Calendário, Notificações)
- Professor: 4 abas (Home, Calendário, Perfil, Notificações)

### Accordion-Aluno-Animado

`ExpansionPanelList` com animação de expansão para selects cascata no mobile.

### Toggle-Button-Disponibilidade-Ensino

`ToggleButtons` com duas opções: "Disponibilidade" e "Ensino" na tela de perfil do professor.

---

*Fonte: Figma SISGHA V2.0, SISGEA, SISGHA Mobile.*
