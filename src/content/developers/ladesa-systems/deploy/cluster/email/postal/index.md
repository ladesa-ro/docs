# Postal

<https://docs.postalserver.io/other/containers>

<https://docs.postalserver.io/getting-started/configuration>

## Banco de Dados

### banco postal

```yaml
apiVersion: k8s.mariadb.com/v1alpha1
kind: Database
metadata:
  name: postal
spec:
  mariaDbRef:
    name: mariadb-server
```

### secret com credenciais do usuário postal

```bash
cat <<EOF | xclip -sel copy
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: mariadb-user-postal-secrets
data:
  password: $(openssl rand -hex 16 | tr -d '\n' | base64)
EOF
```

### usuario postal no banco

```yaml
apiVersion: k8s.mariadb.com/v1alpha1
kind: User
metadata:
  name: postal
spec:
  mariaDbRef:
    name: mariadb-server
  passwordSecretKeyRef:
    name: mariadb-user-postal-secrets
    key: password
  maxUserConnections: 0
```

### permissões para o usuário postal nos bancos "postal" e "postal-%"

```yaml
apiVersion: k8s.mariadb.com/v1alpha1
kind: Grant
metadata:
  name: user-postal-grant-db-postal
spec:
  username: postal
  mariaDbRef:
    name: mariadb-server
  privileges:
    - ALL PRIVILEGES
  database: "postal"
  table: "*"
---
apiVersion: k8s.mariadb.com/v1alpha1
kind: Grant
metadata:
  name: user-postal-grant-db-postal-wildcard
spec:
  username: postal
  mariaDbRef:
    name: mariadb-server
  privileges:
    - ALL PRIVILEGES
  database: "postal-%"
  table: "*"
```

## Configurações

### variáveis de ambiente

```yaml
apiVersion: secrets.infisical.com/v1alpha1
kind: InfisicalSecret
metadata:
  name: infisicalsecret-postal-configs-prod
spec:
  hostAPI: https://infisical.ladesa.com.br/api
  resyncInterval: 10
  authentication:
    universalAuth:
      secretsScope:
        projectSlug: postal-zwxh
        envSlug: prod
        secretsPath: "/"
        recursive: false
      credentialsRef:
        secretName: universal-auth-credentials
        secretNamespace: default
  managedSecretReference:
    secretName: ladesa-ro-postal-config
    secretNamespace: ladesa-ro-production
```

### arquivos de /config

#### /config/signing.key

```bash
openssl genrsa 2048 | tr -d '\n' | xclip -sel copy
```

#### chaves tls para o smtp

```bash
openssl req -x509 -newkey rsa:4096 -keyout ./smtp.key -out ./smtp.cert -sha256 -days 365 -nodes
```

```bash
cat smtp.key | tr -d '\n' | xclip -sel copy
```

```bash
cat smtp.cert | tr -d '\n' | xclip -sel copy
```

```bash
rm smtp.key smtp.cert
```

```yaml
apiVersion: secrets.infisical.com/v1alpha1
kind: InfisicalSecret
metadata:
  name: infisicalsecret-postal-config-dir-prod
spec:
  hostAPI: https://infisical.ladesa.com.br/api
  resyncInterval: 10
  authentication:
    universalAuth:
      secretsScope:
        projectSlug: postal-zwxh
        envSlug: prod
        secretsPath: "/config/"
        recursive: false
      credentialsRef:
        secretName: universal-auth-credentials
        secretNamespace: default
  managedSecretReference:
    secretName: ladesa-ro-postal-config-dir
    secretNamespace: ladesa-ro-production
```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postal-web-server
  namespace: ladesa-ro-production
  annotations:
    secrets.infisical.com/auto-reload: "true"
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postal-web-server-pod
  # strategy:
  #   rollingUpdate:
  #     maxSurge: 1
  #     maxUnavailable: 0
  template:
    metadata:
      labels:
        app: postal-web-server-pod
    spec:
      containers:
        - image: ghcr.io/postalserver/postal:3.3.4
          imagePullPolicy: IfNotPresent
          name: postal-web-server-container
          command: ["postal"]
          args: ["web-server"]
          ports:
            - containerPort: 5000
              name: web
          resources:
            limits:
              cpu: "0.5"
              memory: 250Mi
          envFrom:
            - secretRef:
                name: ladesa-ro-postal-config
          volumeMounts:
            - mountPath: /config
              name: config-dir
              readOnly: true
      volumes:
        - name: config-dir
          secret:
            secretName: ladesa-ro-postal-config-dir
```

```sh
postal initialize
postal make-user
```

```yaml
apiVersion: v1
kind: Service
metadata:
  name: postal-web-server-service
  namespace: ladesa-ro-production
spec:
  ports:
    - name: web
      port: 80
      targetPort: web
  selector:
    app: postal-web-server-pod
  type: NodePort
```

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    cert-manager.io/cluster-issuer: ladesa-ro-issuer-production
  #   nginx.ingress.kubernetes.io/enable-cors: "true"
  #   nginx.ingress.kubernetes.io/proxy-body-size: "0"
  #   nginx.ingress.kubernetes.io/proxy-read-timeout: "600"
  #   nginx.ingress.kubernetes.io/proxy-send-timeout: "600"
  name: postal-web-server-ingress
  namespace: ladesa-ro-production
spec:
  rules:
    - host: postal.ladesa.com.br
      http:
        paths:
          - backend:
              service:
                name: postal-web-server-service
                port:
                  name: web
            path: /
            pathType: Prefix
  tls:
    - hosts:
        - postal.ladesa.com.br
      secretName: postal-cert-production-tls
```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postal-smtp-server
  namespace: ladesa-ro-production
  annotations:
    secrets.infisical.com/auto-reload: "true"
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postal-smtp-server-pod
  # strategy:
  #   rollingUpdate:
  #     maxSurge: 1
  #     maxUnavailable: 0
  template:
    metadata:
      labels:
        app: postal-smtp-server-pod
    spec:
      containers:
        - image: ghcr.io/postalserver/postal:3.3.4
          imagePullPolicy: IfNotPresent
          name: postal-smtp-server-container
          command: ["postal"]
          args: ["smtp-server"]
          ports:
            - containerPort: 465
              name: smtp-tls
          resources:
            limits:
              cpu: "0.5"
              memory: 250Mi
          envFrom:
            - secretRef:
                name: ladesa-ro-postal-config
          volumeMounts:
            - mountPath: /config
              name: config-dir
              readOnly: true
      volumes:
        - name: config-dir
          secret:
            secretName: ladesa-ro-postal-config-dir
```

```yaml
apiVersion: v1
kind: Service
metadata:
  name: postal-smtp-server-service
  namespace: ladesa-ro-production
spec:
  ports:
    - name: smtp-tls
      port: 465
      targetPort: smtp-tls
  selector:
    app: postal-smtp-server-pod
  type: LoadBalancer
```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postal-worker
  namespace: ladesa-ro-production
  annotations:
    secrets.infisical.com/auto-reload: "true"
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postal-worker-pod
  # strategy:
  #   rollingUpdate:
  #     maxSurge: 1
  #     maxUnavailable: 0
  template:
    metadata:
      labels:
        app: postal-worker-pod
    spec:
      containers:
        - image: ghcr.io/postalserver/postal:3.3.4
          imagePullPolicy: IfNotPresent
          name: postal-worker-container
          command: ["postal"]
          args: ["worker"]
          resources:
            limits:
              cpu: "0.5"
              memory: 250Mi
          envFrom:
            - secretRef:
                name: ladesa-ro-postal-config
          volumeMounts:
            - mountPath: /config
              name: config-dir
              readOnly: true
      volumes:
        - name: config-dir
          secret:
            secretName: ladesa-ro-postal-config-dir
```
