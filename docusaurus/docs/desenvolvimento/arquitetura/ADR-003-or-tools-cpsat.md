---
sidebar_position: 4
sidebar_label: "ADR-003: OR-Tools CP-SAT"
---

# ADR-003 — Google OR-Tools CP-SAT como solver de geração de horário

## Status

**Aceito**

## Contexto

A geração de horário acadêmico é um problema de **constraint satisfaction** (CSP) com variáveis discretas: alocar disciplinas em slots de tempo respeitando restrições de professor, turma, sala, turno e preferências pedagógicas.

O solver precisa:
- Respeitar hard constraints (choques, PRD, limites de turno)
- Otimizar soft constraints (minimizar janelas, priorizar germinação por nível)
- Ser performante o suficiente para gerar grades complexas (múltiplas turmas e turnos) em tempo razoável
- Ser open-source (requisito do projeto)

## Decisão

Usar o **Google OR-Tools CP-SAT** (Constraint Programming with SAT solver) implementado em **C#** no repositório `timetable-generator/`.

## Consequências

**Positivas:**
- OR-Tools é referência acadêmica e industrial para problemas de timetabling
- CP-SAT combina constraint programming com SAT solving — muito eficiente para problemas discretos
- Open-source (Apache 2.0) — compatível com a proposta open-source do projeto
- Suporte a objetivos múltiplos (lexicográfico ou ponderado)
- Comunidade ativa e documentação extensa

**Negativas:**
- Implementação em C# cria heterogeneidade de stack (o resto é TypeScript/Dart)
- Comunicação com o management-service requer mensageria (RabbitMQ) — ver ADR-006
- Contrato JSONB entre os serviços ainda não especificado (DSC-002)

## Alternativas consideradas

1. **OptaPlanner (Java)** — descartado por requisito de JVM e complexidade de configuração
2. **Solver customizado em TypeScript** — descartado por performance insuficiente para CSP de grande escala
3. **MiniZinc** — descartado por dificuldade de integração com APIs REST

---

*Decisão tomada pela equipe Ladesa. Confirmada pelo repositório `timetable-generator/`.*
