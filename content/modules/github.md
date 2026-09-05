---
title: "GitHub Pulse Module"
description: "Live GitHub pull request review requests, CI/CD workflow runs, assigned issues, and activity."
---

# 🐙 GitHub Pulse Module

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="https://cdn.iamrp.dev/examples/card_github_example.png" alt="GitHub Pulse Preview Card" style="max-width: 560px; width: 100%; border-radius: 14px; box-shadow: 0 10px 28px rgba(0,0,0,0.5);" />
  <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Live rendered preview of the GitHub Pulse card in RPDev Feed.</p>
</div>


<span class="badge-pill badge-purple">Developer</span>
<span class="badge-pill badge-amber">Token Optional</span>
<span class="badge-pill badge-green">Encrypted Storage</span>

> Track open pull requests, continuous integration (GitHub Actions) workflow results across your repositories, and unread notifications directly in your feed.

---

## 🙋 End-User Setup Guide

<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Enter Your GitHub Username or Org</h4>
      <p>Open <strong>Settings &gt; Hub Modules &gt; GitHub Pulse</strong> and enter your username (e.g. <code>torvalds</code> or <code>RPDevs-Builds</code>).</p>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>(Optional) Create a Personal Access Token (PAT)</h4>
      <p>A token is only required if you want to see <em>private repositories</em> or <em>unread notifications</em>:</p>
      <ol>
        <li>On your computer or browser, go to <a href="https://github.com/settings/tokens">github.com/settings/tokens</a>.</li>
        <li>Click <strong>Generate new token (classic)</strong>.</li>
        <li>Check the boxes for <code>repo</code> and <code>notifications</code>.</li>
        <li>Copy the generated token and paste it into the <strong>Personal Access Token</strong> field in RPDev Feed.</li>
      </ol>
      <p><em>Security Note: Your token is encrypted using Android's hardware Keystore (AES256_GCM) and never leaves your device.</em></p>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Enter Repositories to Track</h4>
      <p>In the <strong>Tracked Repositories</strong> field, enter comma-separated repository names (e.g. <code>owner/repo1, owner/repo2</code>) to display live CI build status chips.</p>
    </div>
  </div>
</div>

---

<details class="tech-spec">
  <summary>🛠️ Technical Specifications (For Developers)</summary>
  <div class="tech-content">
    <p><strong>Module ID:</strong> <code>plugin_github</code></p>
    <p><strong>APIs Queried:</strong></p>
    <ul>
      <li><code>https://api.github.com/users/{username}/events/public</code></li>
      <li><code>https://api.github.com/repos/{repo}/actions/runs?per_page=1</code></li>
      <li><code>https://api.github.com/notifications</code> (when PAT provided)</li>
    </ul>
    <p><strong>Card Type:</strong> <code>HubCardData.Composite</code> with CI status chips and commit timeline.</p>
  </div>
</details>
