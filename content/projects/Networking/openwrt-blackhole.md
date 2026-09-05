---
title: "OpenWrt Blackhole Webserver & Tarpit"
tags:
  - wiki
  - project-manual
  - documentation
aliases:
  - /projects/networking/openwrt-blackhole
---

> [!note] Project Documentation Wiki
> *This document is part of the **[[projects/index|RPDev Projects Knowledge Base]]**. For the high-level portfolio overview, visit [iamrp.dev](https://iamrp.dev).*

# Blackhole Webserver (OpenWRT)

**Blackhole Webserver for OpenWRT** is a lightweight, high-performance Go-based utility designed to capture, log, and mirror HTTP requests. It is optimized for deployment on OpenWRT routers (specifically MT6000 and MT3000) for edge tracking, logging, and request mirroring.

## Core Functionality

- **Catch-all Routing**: Responds to all requests regardless of path.
- **Request Mirroring**: Automatically replicates the requested URL path in a local root directory.
    - Paths with extensions (e.g., `.js`, `.html`) create files.
    - Paths without extensions create directories.
- **Logging**: Captures comprehensive request metadata (Method, URL, Headers, IP) in JSON format.
- **Response**: Always serves a 1x1 transparent tracking GIF.

## Technology Stack

- **Language**: Go (Golang)
- **Target OS**: Linux (OpenWRT)
- **Architecture**: ARM64 (MT6000/MT3000)

## Development Conventions & Constraints

- **Surgical Changes**: Always prioritize targeted updates to logic.
- **Security**: Never log sensitive data or credentials.
- **Performance**: Keep the binary footprint small and memory usage minimal for router environments.
- **Testing Strategy**: Local simulation -> Beta deployment via SSH to MT3000 -> Final MT6000 production deployment.

## Packaging & CI/CD Heuristics

The build lifecycle includes specific heuristics for compiling Go on OpenWRT, navigating SDK paths, configuring packages non-interactively, and robust OpenWRT Docker CI caching to preserve states (`dl`, `feeds`, `staging_dir/host`, `.gocache`) across ephemeral CI containers.

---

## 🔗 Related Architecture & Knowledge Graph

* **Production Systems:** Validated in [[Perimeter_Deception_and_Tarpits|Perimeter Deception and Tarpits]], [[DNS_Forge_Firefox_Addon|DNS Forge Firefox Addon]].
* **Governance & Compliance:** Governed by [[Projects/Governance-and-Policies/Information_Security_Policy|Information Security Policy]], [[Projects/Governance-and-Policies/Incident_Response_Plan|Incident Response Plan]].
* **Technical Articles:** Deep dive in [[Articles/Whitepapers/Zero_Trust_Edge|Zero Trust Edge Routing]].
* **Applied Research:** Investigated in [[Research/Security_Analysis_and_Research_Agent/DFIR_and_Playbooks|DFIR and Playbooks]].
* **Master Credentials:** Review core competencies on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to the main [[content/Projects/index|Digital Garden Index]].
