---
id: RF-SHARED-003
tipo: requisito-funcional
modulo: SHARED
rastreia_de: [US-SHARED-001, US-SHARED-002, US-SHARED-003]
rastreia_para: []
entidades-sql: [usuario, perfil]
status: rascunho
fonte-primaria: figma
prioridade: essential
sidebar_label: "RF-SHARED-003 – Redirecionamento pós-login"
---

# RF-SHARED-003 — Redirecionamento pós-login por perfil

## Especificacao

Após autenticação bem-sucedida, o sistema deve redirecionar o usuário para a tela inicial correspondente ao seu perfil.

### Regras de redirecionamento

| Perfil | Destino pós-login | Condição |
|---|---|---|
| P-DAPE | Tela de seleção de sistema (SISGHA / SISGEA) | Sempre |
| P-PROF | Dashboard SISGHA — horário da semana | Direto, sem seleção de sistema |
| P-ALUNO | Tela de seleção de turma (SISGHA) | Direto, sem seleção de sistema |

### Requisitos detalhados

1. Se o usuário possui apenas um perfil, redireciona diretamente para a rota do perfil.
2. Se o usuário possui perfil em múltiplos campi, deve solicitar seleção de campus antes do redirecionamento.
3. Se o usuário possui acesso a múltiplos sistemas (apenas DAPE), exibe tela de seleção (US-SHARED-003).
4. A seleção de campus e sistema deve ser persistida na sessão (Pinia) para navegação futura.

## Criterio de verificacao

- DAPE logado vê tela de seleção SISGHA/SISGEA
- Professor logado vai diretamente para horário da semana
- Aluno logado vai diretamente para seleção de turma
- Professor em 2 campi vê seleção de campus antes do redirecionamento

---

*Fonte: Figma SISGHA V2.0, nodes `10893:23070` e `8746:20658`.*
