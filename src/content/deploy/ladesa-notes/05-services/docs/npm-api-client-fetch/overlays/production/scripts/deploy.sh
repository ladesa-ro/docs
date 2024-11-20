#!/bin/bash

set -xe

if [[ ! "${LADESA_DEPLOY_NS_PRODUCTION}" == "true" ]]; then
  exit 0;
fi

if [[ ! "${LADESA_DEPLOY_NS_PRODUCTION_SERVICE_DEV_DOCS}" == "true" ]]; then
  exit 0;
fi

kubectl apply -k ..;

kubectl rollout restart \
  deployment.apps/ladesa-ro-docs-packages-npm-api-client-fetch \
  --namespace ladesa-ro-production \
;