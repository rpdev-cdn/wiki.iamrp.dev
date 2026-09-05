---
title: "RPDev Master Wiki"
description: "Central engineering knowledge base, architecture documentation, and project index across mobile, infrastructure, firmware, AI, and security."
---

# RPDev Master Engineering Wiki

> The unified knowledge base and technical registry for all software, infrastructure, mobile, firmware, and artificial intelligence projects across the RPDev ecosystem.

```
  ██████╗ ██████╗ ██████╗ ███████╗██╗   ██╗    ██╗    ██╗██╗██╗  ██╗██╗
  ██╔══██╗██╔══██╗██╔══██╗██╔════╝██║   ██║    ██║    ██║██║██║ ██╔╝██║
  ██████╔╝██████╔╝██║  ██║█████╗  ██║   ██║    ██║ █╗ ██║██║█████╔╝ ██║
  ██╔══██╗██╔═══╝ ██║  ██║██╔══╝  ╚██╗ ██╔╝    ██║███╗██║██║██╔═██╗ ██║
  ██║  ██║██║     ██████╔╝███████╗ ╚████╔╝     ╚███╔███╔╝██║██║  ██╗██║
  ╚═╝  ╚═╝╚═╝     ╚═════╝ ╚══════╝  ╚═══╝       ╚══╝╚══╝ ╚═╝╚═╝  ╚═╝╚═╝
```

---

## 🏛️ Project Directory & Portals

```
                                  ┌────────────────────────────────┐
                                  │      RPDev Master Wiki         │
                                  │       (wiki.iamrp.dev)         │
                                  └───────────────┬────────────────┘
                                                  │
         ┌───────────────────┬────────────────────┼───────────────────┬───────────────────┐
         ▼                   ▼                    ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Mobile Stack    │ │ Infrastructure  │ │ Firmware & IoT  │ │ AI & Agents     │ │ Security Trust  │
│ - Launcher      │ │ - Edge (MT6000) │ │ - Thingino      │ │ - DocIngest     │ │ - FIDO2 + Age   │
│ - Feed Overlay  │ │ - Storage (T430)│ │ - OpenWrt Builds│ │ - Qdrant Vector │ │ - Chezmoi       │
│ - Feed Modules  │ │ - Compute Fleet │ │ - Kexecboot     │ │ - Agent Squad   │ │ - .envmaster    │
└─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘
```

---

## 📱 1. Mobile & Android Ecosystem

High-performance, privacy-first Android software built on AOSP foundations with Android 16 parity.

- **[RPDev Launcher](https://launcher.iamrp.dev)**: Next-generation Android home screen featuring recursive nested folders, custom drawer folder icons with JSON persistence, predictive back gestures, and Android 16 Pixel Launcher (`NexusLauncherRelease`) parity.
  - *Repository*: [`RPDevs-Builds/RPDev-Launcher`](https://github.com/RPDevs-Builds/RPDev-Launcher)
  - *Portal*: [launcher.iamrp.dev](https://launcher.iamrp.dev)
- **[RPDev Feed](https://feed.launcher.iamrp.dev)**: Sovereign Google Discover alternative implementing the `ILauncherOverlay` AIDL bridge. Renders customizable Compose UI cards with zero tracking and local SQLite persistence.
  - *Repository*: [`RPDevs-Builds/RPDev-Feed`](https://github.com/RPDevs-Builds/RPDev-Feed)
  - *Portal*: [feed.launcher.iamrp.dev](https://feed.launcher.iamrp.dev)
- **[RPDev Feed Modules](https://repo.launcher.iamrp.dev)**: Swappable card plugins delivering weather radar, hardware battery telemetry, RSS feeds, GitHub activity, quick notes, and network speedometers.
  - *Repository*: [`RPDevs-Builds/RPDev-Feed-Modules`](https://github.com/RPDevs-Builds/RPDev-Feed-Modules)
  - *Portal & Catalog*: [repo.launcher.iamrp.dev](https://repo.launcher.iamrp.dev)
- **[RPDev Edge CDN](https://cdn.iamrp.dev)**: High-speed edge delivery network hosting JSON schemas (`card-v1.schema.json`, `module-manifest.schema.json`), catalog indexes, and release metadata.
  - *Repository*: [`rpdev-cdn/cdn.iamrp.dev`](https://github.com/rpdev-cdn/cdn.iamrp.dev)
  - *Portal*: [cdn.iamrp.dev](https://cdn.iamrp.dev)

---

## 🖥️ 2. Infrastructure & Homelab Engineering

A resilient, hybrid infrastructure spanning bare-metal workstations, storage servers, and edge gateways, continuously audited by `infra-audit-engine`.

- **[Infrastructure Fleet & Nodes](infrastructure/nodes.md)**: Specifications and topology across `edge` (GL-MT6000 OpenWrt router), `t430` (NFS storage & automation host), and `llmadmin01` (compute workstation).
- **[Tiered Storage Architecture](infrastructure/storage.md)**: Strict separation of high-IOPS local NVMe storage (databases, WALs, container layers) and bulk network storage (`/mnt/sharedroot`).
- **[Cloudflare Argo Tunnels & DNS](networking/cloudflare-tunnels.md)**: Zero-trust ingress topology exposing internal services (`auth`, `mcp`, `nvr`, `uptime`) securely without port forwarding.
- **Infrastructure Audit Engine**: Automated Python 3.12 daemon that inspects Docker containers, network bridges, OpenWrt states, and Cloudflare configurations to maintain the authoritative `CURRENT_ENV.yml`.

---

## 📡 3. Embedded Systems & Firmware

- **Thingino Firmware**: Open-source, lightweight Linux firmware for IP cameras and embedded vision systems.
- **Custom OpenWrt Toolchains**: Customized package feeds for MediaTek MT7986A, including `luci-app-cloudflared`, custom WireGuard tunnels, and POSIX ACL overlays.
- **Kexecboot Wireless Bootloader**: Rapid-boot kernel-based wireless bootloaders for headless diagnostic environments.

---

## 🧠 4. Artificial Intelligence & Multi-Agent Systems

- **DocIngest**: Documentation ingestion and knowledge graph processor for Quartz and Markdown digital gardens.
- **Qdrant Security Agent**: Local vector search and semantic memory system powered by Qdrant and Ollama.
- **Autonomous Agent Squads**: Multi-agent development pipelines for continuous integration, code auditing, and documentation synchronization.

---

## 🔐 5. Security, Secrets & Hardware Trust

- **[Hardware Security Keys & Age Encryption](security/fido2-age.md)**: Age encryption bound to physical FIDO2/U2F security tokens via `age-plugin-fido2prf` with user-presence verification.
- **Master Environment Registry (`.envmaster`)**: Centralized single source of truth for workspace configuration, variables, and API tokens.
- **Chezmoi System Orchestration**: Version-controlled dotfiles with in-memory secret decryption and encrypted diff verification.

---

## 🌐 Ecosystem Quick Links

| Service | Subdomain | Role |
|---|---|---|
| **Master Wiki** | [wiki.iamrp.dev](https://wiki.iamrp.dev) | Central Engineering Wiki & Project Index |
| **RPDev Launcher** | [launcher.iamrp.dev](https://launcher.iamrp.dev) | Android Launcher Portal & Releases |
| **RPDev Feed** | [feed.launcher.iamrp.dev](https://feed.launcher.iamrp.dev) | Feed Protocol & Developer Docs |
| **Module Repository** | [repo.launcher.iamrp.dev](https://repo.launcher.iamrp.dev) | Feed Module Catalog & Registry |
| **Static CDN** | [cdn.iamrp.dev](https://cdn.iamrp.dev) | Distributed Edge Asset CDN |
| **Digital Garden** | [iamrp.dev](https://iamrp.dev) | Personal Notes & Articles |
