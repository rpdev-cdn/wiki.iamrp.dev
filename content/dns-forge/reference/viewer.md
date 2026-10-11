---
title: "viewer"
description: "Technical reference for src/viewer.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## viewer
DNS Forge - viewer.js
Logic for the full-screen Data Manager window.
This module handles advanced features like profile comparison, snapshots, backup/restore, 
and direct management of DNS Rewrites, TLDs, and Blocklists.

Performance & Security Refactor - June 2026


* [viewer](#module_viewer)
    * [~activeTab](#module_viewer..activeTab) : <code>string</code>
    * [~currentData](#module_viewer..currentData) : <code>Object</code>
    * [~profilesList](#module_viewer..profilesList) : <code>Array.&lt;Object&gt;</code>
    * [~activeProfile](#module_viewer..activeProfile) : <code>string</code> \| <code>null</code>
    * [~blocksMeta](#module_viewer..blocksMeta) : <code>Object</code>
    * [~activeTlds](#module_viewer..activeTlds) : <code>Set.&lt;string&gt;</code>
    * [~activeBlocklists](#module_viewer..activeBlocklists) : <code>Set.&lt;string&gt;</code>
    * [~rewritesMeta](#module_viewer..rewritesMeta) : <code>Object</code>
    * [~rewritesFetchError](#module_viewer..rewritesFetchError) : <code>string</code> \| <code>null</code>
    * [~initComparisonTab()](#module_viewer..initComparisonTab)
    * [~runComparison()](#module_viewer..runComparison)
    * [~init()](#module_viewer..init)
    * [~initEventListeners()](#module_viewer..initEventListeners)
    * [~refreshView()](#module_viewer..refreshView)
    * [~loadSnapshots()](#module_viewer..loadSnapshots)
    * [~compareSnapshots(id, snapshots)](#module_viewer..compareSnapshots)
    * [~applyConfigToProfile(config, targetProfile, [logger])](#module_viewer..applyConfigToProfile)
    * [~restoreSnapshot(id, snapshots)](#module_viewer..restoreSnapshot)
    * [~setupBackupTab()](#module_viewer..setupBackupTab)
    * [~handleExportProfile()](#module_viewer..handleExportProfile)
    * [~handleImportProfile(e)](#module_viewer..handleImportProfile)
    * [~fetchTldData()](#module_viewer..fetchTldData)
    * [~fetchBlocklistData()](#module_viewer..fetchBlocklistData)
    * [~loadMetadataIfNeeded()](#module_viewer..loadMetadataIfNeeded)
    * [~renderList()](#module_viewer..renderList)
    * [~renderTlds(query)](#module_viewer..renderTlds)
    * [~renderBlocklists(query)](#module_viewer..renderBlocklists)
    * [~openEditModal(key)](#module_viewer..openEditModal)
    * [~openAddModal()](#module_viewer..openAddModal)
    * [~fetchRewritesData()](#module_viewer..fetchRewritesData)
    * [~handleSave()](#module_viewer..handleSave)
    * [~handleDelete(key)](#module_viewer..handleDelete)
    * [~handleApiToggle(btn)](#module_viewer..handleApiToggle)
    * [~getStorageKey()](#module_viewer..getStorageKey) ⇒ <code>string</code>
    * [~populateProfileDropdowns()](#module_viewer..populateProfileDropdowns)
    * [~fetchProfiles()](#module_viewer..fetchProfiles)



### viewer~activeTab : <code>string</code>
Currently active sub-tab ('domains', 'profiles', 'filters', 'hostnames', 'tlds', 'blocklists', 'backup', 'snapshots', 'comparison', 'rewrites')

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  


### viewer~currentData : <code>Object</code>
Cache for the active tab's data (storage-based)

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  


### viewer~profilesList : <code>Array.&lt;Object&gt;</code>
List of available NextDNS profiles

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  


### viewer~activeProfile : <code>string</code> \| <code>null</code>
Active profile ID for API calls

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  


### viewer~blocksMeta : <code>Object</code>
Metadata for TLDs & Blocklists fetched from remote or local bundle

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  


### viewer~activeTlds : <code>Set.&lt;string&gt;</code>
Set of currently blocked TLD identifiers

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  


### viewer~activeBlocklists : <code>Set.&lt;string&gt;</code>
Set of currently enabled blocklist identifiers

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  


### viewer~rewritesMeta : <code>Object</code>
Metadata map for DNS rewrites { [domain]: { id, name, content } }

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  


### viewer~rewritesFetchError : <code>string</code> \| <code>null</code>
Error string if DNS rewrites fetch fails

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  


### viewer~initComparisonTab()
Initializes the Comparison tab UI by populating profile selectors.
Binds the comparison trigger button.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~runComparison()
Executes a deep configuration comparison between two selected NextDNS profiles.
Fetches settings for both and generates a visual diff of discrepancies.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~init()
Main Initialization function for the viewer window.
Detects active profile, parses URL parameters for the initial tab, and triggers initial render.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~initEventListeners()
Binds global UI events for tab navigation, search, modal controls, and delegation for list items.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~refreshView()
Central View Refresher.
Updates the UI state, tab visibility, labels, and triggers data fetching for the active tab.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~loadSnapshots()
Phase 4.2: Profile Snapshots Logic.
Fetches available snapshots from the background engine and renders them in the list.
Binds Compare, Restore, Delete, and Create Snapshot actions.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~compareSnapshots(id, snapshots)
Compares two snapshots and displays a string-based diff of security and privacy settings.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the older snapshot to compare. |
| snapshots | <code>Array.&lt;Object&gt;</code> | The list of available snapshots. |



### viewer~applyConfigToProfile(config, targetProfile, [logger])
Applies a configuration settings object to a specified NextDNS profile.
Sequentially updates Security, Privacy, Blocklists, TLDs, and Parental Controls.
Uses bounded concurrency worker (concurrency=4) for accelerated restoration.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>Object</code> |  | Configuration object. |
| targetProfile | <code>string</code> |  | ID of the target profile. |
| [logger] | <code>function</code> | <code>()&#x3D;&gt;{}</code> | Callback for outputting progress messages. |



### viewer~restoreSnapshot(id, snapshots)
Triggers a restoration of a profile from a snapshot.
Displays a progress log and notifies the user of completion.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the snapshot to restore. |
| snapshots | <code>Array.&lt;Object&gt;</code> | The list of available snapshots. |



### viewer~setupBackupTab()
Phase 3.1: Profile Cloning & Backup Logic.
Sets up the UI for exporting configurations and importing them to other profiles.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~handleExportProfile()
Handles the export of the current profile's configuration to a JSON file.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~handleImportProfile(e)
Handles the import of a configuration file and applies it to a target profile.
Implements step-by-step applying of security, privacy, blocklists, and parental controls.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | The file change event. |



### viewer~fetchTldData()
Fetches the currently blocked TLDs for the active profile from the NextDNS API.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~fetchBlocklistData()
Fetches the currently enabled blocklists for the active profile from the NextDNS API.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~loadMetadataIfNeeded()
Robust Metadata Loader.
Wraps the centralized MetadataManager utility.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~renderList()
Renders the main content list based on the active tab.
Handles specialized rendering for TLDs and Blocklists, and generic key-value rendering for others.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~renderTlds(query)
Renders the TLD Manager interface with alphabetical jump links and status toggles.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The search query to filter TLDs. |



### viewer~renderBlocklists(query)
Renders the Blocklist Manager interface as a responsive grid of descriptive cards.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The search query to filter blocklists. |



### viewer~openEditModal(key)
Opens the Edit Modal for an existing entry.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The identifier of the entry to edit. |



### viewer~openAddModal()
Opens the Add Modal for a new entry.
Adjusts labels and input visibility based on the active tab (e.g., selecting a profile vs entering a domain).

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~fetchRewritesData()
Fetches the DNS Rewrite list for the active profile from the NextDNS API.
Maps the response into the local currentData cache.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~handleSave()
Handles the saving of an entry (new or edited) to browser storage or the NextDNS API.
Distinguishes between local storage keys (Domains, Filters, Hostnames) and API-managed keys (Rewrites).

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~handleDelete(key)
Handles the deletion of an entry from browser storage or the NextDNS API.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The identifier of the entry to delete. |



### viewer~handleApiToggle(btn)
Generic API Toggle Handler for list-based settings (TLDs, Blocklists).
Manages the UI button state and dispatches toggle messages to the background engine.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| btn | <code>HTMLElement</code> | The toggle button element. |



### viewer~getStorageKey() ⇒ <code>string</code>
Utility helper to map the active tab name to its corresponding browser storage key.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
**Returns**: <code>string</code> - The storage key name.  


### viewer~populateProfileDropdowns()
Populates all profile dropdowns across the Data Manager (Modal, Backup, Comparison).

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  


### viewer~fetchProfiles()
Fetches the list of all available NextDNS profiles for use in selection dropdowns.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
