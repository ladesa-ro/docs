---
sidebar_position: 8
title: SISGEA — Gestão de Ambientes
---

# SISGEA — Gestão de Ambientes

User stories relacionadas ao cadastro e edição de blocos (edificações), cadastro e edição de ambientes (salas, laboratórios, auditórios) e criação e edição de reservas de ambientes por grade semanal.

---

### US-112 — Listagem e busca de blocos (ADM_EA)

**Como** administrador de espaços e ambientes, **quero** visualizar todos os blocos (edificações) cadastrados e buscar por nome, **para** localizar rapidamente o bloco que preciso gerenciar.

**Critérios de aceitação:**
- [ ] A tela de blocos exibe grid de cards com nome de cada bloco.
- [ ] A barra de pesquisa filtra os cards por texto em tempo real.
- [ ] Cada card exibe ação de edição.

**Rastreabilidade:** UC-041, UC-042, F-043, RF-141
**Prioridade:** Alta

---

### US-113 — Cadastro de bloco (ADM_EA)

**Como** administrador de espaços e ambientes, **quero** registrar um novo bloco (edificação) do campus, **para** que ele sirva como container para os ambientes que serão cadastrados.

**Critérios de aceitação:**
- [ ] O botão "+" abre modal de cadastro com campos de dados do bloco.
- [ ] Após salvar, o bloco aparece na listagem e fica disponível para vinculação de ambientes.
- [ ] O cancelamento fecha o modal sem persistir dados.

**Rastreabilidade:** UC-041, F-043, RF-141, RF-142
**Prioridade:** Alta

---

### US-114 — Edição de dados de um bloco (ADM_EA)

**Como** administrador de espaços e ambientes, **quero** editar os dados de um bloco existente, **para** corrigir informações ou atualizar o cadastro.

**Critérios de aceitação:**
- [ ] O ícone de edição no card do bloco abre modal de edição pré-preenchido.
- [ ] Após salvar, os dados atualizados são refletidos na listagem e nos ambientes vinculados.
- [ ] O cancelamento fecha o modal sem persistir alterações.

**Rastreabilidade:** UC-042, F-043, RF-141
**Prioridade:** Média

---

### US-115 — Cadastro de ambiente vinculado a um bloco (ADM_EA)

**Como** administrador de espaços e ambientes, **quero** registrar um novo ambiente (sala, laboratório, auditório) vinculando-o ao bloco correspondente, **para** que ele fique disponível para reserva.

**Critérios de aceitação:**
- [ ] O botão "+" na tela de ambientes abre modal de cadastro com campos de nome, bloco vinculado e outros dados do ambiente.
- [ ] O sistema requer que o bloco de destino esteja previamente cadastrado.
- [ ] Após salvar, o ambiente aparece na listagem e fica disponível para reserva na grade semanal.

**Rastreabilidade:** UC-043, F-044, RF-143, RF-144
**Prioridade:** Alta

---

### US-116 — Edição de dados de um ambiente (ADM_EA)

**Como** administrador de espaços e ambientes, **quero** editar os dados de um ambiente existente, **para** corrigir informações ou atualizar o bloco vinculado.

**Critérios de aceitação:**
- [ ] O ícone de edição no card do ambiente abre modal de edição pré-preenchido.
- [ ] Após salvar, os dados atualizados são refletidos na listagem e nas reservas vinculadas.
- [ ] O cancelamento fecha o modal sem persistir alterações.

**Rastreabilidade:** UC-044, F-044, RF-143
**Prioridade:** Média

---

### US-117 — Criação e edição de reserva de ambiente por grade semanal (ADM_EA)

**Como** administrador de espaços e ambientes, **quero** criar e editar reservas de ambientes diretamente na grade semanal selecionando o dia, horário e ambiente desejado, **para** gerenciar a ocupação dos espaços do campus de forma visual e eficiente.

**Critérios de aceitação:**
- [ ] A tela de reservas exibe grade semanal com seis dias e os horários disponíveis.
- [ ] Clicar em um horário vazio abre modal de reserva com lista de locais disponíveis.
- [ ] O modal exibe o ambiente selecionado e permite navegar entre dias por setas de direção.
- [ ] Ao confirmar, a reserva é criada e aparece na grade como card de reserva.
- [ ] Clicar em uma reserva existente abre o mesmo modal em modo de edição.
- [ ] A barra de pesquisa permite filtrar ambientes antes de reservar.
- [ ] O cancelamento fecha o modal sem criar ou modificar reservas.

**Rastreabilidade:** UC-045, UC-046, F-045, RF-148, RF-149, RF-150, RF-151
**Prioridade:** Alta
