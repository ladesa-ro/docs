---
sidebar_position: 1
sidebar_label: Requisitos Não-Funcionais
---

# Requisitos Não-Funcionais

Organizados conforme a ISO 25010:2023 (System and Software Quality Models). Requisitos marcados com 📋 têm origem direta no relatório de levantamento NotebookLM.

---

## Performance Efficiency

### RNF-PERF-001 — Tempo de resposta da API

| Campo | Valor |
|---|---|
| **Categoria ISO** | Performance Efficiency → Time Behaviour |
| **Métrica** | Tempo de resposta P95 para endpoints REST do management-service |
| **Valor-alvo** | ≤ 500ms para operações de leitura; ≤ 1000ms para operações de escrita |
| **Verificação** | Testes de carga com k6 ou Artillery |
| **Prioridade** | Alta |

### RNF-PERF-002 — 📋 Geração de horário em background job

| Campo | Valor |
|---|---|
| **Categoria ISO** | Performance Efficiency → Time Behaviour |
| **Métrica** | A interface do usuário permanece responsiva durante toda a geração |
| **Valor-alvo** | Geração é 100% assíncrona — usuário pode navegar normalmente durante o processamento |
| **Verificação** | Teste funcional: iniciar geração, navegar para outra tela, verificar que a aplicação responde normalmente |
| **Prioridade** | Essencial |
| **Origem** | Relatório NotebookLM, Seção 6 — RNF-004 |

> No sistema anterior, a geração leva 20-30 minutos e bloqueia a interface. O SISGHA resolve isso com background job via RabbitMQ (ADR-006).

### RNF-PERF-003 — Tempo de carregamento do frontend

| Campo | Valor |
|---|---|
| **Categoria ISO** | Performance Efficiency → Time Behaviour |
| **Métrica** | Largest Contentful Paint (LCP) em conexão 4G |
| **Valor-alvo** | ≤ 2.5s (classificação "Good" pelo Core Web Vitals) |
| **Verificação** | Lighthouse, PageSpeed Insights |
| **Prioridade** | Média |

---

## Reliability

### RNF-REL-001 — Disponibilidade

| Campo | Valor |
|---|---|
| **Categoria ISO** | Reliability → Availability |
| **Métrica** | Uptime mensal do sistema em produção |
| **Valor-alvo** | ≥ 99% (≤ 7.3h de downtime por mês) |
| **Verificação** | Monitoramento com Prometheus/Grafana ou equivalente |
| **Prioridade** | Alta |

### RNF-REL-002 — 📋 Salvamento automático e transações atômicas

| Campo | Valor |
|---|---|
| **Categoria ISO** | Reliability → Fault Tolerance |
| **Métrica** | Nenhuma perda de dados em edição longa (ex: edição de grade por 30+ minutos) |
| **Valor-alvo** | Toda operação de escrita é atômica e persistida automaticamente — sem botão "Salvar" manual |
| **Verificação** | Teste: editar grade por 30 min, simular queda de conexão, verificar que dados foram preservados |
| **Prioridade** | Essencial |
| **Origem** | Relatório NotebookLM, Seção 6 — RNF-002. Origem direta: "susto" relatado pelo DAPE Jaru sobre perda de dados no sistema anterior |

> *"A gente já passou por tanto susto nesse horário que a gente fica... melhor não mexer."* — DAPE Jaru

### RNF-REL-003 — Tolerância a falhas na geração

| Campo | Valor |
|---|---|
| **Categoria ISO** | Reliability → Fault Tolerance |
| **Métrica** | Mensagens de geração que falham são retentadas automaticamente |
| **Valor-alvo** | Dead letter queue configurada com 3 retries antes de marcar como ERRO |
| **Verificação** | Teste: simular falha do timetable-generator durante processamento, verificar retry automático |
| **Prioridade** | Alta |

---

## Security

### RNF-SEC-001 — Autenticação SSO e controle de acesso

| Campo | Valor |
|---|---|
| **Categoria ISO** | Security → Authenticity + Authorization |
| **Métrica** | 100% dos endpoints protegidos por token OAuth2/OIDC |
| **Valor-alvo** | Nenhum endpoint de API acessível sem autenticação válida (exceto health check) |
| **Verificação** | Teste de penetração automatizado, audit de rotas sem guard |
| **Prioridade** | Essencial |

### RNF-SEC-002 — Segurança de dados acadêmicos

| Campo | Valor |
|---|---|
| **Categoria ISO** | Security → Confidentiality |
| **Métrica** | Dados acadêmicos (notas, frequência, dados pessoais) criptografados em trânsito e em repouso |
| **Valor-alvo** | TLS 1.3 para comunicação; criptografia de disco no PostgreSQL em produção |
| **Verificação** | Scan TLS (Qualys SSL Labs), verificação de configuração do banco |
| **Prioridade** | Alta |

---

## Maintainability

### RNF-MNT-001 — Cobertura de testes automatizados

| Campo | Valor |
|---|---|
| **Categoria ISO** | Maintainability → Testability |
| **Métrica** | Cobertura de código por testes automatizados |
| **Valor-alvo** | ≥ 70% de line coverage no management-service; ≥ 60% no timetable-generator |
| **Verificação** | Relatório de cobertura (Jest/Vitest para TS, dotnet test para C#) |
| **Prioridade** | Média |

---

## Interaction Capability

### RNF-INT-001 — 📋 Interface responsiva para consulta mobile

| Campo | Valor |
|---|---|
| **Categoria ISO** | Interaction Capability → User Interface Aesthetics |
| **Métrica** | Todas as telas de consulta (horário, calendário) são usáveis em telas ≥ 375px de largura |
| **Valor-alvo** | Layout adaptativo sem scroll horizontal em dispositivos móveis |
| **Verificação** | Teste manual em viewport 375×667 (iPhone SE) e 360×800 (Android médio) |
| **Prioridade** | Alta |
| **Origem** | Relatório NotebookLM, Seção 6 — RNF-003 |

### RNF-INT-002 — Acessibilidade WCAG 2.1 AA

| Campo | Valor |
|---|---|
| **Categoria ISO** | Interaction Capability → Accessibility |
| **Métrica** | Conformidade com WCAG 2.1 nível AA |
| **Valor-alvo** | 0 violações nível A ou AA detectadas por ferramentas automatizadas |
| **Verificação** | axe-core, Lighthouse Accessibility Score ≥ 90 |
| **Prioridade** | Média |

---

## Flexibility / Scalability

### RNF-FLX-001 — 📋 SPA para gerenciar estado complexo da grade

| Campo | Valor |
|---|---|
| **Categoria ISO** | Flexibility → Adaptability |
| **Métrica** | A aplicação web opera como SPA sem reload de página durante operações de edição de grade |
| **Valor-alvo** | Navegação entre telas de edição de horário sem perda de estado (Pinia) |
| **Verificação** | Teste: editar grade, navegar para outra tela, voltar, verificar que o estado foi preservado |
| **Prioridade** | Alta |
| **Origem** | Relatório NotebookLM, Seção 6 — RNF-001 |

### RNF-FLX-002 — Escalabilidade horizontal do management-service

| Campo | Valor |
|---|---|
| **Categoria ISO** | Flexibility → Scalability |
| **Métrica** | O management-service pode rodar em múltiplas réplicas sem estado local |
| **Valor-alvo** | Stateless — sessão no Redis, sem arquivos locais temporários |
| **Verificação** | Teste: rodar 2+ réplicas, verificar que requests são distribuídos corretamente |
| **Prioridade** | Baixa (futuro — escala atual não demanda) |

---

*Fonte: Relatório de levantamento NotebookLM, Seção 6 — Requisitos Não-Funcionais. ISO 25010:2023.*
