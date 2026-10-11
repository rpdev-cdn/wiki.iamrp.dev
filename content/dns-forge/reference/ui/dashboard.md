---
title: "dashboard"
description: "Technical reference for src/ui/dashboard.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## ui/dashboard
DNS Forge - Dashboard UI Module
Handles log rendering, analytics, and tab-specific request tracking for the dashboard view.


* [ui/dashboard](#module_ui/dashboard)
    * [.formatLogRow(log)](#module_ui/dashboard.formatLogRow) ⇒ <code>HTMLDivElement</code>
    * [.handleLiveLog(log)](#module_ui/dashboard.handleLiveLog)
    * [.matchesLogFilters(log, [activeFilters])](#module_ui/dashboard.matchesLogFilters) ⇒ <code>boolean</code>
    * [.renderLogs([logsOverride])](#module_ui/dashboard.renderLogs)
    * [.loadAnalytics()](#module_ui/dashboard.loadAnalytics)
    * [.loadNativeLogs()](#module_ui/dashboard.loadNativeLogs)
    * [.initTabLogEvents()](#module_ui/dashboard.initTabLogEvents)
    * [.updateDashboardTabInfo()](#module_ui/dashboard.updateDashboardTabInfo)
    * [.updateDynamicLinks()](#module_ui/dashboard.updateDynamicLinks)
    * [.downloadLogsCSV()](#module_ui/dashboard.downloadLogsCSV)
    * [.wipeLogs()](#module_ui/dashboard.wipeLogs)



### ui/dashboard.formatLogRow(log) ⇒ <code>HTMLDivElement</code>
Formats a single log entry into a styled DOM row element.
Unifies live log stream and historical log rendering.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  
**Returns**: <code>HTMLDivElement</code> - Configured log row element.  

| Param | Type | Description |
| --- | --- | --- |
| log | <code>Object</code> | DNS log item. |



### ui/dashboard.handleLiveLog(log)
Handles incoming live log events from the background SSE stream.
Updates the internal log cache and prepends the log to the UI if the dashboard is active.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| log | <code>Object</code> | The DNS log object received from the stream. |



### ui/dashboard.matchesLogFilters(log, [activeFilters]) ⇒ <code>boolean</code>
Checks whether a given DNS log item matches the active status and reason filters.
Ensures that uncategorized default plain traffic ('default', neutral traffic like google.com),
explicitly allowed items ('allowed' / 'whitelisted'), and blocked items are accurately handled.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  
**Returns**: <code>boolean</code> - True if the log matches the active filter criteria.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| log | <code>Object</code> |  | The DNS log object. |
| [activeFilters] | <code>Array.&lt;string&gt;</code> | <code>[]</code> | Array of active filter values. |



### ui/dashboard.renderLogs([logsOverride])
Renders the full list of logs to the dashboard container.
Applies active filters for search queries, device selection, and status (allowed/blocked).

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [logsOverride] | <code>Array</code> \| <code>null</code> | <code></code> | Optional override for the log array to render. |



### ui/dashboard.loadAnalytics()
Fetches and displays analytics summary and trend data for the active profile.
Calculates percentage change in activity based on time-series data.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  


### ui/dashboard.loadNativeLogs()
Fetches recent historical logs from the NextDNS API.
Updates the state cache and triggers a full UI re-render of the log list.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  


### ui/dashboard.initTabLogEvents()
Attaches delegated click listeners to the Tab Requests container
for allowing, unallowing, denying, and undenying domains.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  


### ui/dashboard.updateDashboardTabInfo()
Updates the "Tab Requests" panel with network request data specific to the active browser tab.
Renders interactive allow/deny controls per requested domain and updates total blocked count.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  


### ui/dashboard.updateDynamicLinks()
Updates the href attributes of deep-links to the official NextDNS web GUI.
Ensures that links point to the correct active profile.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  


### ui/dashboard.downloadLogsCSV()
Exports the current log cache as a CSV file.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  


### ui/dashboard.wipeLogs()
Triggers a remote log wipe via the background script and clears the local cache.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  
