---
title: "Home Assistant State Monitor Module"
description: "Display smart home entity states, temperature sensors, lights, and climate controls in your feed."
---

# 🏠 Home Assistant State Monitor Module

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="https://cdn.iamrp.dev/examples/card_home_assistant_example.png" alt="Home Assistant State Monitor Preview Card" style="max-width: 560px; width: 100%; border-radius: 14px; box-shadow: 0 10px 28px rgba(0,0,0,0.5);" />
  <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Live rendered preview of the Home Assistant State Monitor card in RPDev Feed.</p>
</div>


<span class="badge-pill badge-amber">Smart Home</span>
<span class="badge-pill badge-green">Local Network Friendly</span>
<span class="badge-pill badge-green">Encrypted Token Storage</span>

> Integrates with your Home Assistant REST API to display real-time sensor states, presence detection, and environment telemetry directly in the RPDev Feed.

---

## 🙋 Step-by-Step Setup Guide

<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Generate a Long-Lived Access Token</h4>
      <ol>
        <li>Open your <strong>Home Assistant</strong> web interface.</li>
        <li>Click on your <strong>User Profile</strong> (at the bottom of the left sidebar).</li>
        <li>Scroll all the way to the bottom to the <strong>"Long-Lived Access Tokens"</strong> section.</li>
        <li>Click <strong>"Create Token"</strong>, give it a name (e.g. <code>RPDev Feed</code>), and click OK.</li>
        <li>Copy the token string.</li>
      </ol>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Enter Your Home Assistant Base URL</h4>
      <p>In RPDev Feed settings, enter your instance URL:</p>
      <ul>
        <li>For local home network: <code>http://192.168.1.100:8123</code> or <code>http://homeassistant.local:8123</code></li>
        <li>For remote Nabu Casa or Cloudflare: <code>https://your-domain.ui.nabu.casa</code></li>
      </ul>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Select Entity IDs to Monitor</h4>
      <p>Enter a comma-separated list of your Home Assistant entity IDs:</p>
      <pre><code>sensor.living_room_temperature, climate.thermostat, light.desk, binary_sensor.front_door</code></pre>
      <p>The card will display live chips and state badges for every listed entity!</p>
    </div>
  </div>
</div>

---

<details class="tech-spec">
  <summary>🛠️ Technical Specifications (For Developers)</summary>
  <div class="tech-content">
    <p><strong>Module ID:</strong> <code>module_home_assistant</code></p>
    <p><strong>API Endpoint:</strong> <code>GET {ha_url}/api/states/{entity_id}</code></p>
    <p><strong>Headers:</strong> <code>Authorization: Bearer {ha_token}</code></p>
    <p><strong>Security:</strong> The long-lived token is encrypted in Android Keystore via <code>EncryptedSharedPreferences</code>.</p>
  </div>
</details>
