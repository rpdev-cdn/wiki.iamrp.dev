---
title: "logStream"
description: "Technical reference for src/background/logStream.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## background/logStream
DNS Forge - SSE Log Streaming Manager


* [background/logStream](#module_background/logStream)
    * _static_
        * [.logStreamManager](#module_background/logStream.logStreamManager) : <code>LogStreamManager</code>
    * _inner_
        * [~LogStreamManager](#module_background/logStream..LogStreamManager)
            * [.start(profileId)](#module_background/logStream..LogStreamManager+start) ⇒ <code>Promise.&lt;{success: boolean, error: string}&gt;</code>
            * [.stop()](#module_background/logStream..LogStreamManager+stop)



### background/logStream.logStreamManager : <code>LogStreamManager</code>
Singleton instance of LogStreamManager.

**Kind**: static constant of [<code>background/logStream</code>](#module_background/logStream)  


### background/logStream~LogStreamManager
Manages Server-Sent Events (SSE) connections for live log streaming from the NextDNS API.
Implements automatic reconnection logic and profile-switching awareness.

**Kind**: inner class of [<code>background/logStream</code>](#module_background/logStream)  

* [~LogStreamManager](#module_background/logStream..LogStreamManager)
    * [.start(profileId)](#module_background/logStream..LogStreamManager+start) ⇒ <code>Promise.&lt;{success: boolean, error: string}&gt;</code>
    * [.stop()](#module_background/logStream..LogStreamManager+stop)



#### logStreamManager.start(profileId) ⇒ <code>Promise.&lt;{success: boolean, error: string}&gt;</code>
Starts the log stream for a specific profile.
Closes any existing connection before starting a new one.

**Kind**: instance method of [<code>LogStreamManager</code>](#module_background/logStream..LogStreamManager)  
**Returns**: <code>Promise.&lt;{success: boolean, error: string}&gt;</code> - Success status or error message (error only present on failure).  

| Param | Type | Description |
| --- | --- | --- |
| profileId | <code>string</code> | The NextDNS profile ID to stream logs for. |



#### logStreamManager.stop()
Stops the current log stream and cancels any pending reconnection attempts.

**Kind**: instance method of [<code>LogStreamManager</code>](#module_background/logStream..LogStreamManager)  
