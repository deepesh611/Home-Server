# 🧭 Nginx Proxy Manager (NPM)
Nginx Proxy Manager is a free and easy way to expose your private network web services with SSL and Docker support. It has a beautiful UI, multiple users, and Let's Encrypt integration. This section shows Nginx Proxy Manager in a Docker container to manage custom domains, subdomains, and ports via a simple web UI.

## 🛠 Setup Instructions
1. Create Docker Network (if not done already):
    ```bash
    docker network create nginx
    ```
2. Docker Compose for NPM [👉 nginx.yml](nginx.yml)
3. Start the container:
    ```bash
    docker compose -f nginx-proxy-manager-compose.yml up -d
    ```
4. Access the NPM Dashboard:<br>
Open in your browser:
    ```bash
   http://<server-ip>:81
    ```
>**🔐 Default Credentials:**<br>
> Email: `admin@example.com`<br>
>Password: `changeme`


## 🌐 Use Case 1: Access service via `http://<server-ip>/`
Let’s say you want the root IP (http://192.168.0.100/) to point to your Homarr dashboard (running on port 7575):
### ➕ Steps:
1. Go to Proxy Hosts > Add Proxy Host
2. Domain Names: Leave empty (or enter your IP address if required)
3. Forward Hostname/IP: localhost
4. Forward Port: 7575
5. Block Common Exploits: ✅
6. Websockets Support: ✅
7. Hit Save

Now, accessing `http://<server-ip>/` will serve your Homarr (running on port 7575) dashboard.

## 🌍 Use Case 2: Access another service via `http://server.com`
Let’s say you want http://dashboard.server.com to serve Dashy (port 8080)

### ➕ Steps:
1. Go to Proxy Hosts > Add Proxy Host
2. Domain Names: dashboard.yourdomain.com
3. Forward Hostname/IP: localhost
4. Forward Port: 8080
5. Enable SSL: Go to SSL tab, enable Force SSL, and request a Let's Encrypt certificate
6. Hit Save

Now, http://dashboard.server.com (or https://...) will load your Dashy dashboard (on port 8080).

> **🔐 Notes**
> - Make sure dashboard.yourdomain.com points to your server’s public IP in DNS (use Cloudflare or your registrar).
> - Set up dynamic DNS (DDNS) if your IP is not static.
> - You can expose multiple services on different subdomains or paths using NPM.

## ✅ Summary
| Address                      | Target Service   | Example Port |
|------------------------------| ---------------- | ------------ |
| `http://<server-ip>/`        | Homarr Dashboard | 7575         |
| `http://dashboard.server.com` | Dashy Dashboard  | 8080         |
| `http://media.server.com`     | Jellyfin         | 8096         |
| `http://files.server.com`     | Filebrowser      | 8081         |
