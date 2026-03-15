---
sidebar_position: 2
---

# Infisical Secret Resource

```yaml
kubectl create secret generic universal-auth-credentials \
--from-literal=clientId="YOUR_CLIENT_ID" \
--from-literal=clientSecret="YOUR_CLIENT_SECRET"
```

```yaml
apiVersion: secrets.infisical.com/v1alpha1
kind: InfisicalSecret
metadata:
  name: infisicalsecret-sample
spec:
  hostAPI: https://infisical.ladesa.com.br/api
  resyncInterval: 10
  authentication:
    universalAuth:
      secretsScope:
        projectSlug: your-project-slug
        envSlug: dev
        secretsPath: "/"
        recursive: true
      credentialsRef:
        secretName: universal-auth-credentials
        secretNamespace: default
  managedSecretReference:
    secretName: managed-secret
    secretNamespace: default
```

---

## sso

```yaml
apiVersion: secrets.infisical.com/v1alpha1
kind: InfisicalSecret
metadata:
  name: infisicalsecret-sso-prod
spec:
  hostAPI: https://infisical.ladesa.com.br/api
  resyncInterval: 10
  authentication:
    universalAuth:
      secretsScope:
        projectSlug: sso-oxqs
        envSlug: prod
        secretsPath: "/"
        recursive: true
      credentialsRef:
        secretName: universal-auth-credentials
        secretNamespace: default
  managedSecretReference:
    secretName: ladesa-ro-sso-config
    secretNamespace: ladesa-ro-production
```
