---
title: "DNS Forge: Core Features & Capabilities"
description: "Comprehensive breakdown of all features in DNS Forge v1.2.0: live edge PoP telemetry, bounded concurrency engine, network diagnostics, rich device attribution, and tab debugging."
tags:
  - wiki
  - dns-forge
  - features
  - nextdns
---

> [!note] Project Documentation Wiki
> *Part of the **[[dns-forge/index|DNS Forge Technical Wiki]]**.*

# 🚀 Core Features & Capabilities

DNS Forge delivers an advanced management and diagnostics console for NextDNS users, providing real-time telemetry, automated troubleshooting, and high-performance profile operations.

---

## 1. 🧠 Real-Time Intelligence & Diagnostics

### 🟢 Live NextDNS Connection & Edge PoP Status
- **Real-Time Indicators:** The Overview header includes a persistent connection pill (`#conn-indicator-dot` and `#conn-status-badge`) indicating live DNS resolution state.
- **Edge Routing Telemetry:** Displays the active edge Point-of-Presence (PoP) server (e.g., `anycast.ams`, `vultr-ewr-1`) and resolution protocol (DoH / DoT / IPv4 / IPv6).
- **Status States:**
  - 🟢 **Connected / DoH (`pop`)**: Verified resolution through NextDNS servers.
  - 🟡 **Override (`id`)**: Resolved through an explicitly pinned custom profile override.
  - 🔴 **Unconfigured**: Traffic is currently bypassing NextDNS resolution.

### 🩺 Built-In PoP & Network Diagnostic Suite
- **Live Latency Probing:** Measures round-trip time (RTT in ms) directly to NextDNS edge infrastructure (`https://dns.nextdns.io/info`).
- **Telemetry Breakdown:** Visual cards displaying Connection Status, Edge Server Name, Ping/Latency, Protocol, and Client IP.
- **Export Diagnostic Bundle:** Generates a complete, downloadable JSON report with timestamped network diagnostics, active profile IDs, and extension version for troubleshooting.

### 🔍 Intelligent Tab Debugger
- **Cloud Blocklist Correlation:** Correlates active browser tab requests with NextDNS cloud query logs via the `DEBUG_TAB` message handler.
- **Root Cause Attribution:** Pinpoints the exact blocklist (OISD, NextDNS, AdGuard, 1Hosts, etc.) responsible for breaking a webpage, even when requests appear as default locally.
- **Quick 15-Minute Snooze:** Single-click "Snooze 15m" action temporarily unblocks domains with automatic reversion after 15 minutes.
- **Flexible Temporary Whitelist:** Supports custom temporary whitelisting clamped between 1 and 1,440 minutes.

### 📡 Zero-Latency Server-Sent Events (SSE) Stream
- **Live Log Feed:** Real-time query monitoring via NextDNS streaming endpoints without polling overhead.
- **Exponential Reconnection Backoff:** Defensively reconnects on network interruptions with resource cleanup.
- **Multi-Condition Filtering:** Instant filtering by status (Allowed, Blocked), match source (Allowlist, Denylist), client device, and protocol.

---

## 2. ⚡ Performance & High-Throughput Automation

### 🚀 Bounded Concurrency Task Worker (`mapConcurrent`)
- **Semaphore Design:** Modeled after NextDNS CLI's `maxInflightRequests` to maintain a strict pool of 4 concurrent async operations.
- **Bulk Import Acceleration:** Adding 50+ domains to allowlists or denylists completes in parallel **4x faster** without hitting HTTP 429 rate-limiting penalties.
- **Profile Snapshot Restoration:** Restores complete profile security configs, privacy settings, blocklists, TLDs, and parental controls with bounded concurrency.

### 📸 Profile Snapshots with Visual Diffs & Instant Rollback
- **Configuration Time Machine:** Captures point-in-time snapshots of complete NextDNS profile settings.
- **Visual Diffs:** Generates precise diff comparisons highlighting modified security, privacy, and parental control toggles.
- **Instant Rollback:** Restores previous configurations sequentially and safely with progress logging.
- **Quota Management:** Automatically caps saved snapshots at 20 with FIFO eviction to prevent storage bloat.

### 🪞 Mirror Mode Multi-Profile Synchronization
- **Replication Engine:** Automatically mirrors allowlist, denylist, and toggle modifications across multiple selected NextDNS profiles.
- **Eliminates Configuration Drift:** Ideal for users managing separate home, mobile, and IoT profiles.

### ⏰ Time-Based Automation Scheduler
- **Background Alarms:** Uses `browser.alarms` to schedule rules that activate or deactivate shields or parental control services at specific times of day (e.g., blocking gaming or streaming services during work or bedtime hours).

---

## 3. 🛡️ Complete Protection Management

### 🎛️ Unified Protection Categories
Accessible directly from the `🛡️ Protection` tab:
1. **Security**: Threat intelligence feeds, cryptojacking protection, DNS rebinding guard, typosquatting guard, DGA blocking, block recently registered domains (NRDs).
2. **Privacy**: Disguised third-party tracker blocking, affiliate link tracking, native tracking protection (Apple, Windows, Samsung, Roku).
3. **Performance**: EDNS Client Subnet (ECS), CNAME flattening, Cache Boost, Web3 support.
4. **Parental Control**: SafeSearch, YouTube restricted mode, block bypass methods, and granular service toggles (80+ services like TikTok, Discord, YouTube, Steam).
5. **Blocklists**: Instant search and toggle across 80+ curated blocklists with list metadata and entries counters.
6. **TLDs**: Granular top-level domain blocking across 1,300+ TLDs.
7. **Lists**: Dedicated Allowlist and Denylist management with single and bulk addition.

### 🗺️ DNS Rewrites Manager
- Full CRUD support for custom domain-to-IP overrides (e.g. `nas.home` → `192.168.1.50`).
- Direct management in the standalone Data Manager (`viewer.html`).
- Dynamic profile switcher with interactive profile selection.

---

## 4. 🎨 Appearance & Sovereign Customization

### 🎨 6-Color Custom Theme Designer
- **Preset Themes:** Default Dark (Slate), Default Light, OLED Black, Dracula, and Gruvbox.
- **Live Color Customizer:** Interactive hex and color-picker controls for:
  - Background Main (`--bg-main`)
  - Background Panel (`--bg-panel`)
  - Border Color (`--border-color`)
  - Hover Background (`--hover-bg`)
  - Text Main (`--text-main`)
  - Text Muted (`--text-muted`)
- **Instant CSS Injection:** Themes apply instantly across all popup views and the standalone Data Manager.

### 📢 Global Action Center & Alerts
- Global header popover (📢 Megaphone icon) displaying real-time security alerts and blocked threat counts.
- Configurable desktop OS notifications for critical security events.

### 🌐 NextDNS Web Console Enhancements
Injects sovereign enhancements directly into `my.nextdns.io`:
- **TLD & Blocklist Rollups**: Collapsible accordion views for lists.
- **Inline Query Actions**: Instant allow/deny buttons in NextDNS query logs.
- **Rich Device Nicknames**: Replaces cryptic device IDs with friendly hardware names and IP tooltips.
- **Contextual Domain Descriptions**: Displays intelligence tags next to recognized domains.
