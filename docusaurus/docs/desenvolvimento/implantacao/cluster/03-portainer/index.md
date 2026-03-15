---
sidebar_position: 3
---

# Configurar o Portainer

```bash
helm repo add portainer https://portainer.github.io/k8s/
helm repo update
```

```bash
helm upgrade --install --create-namespace -n portainer portainer portainer/portainer \
    --set service.type=ClusterIP \
    --set image.tag=2.21.5 \
    --set ingress.enabled=true \
    --set ingress.hosts\[0\].host=portainer.ladesa.com.br \
    --set ingress.hosts\[0\].paths\[0\].path="/"
```
