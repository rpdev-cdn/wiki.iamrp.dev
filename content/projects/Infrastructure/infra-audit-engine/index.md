---
title: "Infrastructure Audit Engine Documentation"
description: "Asynchronous state auditor and drift detection engine for Linux, OpenWrt, Cloudflare, and GitHub ecosystems."
---


> [!info] Project Maturity: **95% — Production Fleet Core (Tier 5)**
> - **Lifecycle Status**: Authoritative Infrastructure Source of Truth
> - **Active Components**: Multi-node SSH probing (`edge`, `llmadmin01`, `t430`), FIDO2 hardware secret decryption, automated `CURRENT_ENV.yml` drift generation
> - **Pending Enhancements**: Webhook notification dispatch on uncommitted infrastructure drift

# Infrastructure Audit Engine Documentation

> Asynchronous, Python 3.12-based state auditor that maintains the single source of infrastructure truth: `CURRENT_ENV.yml`.

- **Repository**: [`https://github.com/RPDevs-Builds/infra-audit-engine`](https://github.com/RPDevs-Builds/infra-audit-engine)
- **Local Path**: `/mnt/sharedroot/projects/infra-audit-engine`
- **Output Registry**: `docs/CURRENT_ENV.yml`

---

## 1. Architecture & Execution Flow

```
infra-audit-engine/
├── src/
│   ├── orchestrator.py      # Async task scheduler & concurrency manager
│   ├── config.py            # FIDO2 Age in-memory secret decryption
│   ├── modules/
│   │   ├── cloudflare_api.py# Cloudflare DNS, Tunnels, and Access apps
│   │   ├── github_api.py    # GitHub org repositories and vulnerability alerts
│   │   └── ssh_audit.py     # SSH collector for Linux (t430, llmadmin) and OpenWrt
│   └── registry.py          # YAML serializer and drift diff engine
└── docs/
    └── CURRENT_ENV.yml      # Authoritative state definition
```

---

## 2. FIDO2 Hardware-Backed Secrets

Secrets (`.env.age`) are decrypted directly into process memory using `age` and `age-plugin-fido2prf`:

```python
# File: src/config.py

def load_environment() -> None:
    if ENV_AGE.exists():
        logger.info("=== DECRYPTING ENVIRONMENT SECRETS ===")
        result = subprocess.run(
            ["age", "-d", "-i", FIDO2_IDENTITY, str(ENV_AGE)],
            capture_output=True,
            text=True,
            check=True
        )
        # Load directly into memory without disk writes
        load_dotenv(stream=io.StringIO(result.stdout))
```

---

## 3. Running an Audit

```bash
cd /mnt/sharedroot/projects/infra-audit-engine
source .venv/bin/activate
python src/orchestrator.py
```
