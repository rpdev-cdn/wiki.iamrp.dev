---
title: "DNS Forge: Development & Testing Workflow"
description: "Developer guide, ESM-native Jest testing architecture, browser extension mocking, and debugging protocols for DNS Forge."
tags:
  - wiki
  - dns-forge
  - development
  - testing
---

> [!note] Project Documentation Wiki
> *Part of the **[[dns-forge/index|DNS Forge Technical Wiki]]**.*

# 🧪 Development & Testing Workflow

DNS Forge is built with modern JavaScript (ES2022+ modules) and runs a comprehensive test suite utilizing Jest and specialized browser extension mock environments.

---

## 1. 🛠️ Local Development Setup

### Prerequisites
- **Node.js**: `>= 22.0.0`
- **npm**: `>= 10.9.0`
- **Firefox Browser**: Nightly, Developer Edition, or Standard Release

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/RPDevs-Builds/nextdns-firefox-addon.git
cd nextdns-firefox-addon

# Install dependencies
npm install

# Run the test suite
npm test
```

### Loading the Extension in Firefox
1. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...**.
3. Select `manifest.json` in the root of the project.
4. Open the extension popup from the toolbar.
5. In another tab, open `about:devtools-toolbox?type=extension&id={56fda99b-4dd4-4a4a-a413-00ff1c2cffd8}` to inspect the background event page console and debug alarms, SSE connections, and message dispatching.

---

## 2. 🧪 Automated Testing Architecture

Our test framework is ESM-native, combining:
- **`jest`**: Core test runner.
- **`jest-environment-jsdom`**: Virtual DOM simulation for popup and dashboard elements.
- **`jest-webextension-mock`**: Polyfills for `browser.storage`, `browser.runtime`, `browser.alarms`, `browser.tabs`, and `browser.webRequest`.
- **`jest-fetch-mock`**: Network interceptor for NextDNS REST endpoints and SSE streams.

### Test Directory Overview (`tests/`)
| Test File | Focus Area |
|---|---|
| `android.test.js` | Android mode query params (`mode=tab`), responsive viewport scaling. |
| `apiClient.test.js` | Exponential backoff, 429 rate-limiting, error body parsing, `mapConcurrent` bounds. |
| `background.test.js` | Background engine bootstrap, profile auto-detection, DDNS linked IP updates. |
| `blocks.test.js` | Protection toggles, list searching, category enablement. |
| `customization.test.js` | Theme customization, preset loading, options persistence. |
| `debugger.test.js` | Intelligent Tab Debugger (`DEBUG_TAB`), `RUN_DIAGNOSTICS`, `GET_NETWORK_STATUS`. |
| `exports.test.js` | ES module barrel re-exports (`src/background.js`, `src/popup.js`). |
| `integrity.test.js` | DOM sanitization, manifest schema validation, security bounds. |
| `metadataManager.test.js` | Three-tier metadata fallback chain (local → GitHub → bundle). |
| `notifications.test.js` | Action Center alerts, badge counts, sound triggers, debounce pruning. |
| `persistence.test.js` | Storage synchronization, memory cache healing from sync to local. |
| `popup.test.js` | Popup UI event listeners, tab switching, button state resilience. |
| `sanitization.test.js` | Strict `setSafeHTML` DOMParser XSS resistance. |
| `scheduler.test.js` | Time-based automation rules, `browser.alarms` triggers, time format checks. |
| `snapshots.test.js` | Profile snapshot creation, FIFO quota caps, visual diff computation. |
| `themes.test.js` | 6-color custom palette engine, hex normalization, CSS variable injection. |
| `viewer.test.js` | Full-screen Data Manager (`viewer.html`), rewrites CRUD, profile comparisons. |

### Running Targeted Tests
```bash
# Run a specific suite
npx jest tests/apiClient.test.js

# Run in watch mode during active development
npm run test:watch
```
