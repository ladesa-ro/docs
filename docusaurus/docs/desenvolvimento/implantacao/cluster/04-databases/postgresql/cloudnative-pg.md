---
sidebar_position: 2
---

# Instalar CloudNativePG

https://github.com/cloudnative-pg/cloudnative-pg/blob/main/docs/src/installation_upgrade.md

```bash
kubectl apply --server-side -f https://raw.githubusercontent.com/cloudnative-pg/cloudnative-pg/release-1.25/releases/cnpg-1.25.0.yaml;
```

```bash
kubectl get deployment -n cnpg-system cnpg-controller-manager;
```

Veja mais:

- Exemplos de uso CloudNative-PG: https://cloudnative-pg.io/documentation/preview/samples/
