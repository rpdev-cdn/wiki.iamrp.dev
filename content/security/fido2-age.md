---
title: "Hardware Security Keys & Age Encryption"
description: "FIDO2 hardware key binding, age-plugin-fido2prf, and zero-trust credential hygiene."
---

# Hardware Security Keys & Age Encryption

RPDev infrastructure mandates hardware-backed cryptographic identity for decrypting environment secrets and SSH access.

---

## 1. FIDO2 Key Binding with Age

All environment secrets (`.env.age`) are encrypted using `age` bound to physical FIDO2/U2F security keys via `age-plugin-fido2prf`:

- **Decryption Rule**: Decryption physically requires key insertion and physical touch (`user-presence`).
- **Memory Streaming**: Secrets are decrypted directly to memory via stdout pipes, eliminating plaintext files on disk.
- **Master Recovery**: Encrypted to dual recipients (FIDO2 token + offline air-gapped paper key).

---

## 2. Centralized Registry (`.envmaster`)

Centralized variables are documented and tracked in `/home/llmuser/.gemini/.envmaster` as the single source of truth across workspaces.
