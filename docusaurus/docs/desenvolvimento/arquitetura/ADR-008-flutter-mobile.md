---
sidebar_position: 9
sidebar_label: "ADR-008: Flutter Mobile"
---

# ADR-008 — Flutter como framework do app mobile SISGHA

## Status

**Aceito**

## Contexto

O SISGHA precisa de um app mobile para Professor e Aluno com funcionalidades de consulta de horário, calendário, disponibilidade e notificações. O app precisa suportar tema claro e escuro, e ter performance nativa em Android e iOS.

## Decisão

Usar **Flutter** (Dart) no repositório `mobile/` para o app mobile do SISGHA.

## Consequências

**Positivas:**
- Codebase único para Android e iOS — reduz custo de manutenção
- Suporte nativo a Material Design 3 com tema dinâmico (claro/escuro)
- Performance nativa via compilação AOT
- Hot reload para desenvolvimento rápido
- Widget tree declarativa — adequada para UIs de consulta de dados

**Negativas:**
- Linguagem diferente do stack web (Dart vs TypeScript) — curva de aprendizado
- Tamanho do APK/IPA maior que apps nativos puros
- Integração com Keycloak requer package adicional (flutter_appauth ou similar)

## Escopo do app

| Perfil | Funcionalidades mobile |
|---|---|
| **Aluno** | Seleção de turma, visualização de horário (Técnico vs Graduação), calendário, notificações |
| **Professor** | Horário da semana, calendário, disponibilidade por dia, ensino (disciplinas/turmas), notificações |
| **DAPE** | Sem interface mobile — operação exclusivamente via web |

## Alternativas consideradas

1. **React Native** — descartado por performance inferior em animações complexas
2. **PWA (Nuxt mobile)** — descartado por limitações de notificações push e acesso offline
3. **Kotlin Multiplatform** — descartado por ecossistema ainda imaturo para UI

---

*Decisão tomada pela equipe Ladesa. Confirmada pelo repositório `mobile/` e Figma mobile do projeto.*
