# Configurar Integração do Traefik ao Kubernetes

Foi escolhido o proxy traefik para ser o Ingress Controller do cluster. Para a utilização de recursos extras do traefik, como o `Ingress Route`, é necessário configurar as Definições de Recurso Personalizadas (em inglês: `Custom Resource Definition`, também conhecido como `CRD`).

- Traefik Kubernetes CRDs: [https://doc.traefik.io/traefik/providers/kubernetes-crd/](https://doc.traefik.io/traefik/providers/kubernetes-crd/)

Além disso, a configuração do traefik como proxy e ingress controller é feita mediante o _chart_ helm:

- [https://doc.traefik.io/traefik/getting-started/install-traefik/#use-the-helm-chart](https://doc.traefik.io/traefik/getting-started/install-traefik/#use-the-helm-chart)
