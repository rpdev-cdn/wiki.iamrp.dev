---
title: "state"
description: "Technical reference for src/background/state.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## background/state
DNS Forge - Background State
This module maintains the runtime state of the background script, including 
tab-specific network requests, profile data, and initialization status.


* [background/state](#module_background/state)
    * _static_
        * [.state](#module_background/state.state) : <code>Object</code>
    * _inner_
        * [~Base](#module_background/state..Base) : <code>string</code>
        * [~NextDNS](#module_background/state..NextDNS) : <code>string</code>
        * [~Prefix](#module_background/state..Prefix) : <code>string</code>



### background/state.state : <code>Object</code>
Global background state object.

**Kind**: static constant of [<code>background/state</code>](#module_background/state)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| tabRequests | <code>Object</code> | Mapping of tab IDs to their current network request logs. |
| blockedTabRequests | <code>Object</code> | Mapping of tab IDs to their blocked request logs. |
| currentProfileData | <code>Object</code> | Cached allowlist and denylist for the active profile. |
| lastNotificationTimes | <code>Object</code> | Timestamp tracking for throttled notifications. |
| isInitialized | <code>boolean</code> | Whether the background services have finished bootstrapping. |
| notifications | <code>Array</code> | List of recent security and maintenance notifications. |



### background/state~Base : <code>string</code>
URL for the NextDNS API

**Kind**: inner constant of [<code>background/state</code>](#module_background/state)  


### background/state~NextDNS : <code>string</code>
diagnostic test URL

**Kind**: inner constant of [<code>background/state</code>](#module_background/state)  


### background/state~Prefix : <code>string</code>
for temporary allowlist alarms

**Kind**: inner constant of [<code>background/state</code>](#module_background/state)  
