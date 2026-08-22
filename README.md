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
cd docusaurus
bun install
```

### Requisitos

- **bun** 1.2 ou superior.
- Editor de texto com suporte a Markdown, como o VSCode.

## Executando o Servidor Local

```sh
cd docusaurus
bun run start
```

Acesse o site em [http://localhost:3000](http://localhost:3000).

## Deploy

Para gerar a versão de produção:

```sh
cd docusaurus
bun run build
```

Teste a versão de produção:

```sh
cd docusaurus
bun run serve
```

## Recursos Adicionais

Para mais informações sobre o Docusaurus, consulte a [documentação oficial](https://docusaurus.io/docs).

<!-- Badges -->

<!-- Badges / Actions  -->

[action-cd-src]: https://img.shields.io/github/actions/workflow/status/ladesa-ro/docs/build-deploy.dev.yml?style=flat&logo=rocket&logoColor=white&label=Continuos+Deployment&labelColor=18181B
[action-cd-href]: https://github.com/ladesa-ro/docs/actions/workflows/build-deploy.dev.yml
[built-with-docusaurus-src]: https://img.shields.io/badge/built%20with%20docusaurus-%233e63dd?style=flat&logo=docusaurus&logoColor=white
[built-with-docusaurus-href]: https://docusaurus.io/

## Implantação (GitOps)

A implantação é declarada em `gitops/` e reconciliada pelo [Argo CD](https://github.com/ladesa-ro/infrastructure), não por comando imperativo no fim do build.

```
gitops/
  envs/development/applications/docs.yaml   Application observada pelo Argo CD
  apps/docs/                                chart Helm local deste serviço
    Chart.yaml                              declara stakater/application como dependência
    charts/                                 a dependência vendorizada, para o build não depender da rede
    values-development.yaml                 a configuração do ambiente
```

São duas camadas de propósito. `envs/` diz o que o Argo CD deve observar e com que política de sincronização. `apps/` diz como o serviço é montado. Trocar configuração é editar o values e abrir um pull request, com revisão e histórico.

O repositório `infrastructure` mantém uma `Application` raiz apontando para `gitops/envs/development/applications`, que é o que faz o Argo CD descobrir o que está aqui.

O build continua publicando a imagem a cada push na `main`. O que deixou de existir é o passo que aplicava no cluster: quem implanta agora é o Argo CD, a partir do que está declarado neste diretório.

Os arquivos de `gitops/` não levam comentário, porque comentário envelhece sem que ninguém perceba. O contexto que explicaria cada bloco fica aqui e na documentação de arquitetura do `infrastructure`.
