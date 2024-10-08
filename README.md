# Ladesa Docs

[![Continuos Integration][action-ci-src]][action-ci-href] [![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## Configuração Local

### Obter o código-fonte do projeto

```sh
git clone https://github.com/ladesa-ro/docs.git
cd docs
```

### Instalar as dependências do projeto

```sh
pnpm install
```

## 🚀 Estrutura do projeto

Inside of your Astro + Starlight project, you'll see the following folders and files:

```txt
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

<!-- Badges -->

<!-- Badges / Actions  -->

[action-ci-src]: https://img.shields.io/github/actions/workflow/status/ladesa-ro/docs/ci.yml?style=flat&logo=github&logoColor=white&label=Continuos+Integration&labelColor=18181B
[action-ci-href]: https://github.com/ladesa-ro/docs/actions/workflows/ci.yml
