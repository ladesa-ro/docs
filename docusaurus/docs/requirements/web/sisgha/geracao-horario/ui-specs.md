---
sidebar_position: 5
sidebar_label: UI Specs
---

# UI Specs — Geração de Horário

## UI-SISGHA-GH-001 — Modal Gerar Horário Permanente

**Figma:** node `10145:26922` | **Perfis:** P-DAPE

### Estrutura do modal

Título: "Gerar Horário Acadêmico" (borda verde à esquerda).

| Elemento | Descrição |
|---|---|
| **ComboBox "Formações"** | Multi-select: "Selecione uma ou mais formações" |
| **Linha separadora** | Divisor horizontal cinza |
| **Subtítulo** | "Duração do Horário" (borda verde à esquerda) |
| **Toggle Permanente/Temporário** | Dois botões segmentados. Permanente selecionado (fundo verde claro, borda verde). Temporário em cinza. |
| **Campo "Data de início"** | TextBox com data (ex: 30/07/2025) |
| **Info box azul** | "Este horário pode ser sobreposto por um horário temporário ou substituído por outro horário permanente gerado no futuro." |
| **Botões** | "Cancelar" (vermelho, com ícone X) + "Gerar Horário" (verde, com ícone play) |

### Regras de interface

`[RI-01]` Botão "Gerar Horário" fica desabilitado se nenhuma formação for selecionada.
`[RI-02]` Ao selecionar "Temporário", um campo "Data de término" adicional aparece.
`[RI-03]` Info box muda de texto conforme o tipo selecionado (permanente vs temporário).

---

## UI-SISGHA-GH-002 — Modal Gerar Horário Temporário

**Figma:** node `10145:26984` | **Perfis:** P-DAPE

Mesma estrutura do modal permanente, com diferenças:
- Toggle "Temporário" selecionado (fundo verde)
- Campo adicional "Data de término" visível
- Info box: "Este horário coexiste com o permanente e expira automaticamente na data de término."

---

## UI-SISGHA-GH-003 — Estado "Gerando Horário"

**Figma:** node `10182:21883` | **Perfis:** P-DAPE

### Estrutura

| Elemento | Descrição |
|---|---|
| **Ícone** | Animação de carregamento (ícone de grade/horário) |
| **Título** | "Gerando Horário..." (verde, 22px) |
| **Subtexto** | "Isso pode levar algum tempo, dependendo da quantidade de professores, disciplinas e turmas." (cinza, 9px) |
| **Botão** | "Cancelar" (vermelho, largura total) |

### Regras de interface

`[RI-01]` Este modal é exibido enquanto o status for `SOLICITADO` ou `PENDENTE`.
`[RI-02]` Botão "Cancelar" envia request para cancelar a geração.

---

## UI-SISGHA-GH-004 — Estado "Horário Gerado"

**Figma:** node `10183:21957` | **Perfis:** P-DAPE

### Estrutura

| Elemento | Descrição |
|---|---|
| **Ícone** | Check verde (ícone de sucesso) |
| **Título** | "Horário Gerado!" (verde, 22px) |
| **Subtexto** | "Foi gerado o horário para as formações [lista dinâmica]." (cinza, 9px) |
| **Botão** | "Visualizar Horário" (verde, largura total, com ícone seta) |

### Regras de interface

`[RI-01]` Este modal é exibido quando o status muda para `SUCESSO`.
`[RI-02]` Botão "Visualizar Horário" navega para a tela de visualização de horário (FASE 8).
`[RI-03]` O subtexto lista dinamicamente as formações do escopo da geração.

---

## UI-SISGHA-GH-006 — Horários de Aula: Intervalos por turno

**Figma:** node `9305:26346` | **Perfis:** P-DAPE

Tela de configuração dos slots de horário de aula por campus. Define `horario_aula_configuracao` e `horario_aula` — os intervalos de início e fim de cada aula.

---

*Fonte: Figma SISGHA V2.0, seção "Gerar Horário" (`10145:25187`).*
