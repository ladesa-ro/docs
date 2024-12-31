# ClusterIssuer

<!-- ## Development

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer

metadata:
  name: ladesa-ro-issuer-development
  namespace: cert-manager

spec:
  selfSigned: {}
  # acme:
  #   # The ACME server URL
  #   server: https://acme-staging-v02.api.letsencrypt.org/directory
  #   # Email address used for ACME registration
  #   email: your_email_address_here
  #   # Name of a secret used to store the ACME account private key
  #   privateKeySecretRef:
  #     name: ladesa-ro-issuer-development
  #   # Enable the HTTP-01 challenge provider
  #   solvers:
  #     - http01:
  #         ingress:
  #           class: nginx

``` -->

## Production

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: ladesa-ro-issuer-production
  namespace: ladesa-ro-production
spec:
  acme:
    email: ${EMAIL}
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      name: ladesa-ro-issuer-production
    solvers:
      - http01:
          ingress:
            class: traefik
```

```bash
kubectl describe ClusterIssuer -n ladesa-ro-production
```

```bash
kubectl describe certificate -n ladesa-ro-production
```
