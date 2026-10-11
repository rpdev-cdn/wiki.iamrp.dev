---
title: "DNS Forge: Build & CI/CD Pipeline"
description: "Build system, web-ext packaging, Mozilla addons-linter auditing, and GitHub Actions continuous integration pipeline."
tags:
  - wiki
  - dns-forge
  - build
  - ci-cd
---

> [!note] Project Documentation Wiki
> *Part of the **[[dns-forge/index|DNS Forge Technical Wiki]]**.*

# 🏗️ Build & CI/CD Pipeline

DNS Forge enforces automated quality gates and packaging pipelines to ensure strict compliance with Mozilla Add-ons (AMO) standards and flawless runtime performance.

---

## 1. 📦 Package Compilation (`web-ext`)

The extension is compiled into a production-grade WebExtension archive (`.xpi`) using Mozilla's official `web-ext` CLI tool.

### Build Command
```bash
npm run build
```

Under the hood, `package.json` defines a strict ignore list to exclude developer tools, tests, documentation, and raw config files from the final package:

```bash
web-ext build --overwrite-dest --filename "{name}-{version}.xpi" \
  --ignore-files "tests/**" "tests" "scripts/**" "scripts" "node_modules/**" \
  ".git/**" ".github/**" ".vscode/**" ".staging/**" ".staging" ".tools/**" ".tools" \
  "package.json" "package-lock.json" "jest.setup.js" ".gitignore" "README.md" \
  "CHANGELOG.md" "LICENSE" "AGENTS.md" "babel.config.json" ".gemini/**" "*.skill" \
  "**/*.test.js" "*-results.json" "reports/**" "web-ext-artifacts/**" "updates.json" \
  "coverage/**" "coverage" ".amo-upload-uuid"
```

The resulting artifact is placed under:
```
web-ext-artifacts/dns_forge-1.2.0.xpi
```

---

## 2. 🛡️ Mozilla Add-on Linter (`addons-linter`)

Every build is verified with the official Mozilla `addons-linter` targeting the compiled `.xpi` artifact:

```bash
npm run lint:addon
```

### Verification Standard
DNS Forge enforces a **Zero-Warning Standard**:
```
Validation Summary:

errors          0              
notices         0              
warnings        0              
```

Key audited checks:
- Strict Manifest V3 compatibility.
- Zero `eval()`, `Function()`, or dynamic code execution.
- Strict Content Security Policy (CSP).
- Minimal and justified permission footprint.

---

## 3. 🧪 Automated Test Verification

Before any artifact packaging, the entire test suite must achieve 100% pass rate:

```bash
npm test
```

Current test status:
- **Test Suites**: 17 passed / 17 total
- **Tests**: 128 passed / 128 total
- **Execution Time**: ~25 seconds on native Node.js 22 with ESM.

---

## 4. 🚀 CI/CD Release Automation

When a release tag (`v*.*.*`) is pushed to `origin`, the GitHub Actions workflow (`.github/workflows/deploy.yml` / release pipeline) automatically:
1. Checks out the code and installs pinned dependencies via `npm ci`.
2. Runs the full Jest test suite across all 17 test suites.
3. Compiles the `.xpi` package using `web-ext`.
4. Runs `addons-linter` to verify 0 errors and 0 warnings.
5. Signs and submits the package to AMO using Mozilla API credentials.
6. Publishes the release artifact to the GitHub Releases portal and sovereign hub.
