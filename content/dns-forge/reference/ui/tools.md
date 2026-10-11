---
title: "tools"
description: "Technical reference for src/ui/tools.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## ui/tools
DNS Forge - Tools UI Module (Debugger)


* [ui/tools](#module_ui/tools)
    * [.runIntelligentDebugger()](#module_ui/tools.runIntelligentDebugger)
    * [.exportDebuggerSnapshot()](#module_ui/tools.exportDebuggerSnapshot)
    * [.runNetworkDiagnosticsUI()](#module_ui/tools.runNetworkDiagnosticsUI)
    * [.exportDiagnosticReport()](#module_ui/tools.exportDiagnosticReport)



### ui/tools.runIntelligentDebugger()
Executes the "Forge Debugger" logic.
Correlates background web request tracking with live NextDNS API logs to identify which list is blocking a domain.
Renders findings with "Allow" buttons for quick whitelisting.

**Kind**: static method of [<code>ui/tools</code>](#module_ui/tools)  


### ui/tools.exportDebuggerSnapshot()
Exports the current debugger correlations as a JSON snapshot.

**Kind**: static method of [<code>ui/tools</code>](#module_ui/tools)  


### ui/tools.runNetworkDiagnosticsUI()
Executes the NextDNS Network Diagnostics check and renders findings.
Measures PoP RTT latency, validates connection status, and displays network info.

**Kind**: static method of [<code>ui/tools</code>](#module_ui/tools)  


### ui/tools.exportDiagnosticReport()
Exports the current diagnostic report as a JSON file.

**Kind**: static method of [<code>ui/tools</code>](#module_ui/tools)  
