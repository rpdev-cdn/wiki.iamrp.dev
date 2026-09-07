---
title: "Cloudflare MCP Tool Integrations"
description: "Architecture for auth-cloudflare-mcp and authless-cloudflare-mcp: Model Context Protocol servers for authenticated and anonymous Cloudflare edge operations."
tags:
  - wiki
  - security
  - ai
  - mcp
  - cloudflare
---

> [!note] Project Documentation Wiki
> *This document is part of the **[[projects/index|RPDev Projects Knowledge Base]]**. For the full lifecycle matrix, see the **[[projects/maturity-matrix|Project Maturity Matrix]]**.*

> [!info] Project Maturity: **40%–45% — Alpha Tool Interfaces (Tier 2)**
> - **Lifecycle Status**: Active Prototype & API Tool Wrappers
> - **Active Components**: Node.js/TypeScript MCP servers, Cloudflare API client wrappers, tool schema declarations
> - **Pending Enhancements**: Automated integration test harness, DNS mutation dry-run safety guards

# Cloudflare MCP Integrations: Autonomous Edge Operations
## **Connecting LLM Agents to Cloudflare Zero Trust, DNS, and Edge Workers via the Model Context Protocol**

> [!abstract] Engineering Overview
> The **Cloudflare MCP** project suite provides standardized Model Context Protocol (MCP) tool interfaces allowing autonomous AI assistants to safely inspect and manage edge networking infrastructure. It is decoupled into two complementary servers:
> 1. **`auth-cloudflare-mcp` (40%)**: Authenticated management interface with API token authorization for DNS records, Zero Trust tunnels, and firewall rules.
> 2. **`authless-cloudflare-mcp` (45%)**: Public, anonymous telemetry and lookup interface for read-only edge network status.

---

## 🧭 Navigation & Related Documentation
- Review Cloudflare edge tunnels in **[[projects/Networking/cloudflare-tunnels|Cloudflare Edge Tunnels]]**
- Review MCP Gateway in **[[projects/Security/mcp-gateway|MCP Security Gateway]]**
- Explore project lifecycle ratings in **[[projects/maturity-matrix|Project Maturity Matrix]]**
