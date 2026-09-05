---
title: "Tiered Storage Architecture"
description: "Guidelines and enforcement for SSD critical-path versus NFS bulk storage allocation."
---

# Tiered Storage Architecture

To maximize I/O throughput and prevent filesystem stalls, RPDev infrastructure follows a strict **Tiered Storage Model**.

---

## 1. Storage Tiers

```
┌──────────────────────────────────────────────────────────┐
│                   TIER 1: LOCAL SSD                      │
│  Path: /home/llmuser/projects (Local) | /mnt/data (T430) │
│  - Active Docker container write layers                  │
│  - Database WAL files (PostgreSQL, SQLite, Redis)        │
│  - Temporal workflow event histories                     │
│  - Android Studio Gradle build caches                    │
└──────────────────────────────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────┐
│                  TIER 2: SHAREDROOT NFS                  │
│  Path: /mnt/sharedroot (fs01.service.local)              │
│  - Documentation & Digital Gardens                       │
│  - Static CDN repositories & build artifacts             │
│  - APK archives and compiler toolchains                  │
│  - Historical backups & long-term log retention          │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Storage Rules

1. **Critical Path (Local SSD)**: Reserve fast NVMe / SSD for write-heavy workloads where latency directly impacts performance.
2. **Bulk Path (`/mnt/sharedroot`)**: Prioritize NFS for immutable or read-heavy assets, media, documentation, and Git project checkouts.
3. **Symlink Compatibility**: Use host-level symbolic links when services expect hardcoded local paths (e.g. Wings or game servers).
