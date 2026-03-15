---
id: US-SHARED-001
tipo: user-story
modulo: SHARED
perfil-principal: P-PROF
tags: [P-PROF, P-DAPE]
rastreia_para: [RF-SHARED-001, RF-SHARED-002, RF-SHARED-003]
status: rascunho
fonte-primaria: figma
figma-node: "10893:23070"
sidebar_label: "US-SHARED-001 – Login servidor"
---

# US-SHARED-001 — Login como servidor (Professor ou DAPE)

## Descrição

**Como** professor ou DAPE,
**quero** fazer login no sistema usando minha matrícula e senha institucional,
**para que** eu tenha acesso às funcionalidades correspondentes ao meu perfil.

## Projeto de Interface

| Interface | Regras de Interface |
|-----------|---------------------|
| `[IMG-01]` Tela de login — formulário de servidor. Campos: Matrícula, Senha (com toggle de visibilidade), botão "Entrar", link "Esqueceu a senha?". Logo LADESA com sub-logos SISGHA e SISGEA. Botão "Entrar como aluno" abaixo do formulário. | `[RI-01]` Botão "Entrar" fica desabilitado se matrícula ou senha estiverem vazios <br/> `[RI-02]` Ícone de olho no campo senha alterna entre visualizar/ocultar a senha digitada <br/> `[RI-03]` Link "Esqueceu a senha? Clique aqui." redireciona para fluxo de recuperação <br/> `[RI-04]` Botão "Entrar como aluno" abaixo do formulário redireciona para fluxo de login de aluno (US-SHARED-002) |

> Fonte: Figma SISGHA V2.0, node `10893:23070`.
> Link: https://www.figma.com/design/gwJHnj5RVnjt05AdOQNMy5/SISGHA---V2.0?node-id=10893-23070

## Regras de Negócio

`[RN-01]` A autenticação é delegada ao Keycloak via OAuth2/OIDC. O sistema não armazena senhas localmente.

`[RN-02]` Após autenticação bem-sucedida, o sistema identifica o(s) perfil(is) do usuário (P-DAPE, P-PROF) e redireciona conforme RF-SHARED-003.

`[RN-03]` Se o usuário possui perfil em múltiplos campi, o sistema deve solicitar seleção de campus após o login.

## Fluxos

`[FP-01]` **Fluxo Principal — Login de servidor bem-sucedido**
1. Servidor acessa a tela de login conforme `[IMG-01]`.
2. Preenche o campo Matrícula com sua matrícula institucional.
3. Preenche o campo Senha.
4. Clica em "Entrar".
5. Sistema envia credenciais ao Keycloak para autenticação.
6. Keycloak valida e retorna access_token + refresh_token.
7. Sistema identifica perfil(is) do usuário.
8. Sistema redireciona para a tela inicial correspondente ao perfil (RF-SHARED-003).

`[FE-01]` **Fluxo de Exceção — Credenciais inválidas**
- Dado `[FP-01]`, passo 5, se Keycloak retornar erro de autenticação:
  1. Sistema exibe mensagem `[MS-01]`.
  2. Campo Senha é limpo.
  3. Foco retorna ao campo Matrícula.

`[FE-02]` **Fluxo de Exceção — Conta bloqueada**
- Dado `[FP-01]`, passo 5, se Keycloak retornar conta bloqueada (múltiplas tentativas):
  1. Sistema exibe mensagem `[MS-02]`.
  2. Botão "Entrar" fica desabilitado por período definido pelo Keycloak.

## Ações

| ID | Titulo | Tela | Acao |
|----|--------|------|------|
| `[AC-01]` | Autenticar | `[IMG-01]` | Envia POST para Keycloak token endpoint com grant_type=password |
| `[AC-02]` | Identificar perfil | Pós-login | Decodifica access_token JWT, extrai roles e perfil(is) |
| `[AC-03]` | Redirecionar | Pós-login | Navega para rota inicial do perfil conforme RF-SHARED-003 |

## Mensagens

| ID | Mensagem | Tipo | Contexto |
|----|----------|------|---------|
| `[MS-01]` | "Matrícula ou senha incorretos. Verifique seus dados e tente novamente." | Erro | Após `[FE-01]` |
| `[MS-02]` | "Sua conta foi temporariamente bloqueada por múltiplas tentativas. Tente novamente em alguns minutos ou entre em contato com o suporte." | Alerta | Após `[FE-02]` |

## BDD — Cenarios de comportamento

```gherkin
@US-SHARED-001 @RN-01 @FP-01 @P-PROF @P-DAPE
Funcionalidade: Login de servidor no sistema Ladesa

  @happy-path
  Cenario: Servidor faz login com credenciais validas
    Dado que o servidor esta na tela de login
    Quando preenche a matricula com uma matricula valida
    E preenche a senha correta
    E clica em "Entrar"
    Entao o sistema autentica via Keycloak
    E redireciona para a tela inicial do perfil correspondente

  @excecao @FE-01
  Cenario: Servidor informa credenciais invalidas
    Dado que o servidor esta na tela de login
    Quando preenche matricula ou senha incorretos
    E clica em "Entrar"
    Entao o sistema exibe mensagem de erro informando dados incorretos
    E o campo de senha e limpo
    E o foco retorna ao campo de matricula

  @excecao @FE-02
  Cenario: Conta bloqueada por multiplas tentativas
    Dado que o servidor errou a senha mais de 5 vezes consecutivas
    Quando tenta fazer login novamente
    Entao o sistema exibe mensagem de bloqueio temporario
    E o botao "Entrar" fica desabilitado
```

## Critérios de Aceitação

- `[CA-01]` Validar fluxo principal `[FP-01]` com credenciais válidas
- `[CA-02]` Validar fluxo de exceção `[FE-01]` com credenciais inválidas
- `[CA-03]` Validar regras de interface `[RI-01]` a `[RI-04]`
- `[CA-04]` Validar redirecionamento correto por perfil (DAPE → dashboard, Professor → horário)

## Questões em aberto

- [ ] Quantas tentativas antes do bloqueio? (configuração Keycloak — depende do realm)
- [ ] Professor com perfil em múltiplos campi: tela de seleção de campus é mostrada quando?

---

*Fonte: Figma SISGHA V2.0, node `10893:23070` — Login de Servidor.*
