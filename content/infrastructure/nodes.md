---
title: "Infrastructure Fleet & Nodes"
description: "Hardware specifications, network topology, and service assignments across the RPDev fleet."
---

# Infrastructure Fleet & Nodes

Authoritative environment state is mirrored from `CURRENT_ENV.yml` maintained by the Infrastructure Audit Engine.

---

## Node Registry

### 1. `edge` (Edge Router & Firewall)
- **Model**: GL.iNet GL-MT6000 (Flint 2)
- **Architecture**: MediaTek MT7986A (4x Cortex-A53 @ 2.0 GHz)
- **RAM**: 1 GB DDR4
- **OS**: OpenWrt 24.x (Linux Kernel 6.6)
- **Interfaces**:
  - `wan`: 2.5 Gbps WAN
  - `lan`: 2.5 Gbps trunk to core switch
  - `br-lan`: `10.14.0.1/24`
- **Core Roles**: DNSMasq, WireGuard VPN Gateway, Cloudflare Tunnel Daemon (`cloudflared`).

---

### 2. `t430` (Storage & Automation Node)
- **Model**: Lenovo ThinkPad T430
- **CPU**: Intel Core i5-3320M
- **RAM**: 16 GB DDR3
- **Primary Storage**: High-speed local SSD (`/mnt/data`)
- **Bulk Storage**: External ZFS / NFS Array (`/mnt/sharedroot`, 912 GB)
- **Core Roles**: NFS Server (`fs01.service.local:2049`), Frigate NVR (`nvr.iamrp.dev`), Authentik Identity Provider (`auth.iamrp.dev`).

---

### 3. `llmadmin01` (Compute & Machine Learning)
- **CPU**: High-core x86_64 host
- **RAM**: 32 GB+
- **Roles**: Ollama local inference backend, Android build fleet, Temporal workflow workers, heavy development workspace (`/home/llmuser`).
