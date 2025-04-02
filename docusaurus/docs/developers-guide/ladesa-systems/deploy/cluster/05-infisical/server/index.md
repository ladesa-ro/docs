---
sidebar_position: 1
---

# Servidor do Infisical

## Configurar Banco de Dados

### Role `infisical`

Criação do secret:

```yml
apiVersion: v1
kind: Secret
metadata:
  name: db-role-infisical-secret
  namespace: default
  labels:
    cnpg.io/reload: "true"
type: kubernetes.io/basic-auth
data:
  username: aW5maXNpY2Fs
  password: <senha segura gerada aleatóriamente>
```

Geração da senha segura do usuário `infisical`:

```bash
openssl rand -hex 16 | tr -d '\n' | base64 | xclip -sel copy
```

Configurar [Cluster PG](../../04-databases/postgresql/create-db-cluster.md) para gerenciar o usuário `infisical`:

```yml title="cluster.yml"
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: cluster-postgres
  namespace: default
spec:
  # [...]
  // highlight-start
  managed:
    roles:
      - name: infisical
        ensure: present
        superuser: false
        passwordSecret:
          name: db-role-infisical-secret
  // highlight-end
```

### Banco `infisical`

```yml
apiVersion: postgresql.cnpg.io/v1
kind: Database
metatada:
  name: db-infisical
  namespace: default
spec:
  cluster:
    name: cluster-postgres
  name: infisical
  owner: infisical
  ensure: present
```

## Deploy do Infisical

[Kubernetes via Helm Chart - Infisical](https://infisical.com/docs/self-hosting/deployment-options/kubernetes-helm)

```bash
helm repo add infisical-helm-charts 'https://dl.cloudsmith.io/public/infisical/helm-charts/helm/charts/'
helm repo update
```

```bash
kubectl create namespace infisical;
```

### Gerar Chaves Seguras do Infisical

#### Chave de Encriptação

```bash
openssl rand -hex 16 | tr -d '\n' | xclip -sel copy
```

#### Chave de Autenticação

```bash
openssl rand -base64 32 | tr -d '\n' | xclip -sel copy
```

```env title="infisical.env"
PORT=8080
SITE_URL=https://infisical.ladesa.com.br

TELEMETRY_ENABLED=true

REDIS_URL=redis://<redis username>:<redis-password>@redis-server.redis-server.svc.cluster.local:6379/0
DB_CONNECTION_URI=postgres://infisical:<infisical role password>@cluster-postgres-rw.default.svc.cluster.local/infisical

AUTH_SECRET=<auth key>
ENCRYPTION_KEY=<encryption key>
```

```bash
kubectl create secret generic infisical-secrets \
  -n infisical \
  --from-env-file=./infisical.env \
  --dry-run=client \
  -o yaml \
  | kubectl apply -f -;
```

```yml title="values.yml"
nameOverride: "infisical"
fullnameOverride: "infisical"

infisical:
  enabled: true
  name: infisical
  autoDatabaseSchemaMigration: true
  fullnameOverride: ""
  podAnnotations: {}
  deploymentAnnotations: {}
  replicaCount: 6

  image:
    repository: infisical/infisical
    tag: "v0.99.0-postgres"
    pullPolicy: IfNotPresent

  affinity: {}
  kubeSecretRef: "infisical-secrets"
  service:
    annotations: {}
    type: ClusterIP
    nodePort: ""

  resources:
    limits:
      memory: 2Gi
    requests:
      memory: 1Gi
      cpu: 200m

ingress:
  enabled: true
  hostName: "infisical.ladesa.com.br"
  ingressClassName: traefik
  nginx:
    enabled: false

postgresql:
  enabled: false

redis:
  enabled: false
```

```bash
helm upgrade --install --create-namespace infisical infisical-helm-charts/infisical-standalone --namespace infisical --values values.yaml
```
