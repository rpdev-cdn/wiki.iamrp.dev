---
title: "Mobile Application Stack"
description: "Overview of RPDev Launcher, RPDev Feed, and modular plugin architecture."
---

# Mobile Application Stack

The RPDev Mobile Stack provides a sovereign, private alternative to Google Mobile Services on Android.

---

## 1. Stack Components

```
┌────────────────────────────────────────────────────────┐
│                   RPDev Launcher                       │
│        (Package: iamrp.dev.launcher.alpha)             │
│  - AOSP Launcher3 base with Android 16 parity          │
│  - Recursive nested folders                            │
│  - Custom drawer icon themes                           │
└──────────────────────────┬─────────────────────────────┘
                           │
             ILauncherOverlay AIDL Bridge
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                     RPDev Feed                         │
│            (Package: iamrp.dev.feed)                   │
│  - Jetpack Compose card rendering                      │
│  - Zero ad tracking & local caching                    │
│  - HubPluginRegistry & HubModuleManager                │
└──────────────────────────┬─────────────────────────────┘
                           │
               Module Intent Broadcasts
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                RPDev Feed Modules                      │
│  - Weather Radar (`plugin_weather`)                    │
│  - Hardware Telemetry (`plugin_sensors`)               │
│  - System Monitor (`plugin_system_monitor`)            │
│  - RSS Reader (`plugin_rss`)                           │
└────────────────────────────────────────────────────────┘
```

---

## 2. Repositories & Sites

| Component | Repository | Documentation Site |
|---|---|---|
| **RPDev Launcher** | `RPDevs-Builds/RPDev-Launcher` | [launcher.iamrp.dev](https://launcher.iamrp.dev) |
| **RPDev Feed** | `RPDevs-Builds/RPDev-Feed` | [feed.launcher.iamrp.dev](https://feed.launcher.iamrp.dev) |
| **Feed Modules** | `RPDevs-Builds/RPDev-Feed-Modules` | [launcher.repo.iamrp.dev](https://launcher.repo.iamrp.dev) |
| **Edge CDN** | `rpdev-cdn/cdn.iamrp.dev` | [cdn.iamrp.dev](https://cdn.iamrp.dev) |
