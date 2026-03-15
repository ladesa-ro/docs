---
id: US-SHARED-003
tipo: user-story
modulo: SHARED
perfil-principal: P-DAPE
tags: [P-DAPE]
rastreia_para: [RF-SHARED-003]
status: rascunho
fonte-primaria: figma
figma-node: "8746:20658"
sidebar_label: "US-SHARED-003 – Seleção de sistema"
---

# US-SHARED-003 — Selecionar sistema de acesso (SISGHA ou SISGEA)

## Descrição

**Como** DAPE com acesso a ambos os sistemas,
**quero** escolher entre SISGHA e SISGEA após o login,
**para que** eu seja redirecionado para o sistema correto conforme minha necessidade.

## Regras de Negócio

`[RN-01]` A tela de seleção de sistema é exibida apenas para perfis que possuem acesso a mais de um sistema (atualmente, apenas o DAPE).

`[RN-02]` Professores são redirecionados automaticamente para o SISGHA — não veem esta tela.

`[RN-03]` Alunos são redirecionados automaticamente para o SISGHA — não veem esta tela.

## Fluxos

`[FP-01]` **Fluxo Principal — DAPE seleciona sistema**
1. DAPE faz login com sucesso (US-SHARED-001).
2. Sistema identifica que DAPE tem acesso a SISGHA e SISGEA.
3. Sistema exibe tela de seleção com dois cards: SISGHA e SISGEA.
4. DAPE clica no card do sistema desejado.
5. Sistema redireciona para o dashboard do sistema escolhido.

## Critérios de Aceitação

- `[CA-01]` DAPE vê tela de seleção após login
- `[CA-02]` Professor é redirecionado diretamente para SISGHA sem ver esta tela
- `[CA-03]` Aluno é redirecionado diretamente para seleção de turma sem ver esta tela

## Questões em aberto

- [ ] O DAPE pode trocar de sistema (SISGHA ↔ SISGEA) após já estar logado, ou precisa voltar para esta tela?

---

*Fonte: Figma SISGHA V2.0, node `8746:20658`.*
