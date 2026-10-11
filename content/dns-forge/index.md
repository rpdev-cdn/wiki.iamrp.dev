---
title: "DNS Forge: NextDNS Sovereign Firefox Privacy Extension"
description: "Comprehensive technical guide and documentation wiki for DNS Forge v1.2.0: Manifest V3 Firefox privacy extension, real-time DoH PoP telemetry, bounded concurrency worker, zero-latency SSE query streaming, and intelligent tab debugging."
tags:
  - wiki
  - security
  - privacy
  - firefox
  - webextension
  - nextdns
---

> [!note] Project Documentation Wiki
> *This document is part of the **[[projects/index|RPDev Projects Knowledge Base]]**. For the high-level portfolio overview, visit [iamrp.dev](https://iamrp.dev).*

> [!info] Project Maturity: **98% — Production GA Extension (Tier 5)**
> - **Lifecycle Status**: Production Release (`v1.2.0`)
> - **Active Components**: Manifest V3 extension, bounded concurrency worker (`mapConcurrent`), live NextDNS edge PoP status indicators, real-time Server-Sent Events (SSE) query stream parser, integrated network RTT latency diagnostics, 17 Jest test suites (128 passing tests).
> - **Compliance**: 100% Mozilla AMO Compliant (0 errors, 0 warnings, 0 notices via `addons-linter`).

# 🛡️ DNS Forge: Sovereign NextDNS Privacy Extension

DNS Forge is a high-performance, modular Firefox WebExtension engineered for advanced [NextDNS](https://nextdns.io) users. It interfaces directly with NextDNS REST and streaming APIs to deliver real-time Server-Sent Events (SSE) query monitoring, edge PoP diagnostic probing, bounded concurrency snapshot restorations, and automated blocklist correlation.

- **Repository**: [`https://github.com/RPDevs-Builds/nextdns-firefox-addon`](https://github.com/RPDevs-Builds/nextdns-firefox-addon)
- **Sovereign Add-on Hub**: [`https://firefox.repo.iamrp.dev/`](https://firefox.repo.iamrp.dev/)
- **Target Platform**: Firefox Desktop & Firefox for Android (GeckoView / Nightly)
- **Specification**: Firefox Manifest V3 WebExtension

```mermaid
graph TD
    A[Browser Navigation Event] --> B[Firefox WebExtension Runtime]
    
    subgraph Extension Core
        B <--> C[SSE Log Stream Parser<br><i>Real-Time Zero-Latency</i>]
        B <--> D[Intelligent Tab Debugger<br><i>Pinpoints Triggering Blocklist</i>]
        B <--> E[Bounded Concurrency Engine<br><i>mapConcurrent Pool (x4)</i>]
        B <--> H[PoP Network Diagnostics<br><i>Live RTT Latency Probing</i>]
    end

    subgraph Security & Policy Engine
        C --> F[NextDNS Cloud Gateway]
        E --> F
        H --> F
        F --> G[Custom Security Profiles<br><i>Cryptojacking, C2, Trackers, TLDs</i>]
    end
```

---

## 🧭 Documentation Map

| Section | Description |
|---|---|
| **[[dns-forge/features\|Core Features]]** | Deep dive into v1.2.0 capabilities: live edge PoP indicators, bounded concurrency workers, network diagnostic suite, rich device attribution, and tab debugging. |
| **[[dns-forge/installation\|Installation & Setup]]** | Download instructions via the sovereign distribution portal, AMO, or developer source loading. |
| **[[dns-forge/architecture/overview\|System Architecture]]** | Architectural overview, ES module boundaries, Mermaid sequence diagrams, and zero-telemetry security model. |
| **[[dns-forge/architecture/manifest\|Manifest V3 Specification]]** | Comprehensive permission audit, host scopes, content script injection targets, and CSP rules. |
| **[[dns-forge/technical/build\|Build & CI/CD Pipeline]]** | Packaging with `web-ext`, Mozilla `addons-linter` auditing, and automated GitHub Actions workflows. |
| **[[dns-forge/technical/development\|Development & Testing]]** | Local setup instructions, ESM-native Jest test runner (17 suites / 128 tests), and mock patterns. |
| **[[dns-forge/technical/standards\|Engineering Standards]]** | Zero-regression mandate, strict XSS prevention (`setSafeHTML`), memory bounds, and defensive API patterns. |
| **[[dns-forge/reference/index\|Technical API Reference]]** | Complete module index and JSDoc documentation across all 24 background, UI, and utility files. |

---

## ⚡ Key Highlights in v1.2.0

### 🟢 Real-Time Edge PoP & DoH Indicators
The extension header actively displays real-time NextDNS edge connection status:
- 🟢 **DoH / Connected (`<pop>`)**: Actively resolving through verified NextDNS PoP edge nodes (e.g. `anycast.ams`, `vultr-ewr-1`).
- 🟡 **Override (`<id>`)**: Resolved through an explicitly pinned custom profile override.
- 🔴 **Unconfigured**: Traffic is currently bypassing NextDNS resolution.

### 🚀 Bounded Concurrency Task Worker (`mapConcurrent`)
Inspired by NextDNS CLI's `maxInflightRequests` semaphore, DNS Forge bounds async operations to 4 parallel workers. This accelerates bulk domain additions and complete profile snapshot restores by **4x** while completely avoiding HTTP 429 rate-limiting penalties.

### 🩺 Integrated Network & PoP Diagnostic Suite
A native diagnostics laboratory located in the Tools panel executes live latency probes to `https://dns.nextdns.io/info` and captures network diagnostic state from `https://test.nextdns.io`, providing round-trip latency (ms), edge server routing, and single-click JSON diagnostic bundle exports.

### 📱 Rich Client Device Attribution
Replaces cryptic device IDs across logs, analytics, and the `my.nextdns.io` web console with human-readable hardware metadata (`DeviceName (Model)`) and IP addresses in hover tooltips.
