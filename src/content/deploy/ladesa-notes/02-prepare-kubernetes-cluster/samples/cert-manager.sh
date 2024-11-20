if [[ ! "$(kubectl get ns cert-manager &>/dev/null; echo $?)" == "0" ]]; then
  kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.15.0/cert-manager.yaml;
fi;

cmctl check api --wait=2m;