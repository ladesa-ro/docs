---
sidebar_position: 6
sidebar_label: Mobile (Flutter)
---

# Mobile — App Flutter

O app mobile do Ladesa oferece acesso ao SISGHA para os perfis **Aluno** e **Professor**. Desenvolvido em Flutter com suporte a tema claro e escuro.

## Stack

| Tecnologia | Versão | Papel |
|-----------|--------|-------|
| Flutter | 3.x | Framework multiplataforma |
| Dart | >=3.3.3 | Linguagem |
| Dio | 5.x | Cliente HTTP |
| Provider | 6.x | Gerenciamento de estado |
| Table Calendar | 3.x | Componente de calendário |
| Lottie | 3.x | Animações |
| Shared Preferences | 2.x | Armazenamento local |

## Perfis suportados

| Perfil | Funcionalidades |
|--------|----------------|
| **Aluno** | Consulta de horário da turma (variantes Técnico e Graduação), calendário, notificações |
| **Professor** | Consulta de horário, calendário, disponibilidade para lecionar, ensino, notificações |

:::info Sem interface DAPE
O app mobile não possui interface para o perfil DAPE. A geração e edição de horários é feita exclusivamente pelo frontend web.
:::

## Temas

O app suporta **tema claro** e **tema escuro** em todas as telas. Os designs estão no Figma do projeto.

## Estrutura do projeto

O código está em `mobile/sisgha/`:

| Diretório | Descrição |
|-----------|-----------|
| `lib/` | Código Dart principal |
| `assets/` | Imagens e ícones customizados |
| `fonts/` | Fontes Poppins e IcoMoon |

## Como rodar

```bash
# Instalar dependências
flutter pub get

# Rodar em modo desenvolvimento
flutter run
```

Requer um emulador Android/iOS ou dispositivo físico conectado.

## Links úteis

- [Repositório GitHub](https://github.com/ladesa-ro/mobile)
- [ADR-008 — Flutter Mobile](../arquitetura/ADR-008-flutter-mobile.md)
- [UI Specs Mobile](../specs/mobile-sisgha.md)
