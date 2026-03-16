---
sidebar_position: 5
title: Requisitos Não-Funcionais
---

# Requisitos Não-Funcionais

Este documento especifica os requisitos não-funcionais (RNFs) do ecossistema Ladesa (SISGHA + SISGEA). Os RNFs são derivados das decisões de arquitetura identificadas no protótipo, nas análises de contexto institucional e nas boas práticas de engenharia de software aplicáveis ao domínio.

Cada RNF apresenta categoria, descrição, métrica quantificável e prioridade.

---

## Performance

### RNF-001 — Tempo de geração automática de horário

**Categoria:** Performance
**Descrição:** A geração automática de grade de horários (solver) deve completar o processamento dentro do limite de tempo aceitável para um campus de até 50 turmas, garantindo resposta ágil ao operador DAPE sem necessidade de sessão de longa espera.
**Medição:** Latência p95 < 60 segundos para grades com até 50 turmas e restrições de disponibilidade completas.
**Prioridade:** Alta

---

### RNF-002 — Tempo de resposta da API

**Categoria:** Performance
**Descrição:** As requisições à API de backend (gestão acadêmica, calendário, horários) devem retornar com latência adequada para garantir fluidez nas interações das telas web e mobile, sem percepção de lentidão pelo usuário final.
**Medição:** Latência p95 < 500 ms para endpoints de leitura; p95 < 1.000 ms para endpoints de escrita.
**Prioridade:** Alta

---

### RNF-003 — Tempo de carregamento de telas

**Categoria:** Performance
**Descrição:** As telas do sistema (web e mobile) devem carregar e renderizar o conteúdo principal dentro de limite aceitável para usuários com conexão institucional padrão, evitando abandono por lentidão.
**Medição:** First Contentful Paint (FCP) < 2 segundos em conexão de 10 Mbps; Time to Interactive (TTI) < 3 segundos.
**Prioridade:** Alta

---

### RNF-004 — Tempo de renderização da grade de horários

**Categoria:** Performance
**Descrição:** A renderização da grade semanal de horários (que pode conter até 6 dias × múltiplos intervalos com cores por disciplina) deve ser suficientemente rápida para não causar travamentos perceptíveis na interface.
**Medição:** Renderização da grade < 1 segundo após recepção dos dados da API; sem jank visual acima de 16 ms por frame.
**Prioridade:** Alta

---

## Disponibilidade

### RNF-005 — Uptime durante período letivo

**Categoria:** Disponibilidade
**Descrição:** O sistema deve estar disponível de forma contínua durante o período letivo, dado que professores e alunos consultam horários e calendários diariamente. Tolerância a manutenções planejadas fora do período letivo.
**Medição:** Disponibilidade ≥ 99,5% durante período letivo (equivale a no máximo ~43 horas de indisponibilidade por ano letivo de 200 dias).
**Prioridade:** Alta

---

### RNF-006 — Tolerância a falhas do solver sem perda de dados

**Categoria:** Disponibilidade
**Descrição:** Caso o processo de geração automática de horário (solver/worker) falhe ou seja interrompido, o sistema não deve perder dados já cadastrados e deve permitir nova tentativa sem efeitos colaterais.
**Medição:** Dados de horário existentes preservados após falha do solver; falha do solver não afeta disponibilidade das demais funcionalidades; recuperação automática ou manual documentada.
**Prioridade:** Alta

---

## Segurança

### RNF-007 — Autenticação via protocolo de identidade federado

**Categoria:** Segurança
**Descrição:** A autenticação de servidores (DAPE e Professor) deve ser centralizada via serviço de identidade compatível com padrão OIDC/OAuth 2.0, evitando gerenciamento próprio de credenciais e aproveitando infraestrutura institucional existente.
**Medição:** 100% das autenticações de servidor passam pelo provedor de identidade configurado; nenhuma senha é armazenada em texto plano na aplicação.
**Prioridade:** Alta

---

### RNF-008 — Controle de acesso baseado em papéis (RBAC)

**Categoria:** Segurança
**Descrição:** Todas as operações do sistema devem ser autorizadas com base no papel do usuário autenticado (DAPE, Professor, ADM_EA). O backend deve validar o papel em cada requisição, independentemente de restrições aplicadas no frontend.
**Medição:** 100% dos endpoints protegidos retornam HTTP 403 para requisições de usuários sem papel adequado; cobertura de testes de autorização > 90% dos endpoints com controle de acesso.
**Prioridade:** Alta

---

### RNF-009 — Proteção contra vulnerabilidades comuns (OWASP Top 10)

**Categoria:** Segurança
**Descrição:** O sistema deve ser desenvolvido e auditado para mitigar as vulnerabilidades mais críticas definidas pelo OWASP Top 10, incluindo injeção, controle de acesso quebrado, exposição de dados sensíveis e outros.
**Medição:** Ausência de vulnerabilidades críticas e altas no relatório de análise SAST/DAST semestral; zero vulnerabilidades OWASP Top 10 em produção.
**Prioridade:** Alta

---

### RNF-010 — Expiração de sessão por inatividade

**Categoria:** Segurança
**Descrição:** Sessões de usuário autenticado devem expirar automaticamente após período de inatividade, reduzindo o risco de acesso não autorizado em dispositivos sem supervisão (laboratórios, computadores compartilhados em campus).
**Medição:** Sessão expira após 30 minutos de inatividade; sistema redireciona para tela de login com mensagem de sessão encerrada.
**Prioridade:** Alta

---

## Usabilidade

### RNF-011 — Interface responsiva com mobile-first para SISGHA Mobile

**Categoria:** Usabilidade
**Descrição:** A interface web deve ser responsiva e adaptada a diferentes tamanhos de tela. O aplicativo SISGHA Mobile deve ser desenvolvido com abordagem mobile-first, priorizando a experiência em telas pequenas de smartphones utilizados por alunos e professores.
**Medição:** Interface web funcional e legível em resoluções de 375 px a 1440 px de largura; aplicativo mobile aprovado em testes de usabilidade com dispositivos Android (10+) e iOS (15+).
**Prioridade:** Alta

---

### RNF-012 — Acessibilidade WCAG 2.1 nível AA

**Categoria:** Usabilidade
**Descrição:** As interfaces web do sistema devem atender ao nível AA das diretrizes WCAG 2.1, garantindo acessibilidade para usuários com deficiências visuais, motoras ou cognitivas em ambiente educacional inclusivo.
**Medição:** Zero violações de critérios de sucesso AA nas auditorias automatizadas (axe-core ou similar) para as telas principais; contraste de texto ≥ 4,5:1 (texto normal) e ≥ 3:1 (texto grande).
**Prioridade:** Média

---

### RNF-013 — Suporte a tema claro e escuro

**Categoria:** Usabilidade
**Descrição:** O sistema deve oferecer tema claro e escuro em ambas as plataformas (web e mobile), respeitando a preferência do sistema operacional do usuário como padrão inicial e permitindo troca manual a qualquer momento.
**Medição:** Tema detectado automaticamente via `prefers-color-scheme`; troca manual disponível em 100% das telas; nenhum elemento visual com contraste inadequado em ambos os temas.
**Prioridade:** Média

---

### RNF-014 — Feedback visual para operações de longa duração

**Categoria:** Usabilidade
**Descrição:** Operações que levam mais de 1 segundo (como geração de horário, carregamento de relatório ou upload) devem exibir indicador visual de progresso (loading/spinner/barra) para evitar percepção de sistema travado pelo usuário.
**Medição:** 100% das operações com tempo > 1 segundo exibem indicador de progresso; indicador desaparece ao concluir ou falhar.
**Prioridade:** Alta

---

## Escalabilidade

### RNF-015 — Suporte a usuários simultâneos

**Categoria:** Escalabilidade
**Descrição:** O sistema deve suportar carga simultânea de múltiplos usuários, especialmente em períodos de pico como início de semestre (DAPE configurando horários) e início de aulas (alunos consultando horários).
**Medição:** Sistema mantém latência p95 < 500 ms com 500 usuários simultâneos ativos em testes de carga; sem degradação de disponibilidade abaixo de 99% durante pico.
**Prioridade:** Média

---

### RNF-016 — Suporte a múltiplas turmas por campus

**Categoria:** Escalabilidade
**Descrição:** O sistema deve suportar o volume de turmas de um campus do IFRO sem degradação funcional, incluindo geração de horários, exibição de grades e filtragens em listagens.
**Medição:** Sistema opera sem erros ou degradação perceptível com até 200 turmas por campus cadastradas; tempo de geração automática dentro do limite do RNF-001.
**Prioridade:** Média

---

## Manutenibilidade

### RNF-017 — Cobertura de testes automatizados

**Categoria:** Manutenibilidade
**Descrição:** O código do sistema (backend e frontend) deve manter cobertura adequada de testes automatizados (unitários e de integração) para garantir segurança nas refatorações e na adição de novas funcionalidades sem regressões.
**Medição:** Cobertura de testes > 80% nas linhas de código do backend (management-service); cobertura > 70% nas funções críticas do frontend (SISGHA-Web).
**Prioridade:** Média

---

### RNF-018 — Documentação de API via contrato tipado

**Categoria:** Manutenibilidade
**Descrição:** Todos os contratos de API entre frontend e backend devem ser definidos e documentados via linguagem de especificação tipada (TypeSpec), garantindo consistência entre a definição e a implementação e facilitando a geração de clientes e documentação.
**Medição:** 100% dos endpoints públicos da API documentados via TypeSpec com tipos válidos; schema de API gerado automaticamente a partir do TypeSpec sem divergências com a implementação.
**Prioridade:** Média

---

## Compatibilidade

### RNF-019 — Compatibilidade com navegadores modernos

**Categoria:** Compatibilidade
**Descrição:** As interfaces web do sistema devem funcionar corretamente nas últimas duas versões lançadas dos principais navegadores utilizados em ambiente institucional, sem polyfills extensivos ou degradação de funcionalidade.
**Medição:** Funcionalidade completa e sem erros de console nas últimas 2 versões estáveis de Chrome, Firefox e Safari; testes E2E executados nesses navegadores no pipeline de CI.
**Prioridade:** Alta

---

### RNF-020 — Compatibilidade com sistemas operacionais mobile

**Categoria:** Compatibilidade
**Descrição:** O aplicativo SISGHA Mobile deve ser compatível com as versões de sistemas operacionais móveis utilizados pela comunidade escolar (alunos e professores), abrangendo tanto dispositivos Android quanto iOS de geração recente e intermediária.
**Medição:** Aplicativo funcional sem erros críticos em Android 10 ou superior e iOS 15 ou superior; testes executados em dispositivos físicos e emuladores dessas versões mínimas.
**Prioridade:** Alta

---

## Resumo

| ID | Categoria | Prioridade |
|---|---|---|
| RNF-001 | Performance | Alta |
| RNF-002 | Performance | Alta |
| RNF-003 | Performance | Alta |
| RNF-004 | Performance | Alta |
| RNF-005 | Disponibilidade | Alta |
| RNF-006 | Disponibilidade | Alta |
| RNF-007 | Segurança | Alta |
| RNF-008 | Segurança | Alta |
| RNF-009 | Segurança | Alta |
| RNF-010 | Segurança | Alta |
| RNF-011 | Usabilidade | Alta |
| RNF-012 | Usabilidade | Média |
| RNF-013 | Usabilidade | Média |
| RNF-014 | Usabilidade | Alta |
| RNF-015 | Escalabilidade | Média |
| RNF-016 | Escalabilidade | Média |
| RNF-017 | Manutenibilidade | Média |
| RNF-018 | Manutenibilidade | Média |
| RNF-019 | Compatibilidade | Alta |
| RNF-020 | Compatibilidade | Alta |

**Total:** 20 RNFs | Alta: 13 (65%) | Média: 7 (35%)
