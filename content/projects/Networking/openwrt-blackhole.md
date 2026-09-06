---
title: "OpenWrt Blackhole: Sovereign Network Sinkhole"
description: "Architecture for the OpenWrt Blackhole monorepo: high-throughput Go DNS sinkhole daemon, LuCI administration frontend, and OPKG package feed."
tags:
  - wiki
  - networking
  - openwrt
  - security
  - dns
  - sinkhole
aliases:
  - /projects/networking/openwrt-blackhole
---

> [!note] Project Documentation Wiki
> *This document is part of the **[[projects/index|RPDev Projects Knowledge Base]]**. For the full lifecycle matrix, see the **[[projects/maturity-matrix|Project Maturity Matrix]]**.*

> [!info] Project Maturity: **65% — Active Beta (Tier 3)**
> - **Lifecycle Status**: Active Monorepo Integration
> - **Active Components**: High-performance Go daemon (`blackhole-server`), LuCI frontend (`luci-app-blackhole`), automated package feed (`openwrt-blackhole-feed`)
> - **Pending Enhancements**: nftables tproxy kernel integration, LuCI JavaScript client rewrite, automated blocklist ingestion cron

# OpenWrt Blackhole: Sovereign Network DNS Sinkhole Monorepo
## **High-Throughput DNS Interception, Blocklist Synthesis & LuCI Network Administration for OpenWrt Gateways**

> [!abstract] Engineering Overview
> **`openwrt-blackhole`** consolidates the server daemon, web administration interface, and package distribution feed into a unified monorepo. It transforms embedded OpenWrt routers into high-throughput privacy appliances, intercepting DNS queries, sinkholing ad/telemetry domains at line rate, and providing live telemetry without external third-party resolvers.

- **Repository**: [`https://github.com/RPDevs-Builds/openwrt-blackhole`](https://github.com/RPDevs-Builds/openwrt-blackhole)
- **Architecture**: Monorepo combining `blackhole-server` (Go), `luci-app-blackhole` (LuCI Lua/JS), and `openwrt-blackhole-feed` (Makefile packaging).
- **Deployment**: GL.iNet GL-MT6000 & x86_64 OpenWrt edge gateways.

---

## 🧭 Navigation & Related Documentation
- Review OpenWrt custom firmware building in **[[projects/Networking/openwrt-asu-builder|OpenWrt ASU Server]]**
- Review high-performance storage in **[[projects/Networking/openwrt-kernel-nfs|OpenWrt Kernel NFS]]**
- Explore project lifecycle ratings in **[[projects/maturity-matrix|Project Maturity Matrix]]**
