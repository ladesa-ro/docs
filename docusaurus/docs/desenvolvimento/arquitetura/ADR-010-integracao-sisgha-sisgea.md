---
sidebar_position: 11
sidebar_label: "ADR-010: Integração SISGHA ↔ SISGEA"
id: ADR-010
tipo: adr
modulo: SHARED
rastreia_de: [RF-SISGEA-006]
status: rascunho
fonte-primaria: levantamento-notebooklm
---

# ADR-010 — Integração SISGHA ↔ SISGEA para disponibilidade de salas

## Status

**Proposto** — aguarda validação da equipe

## Contexto

O SISGHA gera grades horárias que alocam turmas a slots de tempo. O SISGEA gerencia ambientes físicos (salas, laboratórios) com feature e disponibilidade. Sem integração, o DAPE precisa verificar manualmente no SISGEA se a sala está livre antes de confirmar no SISGHA — retrabalho que o sistema anterior já impunha e que motivou a criação do Ladesa.

**Fonte:** Relatório NotebookLM, Seção 4, DAPE Jaru [08:44] — RF-SISGEA-006: "Validar disponibilidade física de sala/laboratório antes de confirmar alocação no SISGHA."

## Decisão

O management-service, ao receber uma solicitação de geração do SISGHA, consulta a disponibilidade de ambientes no mesmo banco PostgreSQL (tabelas SISGEA) e inclui estas restrições como parte do `GenerateRequest` enviado ao solver.

### Fluxo de integração

```
DAPE → SISGHA (Gerar Horário)
         │
         ├─ 1. Consulta diários (turma + professor + disciplina)
         ├─ 2. Consulta ambientes disponíveis no SISGEA
         │      └─ Verifica: feature ≥ turma.alunos AND sem reserva no slot
         ├─ 3. Monta GenerateRequest com availability das salas
         └─ 4. Envia ao solver via RabbitMQ
```

### Pontos de decisão

**Sala como constraint hard ou soft?**
- **Hard:** solver não aloca se sala estiver ocupada → grade pode ser infeasible
- **Soft:** solver prefere sala livre mas pode alocar em sala ocupada com penalidade → sempre encontra solução

**Recomendação:** Começar como **soft constraint** (penalidade no scoring) e permitir que DAPE resolva conflitos de sala manualmente na edição da grade. Evolução futura: hard constraint quando SISGEA tiver gestão completa de reservas.

## Consequências

**Positivas:**
- Elimina verificação manual de sala pelo DAPE
- Dados no mesmo banco — sem chamada HTTP entre serviços
- Motivo de conflito de sala aparece no log de transparência (BR-SISGHA-008)

**Negativas:**
- Acoplamento entre módulos SISGHA e SISGEA no management-service
- Se SISGEA não estiver populado, constraint de sala não tem efeito
- Reservas de sala fora do sistema (ex: reuniões informais) não são capturadas

## Alternativas consideradas

1. **API REST interna (management-service → management-service):** desnecessário — mesmo banco
2. **Mensageria via RabbitMQ:** complexidade desnecessária para consulta síncrona
3. **Sem integração:** DAPE verifica manualmente — não atende RF-SISGEA-006

## Questões em aberto

- [ ] Entidade `calendario_agendamento` tipo `RESERVA` já suporta o fluxo? Ou precisa de nova tabela?
- [ ] Endpoint REST de disponibilidade de sala (para consulta direta no frontend) — a criar?
- [ ] Como tratar "Salas Ambientes" (laboratórios temáticos) que são obrigatórios para certas disciplinas?

---

*Fonte: Relatório NotebookLM, Seção 4 (RF-SISGEA-006) — DAPE Jaru [08:44].*
