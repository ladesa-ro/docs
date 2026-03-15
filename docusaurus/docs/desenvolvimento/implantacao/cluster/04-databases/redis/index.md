---
sidebar_position: 2
---

# Redis

[Deploying Redis to Kubernetes cluster K3s](https://rpi4cluster.com/k3s-redis/#redis)

```yaml title="redis-namespace.yml"
apiVersion: v1
kind: Namespace
metadata:
  name: redis-server
```

```yaml title="redis-pvc.yml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: redis-pvc
  namespace: redis-server
spec:
  accessModes:
    - ReadWriteOnce
  # storageClassName:
  resources:
    requests:
      storage: 5Gi
```

```yaml
echo "REDIS_PASSWORD=$(openssl rand -hex 24)" > redis.env
```

```bash
kubectl create secret generic redis-secret \
--from-env-file=./redis.env \
--dry-run=client \
-o yaml \
-n redis-server \
| kubectl apply -f -;
```

```yaml title="redis-deployment.yml"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis-server
  namespace: redis-server
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis-server
  template:
    metadata:
      labels:
        app: redis-server
        name: redis-server
    spec:
      # nodeSelector:
      #   node-type: worker
      containers:
        - name: redis-server
          image: bitnami/redis

          ports:
            - name: redis-server
              containerPort: 6379

          volumeMounts:
            - name: lv-storage
              mountPath: /bitnami/redis/data

          env:
            - name: ALLOW_EMPTY_PASSWORD
              value: "no"

          envFrom:
            - secretRef:
                name: redis-secret

      volumes:
        - name: lv-storage
          persistentVolumeClaim:
            claimName: redis-pvc
```

```yaml title="redis-service.yml"
apiVersion: v1
kind: Service
metadata:
  name: redis-server
  namespace: redis-server
spec:
  selector:
    app: redis-server
  type: LoadBalancer
  ports:
    - name: redis-port
      protocol: TCP
      port: 6379
      targetPort: 6379
```
