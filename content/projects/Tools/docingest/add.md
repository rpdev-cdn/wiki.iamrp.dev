---
title: "DocIngest URL Ingestion Console"
description: "Submit documentation URLs, API references, or repositories for automated crawling, markdown distillation, and vector indexing."
---

# 🚀 DocIngest URL Ingestion Console

> **Submit documentation sites, API endpoints, or git repositories for automated crawling, noise stripping, markdown distillation, and semantic embedding generation.**

<div style="margin: 1rem 0 1.5rem 0; display: flex; gap: 0.75rem;">
  <a href="../view" class="di-btn di-btn-secondary" style="display: inline-flex; padding: 0.6rem 1.25rem; font-weight: 700; text-decoration: none;">
    📚 Browse Indexed Corpus (View)
  </a>
  <a href="../" class="di-btn di-btn-ghost" style="display: inline-flex; padding: 0.6rem 1.25rem; font-weight: 700; text-decoration: none;">
    🛠️ DocIngest Architecture & Specs
  </a>
</div>

<div class="docingest-app-container">
  <div id="docingest-add-root">
    <div class="docingest-fallback-card" style="padding: 1.5rem; background: var(--lightgray); border-radius: 8px; border: 1px solid var(--gray); margin-bottom: 1.5rem;">
      <h3 style="margin-top:0;">⚡ Live Documentation Ingestion Pipeline</h3>
      <p>Submit documentation URLs, API references, or GitHub repositories for automated scraping, markdown distillation, and semantic embedding generation.</p>
      <p><em>Loading live ingestion console from <code>cdn.iamrp.dev</code>...</em></p>
      <noscript>
        <p><strong>Note:</strong> JavaScript is required to trigger real-time crawl jobs directly from the browser. Ingestion tasks can also be initiated programmatically via the <a href="https://docingest.iamrp.dev/api/docs/ingest" target="_blank">DocIngest REST API</a>.</p>
      </noscript>
    </div>
  </div>
</div>

<script>
  (function loadDocIngestAdd() {
    const root = document.getElementById('docingest-add-root');
    if (root && !root.dataset.loaded) {
      const s = document.createElement('script');
      s.id = 'docingest-add-script';
      s.src = 'https://cdn.iamrp.dev/js/AddPageApp.js?t=' + Date.now();
      document.body.appendChild(s);
      root.dataset.loaded = 'true';
    }
  })();
</script>

---

## 🧭 Ingestion Configuration Reference

| Parameter | Type | Description | Example |
|---|---|---|---|
| `url` | URL | Target entrypoint for documentation crawling | `https://docs.docker.com/get-started/` |
| `include_patterns` | Regex / Glob | Patterns to crawl | `^/engine/.*$` |
| `exclude_patterns` | Regex / Glob | Navigation, changelog, or tag paths to ignore | `.*/release-notes/.*` |
| `max_depth` | Integer | Maximum hyperlink depth from origin URL (default: 3) | `3` |
| `generate_embeddings` | Boolean | Pass text chunks to Nomic Embed (768-dim) for Qdrant | `true` |
