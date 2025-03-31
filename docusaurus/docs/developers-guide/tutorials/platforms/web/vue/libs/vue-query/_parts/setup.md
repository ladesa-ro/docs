:::code-group

```sh [npm]
npm install @tanstack/vue-query
```

```sh [pnpm]
pnpm add @tanstack/vue-query
```

```sh [yarn]
yarn add @tanstack/vue-query
```

```sh [bun]
bun add @tanstack/vue-query
```

:::

### Vue puro

```js
import { VueQueryPlugin } from "@tanstack/vue-query";

// ...

app.use(VueQueryPlugin);
```

### Nuxt 3

:::code-group

```ts [plugins/vue-query.ts]
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

:::
