# Iniciar o Cluster Kubernetes com o Kind

O cluster precisa ser configurado para ter os mapeamentos extra de portas:

| Host         | Control Plane                    |
| ------------ | -------------------------------- |
| `host:80`    | forward `ingress_controller:80`  |
| `host:443`   | forward `ingress_controller:443` |
| `host:30778` | unbound                          |

Além disso, o control plane é configurado com a label `ingress-ready=true` para facilitar a configuração do ingress. Este projeto conta com um script utilitário para a inicialização do cluster kubernetes com o kind, já com as portas acima expostas e o label de ingress no _nó_ do _control plane_.

:::: details Arquivos de Conveniência
::: code-group
<<< @/deploy/ladesa-notes/02-prepare-kubernetes-cluster/samples/kind-init-cluster.sh
<<< @/deploy/ladesa-notes/02-prepare-kubernetes-cluster/samples/kind-init-cluster-manifest.yml
:::
::::

:::: details Arquivos de Conveniência (Limpeza)
::: code-group
<<< @/deploy/ladesa-notes/02-prepare-kubernetes-cluster/samples/kind-cleanup.sh
<<< @/deploy/ladesa-notes/02-prepare-kubernetes-cluster/samples/kind-purge.sh
:::
::::

Para verificar a integração do kubectl com o cluster kind:

```sh
kubectl cluster-info --context kind-kind;
```

## Configurar o Ingress Controller

O [`Ingress Controller`][docs-k8s-ingress-controller] do Kubernetes é utilizado como responsável por receber requisições externas - HTTP e HTTPS - e direcionar para dentro do cluster. Foi escolhido o `ingress-nginx` para ser o `Ingress Controller` do cluster kubernetes.

:::: details Arquivos de Conveniência
::: code-group
<<< @/deploy/ladesa-notes/02-prepare-kubernetes-cluster/samples/kind-ingress-nginx.sh
:::
::::

## proxy

Este serviço deve configurar o NGinx para atuar como API Gateway / Proxy Reverso / Ingress Controller do Kubernetes. Com o `Ingress Controller` iniciado, deve ser possível acessar o proxy por meio de:

```sh
curl -v "http://IP_CONTROL_PLANE:PORTA"
```

## Configurar o CertManager

:::: details Arquivos de Conveniência
::: code-group
<<< @/deploy/ladesa-notes/02-prepare-kubernetes-cluster/samples/cert-manager.sh
:::
::::

- <https://kubernetes.github.io/ingress-nginx/>
- <https://kind.sigs.k8s.io/docs/user/ingress/#ingress-nginx>
- <https://kubernetes.github.io/ingress-nginx/user-guide/basic-usage/>
- <https://kubernetes.io/docs/concepts/services-networking/ingress/>
- <https://nginx.org/en/>
- <https://cert-manager.io/docs/installation/kubectl/>

<!-- Links -->
<!-- Links / Docs -->

[docs-k8s-ingress-controller]: https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/
