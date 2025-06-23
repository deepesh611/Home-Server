# 🚀 Docker Setup

Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
## 🛠️ Prerequisites
- Internet access
- User with `sudo` privileges

---

## 📦 Install Docker

```bash
# 1. Update packages
sudo nala update && sudo nala upgrade -y

# 2. Install dependencies
sudo nala install ca-certificates curl gnupg lsb-release -y

# 3. Add Docker’s GPG key
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 4. Set up Docker repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 5. Install Docker Engine
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

# 6. Enable and start Docker
sudo systemctl enable docker
sudo systemctl start docker
```

## ✅ Test Docker
```bash
docker run hello-world
```
If you see a "Hello from Docker!" message, you're all set! 🎉