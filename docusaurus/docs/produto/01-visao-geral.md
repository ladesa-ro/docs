---
sidebar_position: 1
title: Visão Geral
---

# Visão Geral do Produto

Os sistemas desenvolvidos pelo Ladesa atendem à gestão acadêmica do **IFRO — campi Ji-Paraná e Jaru**, substituindo processos manuais e ferramentas fragmentadas na montagem, distribuição e acompanhamento de grades horárias.

O produto é composto por três sistemas complementares:

| Sistema | Plataforma | Público principal |
|---|---|---|
| **SISGHA Web** | Navegador (desktop) | DAPE, Professor, Aluno |
| **SISGHA Mobile** | Android/iOS | Aluno, Professor |
| **SISGEA Web** | Navegador (desktop) | Administrador de Ambientes |

---

## O problema que o produto resolve

Antes dos sistemas do Ladesa, a elaboração de horários acadêmicos no IFRO dependia de uma solução legada que impunha limitações operacionais sérias:

- **Acesso simultâneo bloqueado**: apenas um operador por vez conseguia trabalhar no sistema, e para que outra pessoa entrasse, era necessário encerrar a sessão ativa do outro usuário à força.
- **Distribuição manual e frágil**: os horários prontos precisavam ser exportados como arquivos estáticos e enviados individualmente a cada professor e turma, sem notificação automática de atualizações.
- **Ausência de histórico e desfazer**: não havia como reverter alterações ou recuperar versões anteriores de uma grade.
- **Falta de visibilidade para alunos e professores**: cada interessado precisava solicitar o horário ou acessar um arquivo compartilhado, sem garantia de estar vendo a versão mais atual.
- **Processo totalmente manual e demorado**: a montagem da grade exigia múltiplas etapas de configuração, atribuição docente, geração e ajuste fino, todas realizadas sem auxílio inteligente de detecção de conflitos.

Os sistemas do Ladesa resolvem esses problemas com acesso web e mobile simultâneo para DAPE, professores e alunos, geração automática de horários assistida, edição controlada com escopo definido e visualização em tempo real.

---

## Sistemas e seus objetivos

### SISGHA Web — Sistema de Gestão de Horários Acadêmicos (Web)

O SISGHA Web é o coração administrativo do produto. Nele, o DAPE monta e mantém as grades horárias, gerencia o calendário acadêmico, cadastra cursos, turmas, disciplinas, professores e diários de classe. Professores acessam seus próprios horários e calendários, e alunos consultam o horário de sua turma sem necessidade de cadastro.

**Objetivos:**
- Permitir que o DAPE gerencie todo o planejamento acadêmico de um campus de forma centralizada.
- Oferecer ao professor visibilidade do seu próprio horário e disponibilidade.
- Permitir que qualquer aluno consulte o horário da sua turma de forma imediata e anônima.

### SISGHA Mobile — Aplicativo SISGHA

O aplicativo complementa a experiência web com foco em consulta rápida e mobilidade. Não possui funcionalidades de edição — serve exclusivamente como canal de consulta e notificação.

**Objetivos:**
- Dar ao aluno acesso ao horário e ao calendário acadêmico a partir do celular, sem necessidade de login.
- Dar ao professor acesso às suas aulas do dia, ao calendário e à visualização da sua disponibilidade.
- Notificar alunos e professores sobre alterações no horário e eventos acadêmicos.

### SISGEA Web — Sistema de Gestão de Espaços Acadêmicos (Web)

O SISGEA é um sistema complementar voltado ao Administrador de Ambientes, integrado ao SISGHA. Ele gerencia salas, laboratórios, blocos e reservas de espaço físico no campus.

**Objetivos:**
- Manter o cadastro atualizado de ambientes físicos e seus blocos.
- Permitir a criação e o acompanhamento de reservas de ambientes por horário.

---

## Atores do sistema

O produto define cinco papéis distintos. Cada ator tem seu próprio conjunto de telas, permissões e responsabilidades.

| Código | Nome | Sistema | Descrição | Permissão |
|---|---|---|---|---|
| **VIS** | Visitante | SISGHA Web | Usuário não autenticado. Acessa apenas a landing page institucional. | Somente leitura pública |
| **ALU** | Aluno | SISGHA Web + Mobile | Estudante de curso técnico ou de graduação. Acessa horário e calendário da própria turma sem autenticação de servidor. | Somente leitura |
| **PROF** | Professor | SISGHA Web + Mobile | Servidor docente. Consulta o próprio horário, calendário e disponibilidade. | Somente leitura (exceto foto de perfil) |
| **DAPE** | DAPE (Dir. de Apoio ao Ensino) | SISGHA Web | Administrador acadêmico do campus. Único ator com permissão de criação, edição e exclusão de entidades acadêmicas. | Leitura + escrita global no SISGHA |
| **ADM_EA** | Administrador de Ambientes | SISGEA Web | Gestor de espaços físicos. Opera exclusivamente dentro do SISGEA. | Leitura + escrita no SISGEA |

> **Importante:** Professor e DAPE não são necessariamente usuários distintos — são papéis (roles) que um mesmo servidor pode acumular. O sistema permite alternar entre as visões DAPE e Professor sem necessidade de novo login.

---

## Números-chave do projeto

| Indicador | Quantidade |
|---|---|
| Telas no protótipo | 50 |
| Fluxos de interação mapeados | 31 |
| Entidades de domínio | 28 |
| Regras de negócio | 67 |
| Requisitos Funcionais (RFs) | 155 |
| Casos de Uso (UCs) | 46 |
| Features | 45 |
| Regras Não Funcionais (RNFs) | a definir |

---

## Princípios de design

Os sistemas foram desenhados com base nos seguintes princípios:

1. **Isolamento total entre módulos de ator.** Cada ator (Aluno, Professor, DAPE, ADM_EA) possui telas, layout e menus próprios. Não existem telas funcionais compartilhadas com permissões dinâmicas — mesmo telas análogas (como o calendário) são instâncias separadas para cada ator.

2. **DAPE como único detentor de escrita global no SISGHA.** Alunos e professores são consumidores de informação. Toda criação, edição ou exclusão de entidades acadêmicas (turmas, cursos, disciplinas, horários, calendários, eventos, usuários, formações, diários) é responsabilidade exclusiva do DAPE.

3. **Mobile como canal de consulta e notificação.** O aplicativo mobile não possui módulo DAPE. Operações administrativas requerem interface desktop. O mobile serve para acesso rápido ao horário do dia e ao calendário, e para receber notificações de alterações.

4. **Acesso anônimo para alunos.** O aluno não precisa de matrícula ou senha. Acessa o sistema via botão secundário na tela de login e seleciona a turma que deseja visualizar. Isso garante acesso universal sem burocracia de cadastro.

5. **SISGEA como sistema complementar.** O SISGEA compartilha a landing page e a tela de seleção de acesso com o SISGHA. Há integração de dados entre os dois sistemas — por exemplo, a disponibilidade de salas cadastradas no SISGEA é consultada durante a geração de horários no SISGHA.

6. **Persistência em dois níveis para horários.** Alterações em horários podem ser temporárias (afetam apenas a semana em edição) ou permanentes (requerem ação via CRUD de turma/professor ou Gestão de Eventos). Isso evita que ajustes pontuais contaminam a grade semestral.
