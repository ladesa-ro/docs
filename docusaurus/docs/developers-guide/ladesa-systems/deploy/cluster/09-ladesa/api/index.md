# API

## PersistentVolumeClaim

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ladesa-ro-api-uploaded-pvc
  namespace: ladesa-ro-development
  labels:
    app: ladesa-ro-api
spec:
  # storageClassName: ""
  # volumeName: ladesa-ro-api-uploaded-development-pv
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi
```

## Secrets

```yaml
apiVersion: secrets.infisical.com/v1alpha1
kind: InfisicalSecret
metadata:
  name: infisicalsecret-api-configs-dev
spec:
  hostAPI: https://infisical.ladesa.com.br/api
  resyncInterval: 10
  authentication:
    universalAuth:
      secretsScope:
        projectSlug: api-asq-e
        envSlug: dev
        secretsPath: "/"
        recursive: false
      credentialsRef:
        secretName: universal-auth-credentials
        secretNamespace: default
  managedSecretReference:
    secretName: ladesa-ro-api-config
    secretNamespace: ladesa-ro-development
```
