---
title: "RPDev Feed: HubModuleManager Catalog Synchronization"
description: "How RPDev Feed fetches modules from sovereign CDN endpoints with multi-tier fallback and offline recovery."
---

# RPDev Feed: HubModuleManager Catalog Synchronization

`HubModuleManager.kt` manages installed module state and synchronizes available companion modules across sovereign endpoints.

---

## 1. Multi-Tier Catalog Resolution

```kotlin
// File: app/src/main/java/com/saulhdev/feeder/plugins/HubModuleManager.kt

suspend fun fetchCatalog(forceRefresh: Boolean = false): Result<List<CatalogModule>> = 
    withContext(Dispatchers.IO) {
        _isLoadingCatalog.value = true
        try {
            // Tier 1: Primary Sovereign Subdomain
            val customDomainUrl = "https://repo.iamrp.dev/launcher/catalog/modules.json"
            // Tier 2: Replicated Sovereign CDN
            val cdnBackupUrl = "https://cdn.iamrp.dev/feed/modules.json"
            // Tier 3: Git Raw Mirror
            val githubRawUrl = "https://raw.githubusercontent.com/RPDevs-Builds/RPDev-Feed-Modules/main/catalog/modules.json"

            var responseBody: String? = null

            // 1. Try Custom Subdomain first
            try {
                val req = Request.Builder()
                    .url(customDomainUrl)
                    .header("Cache-Control", if (forceRefresh) "no-cache" else "max-age=300")
                    .build()
                httpClient.newCall(req).execute().use { res ->
                    if (res.isSuccessful) responseBody = res.body?.string()
                }
            } catch (_: Exception) {}

            // 2. Fallback to Sovereign CDN if custom domain is propagating
            if (responseBody.isNullOrBlank()) {
                try {
                    val req = Request.Builder().url(cdnBackupUrl).build()
                    httpClient.newCall(req).execute().use { res ->
                        if (res.isSuccessful) responseBody = res.body?.string()
                    }
                } catch (_: Exception) {}
            }

            // 3. Fallback to GitHub Raw if both edge nodes are unreachable
            if (responseBody.isNullOrBlank()) {
                try {
                    val req = Request.Builder().url(githubRawUrl).build()
                    httpClient.newCall(req).execute().use { res ->
                        if (res.isSuccessful) responseBody = res.body?.string()
                    }
                } catch (_: Exception) {}
            }

            // Parse and cache JSON in SharedPreferences for offline launch
            if (!responseBody.isNullOrBlank()) {
                prefs.edit().putString(KEY_CACHED_CATALOG_JSON, responseBody).apply()
                val parsed = parseAndSetCatalog(responseBody!!)
                Result.success(parsed)
            } else {
                Result.failure(IOException("Failed to fetch catalog from all endpoints"))
            }
        } finally {
            _isLoadingCatalog.value = false
        }
    }
```

---

## 2. Dynamic Activation & Uninstallation

```kotlin
fun installModule(moduleId: String) {
    val current = _installedModuleIds.value.toMutableSet()
    current.add(moduleId)
    prefs.edit().putStringSet(KEY_INSTALLED_IDS, current).apply()
    _installedModuleIds.value = current
    HubPluginRegistry.getInstance(context).notifyModulesChanged()
}

fun uninstallModule(moduleId: String) {
    val current = _installedModuleIds.value.toMutableSet()
    current.remove(moduleId)
    prefs.edit().putStringSet(KEY_INSTALLED_IDS, current).apply()
    _installedModuleIds.value = current
    HubPluginRegistry.getInstance(context).notifyModulesChanged()
}
```
