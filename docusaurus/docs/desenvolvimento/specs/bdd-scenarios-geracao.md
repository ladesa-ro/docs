---
sidebar_position: 6
sidebar_label: BDD Scenarios
---

# BDD Scenarios — Geração de Horário

## BDD-SISGHA-GH-001 — Geração com três turnos nativos

```gherkin
@EP-SISGHA-GH-001 @BR-SISGHA-007 @P-DAPE
Funcionalidade: Geração de horário com três turnos nativos

  @happy-path
  Cenário: DAPE gera horário para formações com aulas nos três turnos
    Dado que existem turmas com aulas configuradas nos turnos Manhã, Tarde e Noite
    E cada turma possui seus slots de horário definidos dentro da linha contínua 07:30–22:30
    Quando o DAPE solicita a geração de horário permanente para essas formações
    Então o solver aloca todas as disciplinas respeitando os slots de cada turma
    E nenhuma entidade artificial de turno é criada no processo

  @constraint @BR-SISGHA-001
  Cenário: Solver respeita limite de turnos por professor
    Dado que o Professor X leciona para turmas do turno da Manhã e do turno da Noite
    Quando o solver tenta alocar uma terceira aula no turno da Tarde para o mesmo dia
    Então o solver não realiza a alocação
    E registra um alerta de "alocação em três turnos" no log de conflitos
```

## BDD-SISGHA-GH-002 — Pinning (célula travada sobrevive à regeneração)

```gherkin
@EP-SISGHA-GH-001 @BR-SISGHA-006 @P-DAPE
Funcionalidade: Pinning de células protege edições manuais

  @happy-path
  Cenário: Célula travada não é alterada após nova geração
    Dado que o DAPE editou manualmente a aula de Português para segunda-feira 07:30
    E marcou essa célula como "travada" (pinning)
    Quando solicita uma nova geração automática para a mesma formação
    Então a aula de Português permanece em segunda-feira 07:30
    E as demais aulas são reorganizadas ao redor da célula travada

  @edge-case
  Cenário: Múltiplas células travadas criam conflito impossível
    Dado que o DAPE travou aulas que ocupam todos os slots de um professor em um dia
    E existe uma nova disciplina que precisa ser alocada naquele dia
    Quando solicita geração automática
    Então o solver retorna status ERRO
    E o log de conflitos indica que as células travadas impedem a alocação da disciplina
```

## BDD-SISGHA-GH-003 — Conflito de horário com log de motivo

```gherkin
@EP-SISGHA-GH-001 @BR-SISGHA-008 @P-DAPE
Funcionalidade: Log de conflitos com motivo detalhado

  @transparencia
  Cenário: Geração falha com log detalhado de motivos
    Dado que existe um conflito de PRD do Professor X na segunda-feira
    E a Sala 27 está reservada pelo SISGEA no mesmo horário
    Quando o DAPE solicita geração automática
    E o solver não consegue resolver todos os conflitos
    Então o status muda para ERRO
    E o log de conflitos exibe:
      | Conflito | Motivo |
      | Prof. X segunda 07:30 | "Choque com PRD do Professor X" |
      | Sala 27 segunda 08:20 | "Sala Ambiente Ocupada via SISGEA" |

  @cancelamento
  Cenário: DAPE cancela geração em andamento
    Dado que o DAPE iniciou uma geração e o status está como PENDENTE
    Quando clica no botão "Cancelar"
    Então o status muda para ERRO com motivo "Cancelado pelo usuário"
    E nenhuma grade é publicada
```

## BDD-SISGHA-GH-004 — Regras de germinação por nível de ensino

```gherkin
@EP-SISGHA-GH-001 @BR-SISGHA-003 @P-DAPE
Funcionalidade: Aulas germinadas diferenciadas por nível de ensino

  @ensino-medio
  Cenário: Ensino Médio Integrado recebe aulas separadas
    Dado que a formação é do nível "Técnico Integrado ao Ensino Médio"
    E a preferência de germinação está configurada como "separadas"
    Quando o solver aloca as aulas de Matemática (3 aulas/semana)
    Então as aulas são distribuídas em dias diferentes (ex: seg, qua, sex)
    E não há bloco de 3 aulas consecutivas

  @graduacao
  Cenário: Graduação recebe aulas germinadas
    Dado que a formação é do nível "Graduação"
    E a preferência de germinação está configurada como "germinadas"
    Quando o solver aloca as aulas de Cálculo (4 aulas/semana)
    Então as aulas são agrupadas em blocos consecutivos (ex: 2+2 ou 4)
    E não há aulas avulsas da mesma disciplina
```

---

*Fonte: Regras BR-SISGHA-001 a BR-SISGHA-008, relatório NotebookLM Seções 5 e 11.*
