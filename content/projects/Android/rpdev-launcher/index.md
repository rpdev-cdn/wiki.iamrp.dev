---
title: "RPDev Launcher Documentation"
description: "Architecture, engineering guide, and build system for the sovereign Android AOSP launcher."
---


> [!info] Project Maturity: **98% — Production-Hardened GA (Tier 5)**
> - **Lifecycle Status**: Production GA Release (`v1.2.0`)
> - **Active Components**: AOSP Android 16 SDK 37, Kotlin DataStore state flows, recursive folder cycle guards, DeX desktop integration, AB-BA deadlock eliminated in `LauncherModel`, strong GC retention for `LauncherPrefs` listeners, R8 shrinker
> - **Pending Enhancements**: F-Droid inclusion metadata submission, foldable split-screen display polish

# RPDev Launcher Documentation

> Sovereign, performant Android home screen engineered on top of Android 14/16 AOSP Launcher3 foundations with complete architectural parity to Google's Pixel Launcher (`NexusLauncherRelease.apk`).

- **Repository**: [`https://github.com/RPDevs-Builds/RPDev-Launcher`](https://github.com/RPDevs-Builds/RPDev-Launcher)
- **Production Site**: [launcher.iamrp.dev](https://launcher.iamrp.dev)
- **Application ID**: `iamrp.dev.launcher`
- **Primary Component**: `iamrp.dev.launcher.RPDevLauncher`
- **Latest Release**: `v1.2.0` (GA)

---

## Architecture Overview

```
RPDev-Launcher/
├── src/com/android/launcher3/       # Core AOSP Launcher3 Engine
│   ├── folder/                      # FolderIcon, Folder, PreviewItemManager
│   ├── model/                       # LoaderCursor, ItemInstallQueue, WorkspaceItemProcessor
│   ├── popup/                       # SystemShortcut (App Info, Split Screen, Widgets)
│   └── util/                        # PrefUtils (Feed provider discovery & disambiguation)
├── Omega/src/iamrp/dev/launcher/    # RPDev / Omega Customization Layer
│   ├── RPDevLauncher.kt             # Main Activity subclassing Launcher.java
│   ├── RPDevApp.kt                  # Application class & Dagger/Hilt component
│   ├── folder/                      # CustomizeFolderSheet (JSON persistence)
│   └── preferences/                 # NeoPrefs & BasePreferences
└── reference/                       # Decompiled Android 16 NexusLauncherRelease reference
```

---

## Detailed Implementation Examples

1. **[Recursive Nested Folders](nested-folders-example.md)**: Cycle detection algorithm (`wouldCreateCycle`), paged subfolder inflation, and preview compositing.
2. **[Custom Drawer Folder Icons](custom-drawer-icons-example.md)**: `CustomizeFolderSheet.kt`, bottom-sheet icon picker, and JSON metadata serialization.
3. **[Android 16 Pixel Launcher Parity](pixel-launcher-parity.md)**: Reverse-engineered shortcuts from Android 16 `NexusLauncherRelease.apk`.
4. **[Feed Provider Hardening](preferences-hardening.md)**: Dynamic provider discovery and deduplication of legacy debug packages.

---

## GA Concurrency Hardening & Reliability

With the `v1.2.0` General Availability graduation, critical core engine concurrency safeguards were implemented:
- **AB-BA Deadlock Elimination**: Resolved potential lock inversion in `LauncherModel.java` between `mCallbacksList` and `mModelLock` by enforcing decoupled lock acquisition and snapshotting.
- **Preference Listener Retention**: Prevented GC of `LauncherPrefs` change listeners by maintaining hard references in `LauncherAppState`.
- **Android 14+ Sovereign Baseline**: Cleanly targeting Android 16 (`compileSdk = 37`) with `minSdk = 34`, purging 170+ MB of legacy compatibility jars.
- **Production Packaging**: Clean ProGuard/R8 release shrinking with zero missing symbol warnings.

---

## Building from Source

```bash
# Clone repository
git clone https://github.com/RPDevs-Builds/RPDev-Launcher.git
cd RPDev-Launcher

# Run unit tests
./gradlew testAospOmegaDebugUnitTest

# Assemble debug APK
./gradlew assembleAospOmegaDebug

# Install on connected emulator / device
adb install -r -d build/outputs/apk/aospOmega/debug/RPDevLauncher-aosp-omega-debug.apk
```
