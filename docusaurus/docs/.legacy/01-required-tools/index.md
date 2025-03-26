# Configurar o Ambiente do Cluster

A estrutura de implantação do sistema utiliza como base o Kubernetes e o Docker Engine.

Este projeto conta com os dados necessários para o levantamento da infraestrutura dos projetos do sistema.

## Sistemas Operacionais Suportados

Este projeto foi projetado e testado para rodar nos seguintes sistemas operacionais:

- [`Debian GNU/Linux 11 (bullseye)`][distro-debian-bullseye]

  - Shell: `GNU bash @ 5.1.4`
  - Kernel: `GNU/Linux - x86_64 @ 5.10.0-25-amd64`

- [`Manjaro Linux 24.0.2`][distro-manjaro-wynsdey]

  - Shell: `GNU bash @ 5.2.26`
  - Kernel: `GNU/Linux - x86_64 @ 6.6.33-1-MANJARO`

## Tecnologias de Base

### Runtime de Containers

- Docker Engine - [https://docs.docker.com/engine/](https://docs.docker.com/engine/);

Para a execução dos containers, é utilizado a ferramenta Docker Engine.

### Orquestrador de Containers

- Kubernetes - [https://kubernetes.io/](https://kubernetes.io/).

Para gerenciar os containers entre diferentes nós, é utilizado a tecnologia Kubernetes, criada pela Google. Veja os conceitos do Kubernetes na documentação oficial: [https://kubernetes.io/docs/concepts/overview/](https://kubernetes.io/docs/concepts/overview/).

## Ferramentas

- `docker` - [https://docs.docker.com/reference/cli/docker/](https://docs.docker.com/reference/cli/docker/);
- `kind` - [https://kind.sigs.k8s.io/](https://kind.sigs.k8s.io/);
- `kubectl` - [https://kubernetes.io/pt-br/docs/reference/kubectl/](https://kubernetes.io/pt-br/docs/reference/kubectl/);
- `helm` - [https://helm.sh/](https://helm.sh/);
- `cmctl` - [https://github.com/cert-manager/cmctl/](https://github.com/cert-manager/cmctl/).
- `at` - [https://packages.debian.org/bullseye/at](https://packages.debian.org/bullseye/at).

### `docker`

Por favor, veja a seção oficial de instalação do docker: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/).

Para verificar instalação do docker:

```sh
docker version

```

### `kind`

Por favor, veja a seção oficial de instalação do kind: [https://kind.sigs.k8s.io/docs/user/quick-start/#installation](https://kind.sigs.k8s.io/docs/user/quick-start/#installation).

Para verificar instalação do kind:

```sh
kind --version
```

### Kubectl

Por favor, veja a seção oficial de instalação do kubectl: [https://kubernetes.io/docs/tasks/tools/](https://kubernetes.io/docs/tasks/tools/).

Para verificar instalação do kubectl:

```sh
kubectl version --client
```

### `helm`

Por favor, veja a seção oficial de instalação do helm: [https://helm.sh/docs/intro/install/](https://helm.sh/docs/intro/install/).

Para verificar instalação do helm:

```sh
helm version
```

### `cmctl` - The cert-manager Command Line Tool

Por favor, veja a seção oficial de instalação do helm: [https://cert-manager.io/docs/reference/cmctl/#installation](https://cert-manager.io/docs/reference/cmctl/#installation).

Para verificar instalação do cmctl:

```sh
cmctl version --client
```

### `at` - Delayed job execution and batch processing

Tutorial de instalação **não oficial**: [https://phoenixnap.com/kb/linux-at-command](https://phoenixnap.com/kb/linux-at-command)

<!--
## Script de Conveniência

Este projeto conta com um script utilitário para a instalação das ferramentas `docker`, `kind`, `kubectl`, `helm` e `cmctl` caso não estejam presentes no `linux x64`.

```sh
./setup.sh
``` -->

<!-- Links -->

<!-- Links / Actions -->

<!-- Links / Distros -->

[distro-debian-bullseye]: https://www.debian.org/releases/bullseye/
[distro-manjaro-wynsdey]: https://forum.manjaro.org/t/manjaro-24-0-wynsdey-released/161527
