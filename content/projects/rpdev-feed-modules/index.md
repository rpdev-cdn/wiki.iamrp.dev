---
title: "RPDev Feed Modules Documentation"
description: "Companion add-ons and card providers for RPDev Feed with open API specifications."
---

# RPDev Feed Modules Documentation

> The companion module monorepo hosting pluggable cards, telemetry readers, and widgets for RPDev Feed.

- **Repository**: [`https://github.com/RPDevs-Builds/RPDev-Feed-Modules`](https://github.com/RPDevs-Builds/RPDev-Feed-Modules)
- **Catalog Registry**: [repo.launcher.iamrp.dev](https://repo.launcher.iamrp.dev)
- **Schemas**: [`card-v1.schema.json`](https://cdn.iamrp.dev/feed/schemas/card-v1.schema.json)

---

## Catalog Index

| Module ID | Title | Category | Pre-Installed |
|---|---|---|---|
| `plugin_weather` | Weather Radar | Weather | ✅ Yes |
| `plugin_sensors` | Hardware Telemetry | Diagnostics | ✅ Yes |
| `plugin_system_monitor` | System Monitor | Diagnostics | ❌ No |
| `plugin_rss` | RSS News Feed | News | ❌ No |
| `plugin_github` | GitHub Notifications | Developer | ❌ No |
| `plugin_notes` | Quick Notes & Scratchpad | Productivity | ❌ No |
| `plugin_media` | Media Player Controller | Media | ❌ No |
| `plugin_calendar` | Calendar & Schedule | Productivity | ❌ No |
| `plugin_speedtest` | Network Speedometer | Tools | ❌ No |

---

## Detailed Implementation Examples

1. **[Weather Radar Module](weather-module-example.md)**: Open-Meteo REST client, JSON serialization, and dynamic condition icons.
2. **[Hardware & Battery Telemetry Module](sensors-telemetry-example.md)**: On-device sensor sampling via `BatteryManager`, `ThermalManager`, and Linux `/sys` virtual filesystem.
