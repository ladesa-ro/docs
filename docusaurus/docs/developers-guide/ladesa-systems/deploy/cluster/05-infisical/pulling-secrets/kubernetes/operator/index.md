---
sidebar_position: 1
---

# Infisical Operator

[Kubernetes Operator - Infisical](https://infisical.com/docs/integrations/platforms/kubernetes#authentication-universalauth)

```sql
helm repo add infisical-helm-charts 'https://dl.cloudsmith.io/public/infisical/helm-charts/helm/charts/'

helm repo update
```

```sql
helm install --generate-name infisical-helm-charts/secrets-operator --version=0.8.0 --set controllerManager.manager.image.tag=v0.8.0
```

---

```yaml
apiVersion: secrets.infisical.com/v1alpha1
kind: InfisicalSecret
metadata:
  name: infisicalsecret-sample
  labels:
    label-to-be-passed-to-managed-secret: sample-value
  annotations:
    example.com/annotation-to-be-passed-to-managed-secret: "sample-value"
spec:
  hostAPI: https://app.infisical.com/api
  resyncInterval: 10
  authentication:
    universalAuth:
      secretsScope:
        projectSlug: new-ob-em
        envSlug: dev # "dev", "staging", "prod", etc..
        secretsPath: "/" # Root is "/"
        recursive: true # Whether or not to use recursive mode (Fetches all secrets in an environment from a given secret path, and all folders inside the path) / defaults to false
      credentialsRef:
        secretName: universal-auth-credentials
        secretNamespace: default
  managedSecretReference:
    secretName: managed-secret
    secretNamespace: default
    creationPolicy: "Orphan" ## Owner | Orphan
```
