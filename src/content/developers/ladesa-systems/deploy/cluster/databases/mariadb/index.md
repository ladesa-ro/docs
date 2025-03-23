# MariaDB

## MariaDB Operator

<https://github.com/mariadb-operator/mariadb-operator/blob/main/docs/HELM.md#deployment-modes>

### Repositório Helm

```sh
helm repo add mariadb-operator https://helm.mariadb.com/mariadb-operator
helm repo update
```

## namespace `mariadb-system`

```sh
kubectl create namespace mariadb-system
```

### CRDs

```sh
helm install mariadb-operator-crds mariadb-operator/mariadb-operator-crds -n mariadb-system
```

### Operator

#### Para todo cluster

```sh
helm install mariadb-operator mariadb-operator/mariadb-operator -n mariadb-system
```

#### Para um namespace específico

```bash
helm install mariadb-operator \
  -n databases --create-namespace \
  --set currentNamespaceOnly=true \
  mariadb-operator/mariadb-operator
```

## Deploy

### Secret para credenciais do usuário root

```bash
cat <<EOF | xclip -sel copy
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: mariadb-root-secret
data:
  MARIADB_ROOT_PASSWORD: $(openssl rand -hex 16 | tr -d '\n' | base64)
EOF
```

```yaml
apiVersion: k8s.mariadb.com/v1alpha1
kind: MariaDB
metadata:
  name: mariadb-server
spec:
  rootPasswordSecretKeyRef:
    name: mariadb-root-secret
    key: MARIADB_ROOT_PASSWORD

  image: docker-registry1.mariadb.com/library/mariadb:11.4.3
  # imagePullSecrets:
  #   - name: registry # run 'make registry-secret' to generate a secret from ~/.docker/config.json
  imagePullPolicy: IfNotPresent

  port: 3306

  storage:
    size: 4Gi
    storageClassName: local-path
    resizeInUseVolumes: true
    waitForVolumeResize: true

  myCnf: |
    [mariadb]
    bind-address=*
    default_storage_engine=InnoDB
    binlog_format=row
    innodb_autoinc_lock_mode=2
    innodb_buffer_pool_size=1024M
    max_allowed_packet=256M

  # myCnfConfigMapKeyRef:
  #   name: mariadb
  #   key: my.cnf

  timeZone: "UTC"

  resources:
    requests:
      cpu: 100m
      memory: 128Mi
    limits:
      memory: 1Gi

  env:
    - name: TZ
      value: SYSTEM

  podSecurityContext:
    runAsUser: 0

  securityContext:
    allowPrivilegeEscalation: false

  livenessProbe:
    exec:
      command:
        - bash
        - -c
        - mariadb -u root -p"${MARIADB_ROOT_PASSWORD}" -e "SELECT 1;"
    initialDelaySeconds: 20
    periodSeconds: 5
    timeoutSeconds: 5

  readinessProbe:
    exec:
      command:
        - bash
        - -c
        - mariadb -u root -p"${MARIADB_ROOT_PASSWORD}" -e "SELECT 1;"
    initialDelaySeconds: 20
    periodSeconds: 5
    timeoutSeconds: 5

  podDisruptionBudget:
    maxUnavailable: 50%

  updateStrategy:
    type: ReplicasFirstPrimaryLast

  service:
    type: ClusterIP
    # type: LoadBalancer
    # metadata:
    #   annotations:
    #     metallb.universe.tf/loadBalancerIPs: 172.18.0.20
    # externalTrafficPolicy: Cluster
    # sessionAffinity: None

  # metrics:
  #   enabled: true

  suspend: false
```

### Usuário admin

```bash
cat <<EOF | xclip -sel copy
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: mariadb-user-ladesa-secrets
data:
  password: $(openssl rand -hex 16 | tr -d '\n' | base64)
EOF
```

```yaml
apiVersion: k8s.mariadb.com/v1alpha1
kind: User
metadata:
  name: user-ladesa
spec:
  name: ladesa
  mariaDbRef:
    name: mariadb-server
  passwordSecretKeyRef:
    name: mariadb-user-ladesa-secrets
    key: password
  maxUserConnections: 0
```

```yaml
apiVersion: k8s.mariadb.com/v1alpha1
kind: Grant
metadata:
  name: user-ladesa-grant
spec:
  username: ladesa
  mariaDbRef:
    name: mariadb-server
  privileges:
    - ALL PRIVILEGES
  database: "*"
  table: "*"
```

### Banco de Exemplo

```yaml
apiVersion: k8s.mariadb.com/v1alpha1
kind: Database
metadata:
  name: exemplo
spec:
  mariaDbRef:
    name: mariadb-server
```

```bash
cat <<EOF | xclip -sel copy
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: mariadb-user-exemplo-secrets
data:
  password: $(openssl rand -hex 16 | tr -d '\n' | base64)
EOF
```

```yaml
apiVersion: k8s.mariadb.com/v1alpha1
kind: User
metadata:
  name: exemplo
spec:
  mariaDbRef:
    name: mariadb-server
  passwordSecretKeyRef:
    name: mariadb-user-exemplo-secrets
    key: password
  maxUserConnections: 0
```

```yaml
apiVersion: k8s.mariadb.com/v1alpha1
kind: Grant
metadata:
  name: user-exemplo-grant
spec:
  username: exemplo
  mariaDbRef:
    name: mariadb-server
  privileges:
    - ALL PRIVILEGES
  database: "exemplo"
  table: "*"
```
