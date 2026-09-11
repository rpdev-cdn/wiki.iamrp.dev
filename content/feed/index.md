---
title: "RPDev Feed User Guide"
description: "Your private, sovereign Google Discover alternative powered by Jetpack Compose and local SQLite."
---

# 📰 RPDev Feed User Guide

> **A smart, sovereign -1 screen.** RPDev Feed replaces proprietary tracking feeds with an open, zero-telemetry dashboard that respects your privacy.

<div class="portal-grid">
  <a class="portal-card" href="minus-one-screen.md">
    <div class="card-icon">👈</div>
    <div class="card-title">The -1 Screen</div>
    <div class="card-desc">How to swipe into the feed, bookmark articles, search, and filter by topic.</div>
    <span class="card-tag">Feed Basics →</span>
  </a>

  <a class="portal-card" href="customizing-cards.md">
    <div class="card-icon">🎛️</div>
    <div class="card-title">Customizing Cards</div>
    <div class="card-desc">Reorder cards with drag-and-drop, toggle compact view, and choose your favorite theme.</div>
    <span class="card-tag">Personalize →</span>
  </a>

  <a class="portal-card" href="rss-and-news.md">
    <div class="card-icon">📡</div>
    <div class="card-title">RSS Feeds &amp; Reader Mode</div>
    <div class="card-desc">Add your favorite websites, import OPML files, and read articles distraction-free.</div>
    <span class="card-tag">Sovereign News →</span>
  </a>

  <a class="portal-card" href="feed-technical-architecture.md">
    <div class="card-icon">⚙️</div>
    <div class="card-title">Technical Architecture</div>
    <div class="card-desc">AIDL overlay service, WindowManager attachment, Room database, and security crypto.</div>
    <span class="card-tag">For Developers →</span>
  </a>
</div>

---

## 🛡️ Why Choose RPDev Feed?

- **Zero Tracking**: Unlike commercial news feeds, RPDev Feed does not build an advertising profile on you.
- **Hardware-Backed Encryption**: Sensitive API keys (such as GitHub PATs or Home Assistant tokens) are encrypted using Android's hardware Keystore (`AES256_GCM`).
- **Offline Capable**: Read bookmarked articles and cached news even when you don't have an internet connection.
- **Extensible Modules**: Want weather, battery wattage, GitHub pull requests, or Docker alerts? Install any module with one tap.
