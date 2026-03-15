---
sidebar_position: 2
sidebar_label: Sistemas
---

# Sistemas do Ladesa

O Ladesa visa desenvolver sistemas que resolvam problemas da comunidade acadêmica. Todos os serviços são gratuitos e podem ser aderidos por qualquer instituição de ensino.

## SISGHA — Sistema de Geração de Horário Acadêmico

O SISGHA está sendo desenvolvido para automatizar a geração de grades horárias respeitando as restrições pedagógicas do IFRO. O sistema busca resolver limitações identificadas no levantamento de requisitos com os operadores do DAPE dos campi Jaru e Ji-Paraná, como a falta de suporte nativo a três turnos, a ausência de travamento de células editadas manualmente e a geração em caixa-preta sem log de conflitos.

O solver de otimização utiliza **Google OR-Tools CP-SAT** (constraint programming) implementado em C#.

> *Fonte: Relatório de levantamento NotebookLM, Seções 1, 3 e 9.*

## SISGEA — Sistema de Gestão de Ambientes Acadêmicos

O SISGEA está sendo desenvolvido para gerenciar blocos e ambientes físicos (salas, laboratórios, auditórios) do campus, com integração ao SISGHA para validar disponibilidade de sala antes de confirmar alocações na grade.

## Plataformas

| Plataforma | Público | Escopo |
|---|---|---|
| **Web** (Nuxt 4) | DAPE, Professor, Aluno | Todas as funcionalidades — geração, edição, consulta, gestão acadêmica, calendário |
| **Mobile** (Flutter) | Professor, Aluno | Consulta de horário, calendário, disponibilidade, notificações |

## Saiba mais

Para detalhes sobre requisitos, regras de negócio e especificações, consulte a seção de [Requisitos](../requirements/visao-geral/index.md).

---

*Fonte: Relatório de levantamento NotebookLM, Seções 1, 3 e 9; Protótipo Figma SISGHA V2.0.*
