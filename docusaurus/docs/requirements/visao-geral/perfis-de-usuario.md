---
sidebar_position: 4
sidebar_label: Perfis de Usuário
---

# Perfis de Usuário

Quatro perfis foram identificados no levantamento de requisitos. Cada perfil tem responsabilidades, necessidades e dores distintas.

## P-DAPE — DAPE (Diretoria de Apoio ao Planejamento de Ensino)

**Tipo:** Power user — operador principal do sistema.

**Responsabilidades:**
- Alimentação de dados mestres (matrizes curriculares, professores, disponibilidades)
- Orquestração da geração automática de grades horárias
- Edição manual e resolução de conflitos na grade
- Integração com SUAP e com a infraestrutura física (via SISGEA)

**Interação com o sistema:** Frequente e profunda. Único perfil que aciona a geração automática de horário.

**Plataformas:** Web apenas (sem interface mobile).

**Dores identificadas no levantamento:**
- Múltiplos cliques e burocracia no processo de geração
- Falta de salvamento automático — medo constante de perder dados
- "Embaralhamento" total ao regenerar, destruindo edições manuais válidas
- Retrabalho com cadastros repetitivos de informações que já existem no SUAP
- Necessidade de exportar para Excel para detectar conflitos manualmente

**Necessidades críticas:**
- Pinning (travamento) de células editadas manualmente
- Suporte nativo a 3 turnos sem duplicação de entidades
- Integração com SUAP para importação de vínculos e matrizes
- Transparência do algoritmo — log detalhado de conflitos e motivos de falha
- Salvamento automático com transações atômicas

> *"A gente já passou por tanto susto nesse horário que a gente fica... melhor não mexer."* — DAPE Jaru

---

## P-PROF — Professor

**Tipo:** Consultor frequente com escrita limitada à própria agenda.

**Responsabilidades:**
- Cumprimento da carga horária em sala de aula
- Execução de PRD (Planejamento e Recuperação Docente)
- Comunicação de restrições e disponibilidades ao DAPE

**Interação com o sistema:** Consulta do próprio horário e das turmas vinculadas. Configura disponibilidade e eventos da agenda pessoal.

**Plataformas:** Web e mobile (tema claro/escuro).

**Dores identificadas no levantamento:**
- Falta de clareza no próprio horário
- Desrespeito às restrições de deslocamento entre sedes
- Aulas mal agrupadas (quando aplicável ao nível de ensino)

**Necessidades críticas:**
- Visualização individualizada e clara do próprio horário
- Respeito absoluto a janelas e restrições de deslocamento
- Configuração simples de disponibilidades (PRD, preferências de dia)
- Acesso mobile rápido para consulta

**Regras de visibilidade:**
- Vê o próprio horário e o horário das turmas às quais está vinculado
- Visualização de horários de outros professores em discussão (ver DSC-003)
- Possui dois tipos de evento na agenda: **atividade** e **indisponibilidade**

---

## P-ALUNO — Aluno

**Tipo:** Consultor passivo — apenas visualização, sem edição.

**Responsabilidades:**
- Organização acadêmica pessoal baseada na grade publicada

**Interação com o sistema:** Consulta do horário da turma selecionada. Não edita nenhuma informação.

**Plataformas:** Web e mobile (tema claro/escuro).

**Variantes no mobile:**
- **Aluno Técnico (Ensino Médio Integrado):** grade com aulas separadas — visualização de horário estruturalmente diferente
- **Aluno Graduação:** grade com aulas germinadas obrigatórias — blocos consecutivos na visualização

**Dores identificadas no levantamento:**
- Instabilidade na grade (mudanças frequentes após regenerações)
- Janelas ociosas que prejudicam o aproveitamento do tempo
- Dificuldade de consulta rápida do horário

**Necessidades críticas:**
- Estabilidade na grade após publicação
- Minimização de janelas ociosas
- Visualização clara por turma via web e mobile

---

## P-COORD — Coordenador de Curso

**Tipo:** Validador pedagógico — interage via DAPE, não opera diretamente.

**Responsabilidades:**
- Validação pedagógica da grade gerada
- Gestão de demandas específicas de professores do curso
- Comunicação com DAPE sobre ajustes necessários

**Interação com o sistema:** Validação e solicitação de ajustes pontuais. Não opera a geração diretamente.

**Plataformas:** Web (possível sub-perfil do DAPE em iterações futuras).

**Dores identificadas no levantamento:**
- Agilidade insuficiente na preparação da grade
- Burocracia no processo de ajustes

**Necessidades críticas:**
- Agilidade no processo de geração e ajuste
- Interface clara para visualizar a qualidade pedagógica da grade
- Canal expedito de comunicação com DAPE

:::caution Nota sobre o perfil P-COORD
O perfil de Coordenador de Curso foi identificado no levantamento de requisitos mas **não está representado no Figma atual** do SISGHA V2.0. Pode ser implementado como sub-perfil do DAPE em iterações futuras. Ver DSC-007 em DESCOBERTAS.md.
:::

---

## Matriz de acesso por funcionalidade

| Funcionalidade | P-DAPE | P-PROF | P-ALUNO | P-COORD |
|---|:---:|:---:|:---:|:---:|
| Gerar horário automático | Total | — | — | — |
| Editar grade manualmente | Total | — | — | — |
| Pinning de células | Total | — | — | — |
| Visualizar todos os horários | Total | — | — | Consulta |
| Visualizar próprio horário | Total | Total | — | — |
| Visualizar horário da turma | Total | Vinculadas | Selecionada | Vinculadas |
| Configurar disponibilidade | — | Total | — | — |
| Cadastrar eventos na agenda | Total | Própria | — | — |
| Gestão acadêmica (CRUD) | Total | — | — | — |
| Calendário acadêmico | Total | Consulta | Consulta | Consulta |
| Gestão de ambientes (SISGEA) | Total | — | — | — |

---

*Fonte: Relatório de levantamento NotebookLM, Seção 2 — Perfis de Stakeholders. Regras de visibilidade: Figma SISGHA V2.0, anotações nos frames.*
