#!/bin/bash

# --------------------------------
# 🚀 Docker Install Script
# --------------------------------

# Colors
NC='\033[0m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'

# Log file
LOGFILE="/var/log/docker_install.log"
exec > >(tee -a "$LOGFILE") 2>&1

# Helper function
print_msg() {
    case $1 in
        "info") echo -e "${BLUE}$2${NC}" ;;
        "success") echo -e "${GREEN}$2${NC}" ;;
        "warning") echo -e "${YELLOW}$2${NC}" ;;
        "error") echo -e "${RED}$2${NC}" ;;
    esac
}

print_msg "info" "Step 1: Updating packages..."
sudo nala update && sudo nala upgrade -y
print_msg "success" "Packages updated successfully."
echo

print_msg "info" "Step 2: Installing required dependencies..."
sudo nala install ca-certificates curl gnupg lsb-release -y
print_msg "success" "Dependencies installed."
echo

print_msg "info" "Step 3: Adding Docker’s GPG key..."
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
print_msg "success" "GPG key added."
echo

print_msg "info" "Step 4: Setting up Docker repository..."
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
print_msg "success" "Repository added."
echo

print_msg "info" "Step 5: Installing Docker Engine and plugins..."
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
print_msg "success" "Docker installed successfully."
echo

print_msg "info" "Step 6: Enabling and starting Docker service..."
sudo systemctl enable docker
sudo systemctl start docker

if sudo systemctl status docker | grep -q "active (running)"; then
    print_msg "success" "Docker is active and running! 🎉"
else
    print_msg "error" "Docker failed to start. Check the logs and pray to the container gods. 💀"
    exit 1
fi

echo
print_msg "success" "All done! Try 'docker run hello-world' to test your new shiny setup."
print_msg "info" "Log file: $LOGFILE"
