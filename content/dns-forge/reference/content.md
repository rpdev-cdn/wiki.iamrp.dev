---
title: "content"
description: "Technical reference for src/content.js"
tags:
  - wiki
  - dns-forge
  - reference
---

## Functions

<dl>
<dt><a href="#cleanupUI">cleanupUI()</a></dt>
<dd><p>Unified UI Cleanup</p>
</dd>
<dt><a href="#updateFilterCountBadge">updateFilterCountBadge([forcedCount])</a></dt>
<dd><p>Updates the filter count badge on the &quot;Manage&quot; button in the logs header.</p>
</dd>
<dt><a href="#closeFilteredLogsModal">closeFilteredLogsModal()</a></dt>
<dd><p>Closes and removes the Filtered Logs Manager modal dialog from the page.</p>
</dd>
<dt><a href="#openFilteredLogsModal">openFilteredLogsModal([prefilledPattern])</a></dt>
<dd><p>Opens an in-page modal dialog on my.nextdns.io/<id>/logs to view, add, search,
and delete log filter patterns in real-time.</p>
</dd>
</dl>



## cleanupUI()
Unified UI Cleanup

**Kind**: global function  


## updateFilterCountBadge([forcedCount])
Updates the filter count badge on the "Manage" button in the logs header.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [forcedCount] | <code>number</code> | Optional known count to avoid an extra storage read. |



## closeFilteredLogsModal()
Closes and removes the Filtered Logs Manager modal dialog from the page.

**Kind**: global function  


## openFilteredLogsModal([prefilledPattern])
Opens an in-page modal dialog on my.nextdns.io/<id>/logs to view, add, search,
and delete log filter patterns in real-time.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [prefilledPattern] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | Optional initial pattern to pre-fill in the input field. |

