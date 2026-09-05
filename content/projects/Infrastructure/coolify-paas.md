---
title: "Coolify Self-Hosted PaaS Integration Manual"
tags:
  - wiki
  - project-manual
  - documentation
aliases:
  - /projects/infrastructure/coolify-paas
---

> [!note] Project Documentation Wiki
> *This document is part of the **[[projects/index|RPDev Projects Knowledge Base]]**. For the high-level portfolio overview, visit [iamrp.dev](https://iamrp.dev).*

# Project Charter: Coolify Self-Hosted PaaS Integration
### Revision 2 — incorporates Addendum A (Repository Taxonomy) and Addendum B (Host Namespace Correction)

**Document Control**

| Field | Detail |
|---|---|
| Project Reference | `PRJ-20260831-COOLIFY-01` |
| Target Repository | `github.com/RPDevs-Builds/coolify` |
| Target Node | T430 (Always-on Lightweight Staging / Storage Node) |
| Target Network | `macvlan14` (`10.14.0.0/24`) |
| Governance Classification | Tier 3 / Tier 4 Agile Prototyping and Public Edge Delivery |
| Revision Note | Fork location corrected from `rpdev-cdn/coolify` to `RPDevs-Builds/coolify` per Addendum B — Coolify is internal orchestration tooling, not a public-facing service |

---

## 1. Executive Summary and Business Justification

### Objective

To establish a self-hosted Platform as a Service (PaaS) engine using Coolify to orchestrate, deploy, and manage externally reachable web applications, flat-file content, and dynamic services within the rebuilt lab environment.

### Problem Statement

Manual container provisioning across heterogeneous hosts creates configuration drift, complicates SSL lifecycle management, and increases the administrative overhead of deploying public web experiments and services.

### Proposed Solution

Deploy Coolify under the `RPDevs-Builds` namespace to act as a centralized deployment and lifecycle engine for all external-facing workloads. Coolify itself is internal tooling — its UI, API, and Docker socket access are administrative surfaces reached over the internal network only. The applications it deploys may be public; the orchestrator is not. Anchoring the application to the T430 node isolates development and deployment execution from core infrastructure workflows while maintaining unified reverse-proxy and DNS integration for whatever it publishes.

---

## 2. Governance and Namespace Architecture

```
                       ┌─────────────────────────────────────────┐
                       │          GitHub Namespace Plan          │
                       └────────────────────┬────────────────────┘
                                             │
        ┌────────────────────────────────────┼────────────────────────────────────┐
        ▼                                    ▼                                    ▼
┌───────────────┐                    ┌───────────────┐                    ┌───────────────┐
│   rpdev-cdn   │                    │ RPDevs-Builds │                    │ RPDevs-Vault  │
│ (External Web)│                    │ (CI/CD + PaaS)│                    │ (Core Infra)  │
└───────┬───────┘                    └───────┬───────┘                    └───────────────┘
        │                                    │
        │                                    └─► [coolify fork] ──► Deployment Manifests & Blueprints
        │
        └─► Deployed sites, flat assets, and public projects (deployed BY Coolify, hosted separately from it)
```

- **`rpdev-cdn` (External Delivery):** Houses public-facing codebases, flat assets, and static sites — the *output* of deployments, never the orchestrator itself.
- **`RPDevs-Builds` (Internal CI/CD & Deployment Tooling):** Houses image builds, package mirroring, self-hosted Actions runners, **and the Coolify fork** — internal orchestration and deployment tooling belongs together in one namespace.
- **`RPDevs-Vault` (Private Infrastructure & Core State):** Reserved for private infrastructure manifests, internal routing definitions, internal databases, and private operational documentation. Unaffected by this revision.
- **Separation of Concerns:** External webhook triggers and public deployment credentials remain isolated from private automation registries and internal network manifests — Coolify's *own* administrative credentials now sit correctly alongside other internal tooling rather than in the public delivery namespace.
- **Resource Tiering:** Coolify application databases are anchored directly to local NVMe/SSD storage (`/mnt/data`), strictly avoiding shared NFS lock contention and protecting edge flash memory from write fatigue.

---

## 3. Infrastructure and System Architecture

| Parameter | Configuration Specification | Rationale |
|---|---|---|
| Host Node | T430 (`10.13.0.10` Host Management IP) | Dedicated always-on service host |
| Network Mode | Layer 2 `macvlan14` | Eliminates port collisions and provides physical subnet isolation |
| Assigned IP | `10.14.0.45` | Static IP allocation within VLAN 14 IPAM |
| Internal DNS | `coolify.internal.docker` | Dynamic service discovery registered via Mageddo DPS |
| External/Public URL | `coolify.iamrp.dev` / `coolify.local.iamrp.dev` | Terminated at Cloudflare Edge and proxied through Nginx Proxy Manager. *(Note: this is the admin UI's remote-access URL, not a public application — access should still be restricted; see Section 5.)* |
| Data Persistence | `/mnt/data/compose/coolify/` | Local SSD critical path allocation |
| Relational Database | PostgreSQL Cluster (`postgres.docker.local`) | Centralized, persistent database tier on local SSD |

---

## 4. Implementation and Deployment Plan

### Phase 1: Repository Provisioning and Scaffolding

- Fork upstream `coollabsio/coolify` into `github.com/RPDevs-Builds/coolify`.
- Initialize directory layout on T430 host at `/mnt/data/compose/coolify/` with strict POSIX permissions (`0750`).
- Confirm fork remains clean against upstream (no foreign content, no divergence) before proceeding — carried forward from Addendum A's verification step.

### Phase 2: Database Initialization and Role Isolation

Provision dedicated database and user role inside the centralized PostgreSQL instance to maintain zero-trust boundaries:

```sql
CREATE ROLE coolify WITH LOGIN PASSWORD 'CHANGE_ME_SECURE_PASS';
CREATE DATABASE coolify OWNER coolify;
```

### Phase 3: Manifest Deployment (`docker-compose.yml`)

Deploy the production manifest configured for decoupled environment loading:

```yaml
services:
  coolify:
    image: ghcr.io/coollabsio/coolify:latest
    container_name: t430-coolify
    hostname: coolify.internal.docker
    restart: unless-stopped
    environment:
      - APP_ENV=production
      - DB_HOST=postgres.docker.local
      - DB_USER=coolify
      - DB_PASSWORD=${COOLIFY_DB_PASSWORD}
      - DB_DATABASE=coolify
      - REDIS_HOST=redis.docker.local
      - REDIS_PASSWORD=${COOLIFY_REDIS_PASSWORD}
    volumes:
      - ./config:/data/coolify
      - /var/run/docker.sock:/var/run/docker.sock
    networks:
      macvlan14:
        ipv4_address: 10.14.0.45

networks:
  macvlan14:
    external: true
```

### Phase 4: Ingress and Proxy Integration

- Configure upstream route in Nginx Proxy Manager pointing `coolify.local.iamrp.dev` to `coolify.internal.docker:8000` with WebSocket support enabled.
- Bind wildcard TLS certificates issued via Cloudflare DNS-01 challenge.
- Restrict access to the admin UI route (allowlist / auth in front of Nginx Proxy Manager) — TLS termination alone does not make an internal admin tool safe to leave open on a public hostname.

---

## 5. Risk Assessment and Mitigation Register

| Risk Factor | Impact | Likelihood | Mitigation Strategy |
|---|---|---|---|
| Docker Socket Exposure | High | Medium | Run Coolify in a dedicated Docker network; restrict socket permissions to internal administrative workloads. |
| Host Resource Exhaustion | High | Low | Apply explicit CPU and RAM limits in Compose overrides for child containers deployed by Coolify. |
| Database Schema Corruption | High | Low | Store active database tables on local SSD storage (`/mnt/data`); schedule daily automated `pg_dump` backups to `/mnt/sharedroot/backups/`. |
| DNS Resolution Failure | Medium | Low | Enforce dual upstream resolvers (`10.14.0.3` Mageddo DPS and router gateway) to preserve fallback resolution paths. |
| Admin UI Exposure via Public Hostname | Medium | Medium | Even though Coolify is internal tooling, its admin URL is reachable via a public-facing hostname (Section 3). Restrict with allowlisting/auth in front of the proxy, per Phase 4. |
| Upstream Drift / Delayed Security Patches | Medium | Medium | Track `coollabsio/coolify` releases and establish a periodic (e.g. monthly) upstream merge cadence into `RPDevs-Builds/coolify`. Upstream ships AI-agent tooling config (`.claude`, `.agents`, `.cursor`, `.codex`, `CLAUDE.md`, `AGENTS.md`) that increases merge-conflict risk if the fork later adds its own equivalents — isolate any fork-local agent config in a clearly separate path. *(Carried forward from Addendum A, Section A.5.)* |

---

## 6. Project Deliverables and Verification Gates

```
[ Gate 1: Repo Ready ] ──► [ Gate 2: Stack Booted ] ──► [ Gate 3: Ingress / TLS Live ] ──► [ Sign-off ]
```

- [x] **Deliverable 1:** Repository fork live at `RPDevs-Builds/coolify`, verified clean against upstream, with standardized CI workflow templates.
- [ ] **Deliverable 2:** Container running healthy on T430 `macvlan14` with zero host-port collisions.
- [ ] **Deliverable 3:** Dynamic name resolution validated through Mageddo DPS (`ping coolify.internal.docker`).
- [ ] **Deliverable 4:** HTTPS proxy verification completed via Nginx Proxy Manager with WebSockets functional, and admin UI access restricted per Section 5.
- [ ] **Deliverable 5:** Sample one-click test application deployment completed successfully from a GitHub webhook trigger, deploying to a repository under `rpdev-cdn`.

---

## 7. Revision History

| Revision | Change |
|---|---|
| 1 | Original charter — Coolify fork placed under `rpdev-cdn` |
| Addendum A | Formalized `rpdev-cdn` as multi-repo org; verified fork clean against upstream; added upstream-drift risk item |
| Addendum B | Corrected fork placement — Coolify is internal tooling, moved to `RPDevs-Builds`; `rpdev-cdn` narrowed to deployed artifacts only |
| 2 (this document) | Charter body updated to reflect Addendum B as the current, authoritative state |

---

## Project Approval Request

**Submitted For:** Project Management and Technical Lead Sign-off

**Review Decision:** [ ] Approved &nbsp;&nbsp;[ ] Revisions Requested &nbsp;&nbsp;[ ] Rejected

**Comments / Conditions:** __________________________________________________