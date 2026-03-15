---
id: RF-SHARED-001
tipo: requisito-funcional
modulo: SHARED
rastreia_de: [US-SHARED-001, US-SHARED-002, US-SHARED-004]
rastreia_para: []
entidades-sql: [usuario, perfil]
status: rascunho
fonte-primaria: figma
prioridade: essential
sidebar_label: "RF-SHARED-001 – Autenticação SSO"
---

# RF-SHARED-001 — Autenticação via SSO Keycloak

## Especificacao

O sistema deve autenticar todos os usuários (servidores e alunos) via Keycloak 25.0 usando o protocolo OAuth2/OIDC.

### Requisitos detalhados

1. O frontend (Nuxt) deve redirecionar para o Keycloak login page quando o usuário não possui token válido.
2. Após autenticação bem-sucedida, o Keycloak retorna `access_token` (JWT) e `refresh_token`.
3. O `access_token` deve conter as roles do usuário (DAPE, Professor, Aluno) no claim `realm_access.roles`.
4. O `refresh_token` deve ser usado para renovar o `access_token` antes de expirar, sem necessidade de re-login.
5. O management-service deve validar o `access_token` em cada requisição via middleware.
6. Tokens expirados devem resultar em HTTP 401 e o frontend deve tentar refresh automático.

### Fluxo de recuperação de senha

7. O link "Esqueceu a senha?" deve redirecionar para `{keycloak_url}/realms/{realm}/login-actions/reset-credentials`.
8. O Keycloak gerencia todo o fluxo de reset (envio de e-mail, validação de token, redefinição).

## Criterio de verificacao

- Login com credenciais válidas retorna tokens e permite acesso à API
- Login com credenciais inválidas retorna erro sem expor detalhes internos
- Token expirado é renovado automaticamente via refresh_token
- Token inválido/adulterado é rejeitado com HTTP 401

---

*Fonte: ADR-005 (Keycloak SSO), Figma node `10893:23070`.*
