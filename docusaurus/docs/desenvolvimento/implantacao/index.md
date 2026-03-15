---
sidebar_position: 1
---

# Implantação

O deploy do Ladesa envolve publicar os serviços e deixá-los acessíveis para uso. Ele inclui etapas de build, empacotamento, distribuição e execução nos ambientes adequados.

## Ambientes

Os sistemas coexistem em diferentes configurações, isolados entre si para garantir estabilidade:

- **Ambiente de Desenvolvimento**: onde os programadores realizam testes e mudanças diretamente no código.
- **Ambiente de Homologação (staging)**: onde as funcionalidades são validadas antes de ir para produção.
- **Ambiente de Produção**: onde o sistema é disponibilizado aos usuários finais.

Saiba mais em [Ambientes de Software](../tutoriais/ambientes).

## Distribuição via Container

Todos os serviços do Ladesa são empacotados como containers Docker e publicados em registries de container (GitHub Container Registry). O deploy é feito via Kubernetes.

## Guias de deploy

- [Cluster Kubernetes](./cluster/01-initialize-kubernetes/index.md) — Setup completo do cluster de produção
- [Base de Conhecimento](./hacks) — Dicas e comandos úteis para operações de cluster
