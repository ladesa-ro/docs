---
id: US-SHARED-004
tipo: user-story
modulo: SHARED
perfil-principal: P-PROF
tags: [P-PROF, P-DAPE, P-ALUNO]
rastreia_para: [RF-SHARED-001]
status: rascunho
fonte-primaria: figma
figma-node: "10893:23070"
sidebar_label: "US-SHARED-004 – Recuperar senha"
---

# US-SHARED-004 — Recuperar senha

## Descrição

**Como** usuario que esqueceu sua senha,
**quero** solicitar a redefinição via link na tela de login,
**para que** eu possa recuperar o acesso ao sistema.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Link "Esqueceu a senha? Clique aqui." na tela de login, abaixo dos campos de credenciais | `[RI-01]` Link redireciona para a tela de recuperação de senha do Keycloak |

## Regras de Negócio

`[RN-01]` O fluxo de recuperação de senha é gerenciado inteiramente pelo Keycloak — o sistema Ladesa apenas redireciona para o endpoint de reset.

## Fluxos

`[FP-01]` **Fluxo Principal — Recuperar senha**
1. Usuário clica em "Esqueceu a senha? Clique aqui." na tela de login.
2. Sistema redireciona para a tela de recuperação de senha do Keycloak.
3. Usuário insere e-mail ou matrícula.
4. Keycloak envia e-mail com link de redefinição.
5. Usuário acessa o link e define nova senha.
6. Keycloak confirma a redefinição.
7. Usuário retorna à tela de login.

## Critérios de Aceitação

- `[CA-01]` Link "Esqueceu a senha?" redireciona corretamente para Keycloak
- `[CA-02]` E-mail de recuperação é enviado ao e-mail institucional cadastrado

---

*Fonte: Figma SISGHA V2.0, node `10893:23070` — link "Esqueceu a senha?".*
