---
title: "Feed Technical Architecture"
description: "AIDL overlay IPC, WindowManager attachment, Compose UI, and hardware Keystore encryption."
aliases:
  - /feed/technical-architecture
---

# ⚙️ Feed Technical Architecture

> Engineering reference for RPDev Feed internals, AIDL bridge protocol, and security models.

---

## 🏗️ Architectural Overview

```
RPDev-Feed/
├── app/src/main/java/com/saulhdev/feeder/
│   ├── manager/service/
│   │   ├── OverlayService.kt          # Android Service binding com.android.launcher3.WINDOW_OVERLAY
│   │   ├── ConfigurationOverlayController.kt # Configuration-aware controller
│   │   ├── OverlayBridge.kt           # Thread-safe volatile IPC bridge
│   │   └── OverlayView.kt             # ViewTreeLifecycleOwner, Window attachment, RecyclerView
│   ├── plugins/
│   │   ├── HubPluginRegistry.kt       # Singleton card registry with AES256_GCM Keystore
│   │   ├── HubModuleManager.kt      # Multi-tier catalog sync (CDN -> GitHub)
│   │   └── impl/                      # Built-in card implementations
│   └── ui/                            # Jetpack Compose card layouts & theme engine
```

---

## 🔐 Security & Keystore Encryption

Sensitive user configurations (such as GitHub PATs and Home Assistant tokens) are stored via:
```kotlin
EncryptedSharedPreferences.create(
    context,
    "rpdev_hub_plugins_secure",
    MasterKey.Builder(context).setKeyScheme(MasterKey.KeyScheme.AES256_GCM).build(),
    EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
    EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
)
```
- Legacy plaintext SharedPreferences keys are automatically scrubbed during migration.
- If hardware Keystore is unavailable (e.g. basic emulators), graceful fallback is provided.

---

## 🔨 Building & Packaging

```bash
cd /mnt/sharedroot/projects/RPDevs-Builds/RPDev-Feed
./gradlew assembleDebug

# Output APK:
# app/build/outputs/apk/debug/RPDev_Feed_1.2.0-beta_debug.apk
```
