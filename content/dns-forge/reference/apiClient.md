---
title: "apiClient"
description: "Technical reference for src/apiClient.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## apiClient
APIClient Utility
Handles resilient fetching from the NextDNS API, including authentication, retries, and rate limiting.
Implements exponential backoff for network errors and server-side rate limits.


* [apiClient](#module_apiClient)
    * [.APIClient](#module_apiClient.APIClient)
        * [new exports.APIClient([baseURL])](#new_module_apiClient.APIClient_new)
        * [.setStorage(storage)](#module_apiClient.APIClient+setStorage)
        * [.getHeaders()](#module_apiClient.APIClient+getHeaders) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.fetchWithRetry(endpoint, [options], [retries], [backoffMs])](#module_apiClient.APIClient+fetchWithRetry) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.apiClient](#module_apiClient.apiClient)
    * [.mapConcurrent(items, [concurrency], fn)](#module_apiClient.mapConcurrent) ⇒ <code>Promise.&lt;Array&gt;</code>



### apiClient.APIClient
**Kind**: static class of [<code>apiClient</code>](#module_apiClient)  

* [.APIClient](#module_apiClient.APIClient)
    * [new exports.APIClient([baseURL])](#new_module_apiClient.APIClient_new)
    * [.setStorage(storage)](#module_apiClient.APIClient+setStorage)
    * [.getHeaders()](#module_apiClient.APIClient+getHeaders) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.fetchWithRetry(endpoint, [options], [retries], [backoffMs])](#module_apiClient.APIClient+fetchWithRetry) ⇒ <code>Promise.&lt;Object&gt;</code>



#### new exports.APIClient([baseURL])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [baseURL] | <code>string</code> | <code>&quot;\&quot;https://api.nextdns.io\&quot;&quot;</code> | The base URL for the NextDNS API. |



#### apiClient.setStorage(storage)
Injects a StorageManager instance to avoid circular imports.
Used for retrieving the API key required for requests.

**Kind**: instance method of [<code>APIClient</code>](#module_apiClient.APIClient)  

| Param | Type | Description |
| --- | --- | --- |
| storage | <code>StorageManager</code> | An instance of the StorageManager. |



#### apiClient.getHeaders() ⇒ <code>Promise.&lt;Object&gt;</code>
Generates request headers, including the 'X-Api-Key' fetched from storage.

**Kind**: instance method of [<code>APIClient</code>](#module_apiClient.APIClient)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - An object containing the required headers.  


#### apiClient.fetchWithRetry(endpoint, [options], [retries], [backoffMs]) ⇒ <code>Promise.&lt;Object&gt;</code>
Performs a fetch request with automatic retry logic and exponential backoff.
Handles 429 (Rate Limited) and 50x (Server Error) status codes specifically.

**Kind**: instance method of [<code>APIClient</code>](#module_apiClient.APIClient)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A result object containing success status and optional response or error.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>string</code> |  | The API endpoint (relative or absolute) to fetch. |
| [options] | <code>Object</code> | <code>{}</code> | Standard fetch options. |
| [retries] | <code>number</code> | <code>3</code> | Maximum number of retry attempts. |
| [backoffMs] | <code>number</code> | <code>1000</code> | Initial delay in milliseconds for backoff. |



### apiClient.apiClient
Single instance of the APIClient exported for project-wide use.

**Kind**: static constant of [<code>apiClient</code>](#module_apiClient)  


### apiClient.mapConcurrent(items, [concurrency], fn) ⇒ <code>Promise.&lt;Array&gt;</code>
Executes an async task across an array of items with bounded concurrency.
Inspired by NextDNS CLI's max-inflight-upstream-requests semaphore.

**Kind**: static method of [<code>apiClient</code>](#module_apiClient)  
**Returns**: <code>Promise.&lt;Array&gt;</code> - Results corresponding to each item.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| items | <code>Array</code> |  | Items to process. |
| [concurrency] | <code>number</code> | <code>4</code> | Max concurrent promises. |
| fn | <code>function</code> |  | Async worker function (item, index). |

