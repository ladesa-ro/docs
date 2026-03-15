---
sidebar_position: 5
sidebar_label: Autenticação (Keycloak)
---

# Autenticação — Keycloak

O Ladesa utiliza o Keycloak 25.0 como serviço de autenticação e autorização, implementando SSO (Single Sign-On) via OAuth2/OIDC.

## Stack

| Tecnologia | Versão | Papel |
|-----------|--------|-------|
| Keycloak | 25.0 | Identity and Access Management |
| OAuth2 / OIDC | — | Protocolo de autenticação |
| Docker | — | Container de execução |

## Funcionalidades

- **Single Sign-On (SSO):** Login único para todos os serviços do Ladesa (web, mobile, API)
- **Gestão de usuários:** Cadastro, perfis, permissões
- **OAuth2/OIDC:** Tokens JWT para autenticação entre serviços
- **Integração com a API:** O management-service usa Passport + Keycloak Admin Client para validar tokens

## Fluxo de autenticação

1. Usuário acessa o frontend (web ou mobile)
2. Frontend redireciona para a tela de login do Keycloak
3. Keycloak autentica e retorna um token JWT
4. Frontend usa o token em todas as requisições para a API
5. API valida o token com o Keycloak

## Como rodar

O Keycloak roda via Docker:

```bash
docker run -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:25.0.0 start-dev
```

Ou via Docker Compose junto com os demais serviços de infraestrutura. Veja [Executar Localmente](../ambiente/executar-local).

## Links úteis

- [Repositório GitHub](https://github.com/ladesa-ro/auth)
- [ADR-005 — Keycloak](../../requirements/arquitetura/ADR-005-keycloak.md)
- [RF-SHARED-001 — Autenticação SSO](../../requirements/web/geral/RF-SHARED-001-autenticacao-sso.md)
