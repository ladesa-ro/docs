---
id: US-SHARED-002
tipo: user-story
modulo: SHARED
perfil-principal: P-ALUNO
tags: [P-ALUNO]
rastreia_para: [RF-SHARED-001, RF-SHARED-003]
status: rascunho
fonte-primaria: figma
figma-node: "10893:23070"
sidebar_label: "US-SHARED-002 – Login aluno"
---

# US-SHARED-002 — Login como aluno

## Descrição

**Como** aluno,
**quero** acessar o sistema de forma simplificada,
**para que** eu possa consultar o horário da minha turma rapidamente.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Botão "Entrar como aluno" na tela de login — verde, com ícone de pessoa, posicionado abaixo do formulário de servidor | `[RI-01]` Botão "Entrar como aluno" redireciona diretamente para o fluxo de autenticação de aluno via Keycloak (client separado ou role específica) |

## Regras de Negócio

`[RN-01]` O fluxo de login de aluno pode ser diferente do servidor — o aluno pode autenticar via SUAP ou credencial institucional com escopo restrito.

`[RN-02]` Após login, o aluno é redirecionado diretamente para a tela de seleção de turma (US-SISGHA-ALU-001). Não há seleção de sistema — aluno acessa apenas o SISGHA.

## Fluxos

`[FP-01]` **Fluxo Principal — Login de aluno**
1. Aluno acessa a tela de login.
2. Clica no botão "Entrar como aluno".
3. Sistema redireciona para o fluxo de autenticação de aluno no Keycloak.
4. Aluno insere suas credenciais.
5. Keycloak valida e retorna token com role de aluno.
6. Sistema redireciona para a tela de seleção de turma.

## Mensagens

| ID | Mensagem | Tipo | Contexto |
|----|----------|------|---------|
| `[MS-01]` | "Credenciais de aluno incorretas. Verifique seus dados e tente novamente." | Erro | Autenticação falhou |

## Critérios de Aceitação

- `[CA-01]` Aluno consegue fazer login e é redirecionado para seleção de turma
- `[CA-02]` Aluno não tem acesso a funcionalidades de DAPE ou Professor
- `[CA-03]` Aluno não vê opção de acessar o SISGEA

## Questões em aberto

- [ ] O login de aluno usa o mesmo realm Keycloak ou um client separado?
- [ ] Integração direta com SUAP para autenticação de alunos é prevista?

---

*Fonte: Figma SISGHA V2.0, node `10893:23070` — botão "Entrar como aluno".*
