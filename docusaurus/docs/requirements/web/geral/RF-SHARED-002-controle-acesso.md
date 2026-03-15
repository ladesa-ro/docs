---
id: RF-SHARED-002
tipo: requisito-funcional
modulo: SHARED
rastreia_de: [US-SHARED-001]
rastreia_para: []
entidades-sql: [usuario, perfil, campus]
status: rascunho
fonte-primaria: figma
prioridade: essential
sidebar_label: "RF-SHARED-002 – Controle de acesso"
---

# RF-SHARED-002 — Controle de acesso por perfil

## Especificacao

O sistema deve restringir acesso a funcionalidades com base no perfil do usuário autenticado.

### Mapa de acesso por perfil

| Recurso / Rota | P-DAPE | P-PROF | P-ALUNO |
|---|:---:|:---:|:---:|
| `/sisgha/gerar-horario/*` | Permitido | Negado | Negado |
| `/sisgha/horario/editar/*` | Permitido | Negado | Negado |
| `/sisgha/horario/visualizar/*` | Permitido | Permitido (próprio) | Permitido (turma) |
| `/sisgha/calendario/*` (gestão) | Permitido | Negado | Negado |
| `/sisgha/calendario/*` (consulta) | Permitido | Permitido | Permitido |
| `/sisgha/gestao/*` (CRUD acadêmico) | Permitido | Negado | Negado |
| `/sisgea/*` | Permitido | Negado | Negado |
| `/perfil/disponibilidade` | Negado | Permitido | Negado |

### Requisitos detalhados

1. Guards de rota no frontend (Nuxt middleware) devem verificar o perfil antes de renderizar a página.
2. Guards de API no backend (NestJS guards) devem verificar roles do token JWT antes de processar a requisição.
3. Tentativa de acesso não autorizado deve retornar HTTP 403 na API e redirecionar para a home no frontend.
4. O perfil é determinado pelo campo `cargo` na tabela `perfil`, vinculado ao `campus` do contexto ativo.

## Criterio de verificacao

- Aluno não consegue acessar rotas de DAPE (403 na API, redirect no frontend)
- Professor não consegue acessar geração de horário
- DAPE tem acesso total a SISGHA e SISGEA

---

*Fonte: Figma SISGHA V2.0 (anotações de perfil), relatório NotebookLM Seção 2.*
