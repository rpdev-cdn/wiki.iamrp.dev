---
title: "DocIngest & Quartz Plugin Documentation"
description: "High-performance documentation ingestion, knowledge graph extraction, and Quartz v5 plugin integration."
---

# DocIngest & Quartz Plugin Documentation

> Automated knowledge extraction and search indexer bridging raw markdown vaults with published Quartz digital gardens.

- **Repository**: [`https://github.com/RPDevs-Builds/docingest-quartz`](https://github.com/RPDevs-Builds/docingest-quartz)
- **Local Path**: `/mnt/sharedroot/documentation/CDN/docingest-quartz`
- **Package**: `docingest-quartz` (v0.1.0)

---

## 1. Quartz Plugin Architecture

`docingest-quartz` integrates directly into Quartz's AST transformer pipeline:

```typescript
// File: src/index.ts

import { QuartzTransformerPlugin } from "quartz/plugins/types"

export const DocIngest: QuartzTransformerPlugin = () => {
  return {
    name: "DocIngest",
    markdownPlugins() {
      return [
        () => (tree, file) => {
          // Extract bidirectional links, YAML frontmatter, and code blocks
          // Generate semantic embedding vectors for vector search
        }
      ]
    }
  }
}
```

---

## 2. Integration in `quartz.config.yaml`

```yaml
plugins:
  - source: "docingest-quartz"
    enabled: true
    options:
      extractEntities: true
      endpoint: "https://mcp.iamrp.dev/docingest"
```
