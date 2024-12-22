# Server Setup Guide 🖥️

This guide will walk you through setting up your home server with **CasaOS**, **Nginx**, **Cockpit**, and additional configurations like setting a static IP address and adding external storage. For this tutorial, I will be using my `Raspberry-Pi 5`. So, I will also include the `Raspberry-Pi's` setup. Those who are using a PC/Laptop for setting up your server can skip the `Raspberry Pi's` setup and proceed with the next steps.

---

## Prerequisites 📦
- Raspberry Pi 5 with power supply
- MicroSD card (32GB or larger)
- External storage (HDD/SSD) if needed
- Keyboard, monitor, and Ethernet/Wi-Fi connection for initial setup
---

## 1. Fresh Raspberry Pi Setup 🛠️

Steps to follow:
1. **Download Raspberry Pi Imager**:  
   Download the official Raspberry Pi OS from [here](https://www.raspberrypi.com/software/).

2. **Flash the OS**:  
   Use the above tool to format and flash the required OS onto your microSD card with the help of a card reader. It is prefered to use the `Raspberry Pi OS (64 bits)` which comes with GUI.  
   You also get an option to enable/disable `SSH` when you flash your microSD card. Make sure to enable it.

3. **Initial Boot**:  
   - Insert the microSD card into your Raspberry Pi.
   - Connect the Raspberry Pi to power, a monitor, and a keyboard.
   - Follow the on-screen prompts to complete the setup (Wi-Fi, timezone, etc.). It is preferred to use a `LAN/Ethernet` connection instead of WiFi.

4. **Update System**:  
   Once logged in, open a terminal and run:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```
5. **Get the Basic Tools**:
   ```bash
   sudo apt install nala -y             # a coverup for apt for better readability

   sudo nala install openssh-server -y  # if not already present (for SSH)
   sudo systemctl start ssh             # start service
   sudo systemctl enable ssh            # enable on boot
   sudo systemctl status ssh            # check ssh-server status (should be active of installed properly)
   ```

## 2. Assigning a Static IP Address 📡
This is a necessary step to make sure that your server (RPi in my case) always gets the same IP address everytime it connects to this network, or everytime you power-up your server, so that you won't need to check for the IP addr. of the server everytime it changes.

Steps:
1. Access your `Home Router` settings:  
   
   Usually, you can access your `Home Router's` admin page with the `Default gateway IP Addr`. To get this run the following command in your `cmd/powershell/terminal`

   ```bash
   # windows
   ipconfig

   # linux
   ifconfig
   ```
   Search the **Default Gateway IP addr.** on your browser, usually like `192.168.1.1` or `192.168.100.1` or something similar. Also, check for your MAC addr., we will need that later
2. Once you have accessed your router's admin page, search for `DHCP Settings` or `Static IP`. I am using a `Omantel Wi-fi Router`, and for me this setting was in  
 **Advance > LAN > DHCP Static IP**  
 
    Select the option to add a new static IP addr. Enter the MAC addr. of your server and the IP addr, you wish to assign to your server. You can get the `MAC addr.` of your server when you run the command from `Step 1` of this section.  
 3. Now reconnect your server to the wifi, or simply reboot it with
    ```bash
    sudo reboot
    ```
    Now the DHCP should have assigned that static IP to your server. Now we can proceed with the rest of the setup.
