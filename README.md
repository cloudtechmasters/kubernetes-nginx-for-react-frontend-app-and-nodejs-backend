# kubernetes-nginx-for-react-frontend-app-and-nodejs-backend

# Pre-Requisites
    - Install git
    - install docker
    - EKS-Cluster
    - Install Helm
# Installing nginx-ingress-controller:
1. Add NGINX Helm repository:

        helm repo add nginx-stable https://helm.nginx.com/stable
        helm repo update
2. To install the chart with the release name my-release (my-release is the name that you choose):
        
        helm install my-release nginx-stable/nginx-ingress
3. Increase replicas for nginx-ingress-controller:

        kubectl scale --replicas=2 deployment my-release-nginx-ingress
# Deploy nodejs-application
# Deploy reactjs-application
# Create Hosted zone in Route53
     1. Replace nameservers in our domain (where we purchased our domain)
     2. Create "CNAME" recordset for nodejs application host
     3. Create "CNAME" recordset for reactjs application host
     4. Create "A" recordset with nginx ingress controller loadbalancer
 # Check final output of application using with reactjs host
