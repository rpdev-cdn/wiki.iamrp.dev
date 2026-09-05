---
title: "Privacy Weather Module"
description: "Zero-telemetry live weather forecasts, radar trends, and location options from Open-Meteo."
---

# ☀️ Privacy Weather Module

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="https://cdn.iamrp.dev/examples/card_weather_example.png" alt="Privacy Weather Preview Card" style="max-width: 560px; width: 100%; border-radius: 14px; box-shadow: 0 10px 28px rgba(0,0,0,0.5);" />
  <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Live rendered preview of the Privacy Weather card in RPDev Feed.</p>
</div>


<span class="badge-pill badge-green">Zero Telemetry</span>
<span class="badge-pill badge-blue">Pre-Installed</span>
<span class="badge-pill badge-green">No API Key Required</span>

> Comprehensive weather card showing current temperature, feels-like temperature, humidity, wind speeds, and hourly forecast using the open **Open-Meteo** weather service.

---

## 🙋 End-User Setup Guide

<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Open Weather Settings</h4>
      <p>In RPDev Feed, tap <strong>Settings &gt; Hub Modules &gt; Privacy Weather</strong>.</p>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Set Your Location</h4>
      <p>You have two choices:</p>
      <ul>
        <li><strong>City or Zip Code</strong>: Enter your city name (e.g. <code>Chicago, IL</code> or <code>London</code>) or postal zip code. The app automatically looks up the coordinates without tracking you.</li>
        <li><strong>On-Demand GPS</strong>: Tap the GPS button to use your phone's current location once. No background location tracking is ever used!</li>
      </ul>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Pick Your Temperature Units</h4>
      <p>Toggle <strong>Use Fahrenheit (°F)</strong> to switch between Celsius (°C) and Fahrenheit.</p>
    </div>
  </div>
</div>

---

## 💡 Troubleshooting & FAQs

- **Why does it default to New York?**  
  If location permissions are denied and no custom city is typed, the app defaults to New York coordinates so the card remains functional until you choose your city.
- **Does Open-Meteo track my IP address?**  
  No. Open-Meteo does not require user accounts, API keys, or personal identifiers.

---

<details class="tech-spec">
  <summary>🛠️ Technical Specifications (For Developers)</summary>
  <div class="tech-content">
    <p><strong>Module ID:</strong> <code>plugin_weather</code></p>
    <p><strong>Endpoint:</strong> <code>https://api.open-meteo.com/v1/forecast</code></p>
    <p><strong>Parameters:</strong> <code>latitude, longitude, current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code</code></p>
    <p><strong>Card Type:</strong> <code>HubCardData.Composite</code> with hourly chips and timeline forecasts.</p>
  </div>
</details>
