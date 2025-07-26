# 🍿 Plex — Your Personal Streaming Empire

> Because sometimes, you want your movie server to look like Netflix — without Netflix.

---

## 📦 What is this?

This is a Dockerized setup for **Plex Media Server** — a sleek, powerful, and feature-rich way to stream your own media across devices.

No ads. No tracking. Just *your* movies, shows, music, anime, and videos from that weird summer trip in 2009.

---

## 🧠 TL;DR

- Plex = Stream your media library like a pro.
- Works on browsers, phones, TVs, and maybe your fridge.
- Beautiful interface, buttery smooth.
- Optional premium features (Plex Pass).

---

## 🐳 Setup with Docker Compose

### 📝 `docker-compose.yml`

```yaml
version: '3.8'

services:
  plex:
    image: lscr.io/linuxserver/plex:latest
    container_name: plex
    network_mode: host
    environment:
      - PUID=1000
      - PGID=1000
      - VERSION=docker
      - PLEX_CLAIM= # (Optional) Get yours from https://plex.tv/claim
    volumes:
      - /path/to/config:/config
      - /path/to/tv:/tv
      - /path/to/movies:/movies
    restart: unless-stopped
```

> 🔁 Replace /path/to/... with your actual directories.
> 🎟️ Want your Plex server linked to your account? Grab a PLEX_CLAIM token from plex.tv/claim and paste it in.

## 📱 Supported Clients
- Web browser
- Android / iOS
- Apple TV / Fire TV / Roku
- Smart TVs
- PS5, Xbox, etc.
- Steam Deck (because why not)
- That one smart microwave? Try it.

## 🔐 Security Tips

If exposing Plex online:
- Use NGINX reverse proxy + HTTPS (Let's Encrypt)
- Create strong passwords
- Limit public access or use a VPN
- Don’t let strangers stream your baby videos

> ⚠️ Disclaimer: Plex does offer premium features via Plex Pass. Totally optional, but some are worth it.<br>
> ✨ Also, if you're a die-hard open-source fan, check out [Jellyfin](../Jellyfin/README.md).