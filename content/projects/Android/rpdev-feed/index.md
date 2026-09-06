---
title: "RPDev Feed Documentation"
description: "Architecture, overlay service protocols, and Compose UI engine for the RPDev Feed provider."
---


> [!info] Project Maturity: **88% — Production Companion Service (Tier 4)**
> - **Lifecycle Status**: Active Production Companion
> - **Active Components**: AIDL `ILauncherOverlay` server, on-device RSS parsing engine, Room SQLite persistence, zero Play Services dependency
> - **Pending Enhancements**: Gesture physics smoothing on swipe-to-dismiss, tablet horizontal carousel layout

# RPDev Feed Documentation

> An extensible, open-source Google Discover alternative built on Jetpack Compose and the Android Launcher Overlay AIDL interface.

- **Repository**: [`https://github.com/RPDevs-Builds/RPDev-Feed`](https://github.com/RPDevs-Builds/RPDev-Feed)
- **Production Site**: [feed.launcher.iamrp.dev](https://feed.launcher.iamrp.dev)
- **Application ID**: `iamrp.dev.feed`
- **Primary Service**: `com.saulhdev.feeder.manager.service.OverlayService`

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
