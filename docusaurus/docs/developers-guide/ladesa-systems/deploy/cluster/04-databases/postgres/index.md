# Postgres

## Instalar o CloudNative PG

[https://github.com/cloudnative-pg/cloudnative-pg/blob/main/docs/src/installation_upgrade.md](https://github.com/cloudnative-pg/cloudnative-pg/blob/main/docs/src/installation_upgrade.md)

```bash
kubectl apply --server-side -f \
  https://raw.githubusercontent.com/cloudnative-pg/cloudnative-pg/release-1.25/releases/cnpg-1.25.0.yaml
```

```bash
kubectl get deployment -n cnpg-system cnpg-controller-manager
```

[https://cloudnative-pg.io/documentation/1.25/use_cases/](https://cloudnative-pg.io/documentation/1.25/use_cases/)

```bash
apiVersion: v1
kind: Secret
type: kubernetes.io/basic-auth
data:
  username: b64
  password: b64
metadata:
  name: db-postgres-secret
---
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: cluster-postgres
spec:
  instances: 3

  bootstrap:
    initdb:
      database: postgres
      owner: postgres
      secret:
        name: db-postgres-secret

  storage:
    # storageClass: standard
    size: 1Gi
```

```sql
ALTER USER user_name WITH PASSWORD 'new_password';
```

```bash
rm ~/.psql_history
```

```bash
kubectl port-forward service/cluster-postgres-rw 5432
```

```bash
ssh -N -L 5432:localhost:5432 root@{}
```

```bash
cluster-postgres-r.default.svc.cluster.local
cluster-postgres-ro.default.svc.cluster.local
cluster-postgres-rw.default.svc.cluster.local
```
