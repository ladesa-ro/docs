---
title: Git
---

Git é um sistema de versionamento de código. Nesse viés, o Git registra o histórico de alterações em qualquer tipo de arquivo e concede acesso às versões anteriores.

Você verá que esta é uma excelente ferramenta para projetos de todas as magnitudes pois viabiliza o trabalho em equipe e permite que os desenvolvedores desfaçam erros de implementação alternando para outra versão do código.

---

O Git é baseado em utilitários de linha de comando para sistemas Unix. Veja um exemplo de linha de comando git:

```sh
git fetch
```
> git fetch _verifica se há atualizações no repositório remoto. Nos aprofundaremos nisso em breve._

É por meio desses comandos de texto que o usuário pode alternar entre versões, bem como manipulá-las ou mandá-las para algum repositório.


## Obter o Git

- <https://git-scm.com/downloads>

#### Git para Windows

Conforme dito anteriormente, o Git é baseado em Unix. Isso significa que sistemas operacionais como Linux e macOS têm suporte nativo ao programa e geralmente não precisam de instalações adicionais. Porém, o Windows tem uma arquitetura distinta e, portanto, não suporta comandos git nativamente.

Para resolver esse problema, foi criado o Git Bash, um terminal de linha de comando que emula sistema Unix no Windows.

- <https://gitforwindows.org/>

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
