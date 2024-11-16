# Ladesa Docs

[![Continuos Deployment][action-cd-src]][action-cd-href]
[![Build with Vitepress][built-with-vitepress-src]][built-with-vitepress-href]

## Configuração Local

### Clonar o repositório

```sh
git clone https://github.com/ladesa-ro/docs.git
cd docs
```

### Instalar as dependências

Certifique-se de ter o `pnpm` instalado:

```sh
pnpm install
```

### Requisitos
- **Node.js** 22 ou superior.
- `pnpm` como gerenciador de pacotes.
- Editor de texto com suporte a Markdown, como o VSCode.

## Estrutura do Projeto

```txt
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts
│   ├── index.md
│   ├── guia/
│   └── assets/
├── public/
├── scripts/
│   └── download-remote.ts
├── package.json
└── tsconfig.json
```

- **docs/**: Arquivos `.md` usados para a documentação.
- **.vitepress/config.ts**: Arquivo de configuração.
- **scripts/download-remote.ts**: Script para baixar conteúdo remoto.
- **public/**: Arquivos estáticos.

Arquivo de configuração (`.vitepress/config.ts`)

https://github.com/ladesa-ro/docs/blob/main/.vitepress/config.ts#L7-L10

## Comandos Disponíveis

| Comando                   | Ação                                                   |
|---------------------------|--------------------------------------------------------|
| `pnpm install`            | Instala as dependências                                 |
| `pnpm run download-remote`| Executa o script para baixar conteúdo remoto            |
| `pnpm run dev`            | Inicia o servidor de desenvolvimento (`localhost:4321`) |
| `pnpm run build`          | Gera a versão de produção em `./dist/`                  |
| `pnpm run preview`        | Visualiza a versão de produção (`localhost:4321`)       |
| `pnpm run clean`          | Limpa arquivos de cache e builds anteriores             |

## Executando o Servidor Local

```sh
pnpm run dev
```

Acesse o site em [http://localhost:4321](http://localhost:4321).

## Deploy

Para gerar a versão de produção:

```sh
pnpm run build
```

Teste a versão de produção:

```sh
pnpm run preview
```

## Recursos Adicionais

Para mais informações sobre o Vitepress, consulte a [documentação oficial](https://vitepress.dev/guide/getting-started).


<!-- Badges -->

<!-- Badges / Actions  -->

[action-cd-src]: https://img.shields.io/github/actions/workflow/status/ladesa-ro/docs/cd.yml?style=flat&logo=rocket&logoColor=white&label=Continuos+Deployment&labelColor=18181B
[action-cd-href]: https://github.com/ladesa-ro/docs/actions/workflows/cd.yml

[built-with-vitepress-src]: https://img.shields.io/badge/built%20with%20vitepress-%233e63dd?style=flat&logo=vitepress&logoColor=white
[built-with-vitepress-href]: https://vitepress.dev/