---
sidebar_position: 1
---

# Configurar Servidor do Infisical

[Kubernetes via Helm Chart - Infisical](https://infisical.com/docs/self-hosting/deployment-options/kubernetes-helm)

```bash
helm repo add infisical-helm-charts 'https://dl.cloudsmith.io/public/infisical/helm-charts/helm/charts/'
helm repo update
```

```yaml
mkdir -p /tmp/ladesa-ro/cluster-setup/infisical;
cd /tmp/ladesa-ro/cluster-setup/infisical;
```

```bash
kubectl create namespace infisical;
```

```bash
# encryption key
openssl rand -base64 16 | xclip -copy sel
```

```bash
# auth key
openssl rand -base64 32 | xclip -copy sel
```

```bash
cat <<EOF > setup.env
ENCRYPTION_KEY=<encryption key>
AUTH_SECRET=<auth key>
SITE_URL=https://infisical.ladesa.com.br
PORT=8080
TELEMETRY_ENABLED=true
REDIS_URL=redis://<redis username>:<redis-password>@redis-server.redis-server.svc.cluster.local:6379/0
DB_CONNECTION_URI=postgres://infisical:$(openssl rand -hex 16)@cluster-postgres-rw.default.svc.cluster.local/infisical
EOF
```

```sql
create database infisical;
create user infisical with encrypted password 'CHANGEME';
grant all privileges on database infisical to infisical;
ALTER DATABASE infisical OWNER TO infisical;

\c infisical;
GRANT USAGE, CREATE ON SCHEMA public TO infisical;
```

```bash
kubectl create secret generic infisical-secrets \
 --from-env-file=./setup.env \
 --dry-run=client \
 -o yaml \
 -n infisical \
| kubectl apply -f -;
```

```bash
cat <<EOF > values.yaml
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
EOF
```

```bash
helm upgrade --install infisical infisical-helm-charts/infisical-standalone --values values.yaml --namespace infisical
```

```bash
cd ~;
rm -rf /tmp/ladesa-ro/cluster-setup/infisical;
```
