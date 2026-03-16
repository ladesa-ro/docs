---
sidebar_position: 2
sidebar_label: Sistemas
---

# Sistemas do Ladesa

O Ladesa desenvolve sistemas para resolver problemas da comunidade acadêmica do IFRO — campi Ji-Paraná e Jaru. Todos os serviços são gratuitos e de código aberto.

## SISGHA — Sistema de Geração de Horário Acadêmico

O SISGHA automatiza a geração de grades horárias respeitando as restrições pedagógicas do IFRO. O sistema resolve limitações identificadas no levantamento de requisitos com os operadores do DAPE dos campi Jaru e Ji-Paraná, como a falta de suporte nativo a três turnos, a ausência de travamento de células editadas manualmente e a geração em caixa-preta sem log de conflitos.

O solver de otimização utiliza **Google OR-Tools CP-SAT** (constraint programming) implementado em C#.

## SISGEA — Sistema de Gestão de Ambientes Acadêmicos

O SISGEA gerencia blocos e ambientes físicos (salas, laboratórios, auditórios) do campus, com integração ao SISGHA para validar disponibilidade de sala antes de confirmar alocações na grade.

## Plataformas

| Plataforma | Público | Escopo |
|---|---|---|
| **Web** (Nuxt 4) | DAPE, Professor, Aluno | Todas as funcionalidades — geração, edição, consulta, gestão acadêmica, calendário |
| **Mobile** (Flutter) | Professor, Aluno | Consulta de horário, calendário, disponibilidade (somente leitura), notificações |

## Saiba mais

Para detalhes sobre requisitos, regras de negócio e especificações, consulte a seção de [Produto & Requisitos](../produto/visao-geral).
