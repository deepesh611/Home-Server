# 🍿 Jellyfin Media Server Setup Guide

Welcome to the **Jellyfin** installation guide! Jellyfin is a free and open-source media server that allows you to organize, stream, and enjoy your media from any device — no subscriptions required.

---

## 📦 What is Jellyfin?

Jellyfin is a self-hosted media system that:
- Organizes your movies, shows, music, and more.
- Streams content to phones, browsers, smart TVs, and DLNA clients.
- Gives you full control over your library — **no cloud lock-in**.

> Think of it as your personal Netflix — but you control everything.

---

## 🚀 Features

- 🎞️ Automatic metadata and artwork fetching
- 📱 Cross-platform client apps
- 👪 Multi-user support
- ⚡ Fast, responsive UI
- 🔒 No tracking, no ads, no cost

---

## 🛠️ Installation
You can use this yml for docker (recommended method) or set it up on the system itself.
```ymlversion: "3.8"
services:
  jellyfin:
    image: jellyfin/jellyfin
    container_name: jellyfin
    restart: unless-stopped
    ports:
      - 8096:8096
    volumes:
      - ./config:/config
      - ./cache:/cache
      - ./media:/media
```
### 🔧 Installation Steps

1. **Add the Jellyfin Repository**

   ```bash
   curl -fsSL https://repo.jellyfin.org/install-debuntu.sh | bash
    ```
2. Install Jellyfin
    
    ```basg
    sudo apt update
    sudo apt install jellyfin
    ```

3. Start and Enable the Jellyfin Service

    ```bash
    sudo systemctl enable jellyfin
    sudo systemctl start jellyfin
    ```

4. Access the Web Interface:

    Open your browser and go to:

    ```bash
     http://<your-raspberry-pi-ip>:8096
     ```
   Proceed with the initial setup wizard to:
   - Create an admin user
   - Add media libraries
   - Customize metadata providers

##  Auto-start on Boot

Already handled by systemctl enable jellyfin, but to double-check:

```bash
sudo systemctl is-enabled jellyfin
```

It should return enabled.

## 🎨 Customize Your Experience
- Change themes via Admin Dashboard → Dashboard → Display
- Install plugins for extra features (like intro skipping or AniDB)
- Use clients on iOS, Android, Roku, Fire TV, and more

## 🔐 Secure Access (Optional)

If you’re exposing Jellyfin outside your home network:
- Use Nginx reverse proxy with HTTPS (Let's Encrypt)
- Set strong user passwords
- Disable unused plugins

Need help with a secure reverse proxy setup? Just ask — we’ll hook you up!