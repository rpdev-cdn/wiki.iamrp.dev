---
title: "scheduler"
description: "Technical reference for src/background/scheduler.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## background/scheduler
DNS Forge - Background Scheduler



### background/scheduler.checkAutomationRules()
Periodically checks the stored automation rules against the current time.
If a rule's trigger matches the current HH:mm, the rule's action is executed.
Rules typically toggle settings or blocklists.

**Kind**: static method of [<code>background/scheduler</code>](#module_background/scheduler)  
