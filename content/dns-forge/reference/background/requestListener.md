---
title: "requestListener"
description: "Technical reference for src/background/requestListener.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## background/requestListener
DNS Forge - WebRequest Listener



### background/requestListener.requestListener(details) ⇒ <code>Object</code>
Main listener for the browser.webRequest.onBeforeRequest event.
Tracks outgoing requests by tab, matches them against the current allowlist/denylist, 
and cancels requests that match the denylist.
Also triggers block notifications.

**Kind**: static method of [<code>background/requestListener</code>](#module_background/requestListener)  
**Returns**: <code>Object</code> - A blocking response object ({cancel: boolean}).  

| Param | Type | Description |
| --- | --- | --- |
| details | <code>Object</code> | Details of the web request. |

