# reactjs-application

# Build docker image for node-app-one
    docker build -t cloudtechmasters/nodeappone:latest .
# Login to docker
    docker login
# Push node-app-one image to docker hub
    docker push cloudtechmasters/nodeappone:latest
# Create kubernetes secret using below command
     kubectl create secret tls react-tls \
      --key private.key \
      --cert certificate.crt
# Deploy nodejs-application using following commands
    kubectl apply -f react-configmaps.yaml
    kubectl apply -f react-deployment.yaml
    kubectl apply -f react-service.yaml
    kubectl apply -f react-ingress.yaml
# Check deployments, pods, services and ingress using below command
    kubectl get configmaps
    kubectl get deploy
    kubectl get pods
    kubectl get svc
    kubectl get ingress
