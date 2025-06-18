# 🏗️ Portainer Setup

Portainer is a lightweight management Web-UI for Docker that allows you to easily manage your containers, images, volumes, and more. 

Official Docs: https://docs.portainer.io

>Note:
> If you are fine with using CLI for docker, you don't have to set portainer.
---

## 🐳 Requirements

- Docker installed on your system.
- Docker running.

---

## 🚀 Quick Start

### 1. Pull the Portainer Image

```bash
docker pull portainer/portainer-ce
```

### 2. Create a Docker Volume (optional but recommended)
```bash
docker volume create portainer_data
```

### 3. Run Portainer
```bash
docker run -d
  -p 8000:8000                  # Host-Port:Container-Port
  -p 9443:9443                  # Host-Port:Container-Port
  --name=portainer 
  --restart=always 
  -v /var/run/docker.sock:/var/run/docker.sock 
  -v portainer_data:/data       # Replace 'portainer_data' with actual path      
  portainer/portainer-ce:latest
```
Port `9443` is for the web UI (HTTPS), and `8000` is for agent communication.

## 🌐 Accessing Portainer
After the container is running, open your browser and go to:

```bash
https://localhost:9000
# or
https://localhost:9443      # if you have the business edition
``` 

The first time, you'll be asked to create an admin user.
Then, choose `Local` to manage the local Docker environment.

## 🗑️ To Stop and Remove Portainer
```bash
docker stop portainer
docker rm portainer
```
