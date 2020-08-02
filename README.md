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
# Note:
    CNAME Recordset for nodejs application:
    _3fa84ca6f5323cb2c6b7dbbe173bfe1a.node-app.vamsiawstraining.com
    3B7D3848C010B73C39EBE63E3CC9D3AA.D622FB3BD161E2C643BD2175C1CCE582.99ca85cf8b1c4fb.comodoca.com
    
    CNAME Recordset for reactjs application:
    _5bcd2eac046edd8fc79429925a753228.react.vamsiawstraining.com
    813CAEDA749DCF20C461EF6EC52B2EB3.75A43E822ED481CD95B777310C3356D3.33aa0cd3bb5a03f.comodoca.com

