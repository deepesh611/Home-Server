#!/bin/bash

# Define color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Define log file
LOGFILE="/var/log/script_install.log"
exec > >(tee -a "$LOGFILE") 2>&1

# Function to print colored messages
print_message() {
    case $1 in
        "success") echo -e "${GREEN}$2${NC}" ;;
        "error") echo -e "${RED}$2${NC}" >&2 ;;
        "info") echo -e "${BLUE}$2${NC}" ;;
        "warning") echo -e "${YELLOW}$2${NC}" ;;
    esac
}

# Function to check if a package is installed
is_installed() {
    dpkg -l | grep -q "$1"
}

print_message "info" "Step 1: Updating package lists..."
if sudo apt update; then
    print_message "success" "Package lists updated successfully."
else
    print_message "error" "Failed to update package lists. Exiting."
    exit 1
fi
echo

print_message "info" "Step 2: Checking and installing 'nala' if not installed..."
if ! is_installed "nala"; then
    if sudo apt install nala -y; then
        print_message "success" "Nala installed successfully."
    else
        print_message "error" "Failed to install Nala. Exiting."
        exit 1
    fi
else
    print_message "warning" "Nala is already installed."
fi
echo

print_message "info" "Step 3: Updating and upgrading the system with Nala..."
if sudo nala update && sudo nala upgrade -y; then
    print_message "success" "System updated and upgraded successfully."
else
    print_message "error" "Failed to update/upgrade using Nala. Exiting."
    exit 1
fi
echo

PACKAGES=("btop" "openssh-server")

print_message "info" "Step 4: Checking and installing required packages..."
for package in "${PACKAGES[@]}"; do
    if ! is_installed "$package"; then
        print_message "info" "Installing $package..."
        if sudo nala install "$package" -y; then
            print_message "success" "$package installed successfully."
        else
            print_message "error" "Failed to install $package. Exiting."
            exit 1
        fi
    else
        print_message "warning" "$package is already installed."
    fi
done
echo

print_message "info" "Step 5: Configuring SSH server..."
sudo systemctl start ssh
sudo systemctl enable ssh
if sudo systemctl status ssh | grep -q "active (running)"; then
    print_message "success" "SSH server is active and running."
else
    print_message "error" "SSH server failed to start. Exiting."
    exit 1
fi
echo

print_message "success" "All steps completed successfully! Check the log at $LOGFILE."
print_message " info" "Please restart the system to apply changes."
print_message " "
sleep 5s
