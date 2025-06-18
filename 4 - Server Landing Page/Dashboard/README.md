# 🖥️ Pre-made Dashboards

This section provides quick Docker Compose setups for the most popular and loved home server dashboards. Each dashboard offers a different experience — from minimal to highly customizable.

---

## 🔥 Featured Dashboards

### 1. [Homarr](https://github.com/ajnart/homarr)
A beautiful, widget-based dashboard with easy service linking and user authentication.

📁 **Docker Compose:** [`👉 homarr-compose.yml`](Docker%20Compose/homarr.yml)

---

### 2. [Dashy](https://github.com/Lissy93/dashy)
Highly customizable, modern dashboard with a large community and integrations.

📁 **Docker Compose:** [`👉 dashy-compose.yml`](Docker%20Compose/dashy.yml)

---

### 3. [Heimdall](https://github.com/linuxserver/Heimdall)
A clean, simple dashboard for managing and monitoring services with health checks.

📁 **Docker Compose:** [`👉 heimdall-compose.yml`](Docker%20Compose/heimdall.yml)

---

### 4. [Flame](https://github.com/pawelmalak/flame)
Minimalist dashboard with built-in bookmarks, auth, and dark mode.

📁 **Docker Compose:** [`👉 flame-compose.yml`](Docker%20Compose/flame.yml)

---

### 5. [Organizr](https://github.com/causefx/Organizr)
Tabs-based portal to unify self-hosted apps, ideal for power users.

📁 **Docker Compose:** [`👉 organizr-compose.yml`](Docker%20Compose/organizr.yml)

---

## 🚀 Quick Start

1. Pick a dashboard from above.
2. Copy its Docker Compose file to your server.
3. Run the following in the same directory:
    ```bash
    docker compose -f <chosen-file>.yml up -d
    ```
    **OR<br>**
   Deploy via [Portainer](https://www/portainer.io):<br>
   - Open Portainer in your browser (`http://<server-ip>:9000`).
   - Go to Local > Stacks > Add Stack.
   - Paste the contents of the selected compose file.
   - Make the necessary Changes such as port, vol. path, etc
   - Deploy the stack.
    

>**💡 NOTE:**<br>
> If you have the dashboard to open when you enter `http://<server-ip>`, then edit the docker-compose and set the `Host-Port` to 80.<br>
> eg. `Host-Port:Container-Port` = `80:7575` for Homarr
>
4. Open your browser at:
    ```bash
    http://<your-server-ip>:<dashboard-port>
    ```
Replace `<dashboard-port>` with the port specified in the compose file, such as `7575`, `8080`, etc.

## 🔒 Optional Enhancements:

- Use Nginx Proxy Manager or Traefik for pretty URLs like `http://dashboard.local`
- Set up HTTPS with Let's Encrypt for secure access
- Add authentication if exposed beyond your local network