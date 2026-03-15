---
id: US-SISGHA-GH-008
tipo: user-story
modulo: SISGHA
endereco: "1.8"
epico: EP-SISGHA-GH-001
perfil-principal: P-DAPE
tags: [P-DAPE]
rastreia_para: [RF-SISGHA-GH-005]
status: rascunho
fonte-primaria: figma
figma-node: "10182:21883"
sidebar_label: "[DAPE] US-SISGHA-GH-008 – Status de geração"
---

# [DAPE] US-SISGHA-GH-008 — [1.8] Acompanhar status de geração em background

## Descrição

**Como** DAPE,
**quero** acompanhar o status da geração em tempo real (Solicitado → Pendente → Sucesso/Erro),
**para que** eu saiba quando a grade está pronta sem ficar bloqueado.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Modal "Gerando Horário..." — ícone de carregamento animado, texto "Isso pode levar algum tempo, dependendo da quantidade de professores, disciplinas e turmas." Botão "Cancelar" vermelho. | `[RI-01]` Modal é exibido imediatamente após confirmação da geração <br/> `[RI-02]` Animação de loading contínua enquanto status for PENDENTE <br/> `[RI-03]` Botão "Cancelar" fica disponível durante todo o processamento |
| `[IMG-02]` Modal "Horário Gerado!" — ícone de check verde, texto "Foi gerado o horário para as formações [lista]." Botão "Visualizar Horário" verde. | `[RI-04]` Modal de sucesso substitui automaticamente o modal de loading <br/> `[RI-05]` Lista de formações é preenchida dinamicamente com os nomes das ofertas incluídas na geração |

> Fonte: Figma SISGHA V2.0, nodes `10182:21883` (Gerando) e `10183:21957` (Gerado).

## Regras de Negócio

`[RN-01]` Status atualiza via polling: GET `/api/gerar-horario/:id/status` a cada 3s enquanto status for `PENDENTE`.

`[RN-02]` O DAPE pode cancelar a geração durante o processamento — status muda para `ERRO` com motivo "Cancelado pelo usuário".

`[RN-03]` O solver retorna `ServiceGenerateResponse` com `generated_timetables[]` ordenadas por score — a melhor solução é selecionada automaticamente.

## Fluxos

`[FP-01]` **Fluxo Principal — Acompanhar geração com sucesso**
1. DAPE confirma geração (vindo de UC-SISGHA-GH-001).
2. Sistema cria registro `gerar_horario` com status `SOLICITADO`.
3. Modal `[IMG-01]` é exibido.
4. Sistema envia `GenerateRequest` ao timetable-generator via RabbitMQ (ADR-006).
5. Status muda para `PENDENTE` — polling ativo a cada 3s (`[RN-01]`).
6. Solver completa e retorna `ServiceGenerateResponse` com sucesso.
7. Status muda para `SUCESSO`.
8. Modal `[IMG-02]` substitui `[IMG-01]`.
9. DAPE clica em "Visualizar Horário" → navega para grade gerada.

`[FE-01]` **Fluxo de Exceção — Cancelamento pelo DAPE**
1. Durante `[FP-01]`, DAPE clica em "Cancelar".
2. Sistema envia sinal de cancelamento ao solver.
3. Status muda para `ERRO` com motivo "Cancelado pelo usuário".
4. Modal fecha e DAPE retorna à tela anterior.

`[FE-02]` **Fluxo de Exceção — Erro no solver**
1. Solver retorna `ServiceGenerateResponseResultError` com `error_code` e `error_message`.
2. Status muda para `ERRO`.
3. Modal exibe mensagem de erro com detalhes (ver US-SISGHA-GH-009).

## Ações

| ID | Título | Tela | Ação |
|----|--------|------|------|
| `[AC-01]` | Criar solicitação | Modal geração | Cria registro `gerar_horario` com status `SOLICITADO` |
| `[AC-02]` | Enviar ao solver | Backend | Serializa `GenerateRequest` e publica na fila RabbitMQ |
| `[AC-03]` | Polling de status | Modal geração | GET a cada 3s até status final |
| `[AC-04]` | Cancelar geração | Modal geração | Envia sinal de cancelamento |

## Mensagens

| ID | Mensagem | Tipo | Contexto |
|----|----------|------|---------|
| `[MS-01]` | "Isso pode levar algum tempo, dependendo da quantidade de professores, disciplinas e turmas." | Info | Modal de loading |
| `[MS-02]` | "Foi gerado o horário para as formações [lista]." | Sucesso | Modal de sucesso |
| `[MS-03]` | "Geração cancelada." | Info | Após cancelamento |

## Critérios de Aceitação

- `[CA-01]` Status atualiza visualmente em tempo real
- `[CA-02]` DAPE pode cancelar durante processamento
- `[CA-03]` Modal de sucesso exibe formações incluídas
- `[CA-04]` Navegação para grade gerada funciona após sucesso

## Questões em aberto

- [ ] Timeout máximo para a geração? O que acontece se o solver demorar > 10 min?
- [ ] WebSocket vs polling — polling a cada 3s é adequado ou vale usar WebSocket?

---

*Fonte: Figma SISGHA V2.0, nodes `10182:21883` e `10183:21957`. TypeSpec: `ServiceGenerateResponse`.*
