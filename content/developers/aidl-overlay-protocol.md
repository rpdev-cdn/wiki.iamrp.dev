---
title: "AIDL Overlay Protocol"
description: "Deep dive into com.android.launcher3.WINDOW_OVERLAY and ILauncherOverlay."
---

# 📡 AIDL Overlay Protocol

RPDev Feed connects to RPDev Launcher via Android's native IPC (AIDL) mechanism, enabling high-performance gesture tracking without granting the launcher access to the feed's internal memory.

---

## 🤝 Service Binding Flow

1. **Discovery**: Launcher queries `PackageManager` for intent:
   ```xml
   <action android:name="com.android.launcher3.WINDOW_OVERLAY" />
   ```
2. **Binding**: Launcher binds to `com.saulhdev.feeder.manager.service.OverlayService`.
3. **Window Attachment**: The service attaches a layout directly to the host launcher window token via `WindowManager.LayoutParams.TYPE_APPLICATION_PANEL`.
4. **Scroll Math**: As the user drags their finger on page 0 of the launcher, scroll offset floats `(0.0f .. 1.0f)` are streamed via Binder IPC, synchronizing the overlay sliding animation at 120Hz.
