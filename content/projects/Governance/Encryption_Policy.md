---
title: Encryption Policy
tags:
  - policy
  - archive
  - 2026-modernized
aliases:
  - /resume--and--experience/policy--and--governance/policies/encryption_policy
  - /governance/policies/encryption_policy
  - /governance/policies/encryption-policy
  - /policies/encryption_policy
  - /policies/encryption-policy
  - /projects/governance-and-policies/encryption_policy
  - /projects/governance-and-policies/encryption-policy
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
> This legacy policy has been modernized to align with 2026 enterprise IT and cybersecurity standards, encompassing Post-Quantum Cryptography (PQC) readiness and cryptographic agility.

Encryption Policy

Approval Date      August 22, 2026
Approved By        Enterprise Security Council
Purpose            To provide guidance on the use of encryption to protect information resources, ensuring resilience against modern and future threats, including quantum computing.
Audience           All employees and affiliates. Addresses encryption policy for data at rest, data in motion, key management, and cryptographic agility.

Policy: Encryption Strength & Cryptographic Agility
The organization uses industry-standard technologies for encrypting confidential-sensitive data, prioritizing Cryptographic Agility to allow rapid replacement of cryptographic primitives.
- All encryption mechanisms must support a minimum of AES-256 bit encryption.
- Systems must be designed with Post-Quantum Cryptography (PQC) readiness in mind, implementing NIST-approved quantum-resistant algorithms (e.g., ML-KEM, ML-DSA) for critical infrastructure.

Data at Rest
- Confidential-sensitive data at rest must be protected by AES-256 encryption.
- Storage media and cloud-native storage (e.g., S3 buckets, EBS volumes) must have default encryption enabled.
- Backups must be secured using PQC-compliant methodologies where feasible.

Portable Devices & Removable Media
- Confidential-sensitive data should generally not be stored on portable devices.
- If required, whole-disk encryption (e.g., BitLocker, FileVault) utilizing AES-256 is mandatory.
- Device encryption keys must be managed via modern MDM/UEM solutions.

Transmission Security
- Email communications are transmitted using strict TLS 1.3.
- Any confidential-sensitive information transmitted through public networks must be encrypted via TLS 1.3 or modern VPNs (e.g., WireGuard) implementing secure cipher suites.
- Cryptographic agility must be maintained for all transmission protocols to facilitate seamless migration to quantum-resistant key encapsulation mechanisms (KEMs).

Certificates/PKI
- Wildcard certificates are prohibited for critical infrastructure.
- Automated certificate management (e.g., ACME protocol) is required to ensure short-lived certificates.

Encryption Key Management
- Effective key management is crucial. Systems must enforce least privilege, separation of duties, and RBAC.
- Key management systems (e.g., HashiCorp Vault, AWS KMS) must utilize Hardware Security Modules (HSMs).
- Keys must be automatically rotated on a predefined schedule (e.g., 90 days) and immediately upon suspicion of compromise.
- Dual-control and split-knowledge principles apply for critical master keys.

Disciplinary Actions
Violation of this policy may result in disciplinary action up to and including termination.

---

## 🔗 Related Architecture & Knowledge Graph

* **Production Systems:** Validated in [[Projects/Hardware_Security_Key|Hardware Security Key]], [[FIDO2_Security_Toolkit|FIDO2 Security Toolkit]].
* **Governance & Compliance:** Governed by [[Projects/Governance-and-Policies/Data_Classification_Policy|Data Classification Policy]], [[Projects/Governance-and-Policies/Infrastructure_Hardening_Policy|Infrastructure Hardening Policy]].
* **Technical Articles:** Deep dive in [[Research-and-Ramblings/Articles/Zero_Trust_Edge|Zero Trust Edge Routing]].
* **Applied Research:** Investigated in [[Research-and-Ramblings/Security-and-AI-Research/Compliance_and_Governance|Compliance and Governance]].
* **Master Credentials:** Review core competencies on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to the main [[content/Projects/Governance-and-Policies/index|Digital Garden Index]].
