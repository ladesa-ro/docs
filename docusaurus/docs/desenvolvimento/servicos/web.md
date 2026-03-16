---
sidebar_position: 3
sidebar_label: Web (Frontend)
---

# Web — Frontend Nuxt

O frontend web do Ladesa é uma aplicação unificada que serve tanto o SISGHA quanto o SISGEA em uma única interface.

## Stack

| Tecnologia | Versão | Papel |
|-----------|--------|-------|
| Nuxt | 4.x | Framework full-stack Vue |
| Vue | 3.x | Framework reativo |
| Tailwind CSS | 4.x | Estilização utility-first |
| pnpm | 10.x | Package manager |
| Reka UI | — | Componentes headless acessíveis |
| TanStack Vue Query | 5.x | Data fetching e cache |
| Vee Validate + Yup | — | Validação de formulários |
| OpenAPI TypeScript | — | Geração automática de tipos a partir da API |

:::caution Package manager
O frontend web usa **pnpm**, não Bun. Verifique o `packageManager` no `package.json`.
:::

## Estrutura do projeto

O código fonte está em `web/sisgha-sisgea/app/`:

| Diretório | Descrição |
|-----------|-----------|
| `pages/` | Rotas Nuxt (file-based routing) |
| `components/` | Componentes Vue reutilizáveis |
| `layouts/` | Layouts de página |
| `composables/` | Composables Vue 3 (lógica reativa compartilhada) |
| `middleware/` | Guards de rota (autenticação, permissões) |
| `plugins/` | Plugins Nuxt |
| `assets/` | Assets estáticos (CSS, imagens) |
| `helpers/` | Funções utilitárias |

## Como rodar

```bash
# Instalar dependências
pnpm install

# Rodar em modo desenvolvimento
pnpm run dev
```

Requer a API (management-service) rodando para funcionar. Veja [Executar Localmente](../ambiente/executar-local).

## Links úteis

- [Repositório GitHub](https://github.com/ladesa-ro/web)
- [ADR-001 — Nuxt Unificado](../arquitetura/ADR-001-nuxt-unificado.md)
- [Design System](../arquitetura/design-system-componentes.md)
