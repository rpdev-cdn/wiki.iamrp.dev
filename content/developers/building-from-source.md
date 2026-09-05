---
title: "Building from Source"
description: "Prerequisites, Gradle tasks, and APK output paths for RPDev Launcher, Feed, and Modules."
---

# 🏗️ Building from Source

All projects in the RPDev mobile stack use standard Gradle build systems with modern Kotlin toolchains.

---

## 📋 Prerequisites

- **Java Development Kit**: JDK 21 (OpenJDK or Temurin).
- **Android SDK**: `compileSdk = 37`, `minSdk = 34` (Android 14+).
- **Android NDK**: Version 26+ (for native bypass helper components).

---

## 🔨 Compilation Recipes

### 1. RPDev Launcher
```bash
git clone https://github.com/RPDevs-Builds/RPDev-Launcher.git
cd RPDev-Launcher

# Build Debug APK
./gradlew assembleAospOmegaDebug

# Output APK:
# build/outputs/apk/aospOmega/debug/Launcher3-aosp-omega-debug.apk
```

### 2. RPDev Feed
```bash
git clone https://github.com/RPDevs-Builds/RPDev-Feed.git
cd RPDev-Feed

# Build Debug APK
./gradlew assembleDebug

# Output APK:
# app/build/outputs/apk/debug/RPDev_Feed_1.2.0-beta_debug.apk
```

### 3. RPDev Feed Modules
```bash
git clone https://github.com/RPDevs-Builds/RPDev-Feed-Modules.git
cd RPDev-Feed-Modules

# Build Modules Library AAR
./gradlew assembleDebug
```
