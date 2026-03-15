---
sidebar_position: 1
sidebar_label: Visão Geral do Projeto
---

# Visão Geral do Projeto Ladesa

## O que é o Ladesa

O **Ladesa** (Laboratório de Desenvolvimento de Softwares Acadêmicos) é um projeto de **pesquisa e soberania tecnológica** do IFRO Campus Ji-Paraná. Seu objetivo é desenvolver uma solução **gratuita e open-source** para substituir o sistema comercial usado atualmente para geração de horários acadêmicos no IFRO.

## Por que o Ladesa existe

O sistema comercial anterior apresenta limitações críticas para a realidade dos Institutos Federais:

| Limitação do sistema anterior | Impacto no IFRO | Solução no Ladesa |
|---|---|---|
| **Sem suporte a três turnos** | DAPE cria entidades artificiais ("Matutino" e "Vespertinho") para simular Manhã/Tarde/Noite, duplicando cadastros | Suporte nativo a 3 turnos com linha do tempo contínua (07:30–22:30) |
| **Sem pinning de células** | Qualquer nova geração "embaralha" tudo, inclusive o que já estava correto | Travamento (pinning) de células editadas manualmente, protegidas de regeneração |
| **Sem auto-save** | Salvamento manual causa perda de dados e "paranoia" nos operadores | Salvamento automático com transações atômicas |
| **Isolado do SUAP e do SISGEA** | Não conversa com gestão de salas nem com o sistema acadêmico do IFRO — ilhas de informação | Integração nativa entre SISGHA, SISGEA e SUAP |
| **Excel como muleta** | DAPE exporta para planilha para detectar choques manualmente | Validação instantânea de conflitos com log de motivos |

> *"A gente já passou por tanto susto nesse horário que a gente fica... melhor não mexer."* — DAPE Jaru

> *"A gente perdeu tanto tempo cadastrando tanta informação que talvez fosse melhor fazer manual."* — DAPE Jaru

## Os dois sistemas

O Ladesa é composto por dois sistemas integrados:

### SISGHA — Sistema de Geração de Horário Acadêmico

Automatiza a geração de grades horárias respeitando as restrições pedagógicas do IFRO: três turnos nativos, aulas germinadas por nível de ensino, PRD, contraturno de Educação Física, sábado letivo dinâmico. Permite edição manual segura com pinning e transparência algorítmica (logs de conflito em tempo real).

O solver de otimização utiliza **Google OR-Tools CP-SAT** (constraint programming) implementado em C#.

### SISGEA — Sistema de Gestão de Ambientes Acadêmicos

Gerencia blocos e ambientes físicos (salas, laboratórios, auditórios) do campus. Integrado ao SISGHA para validar disponibilidade de sala antes de confirmar alocações na grade.

## Plataformas

| Plataforma | Público | Funcionalidades |
|---|---|---|
| **Web** (Nuxt 4) | DAPE, Professor, Aluno | Todas as funcionalidades — geração, edição, consulta, gestão acadêmica, calendário |
| **Mobile** (Flutter) | Professor, Aluno | Consulta de horário, calendário, disponibilidade, notificações |

## Documentos desta seção

- [Glossário do Domínio](./glossario) — Terminologia oficial do IFRO usada no sistema
- [Stack Tecnológica](./stack-tecnologica) — Repositórios, tecnologias e infraestrutura
- [Perfis de Usuário](./perfis-de-usuario) — Quem usa o sistema e como
- [Modelo de Domínio](./modelo-de-dominio) — Entidades, relacionamentos e máquinas de estado
- [Matriz de Rastreabilidade](./matriz-rastreabilidade) — Rastreio entre artefatos (EP → US → RF → UC → BDD → UI)

---

*Fonte: Relatório de levantamento NotebookLM, Seções 1, 3 e 9.*
