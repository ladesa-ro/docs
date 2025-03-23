# RabbitMQ

## PersistentVolumeClaim

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: rabbitmq-mnesia-pvc
  namespace: ladesa-ro-production
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 3Gi
```

## Secrets

```yaml
apiVersion: secrets.infisical.com/v1alpha1
kind: InfisicalSecret
metadata:
  name: infisicalsecret-rabbitmq-configs-prod
spec:
  hostAPI: https://infisical.ladesa.com.br/api
  resyncInterval: 10
  authentication:
    universalAuth:
      secretsScope:
        projectSlug: rabbitmq-4sh-s
        envSlug: prod
        secretsPath: "/"
        recursive: false
      credentialsRef:
        secretName: universal-auth-credentials
        secretNamespace: default
  managedSecretReference:
    secretName: ladesa-ro-rabbitmq-config
    secretNamespace: ladesa-ro-production
```


```yaml
apiVersion: secrets.infisical.com/v1alpha1
kind: InfisicalSecret
metadata:
  name: infisicalsecret-rabbitmq-conf-prod
spec:
  hostAPI: https://infisical.ladesa.com.br/api
  resyncInterval: 10
  authentication:
    universalAuth:
      secretsScope:
        projectSlug: rabbitmq-4sh-s
        envSlug: prod
        secretsPath: "/config"
        recursive: false
      credentialsRef:
        secretName: universal-auth-credentials
        secretNamespace: default
  managedSecretReference:
    secretName: ladesa-ro-rabbitmq-config
    secretNamespace: ladesa-ro-production
```

## Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: rabbitmq
  namespace: ladesa-ro-production
spec:
  replicas: 1
  selector:
    matchLabels:
      app: rabbitmq
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: rabbitmq
    spec:
      containers:
        - image: bitnami/rabbitmq:3.12
          imagePullPolicy: IfNotPresent
          name: rabbitmq
          ports:
            - containerPort: 15672
              name: web
            - containerPort: 5672
              name: amqp
          readinessProbe:
            httpGet:
              path: /
              port: 15672
            initialDelaySeconds: 10
            periodSeconds: 10
          livenessProbe:
            httpGet:
              path: /
              port: 15672
            initialDelaySeconds: 10
            periodSeconds: 15
          startupProbe:
            failureThreshold: 30
            httpGet:
              path: /
              port: 15672
            periodSeconds: 10
          # resources:
          #   limits:
          #     cpu: "0.5"
          #     memory: 1Gi
          envFrom:
            - secretRef:
                name: ladesa-ro-rabbitmq-config
          volumeMounts:
            - mountPath: /bitnami/rabbitmq/mnesia
              name: rabbitmq-mnesia-vol
      volumes:
        - name: rabbitmq-mnesia-vol
          persistentVolumeClaim:
            claimName: rabbitmq-mnesia-pvc
```

## Service

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: rabbitmq
  name: rabbitmq-web
  namespace: ladesa-ro-production
spec:
  ports:
    - name: web
      port: 80
      targetPort: web
  selector:
    app: rabbitmq
  type: NodePort
```

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: rabbitmq
  name: rabbitmq-amqp
  namespace: ladesa-ro-production
spec:
  ports:
    - name: amqp
      port: 5672
      targetPort: amqp
  selector:
    app: rabbitmq
  type: LoadBalancer
```

## Ingress

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    cert-manager.io/cluster-issuer: ladesa-ro-issuer-production
  name: rabbitmq-ingress
  namespace: ladesa-ro-production
spec:
  rules:
    - host: mq.ladesa.com.br
      http:
        paths:
          - backend:
              service:
                name: rabbitmq-web
                port:
                  name: web
            path: /
            pathType: Prefix
  tls:
    - hosts:
        - mq.ladesa.com.br
      secretName: rabbitmq-cert-production-tls
```

## Secrets for Registry Pulling

<https://github.com/Infisical/infisical/issues/2058>

<https://github.com/Infisical/infisical/issues/859>

```yaml
apiVersion: secrets.infisical.com/v1alpha1
kind: InfisicalSecret
metadata:
  name: infisicalsecret-registry-pull-prod
  # annotations:
  #   argocd.argoproj.io/sync-options: Prune=false
spec:
  hostAPI: https://infisical.ladesa.com.br/api
  resyncInterval: 60
  authentication:
    universalAuth:
      secretsScope:
        projectSlug: registry-pull-h7-z4
        envSlug: prod
        secretsPath: "/dockerconfig"
      credentialsRef:
        secretName: universal-auth-credentials
        secretNamespace: default
  managedSecretReference:
    secretName: ladesa-registry-pull-secret
    secretNamespace: ladesa-ro-production
    # creationPolicy: "Owner"
    secretType: "kubernetes.io/dockerconfigjson"
```
