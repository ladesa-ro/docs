---
sidebar_position: 2
---

# Provedores de Certificado

O cert-manager obtém novos certificados dos Provedores de Certificados conforme as regras configuradas. Por meio dos recursos do tipo `Issuer` ou `ClusterIssuer`, é possível definir de forma precisa qual autoridade (ou provedor) será utilizada para gerar cada certificado – podendo, inclusive, aplicar filtros com base em domínios, entre outros critérios.

- `Issuer`: recurso criado em um namespace específico do cluster Kubernetes, e só pode ser utilizado por certificados que residem nesse mesmo namespace.

- `Cluster Issuer`: recurso de âmbito cluster, disponível para todos os namespaces. Dessa forma, pode ser referenciado por certificados localizados em qualquer parte do cluster.

A escolha de utilização entre `Issuer` e `ClusterIssuer` pode ficar à critério de cada caso, sendo o responsável pela implantação considerar o melhor caso.

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

## Ambiente de Produção

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: ladesa-ro-issuer-production
  namespace: ladesa-ro-production
spec:
  acme:
    email: <email para registro no lets encrypt>
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
