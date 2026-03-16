---
sidebar_position: 8
title: Revisões e Pendências
---

# Revisões e Pendências

Este documento registra as decisões tomadas durante o processo de documentação, as lacunas identificadas nas fontes analisadas, as inconsistências detectadas e os itens que requerem validação com stakeholders.

---

## Decisões de Documentação

As decisões a seguir foram tomadas durante o processo de discovery e produção dos artefatos, com base nas fontes primárias (protótipo Figma, regras de negócio e features identificadas).

### D-001 — Agrupamento de features em 8 epics

O arquivo de features lista 45 features sem agrupamento por epic. A organização em 8 epics (E-001 a E-008) foi derivada pelos domínios funcionais evidentes no protótipo e no índice de módulos dos requisitos funcionais. A correspondência entre epics e módulos de RFs é deliberada para facilitar a navegação.

### D-002 — Derivação de RNFs a partir de contexto e arquitetura

O arquivo `non_functional.txt` foi identificado como vazio ou inexistente nas fontes de análise. Os 20 RNFs foram derivados a partir de:
- Decisões de tecnologia visíveis na implementação (Nuxt 4, TypeSpec, Keycloak/OIDC, Pinia)
- Restrições de domínio explícitas nas regras (RN-07: sem módulo DAPE no mobile; RNF-001: geração < 60s)
- Boas práticas aplicáveis ao contexto educacional institucional
- Referência cruzada com os RFs e casos de uso que implicam restrições não-funcionais

### D-003 — Critérios Gherkin derivados das descrições e regras

Os critérios de aceitação Gherkin foram derivados das descrições dos RFs combinadas com as regras de negócio associadas. Nenhum critério foi copiado literalmente de fontes existentes — todos foram construídos para expressar o comportamento esperado de forma verificável. Critérios que envolvem comportamento complexo (ex: RF-029 — modo mesclado, RF-037 — escopo de edição) foram elaborados para refletir a semântica das regras críticas RN-09 e RN-15.

### D-004 — Tratamento do aluno como ator, não entidade CRUD

O Aluno não possui cadastro no sistema — é um consumidor anônimo. Esta decisão de produto (RN-02) foi mantida na documentação: o Aluno não aparece nos módulos de gestão de entidades, e os RFs relacionados ao Aluno são exclusivamente de consulta (horário, calendário, notificações).

### D-005 — Não referenciar sistemas comerciais por nome

Por orientação de memória do projeto, nenhuma referência a sistemas comerciais existentes anteriores ao Ladesa foi incluída na documentação. Referências contextuais ao cenário anterior ao sistema utilizam os termos "sistema anterior" ou "solução legada".

### D-006 — Separação entre SISGHA e SISGEA na rastreabilidade

SISGHA (140 RFs) e SISGEA (15 RFs) foram tratados como sistemas distintos ao longo da documentação, refletindo a fronteira organizacional (RN-08: sistemas com logins independentes). Há integração de dados entre eles — por exemplo, disponibilidade de salas do SISGEA é consultada pelo SISGHA na geração de horários.

### D-007 — Matrícula RF → UC via referências do arquivo functional.txt

A rastreabilidade RF → UC foi derivada diretamente das referências explícitas presentes em cada RF no arquivo `functional.txt` (campo `UC:`). A rastreabilidade RF → CAP e RF → RN seguiu a mesma lógica. Para RFs com referência "Transversal", a associação foi mantida como transversal na matriz.

---

## Lacunas Identificadas

As lacunas a seguir foram identificadas durante o discovery e representam funcionalidades ou informações ausentes nas fontes analisadas.

### L-001 — Arquivo non_functional.txt vazio

O arquivo de requisitos não-funcionais nas fontes de análise não continha especificações. Os RNFs foram inteiramente derivados pelo agente (veja D-002). **Ação requerida:** validar os 20 RNFs com stakeholders técnicos e de produto antes da implementação.

### L-002 — Fluxo de recuperação de senha não prototipado

A RN-65 e o RF-013 documentam que o link de recuperação de senha existe em todas as telas de login, mas o fluxo pós-clique não está prototipado. O comportamento esperado (envio de e-mail, redefinição de senha, expiração de token) é desconhecido. **Ação requerida:** definir e prototipar o fluxo de recuperação de senha com o time de produto.

### L-003 — Tela de Configurações do SISGEA sem conteúdo definido

O RF-155 documenta que a tela de Configurações existe na sidebar do SISGEA, mas não está prototipada. As funcionalidades que devem constar nessa tela são desconhecidas. **Ação requerida:** definir o escopo da tela de Configurações do SISGEA com o administrador de ambientes.

### L-004 — Perfil do Aluno mobile não prototipado

O aplicativo mobile possui tela de Perfil no menu de navegação inferior, mas o perfil do Aluno não está prototipado (apenas o do Professor). Como o Aluno é um consumidor anônimo (L-001 de design), não está claro se há perfil para o Aluno no mobile. **Ação requerida:** confirmar se o Aluno no mobile deve ter tela de perfil e, em caso positivo, definir seu conteúdo.

### L-005 — Ausência de CRUD de Campus no protótipo

A entidade Campus aparece em múltiplas telas como contexto (badge no header, filtros), mas não há tela de gestão de Campus no protótipo. O campus é tratado como entidade de referência gerenciada externamente. **Ação requerida:** confirmar se o gerenciamento de Campus deve ser incluído no escopo do SISGHA ou permanece como entidade provisionada por sistema externo.

### L-006 — Mecanismo de entrega de notificações não especificado

O RF-122 e o RF-123 documentam que o sistema gera notificações automáticas, mas o mecanismo de entrega (WebSocket, Server-Sent Events, polling, push notification mobile) não está especificado no protótipo. **Ação requerida:** definir a tecnologia de entrega de notificações com o time de desenvolvimento.

### L-007 — Modelo de dados de Aula (célula de horário) não detalhado

A entidade "Aula (Célula de Horário)" aparece na grade mas seus atributos exatos (disciplina, professor vinculado, sala, tipo) não foram completamente detalhados nas fontes. O protótipo exibe os dados nos cards mas não há especificação formal do modelo. **Ação requerida:** detalhar o modelo de dados da entidade Aula com o time técnico.

---

## Inconsistências Detectadas

### I-001 — RN-09 vs. RN-15: semântica de "permanente"

A RN-09 afirma que "edições de horário afetam apenas a semana em edição, mesmo que marcadas como permanentes". A RN-15 afirma que "ao salvar, o DAPE escolhe entre permanente (persiste além da semana) e temporário (apenas esta semana)". Há aparente contradição: se "permanente" significa "persiste além da semana" (RN-15), mas também "afeta apenas a semana" (RN-09), a distinção entre os dois modos não é clara.

**Interpretação adotada na documentação:** O RF-037 documenta que ambos os escopos afetam apenas a semana em edição — a distinção entre "permanente" e "temporário" provavelmente se refere ao comportamento interno de persistência (ex: "temporário" é descartado automaticamente; "permanente" é mantido como exceção da semana). Para alterações globais reais, o DAPE deve usar os CRUDs. **Ação requerida:** confirmar com produto a semântica exata dos dois modos de salvamento.

### I-002 — Visibilidade do horário de outros professores pelo Professor

A RN-01 documenta que "a discussão sobre o Professor poder visualizar horários de outros professores está em aberto". O RF-008 implementa a política restritiva (Professor vê apenas o próprio horário e turmas vinculadas), mas a sidebar do Professor não inclui item de "Horários de outros". **Ação requerida:** confirmar com produto se o Professor deve ter acesso à consulta de horários de colegas e, em caso positivo, incluir RF específico.

### I-003 — Cobertura parcial de regras de negócio com impacto médio/baixo em RFs

Das 67 regras, as de impacto CRÍTICO (13) e ALTO (23) têm cobertura de 100% nos RFs. Das 16 regras de impacto MÉDIO, 12 têm RF direto. Das 15 regras de impacto BAIXO, 10 têm RF direto. As demais estão cobertas implicitamente ou representam detalhes de UI sem necessidade de RF próprio.

---

## Pendências para Validação com Stakeholders

| ID | Item | Responsável sugerido | Urgência |
|---|---|---|---|
| PV-001 | Validar os 20 RNFs (métricas quantitativas) com arquiteto técnico | Arquiteto / Engenharia | Alta |
| PV-002 | Definir fluxo de recuperação de senha (L-002) | Produto / Engenharia | Alta |
| PV-003 | Confirmar semântica de "permanente" vs. "temporário" na edição de horário (I-001) | Produto / DAPE | Alta |
| PV-004 | Confirmar se Professor visualiza horários de outros professores (I-002) | Produto / DAPE | Média |
| PV-005 | Definir conteúdo da tela de Configurações do SISGEA (L-003) | Produto / ADM_EA | Média |
| PV-006 | Confirmar existência e conteúdo do perfil do Aluno no mobile (L-004) | Produto | Média |
| PV-007 | Confirmar gerenciamento de Campus: interno ou externo (L-005) | Produto / TI Institucional | Média |
| PV-008 | Definir tecnologia de entrega de notificações (L-006) | Engenharia | Média |
| PV-009 | Detalhar modelo de dados da entidade Aula (L-007) | Engenharia | Baixa |
| PV-010 | Validar prioridades P1/P2/P3 dos 155 RFs com product owner | Produto | Alta |
| PV-011 | Validar agrupamento de features em 8 epics (D-001) com product owner | Produto | Baixa |
| PV-012 | Confirmar integração futura reserva de sala ↔ horário (07-integracao.md) | Produto | Baixa |

---

## Checklist de Qualidade da Documentação

### Requisitos Funcionais

- [x] 155 RFs documentados com título, descrição e critério Gherkin
- [x] Todos os 155 RFs têm prioridade P1/P2/P3 atribuída
- [x] Todos os 155 RFs têm sistema responsável identificado (SISGHA-Web / Mobile / SISGEA-Web)
- [x] Todos os 155 RFs têm rastreabilidade para UC, CAP e/ou RN quando aplicável
- [x] Módulos organizados conforme índice do arquivo fonte (8 módulos)
- [x] Estatísticas de cobertura documentadas (P1: 97, P2: 44, P3: 14)

### Casos de Uso

- [x] 46 UCs referenciados na rastreabilidade
- [x] Todos os UCs têm pelo menos um RF associado
- [x] Cobertura de 100% dos UCs confirmada no documento de rastreabilidade

### Regras de Negócio

- [x] 67 RNs referenciadas na rastreabilidade
- [x] 66 RNs com RF direto associado
- [x] 1 RN sem impacto funcional identificada e justificada (RN-66: branding)
- [x] Regras de impacto CRÍTICO (13) com cobertura de 100%

### Requisitos Não-Funcionais

- [x] 20 RNFs criados cobrindo 7 categorias
- [x] Todos os RNFs têm métrica quantificável
- [x] Lacuna do arquivo non_functional.txt documentada (L-001)
- [ ] RNFs validados com arquiteto técnico (PV-001 — pendente)

### Rastreabilidade

- [x] Matriz Epic → CAP → UC → US → RF → RN documentada
- [x] Índice de referência cruzada RN → RF documentado
- [x] Análise de órfãos realizada
- [x] Estatísticas de cobertura documentadas

### Integração

- [x] Fronteiras de sistema documentadas (4 sistemas + 2 serviços de suporte)
- [x] Diagrama Mermaid de fluxo de dados criado
- [x] Fluxos de integração identificados no protótipo documentados (5 fluxos)
- [x] Integrações futuras potenciais documentadas (4 integrações)
- [x] Contratos de API documentados com grupos de endpoints
- [x] Mensagens entre serviços documentadas (5 mensagens)

### Revisões

- [x] Decisões de documentação registradas (D-001 a D-007)
- [x] Lacunas identificadas e documentadas (L-001 a L-007)
- [x] Inconsistências documentadas com interpretação adotada (I-001 a I-003)
- [x] Pendências para validação listadas com responsável e urgência (PV-001 a PV-012)

---

## Histórico de Revisões

| Versão | Data | Descrição |
|---|---|---|
| 1.0 | 2026-03-16 | Versão inicial — gerada via discovery completo do protótipo Figma, regras de negócio e features do sistema |
