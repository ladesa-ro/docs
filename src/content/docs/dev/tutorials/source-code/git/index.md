---
title: Git
---

O Git é um sistema de versionamento de código. Ele registra o histórico de alterações em qualquer tipo de arquivo para que versões antigas possam ser acessadas no presente.

É uma excelente ferramenta para trabalhar em equipe e é útil para projetos de todas as magnitudes.

### Git para Windows

O Git é composto por utilitários de linha de comando desenvolvidos para sistemas baseados em Unix, como Linux e macOS. Porém, o Windows tem uma arquitetura distinta e, portanto, nativamente não suporta comandos git.

Para resolver esse problema, foi criado o Git Bash, um terminal de linha de comando que emula sistema Unix no Windows.

- <https://gitforwindows.org/>

## Obter o Git

- <https://git-scm.com/downloads>

## Configuração inicial

```sh
git config --global pull.rebase false
```

```sh
git config --global user.email "<seu email>"
```

```sh
git config --global user.name "<seu username do git>"
```
