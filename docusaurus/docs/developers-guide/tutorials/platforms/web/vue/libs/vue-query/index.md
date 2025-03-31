# vue-query

## Propósito

As aplicações modernas podem ser divididas primordialmente em duas camadas separadas:

- Interface ao usuário;
- Servidor com as regras de negócio.

O vue-query é uma biblioteca que deixa a busca de dados externos uma maravilha, trazendo recursos como consultas
periódicas automáticas, caching e tentativas automáticas quando ocorre algum erro em alguma consulta.

## Instalação

<TabsNpmInstall packages="@tanstack/vue-query" />

### Vue puro

```js
import { VueQueryPlugin } from "@tanstack/vue-query";

// ...

app.use(VueQueryPlugin);
```

### Nuxt 3

```ts title="plugins/vue-query.ts"
import { useState } from "#app";
import { persistQueryClient } from "@tanstack/query-persist-client-core";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import type {
  DehydratedState,
  VueQueryPluginOptions,
} from "@tanstack/vue-query";
import {
  QueryClient,
  VueQueryPlugin,
  dehydrate,
  hydrate,
} from "@tanstack/vue-query";

export default defineNuxtPlugin((nuxt) => {
  const vueQueryState = useState<DehydratedState | null>("vue-query");

  // Modify your Vue Query global settings here
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1 * 60 * 60 * 1000,
        refetchOnMount: "always",
        retry: false,
      },
    },
  });

  const options: VueQueryPluginOptions = {
    queryClient,

    clientPersister: (queryClient: any) => {
      let storage = undefined;

      if (typeof window !== "undefined") {
        storage = localStorage;
      }

      return persistQueryClient({
        queryClient,

        persister: createSyncStoragePersister({
          storage: storage ?? undefined,
        }),
      });
    },
  };

  nuxt.vueApp.use(VueQueryPlugin, options);

  if (import.meta.server) {
    nuxt.hooks.hook("app:rendered", () => {
      vueQueryState.value = dehydrate(queryClient);
    });
  }

  if (import.meta.client) {
    nuxt.hooks.hook("app:created", () => {
      hydrate(queryClient, vueQueryState.value);
    });
  }
});
```
