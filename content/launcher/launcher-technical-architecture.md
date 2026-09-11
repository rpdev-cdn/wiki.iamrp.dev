---
title: "Launcher Technical Architecture"
description: "Engineering documentation for AOSP Launcher3 base, DataStore preferences, and build steps."
aliases:
  - /launcher/technical-architecture
---

# 🏛️ Launcher Technical Architecture

> For developers, maintainers, and power users who want to understand the internals of RPDev Launcher or compile from source.

---

## 📦 Core Architecture Breakdown

```
RPDev-Launcher/
├── src/com/android/launcher3/          # Clean AOSP Launcher3 baseline
│   ├── folder/                         # Folder, FolderIcon, FolderPagedView
│   ├── model/                          # BgDataModel, ItemInstallQueue, LoaderTask
│   └── util/                           # ResourceBasedOverride, PrefUtils
├── Omega/src/iamrp/dev/launcher/       # RPDev / Omega custom enhancement layer
│   ├── preferences/                    # DataStore BasePreferences & NeoPrefs
│   ├── folder/                         # CustomizeFolderSheet & cycle detection
│   ├── util/                           # PrefUtils feed provider filtering & deduplication
│   └── RPDevLauncher.kt                # Top-level launcher activity subclass
```

---

## ⚙️ Key Subsystems

### 1. Dynamic Feed Provider Discovery (`PrefUtils.kt`)
Launcher queries the Android `PackageManager` for services responding to:
```kotlin
Intent("com.android.launcher3.WINDOW_OVERLAY")
```
It filters out legacy/debug packages (e.g. `com.saulhdev.neofeed`) whenever the official `iamrp.dev.feed` package is present, avoiding duplicate dialog entries.

### 2. Recursive Folder Cycle Detection
Before attaching a folder into another folder, Launcher validates:
```kotlin
fun wouldCreateCycle(parentFolderId: Int, childFolderId: Int): Boolean
```
This traverses parent pointers to ensure cyclic dependencies are impossible.

---

## 🔨 Building from Source

```bash
# Clone the repository
git clone https://github.com/RPDevs-Builds/RPDev-Launcher.git
cd RPDev-Launcher

# Ensure JDK 21 is active
java -version

# Build the Debug APK
./gradlew assembleAospOmegaDebug

# Resulting APK:
# build/outputs/apk/aospOmega/debug/Launcher3-aosp-omega-debug.apk
```
