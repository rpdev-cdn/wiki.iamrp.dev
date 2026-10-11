---
title: "DNS Forge: Installation & Setup Guide"
description: "Installation methods for DNS Forge: sovereign self-hosted repository, Mozilla Add-ons (AMO), and temporary developer builds."
tags:
  - wiki
  - dns-forge
  - installation
  - setup
---

> [!note] Project Documentation Wiki
> *Part of the **[[dns-forge/index|DNS Forge Technical Wiki]]**.*

# 📦 Installation & Initial Setup

DNS Forge can be installed through our sovereign self-hosted add-on repository, via Mozilla Add-ons (AMO), or loaded locally from source.

---

## 1. 🌐 Sovereign Distribution Hub (`firefox.repo.iamrp.dev`)

DNS Forge is hosted and updated directly on our high-availability sovereign repository hub:

| Resource | URL |
|---|---|
| **Sovereign Add-on Portal** | [`https://firefox.repo.iamrp.dev/`](https://firefox.repo.iamrp.dev/) |
| **Direct Signed XPI Package** | [`https://github.com/RPDevs-Builds/nextdns-firefox-addon/releases/download/v1.2.0/dns_forge-1.2.0.xpi`](https://github.com/RPDevs-Builds/nextdns-firefox-addon/releases/download/v1.2.0/dns_forge-1.2.0.xpi) |
| **Automatic Updates Manifest** | [`https://firefox.repo.iamrp.dev/updates.json`](https://firefox.repo.iamrp.dev/updates.json) |
| **Package Version** | `v1.2.0` |

### Installation Steps in Firefox
1. Open Firefox and navigate to the direct package download link or [`https://firefox.repo.iamrp.dev/`](https://firefox.repo.iamrp.dev/).
2. When prompted by Firefox, click **Continue to Installation**.
3. Review the declared permissions and click **Add**.
4. Enable the checkbox **Allow this extension to run in Private Windows** if you desire continuous protection during private browsing.

---

## 2. 🦊 Mozilla Add-ons (AMO)

DNS Forge is submitted to Mozilla Add-ons (AMO) and signed for general distribution.
- **AMO Listing**: [DNS Forge on Add-ons for Firefox](https://addons.mozilla.org)
- **Automated Signing Pipeline**: Every git release tag (`vX.Y.Z`) triggers a GitHub Actions workflow that packages the extension and submits it to the Mozilla Add-ons API for cryptographic signing.

---

## 3. 🛠️ Load from Source (Developer Mode)

For development, testing, or custom builds:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/RPDevs-Builds/nextdns-firefox-addon.git
   cd nextdns-firefox-addon
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Load in Firefox**:
   - Open Firefox and type `about:debugging#/runtime/this-firefox` into the URL bar.
   - Click the **Load Temporary Add-on...** button.
   - Navigate to your cloned directory and select `manifest.json`.
   - The extension will appear in your toolbar immediately.

---

## 4. 🔑 Initial Configuration

After installing DNS Forge, configure your NextDNS credentials:

1. Click the **DNS Forge** icon in the Firefox toolbar.
2. If prompted, navigate to **⚙️ Options** -> **🔌 Connection**.
3. Enter your **NextDNS API Key** (obtainable from [my.nextdns.io/account](https://my.nextdns.io/account)).
4. Click **Save & Refresh Profiles**.
5. Choose your target profile or select **Auto-Detect** to have the extension detect your active profile based on DNS queries and network tests.
