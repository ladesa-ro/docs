---
sidebar_position: 1
sidebar_label: Visão Geral
---

# Geração de Horário — Visão Geral

A geração automatizada de grade horária é a **funcionalidade central do SISGHA** e a principal razão de existência do projeto Ladesa. Substitui o processo manual anterior que levava dias e produzia resultados inconsistentes.

## Épico

**EP-SISGHA-GH-001** — Geração automatizada de grade horária

**Fonte:** Relatório de levantamento NotebookLM, Seção 4.

## Funcionalidades-chave

| Funcionalidade | Descrição | Origem |
|---|---|---|
| Três turnos nativos | Linha do tempo contínua 07:30–22:30 sem entidades artificiais | DAPE Jaru, BR-SISGHA-007 |
| Pinning | Células editadas manualmente são protegidas contra regeneração | DAPE Jaru [01:18], BR-SISGHA-006 |
| Geração assíncrona | Background job via RabbitMQ — usuário não bloqueado | ADR-006, RNF-PERF-002 |
| Log de conflitos | Se o solver falhar, exibe motivo detalhado (transparência) | BR-SISGHA-008 |
| Aulas germinadas | Configurável por nível de ensino (EM separadas, graduação germinadas) | BR-SISGHA-003 (DSC-007) |
| Sábado letivo dinâmico | Sábado mapeável para qualquer dia da semana | BR-SISGHA-005 |
| Importação SUAP/CSV | Importar vínculos e matrizes de fontes externas | DSC-008 |
| Drag & drop | Edição visual da grade com validação instantânea de choques | DAPE Ji-Paraná |
| Relatório PDF | Geração de relatórios individuais por professor e por turma | DAPE Ji-Paraná |
| Alerta multi-turno | Aviso quando professor está em M+N no mesmo dia | BR-SISGHA-001 |
