---
title: "OpenWrt Fleet & Edge Gateway Documentation"
description: "GL.iNet MT6000 Flint 2 edge router, Cloudflare Argo tunnels, custom kernel feeds, and Attended Sysupgrade."
---

# OpenWrt Fleet & Edge Gateway Documentation

> Sovereign routing, zero-trust network boundaries, and automated build pipelines for OpenWrt 24.x devices.

- **Hardware**: GL.iNet GL-MT6000 (Flint 2)
- **Repositories**:
  - [`RPDevs-Builds/openwrt-blackhole`](https://github.com/RPDevs-Builds/openwrt-blackhole)
  - [`RPDevs-Builds/openwrt-asu`](https://github.com/RPDevs-Builds/openwrt-asu)
  - [`RPDevs-Builds/openwrt-images`](https://github.com/RPDevs-Builds/openwrt-images)

---

## 1. Cloudflare Argo Tunnel UCI Configuration

Cloudflare tunnel runs as a managed service on the router:

```
# File: /etc/config/cloudflared

config cloudflared 'config'
    option enabled '1'
    list interfaces 'wan'
    option token 'eyJhIjoiN2EyODBhNjhlYzU1ZGQxM...'
    option config '/opt/appdata/cloudflared/config.yml'
    option protocol 'auto'
    option logfile '/opt/appdata/logs/cloudflared/cloudflared.log'
    option region 'us'
```

---

## 2. Ingress & Reverse Proxy Rules

Traffic reaching `iamrp.dev` subdomains routes through the tunnel into internal Docker services:
- `auth.iamrp.dev` ──> `http://authentik.docker.local:9000`
- `mcp.iamrp.dev` ──> `http://mcp-gateway.docker.local:8080`
- `nvr.iamrp.dev` ──> `http://frigate.docker.local:8971`
- `uptime.iamrp.dev` ──> `http://uptime.docker.local:3001`
