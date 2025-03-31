---
sidebar_label: JS Vanilla
---

# Pacote `@ladesa-ro/api-client-fetch`

<div class="flex items-center flex-wrap gap-2">

![NPM package][npm-package-src]

![NPM latest version][npm-package-latest-version-src]

![NPM next version][npm-package-next-version-src]

![NPM package source code][source-code-small-src]

</div>

## Instalação

:::code-group

```sh [npm]
npm install @ladesa-ro/api-client-fetch
```

```sh [pnpm]
pnpm add @ladesa-ro/api-client-fetch
```

```sh [yarn]
yarn add @ladesa-ro/api-client-fetch
```

```sh [bun]
bun add @ladesa-ro/api-client-fetch
```

:::

## Uso

A classe [LadesaApiClient][pkg-class-ladesa-api-client] conta todos os services disponíveis na Documentação Swagger da API.

## Instanciar o LadesaApiClient

```ts
import { LadesaApiClient } from "@ladesa-ro/api-client-fetch";

const apiClient = new LadesaApiClient({
  BASE: "https://dev.ladesa.com.br/api",
});
```

## Utilização do LadesaApiClient

```ts
const response = await apiClient.campi.campusList();
console.log(response);
```

## Estrutura da classe LadesaApiClient

- [https://docs.ladesa.com.br/packages/npm/api-client-fetch/classes/LadesaApiClient.html](https://docs.ladesa.com.br/packages/npm/api-client-fetch/classes/LadesaApiClient.html)

<!--  -->

[pkg-class-ladesa-api-client]: https://docs.ladesa.com.br/packages/npm/api-client-fetch/classes/LadesaApiClient.html

<!-- Badges / Integrations / NPM -->

[npm-package-src]: https://img.shields.io/badge/npm-%40ladesa--ro%2Fapi--client--fetch-18181B?style=flat&logo=npm&logoColor=white&labelColor=%23CB3837
[source-code-small-src]: https://img.shields.io/badge/_-GitHub-white?style=flat&logo=git&logoColor=white&labelColor=%2318181B

<!-- Badges / Integrations / NPM / Versions -->

[npm-package-latest-version-src]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.com%2F%40ladesa-ro%2Fapi-client-fetch&query=%24%5B%22dist-tags%22%5D.latest&prefix=v&style=flat&logo=npm&logoColor=white&label=latest&style=flat&colorA=18181B&colorB=white
[npm-package-next-version-src]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.com%2F%40ladesa-ro%2Fapi-client-fetch&query=%24%5B%22dist-tags%22%5D.next&prefix=v&style=flat&logo=npm&logoColor=white&label=next&style=flat&colorA=18181B&colorB=white
