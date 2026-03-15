---
id: UC-SISGHA-GH-002
tipo: caso-de-uso
modulo: SISGHA
rastreia_de: [US-SISGHA-GH-002, US-SISGHA-GH-004]
rastreia_para: [BDD-SISGHA-GH-002]
status: rascunho
fonte-primaria: figma
sidebar_label: "UC-GH-002 – Editar grade manualmente"
---

# UC-SISGHA-GH-002 — Editar grade manualmente com proteção de células

## Informações gerais

| Campo | Valor |
|-------|-------|
| **Ator primário** | DAPE |
| **Nível** | User Goal |
| **Escopo** | SISGHA |
| **Pré-condições** | Grade horária gerada; DAPE autenticado |
| **Garantia de sucesso** | Aula movida para novo slot sem conflitos; alteração persistida |
| **Garantia mínima** | Nenhuma alteração persistida; grid retorna ao estado anterior |
| **Trigger** | DAPE arrasta célula na grade ou clica para editar |

## Cenário principal

1. DAPE visualiza a grade de horário de uma turma ou professor.
2. DAPE identifica uma aula que precisa ser movida.
3. DAPE arrasta a célula para um novo slot (drag & drop).
4. Sistema valida instantaneamente: sem choque de professor, sem choque de turma, sem sobreposição temporal.
5. Validação passa — célula é depositada no novo slot.
6. Sistema persiste a alteração.
7. Grade atualiza visualmente.

## Extensões

**2a.** Célula está travada (pinning):
1. Cursor muda para "not-allowed".
2. Drag é bloqueado. DAPE precisa destravar primeiro.

**4a.** Conflito de professor:
1. Sistema rejeita o drop.
2. Exibe tooltip: "Prof. [nome] já tem aula com [turma] neste horário."
3. Célula retorna à posição original.

**4b.** Conflito de turma:
1. Sistema rejeita o drop.
2. Exibe tooltip: "[Turma] já tem aula neste horário."
3. Célula retorna à posição original.

**4c.** Sobreposição temporal parcial:
1. Sistema detecta overlap mesmo que parcial.
2. Rejeita o drop com motivo detalhado.

**6a.** DAPE deseja travar a célula recém-movida:
1. DAPE clica no ícone de cadeado da célula.
2. Sistema marca como travada — protegida contra regeneração futura.

**7a.** DAPE desfaz a ação (Ctrl+Z):
1. Sistema reverte última movimentação.
2. Grade retorna ao estado anterior.

## Regras de negócio aplicáveis

- BR-SISGHA-VH-001: Edição de horário afeta apenas a semana em edição
- BR-SISGHA-006: Pinning protege células de regeneração
- BR-SISGHA-008: Motivo do conflito exibido ao DAPE (transparência)

---

*Fonte: Figma SISGHA V2.0, node `9425:10699` (Edição de horário — Grid selecionado).*
