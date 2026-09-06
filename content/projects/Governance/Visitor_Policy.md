---
title: Visitor Policy
tags:
  - policy
  - modernized
  - 2026
aliases:
  - /resume--and--experience/policy--and--governance/policies/visitor_policy
  - /governance/policies/visitor_policy
  - /governance/policies/visitor-policy
  - /policies/visitor_policy
  - /policies/visitor-policy
  - /projects/governance-and-policies/visitor_policy
  - /projects/governance-and-policies/visitor-policy
last_audited: 2026-08-26
review_cycle: Annual (Continuous Audit)
compliance_alignment:
  - NIST CSF 2.0
  - ISO/IEC 27001:2022
  - SOC 2 Type II
---
> [!abstract] Modernized Policy
> This legacy policy has been modernized to align with 2026 enterprise IT and cybersecurity standards, incorporating mobile credentials and temporary digital passes for streamlined and secure visitor management.

# Visitor Policy
> [!caution] Legal Notice & Non-Liability Disclaimer
> **Reference Models & Educational Examples Only**: All policies, standards, frameworks, procedures, and architectural artifacts provided within this section are shared strictly as informational, educational, and reference examples demonstrating enterprise documentation engineering. **Under no circumstances does Richard P. Dissell, RPDev, or affiliated contributors assume legal liability, fiduciary responsibility, regulatory accountability, or duty of care for their governance, implementation, omission, or operational impact.** These examples do not constitute formal legal counsel, statutory advice, or certified regulatory compliance determinations. Any organization or individual adapting or referencing these materials must perform their own due diligence and consult licensed legal and cybersecurity compliance counsel.


**Approval Date**: 6/3/2011 (Modernized: 2026)  
**Purpose**: To ensure the safety and security of our visitors and employees by implementing strict, digitally-managed access controls for all non-employees entering the premises.

## General Visitor Access
For the safety and security of our visitors and employees, all visitors must use the main entrance. The main entrance will be the only point to enter and exit the building during normal business hours. All other doors remain locked and are restricted to employees using authorized mobile credentials.

## Registration and Digital Passes
Upon arrival, visitors must register at the reception desk or via the self-service digital kiosk. Identity verification is performed by scanning a government-issued photo identification. Once verified, the visitor management system issues a temporary mobile credential or digital pass directly to the visitor's smartphone. This digital pass contains encrypted, time-bound access rights that automatically expire after 24 hours. The system automatically notifies the host employee of the visitor's arrival. The host employee must accompany the visitor(s) for the duration of their stay in restricted areas. The visitor management system logs the date and time of arrival, the host, and automatically registers the departure when the digital pass expires or the visitor checks out.

## Vendors and Deliveries
Vendors and service personnel delivering items to the building who do not leave the reception or designated delivery areas do not require a digital visitor pass or escort.

## Security Awareness and Tailgating
Any employee who notices a visitor in a restricted area without a valid digital pass or escort should immediately notify the Security Operations Center (SOC) or a member of leadership. 

Employees who have scheduled meetings with visitors before or after normal business hours must make arrangements to meet them at the main entrance. Compliance with the registration and digital pass policies is the responsibility of the employee host.

Employees are not permitted to bypass the digital access system to allow unauthorized entry. “Tailgating” is strictly prohibited. If an employee is entering the building using their mobile credential and an unauthorized person attempts to follow, the employee must direct the person to the reception desk for proper registration. Advanced IoT sensors at entrances will detect tailgating and trigger immediate alerts.

## Employee Responsibilities
The Compliance Officer shall remind all employees quarterly about their responsibility for building security. Employees who forget their mobile device or physical backup credential must report to the main entrance for temporary provisioning.

---

## 🔗 Related Architecture & Knowledge Graph

* **Production Systems:** Validated in [[Coral_Edge_TPU_Computer_Vision_NVR|Coral Edge TPU Computer Vision NVR]].
* **Governance & Compliance:** Governed by [[Projects/Governance-and-Policies/Building_Security_Policy|Building Security Policy]], [[Projects/Governance-and-Policies/Information_Security_Policy|Information Security Policy]].
* **Technical Articles:** Deep dive in [[Research-and-Ramblings/Articles/Component_Repair|Bare Metal Diagnostics Lessons]].
* **Applied Research:** Investigated in [[Research-and-Ramblings/Security-and-AI-Research/Lab_Requirements|Lab Requirements]].
* **Master Credentials:** Review core competencies on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to the main [[content/Projects/Governance-and-Policies/index|Digital Garden Index]].
