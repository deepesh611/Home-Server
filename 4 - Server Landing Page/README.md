# 🌐 Home Server Dashboard

A **Home Server Dashboard** acts as a central landing page for quick access to all your self-hosted tools, services, and files. Whether you're managing a Raspberry Pi server or a full-blown homelab, this dashboard helps you stay organized and efficient.

---

## 🧰 Choose Your Dashboard Style

You have the freedom to pick the dashboard that best fits your setup and style. Here are some options:

---

### 🧩 Premade Dashboards

1. **[Homarr](https://github.com/ajnart/homarr) (Recommended)**  
   A sleek, modern, and customizable dashboard with drag-and-drop widgets, user auth, and integrations.

2. **[Dashy](https://github.com/Lissy93/dashy)**  
   A beautiful, highly customizable dashboard for organizing self-hosted apps.

3. **[Heimdall](https://github.com/linuxserver/Heimdall)**  
   A simple app dashboard with basic link management and service health checks.

4. **[Flame](https://github.com/pawelmalak/flame)**  
   Minimalist and fast dashboard with built-in bookmark and link management.

5. **[Organizr](https://github.com/causefx/Organizr)**  
   A powerful web-based portal that combines multiple self-hosted services into one tabbed interface.

---

### 💻 Custom Dashboards

Prefer building from scratch? You can create your own custom dashboard using:

- **Frontend Frameworks**:  
  `Next.js`, `React`, `Vue`, or plain `HTML/CSS/JS`

- **UI Libraries**:  
  `Aceternity UI`, `Tailwind CSS`, or `Bootstrap`

- **Hosting**:  
  Host your dashboard via `Nginx`, `Apache`, or use a containerized setup with Docker.

We also include a sample [Next.js-based dashboard](Custom%20Dashboard/Sample%20Landing%20Page) that you can clone and host.

>**Note:**
> Don't Forget to set the appropriate reference links in the dashboard

---

## 📦 Hosting Options

You can run your dashboard on:

- A **Raspberry Pi**
- A **Home Server/NAS**
- A **Docker container**
- Or deploy it on any **local VM** or **cloud VPS**

---

## ⚙️ Example Setup with Nginx

To host your custom or exported static dashboard:

```bash
# Move static files to Nginx web root
sudo cp -r out/* /var/www/html/

# Restart Nginx
sudo systemctl restart nginx
```

## 🧠 Pro Tips

- Set the dashboard as your browser homepage.
- Use HTTPS with Certbot for security.
- Combine with a reverse proxy (like Traefik or Nginx Proxy Manager) for clean URLs.