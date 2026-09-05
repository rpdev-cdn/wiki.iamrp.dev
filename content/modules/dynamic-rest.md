---
title: "Custom REST / JSON Endpoint Module"
description: "Poll arbitrary HTTP JSON APIs (Home Assistant, Uptime Kuma, Gotify, Docker) and render as cards."
---

# ☁️ Custom REST / JSON Endpoint Module

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="https://cdn.iamrp.dev/examples/card_dynamic_rest_example.png" alt="Custom REST / JSON Endpoint Preview Card" style="max-width: 560px; width: 100%; border-radius: 14px; box-shadow: 0 10px 28px rgba(0,0,0,0.5);" />
  <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Live rendered preview of the Custom REST / JSON Endpoint card in RPDev Feed.</p>
</div>


<span class="badge-pill badge-purple">Developer &amp; Homelab</span>
<span class="badge-pill badge-green">URL Scheme Validated</span>

> Declarative JSON REST client that executes periodic HTTP GET requests with custom headers, extracting JSON keys using dot-notation into chips, status badges, and timeline items.

---

## 🙋 End-User Setup Guide

Have a self-hosted API, a weather station, or a webhook you want to monitor?

1. Open **Settings &gt; Hub Modules &gt; Custom REST**.
2. **REST Endpoint URL**: Enter the full URL (e.g. `https://api.github.com/zen` or your local LAN IP `http://192.168.1.50:8080/status`).
3. **Authorization Header (Optional)**: If your service requires a token, enter it here (e.g. `Bearer secret_token_123`).
4. **JSON Field for Title**: Type the name of the JSON key you want to display (e.g. `message`, `status`, or `temperature`).

---

<details class="tech-spec">
  <summary>🛠️ Technical Specifications (For Developers)</summary>
  <div class="tech-content">
    <p><strong>Module ID:</strong> <code>plugin_dynamic_rest</code></p>
    <p><strong>Headers JSON Example:</strong></p>
    <pre><code class="language-json">{
  "Accept": "application/json",
  "X-Custom-Auth": "token-xyz"
}</code></pre>
    <p><strong>JSON Traversal:</strong> Supports top-level keys and nested objects via dot notation.</p>
  </div>
</details>
