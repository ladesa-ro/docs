---
id: UC-SISGHA-GH-003
tipo: caso-de-uso
modulo: SISGHA
rastreia_de: [US-SISGHA-GH-003]
rastreia_para: []
status: pendente-alinhamento
fonte-primaria: levantamento-notebooklm
sidebar_label: "UC-GH-003 – Importar dados"
---

# UC-SISGHA-GH-003 — Importar dados do SUAP/CSV

## Informações gerais

| Campo | Valor |
|-------|-------|
| **Ator primário** | DAPE |
| **Nível** | User Goal |
| **Escopo** | SISGHA |
| **Pré-condições** | DAPE autenticado; campus selecionado |
| **Garantia de sucesso** | Vínculos e matrizes importados e persistidos no banco |
| **Garantia mínima** | Nenhum registro criado (rollback completo); erros reportados |
| **Trigger** | DAPE acessa funcionalidade de importação |

## Cenário principal — Via CSV

1. DAPE acessa a funcionalidade de importação.
2. DAPE seleciona arquivo CSV no formato esperado.
3. Sistema valida formato, colunas e tipos de dados.
4. Sistema exibe preview com resumo: N professores, M disciplinas, P vínculos.
5. DAPE revisa e confirma a importação.
6. Sistema cria registros em transação atômica (`diario`, `diario_professor`, entidades relacionadas).
7. Sistema exibe confirmação com contagem de registros criados.

## Extensões

**3a.** Arquivo com formato inválido:
1. Sistema lista erros por linha (linha, coluna, motivo).
2. DAPE corrige o arquivo e tenta novamente.

**6a.** Conflito com registros existentes (professor já cadastrado):
1. Sistema exibe preview com conflitos destacados.
2. DAPE escolhe: "Ignorar existentes" ou "Atualizar existentes".

**Cenário alternativo — Via API do SUAP (DSC-008):**
1. DAPE acessa funcionalidade de sincronização com SUAP.
2. Sistema conecta à API do SUAP com credenciais configuradas.
3. Sistema lista vínculos disponíveis para importação.
4. DAPE seleciona vínculos a importar.
5. Sistema cria registros automaticamente.

> Este cenário depende da resolução de DSC-008.

## Questões em aberto

- [ ] Formato CSV a definir (colunas, separadores, encoding)
- [ ] API do SUAP: disponível? Quais endpoints? (DSC-008)
- [ ] ADR-009 (estratégia SUAP) a criar

---

*Fonte: Relatório NotebookLM, Seção 4 (RF-SISGHA-003) — DAPE Ji-Paraná [10:50].*
