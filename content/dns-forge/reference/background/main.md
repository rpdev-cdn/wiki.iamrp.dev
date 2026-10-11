---
title: "main"
description: "Technical reference for src/background/main.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## background/main
DNS Forge - Background Engine (ES Module)

Copyright (C) 2025 DNS Forge Contributors

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

**See**: [Wiki Reference](https://dns-forge.github.io/reference/background/main/)  

* [background/main](#module_background/main)
    * _static_
        * [.initializeBackground()](#module_background/main.initializeBackground)
    * _inner_
        * [~applyIconAction()](#module_background/main..applyIconAction)
        * [~setupContextMenus()](#module_background/main..setupContextMenus)



### background/main.initializeBackground()
Bootstraps the background engine.
Initializes storage, sets up context menus, registers request and message listeners, 
and starts periodic tasks (alarms).

**Kind**: static method of [<code>background/main</code>](#module_background/main)  


### background/main~applyIconAction()
Applies the user-configured icon click action (popup, popout, or sidebar).
Always ensures the popup path is set so clicking the toolbar icon or the Unified
Extensions panel reliably opens the extension interface (avoiding Mozilla Bug 1805908 / Bug 1814231
where setting popup to "" causes only context menu items to appear).

**Kind**: inner method of [<code>background/main</code>](#module_background/main)  


### background/main~setupContextMenus()
Creates the extension's context menu entries for allowing/denying domains.
Safely guards against platforms without context menu support (e.g. Firefox for Android).

**Kind**: inner method of [<code>background/main</code>](#module_background/main)  
