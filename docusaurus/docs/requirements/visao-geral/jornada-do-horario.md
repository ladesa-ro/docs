---
sidebar_position: 6
sidebar_label: "Jornada do Horário"
---

# Jornada do Horário — Processo atual vs. SISGHA

Este documento descreve as 6 etapas do processo de criação de horário acadêmico no IFRO, comparando o processo atual (manual/semi-automatizado) com a solução proposta pelo SISGHA.

**Fonte:** Relatório de levantamento NotebookLM, Seção 8.

---

## Contexto por campus

O processo de criação de horário varia entre os campi do IFRO:

- **DAPE Jaru:** Experiência com software comercial de geração de horários. Processo semi-automatizado mas com limitações severas (sem suporte a 3 turnos, sem pinning, sem integração). Workarounds com entidades artificiais ("Matutino/Vespertinho").
- **DAPE Ji-Paraná:** Processo inteiramente manual via planilha Excel avançada. Extremamente lento e complexo, mas flexível. O DAPE construiu um sistema sofisticado de macros e validações para detectar choques.

> *"A gente já passou por tanto susto nesse horário que a gente fica... melhor não mexer."* — DAPE Jaru
> *"A gente perdeu tanto tempo cadastrando tanta informação que talvez fosse melhor fazer manual."* — DAPE Jaru

---

## As 6 etapas da jornada

### Etapa 1 — Coleta de dados mestres

**Processo atual:**
- DAPE coleta matrizes curriculares, vínculos de professores e turmas do SUAP ou de planilhas internas.
- Em Jaru: cadastro manual no software comercial — centenas de registros digitados um por um.
- Em Ji-Paraná: manutenção de planilha Excel mestre com abas para cada entidade.
- **Dor principal:** Retrabalho massivo a cada semestre — dados do SUAP não sincronizam automaticamente.

**Com SISGHA:**
- Importação via CSV ou integração direta com SUAP (US-SISGHA-GH-003, DSC-008).
- CRUDs nativos para todas as entidades: cursos, disciplinas, turmas, diários, formações.
- Sincronização reduz retrabalho semestral de dias para horas.

---

### Etapa 2 — Configuração de restrições

**Processo atual:**
- DAPE configura disponibilidade de professores (PRD) coletando informações verbalmente ou por formulário.
- Em Jaru: restrições inseridas no software comercial, mas sem suporte a 3 turnos nativos — usa workarounds.
- Em Ji-Paraná: restrições anotadas em aba separada da planilha, verificadas manualmente durante a alocação.
- **Dor principal:** Sem padronização. Cada DAPE tem seu próprio sistema de notas e códigos.

**Com SISGHA:**
- Professores configuram disponibilidade e PRD diretamente no sistema (US-SISGHA-PROF-004, US-SISGHA-PROF-007).
- Restrições armazenadas como `AvailabilityRuleUnavailability` em formato RRule (RFC 5545).
- Aulas germinadas configuráveis por diário e nível de ensino (US-SISGHA-GH-007).
- Contraturno de Ed. Física (BR-SISGHA-004) e sábado letivo (BR-SISGHA-005) como parâmetros nativos.

---

### Etapa 3 — Geração da grade

**Processo atual:**
- Em Jaru: geração automática pelo software comercial (20–30 min). Resultado em caixa-preta — sem log de conflitos. Se falhar, DAPE não sabe o motivo.
- Em Ji-Paraná: alocação 100% manual. DAPE posiciona cada aula individualmente na planilha, verificando choques célula por célula. Processo de dias a semanas.
- **Dor principal:** Caixa-preta (Jaru) ou esforço hercúleo (Ji-Paraná). Nos dois casos, resultado frágil e sujeito a erros.

**Com SISGHA:**
- Geração automática via Google OR-Tools CP-SAT (timetable-generator) em background (US-SISGHA-GH-008).
- 10 constraints hard garantem grade sem conflitos.
- Score de qualidade ranqueia múltiplas soluções.
- Log de conflitos detalhado se geração falhar — motivo específico por professor/turma (US-SISGHA-GH-009, BR-SISGHA-008).

---

### Etapa 4 — Ajuste manual

**Processo atual:**
- Em Jaru: qualquer ajuste manual dispara nova geração que "embaralha" tudo — inclusive o que já estava correto. DAPE evita ajustar ("melhor não mexer").
- Em Ji-Paraná: ajuste manual é natural (tudo é manual), mas detectar efeitos cascata de um movimento é difícil.
- **Dor principal:** Ausência de pinning. Medo de perder trabalho já feito.

**Com SISGHA:**
- Edição via drag & drop com validação instantânea de conflitos (US-SISGHA-GH-004).
- Pinning: células travadas sobrevivem a regeneração (US-SISGHA-GH-002, BR-SISGHA-006).
- Edição afeta apenas a semana em edição (BR-SISGHA-VH-001).
- Undo (Ctrl+Z) para reverter movimentações.
- Salvamento automático (RNF-REL-002) — sem "sustos" de perda de dados.

---

### Etapa 5 — Validação e publicação

**Processo atual:**
- Em Jaru: DAPE exporta grade para Excel e verifica manualmente se há choques ("a gente usa planilha para detectar choques — é a muleta").
- Em Ji-Paraná: verificação visual na própria planilha. Processo propenso a erro humano.
- Publicação: impressão física ou PDF manual. Distribuição via e-mail ou mural.
- **Dor principal:** Processo de validação duplicado (sistema + Excel). Publicação manual.

**Com SISGHA:**
- Alerta automático de turnos opostos e conflitos na grade (US-SISGHA-GH-006).
- Geração de relatório PDF por professor e turma (US-SISGHA-GH-005).
- Professores e alunos consultam horário diretamente no sistema (web e mobile).
- Sem necessidade de exportar para Excel — validação é integrada.

---

### Etapa 6 — Consulta e uso contínuo

**Processo atual:**
- Professores consultam horário no mural ou pedem ao DAPE.
- Alunos dependem de informação de terceiros.
- Alterações durante o semestre requerem nova geração ou ajuste manual + redistribuição.
- **Dor principal:** Informação desatualizada. Sem acesso digital self-service.

**Com SISGHA:**
- Professores visualizam horário na web e no app mobile (US-SISGHA-PROF-001, US-SISGHA-MOB-007).
- Alunos consultam horário da turma na web e no app (US-SISGHA-ALU-002, US-SISGHA-MOB-002).
- Calendário acadêmico com eventos e dias não letivos (US-SISGHA-CAL-001 a CAL-009).
- Alterações refletem em tempo real para todos os perfis.

---

## Resumo da transformação

| Etapa | Antes | Com SISGHA |
|-------|-------|------------|
| Coleta de dados | Manual/SUAP isolado | Importação + CRUDs integrados |
| Configuração | Verbal/planilha | Self-service professor + RRule |
| Geração | Caixa-preta ou manual | CP-SAT + log de conflitos |
| Ajuste | "Melhor não mexer" | Drag & drop + pinning |
| Validação | Excel como muleta | Alertas integrados + PDF |
| Consulta | Mural/e-mail | Web + mobile em tempo real |

---

*Fonte: Relatório de levantamento NotebookLM, Seção 8. Contexto: DAPE Jaru e DAPE Ji-Paraná.*
