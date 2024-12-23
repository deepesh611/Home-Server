# Server Setup Guide 🖥️

This guide will walk you through setting up your home server with **CasaOS**, **Nginx**, **Cockpit**, and additional configurations like setting a static IP address and adding external storage. For this tutorial, I will be using my **Raspberry Pi 5**. Those using a PC/Laptop for setting up your server can skip the **Raspberry Pi Setup** section and proceed with the next steps.

---

## Prerequisites 📦
- Raspberry Pi 5 with power supply
- MicroSD card (32GB or larger)
- External storage (HDD/SSD) if needed
- Keyboard, monitor, and Ethernet/Wi-Fi connection for initial setup

---

## 1. Raspberry Pi Setup 🛠️

### Steps to Follow:

1. **Download Raspberry Pi Imager**:  
   Download the official Raspberry Pi Imager from [here](https://www.raspberrypi.com/software/).

2. **Flash the OS**:  
   Use the tool to format and flash the required OS onto your microSD card using a card reader. It’s recommended to use **Raspberry Pi OS (64-bit)**, which includes a GUI.  
   While flashing, enable the **SSH** option in the advanced settings.

3. **Initial Boot**:  
   - Insert the microSD card into your Raspberry Pi.
   - Connect the Raspberry Pi to power, a monitor, and a keyboard.
   - Follow the on-screen prompts to complete the setup (Wi-Fi, timezone, etc.). It’s preferred to use a **LAN/Ethernet connection** instead of Wi-Fi.

4. **Update System**:  
   Open a terminal and run:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

5. Install Basic Tools:
   ```bash
   sudo apt install nala -y              # APT alternative with better readability

   sudo nala install openssh-server -y  # Install SSH server (if not preinstalled)
   sudo systemctl start ssh             # Start the SSH service
   sudo systemctl enable ssh            # Enable SSH on boot
   sudo systemctl status ssh            # Verify SSH service is active
   ```

## 2. Assigning a Static IP Address 📡
To ensure your server always has the same IP address:
1. Access Your Router Settings:  
   - Open a terminal on your PC and check your default gateway:   
  
   ```bash
   # Windows
   ipconfig

   # Linux/Mac
   ifconfig
   ```
   - Note the Default Gateway IP (e.g., `192.168.1.1`) and the MAC Address of your server.

2. Set Up a Static IP:
   - Log in to your router’s admin page (enter the Default Gateway IP in your browser).
   - Navigate to DHCP Settings or Static IP Configuration.  
(For my router, it’s under: **Home Page > Advanced Options > LAN > DHCP Static IP**)
   - Add a new static IP entry with your server's MAC address and desired IP address.

3. Reboot the server:
   ```bash
   sudo reboot
   ```
   Your server should now always use the assigned static IP.

## 3. Assigning a Local Domain Name (Optional) 🌐
Assigning a domain name (e.g., `server.local`) makes it easier to remember your server address.

1. Access Router’s Static DNS Settings:
Navigate to the Static DNS option in your router settings.  
(For my router, it’s under: **Home Page > Advanced Options > Applications > Static DNS**)

2. Set Up a Local Domain Name:  
   - Add an entry with the desired domain name (e.g., `server.local`) and the static IP address of your server.
   - Save and apply the changes.

3. Test the Configuration:  
   Open a terminal and check:
   ```bash
   ping <server-ip>
   ping <domain-name>
   ```
   Replace `<server-ip>` with the static IP and `<domain-name> `with the local domain name you set.

## 4. Accessing Your Server 🛢️
Using your PC/Laptop, SSH into the server:
```bash
ssh <username>@<ip-address/domain-name>
```
Replace `<username>` with your server’s username (usually `pi` or `root`) and `<ip-address/domain-name>` with the static IP or local domain name.

## Conclusion 👋
This section outlines the basic server setup. Check out the other sections in the repository for detailed instructions on installing other tools, adding external storage, and other configurations.