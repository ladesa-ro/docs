---
sidebar_position: 1
---

# Configurar o CertManager

## Instalação

```bash
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.16.2/cert-manager.yaml
```

### Verificar instalação

```bash
kubectl get pods --namespace cert-manager
```
