---
title: "Layer 2 Containerization & Non-NAT IPAM"
tags:
  - wiki
  - project-manual
  - documentation
---

> [!note] Project Documentation Wiki
> *This document is part of the **[[projects/index|RPDev Projects Knowledge Base]]**. For the high-level portfolio overview, visit [iamrp.dev](https://iamrp.dev).*

> [!abstract] Architectural Challenge
> Traditional Docker deployments rely heavily on Network Address Translation (NAT) and port-forwarding to expose containerized services to the host network. At an enterprise scale, this creates "port soup"—a management nightmare where multiple services fight for port 80/443, leading to collision errors, complex reverse-proxy configurations, and opaque network boundaries that frustrate security audits.

This project outlines the deployment of a unified Layer 2 network architecture using `macvlan` and `ipvlan` drivers, transforming containers from nested processes into first-class citizens on the physical network.

---

### ◈ The Solution: Native Network Attachment

By bypassing the Docker bridge and NAT entirely, each container is assigned a dedicated, routable IP address on the local subnet.

#### 1. Macvlan & Ipvlan Network Drivers
- **Macvlan Implementation:** For services requiring distinct MAC addresses (such as DHCP servers or legacy applications bound to hardware identifiers), `macvlan` networks were configured. This allows the host's physical network interface to multiplex multiple virtual MACs directly onto the wire.
- **Ipvlan Implementation:** For high-density deployments where switch port-security might block multiple MACs from a single physical port, `ipvlan` (specifically L2 mode) was deployed. Containers share the host's MAC address but maintain distinct IP identities, significantly reducing broadcast domain noise while achieving the same native routing.

#### 2. Strict IP Address Management (IPAM)
With containers acting as standalone hosts, rigorous IPAM is required.
- Deployment manifests (`docker-compose.yml`) are statically assigned IP addresses within dedicated, reserved subnets.
- This prevents DHCP exhaustion and guarantees that infrastructure services boot predictably during disaster recovery scenarios.

#### 3. Dynamic DNS & Local Resolution (Mageddo DPS)
To manage the routing without hardcoding IPs across the fleet, **Mageddo DNS Proxy Server (DPS)** was integrated.
- DPS dynamically inspects the Docker socket, automatically creating A-records for containers as they spin up.
- A local `.docker.local` namespace is delegated across the environment, allowing services and Nginx reverse proxies to route traffic by hostname seamlessly, regardless of underlying IP assignment.

### ◈ Architectural Diagram

```mermaid
graph TD
    subgraph Physical Network (192.168.1.0/24)
        A[Core Router]
        B[Physical Host NIC]
    end

    A <--> B

    subgraph Host OS (Docker Engine)
        B --- C(Ipvlan Sub-Interface)
        B --- D(Macvlan Sub-Interface)
        
        C --- E[App Container 1<br>192.168.1.10]
        C --- F[App Container 2<br>192.168.1.11]
        
        D --- G[Legacy Service<br>192.168.1.50<br>MAC: AA:BB:CC]
        
        H[Mageddo DPS] -.->|Reads Docker Socket| E
        H -.->|Reads Docker Socket| F
    end
    
    style A fill:#333,stroke:#666
    style B fill:#333,stroke:#666
    style E fill:#2b5c8f,stroke:#333
    style F fill:#2b5c8f,stroke:#333
    style G fill:#f9a826,stroke:#333,color:#000
    style H fill:#555,stroke:#333
```

---

### ◈ Business Impact
This migration completely eliminated port collisions and complex host-level routing tables. Network security monitoring systems (like Suricata and Zeek) can now inspect traffic and definitively attribute malicious activity to a specific container IP, vastly improving incident response times and forensic clarity.

---

## 🔗 Related Architecture & Knowledge Graph

* **Production Systems:** Validated in [[OpenWrt_Kernel_NFS_Manager|OpenWrt Kernel NFS Manager]], [[Builder_Manager_OCI_Pipeline|Builder Manager OCI Pipeline]].
* **Governance & Compliance:** Governed by [[Projects/Governance-and-Policies/Infrastructure_Hardening_Policy|Infrastructure Hardening Policy]].
* **Technical Articles:** Deep dive in [[Articles/Whitepapers/Zero_Trust_Edge|Zero Trust Edge Routing]].
* **Applied Research:** Investigated in [[Local_LLM_Architecture|Local LLM Architecture]].
* **Master Credentials:** Review core competencies on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to the main [[content/Projects/index|Digital Garden Index]].
