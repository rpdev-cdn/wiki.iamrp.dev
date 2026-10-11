---
title: "api"
description: "Technical reference for src/background/api.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## background/api
DNS Forge - API Wrapper Functions
Provides high-level functions for interacting with the NextDNS API, 
including domain management, profile detection, and DDNS updates.


* [background/api](#module_background/api)
    * [.manageDomain(profileId, listType, domain, action)](#module_background/api.manageDomain) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.detectActiveProfile()](#module_background/api.detectActiveProfile) ⇒ <code>Promise.&lt;({id: string, name: string}\|null)&gt;</code>
    * [.updateProfileCache()](#module_background/api.updateProfileCache)
    * [.checkAndUpdateLinkedIP()](#module_background/api.checkAndUpdateLinkedIP)
    * [.runNetworkDiagnostics()](#module_background/api.runNetworkDiagnostics) ⇒ <code>Promise.&lt;Object&gt;</code>



### background/api.manageDomain(profileId, listType, domain, action) ⇒ <code>Promise.&lt;Object&gt;</code>
Manages domains in a profile's allowlist or denylist.
Supports adding, deleting, and listing entries.

**Kind**: static method of [<code>background/api</code>](#module_background/api)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A result object with success status or data.  

| Param | Type | Description |
| --- | --- | --- |
| profileId | <code>string</code> | The NextDNS profile ID. |
| listType | <code>string</code> | The type of list ('allowlist' or 'denylist'). |
| domain | <code>string</code> \| <code>null</code> | The domain to add or delete (null for list action). |
| action | <code>string</code> | The action to perform ('add', 'delete', or 'list'). |



### background/api.detectActiveProfile() ⇒ <code>Promise.&lt;({id: string, name: string}\|null)&gt;</code>
Detects the currently active NextDNS profile.
Prioritizes a user-defined override, then diagnostic tests, and finally the account profile list.
Updates the storage with the identified profile ID and name.

**Kind**: static method of [<code>background/api</code>](#module_background/api)  
**Returns**: <code>Promise.&lt;({id: string, name: string}\|null)&gt;</code> - The detected profile object or null.  


### background/api.updateProfileCache()
Synchronizes the background state cache with the current profile's allowlist and denylist.
Persists the lists to storage to survive event page suspension.

**Kind**: static method of [<code>background/api</code>](#module_background/api)  


### background/api.checkAndUpdateLinkedIP()
Performs a DDNS check. Detects the current public IP and updates the linked IP in NextDNS 
if a change is detected.

**Kind**: static method of [<code>background/api</code>](#module_background/api)  


### background/api.runNetworkDiagnostics() ⇒ <code>Promise.&lt;Object&gt;</code>
Executes a comprehensive network diagnostic check against NextDNS.
Measures PoP RTT latency, verifies DoH routing, and extracts client and resolver metadata.
Inspired by official NextDNS diag tool (github.com/nextdns/diag).

**Kind**: static method of [<code>background/api</code>](#module_background/api)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Diagnostic result payload.  
