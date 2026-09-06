---
title: "RPDev Feed Documentation"
description: "Architecture, overlay service protocols, and Compose UI engine for the RPDev Feed provider."
---


> [!info] Project Maturity: **98% — Production-Hardened GA (Tier 5)**
> - **Lifecycle Status**: Production GA Release (`v1.2.1`)
> - **Active Components**: AIDL `ILauncherOverlay` server, on-device RSS parsing engine, Room SQLite persistence, zero Play Services dependency, RFC-1918 SSRF blocking, Rome XXE protection, 2MB streaming bounds, leak-free `OverlayView` window detachment cleanup, thread-safe `ActivityHandler`
> - **Pending Enhancements**: Horizontal foldable tablet dual-pane feed polish

# RPDev Feed Documentation

> An extensible, open-source Google Discover alternative built on Jetpack Compose and the Android Launcher Overlay AIDL interface.

- **Repository**: [`https://github.com/RPDevs-Builds/RPDev-Feed`](https://github.com/RPDevs-Builds/RPDev-Feed)
- **Production Site**: [feed.launcher.iamrp.dev](https://feed.launcher.iamrp.dev)
- **Module Catalog**: [launcher.repo.iamrp.dev](https://launcher.repo.iamrp.dev)
- **Application ID**: `iamrp.dev.feed`
- **Primary Service**: `com.saulhdev.feeder.manager.service.OverlayService`
- **Latest Release**: `v1.2.1` (GA)

---

## Architecture Overview

```
RPDev-Feed/
├── app/src/main/java/com/saulhdev/feeder/
│   ├── manager/
│   │   ├── service/                 # OverlayService (ILauncherOverlay AIDL implementation)
│   │   ├── sensors/                 # Battery, RAM, and CPU telemetry readers
│   │   └── weather/                 # Open-Meteo REST client & forecast engine
│   ├── plugins/
│   │   ├── HubModuleManager.kt      # Catalog fetcher, SharedPreferences cache
│   │   ├── HubPluginRegistry.kt     # Dynamic module discovery & IPC dispatcher
│   │   └── HubPlugin.kt             # Base interface for card providers
│   └── ui/                          # Jetpack Compose cards, settings, and timeline
```

---

## Detailed Implementation Examples

1. **[Overlay Service & AIDL Protocol](overlay-service-example.md)**: `ILauncherOverlay` implementation, window token attachment, and gesture scroll tracking.
2. **[Compose UI Card Engine](card-compose-example.md)**: Jetpack Compose card components, responsive layouts, and dynamic theme harmonizing.
3. **[Module Catalog Synchronization](registry-sync-example.md)**: Multi-tier fallback catalog fetching with offline cache recovery.

---

## Pre-GA Security & Hardening Remediation

Following the comprehensive independent architectural review, all 35 audit findings were completely remediated:
- **SSRF Immunity**: `RssLocalSync.kt` verifies IP addresses using `isSsrfSafe()`, blocking loopback, link-local, any-local, cloud metadata (`169.254.169.254`), and all RFC-1918 private subnets via `isSiteLocalAddress`.
- **XXE Injection Protection**: Rome XML parser strictly enforces `disallow-doctype-decl = true` and blocks external entities.
- **Broadcast Security**: `FeedCardPushReceiver` enforces `android:protectionLevel="signature"` and validates URL schemes (`https://`, `http://`).
- **Memory & Lifecycle Safety**: Eradicated static overlay container references; bounded coroutine collectors to window detachment; thread-safe `ActivityHandler` with dynamic reflection.
- **Production R8 Verification**: Unified ProGuard keep rules for Moshi models and Kotlinx serialization companions.

---

## Building from Source

```bash
# Clone repository
git clone https://github.com/RPDevs-Builds/RPDev-Feed.git
cd RPDev-Feed

# Assemble debug APK
./gradlew assembleDebug

# Deploy to emulator
adb install -r -d app/build/outputs/apk/debug/app-debug.apk
```
