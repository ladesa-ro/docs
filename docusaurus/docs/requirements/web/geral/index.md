---
sidebar_position: 1
sidebar_label: Visão Geral
---

# SHARED — Funcionalidades Transversais

Funcionalidades compartilhadas entre SISGHA e SISGEA: autenticação, seleção de sistema e gestão de perfil.

## Escopo

| Funcionalidade | Descrição |
|---|---|
| Login de servidor | Autenticação de Professor e DAPE via matrícula + senha (Keycloak SSO) |
| Login de aluno | Autenticação de Aluno via botão separado (fluxo simplificado) |
| Seleção de sistema | Após login, escolha entre SISGHA e SISGEA (quando aplicável ao perfil) |
| Recuperação de senha | Fluxo de redefinição via link "Esqueceu a senha?" |

## User Stories

- [US-SHARED-001](./US-SHARED-001-login-servidor.md) — Fazer login como servidor
- [US-SHARED-002](./US-SHARED-002-login-aluno.md) — Fazer login como aluno
- [US-SHARED-003](./US-SHARED-003-selecao-sistema.md) — Selecionar sistema de acesso
- [US-SHARED-004](./US-SHARED-004-recuperar-senha.md) — Recuperar senha

## Requisitos Funcionais

- [RF-SHARED-001](./RF-SHARED-001-autenticacao-sso.md) — Autenticação via SSO Keycloak
- [RF-SHARED-002](./RF-SHARED-002-controle-acesso.md) — Controle de acesso por perfil
- [RF-SHARED-003](./RF-SHARED-003-redirecionamento.md) — Redirecionamento pós-login por perfil
