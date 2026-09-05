---
title: "Module Development Guide"
description: "How to implement the HubPlugin interface and publish a custom card provider."
---

# 🔌 Module Development Guide

Creating a custom card for RPDev Feed is straightforward. All plugins implement the simple `HubPlugin` contract.

---

## 📝 The `HubPlugin` Interface

```kotlin
package com.saulhdev.feeder.plugins

import android.content.Context
import com.saulhdev.feeder.plugins.models.HubCardData

interface HubPlugin {
    val id: String
    val name: String
    val description: String
    val category: PluginCategory
    val iconName: String
    val defaultRefreshMinutes: Int get() = 30

    fun getConfigFields(): List<PluginConfigField> = emptyList()

    suspend fun fetchCardData(
        context: Context,
        config: Map<String, String>
    ): Result<HubCardData>
}
```

---

## 🎨 Card Types (`HubCardData`)

Your plugin returns one of the sealed subclasses of `HubCardData`:
- `HubCardData.Composite`: Title, subtitle, badge, chips array, timeline items array, and action buttons.
- `HubCardData.Progress`: Progress percentage, progress label, subtitle, badge, and chips.
- `HubCardData.Metric`: Big number display, metric label, trend indicator, and action buttons.

---

## 📋 JSON Catalog Schema

All published modules are indexed in `catalog/modules.json` validated against `https://cdn.iamrp.dev/feed/schemas/module-manifest.schema.json`.
