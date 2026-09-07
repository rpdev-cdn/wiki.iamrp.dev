---
title: "The -1 Screen Navigation"
description: "How to swipe into your feed, bookmark articles, and filter topics."
---

<div style="display: flex; gap: 1.5rem; justify-content: center; margin: 1.5rem 0; flex-wrap: wrap;">
  <div style="text-align: center; max-width: 280px;">
    <img src="https://cdn.iamrp.dev/recordings/demo_feed_swipe.gif" alt="Feed Overlay Swipe" style="border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.5); width: 100%;" />
    <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Swipe gesture to reveal overlay</p>
  </div>
  <div style="text-align: center; max-width: 280px;">
    <img src="https://cdn.iamrp.dev/screenshots/feed_minus_one_screen.png" alt="Feed Overlay Interface" style="border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.5); width: 100%;" />
    <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Live Feed overlay with active cards</p>
  </div>
</div>

# 👈 The -1 Screen Navigation

The term **"-1 Screen"** refers to the page that appears when you are on your main home screen and swipe all the way to the left.

---

## 🕹️ Feed Navigation & Gestures

- **Swipe Left from Home**: Smoothly slides the RPDev Feed onto your screen.
- **Swipe Right**: Dismisses the feed and returns directly to your launcher desktop.
- **Swipe Down to Refresh**: Pull down from the top of the feed to trigger a live refresh of all weather, battery, and news cards.
- **Swipe a Card Left/Right**: Temporarily dismisses that specific card for the session. (Pull down from the top or scroll to restore).

---

## 🔖 Bookmarks & Reading Later

Found an interesting article or news item you want to save?

1. Tap the **Bookmark icon (🔖)** on any article card.
2. The article is saved locally to your device's private SQLite database.
3. At the top of the feed, tap the **Bookmark button** in the header to switch to your Bookmarked Articles list.
4. Saved articles can be read even if you are on an airplane with no internet connection.

---

## 🔍 Search & Category Filters

- **Search Bar**: Tap the search icon at the top right to instantly search through your cached news headlines and active cards.
- **Filter Sheet**: Tap the filter icon to filter your feed by category (e.g. *Technology*, *World*, *Science*, or *Self-Hosted*).
