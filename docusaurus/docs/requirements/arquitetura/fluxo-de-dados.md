---
sidebar_position: 10
sidebar_label: Fluxo de Dados
---

# DOC-011 — Fluxo de Dados

## Fluxo completo: do cadastro à grade publicada

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. CADASTRO DE DADOS MESTRES (DAPE via web)                      │
│                                                                   │
│    Campus → Blocos → Ambientes                                   │
│    Ofertas de Formação → Períodos → Etapas                       │
│    Cursos → Turmas → Disciplinas                                  │
│    Usuários → Perfis (professor com cargo e campus)               │
│    Diários (turma + disciplina + calendário)                      │
│    Diário-Professor (professor vinculado ao diário)               │
│                                                                   │
│    Nuxt ──HTTP──► management-service ──TypeORM──► PostgreSQL      │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ 2. CONFIGURAÇÃO DE PARÂMETROS (DAPE via web)                     │
│                                                                   │
│    Horários de aula por campus (horario_aula_configuracao)        │
│    Slots de turma (turma_horario_aula)                            │
│    Preferências de agrupamento/germinação (diario_preferencia)    │
│    Disponibilidade de professores (calendario_agendamento)        │
│    Calendário letivo com dias letivos e etapas                    │
│                                                                   │
│    Nuxt ──HTTP──► management-service ──TypeORM──► PostgreSQL      │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ 3. SOLICITAÇÃO DE GERAÇÃO (DAPE via web)                         │
│                                                                   │
│    DAPE seleciona: ofertas + calendários + tipo (PERM/TEMP)       │
│                                                                   │
│    Nuxt ──POST──► management-service                              │
│         │                                                         │
│         │  Cria registro gerar_horario (status: SOLICITADO)       │
│         │  Monta requisicao_gerador (JSONB) com:                  │
│         │    - diários e vínculos no escopo                       │
│         │    - slots de horário disponíveis                       │
│         │    - constraints (PRD, germinação, turnos, pinning)     │
│         │    - ambientes disponíveis (via SISGEA)                 │
│         │                                                         │
│         └──RabbitMQ──► fila de geração                            │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ 4. PROCESSAMENTO DO SOLVER (timetable-generator)                 │
│                                                                   │
│    Consome mensagem da fila RabbitMQ                              │
│    Status atualiza para PENDENTE                                  │
│                                                                   │
│    OR-Tools CP-SAT resolve o CSP:                                 │
│      - Hard constraints: choques, PRD, limites de turno           │
│      - Soft constraints: janelas, germinação, preferências        │
│      - Respeita pinning (células travadas)                        │
│                                                                   │
│    Resultado:                                                     │
│      SUCESSO → resposta_gerador com alocações completas           │
│      ERRO → resposta_gerador com log de conflitos e motivos       │
│                                                                   │
│    timetable-generator ──RabbitMQ──► fila de retorno              │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ 5. RECEPÇÃO DO RESULTADO (management-service)                    │
│                                                                   │
│    Consome resposta da fila de retorno                            │
│    Atualiza gerar_horario: status → SUCESSO ou ERRO              │
│    Armazena resposta_gerador (JSONB) no PostgreSQL               │
│                                                                   │
│    Se SUCESSO e tipo PERMANENTE:                                  │
│      Cria calendario_agendamento tipo AULA para cada alocação    │
│      Vincula a diários, turmas, professores, ambientes            │
│                                                                   │
│    Se SUCESSO e tipo TEMPORÁRIO:                                  │
│      Idem, mas com data_termino definida (expira automaticamente) │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ 6. CONSULTA E EDIÇÃO (todos os perfis via web/mobile)            │
│                                                                   │
│    DAPE: visualiza grade completa, edita com drag & drop,         │
│          aplica pinning, gera relatórios PDF                      │
│    Professor: consulta próprio horário, configura disponibilidade │
│    Aluno: consulta horário da turma selecionada                   │
│                                                                   │
│    Nuxt/Flutter ──HTTP──► management-service ──► PostgreSQL       │
│                                                                   │
│    Polling de status: GET /api/gerar-horario/:id/status           │
│    (a cada 3s enquanto PENDENTE)                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Fluxo de integração SISGHA ↔ SISGEA

```
SISGHA (geração de horário)              SISGEA (gestão de ambientes)
         │                                         │
         │  Ao alocar aula em sala:                 │
         ├────────► Verifica disponibilidade ◄──────┤
         │          do ambiente na data/hora         │
         │                                          │
         │  Se disponível:                          │
         │    Cria calendario_agendamento            │
         │    tipo AULA + vincula ambiente            │
         │                                          │
         │  Se ocupado:                             │
         │    Retorna conflito com motivo:           │
         │    "Sala Ambiente Ocupada via SISGEA"     │
         │    (BR-SISGHA-008 — transparência)        │
```

## Fluxo de autenticação

```
Cliente (web/mobile)
    │
    │  1. Redirect para Keycloak login
    ▼
Keycloak 25.0
    │
    │  2. Autentica (OAuth2 / OIDC)
    │  3. Retorna access_token + refresh_token
    ▼
Cliente
    │
    │  4. Envia token em Authorization header
    ▼
management-service
    │
    │  5. Valida token com Keycloak
    │  6. Extrai perfil (P-DAPE, P-PROF, P-ALUNO)
    │  7. Aplica guards de acesso por rota
    ▼
Resposta com dados autorizados para o perfil
```

---

*Fonte: Repositórios GitHub ladesa-ro, `artefatos/modelagem/LADESA.sql`, relatório NotebookLM Seção 11.*
