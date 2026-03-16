---
sidebar_position: 10
sidebar_label: Catálogo de Mensagens
---

# Catálogo Centralizado de Mensagens do Sistema

Mensagens exibidas ao usuário em toda a aplicação. Cada entrada garante consistência de voz e tom.

:::info Status
Catálogo inicial com mensagens identificadas nas User Stories. Será populado progressivamente conforme Stories forem aprovadas.
:::

## SISGHA — Autenticação

### MSG-SISGHA-001

| Campo | Valor |
|---|---|
| **Texto** | "Matrícula ou senha incorretos. Verifique seus dados e tente novamente." |
| **Tipo** | Erro |
| **Contexto** | Login com credenciais inválidas |
| **Origem** | US-SHARED-001, [MS-01] |
| **Status** | rascunho |

### MSG-SISGHA-002

| Campo | Valor |
|---|---|
| **Texto** | "Sua conta foi temporariamente bloqueada por múltiplas tentativas. Tente novamente em alguns minutos ou entre em contato com o suporte." |
| **Tipo** | Alerta |
| **Contexto** | Conta bloqueada por tentativas excessivas |
| **Origem** | US-SHARED-001, [MS-02] |
| **Status** | rascunho |

## SISGHA — Geração de Horário

### MSG-SISGHA-003

| Campo | Valor |
|---|---|
| **Texto** | "Gerando Horário... Isso pode levar algum tempo, dependendo da quantidade de professores, disciplinas e turmas." |
| **Tipo** | Informativo |
| **Contexto** | Modal de geração em andamento |
| **Origem** | US-SISGHA-GH-008 |
| **Status** | rascunho |

### MSG-SISGHA-004

| Campo | Valor |
|---|---|
| **Texto** | "Horário Gerado! Foi gerado o horário para as formações [lista dinâmica]." |
| **Tipo** | Sucesso |
| **Contexto** | Geração concluída com sucesso |
| **Origem** | US-SISGHA-GH-008 |
| **Status** | rascunho |

### MSG-SISGHA-005

| Campo | Valor |
|---|---|
| **Texto** | "Este horário pode ser sobreposto por um horário temporário ou substituído por outro horário permanente gerado no futuro." |
| **Tipo** | Informativo (info box azul) |
| **Contexto** | Modal de geração — modo permanente |
| **Origem** | US-SISGHA-GH-008 |
| **Status** | rascunho |

### MSG-SISGHA-006

| Campo | Valor |
|---|---|
| **Texto** | "Nenhuma turma encontrada para esta seleção." |
| **Tipo** | Informativo |
| **Contexto** | Seleção de turma sem resultados |
| **Origem** | US-SISGHA-ALU-001, [MS-01] |
| **Status** | rascunho |

---

## Critérios de qualidade (rubric Nielsen Norman Group)

Cada mensagem aprovada deve atender:

| Critério | Descrição |
|---|---|
| Informa o que aconteceu | A mensagem descreve o evento claramente |
| Explica por que (quando relevante) | Motivo ou causa é explicado |
| Instrui o que fazer a seguir | Próximo passo é indicado |
| Tom adequado ao contexto | Sucesso = positivo, erro = neutro e útil |
| Livre de jargão técnico | Sem stack traces, códigos internos ou termos de API |

---

*Catálogo será expandido conforme Stories forem aprovadas em revisão.*
