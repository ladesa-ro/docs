# Configurar o Registry

## PersistentVolumeClaim

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: registry-artifacts-pvc
  namespace: ladesa-ro-production
spec:
  # storageClassName: default
  # volumeName: registry-artifacts-production-pv
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
```

## Secrets

```yaml
apiVersion: secrets.infisical.com/v1alpha1
kind: InfisicalSecret
metadata:
  name: infisicalsecret-registry-configs-prod
spec:
  hostAPI: https://infisical.ladesa.com.br/api
  resyncInterval: 10
  authentication:
    universalAuth:
      secretsScope:
        projectSlug: registry-0-h-yj
        envSlug: prod
        secretsPath: "/"
        recursive: false
      credentialsRef:
        secretName: universal-auth-credentials
        secretNamespace: default
  managedSecretReference:
    secretName: ladesa-ro-registry-config
    secretNamespace: ladesa-ro-production
```

```yaml
apiVersion: secrets.infisical.com/v1alpha1
kind: InfisicalSecret
metadata:
  name: infisicalsecret-registry-certificates-prod
spec:
  hostAPI: https://infisical.ladesa.com.br/api
  resyncInterval: 10
  authentication:
    universalAuth:
      secretsScope:
        projectSlug: registry-0-h-yj
        envSlug: prod
        secretsPath: "/certificates/"
        recursive: false
      credentialsRef:
        secretName: universal-auth-credentials
        secretNamespace: default
  managedSecretReference:
    secretName: ladesa-ro-registy-config-auth-cert
    secretNamespace: ladesa-ro-production
```

## Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: registry
  namespace: ladesa-ro-production
spec:
  replicas: 1
  selector:
    matchLabels:
      app: registry
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: registry
    spec:
      containers:
        - image: registry:2
          imagePullPolicy: IfNotPresent
          livenessProbe:
            httpGet:
              path: /
              port: 5000
            initialDelaySeconds: 10
            periodSeconds: 15
          name: registry
          ports:
            - containerPort: 5000
              name: web
          readinessProbe:
            httpGet:
              path: /
              port: 5000
            initialDelaySeconds: 10
            periodSeconds: 10
          resources:
            limits:
              cpu: "0.5"
              memory: 1Gi
          startupProbe:
            failureThreshold: 30
            httpGet:
              path: /
              port: 5000
            periodSeconds: 10
          envFrom:
            - secretRef:
                name: ladesa-ro-registry-config
          volumeMounts:
            - mountPath: /data
              name: registry-artifacts-vol
            - mountPath: /opt/certs
              name: auth-cert
              readOnly: true
      volumes:
        - name: registry-artifacts-vol
          persistentVolumeClaim:
            claimName: registry-artifacts-pvc
        - name: auth-cert
          secret:
            secretName: ladesa-ro-registy-config-auth-cert
```

## Service

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: registry
  name: registry
  namespace: ladesa-ro-production
spec:
  ports:
    - name: web
      port: 80
      targetPort: web
  selector:
    app: registry
  type: NodePort
```

## Ingress

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    cert-manager.io/cluster-issuer: ladesa-ro-issuer-production
    nginx.ingress.kubernetes.io/enable-cors: "true"
    nginx.ingress.kubernetes.io/proxy-body-size: "0"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "600"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "600"
    traefik.ingress.kubernetes.io/client-body-timeout: "600"
    traefik.ingress.kubernetes.io/client-header-timeout: "600"
  name: registry-ingress
  namespace: ladesa-ro-production
spec:
  rules:
    - host: registry.ladesa.com.br
      http:
        paths:
          - backend:
              service:
                name: registry
                port:
                  name: web
            path: /
            pathType: Prefix
  tls:
    - hosts:
        - registry.ladesa.com.br
      secretName: registry-cert-production-tls
```

## Secrets for Registry Pulling

[https://github.com/Infisical/infisical/issues/2058](https://github.com/Infisical/infisical/issues/2058)

[https://github.com/Infisical/infisical/issues/859](https://github.com/Infisical/infisical/issues/859)

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
