---
sidebar_position: 1
sidebar_label: Template Charter Exploratório
---

# QA-TEMPLATE — Template de Charter para Teste Exploratório

Baseado em SBTM (Session-Based Test Management) e IEEE 829-2008.

---

## Charter — Sessão Exploratória Sprint NN

**Missão:** Explorar [área funcional] em busca de [tipos de problema]
**Perfil testado:** [P-DAPE / P-PROFESSOR / P-ALUNO]
**Duração:** 60 minutos | **Data:** YYYY-MM-DD
**Testador:** [nome]

### O que foi testado

[Áreas e fluxos cobertos durante a sessão]

### Bugs encontrados

| ID | Descrição | Severidade | Story relacionada |
|----|-----------|------------|-------------------|
| BUG-001 | [descrição] | [crítico/alto/médio/baixo] | [US-xxx] |

### Observações e riscos

[Comportamentos suspeitos que merecem investigação futura]

### Métricas da sessão

| Métrica | Valor |
|---|---|
| Bugs encontrados | X |
| Áreas cobertas | X de Y |
| Tempo em setup | Xmin |
| Tempo em teste | Xmin |
| Tempo em investigação de bugs | Xmin |

---

## Template de Relatório de Sprint

### Métricas de Qualidade — Sprint NN

| Métrica | Fórmula | Valor | Meta |
|---------|---------|-------|------|
| Defect Density | defeitos / story points entregues | X.X | < 1.0 |
| DRE (Defect Removal Efficiency) | defeitos pré-release / (pré + pós) × 100 | XX% | > 90% |
| Story Acceptance Rate | stories aceitas / entregues × 100 | XX% | > 95% |
| Taxa de Regressão | defeitos em funcionalidades anteriores / total | XX% | < 10% |

---

## Definition of Done multinível

**Story:** Critérios de aceitação verificados + BDD passando + code review + screenshot atualizado.

**Sprint:** Todas as stories atendem DoD + DRE > 90% + sessão exploratória realizada + relatório gerado.

**Release:** Todos os sprints atendem DoD + performance validada + homologação aprovada + documentação atualizada no Docusaurus.

---

*Template baseado em IEEE 829-2008 e Agile Testing Quadrants (Crispin & Gregory, 2015).*
