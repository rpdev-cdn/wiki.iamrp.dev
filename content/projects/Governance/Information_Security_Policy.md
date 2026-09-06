---
title: Information Security Policy
tags:
  - policy
  - modernized
  - 2026
aliases:
  - /resume--and--experience/policy--and--governance/policies/information_security_policy
  - /governance/policies/information_security_policy
  - /governance/policies/information-security-policy
  - /policies/information_security_policy
  - /policies/information-security-policy
  - /projects/governance-and-policies/information_security_policy
  - /projects/governance-and-policies/information-security-policy
last_audited: 2026-08-26
review_cycle: Annual (Continuous Audit)
compliance_alignment:
  - NIST CSF 2.0
  - ISO/IEC 27001:2022
  - SOC 2 Type II
---
> [!abstract] 2026 Modernized Policy
> This legacy policy has been modernized to align with 2026 enterprise IT and cybersecurity standards, including Zero Trust Architecture (ZTA), Continuous Threat Exposure Management (CTEM), and AI/LLM acceptable use governance.

# Information Security Policy
> [!caution] Legal Notice & Non-Liability Disclaimer
> **Reference Models & Educational Examples Only**: All policies, standards, frameworks, procedures, and architectural artifacts provided within this section are shared strictly as informational, educational, and reference examples demonstrating enterprise documentation engineering. **Under no circumstances does Richard P. Dissell, RPDev, or affiliated contributors assume legal liability, fiduciary responsibility, regulatory accountability, or duty of care for their governance, implementation, omission, or operational impact.** These examples do not constitute formal legal counsel, statutory advice, or certified regulatory compliance determinations. Any organization or individual adapting or referencing these materials must perform their own due diligence and consult licensed legal and cybersecurity compliance counsel.


## 1. Zero Trust Architecture (ZTA) & Access Control
The enterprise adopts a strict Zero Trust Architecture (ZTA) framework. Trust is never granted implicitly, and all access requests—regardless of location or origin—must be continuously verified.
*   **Continuous Verification:** Multi-factor authentication (MFA), context-aware access policies, and continuous posture assessments are mandatory for all user, device, and service-level access.
*   **Micro-Segmentation:** Network and application environments are heavily segmented to limit lateral movement and enforce granular, least-privilege access.
*   **Dynamic Privileges:** Privileges are dynamically granted via Just-In-Time (JIT) access tools and revoked immediately upon task completion.

## 2. Continuous Threat Exposure Management (CTEM)
To proactively defend against evolving threats, the organization implements a Continuous Threat Exposure Management (CTEM) program.
*   **Automated Discovery:** Routine, automated asset discovery and vulnerability scanning across on-premises, cloud, and edge environments.
*   **Prioritized Remediation:** Vulnerabilities are prioritized based on exploitability, business context, and threat intelligence.
*   **Validation:** Continuous attack surface validation, including automated penetration testing and red-teaming exercises, ensures the efficacy of existing security controls.

## 3. AI and Large Language Model (LLM) Acceptable Use
As generative AI and LLMs become integral to daily operations, strict governance is required to protect proprietary data and ensure ethical use.
*   **Approved AI Tools:** Employees must only use corporate-approved, enterprise-grade AI platforms that guarantee data privacy (e.g., zero-retention policies).
*   **Data Classification and Input Limits:** No non-public information (NPI), personally identifiable information (PII), or trade secrets may be inputted into public or unapproved AI models.
*   **Output Validation:** All AI-generated outputs (including code, communications, and analysis) must be treated as drafts and verified by a human expert prior to use in production or client-facing scenarios.

## 4. Physical and Environmental Security
1.  **Zero-Trust Facilities:** Physical access is governed by the same zero-trust principles. Tailgating is strictly prohibited, and biometric verification is required for sensitive zones (e.g., datacenters).
2.  **Surveillance and Monitoring:** High-definition, AI-enhanced CCTV monitors all entrances and secure areas 24/7, with automated anomaly detection.

## 5. Network Access and Account Management
1.  **Identity-First Security:** Identity is the new perimeter. Passwordless authentication (e.g., FIDO2 hardware keys) is preferred and strongly encouraged for all employees.
2.  **Account Lifecycles:** Automated identity lifecycle management ensures accounts are provisioned, audited, and de-provisioned automatically based on HR systems.
3.  **Third-Party Access:** Vendor and contractor access is strictly governed, heavily audited, and automatically disabled after 30 days of inactivity.

## 6. Exceptions and Policy Violations
Violations of this policy, particularly those involving unauthorized AI data exposure or bypassing zero-trust controls, will result in immediate disciplinary action up to and including termination. Exceptions must be documented, risk-assessed, and approved by the Information Security Officer.

---

## 🔗 Related Architecture & Knowledge Graph

* **Production Systems:** Validated in [[Infra_Audit_Engine|Infra Audit Engine]], [[Wazuh_CrowdSec_SIEM|Wazuh CrowdSec SIEM]].
* **Governance & Compliance:** Governed by [[Projects/Governance-and-Policies/Encryption_Policy|Encryption Policy]], [[Projects/Governance-and-Policies/Infrastructure_Hardening_Policy|Infrastructure Hardening Policy]], [[Projects/Governance-and-Policies/Incident_Response_Plan|Incident Response Plan]].
* **Technical Articles:** Deep dive in [[Research-and-Ramblings/Articles/Zero_Trust_Edge|Zero Trust Edge Routing]].
* **Applied Research:** Investigated in [[Research-and-Ramblings/Security-and-AI-Research/Compliance_and_Governance|Compliance and Governance]].
* **Master Credentials:** Review core competencies on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to the main [[content/Projects/Governance-and-Policies/index|Digital Garden Index]].
