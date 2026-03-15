---
id: US-SISGHA-GH-003
tipo: user-story
modulo: SISGHA
endereco: "1.3"
epico: EP-SISGHA-GH-001
perfil-principal: P-DAPE
tags: [P-DAPE]
rastreia_para: [RF-SISGHA-GH-003]
status: pendente-alinhamento
fonte-primaria: levantamento-notebooklm
fonte-secao: "Seção 4 — RF-SISGHA-003"
sidebar_label: "[DAPE] US-SISGHA-GH-003 – Importação SUAP/CSV"
---

# [DAPE] US-SISGHA-GH-003 — [1.3] Importar dados de professores e matrizes via SUAP/CSV

## Descrição

**Como** DAPE,
**quero** importar vínculos de professores e matrizes curriculares do SUAP ou via arquivo CSV,
**para que** eu não precise cadastrar manualmente centenas de registros.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` [a preencher — sem tela no Figma atual] | `[RI-01]` [a preencher] |

## Regras de Negócio

`[RN-01]` [a preencher — depende da resolução de DSC-008 sobre disponibilidade da API do SUAP]

## Fluxos

`[FP-01]` **Fluxo Principal — Importar via CSV**
1. DAPE acessa funcionalidade de importação.
2. Seleciona arquivo CSV no formato esperado.
3. Sistema valida o arquivo e exibe preview dos dados a importar.
4. DAPE confirma a importação.
5. Sistema cria registros de `diario`, `diario_professor` e entidades relacionadas.

`[FE-01]` **Fluxo de Exceção — Arquivo inválido**
1. DAPE seleciona arquivo com formato incorreto.
2. Sistema exibe detalhes dos erros encontrados (linha, coluna, motivo).

## Ações

| ID | Título | Tela | Ação |
|----|--------|------|------|
| `[AC-01]` | Upload CSV | Modal importação | Recebe arquivo e valida formato |
| `[AC-02]` | Importar registros | Modal importação | Cria entidades no backend em transação atômica |

## Mensagens

| ID | Mensagem | Tipo | Contexto |
|----|----------|------|---------|
| `[MS-01]` | "Importação concluída! [N] vínculos criados com sucesso." | Sucesso | Após `[FP-01]` |
| `[MS-02]` | "Erro na importação: [detalhes por linha]." | Erro | Após `[FE-01]` |

## Critérios de Aceitação

- `[CA-01]` CSV com formato válido é importado corretamente
- `[CA-02]` Erros de formato são reportados com linha e coluna
- `[CA-03]` Importação é atômica — falha total não cria registros parciais

## Questões em aberto

- [ ] A API do SUAP está disponível para leitura de vínculos? (DSC-008)
- [ ] Formato do CSV de importação a definir
- [ ] Integração com SUAP: API direta, CSV exportado, ou híbrido? (ADR-009 a criar)

---

*Fonte: Relatório NotebookLM, Seção 4 (RF-SISGHA-003) — DAPE Ji-Paraná [10:50].*
