#!/usr/bin/env bash

helm upgrade -i ${HELM_RELEASE_NAME} \
  --repo https://stakater.github.io/stakater-charts application --version 6.0.2 \
  --namespace=${K8S_NAMESPACE} -f ./.github/workflows/deploy/values.prod.yml \
;

kubectl rollout restart --namespace ${K8S_NAMESPACE} deployment.apps/${K8S_DEPLOYMENT};
