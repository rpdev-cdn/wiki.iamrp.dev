---
title: "RPDev Feed Modules Documentation"
description: "Companion add-ons and card providers for RPDev Feed with open API specifications."
---


> [!info] Project Maturity: **95% — Production-Hardened GA (Tier 5)**
> - **Lifecycle Status**: Production GA Release (`v1.2.1`)
> - **Active Components**: Pluggable card catalog (sensors, weather, telemetry), JSON schema contract validation, Gradle multi-module architecture, 2MB safe streaming response limits, live Let's Encrypt TLS catalog deployment on `launcher.repo.iamrp.dev`
> - **Pending Enhancements**: Dynamic remote module loading without APK re-bundling

# RPDev Feed Modules Documentation

> The companion module monorepo hosting pluggable cards, telemetry readers, and widgets for RPDev Feed.

- **Repository**: [`https://github.com/RPDevs-Builds/RPDev-Feed-Modules`](https://github.com/RPDevs-Builds/RPDev-Feed-Modules)
- **Catalog Registry**: [launcher.repo.iamrp.dev](https://launcher.repo.iamrp.dev)
- **Schemas**: [`card-v1.schema.json`](https://cdn.iamrp.dev/feed/schemas/card-v1.schema.json)
- **Latest Release**: `v1.2.1` (GA)

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
