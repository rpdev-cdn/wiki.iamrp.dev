---
title: "Uptime Kuma Status Monitor Module"
description: "Monitor service uptime, response latencies, and incident status from Uptime Kuma."
---

# ⏱️ Uptime Kuma Status Monitor Module

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="https://cdn.iamrp.dev/examples/card_uptime_kuma_example.png" alt="Uptime Kuma Status Monitor Preview Card" style="max-width: 560px; width: 100%; border-radius: 14px; box-shadow: 0 10px 28px rgba(0,0,0,0.5);" />
  <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Live rendered preview of the Uptime Kuma Status Monitor card in RPDev Feed.</p>
</div>


<span class="badge-pill badge-purple">DevOps &amp; Monitoring</span>
<span class="badge-pill badge-green">Public / Private Status</span>

> Fetches service status pages and heartbeat telemetry from self-hosted Uptime Kuma monitoring instances.

---

## 🙋 End-User Setup Guide

<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Find Your Status Page Heartbeat URL</h4>
      <p>If you have an Uptime Kuma status page (e.g. <code>https://status.example.com/status/main</code>), your heartbeat API endpoint is:</p>
      <pre><code>https://status.example.com/api/status-page/heartbeat/main</code></pre>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Enter URL in Feed Settings</h4>
      <p>In <strong>Settings &gt; Hub Modules &gt; Uptime Kuma</strong>, paste your heartbeat URL.</p>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Live Uptime Card</h4>
      <p>The feed displays:</p>
      <ul>
        <li>🟢 Service Up / Down indicators</li>
        <li>Average response latency in milliseconds (e.g. <code>⚡ 42ms Ping</code>)</li>
        <li>Incident alert banner if any monitored service is experiencing degradation.</li>
      </ul>
    </div>
  </div>
</div>

---

<details class="tech-spec">
  <summary>🛠️ Technical Specifications (For Developers)</summary>
  <div class="tech-content">
    <p><strong>Module ID:</strong> <code>module_uptime_kuma</code></p>
    <p><strong>API Endpoint:</strong> <code>GET /api/status-page/heartbeat/{slug}</code></p>
    <p><strong>Card Type:</strong> <code>HubCardData.Composite</code> with ping chips and status badge.</p>
  </div>
</details>
