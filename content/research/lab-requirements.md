---
title: "Lab Requirements & Infrastructure"
tags:
  - lab
  - infrastructure
  - edge
  - security
  - research
date: 2026-08-22
draft: false
description: "Overview of the lab requirements and edge compute infrastructure for the Security Analysis and Research Agent project."
aliases:
  - /projects--and--research/research/security_analysis_and_research_agent/lab_requirements
  - /research/security_analysis_and_research_agent/lab_requirements
  - /research-and-ramblings/security-and-ai-research/lab_requirements
---
# Lab Requirements & Infrastructure

This document outlines the cyber range infrastructure required to promote playbook stubs to fully operational playbooks for the Security Analysis and Research Agent. Our infrastructure leverages a robust, abstract network zoning model, ensuring that tests are isolated, repeatable, and scalable across various edge and cloud environments.

## Infrastructure-as-Code (IaC) Methodology

All lab environments are defined as Infrastructure-as-Code. We employ strict validation gates and telemetry-first mandates to ensure that every simulated attack or defense scenario is measurable and observable. 

**Key Principles:**
- **Zone Abstraction:** No hardcoded VLAN IDs, subnet CIDRs, or IP literals are used. All network references use abstract zone variables (e.g., `<RED_VLAN>`, `<SERVER_VLAN>`, `<IOT_VLAN>`).
- **Telemetry-First Mandate:** A requirement for promotion is that detection rows are written and validated against telemetry generated during the lab run.
- **Strict Promotion Gates:** A lab scenario is only marked as "PROMOTED" once all components are provisioned, validated, and meet specific success criteria.

## Active Lab Scenarios & Environments

Our edge compute and research lab encompasses a diverse set of tracks, targeting emerging technologies and security boundaries.

### 5G SA Core & NTN Testing
- **Focus:** Validating 5G Standalone (SA) and Non-Terrestrial Network (NTN) configurations.
- **Infrastructure:** Containerized `open5gs` core and `srsgnb` (using ZMQ transport for virtualized RF).
- **Validation:** Minimum of 50 NAS state transitions without crash and mTLS checks on network functions.

### PQC Migration Workflow
- **Focus:** Post-Quantum Cryptography (PQC) TLS and IKEv2 negotiation.
- **Infrastructure:** `openquantumsafe` curl clients and `strongSwan` endpoints.
- **Validation:** Generation of ML-KEM-768 keys and successful TLS negotiation against the strongSwan endpoint.

### TEE & Confidential Computing
- **Focus:** Security assessment of Trusted Execution Environments (TEEs) like Intel SGX and AMD SEV.
- **Infrastructure:** Bare-metal nodes provisioned for SGX and SEV-SNP tooling.
- **Validation:** Verification of attestation binding and single-instruction trace of benchmark enclaves.

### eBPF Rootkit Detection
- **Focus:** Evaluating eBPF-based telemetry and enforcement mechanisms.
- **Infrastructure:** Kubernetes (`k3s`) cluster running Tetragon and Falco sensors.
- **Validation:** Triggering benign test kprobes to ensure CRITICAL alerts fire, with a false positive rate of <0.1% over 24 hours.

### Active Directory Persistence & ADCS
- **Focus:** AD unconstrained delegation and Active Directory Certificate Services (ADCS) vulnerabilities.
- **Infrastructure:** Isolated Windows Server AD forest containing legacy (pre-patch) and modern (post-patch) domain controllers.
- **Validation:** Capturing DC machine TGTs and verifying certificate authentication behavior against patched endpoints.

### IoT & Edge Network Boundaries
- **Focus:** Assessing unauthenticated MQTT brokers and RTSP media streams at the edge.
- **Infrastructure:** Containerized `mosquitto` and `mediamtx` services placed in an isolated IoT zone.
- **Validation:** Successful actuation via MQTT and unauthorized access to RTSP streams from the Red zone.

### Cloud Identity & CI/CD OIDC Hijacking
- **Focus:** Cloud trust policy misconfigurations and OIDC JWT hijacking.
- **Infrastructure:** HashiCorp Vault configured for JWT/OIDC authentication with intentionally broad trust policies mapping to external cloud environments (AWS/GitHub).
- **Validation:** Assuming production IAM roles from unauthorized fork repositories.

### AI Agent MCP Sandboxing & RAG Poisoning
- **Focus:** Security of Model Context Protocol (MCP) implementations, Prompt Injection, and Retrieval-Augmented Generation (RAG) vector database poisoning.
- **Infrastructure:** Strictly isolated `runsc` (gVisor) containers hosting MCP filesystems, Ollama, ChromaDB, and Qdrant.
- **Validation:** Preventing directory traversal (PEP enforcement) and validating that RAG poisoning (DenialRAG/CorruptRAG) payloads bypass semantic or metadata filters.

### ICS/OT Purdue Model Assessment
- **Focus:** Simulating and assessing threats across the ICS/OT Purdue model boundaries.
- **Infrastructure:** OpenPLC runtimes, Ignition SCADA, InfluxDB historians, and passive Zeek sensors.
- **Validation:** Passive identification of OT tiers and successful execution of Modbus writes without active scanning.

## Conclusion

The Security Analysis and Research Agent operates within this rigorously defined, multi-zone lab environment. By standardizing our infrastructure requirements and gating promotion on empirical telemetry, we ensure that the agent's capabilities are developed and validated against realistic, modern enterprise architectures—from edge IoT devices to confidential computing enclaves and 5G networks.

---

## 🔗 Related Architecture & Knowledge Graph

* **Swarm Hub:** Return to the primary overview on [[Research-and-Ramblings/Security-and-AI-Research-and-Ramblings/index|index]].
* **Research Swarm Modules:** Explore [[research/Tools_and_Telemetry|Tools and Telemetry]], [Research Strategy](https://iamrp.dev/Research-and-Ramblings/Security-and-AI-Research/Research_Strategy), [[research/Lab_Validated_Playbooks|Lab Validated Playbooks]].
* **Production Systems:** Validated in [Current Environment](https://iamrp.dev/homelab/Current_Environment), [Hardware Storage Tiering](https://iamrp.dev/homelab/Hardware_Storage_Tiering), [OpenWrt Kernel NFS Manager](https://iamrp.dev/projects/openwrt_kernel_nfs_manager).
* **Governance & Compliance:** Governed by [[Projects/Governance-and-Policies/Infrastructure_Hardening_Policy|Infrastructure Hardening Policy]].
* **Master Credentials:** Review core competencies on [Curriculum Vitae & Master Resume](https://iamrp.dev/resume/master_resume).
* **Digital Garden Hub:** Return to the main [[content/Research-and-Ramblings/Security-and-AI-Research-and-Ramblings/index|Digital Garden Index]].
