---
sidebar_position: 2
sidebar_label: Glossário do Domínio
---

# Glossário do Domínio Acadêmico

Termos coletados diretamente dos próprios usuários (DAPE Jaru e Ji-Paraná) durante o levantamento de requisitos. **Estes são os termos oficiais do projeto** — sempre use esta nomenclatura nos artefatos, nunca sinônimos.

## Termos do domínio de horários

| Termo | Significado no IFRO | Entidade / conceito no sistema |
|---|---|---|
| **PRD** | Planejamento e Recuperação Docente — tempo do professor fora de sala para preparação de aulas e trabalhos administrativos | `calendario_agendamento` tipo `INDISPONIBILIDADE` |
| **Janela** | Período vago entre aulas de um professor ou turma no mesmo dia. Prejudica o aproveitamento do tempo no campus. | Restrição do algoritmo a minimizar |
| **Aula Germinada** | Aulas consecutivas da mesma disciplina (blocos de 2 ou 3 aulas seguidas) | `diario_preferencia_agrupamento` + `diario_preferencia_agrupamento_aulas` |
| **Vínculo** | Associação triádica entre Professor + Disciplina + Turma. É a unidade mínima de planejamento. | `diario` + `diario_professor` |
| **Matriz** | Baseline curricular: carga horária por disciplina por período de um curso | `oferta_formacao` + `oferta_formacao_periodo` |
| **Esquema** | Configuração de tempos de aula e intervalos de uma turma (ex: 7:30–11:30 com intervalo 9:30–9:45) | `horario_aula_configuracao` + `horario_aula` |
| **Contraturno** | Esquema especial para Educação Física — aula em turno oposto ao da turma, vinculada ao deslocamento para o ginásio municipal | Regra BR-SISGHA-004 |
| **Grade** | A tabela visual de horários gerada — o resultado final do SISGHA | Resultado de `gerar_horario` |
| **Choque** | Conflito de horário: professor em duas turmas simultâneas, ou sala ocupada | Constraint do solver (CP-SAT) |
| **Pinning** | Travamento de células da grade editadas manualmente, protegidas contra regeneração automática | Regra BR-SISGHA-006 |

## Termos de estrutura acadêmica

| Termo | Significado no IFRO | Entidade no sistema |
|---|---|---|
| **Oferta de Formação** | Oferta de um curso em um campus, com modalidade e duração definidas | `oferta_formacao` |
| **Nível de Formação** | Nível do curso: técnico integrado, graduação, pós-graduação, etc. | `nivel_formacao` |
| **Modalidade** | Forma de oferta: presencial, EAD, semipresencial | `modalidade` |
| **Período** | Divisão temporal da formação (1° semestre, 2° semestre, etc.) | `oferta_formacao_periodo` |
| **Etapa** | Subdivisão de cada período (1° bimestre, recuperação, exame, etc.) | `oferta_formacao_periodo_etapa` |
| **Diário** | Diário de classe — liga turma + disciplina + calendário letivo | `diario` |
| **Calendário Letivo** | Calendário de um campus/oferta de formação para um ano letivo, com dias letivos, feriados e etapas | `calendario_letivo` + `calendario_letivo_dia` + `calendario_letivo_etapa` |

## Termos de infraestrutura física

| Termo | Significado no IFRO | Entidade no sistema |
|---|---|---|
| **Campus** | Unidade física do IFRO (CNPJ, endereço, apelido) | `campus` |
| **Bloco** | Edifício dentro de um campus | `bloco` |
| **Ambiente** | Espaço físico (sala, laboratório, auditório) com capacidade e tipo | `ambiente` |
| **Salas Ambientes** | Laboratórios ou salas temáticas com gestão de ocupação controlada (geridas pelo SISGEA) | `ambiente` |

## Termos de agenda e eventos

| Termo | Significado no IFRO | Entidade no sistema |
|---|---|---|
| **Agenda** | Lista de eventos vinculados a um professor | Conjunto de `calendario_agendamento` vinculados via `calendario_agendamento_professor` |
| **Atividade** | Tipo de evento do professor (diferente de indisponibilidade) | `calendario_agendamento` tipo `EVENTO` |
| **Indisponibilidade** | Bloqueio de horário do professor (PRD, compromisso pessoal, etc.) | `calendario_agendamento` tipo `INDISPONIBILIDADE` |
| **Reserva** | Ocupação de um ambiente para um período específico | `calendario_agendamento` tipo `RESERVA` |

## Termos de sistemas externos

| Termo | Significado no IFRO | Relação com o Ladesa |
|---|---|---|
| **SUAP** | Sistema Unificado de Administração Pública — sistema integrado do IFRO | Integração externa para importação de vínculos e matrizes |
| **Sistema anterior** | Software comercial pago de geração de horários acadêmicos que o Ladesa substitui | Sistema legado — referência comparativa |

## Termos obsoletos (NÃO usar)

| Termo obsoleto | Por que não usar | Termo correto |
|---|---|---|
| **Matutino / Matutinho** | Hack do sistema anterior para simular 3 turnos. O SISGHA elimina com suporte nativo. | Turno Manhã / Turno Tarde / Turno Noite |
| **Vespertinho** | Idem acima. | Turno Tarde |

---

*Fonte: Relatório de levantamento NotebookLM, Seção 7 — Terminologia do Domínio.*
