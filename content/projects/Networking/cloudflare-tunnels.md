---
title: "Networking & Cloudflare Tunnels"
description: "Argo Tunnel ingress rules, zero-trust access control, and DNS topology."
---

# Networking & Cloudflare Tunnels

The RPDev homelab leverages Cloudflare Argo Tunnels (`cloudflared`) to expose services securely without port forwarding.

---

## 1. Cloudflare Tunnel Topology

- **Daemon Host**: Edge Gateway (`edge`, OpenWrt MT6000)
- **Tunnel Name**: `iamrp.dev`
- **Tunnel UUID**: `6d600eb6-1507-4ac1-939b-dccaaa2ecbcd`
- **Account ID**: `7a280a68ec55dd114628c922633532ce`

```
Internet ──> Cloudflare Edge ──(TLS Tunnel)──> OpenWrt Gateway (cloudflared)
                                                       │
                                        ┌──────────────┴──────────────┐
                                        ▼                             ▼
                              authentik (auth)             frigate (nvr)
```

---

## 2. Ingress Mappings

| Hostname | Backend Destination | Authentication / Policy |
|---|---|---|
| `auth.iamrp.dev` | `http://authentik.docker.local:9000` | Authentik SSO Provider |
| `mcp.iamrp.dev` | `http://mcp-gateway.docker.local:8080` | Zero Trust Service Token |
| `nvr.iamrp.dev` | `http://frigate.docker.local:8971` | Authentik Proxy Forward Auth |
| `nfs-sharedroot.iamrp.dev` | `tcp://fs01.service.local:2049` | WARP Client Identity |
| `uptime.iamrp.dev` | `http://uptime.docker.local:3001` | Public Status Badge |
