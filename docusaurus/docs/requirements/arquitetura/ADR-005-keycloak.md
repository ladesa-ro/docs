---
sidebar_position: 6
sidebar_label: "ADR-005: Keycloak SSO"
---

# ADR-005 — Keycloak 25.0 para autenticação SSO

## Status

**Aceito**

## Contexto

O sistema precisa de autenticação centralizada para múltiplos clientes (web, mobile, API) com controle de acesso por perfil (DAPE, Professor, Aluno). A integração futura com SUAP pode requerer federação de identidade.

## Decisão

Usar **Keycloak 25.0** (`authentication-service/`) como provedor de identidade SSO via OAuth2/OIDC.

## Consequências

**Positivas:**
- SSO nativo — um único login para web, mobile e todos os serviços
- Suporte a OAuth2, OIDC, SAML — flexibilidade para integrações futuras (SUAP)
- Gestão de roles e permissões por realm/client — mapeia diretamente para os perfis do sistema
- Console de administração web incluído
- Open-source (Apache 2.0)

**Negativas:**
- Serviço adicional para operar e manter (JVM, banco próprio)
- Customização de temas e fluxos requer conhecimento específico
- Overhead de memória em ambientes de desenvolvimento local

## Alternativas consideradas

1. **Auth0** — descartado por ser SaaS proprietário (conflita com soberania tecnológica)
2. **Autenticação customizada no NestJS** — descartado por reinventar a roda e riscos de segurança
3. **Authentik** — descartado por ecossistema menor e menos integrações

---

*Decisão tomada pela equipe Ladesa. Confirmada pelo repositório `authentication-service/`.*
