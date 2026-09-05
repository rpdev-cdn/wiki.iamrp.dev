---
title: "RPDev Feed: OverlayService & Window Attachment Example"
description: "Detailed code implementation of OverlayService, ConfigurationOverlayController, and window token attachment."
---

# RPDev Feed: OverlayService & Window Attachment Example

This guide explains how RPDev Feed acts as an overlay provider, binding with the host launcher to display a smooth horizontal swipe drawer on the `-1` screen.

---

## 1. The Overlay Service (`OverlayService.kt`)

`OverlayService` is a bound Android `Service` that delegates IPC calls to `OverlaysController`:

```kotlin
// File: app/src/main/java/com/saulhdev/feeder/manager/service/OverlayService.kt

package com.saulhdev.feeder.manager.service

import android.app.Service
import android.content.Intent
import android.os.IBinder
import com.google.android.libraries.gsa.d.a.OverlaysController

class OverlayService : Service() {
    private lateinit var overlaysController: OverlaysController

    override fun onCreate() {
        super.onCreate()
        overlaysController = ConfigurationOverlayController(this)
    }

    override fun onDestroy() {
        overlaysController.onDestroy()
        super.onDestroy()
    }

    override fun onBind(intent: Intent): IBinder? {
        return overlaysController.onBind(intent)
    }

    override fun onUnbind(intent: Intent): Boolean {
        this.overlaysController.onUnbind(intent)
        return false
    }
}
```

---

## 2. Configuration Overlay Controller (`ConfigurationOverlayController.kt`)

Handles dynamic configuration changes (such as device rotation, split-screen resizing, or dark/light mode toggles):

```kotlin
// File: app/src/main/java/com/saulhdev/feeder/manager/service/ConfigurationOverlayController.kt

package com.saulhdev.feeder.manager.service

import android.app.Service
import android.content.res.Configuration
import com.google.android.libraries.gsa.d.a.OverlayController
import com.google.android.libraries.gsa.d.a.OverlaysController

class ConfigurationOverlayController(private val service: Service) : OverlaysController(service) {

    override fun createController(
        configuration: Configuration?,
        serverVersion: Int,
        clientVersion: Int
    ): OverlayController {
        val context = if (configuration != null) {
            service.createConfigurationContext(configuration)
        } else {
            service
        }
        return OverlayView(context)
    }
}
```

---

## 3. Window Token Attachment in `OverlayView.kt`

When the launcher attaches the overlay, `OverlayView` receives the window token and injects full Android lifecycle management:

```kotlin
// File: app/src/main/java/com/saulhdev/feeder/manager/service/OverlayView.kt

override fun onAttach(windowToken: IBinder) {
    super.onAttach(windowToken)
    
    // Inject Lifecycle, SavedState, and ViewModel owners into decor view
    mDecorView?.let { view ->
        view.setViewTreeLifecycleOwner(this)
        view.setViewTreeViewModelStoreOwner(this)
        view.setViewTreeSavedStateRegistryOwner(this)
    }
    
    // Setup window layout params with hardware acceleration & translucent status bars
    mWindowLayoutParams.flags = mWindowLayoutParams.flags or
        WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED or
        WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS
}
```

---

## 4. Swipe Scroll Progress Feedback

During user drags from the home screen, the launcher reports scroll progress `0.0f` to `1.0f`:

```kotlin
override fun onScroll(progress: Float) {
    super.onScroll(progress)
    // Adjust overlay background alpha and card parallax translation
    mContentContainer?.alpha = progress.coerceIn(0f, 1f)
    mContentContainer?.translationX = (1f - progress) * -100f
}
```
