---
title: "Preferences Hardening: Dynamic Feed Discovery & Disambiguation"
description: "How RPDev Launcher filters out duplicate signatures and dynamically builds feed provider menus."
---

# Preferences Hardening: Dynamic Feed Discovery & Disambiguation

In Android launchers, feed overlay selections are often declared as static XML lists. RPDev Launcher refactors this to dynamically query installed packages at runtime while filtering out obsolete debug signatures.

---

## 1. Dynamic Provider Evaluation in `PrefUtils.kt`

```kotlin
// File: src/com/android/launcher3/util/PrefUtils.kt

fun Context.getFeedProviders(): Map<String, String> {
    val providers = mutableMapOf<String, String>()
    
    // 1. None Option (Always available)
    providers[""] = getString(R.string.feed_provider_none)
    
    // 2. Discover Google if installed
    val googlePkg = "com.google.android.googlequicksearchbox"
    if (isPackageInstalled(googlePkg)) {
        providers[googlePkg] = "Google"
    }
    
    // 3. Query all services supporting the Overlay protocol
    val intent = Intent("com.android.launcher3.WINDOW_OVERLAY")
    val matches = packageManager.queryIntentServices(intent, 0)
    
    // 4. Pruning rule: If official RPDev Feed is present, ignore legacy com.saulhdev.neofeed
    val hasOfficial = matches.any { it.serviceInfo.packageName == "iamrp.dev.feed" }
    
    for (resolveInfo in matches) {
        val pkg = resolveInfo.serviceInfo.packageName
        if (hasOfficial && pkg.startsWith("com.saulhdev.neofeed")) {
            continue
        }
        val label = resolveInfo.loadLabel(packageManager).toString()
        providers[pkg] = label
    }
    
    return providers
}
```

---

## 2. Dynamic Preference Binding in `BasePreferences.kt`

By using an `entriesProvider: (() -> Map<String, String>)? = null` closure inside `BasePreferences.kt`, the selection dialog dynamically queries package state every time the user taps the preference, ensuring real-time responsiveness when new feed providers are installed or removed.
