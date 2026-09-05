---
title: "Calendar Agenda Module"
description: "On-device agenda engine displaying your upcoming 24-72 hour schedule with zero cloud tracking."
---

# 📅 Calendar Agenda Module

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="https://cdn.iamrp.dev/examples/card_calendar_example.png" alt="Calendar Agenda Preview Card" style="max-width: 560px; width: 100%; border-radius: 14px; box-shadow: 0 10px 28px rgba(0,0,0,0.5);" />
  <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Live rendered preview of the Calendar Agenda card in RPDev Feed.</p>
</div>


<span class="badge-pill badge-green">100% On-Device</span>
<span class="badge-pill badge-green">Private Schedule</span>
<span class="badge-pill badge-amber">Permission: Read Calendar</span>

> Queries your local Android calendar database and presents an elegant timeline of your upcoming events, appointments, and full-day reminders.

---

## 🙋 End-User Setup Guide

<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Enable Calendar Permission</h4>
      <p>When you first enable this module, Android will ask: <em>"Allow RPDev Feed to access your calendar?"</em> Tap <strong>Allow</strong>.</p>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Configure the Lookahead Window</h4>
      <p>In <strong>Settings &gt; Hub Modules &gt; Calendar Agenda</strong>:</p>
      <ul>
        <li><strong>Lookahead Window (Hours)</strong>: Choose how far ahead to check (default is <code>24</code> hours; can be set up to <code>72</code> hours).</li>
        <li><strong>Show All-Day Events</strong>: Toggle whether holidays and full-day events appear at the top.</li>
      </ul>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>1-Tap Navigation</h4>
      <p>Tap any event item on the card to open that exact event in your default calendar app (Google Calendar, Proton Calendar, Simple Calendar, etc.).</p>
    </div>
  </div>
</div>

---

<details class="tech-spec">
  <summary>🛠️ Technical Specifications (For Developers)</summary>
  <div class="tech-content">
    <p><strong>Module ID:</strong> <code>plugin_calendar</code></p>
    <p><strong>Content Provider:</strong> <code>CalendarContract.Instances.CONTENT_URI</code></p>
    <p><strong>Projection:</strong> <code>TITLE, BEGIN, END, ALL_DAY, EVENT_LOCATION, EVENT_COLOR</code></p>
    <p><strong>Card Type:</strong> <code>HubCardData.Composite</code> with chronological timeline items.</p>
  </div>
</details>
