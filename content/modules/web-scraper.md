---
title: "Webpage Monitor & Keyword Scraper"
description: "Scrape webpages, track content changes via MD5 diffs, and receive keyword alerts."
---

# 🌐 Webpage Monitor & Keyword Scraper

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="https://cdn.iamrp.dev/examples/card_web_scraper_example.png" alt="Webpage Monitor & Keyword Scraper Preview Card" style="max-width: 560px; width: 100%; border-radius: 14px; box-shadow: 0 10px 28px rgba(0,0,0,0.5);" />
  <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Live rendered preview of the Webpage Monitor & Keyword Scraper card in RPDev Feed.</p>
</div>


<span class="badge-pill badge-purple">Custom Web</span>
<span class="badge-pill badge-blue">Memory Capped (2MB)</span>
<span class="badge-pill badge-green">Zero Cloud Middleman</span>

> Periodic HTML scraping engine using Jsoup. Monitors target URLs for content modifications or specific keyword appearances, displaying alerts and direct links in the feed.

---

## 🙋 End-User Setup Guide

<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Enter the Target Webpage URL</h4>
      <p>In <strong>Settings &gt; Hub Modules &gt; Webpage Monitor</strong>, enter any public web URL (e.g. <code>https://github.blog/news-insights/product-news/</code>).</p>
      <p><em>Note: For security, only <code>http://</code> and <code>https://</code> URLs are accepted.</em></p>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Set Monitored Keywords</h4>
      <p>Type keywords separated by commas (e.g. <code>release, update, security, discount</code>). Whenever any of these words appear on the page, the card will display an alert chip.</p>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>(Optional) Narrow Down with CSS Selector</h4>
      <p>Leave blank to scan the whole page, or enter an element selector (like <code>article</code> or <code>main</code>) to focus on the article body.</p>
    </div>
  </div>
</div>

---

<details class="tech-spec">
  <summary>🛠️ Technical Specifications (For Developers)</summary>
  <div class="tech-content">
    <p><strong>Module ID:</strong> <code>plugin_web_scraper</code></p>
    <p><strong>Engine:</strong> Jsoup HTML parser with MD5 change hashing.</p>
    <p><strong>Memory Guard:</strong> 2MB response size ceiling to prevent OOM on large payloads.</p>
    <p><strong>Link Sanitization:</strong> All extracted <code>abs:href</code> links are validated against HTTP/HTTPS schemes before rendering.</p>
  </div>
</details>
