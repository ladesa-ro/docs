---
id: US-SISGHA-GH-009
tipo: user-story
modulo: SISGHA
endereco: "1.9"
epico: EP-SISGHA-GH-001
perfil-principal: P-DAPE
tags: [P-DAPE]
rastreia_para: [RF-SISGHA-GH-005]
status: rascunho
fonte-primaria: levantamento-notebooklm
fonte-secao: "Seção 11 — Insights de arquitetura"
sidebar_label: "[DAPE] US-SISGHA-GH-009 – Log de conflitos"
---

# [DAPE] US-SISGHA-GH-009 — [1.9] Ver log de conflitos detalhado ao falhar geração

## Descrição

**Como** DAPE,
**quero** ver um log detalhado com o motivo específico de cada conflito quando a geração falhar,
**para que** eu saiba exatamente o que preciso ajustar.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Tela de detalhes da geração com aba "Log de conflitos" — lista de conflitos com ícones por tipo (choque, indisponibilidade, sala ocupada) | `[RI-01]` Cada conflito exibe: tipo, professor/turma afetados, slot, motivo <br/> `[RI-02]` Conflitos são filtráveis por tipo (choque, PRD, sala, outros) <br/> `[RI-03]` Clique no conflito navega para o professor/turma afetado na grade |

## Regras de Negócio

`[RN-01]` O timetable-generator retorna no campo `resposta_gerador` (JSONB) os detalhes de erro via `ServiceGenerateResponseResultError` com `error_code`, `error_message` e `additional_info` (BR-SISGHA-008).

`[RN-02]` O log deve ser exibido ao DAPE na interface, não apenas registrado em backend.

`[RN-03]` Exemplos de motivos esperados: "Choque de PRD do Prof. X", "Sala Ambiente Ocupada via SISGEA", "Limite semanal excedido para disciplina Y".

## Fluxos

`[FP-01]` **Fluxo Principal — Visualizar log de conflitos**
1. Geração retorna com status `ERRO` (vindo de US-SISGHA-GH-008, `[FE-02]`).
2. Sistema exibe modal de erro com botão "Ver detalhes".
3. DAPE clica em "Ver detalhes".
4. Sistema exibe lista de conflitos extraída de `resposta_gerador.result.additional_info`.
5. DAPE analisa os conflitos e ajusta dados (disponibilidades, vínculos, etc.).

## Ações

| ID | Título | Tela | Ação |
|----|--------|------|------|
| `[AC-01]` | Extrair conflitos | Backend | Parseia `additional_info` do response de erro |
| `[AC-02]` | Navegar para entidade | Log de conflitos | Redireciona para edição do professor/turma afetado |

## Mensagens

| ID | Mensagem | Tipo | Contexto |
|----|----------|------|---------|
| `[MS-01]` | "Não foi possível gerar o horário. Foram encontrados [N] conflitos. Veja os detalhes abaixo." | Erro | Modal de erro com link para detalhes |

## Critérios de Aceitação

- `[CA-01]` Log exibe motivo específico de cada conflito
- `[CA-02]` Conflitos são filtráveis por tipo
- `[CA-03]` Navegação rápida para entidade afetada
- `[CA-04]` Formato humanizado (sem stack traces ou códigos internos)

## Questões em aberto

- [ ] O `additional_info` do solver tem formato estruturado (JSON) ou é texto livre?
- [ ] O solver pode retornar grades parciais (com alguns conflitos) junto com o log?
- [ ] O `error_code` tem enum definido?

---

*Fonte: Relatório NotebookLM, Seção 11 — Insights de arquitetura (transparência algorítmica).*
