---
title: "Kexecboot.xyz Documentation"
description: "Minimal Wi-Fi capable Linux network bootloader with Go TUI synchronized with netboot.xyz endpoints."
---

# Kexecboot.xyz Documentation

> A lightweight Wi-Fi capable network bootloader utilizing a minimal Linux kexec environment and Go Terminal UI (TUI).

- **Repository**: [`https://github.com/RPDevs-Builds/kexecboot.xyz`](https://github.com/RPDevs-Builds/kexecboot.xyz)
- **Local Path**: `/mnt/sharedroot/projects/RPDevs-Builds/kexecboot.xyz`
- **Domain**: `kexecboot.xyz`

---

## 1. Bootloader Architecture

```
Power On ──> UEFI / BIOS ──> Kexecboot Kernel + Initramfs
                                     │
                    ┌────────────────┴────────────────┐
                    ▼                                 ▼
             Wi-Fi Scanning                     netboot.xyz
           (wpa_supplicant)                   Endpoint Sync
                    │                                 │
                    └────────────────┬────────────────┘
                                     ▼
                           Interactive Go TUI
                                     │
                             kexec_load()
                                     │
                                     ▼
                        Boot Target OS Kernel
```

---

## 2. Key Features

- **Wi-Fi Hardware Support**: Bundles firmware blobs for Intel, Realtek, and Atheros wireless cards.
- **Go TUI Interface**: Clean terminal menu navigating ISOs, netboot images, and recovery tools.
- **Direct Memory Kexec**: Bypasses slow hardware POST cycles by directly loading and executing secondary kernels via Linux `kexec`.
