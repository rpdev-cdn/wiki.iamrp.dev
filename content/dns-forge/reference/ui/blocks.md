---
title: "blocks"
description: "Technical reference for src/ui/blocks.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## ui/blocks
DNS Forge - Blocks & Toggles UI Module


* [ui/blocks](#module_ui/blocks)
    * _static_
        * [.syncLists([force])](#module_ui/blocks.syncLists)
        * [.renderLists([queryOverride])](#module_ui/blocks.renderLists)
        * [.loadToggles([queryOverride], [force])](#module_ui/blocks.loadToggles)
    * _inner_
        * [~renderSecurityToggles()](#module_ui/blocks..renderSecurityToggles) ⇒ <code>string</code>
        * [~renderPerformanceToggles()](#module_ui/blocks..renderPerformanceToggles) ⇒ <code>string</code>
        * [~renderPrivacyToggles()](#module_ui/blocks..renderPrivacyToggles) ⇒ <code>string</code>
        * [~renderBlocklistsGrid(query)](#module_ui/blocks..renderBlocklistsGrid) ⇒ <code>string</code>
        * [~renderParentalToggles(query)](#module_ui/blocks..renderParentalToggles) ⇒ <code>string</code>
        * [~renderTldsGrid(query)](#module_ui/blocks..renderTldsGrid) ⇒ <code>string</code>
        * [~renderToggleRow(item, cat, isActive, type)](#module_ui/blocks..renderToggleRow) ⇒ <code>string</code>



### ui/blocks.syncLists([force])
Synchronizes the allowlist and denylist for the active profile from the background state.

**Kind**: static method of [<code>ui/blocks</code>](#module_ui/blocks)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [force] | <code>boolean</code> | <code>false</code> | Whether to force a re-sync even if already synced. |



### ui/blocks.renderLists([queryOverride])
Renders the Allowlist or Denylist in the "Lists" tab or Protection sub-tab.

**Kind**: static method of [<code>ui/blocks</code>](#module_ui/blocks)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [queryOverride] | <code>string</code> \| <code>null</code> | <code>null</code> | Optional search query override. |



### ui/blocks.loadToggles([queryOverride], [force])
Loads and renders the block settings toggles based on the current sub-tab and search query.

**Kind**: static method of [<code>ui/blocks</code>](#module_ui/blocks)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [queryOverride] | <code>string</code> \| <code>null</code> | <code>null</code> | Optional search query override. |
| [force] | <code>boolean</code> | <code>false</code> | Whether to force a re-fetch of settings. |



### ui/blocks~renderSecurityToggles() ⇒ <code>string</code>
Renders the security category toggles.

**Kind**: inner method of [<code>ui/blocks</code>](#module_ui/blocks)  
**Returns**: <code>string</code> - HTML string for security toggles.  


### ui/blocks~renderPerformanceToggles() ⇒ <code>string</code>
Renders the expert performance category toggles.

**Kind**: inner method of [<code>ui/blocks</code>](#module_ui/blocks)  
**Returns**: <code>string</code> - HTML string for performance toggles.  


### ui/blocks~renderPrivacyToggles() ⇒ <code>string</code>
Renders the privacy category toggles, including native tracking protection.

**Kind**: inner method of [<code>ui/blocks</code>](#module_ui/blocks)  
**Returns**: <code>string</code> - HTML string for privacy toggles.  


### ui/blocks~renderBlocklistsGrid(query) ⇒ <code>string</code>
Renders the blocklists grid with search and sort filters.

**Kind**: inner method of [<code>ui/blocks</code>](#module_ui/blocks)  
**Returns**: <code>string</code> - HTML string for blocklists grid.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The search query. |



### ui/blocks~renderParentalToggles(query) ⇒ <code>string</code>
Renders the parental control toggles and services.

**Kind**: inner method of [<code>ui/blocks</code>](#module_ui/blocks)  
**Returns**: <code>string</code> - HTML string for parental control section.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The search query for filtering services. |



### ui/blocks~renderTldsGrid(query) ⇒ <code>string</code>
Renders the TLDs grid with jump links and search filtering.

**Kind**: inner method of [<code>ui/blocks</code>](#module_ui/blocks)  
**Returns**: <code>string</code> - HTML string for TLDs grid.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The search query. |



### ui/blocks~renderToggleRow(item, cat, isActive, type) ⇒ <code>string</code>
Renders a standard toggle row for boolean or list-based settings.

**Kind**: inner method of [<code>ui/blocks</code>](#module_ui/blocks)  
**Returns**: <code>string</code> - HTML string for the toggle row.  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Object</code> | The setting item (id, label/name, optional note). |
| cat | <code>string</code> | The category path for the API call. |
| isActive | <code>boolean</code> | Whether the setting is currently active. |
| type | <code>string</code> | The setting type ('boolean' or 'list'). |

