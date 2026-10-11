---
title: "utils"
description: "Technical reference for src/ui/utils.js"
tags:
  - wiki
  - dns-forge
  - reference
---

## Functions

<dl>
<dt><a href="#sanitizeNode">sanitizeNode(node)</a></dt>
<dd><p>Helper to recursively sanitize a DOM node tree by stripping
dangerous tags, event handlers (on*), and javascript: URIs.</p>
</dd>
<dt><a href="#setSafeHTML">setSafeHTML(el, html)</a></dt>
<dd><p>Helper to safely set HTML from a string (AMO compliance).
Sanitizes input through DOMParser and active node sanitization.</p>
</dd>
<dt><a href="#downloadAsFile">downloadAsFile(filename, content, [type])</a></dt>
<dd><p>Utility to download a string/object as a file.</p>
</dd>
<dt><a href="#showToast">showToast(message, [type], [duration])</a></dt>
<dd><p>Displays a non-blocking toast notification across extension popups and full-screen views.</p>
</dd>
<dt><a href="#renderEmptyStateHTML">renderEmptyStateHTML(message, [icon])</a> ⇒ <code>string</code></dt>
<dd><p>Standardized empty state HTML generator.</p>
</dd>
</dl>



## sanitizeNode(node)
Helper to recursively sanitize a DOM node tree by stripping
dangerous tags, event handlers (on*), and javascript: URIs.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Node</code> | DOM node to sanitize. |



## setSafeHTML(el, html)
Helper to safely set HTML from a string (AMO compliance).
Sanitizes input through DOMParser and active node sanitization.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | Target element. |
| html | <code>string</code> | HTML content to inject safely. |



## downloadAsFile(filename, content, [type])
Utility to download a string/object as a file.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| filename | <code>string</code> |  | Name of the file. |
| content | <code>string</code> |  | Stringified content. |
| [type] | <code>string</code> | <code>&quot;&#x27;application/json&#x27;&quot;</code> | MIME type. |



## showToast(message, [type], [duration])
Displays a non-blocking toast notification across extension popups and full-screen views.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> |  | Message text to display. |
| [type] | <code>&#x27;info&#x27;</code> \| <code>&#x27;success&#x27;</code> \| <code>&#x27;error&#x27;</code> \| <code>&#x27;warning&#x27;</code> \| <code>&#x27;danger&#x27;</code> | <code>&#x27;info&#x27;</code> | Category of notification. |
| [duration] | <code>number</code> | <code>3000</code> | Duration in milliseconds before fading out. |



## renderEmptyStateHTML(message, [icon]) ⇒ <code>string</code>
Standardized empty state HTML generator.

**Kind**: global function  
**Returns**: <code>string</code> - HTML string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> |  | Empty state explanation. |
| [icon] | <code>string</code> | <code>&quot;&#x27;📭&#x27;&quot;</code> | Icon or emoji to display. |

