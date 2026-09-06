---
title: Data Classification Policy
tags:
  - policy
  - archive
  - 2026-modernized
aliases:
  - /resume--and--experience/policy--and--governance/policies/data_classification_policy
  - /governance/policies/data_classification_policy
  - /governance/policies/data-classification-policy
  - /policies/data_classification_policy
  - /policies/data-classification-policy
  - /projects/governance-and-policies/data_classification_policy
  - /projects/governance-and-policies/data-classification-policy
last_audited: 2026-08-26
review_cycle: Annual (Continuous Audit)
compliance_alignment:
  - NIST CSF 2.0
  - ISO/IEC 27001:2022
  - SOC 2 Type II
---
> [!caution] Legal Notice & Non-Liability Disclaimer
> **Reference Models & Educational Examples Only**: All policies, standards, frameworks, procedures, and architectural artifacts provided within this section are shared strictly as informational, educational, and reference examples demonstrating enterprise documentation engineering. **Under no circumstances does Richard P. Dissell, RPDev, or affiliated contributors assume legal liability, fiduciary responsibility, regulatory accountability, or duty of care for their governance, implementation, omission, or operational impact.** These examples do not constitute formal legal counsel, statutory advice, or certified regulatory compliance determinations. Any organization or individual adapting or referencing these materials must perform their own due diligence and consult licensed legal and cybersecurity compliance counsel.

> [!abstract] Legacy Policy Archive - Modernized for 2026
> This legacy policy has been modernized to align with 2026 enterprise IT and cybersecurity standards, encompassing paradigms such as LLM training data governance, vector database security, and synthetic data.

Information Asset and Data Classification Policy

Approval Date               August 22, 2026
Approved By                 Enterprise Security Council
Purpose                 To educate staff members on the importance of protecting data generated, accessed, transmitted, stored, and destroyed by the organization; to identify procedures that protect the confidentiality, integrity, and availability of data; and to comply with modern privacy regulations and AI governance standards.

1. Scope
All staff members have a responsibility to protect the confidentiality, integrity, and availability of data generated, accessed, modified, transmitted, stored, or destroyed, irrespective of the medium on which the data resides (including traditional databases, vector databases, and AI model weights).

Departments are responsible for implementing appropriate managerial, operational, physical, and technical controls.

Data owned, used, created, or maintained by the organization is classified into the following categories:
- Public Information (2.1)
- Nonpublic Personal Information (NPI) / Personally Identifiable Information (PII) (2.2)
- Restricted Information (2.3)
- AI & LLM Training Data (2.4)
- Synthetic Data (2.5)

2. Data Classification
2.1 Public Information:
Approved for general release to the public—does not identify an individual. Such data has no requirement for confidentiality.
Handling: Requires no special handling; items may be freely exchanged.
Encryption: No encryption is required.

2.2 Nonpublic Personal Information (NPI) or Personally Identifiable Information (PII):
Requires restricted access to authorized personnel and clients bound by confidentiality agreements. Includes any data that can identify an individual (names, addresses, SSNs, PHI, and PII embedded within vector databases).
Handling: 
- Must not be posted on public websites or fed into public LLMs.
- Must be stored with strong physical and logical controls (e.g., zero-trust architecture).
Encryption: 
- Data must be stored encrypted at rest (AES-256).
- Transmissions must be secured via TLS 1.3 or higher.
Technical Controls: DLP systems and AI-driven telemetry monitor data flows for unauthorized exfiltration.

2.3 Restricted Information:
Can be shared ONLY with management and authorized personnel (e.g., contracts, mergers/acquisitions, proprietary algorithms).
Handling: Guidelines for NPI apply, plus strict Need-to-Know access controls.
Encryption: At rest and in transit via TLS 1.3+ and AES-256.

2.4 AI & LLM Training Data:
Data specifically prepared, curated, or utilized for training or fine-tuning Large Language Models (LLMs) or stored in vector databases (e.g., embeddings). 
Handling: 
- PII and NPI must be rigorously scrubbed or anonymized before being converted into embeddings or used for training.
- Vector databases containing potentially sensitive embeddings must be treated as NPI/PII (see 2.2).
- Models trained on restricted data inherit the classification of that data.

2.5 Synthetic Data:
Artificially generated data that mimics the statistical properties of real data but contains no actual PII/NPI.
Handling: 
- Can be used for development, testing, and AI training in place of production data.
- Must be certified by the Data Governance team to ensure no privacy leakage or reversible artifacts exist before being downgraded to Public or internal-only use.

3. Non-Compliance with this policy
Non-Compliance may result in revocation of system access, notification of leadership, and/or disciplinary action up to termination.

---

## 🔗 Related Architecture & Knowledge Graph

* **Production Systems:** Validated in [[LLM_Control_Plane|LLM Control Plane]], [[Projects/Hardware_Security_Key|Hardware Security Key]].
* **Governance & Compliance:** Governed by [[Projects/Governance-and-Policies/Encryption_Policy|Encryption Policy]], [[Projects/Governance-and-Policies/AI_Augmentation_for_Users|AI Augmentation for Users]].
* **Technical Articles:** Deep dive in [[Research-and-Ramblings/Articles/Zero_Trust_Edge|Zero Trust Edge Routing]].
* **Applied Research:** Investigated in [[Research-and-Ramblings/Security-and-AI-Research/Compliance_and_Governance|Compliance and Governance]].
* **Master Credentials:** Review core competencies on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to the main [[content/Projects/Governance-and-Policies/index|Digital Garden Index]].
