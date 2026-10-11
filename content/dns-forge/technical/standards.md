---
title: "DNS Forge: Engineering Standards & Integrity"
description: "Architectural isolation standards, strict XSS prevention, memory bounds, error defense, and code quality invariants for DNS Forge."
tags:
  - wiki
  - dns-forge
  - standards
  - security
---

> [!note] Project Documentation Wiki
> *Part of the **[[dns-forge/index|DNS Forge Technical Wiki]]**.*

# 🛡️ Engineering Standards & Integrity

DNS Forge enforces a **Zero-Regression Mandate** through architectural isolation, strict defensive coding, and automated verification gates.

---

## 1. 🧱 Architectural Isolation

### Pure Functions & Modular Decoupling
To avoid subtle state pollution and race conditions:
- **Presentation Logic (`src/ui/`)**: Renders data and delegates DOM events. Never interacts directly with raw network fetch or NextDNS auth keys; requests are passed via `browser.runtime.sendMessage`.
- **Background Engine (`src/background/`)**: Manages external API networking, alarms, SSE streams, and persistent storage.
- **Content Scripts (`src/content/`)**: Operates inside an isolated execution environment within the NextDNS web console (`my.nextdns.io`), interacting purely with page DOM.

### Single Delegated Event Listener Pattern
In the popup UI, attaching individual event listeners to hundreds of dynamic DOM items causes event collisions, memory bloat, and broken listeners upon re-renders. DNS Forge binds a single delegated listener at the document root:
```javascript
document.addEventListener('click', async (e) => {
    const actionBtn = e.target.closest('[data-action]');
    if (!actionBtn) return;
    const action = actionBtn.getAttribute('data-action');
    // Execute action safely...
});
```

---

## 2. 🔐 Security & Defensive Hardening

### Strict XSS Prevention (`setSafeHTML`)
The extension forbids raw `innerHTML = untrustedString`. All dynamic DOM insertions utilize `setSafeHTML` which parses content through the browser's native `DOMParser` and strips dangerous elements:
```javascript
export function setSafeHTML(element, htmlString) {
    if (!element) return;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    // Sanitize scripts, object tags, and javascript: URIs
    element.replaceChildren(...doc.body.childNodes);
}
```

### URL Scheme Sanitization
Context menus, deep-links, and web request filters validate schemes defensively. Non-web protocols (`data:`, `about:blank`, `javascript:`, `vbscript:`) are rejected immediately before domain parsing.

### Bounded Concurrency
All bulk iterations utilize `mapConcurrent(items, 4, fn)` to protect browser resources and prevent HTTP 429 rate limits against NextDNS upstream servers.

### Button State Resilience (`try ... catch ... finally`)
All asynchronous user operations wrap button state mutations in `finally` blocks to guarantee buttons are re-enabled even if network or API exceptions occur:
```javascript
btn.disabled = true;
btn.textContent = "Processing...";
try {
    await performOperation();
} catch (e) {
    showToast(e.message, 'error');
} finally {
    btn.disabled = false;
    btn.textContent = "Original Label";
}
```

---

## 3. 💾 Memory Bounds & Leaks Prevention

1. **Query Log Buffers**: Live SSE query logs are capped at 100 entries. New entries trigger immediate FIFO shift of the oldest query.
2. **Snapshot Quota**: Saved snapshots are capped at 20 entries in storage.
3. **Debounce Timestamps**: Debounce records older than 60 seconds are purged on each event check.
4. **Listener Teardown**: In-page modal dialogs tear down scoped `keydown` and outside-click listeners upon dismissal.
