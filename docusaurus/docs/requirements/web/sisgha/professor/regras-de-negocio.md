---
sidebar_position: 3
sidebar_label: Regras de Negócio
---

# Regras de Negócio — Perfil Professor

## BR-SISGHA-PROF-001 — Visibilidade de horários

**Regra:** Professor vê apenas seu próprio horário e o horário das turmas às quais está vinculado.

**Fonte:** Figma SISGHA V2.0, anotação no frame `10562:20328`.

**Questão em aberto (DSC-003):** está em discussão se o professor pode visualizar horários de **outros professores**. Esta decisão impacta o escopo do RF-SISGHA-PROF-001.

---

## BR-SISGHA-PROF-002 — Tipos de evento do professor

**Regra:** Um professor possui exatamente 2 tipos de evento: **atividade** e **indisponibilidade**. A lista de eventos é chamada de **agenda**.

**Fonte:** Figma SISGHA V2.0, anotações de regras nos frames da seção Professor.

---

## BR-SISGHA-PROF-003 — Edição de evento multi-ator redireciona para calendário

**Regra:** Ao editar um evento que pertence a múltiplos atores (ex: evento vinculado a turma + professor), o usuário é **redirecionado para o modal de edição na tela de calendário**. Não é possível editar localmente na agenda pessoal.

**Fonte:** Figma SISGHA V2.0, anotações na seção Professor.

**Why:** Evita inconsistências quando um evento afeta múltiplos participantes. A edição centralizada no calendário garante que todos os atores vejam a mesma versão.

---

## BR-SISGHA-PROF-004 — Modal de disponibilidade condicionado ao cargo

**Regra:** O modal de "Disponibilidade para lecionar" aparece **apenas** se o usuário possui cargo de professor em pelo menos um campus.

**Fonte:** Figma SISGHA V2.0, anotação no frame de cadastro de usuário.

---

## BR-SISGHA-PROF-005 — Carrossel de campus na disponibilidade

**Regra:** O carrossel de campus na tela de disponibilidade aparece **apenas** se o professor está vinculado a 2 ou mais campi. Se vinculado a apenas 1 campus, a configuração é direta sem carrossel.

**Fonte:** Figma SISGHA V2.0, anotação no frame de cadastro de usuário.

---

*Fonte: Figma SISGHA V2.0, seção Professor (`4457:11167`), anotação `10562:20328`.*
