---
sidebar_position: 0
title: User Stories
---

# User Stories

Índice de todas as user stories derivadas dos casos de uso e features do ecossistema Ladesa (SISGHA + SISGEA). As histórias estão organizadas por módulo funcional e numeradas sequencialmente de US-001 a US-117.

## Módulos

| Módulo | Arquivo | Histórias |
|--------|---------|-----------|
| Autenticação e Acesso | [autenticacao.md](./autenticacao.md) | US-001 a US-014 |
| Gestão de Horário | [horario.md](./horario.md) | US-015 a US-041 |
| Gestão Acadêmica | [gestao-academica.md](./gestao-academica.md) | US-042 a US-065 |
| Calendário Acadêmico | [calendario.md](./calendario.md) | US-066 a US-083 |
| Registros e Relatórios | [registro-relatorio.md](./registro-relatorio.md) | US-084 a US-092 |
| Perfil e Comunicação | [perfil-comunicacao.md](./perfil-comunicacao.md) | US-093 a US-103 |
| Navegação e Experiência | [navegacao-experiencia.md](./navegacao-experiencia.md) | US-104 a US-111 |
| SISGEA — Gestão de Ambientes | [sisgea.md](./sisgea.md) | US-112 a US-117 |

## Atores

| Sigla | Descrição |
|-------|-----------|
| **ALU** | Aluno — acesso anônimo (sem autenticação) |
| **PROF** | Professor — servidor autenticado com papel docente |
| **DAPE** | Servidor com papel de gestão acadêmica e de horários |
| **ADM_EA** | Administrador de Espaços e Ambientes (SISGEA) |

## Convenções de Prioridade

- **Alta** — essencial ao funcionamento do sistema
- **Média** — funcionalidade importante, pode ser entregue em fase posterior
- **Baixa** — melhoria de experiência ou funcionalidade complementar

## Rastreabilidade

Cada user story referencia os artefatos de origem:

- `UC-XXX` → Caso de uso
- `C-XXX` → Feature do sistema
- `RF-XXX` → Requisito funcional
