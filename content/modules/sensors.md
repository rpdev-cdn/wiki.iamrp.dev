---
title: "Hardware & Battery Telemetry Module"
description: "Real-time battery charging wattage, voltage, temperature, internal storage, and RAM diagnostics."
---

# 🔋 Hardware & Battery Telemetry Module

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="https://cdn.iamrp.dev/examples/card_sensors_example.png" alt="Hardware & Battery Telemetry Preview Card" style="max-width: 560px; width: 100%; border-radius: 14px; box-shadow: 0 10px 28px rgba(0,0,0,0.5);" />
  <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Live rendered preview of the Hardware & Battery Telemetry card in RPDev Feed.</p>
</div>


<span class="badge-pill badge-green">100% On-Device</span>
<span class="badge-pill badge-blue">Pre-Installed</span>
<span class="badge-pill badge-green">No Network Transmission</span>

> Live hardware diagnostics card showing real-time charging wattage, battery temperature, RAM usage, and available internal disk storage with 1-tap system shortcuts.

---

## 🙋 What the Numbers Mean

- **⚡ Battery &amp; Charging Status**: Shows current percentage, charging status (AC Fast Charger, USB, or Wireless), and real-time charging power in Watts.
- **🌡️ Battery Temperature**: Real-time battery temperature with color alerts:
  - 🟢 Green: Safe operating temperature (&lt;38°C)
  - 🟠 Orange: Warm charging temperature (38°C - 44°C)
  - 🔴 Red: Overheating warning (&ge;45°C)
- **💾 RAM Memory**: Shows free vs total system memory (e.g. `2450MB / 5890MB`).
- **📁 Storage**: Shows available free storage in GB with 1-decimal precision and percent used.
- **1-Tap Action Buttons**: Tap **Battery Settings** or **Storage** directly on the card to jump straight into Android's system settings.

---

<details class="tech-spec">
  <summary>🛠️ Technical Specifications (For Developers)</summary>
  <div class="tech-content">
    <p><strong>Module ID:</strong> <code>plugin_sensors</code></p>
    <p><strong>Sensors Sampled:</strong></p>
    <ul>
      <li><code>BatteryManager.BATTERY_PROPERTY_CURRENT_NOW</code> (Microamps converted to Watts)</li>
      <li><code>BatteryManager.EXTRA_TEMPERATURE</code> (Tenths of degree Celsius)</li>
      <li><code>ActivityManager.getMemoryInfo(MemoryInfo)</code> for RAM availability</li>
      <li><code>StatFs(Environment.getDataDirectory().path)</code> for storage bytes</li>
    </ul>
    <p><strong>Card Type:</strong> <code>HubCardData.Progress</code> with animated storage progress bar.</p>
  </div>
</details>
