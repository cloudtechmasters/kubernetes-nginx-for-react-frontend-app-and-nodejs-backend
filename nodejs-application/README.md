# nodejs-application

# Build docker image for node-app-one
    cd node-app-one
    docker build -t cloudtechmasters/nodeappone:latest .
# Login to docker
    docker login
# Push node-app-one image to docker hub
    docker push cloudtechmasters/nodeappone:latest
    cd ..
# Build docker image for node-app-two
    cd node-app-two
    docker build -t cloudtechmasters/nodeapptwo:latest .
# Push node-app-one image to docker hub
    docker push cloudtechmasters/nodeapptwo:latest
    cd ..
# Create kubernetes secret using below command
    kubectl create secret tls node-app-tls \
        --key private.key \
        --cert certificate.crt
# Deploy nodejs-application using following commands
    kubectl apply -f node-app-one/node-app-one-deployment.yaml
    kubectl apply -f node-app-one/node-app-one-service.yaml
    kubectl apply -f node-app-one/node-app-two-deployment.yaml
    kubectl apply -f node-app-one/node-app-two-service.yaml
    kubectl apply -f node-ingress.yaml
# Check deployments, pods, services and ingress using below command
    kubectl get deploy
    kubectl get pods
    kubectl get svc
    kubectl get ingress
