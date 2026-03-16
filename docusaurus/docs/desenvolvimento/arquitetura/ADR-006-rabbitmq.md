---
sidebar_position: 7
sidebar_label: "ADR-006: RabbitMQ"
---

# ADR-006 — Comunicação assíncrona via RabbitMQ entre management-service e timetable-generator

## Status

**Aceito**

## Contexto

A geração de horário é uma operação computacionalmente intensiva (o solver pode levar de segundos a minutos dependendo da complexidade). O usuário não deve ficar bloqueado esperando o resultado. Além disso, o timetable-generator (C#) precisa ser desacoplado do management-service (TypeScript).

## Decisão

Usar **RabbitMQ** como broker de mensageria assíncrona entre o management-service e o timetable-generator.

### Fluxo de comunicação

```
1. DAPE solicita geração → management-service cria registro gerar_horario (SOLICITADO)
2. management-service publica mensagem na fila RabbitMQ
3. timetable-generator consome a mensagem e inicia o solver
4. management-service atualiza status para PENDENTE
5. Ao concluir, timetable-generator publica resposta na fila de retorno
6. management-service atualiza status para SUCESSO ou ERRO
7. Frontend faz polling do status via GET /api/gerar-horario/:id/status
```

## Consequências

**Positivas:**
- Desacoplamento total — timetable-generator pode ser escalonado independentemente
- Retry nativo — mensagens que falham voltam para a fila (dead letter queue)
- O usuário não fica bloqueado — pode navegar enquanto o solver trabalha
- Tolerância a falhas — se o solver cair, a mensagem permanece na fila

**Negativas:**
- Complexidade operacional — mais um serviço para monitorar
- Latência adicional (ms) na entrega de mensagens
- Debugging mais difícil em fluxos assíncronos

## Alternativas consideradas

1. **HTTP síncrono** — descartado por bloquear o usuário durante a geração
2. **Apache Kafka** — descartado por ser oversized para o volume de mensagens do projeto
3. **Redis Pub/Sub** — descartado por não garantir entrega (at-most-once)

---

*Decisão tomada pela equipe Ladesa. Confirmada pela infraestrutura Docker/K8s do projeto.*
