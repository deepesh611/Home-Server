# 🔐 Access Home Server using Twingate

This guide helps you set up **Twingate** to access your **home Raspberry Pi server** (which is only available on your LAN) **from anywhere securely**, **without exposing it to the internet**.

---

## 🌐 What You Need

- A free [Twingate](https://www.twingate.com/) account
- Your **Raspberry Pi server** running on a private LAN (e.g., `192.168.1.10`)
- A second device (Raspberry Pi or Linux box) on the **same LAN** to run the **Twingate Connector** (Optional, but good to have)
- Your client device (laptop, phone, etc.) with the **Twingate Client App**

---

## 🛠️ Setup Steps

### 1. Create Twingate Network
1. Go to [https://www.twingate.com](https://www.twingate.com)
2. Create a free account
3. In the Admin Console:
    - Create a **Remote Network** (e.g., `HomeLAN`)
    - Add your first **Connector**, in our case an IP Address
    - Select `Linux`, and follow the steps given. Generate tokens and run the command in your Server's terminal.

---

### 2. Install Twingate Client

Install the Twingate app on the device you'll use to access the RPi remotely:

- [Windows / Mac / Linux / iOS / Android Downloads](https://www.twingate.com/download/)

---

### 3. Add Your Raspberry Pi as a Resource

1. In the Twingate Admin Console:
    - Go to the **Resources** tab
    - Click **Add Resource**
    - Name it (e.g., `My RPi Server`)
    - Set the address (e.g., `192.168.1.10`)
    - Optionally add a port (e.g., `192.168.1.10:22` for SSH)

2. Assign the resource to a group (e.g., `Everyone`)

---

### 4. Connect & Access

- Launch the Twingate client on your remote device
- Sign in and connect to your network
- You can now securely access your Raspberry Pi on `192.168.1.10` as if you’re on the same LAN.

---

## 📺 Helpful Video Tutorial

> **[🔗 How to Use Twingate to Access Devices on LAN (No Port Forwarding)](https://www.youtube.com/watch?v=1d6v5W7IaTk)**  
> by NetworkChuck

---

## ✅ Tips

- Your Raspberry Pi can run any server: SSH, web server, MQTT, etc.
- Twingate makes it available over the internet **securely**, without public IP or port forwarding.
- Now you can access your server from anywhere (**with internet connection**) as you do at home.
- You can add more LAN devices (like a NAS or Pi-hole) as Resources.


---

## 🔒 Stay Secure!

- Twingate encrypts all traffic
- You control who can access what
- Ideal for remote work, IoT access, and hobby projects

---

