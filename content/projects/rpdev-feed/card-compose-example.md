---
title: "RPDev Feed: Jetpack Compose Card Engine Example"
description: "How RPDev Feed builds reactive, 120Hz smooth cards in Jetpack Compose with Material You theming."
---

# RPDev Feed: Jetpack Compose Card Engine Example

RPDev Feed implements a declarative card rendering pipeline that seamlessly adapts between dark and light themes, dynamic Material You palettes, and custom module payloads.

---

## 1. Composable Metric Card Component

```kotlin
package com.saulhdev.feeder.ui.cards

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun TelemetryMetricCard(
    title: String,
    primaryValue: String,
    unit: String,
    subtitle: String,
    statusColor: androidx.compose.ui.graphics.Color = MaterialTheme.colorScheme.primary
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 6.dp),
        shape = RoundedCornerShape(20.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.85f)
        )
    ) {
        Column(modifier = Modifier.padding(18.dp)) {
            Text(
                text = title.uppercase(),
                style = MaterialTheme.typography.labelMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Spacer(modifier = Modifier.height(8.dp))
            Row(verticalAlignment = Alignment.Bottom) {
                Text(
                    text = primaryValue,
                    fontSize = 32.sp,
                    fontWeight = FontWeight.Bold,
                    color = statusColor
                )
                Spacer(modifier = Modifier.width(4.dp))
                Text(
                    text = unit,
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    modifier = Modifier.padding(bottom = 4.dp)
                )
            }
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = subtitle,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.7f)
            )
        }
    }
}
```

---

## 2. Dynamic Weather Card Layout

```kotlin
@Composable
fun WeatherCard(
    location: String,
    temperature: String,
    condition: String,
    highLow: String,
    iconUrl: String
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 6.dp),
        shape = RoundedCornerShape(24.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.secondaryContainer
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(20.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(location, style = MaterialTheme.typography.titleMedium)
                Text(temperature, style = MaterialTheme.typography.displaySmall, fontWeight = FontWeight.Bold)
                Text(condition, style = MaterialTheme.typography.bodyMedium)
                Text(highLow, style = MaterialTheme.typography.labelSmall)
            }
            // Weather icon renderer
            AsyncImage(model = iconUrl, contentDescription = condition, modifier = Modifier.size(64.dp))
        }
    }
}
```
