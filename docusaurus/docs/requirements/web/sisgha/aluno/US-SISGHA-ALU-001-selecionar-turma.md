---
id: US-SISGHA-ALU-001
tipo: user-story
modulo: SISGHA
epico: EP-SISGHA-ALU-001
perfil-principal: P-ALUNO
tags: [P-ALUNO]
rastreia_para: [RF-SISGHA-ALU-001]
status: rascunho
fonte-primaria: figma
figma-node: "4457:15553"
sidebar_label: "US-SISGHA-ALU-001 – Selecionar turma"
---

# [ALUNO] US-SISGHA-ALU-001 — Selecionar turma para visualizar horário

## Descrição

**Como** aluno,
**quero** selecionar minha formação, curso, ano e turma,
**para que** eu possa visualizar o horário correspondente.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Tela "Selecionar Horário" — Formulário centralizado com selects cascata: Formação → Curso → Ano → Turma. Botão "Ver horário" no final. Header verde com botão "Voltar". | `[RI-01]` Select de Formação exibe opções como chips: "Técnico", "Graduação", "Concomitante" <br/> `[RI-02]` Selects de Curso, Ano e Turma ficam desabilitados (cinza) até o nível anterior ser selecionado <br/> `[RI-03]` Botão "Ver horário" fica cinza (desabilitado) até todos os 4 campos serem preenchidos <br/> `[RI-04]` Ao clicar "Ver horário", redireciona para a tela de horário da semana (US-SISGHA-ALU-002) |

> Fonte: Figma SISGHA V2.0, node `4457:15553` — Seleção de horário.

## Regras de Negócio

`[RN-01]` Os selects são em cascata: a seleção de Formação filtra os Cursos disponíveis; a seleção de Curso filtra os Anos; a seleção de Ano filtra as Turmas.

`[RN-02]` As formações disponíveis dependem do campus do aluno logado.

`[RN-03]` A seleção deve ser persistida na sessão (Pinia) para que o aluno não precise repetir ao navegar entre telas.

## Fluxos

`[FP-01]` **Fluxo Principal — Selecionar turma**
1. Aluno acessa a tela "Selecionar Horário" após login.
2. Seleciona o tipo de formação (Técnico, Graduação ou Concomitante).
3. Seleciona o curso dentre os filtrados.
4. Seleciona o ano.
5. Seleciona a turma.
6. Botão "Ver horário" é habilitado (verde).
7. Clica em "Ver horário".
8. Sistema redireciona para a tela de horário da semana.

`[FE-01]` **Fluxo de Exceção — Nenhuma turma disponível**
- Dado `[FP-01]`, passo 5, se não houver turmas para o ano selecionado:
  1. Select de Turma exibe "Nenhuma turma encontrada".
  2. Botão "Ver horário" permanece desabilitado.

## Mensagens

| ID | Mensagem | Tipo | Contexto |
|----|----------|------|---------|
| `[MS-01]` | "Nenhuma turma encontrada para esta seleção." | Informativo | Quando select de Turma não tem opções |

## BDD — Cenários de comportamento

```gherkin
@US-SISGHA-ALU-001 @FP-01 @P-ALUNO
Funcionalidade: Selecionar turma para visualizar horário

  @happy-path
  Cenário: Aluno seleciona turma com sucesso
    Dado que o aluno está na tela de seleção de horário
    Quando seleciona a formação "Técnico"
    E seleciona o curso "Informática"
    E seleciona o ano "2023"
    E seleciona a turma "1°A"
    Então o botão "Ver horário" é habilitado
    E ao clicar, é redirecionado para o horário da semana da turma selecionada

  @validacao @RI-02
  Cenário: Selects em cascata bloqueiam seleção prematura
    Dado que o aluno está na tela de seleção de horário
    E não selecionou nenhuma formação
    Então os selects de Curso, Ano e Turma estão desabilitados
    E o botão "Ver horário" está desabilitado
```

## Critérios de Aceitação

- `[CA-01]` Validar cascata de selects (Formação → Curso → Ano → Turma)
- `[CA-02]` Validar que botão "Ver horário" só é habilitado com todos os campos preenchidos
- `[CA-03]` Validar persistência da seleção na sessão

## Questões em aberto

- [ ] A seleção de formação "Concomitante" aparece no Figma — confirmar se este nível de formação existe no IFRO

---

*Fonte: Figma SISGHA V2.0, node `4457:15553`.*
