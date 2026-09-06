---
title: Tools and Telemetry
tags:
  - tools
  - telemetry
  - security
aliases:
  - /projects--and--research/research/security_analysis_and_research_agent/tools_and_telemetry
  - /research/security_analysis_and_research_agent/tools_and_telemetry
  - /research-and-ramblings/security-and-ai-research/tools_and_telemetry
---
# Tools and Telemetry

The Security Analysis and Research Agent utilizes a robust suite of detection engineering, defensive auditing, vector memory retrieval, and telemetry tools to perform comprehensive security assessments, forensic analysis, and advanced threat modeling.

> [!tip] Dedicated Vector Memory & Empirical Signal Monographs
> - 🗄️ **[[research/Vector_Knowledge_and_Telemetry|Vector Knowledge Base & Memory Datastore (dev_memory_main)]]**: 768-dimensional Qdrant cognitive memory and telemetry store.
> - 📡 **[[research/Empirical_Telemetry_and_RF_Analysis|Empirical Telemetry & RF Anomaly Modeling]]**: Physical signal propagation modeling, path loss math, and dwell-time anomaly scoring.

## Detection Engineering & Telemetry

*   **RITA (Real Intelligence Threat Analytics):** A network telemetry tool that ingests Zeek log output (such as `conn.log`, `dns.log`, and `ssl.log`). It computes beaconing scores, identifies DNS tunneling indicators, and performs long-connection analysis using statistical scoring. 
*   **c2-tracker:** A Python-based threat intelligence tool that generates daily-refreshed Command and Control (C2) Indicator of Compromise (IOC) feeds. It queries services like Shodan and Censys for known C2 framework fingerprints (e.g., Cobalt Strike, Sliver, Havoc) and exports structured IOC lists suitable for SIEM/MISP ingestion.
*   **JARM (Salesforce):** An active TLS server fingerprinting tool. It sends specially crafted TLS Client Hello packets and hashes the resulting server responses into a 62-character fingerprint. This allows the agent to identify server software and C2 frameworks by comparing responses against known fingerprint databases.

## Defensive Auditing & Forensics

*   **chipsec:** A cross-platform framework for firmware and low-level hardware security assessment. It validates Secure Boot key state, SMRAM/SMRR lock status, and BIOS/UEFI configurations against known-secure baselines.
*   **UEFITool:** A utility for parsing UEFI firmware volume structures. It enables the extraction and hashing of individual UEFI modules for golden-image differential comparison and deep firmware forensics.
*   **docingest (MCP):** An advanced defensive auditing capability that provides the agent with direct, topic-filtered access to canonical software documentation. This integration is crucial for preventing LLM hallucinations during code reviews and supply-chain auditing.

## Emulation, Fuzzing & 5G Infrastructure

*   **Open5GS:** An open-source 5G Standalone (SA) core network implementation used as the lab reference core for NRF authentication, slice isolation, and signaling storm testing.
*   **srsRAN:** An open-source 3GPP RAN protocol stack (gNB + UE simulator). Utilizing a ZMQ virtual RF transport mode, it eliminates the need for over-the-air transmission, allowing isolated ZMQ-only lab testing.
*   **ASTRA-5G:** A research-oriented, coverage-guided fuzzing framework targeting NAS/NGAP protocol state machines in 5G SA cores, ideal for isolated state-machine robustness testing.
*   **boofuzz:** A Python-based, session-aware network protocol fuzzer used for structured mutation fuzzing against lab-isolated targets (such as Modbus simulators and API endpoints) with defined block/primitive grammars.

---

## 🔗 Related Architecture & Knowledge Graph

* **Swarm Hub:** Return to the primary overview on [[Research-and-Ramblings/Security-and-AI-Research-and-Ramblings/index|index]].
* **Research Swarm Modules:** Explore [[research/DFIR_and_Playbooks|DFIR and Playbooks]], [[research/Agents_and_Architecture|Agents and Architecture]], [[research/Sources_and_Matrix|Sources and Matrix]].
* **Production Systems:** Validated in [[Unified_Fleet_Observability_Alloy|Unified Fleet Observability Alloy]], [[Infra_Audit_Engine|Infra Audit Engine]].
* **Governance & Compliance:** Governed by [[Projects/Governance-and-Policies/Infrastructure_Hardening_Policy|Infrastructure Hardening Policy]].
* **Master Credentials:** Review core competencies on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to the main [[content/Research-and-Ramblings/Security-and-AI-Research-and-Ramblings/index|Digital Garden Index]].
