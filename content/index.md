---
title: "RPDev Engineering Wiki"
description: "Central knowledge base, homelab architecture, infrastructure specs, and mobile engineering documentation."
---

# RPDev Engineering Wiki

> The single source of architectural truth, infrastructure documentation, and engineering specifications for RPDev systems.

```
  ██╗    ██╗██╗██╗  ██╗██╗    ██╗    ██╗██╗██╗  ██╗██╗
  ██║    ██║██║██║ ██╔╝██║    ██║    ██║██║██║ ██╔╝██║
  ██║ █╗ ██║██║█████╔╝ ██║    ██║ █╗ ██║██║█████╔╝ ██║
  ██║███╗██║██║██╔═██╗ ██║    ██║███╗██║██║██╔═██╗ ██║
  ╚███╔███╔╝██║██║  ██╗██║    ╚███╔███╔╝██║██║  ██╗██║
   ╚══╝╚══╝ ╚═╝╚═╝  ╚═╝╚═╝     ╚══╝╚══╝ ╚═╝╚═╝  ╚═╝╚═╝
```

---

## Infrastructure Fleet

The RPDev infrastructure spans hybrid bare-metal homelab nodes, OpenWrt edge routing, and cloud edge CDN:

| Node | Role | OS / Hardware | Primary Services |
|---|---|---|---|
| **`t430`** | Storage & Telemetry Node | Linux / ThinkPad T430 | NFS Host, Docker, Container storage |
| **`llmadmin01`** | Compute & LLM Fleet | Linux / Workstation | Ollama, Temporal, Heavy compilation |
| **`edge`** | Edge Gateway & Firewall | OpenWrt / GL.iNet MT6000 | WireGuard, Cloudflare Tunnel, DHCP/DNS |
| **`rpdev-cdn`** | Distributed Edge Delivery | Cloudflare + GitHub Pages | Static assets, documentation, APK registry |

---

## Knowledge Domains

### 1. [Infrastructure Fleet & Nodes](infrastructure/nodes.md)
Detailed hardware specifications, IP allocations, systemd services, and container mappings for all nodes documented in `CURRENT_ENV.yml`.

### 2. [Tiered Storage Architecture](infrastructure/storage.md)
Guidelines for SSD critical-path allocation (WAL, databases, active containers) versus `/mnt/sharedroot` bulk storage (archives, documentation, media).

### 3. [Networking & Cloudflare Tunnels](networking/cloudflare-tunnels.md)
Argo Tunnel ingress rules, DoH configuration, DNS zone management for `iamrp.dev`, and TLS termination.

### 4. [Mobile Application Stack](projects/mobile-stack.md)
Architectural overview of **RPDev Launcher**, **RPDev Feed**, and **RPDev Feed Modules**, including AIDL overlay protocols and Android 16 parity.

### 5. [Security & Hardware Trust](security/fido2-age.md)
FIDO2 hardware key binding with Age encryption (`age-plugin-fido2prf`), zero-trust credential hygiene, and `.envmaster` registry.

---

## Connected Ecosystem

- **Main Digital Garden**: [iamrp.dev](https://iamrp.dev)
- **RPDev Launcher**: [launcher.iamrp.dev](https://launcher.iamrp.dev)
- **RPDev Feed**: [feed.launcher.iamrp.dev](https://feed.launcher.iamrp.dev)
- **Module Repository**: [repo.launcher.iamrp.dev](https://repo.launcher.iamrp.dev)
- **Static Edge CDN**: [cdn.iamrp.dev](https://cdn.iamrp.dev)
