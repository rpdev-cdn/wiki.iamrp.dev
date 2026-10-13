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
            * [.handleLogPayload(log)](#module_background/logStream..LogStreamManager+handleLogPayload)
            * [.parseSSEChunk(rawChunk)](#module_background/logStream..LogStreamManager+parseSSEChunk)
            * [.start(profileId)](#module_background/logStream..LogStreamManager+start) ⇒ <code>Promise.&lt;{success: boolean, error: string}&gt;</code>
            * [.stop()](#module_background/logStream..LogStreamManager+stop)



### background/logStream.logStreamManager : <code>LogStreamManager</code>
Singleton instance of LogStreamManager.

**Kind**: static constant of [<code>background/logStream</code>](#module_background/logStream)  


### background/logStream~LogStreamManager
Manages Server-Sent Events (SSE) connections for live log streaming from the NextDNS API.
Uses authenticated fetch with ReadableStream when available to pass credentials via headers,
falling back to EventSource if streaming fetch is unsupported.
Implements automatic reconnection logic with exponential backoff.

**Kind**: inner class of [<code>background/logStream</code>](#module_background/logStream)  

* [~LogStreamManager](#module_background/logStream..LogStreamManager)
    * [.handleLogPayload(log)](#module_background/logStream..LogStreamManager+handleLogPayload)
    * [.parseSSEChunk(rawChunk)](#module_background/logStream..LogStreamManager+parseSSEChunk)
    * [.start(profileId)](#module_background/logStream..LogStreamManager+start) ⇒ <code>Promise.&lt;{success: boolean, error: string}&gt;</code>
    * [.stop()](#module_background/logStream..LogStreamManager+stop)



#### logStreamManager.handleLogPayload(log)
Broadcasts a parsed log message to extension views and triggers security notifications if needed.

**Kind**: instance method of [<code>LogStreamManager</code>](#module_background/logStream..LogStreamManager)  

| Param | Type | Description |
| --- | --- | --- |
| log | <code>Object</code> | The log payload. |



#### logStreamManager.parseSSEChunk(rawChunk)
Parses chunks of Server-Sent Events data and processes valid payloads.

**Kind**: instance method of [<code>LogStreamManager</code>](#module_background/logStream..LogStreamManager)  

| Param | Type | Description |
| --- | --- | --- |
| rawChunk | <code>string</code> | Text chunk containing SSE data. |



#### logStreamManager.start(profileId) ⇒ <code>Promise.&lt;{success: boolean, error: string}&gt;</code>
Starts the log stream for a specific profile.
Closes any existing connection before starting a new one.

**Kind**: instance method of [<code>LogStreamManager</code>](#module_background/logStream..LogStreamManager)  
**Returns**: <code>Promise.&lt;{success: boolean, error: string}&gt;</code> - Success status or error message.  

| Param | Type | Description |
| --- | --- | --- |
| profileId | <code>string</code> | The NextDNS profile ID to stream logs for. |



#### logStreamManager.stop()
Stops the current log stream and cancels any pending reconnection attempts.

**Kind**: instance method of [<code>LogStreamManager</code>](#module_background/logStream..LogStreamManager)  
