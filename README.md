# Ladesa Docs

[![Continuos Deployment][action-cd-src]][action-cd-href]
[![Build with Docusaurus][built-with-docusaurus-src]][built-with-docusaurus-href]

## Configuração Local

### Clonar o repositório

```sh
git clone https://github.com/ladesa-ro/docs.git
cd docs
```

### Instalar as dependências

Certifique-se de ter o `bun` instalado.

```sh
bun install
```

### Requisitos

- **bun** 1.2 ou superior.
- Editor de texto com suporte a Markdown, como o VSCode.

## Executando o Servidor Local

```sh
bun run start
```

Acesse o site em [http://localhost:3000](http://localhost:3000).

## Deploy

Para gerar a versão de produção:

```sh
pnpm run build
```

Teste a versão de produção:

```sh
pnpm run serve
```

## Recursos Adicionais

Para mais informações sobre o Vitepress, consulte a [documentação oficial](https://vitepress.dev/guide/getting-started).

<!-- Badges -->

<!-- Badges / Actions  -->

[action-cd-src]: https://img.shields.io/github/actions/workflow/status/ladesa-ro/docs/cd.yml?style=flat&logo=rocket&logoColor=white&label=Continuos+Deployment&labelColor=18181B
[action-cd-href]: https://github.com/ladesa-ro/docs/actions/workflows/cd.yml
[built-with-docusaurus-src]: https://img.shields.io/badge/built%20with%20docusaurus-%233e63dd?style=flat&logo=docusaurus&logoColor=white
[built-with-docusaurus-href]: https://docusaurus.io/
