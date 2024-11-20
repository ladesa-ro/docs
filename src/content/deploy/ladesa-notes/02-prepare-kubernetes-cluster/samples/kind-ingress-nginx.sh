if [[ ! "$(kubectl get ns ingress-nginx &>/dev/null; echo $?)" == "0" ]]; then
  kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml;
fi;

