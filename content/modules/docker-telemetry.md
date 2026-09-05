---
title: "Docker & Fleet Health Monitor Module"
description: "Track container statuses, CPU/memory consumption, and uptime across host nodes."
---

# 🐳 Docker & Fleet Health Monitor Module

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="https://cdn.iamrp.dev/examples/card_docker_telemetry_example.png" alt="Docker Fleet Health Preview Card" style="max-width: 560px; width: 100%; border-radius: 14px; box-shadow: 0 10px 28px rgba(0,0,0,0.5);" />
  <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Live rendered preview of the Docker Fleet Health card in RPDev Feed.</p>
</div>


<span class="badge-pill badge-purple">DevOps &amp; Homelab</span>
<span class="badge-pill badge-amber">Self-Hosted</span>

> Polls Docker daemon or Portainer API endpoints to display active container counts, failed health checks, and server load metrics directly on your home screen.

---

## 🙋 End-User Setup Guide

<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Determine Your Endpoint URL</h4>
      <p>You can connect through:</p>
      <ul>
        <li><strong>Portainer REST API</strong>: <code>http://192.168.1.100:9000/api/endpoints/1/docker/containers/json</code></li>
        <li><strong>Docker Socket Proxy</strong>: <code>http://192.168.1.100:2375/containers/json</code></li>
      </ul>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Enter Your API Key / Token</h4>
      <p>If using Portainer, create an API token in <em>User Settings &gt; Access tokens</em> and paste it into the <strong>API Key</strong> field.</p>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Read Your Fleet Health</h4>
      <p>The card displays:</p>
      <ul>
        <li>🟢 Total Running Containers</li>
        <li>⚠️ Containers with unhealthy status</li>
        <li>Recent container restarts and uptime timelines</li>
      </ul>
    </div>
  </div>
</div>

---

<details class="tech-spec">
  <summary>🛠️ Technical Specifications (For Developers)</summary>
  <div class="tech-content">
    <p><strong>Module ID:</strong> <code>module_docker_telemetry</code></p>
    <p><strong>Endpoint:</strong> <code>GET /containers/json?all=true</code></p>
    <p><strong>Parsed Fields:</strong> <code>Names, State, Status, Image</code></p>
  </div>
</details>
