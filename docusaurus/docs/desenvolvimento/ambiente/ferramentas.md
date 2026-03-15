---
sidebar_position: 2
sidebar_label: Instalação de Ferramentas
---

# Instalação de Ferramentas

Guia de instalação das ferramentas necessárias para contribuir com o Ladesa.

## Git

Controle de versão utilizado em todos os repositórios.

```bash
# Ubuntu/Debian
sudo apt install git

# macOS
brew install git

# Windows
# Baixe em https://git-scm.com/download/win
```

## Node.js

Runtime JavaScript necessário para o frontend, API e documentação.

```bash
# Recomendado: usar nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install 22
nvm use 22
```

## Bun

Runtime e package manager usado pelo management-service e pela documentação.

```bash
curl -fsSL https://bun.sh/install | bash
```

## pnpm

Package manager usado pelo frontend web.

```bash
# Após instalar Node.js
corepack enable
corepack prepare pnpm@latest --activate
```

## Docker e Docker Compose

Necessário para rodar os serviços de infraestrutura (PostgreSQL, Redis, RabbitMQ, Keycloak).

```bash
# Ubuntu
# Siga as instruções oficiais: https://docs.docker.com/engine/install/ubuntu/

# macOS
brew install --cask docker

# Windows
# Baixe Docker Desktop em https://www.docker.com/products/docker-desktop/
```

## .NET SDK

Necessário para o timetable-generator (solver em C#).

```bash
# Ubuntu
sudo apt install dotnet-sdk-9.0

# macOS
brew install dotnet-sdk

# Windows
# Baixe em https://dotnet.microsoft.com/download
```

## Flutter

Necessário para o app mobile.

```bash
# Siga as instruções oficiais para seu SO:
# https://docs.flutter.dev/get-started/install
```
