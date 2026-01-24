#!/usr/bin/env bash

set -xe;

K8S_NAMESPACE=ladesa
K8S_DEPLOYMENT=docs

helm upgrade -i ${K8S_DEPLOYMENT} \
  --repo https://stakater.github.io/stakater-charts \
  application \
  --version 6.0.2 \
  --namespace=${K8S_NAMESPACE} \
  -f ./values.yml \
;

kubectl \
  rollout restart \
  --namespace ${K8S_NAMESPACE} \
  deployment.apps/${K8S_DEPLOYMENT};
