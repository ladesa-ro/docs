---
id: US-SISGHA-GH-005
tipo: user-story
modulo: SISGHA
endereco: "1.5"
epico: EP-SISGHA-GH-001
perfil-principal: P-DAPE
tags: [P-DAPE]
rastreia_para: [RF-SISGHA-GH-008]
status: rascunho
fonte-primaria: levantamento-notebooklm
fonte-secao: "Seção 4 — RF-SISGHA-005"
sidebar_label: "[DAPE] US-SISGHA-GH-005 – Relatório PDF"
---

# [DAPE] US-SISGHA-GH-005 — [1.5] Gerar relatório PDF por professor e por turma

## Descrição

**Como** DAPE,
**quero** gerar relatórios PDF individuais do horário de cada professor e de cada turma,
**para que** eu possa distribuir e publicar as grades.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Botão "Exportar PDF" na visualização de horário — opções: "Este professor", "Esta turma", "Todos os professores", "Todas as turmas" | `[RI-01]` Botão de exportação disponível apenas na visualização (não na edição) <br/> `[RI-02]` Exportação em lote ("Todos") gera um ZIP com PDFs individuais |

## Regras de Negócio

`[RN-01]` O PDF deve conter: nome do professor ou turma, período, campus, e a grade semanal formatada.

`[RN-02]` O layout do PDF deve ser compatível com impressão em A4 paisagem.

## Fluxos

`[FP-01]` **Fluxo Principal — Gerar PDF individual**
1. DAPE visualiza o horário de um professor ou turma.
2. Clica em "Exportar PDF" → "Este professor" (ou "Esta turma").
3. Sistema gera o PDF e inicia download.

`[FP-02]` **Fluxo Principal — Gerar PDFs em lote**
1. DAPE clica em "Exportar PDF" → "Todos os professores" (ou "Todas as turmas").
2. Sistema gera PDFs individuais e empacota em ZIP.
3. Download inicia automaticamente.

## Ações

| ID | Título | Tela | Ação |
|----|--------|------|------|
| `[AC-01]` | Gerar PDF individual | Visualização de horário | Renderiza grade em PDF e retorna arquivo |
| `[AC-02]` | Gerar PDFs em lote | Visualização de horário | Gera ZIP com PDFs de todos professores/turmas |

## Mensagens

| ID | Mensagem | Tipo | Contexto |
|----|----------|------|---------|
| `[MS-01]` | "PDF gerado com sucesso." | Sucesso | Download iniciado |

## Critérios de Aceitação

- `[CA-01]` PDF individual é gerado corretamente para professor e turma
- `[CA-02]` Exportação em lote gera ZIP com todos os PDFs
- `[CA-03]` Layout legível em A4 paisagem

## Questões em aberto

- [ ] Biblioteca de geração de PDF a definir (server-side vs client-side)
- [ ] Logo do campus/IFRO deve aparecer no cabeçalho do PDF?

---

*Fonte: Relatório NotebookLM, Seção 4 (RF-SISGHA-005) — DAPE Ji-Paraná [11:46].*
