---
sidebar_position: 2
---

# Implantar um cluster PostgreSQL

Baseado em: https://cloudnative-pg.io/documentation/preview/quickstart/#part-3-deploy-a-postgresql-cluster

## Cluster

```yml title="cluster.yml"
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: cluster-postgres
  namespace: default
spec:
  instances: 3

  storage:
    # storageClass:
    size: 4Gi

  # managed:
  #   roles:
  #     - name: example
  #       ensure: present
  #       superuser: false
  #       passwordSecret:
  #         name: db-role-example-secret
```

Documentações dos resources:

- `Cluster`: https://cloudnative-pg.io/documentation/preview/cloudnative-pg.v1/#postgresql-cnpg-io-v1-Cluster.
- `ClusterSpec`: https://cloudnative-pg.io/documentation/preview/cloudnative-pg.v1/#postgresql-cnpg-io-v1-ClusterSpec
- `ManagedConfiguration`: https://cloudnative-pg.io/documentation/preview/cloudnative-pg.v1/#postgresql-cnpg-io-v1-ManagedConfiguration
- `RoleConfiguration`: https://cloudnative-pg.io/documentation/preview/cloudnative-pg.v1/#postgresql-cnpg-io-v1-RoleConfiguration

## Arquitetura do Cluster

O CloudNativePG suporta clusters baseados em replicação de streaming assíncrona e síncrona para gerenciar múltiplas réplicas hot standby dentro do mesmo cluster Kubernetes, com as seguintes especificações:​

- Um primário, com múltiplas réplicas hot standby opcionais para alta disponibilidade. ​
- Serviços disponíveis para aplicações:​
  - `-rw`: instância primária do cluster. ​
  - `-ro`: réplicas hot standby para cargas de trabalho de leitura (opcional). ​
  - `-r`: qualquer uma das instâncias para cargas de trabalho de leitura, incluindo a instância primária (opcional). ​

```bash
cluster-postgres-r.default.svc.cluster.local:5432
cluster-postgres-ro.default.svc.cluster.local:5432
cluster-postgres-rw.default.svc.cluster.local:5432
```

Referências:

- Arquitetura: https://cloudnative-pg.io/documentation/preview/architecture/#postgresql-architecture
- Configuração de Réplicas: https://cloudnative-pg.io/documentation/preview/operator_capability_levels/#replica-configuration

<details>

<summary>Anotações Soltas</summary>

```sh
kubectl port-forward service/cluster-postgres-rw 5432
```

```sh
ssh -N -L 5432:localhost:5432 root@{}
```

</details>

## Gerenciar Bancos de Dados

Referência: https://cloudnative-pg.io/documentation/1.25/declarative_database_management/#

## Veja mais

- https://www.gabrielebartolini.it/articles/2024/03/cloudnativepg-recipe-3-what-no-superuser-access/
