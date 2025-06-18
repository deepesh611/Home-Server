# 🌐 Custom Home Server Dashboard

Welcome to the **Home Server Dashboard**, a central landing page for managing and accessing services running on your Raspberry Pi home server. This guide walks you through setting up your own custom dashboard using your code and an `nginx` server.

---

## 🚀 Features

- **Custom Landing Page**  
  Navigate to services like file managers, media servers, or utilities hosted on your Pi.

- **File Server Access**  
  Easily manage files stored on connected storage devices.

- **Media Streaming**  
  Link to streaming tools like Jellyfin or Plex hosted locally.

- **Dynamic Wallpapers**  
  Live wallpapers that change based on the time of day.

---

## 🎨 Preview

![RPi Server Dashboard Preview](Sample%20Landing%20Page/public/assets/LandingPage.png)

---

## 🛠️ Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/)
- **UI Components**: [Aceternity UI](https://ui.aceternity.com/)
- **Hosting**: [Nginx](https://nginx.org/en/)
- **Hardware**: Raspberry Pi with external MicroSD, SSD, or HDD

---

## 📦 Installation Guide

### ✅ Prerequisites

- A Raspberry Pi running a Debian-based OS
- Git, Node.js (for Next.js), and Nginx installed

---

### 🔧 Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/deepesh611/Home-Server.git
   cd Home-Server/2\ -\ Server\ Landing\ Page/Sample\ Landing\ Page
   ```
2. Install Dependencies
    ```bash
    npm install
    ```
3. Build the Static Files
   ```bash
    npm run build
    npm run export
    ```
   The static site will be available in the out/ directory.
4. Set Up Nginx
   - Move the out/ folder to your web root:
   ```bash
   sudo cp -r out/* /var/www/html/
    ```
   - Restart Nginx:
   ```bash
   sudo systemctl restart nginx
    ```
   
## ✅ Final Result

You should now be able to access your custom home dashboard by visiting your Pi’s IP address in a browser:

```bash
http://localhost
# or 
http://<rpi-IP>
```

## 📁 Customize
- To add or remove links, modify the components in your Next.js project.
- Update the wallpaper logic for more dynamic effects using useEffect() and time-based hooks.
- Style it further using Tailwind or any custom CSS.