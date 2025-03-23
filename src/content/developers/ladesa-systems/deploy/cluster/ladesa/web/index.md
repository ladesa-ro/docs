# Web

## Secrets

```yaml
apiVersion: secrets.infisical.com/v1alpha1
kind: InfisicalSecret
metadata:
  name: infisicalsecret-web-configs-dev
spec:
  hostAPI: https://infisical.ladesa.com.br/api
  resyncInterval: 10
  authentication:
    universalAuth:
      secretsScope:
        projectSlug: web-15h-s
        envSlug: dev
        secretsPath: "/"
        recursive: false
      credentialsRef:
        secretName: universal-auth-credentials
        secretNamespace: default
  managedSecretReference:
    secretName: ladesa-ro-web-config
    secretNamespace: ladesa-ro-development
```
