---
title: "OpenWrt Kernel NFS Server Manual (luci-app-nfs)"
description: "Authoritative technical manual for luci-app-nfs: bridging OpenWrt UCI configuration with Linux kernel nfsd for wire-speed network file sharing."
tags:
  - wiki
  - networking
  - openwrt
  - nfs
  - storage
  - luci
aliases:
  - /projects/networking/openwrt-kernel-nfs
---

> [!note] Project Documentation Wiki
> *This document is part of the **[[projects/index|RPDev Projects Knowledge Base]]**. For the high-level portfolio overview, visit [iamrp.dev](https://iamrp.dev).*

> [!info] Project Maturity: **95% — Production Package (Tier 5)**
> - **Lifecycle Status**: Active Production Gateway Package
> - **Active Components**: Full UCI schema, LuCI JS/Lua controllers, dual APKv3/OPKG packaging, 282 MB/s MT6000 wire speed benchmark
> - **Pending Enhancements**: Upstream OpenWrt community package feed submission

# OpenWrt Kernel NFS Server Manager: High-Performance Embedded Storage
## **Bridging OpenWrt UCI Configuration with Native Linux Kernel nfsd for Wire-Speed Network Storage**

> [!abstract] Architectural Overview
> **`luci-app-nfs`** is a native OpenWrt LuCI management application and configuration bridge designed to orchestrate the Linux kernel NFS daemon (`nfsd`) on embedded routers and edge gateways. It translates declarative Unified Configuration Interface (UCI) records (`/etc/config/nfs`) into production `/etc/exports` and `/etc/nfs.conf` files, unlocking **wire-speed, low-CPU network file sharing** across local storage arrays.

- **Repository**: [`https://github.com/RPDevs-Builds/luci-app-nfs`](https://github.com/RPDevs-Builds/luci-app-nfs)
- **Target Kernel**: Linux Kernel `kmod-fs-nfsd` (NFSv3 and NFSv4.1/4.2)
- **Packaging**: Dual packaging supporting modern APK v3 (`.apk`) and legacy OPKG (`.ipk`).

```mermaid
flowchart TD
    subgraph UserInterface["1. Management Interface (LuCI Web / CLI)"]
        WebUI["🌐 LuCI Web Panel (/cgi-bin/luci/admin/services/nfs)"]
        UCIConfig["⚙️ /etc/config/nfs (Declarative UCI State)"]
        WebUI <--> UCIConfig
    end

    subgraph Translation["2. Configuration Bridge & Validation"]
        Bridge["🔄 luci-app-nfs Wrapper"]
        Exports["📄 /etc/exports (Access Scopes & Permissions)"]
        NFSConf["📄 /etc/nfs.conf (Threads, Versions, Ports)"]
        UCIConfig --> Bridge
        Bridge --> Exports & NFSConf
    end

    subgraph KernelEngine["3. Linux Kernel Storage Subsystem"]
        NFSD["🐧 Linux Kernel nfsd (In-Kernel Execution)"]
        Exports & NFSConf --> NFSD
        Storage["💾 Local NVMe / SATA / USB3 Storage Layer"]
        NFSD <--> Storage
    end

    subgraph Clients["4. Local Compute Clients"]
        Node1["🖥️ Primary Compute Node (llmadmin01)"]
        Node2["🖥️ Backup Server (T430)"]
        Node3["🐳 Docker Host Containers"]
        Node1 & Node2 & Node3 <==|"NFSv4 / NFSv3 (Wire-Speed)"| NFSD
    end
```

---

## 1. The Challenge of Embedded Network Storage

Running Network Attached Storage (NAS) services on embedded routers (like OpenWrt gateways) frequently introduces severe bottlenecks:
1. **User-Space Overhead**: Legacy user-space file servers (such as older Samba daemons or user-space NFS servers) incur heavy context-switching penalties between user space and kernel space, capping transfer speeds at 30–40 MB/s and maxing out router CPUs.
2. **Kernel Storage Disconnect**: While the native Linux kernel module `nfsd` provides maximum I/O throughput with minimal CPU overhead, OpenWrt lacked a dedicated LuCI web interface and declarative UCI model to manage kernel exports cleanly.
3. **Complex Protocol Tuning**: Configuring NFSv4 domain names, thread pools, custom transport ports, and POSIX permissions required manual text file editing vulnerable to syntax errors.

---

## 2. Architecture & UCI Translation Bridge

`luci-app-nfs` acts as a pure configuration orchestrator that preserves system stability without altering default OpenWrt init scripts:

```ini
# /etc/config/nfs - Declarative UCI Definition
config nfs 'global'
	option enabled '1'
	option threads '8'
	option nfsv3 '1'
	option nfsv4 '1'
	option nfsv4_domain 'internal.iamrp.dev'
	option port '2049'

config share
	option enabled '1'
	option path '/mnt/sharedroot'
	option clients '10.14.0.0/24 10.13.0.0/24'
	option options 'rw,sync,no_subtree_check,no_root_squash'
```

### Dynamic File Generation
When settings are saved via the LuCI Web UI or `uci commit`, the application dynamically renders:
* **`/etc/exports`**: Defines path-level client authorization, read/write permissions, and squash rules.
* **`/etc/nfs.conf`**: Configures daemon worker pools, active protocol versions (NFSv3/NFSv4), and custom TCP/UDP transport bindings.

---

## 3. Official Package Feed (`openwrt.repo.iamrp.dev`)

`luci-app-nfs` and related OpenWrt packages are distributed via the sovereign package feed at **[`https://openwrt.repo.iamrp.dev/`](https://openwrt.repo.iamrp.dev/)** (Master Hub: [`https://repo.iamrp.dev`](https://repo.iamrp.dev)):

```bash
# OPKG Custom Feed (OpenWrt 23.05 and earlier)
echo 'src/gz rpdev_all https://openwrt.repo.iamrp.dev/packages/all' >> /etc/opkg/customfeeds.conf
opkg update && opkg install luci-app-nfs

# APK v3 Custom Feed (OpenWrt 24.10+)
echo 'https://openwrt.repo.iamrp.dev/packages/all' >> /etc/apk/repositories.d/rpdev.list
apk update && apk add luci-app-nfs
```

---

## 4. Modern Packaging Pipeline (APK v3 & Legacy IPK)

The project incorporates an automated GitHub Actions CI workflow capable of producing packages for both cutting-edge and legacy OpenWrt environments:

| Package Target | Format | Supported OpenWrt Versions | Build Tool |
| :--- | :---: | :--- | :--- |
| **OpenWrt Modern** | `.apk` (APK v3) | OpenWrt v26+ (Alpine-based package management) | Static `apk.static mkpkg` |
| **OpenWrt Legacy** | `.ipk` (OPKG) | OpenWrt 21.02, 22.03, 23.05 | `tar` control/data archives |

```bash
# Modern installation via APK on OpenWrt 26+
apk add --allow-untrusted luci-app-nfs

# Legacy installation via OPKG
opkg update && opkg install luci-app-nfs_1.2.0_all.ipk
```

---

## 5. Performance Benchmarks

Benchmarking storage throughput across a 2.5 Gbps local network backbone (MediaTek MT7986 ARM64 OpenWrt Router connected to NVMe storage):

| Storage Protocol | Read Throughput | Write Throughput | Router CPU Utilization |
| :--- | :---: | :---: | :---: |
| **User-Space SMB (Samba 4)** | 88 MB/s | 64 MB/s | **78% (High CPU load)** |
| **User-Space NFS (UNFS3)** | 110 MB/s | 82 MB/s | **62% (Medium CPU load)** |
| **Native Kernel `nfsd` (luci-app-nfs)** | **282 MB/s** | **265 MB/s** | **< 12% (Wire-Speed)** |

By moving execution directly into the Linux kernel and managing configuration declaratively, throughput increased by **over 3x** while freeing router CPU capacity for firewall routing and threat detection.

---

## 🧭 Navigation & Related Documentation
- Review unattended image compilation in **[[projects/Networking/openwrt-asu-builder|OpenWrt ASU Build Server]]**
- Understand cluster disk tiers in **[[projects/Infrastructure/storage|Tiered Storage Architecture]]**
- Explore hardware nodes in **[[projects/Infrastructure/nodes|Hardware Nodes & Topology]]**
- Return to **[[projects/index|Projects Documentation Hub]]**
