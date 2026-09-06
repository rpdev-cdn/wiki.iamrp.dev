---
title: "DocIngest Searchable Corpus Viewer"
description: "Browse, full-text search, preview markdown, and export indexed documentation from the self-hosted knowledge corpus."
---

# 📚 DocIngest Searchable Corpus Viewer

> **Full-text search, preview distilled markdown, copy context for LLM prompts, and download clean documentation files from the live PostgreSQL knowledge store.**

<div style="margin: 1rem 0 1.5rem 0; display: flex; gap: 0.75rem;">
  <a href="../add" class="di-btn di-btn-primary" style="display: inline-flex; padding: 0.6rem 1.25rem; font-weight: 700; text-decoration: none;">
    🚀 Index New Documentation (Add)
  </a>
  <a href="../" class="di-btn di-btn-ghost" style="display: inline-flex; padding: 0.6rem 1.25rem; font-weight: 700; text-decoration: none;">
    🛠️ DocIngest Architecture & Specs
  </a>
</div>

<div class="docingest-app-container">
  <div id="docingest-view-root">
    <div class="docingest-fallback-card" style="padding: 1.5rem; background: var(--lightgray); border-radius: 8px; border: 1px solid var(--gray); margin-bottom: 1.5rem;">
      <h3 style="margin-top:0;">📚 Live Documentation Corpus Explorer</h3>
      <p>Search through indexed developer documentation, inspect extracted entity trees, and copy distilled Markdown directly into local context windows.</p>
      <p><em>Loading corpus viewer application from <code>cdn.iamrp.dev</code>...</em></p>
      <noscript>
        <p><strong>Note:</strong> JavaScript is required to interact with the full-text search and modal preview interface. You can access the raw JSON corpus directly via the <a href="https://docingest.iamrp.dev/api/docs" target="_blank">DocIngest API</a>.</p>
      </noscript>
    </div>
  </div>
</div>

<script>
  (function loadDocIngestView() {
    const root = document.getElementById('docingest-view-root');
    if (root && !root.dataset.loaded) {
      const s = document.createElement('script');
      s.id = 'docingest-view-script';
      s.src = 'https://cdn.iamrp.dev/js/ViewPageApp.js?t=' + Date.now();
      document.body.appendChild(s);
      root.dataset.loaded = 'true';
    }
  })();
</script>

---

## 🔍 Model Context Protocol Integration

Local AI agents can directly query this corpus using the registered MCP tools:
- `find-docs(query)`: Searches document titles, headings, and metadata.
- `read-docs(doc_id)`: Fetches complete, clean markdown content.
- `query-docs(prompt)`: Hybrid BM25 keyword + vector semantic search.
