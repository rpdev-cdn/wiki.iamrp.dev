---
title: "main"
description: "Technical reference for src/ui/main.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## ui/main
DNS Forge - Main Popup Entry Point (ES Module)
This module orchestrates the initialization and event management for the extension popup.
It coordinates theme management, tab navigation, and service initialization.

**See**: [Wiki Reference](https://dns-forge.github.io/reference/ui/main/)  

* [ui/main](#module_ui/main)
    * _static_
        * [.updateLocalBlocksCache(cat, id, action)](#module_ui/main.updateLocalBlocksCache)
        * [.loadProfiles([customApiKey])](#module_ui/main.loadProfiles) ⇒ <code>Promise.&lt;Array&gt;</code>
        * [.handleFetchProfilesClick([e])](#module_ui/main.handleFetchProfilesClick)
        * [.refreshActiveProfileAndUI()](#module_ui/main.refreshActiveProfileAndUI) ⇒ <code>Promise.&lt;(Object\|null)&gt;</code>
        * [.exportFullConfiguration()](#module_ui/main.exportFullConfiguration)
        * [.importFullConfiguration(e)](#module_ui/main.importFullConfiguration)
        * [.loadAlertSettings()](#module_ui/main.loadAlertSettings)
        * [.saveAlertSettings()](#module_ui/main.saveAlertSettings)
        * [.sendTestAlert()](#module_ui/main.sendTestAlert)
    * _inner_
        * [~handleDashboardDomain(listType, action, [isTemp])](#module_ui/main..handleDashboardDomain)
        * [~handleAddDomain()](#module_ui/main..handleAddDomain)
        * [~handleBulkAdd()](#module_ui/main..handleBulkAdd)
        * [~initWindowMode()](#module_ui/main..initWindowMode)
        * [~handleIconClickModeRedirect()](#module_ui/main..handleIconClickModeRedirect) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [~initGlobalEventListeners()](#module_ui/main..initGlobalEventListeners)
        * [~initTabNavigation()](#module_ui/main..initTabNavigation)
        * [~initializeApp()](#module_ui/main..initializeApp)
        * [~initMirrorModeUI()](#module_ui/main..initMirrorModeUI)
        * [~saveMirrorMode()](#module_ui/main..saveMirrorMode)
        * [~initSettingsUI()](#module_ui/main..initSettingsUI) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [~saveSettings()](#module_ui/main..saveSettings)
        * [~toggleAutoRefresh(enable)](#module_ui/main..toggleAutoRefresh)



### ui/main.updateLocalBlocksCache(cat, id, action)
Synchronizes the in-memory lastBlocksData cache when a setting or list item is toggled.
Handles top-level categories as well as sub-resource lists (e.g. privacy/natives, parentalcontrol/services).

**Kind**: static method of [<code>ui/main</code>](#module_ui/main)  

| Param | Type | Description |
| --- | --- | --- |
| cat | <code>string</code> | Category path (e.g., 'privacy', 'parentalcontrol/services') |
| id | <code>string</code> | Identifier of the setting or item |
| action | <code>string</code> | 'add' or 'delete' |



### ui/main.loadProfiles([customApiKey]) ⇒ <code>Promise.&lt;Array&gt;</code>
Loads available profiles from the NextDNS API and populates the Profile Override dropdown.

**Kind**: static method of [<code>ui/main</code>](#module_ui/main)  
**Returns**: <code>Promise.&lt;Array&gt;</code> - List of profiles.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [customApiKey] | <code>string</code> \| <code>null</code> | <code>null</code> | Optional API key to use for fetching. |



### ui/main.handleFetchProfilesClick([e])
Handles clicks on the fetch profiles 🔄 button.

**Kind**: static method of [<code>ui/main</code>](#module_ui/main)  

| Param | Type | Description |
| --- | --- | --- |
| [e] | <code>Event</code> | Click event. |



### ui/main.refreshActiveProfileAndUI() ⇒ <code>Promise.&lt;(Object\|null)&gt;</code>
Re-detects the active profile and refreshes the Overview page UI status and dashboard services.

**Kind**: static method of [<code>ui/main</code>](#module_ui/main)  
**Returns**: <code>Promise.&lt;(Object\|null)&gt;</code> - The detected profile.  


### ui/main.exportFullConfiguration()
Exports the entire extension configuration (sync and local storage) as a JSON file.

**Kind**: static method of [<code>ui/main</code>](#module_ui/main)  


### ui/main.importFullConfiguration(e)
Imports an extension configuration from a JSON file.
Validates the file structure before applying settings.

**Kind**: static method of [<code>ui/main</code>](#module_ui/main)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | The file input change event. |



### ui/main.loadAlertSettings()
Loads Alert Settings from storage and populates the Alerts sub-tab form.

**Kind**: static method of [<code>ui/main</code>](#module_ui/main)  


### ui/main.saveAlertSettings()
Saves current Alert Settings from the UI to storage.

**Kind**: static method of [<code>ui/main</code>](#module_ui/main)  


### ui/main.sendTestAlert()
Sends a test alert through the Action Center and desktop notification system.

**Kind**: static method of [<code>ui/main</code>](#module_ui/main)  


### ui/main~handleDashboardDomain(listType, action, [isTemp])
Handles domain management actions (Allow/Deny/Snooze) from the Dashboard.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| listType | <code>string</code> |  | The list to modify ('allowlist' or 'denylist'). |
| action | <code>string</code> |  | The action to perform ('add' or 'delete'). |
| [isTemp] | <code>boolean</code> | <code>false</code> | Whether this is a temporary allow (snooze). |



### ui/main~handleAddDomain()
Handles adding a single domain to the selected list.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  


### ui/main~handleBulkAdd()
Handles bulk adding multiple domains to the selected list.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  


### ui/main~initWindowMode()
Detects and applies CSS classes based on the current window mode (Popout vs Sidebar).
Adjusts html and body classes to enable mode-specific styling.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  


### ui/main~handleIconClickModeRedirect() ⇒ <code>Promise.&lt;boolean&gt;</code>
Handles redirecting to a standalone window or opening the sidebar
if the user has configured iconClickAction to 'popout' or 'sidebar'.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - True if redirected, false if proceeding in standard popup mode.  


### ui/main~initGlobalEventListeners()
Binds global event listeners for UI interactions.
Covers tab switching, dashboard actions, tool triggers, and background message listeners.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  


### ui/main~initTabNavigation()
Determines the initial tab to display based on URL parameters.
Defaults to the 'dashboard' tab.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  


### ui/main~initializeApp()
Primary application bootstrap logic.
Fetches the active profile, starts the log stream, and initializes all sub-modules.
Implements fault-tolerance to ensure one failing service doesn't block others.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  


### ui/main~initMirrorModeUI()
Initializes the Mirror Mode UI, allowing users to select profiles for synchronization.
Fetches the list of all available profiles and binds the save handler.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  


### ui/main~saveMirrorMode()
Saves the selected mirror profiles to sync storage.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  


### ui/main~initSettingsUI() ⇒ <code>Promise.&lt;Object&gt;</code>
Initializes the Settings UI by loading values from storage and populating the form.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The loaded settings object.  


### ui/main~saveSettings()
Saves the current settings from the UI to sync storage.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  


### ui/main~toggleAutoRefresh(enable)
Toggles the auto-refresh mechanism for native dashboard logs.
Sets or clears an interval based on user preference and storage settings.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  

| Param | Type | Description |
| --- | --- | --- |
| enable | <code>boolean</code> | Whether to enable or disable auto-refresh. |

