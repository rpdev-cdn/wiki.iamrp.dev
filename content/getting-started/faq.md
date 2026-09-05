---
title: "Troubleshooting & FAQs"
description: "Frequently asked questions and solutions for common setup hurdles."
---

# 💡 Frequently Asked Questions & Troubleshooting

Find quick solutions to common questions and setup issues. If you need assistance, check the solutions below.

---

### ❓ Swiping left does not open the feed. What should I check?

1. **Verify RPDev Feed is installed**: Ensure that the **RPDev Feed** app is installed alongside RPDev Launcher.
2. **Check Launcher Settings**:
   - Long-press an empty space on your home screen &gt; **Home settings** &gt; **Search &amp; Feed**.
   - Ensure **"Enable Feed Overlay"** is toggled **ON**.
   - Check that **"Feed Provider"** is set to **RPDev Feed** (`iamrp.dev.feed`).
3. **Restart the Launcher**:
   - In Launcher Settings, scroll down to the bottom and tap **"Restart Launcher"**.

---

### ❓ Why does Android close the Feed app in the background?

Some phone manufacturers (such as Samsung, Xiaomi, and OnePlus) have aggressive "battery optimization" features that put background companion services to sleep.

To prevent the feed from being closed:
1. Open your phone's system **Settings** &gt; **Apps** &gt; **RPDev Feed**.
2. Tap **Battery** (or **App battery usage**).
3. Set it to **"Unrestricted"** (or disable "Pause app activity if unused").
4. This ensures instant response whenever you swipe left.

---

### ❓ Is any of my personal data sent to RPDev servers?

<span class="badge-pill badge-green">100% On-Device</span> <span class="badge-pill badge-green">Zero Telemetry</span>

**No.** RPDev Launcher and RPDev Feed contain **zero telemetry, zero analytics tracking, and zero advertising SDKs**. 
- Calendar events are queried exclusively from your device's local Android calendar database.
- Battery and memory telemetry are read from your phone's internal sensors.
- Weather queries are made directly from your phone to Open-Meteo with no personal identification.
- Home Assistant and Docker tokens are saved on your phone in hardware-encrypted storage (`EncryptedSharedPreferences`).

---

### ❓ How do I create a folder inside another folder (Nested Folders)?

1. Long-press an app on your home screen and drag it onto another app to create a folder.
2. Open that folder.
3. Long-press an app or another folder on your home screen and drag it directly inside!
4. RPDev Launcher automatically manages subfolder windows with zero lag and built-in loop protection.

---

### ❓ How do I update to newer versions?

Simply download the latest `.apk` from [github.com/RPDevs-Builds](https://github.com/RPDevs-Builds) and install it directly over your existing installation. Your icons, layouts, and configurations will be completely preserved.
