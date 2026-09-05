---
title: "Hardware Telemetry Module: Implementation & Sensor Probing"
description: "How the hardware telemetry module samples Android BatteryManager, ThermalManager, and Linux sysfs metrics."
---

# Hardware Telemetry Module: Implementation & Sensor Probing

The Hardware Telemetry module (`plugin_sensors`) monitors device physical health directly from local OS subsystems.

---

## 1. Battery & Thermal Sampling

```kotlin
// File: modules/sensors/src/main/java/iamrp/dev/feed/modules/sensors/SensorTelemetryProvider.kt

class SensorTelemetryProvider(private val context: Context) {

    fun getBatteryMetrics(): BatteryStats {
        val ifilter = IntentFilter(Intent.ACTION_BATTERY_CHANGED)
        val batteryStatus = context.registerReceiver(null, ifilter)

        val level = batteryStatus?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
        val scale = batteryStatus?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1
        val tempRaw = batteryStatus?.getIntExtra(BatteryManager.EXTRA_TEMPERATURE, -1) ?: -1
        
        val batteryPct = (level * 100 / scale.toFloat()).roundToInt()
        val tempCelsius = tempRaw / 10.0

        return BatteryStats(
            percentage = batteryPct,
            temperatureCelsius = tempCelsius
        )
    }

    fun getAvailableRam(): Long {
        val memoryInfo = ActivityManager.MemoryInfo()
        val activityManager = context.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
        activityManager.getMemoryInfo(memoryInfo)
        return memoryInfo.availMem / (1024 * 1024) // Megabytes
    }
}
```

---

## 2. Card Emission

Generates a multi-metric card rendered dynamically in Jetpack Compose:

```json
{
  "$schema": "https://cdn.iamrp.dev/feed/schemas/card-v1.schema.json",
  "cardId": "sensors_diagnostic_01",
  "moduleId": "plugin_sensors",
  "title": "Device Diagnostics",
  "layout": "grid_metric",
  "items": [
    { "label": "Battery", "value": "88%", "status": "good" },
    { "label": "Battery Temp", "value": "31.2 °C", "status": "nominal" },
    { "label": "RAM Available", "value": "3.8 GB", "status": "good" },
    { "label": "Thermal Status", "value": "None", "status": "nominal" }
  ]
}
```
