---
title: "theme"
description: "Technical reference for src/ui/theme.js"
tags:
  - wiki
  - dns-forge
  - reference
---



## ui/theme
DNS Forge - Theme Engine & Custom Palette Management
Manages preset palettes, user custom themes, CSS variable application, and theme synchronization across views.


* [ui/theme](#module_ui/theme)
    * [.normalizeHexColor(val, [fallback])](#module_ui/theme.normalizeHexColor) ⇒ <code>string</code>
    * [.getThemeColors(id, [customThemes])](#module_ui/theme.getThemeColors) ⇒ <code>Object.&lt;string, string&gt;</code>
    * [.getThemeDisplayName(id)](#module_ui/theme.getThemeDisplayName) ⇒ <code>string</code>
    * [.updateColorPaletteInputs(themeId)](#module_ui/theme.updateColorPaletteInputs)
    * [.updateDeleteThemeBtnVisibility()](#module_ui/theme.updateDeleteThemeBtnVisibility)
    * [.updateUnsavedBadge()](#module_ui/theme.updateUnsavedBadge)
    * [.setThemeUnsaved(isUnsaved)](#module_ui/theme.setThemeUnsaved)
    * [.applyTheme(id, [customThemes])](#module_ui/theme.applyTheme)
    * [.populateThemeDropdown()](#module_ui/theme.populateThemeDropdown)
    * [.initThemeEngine()](#module_ui/theme.initThemeEngine)
    * [.initViewerTheme()](#module_ui/theme.initViewerTheme)
    * [.saveCustomTheme()](#module_ui/theme.saveCustomTheme)
    * [.deleteCustomTheme()](#module_ui/theme.deleteCustomTheme)



### ui/theme.normalizeHexColor(val, [fallback]) ⇒ <code>string</code>
Normalizes any hex/rgb color string into a valid 7-character #rrggbb string for HTML color inputs.

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  
**Returns**: <code>string</code> - 7-character lowercase hex string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| val | <code>string</code> |  | Color string to normalize. |
| [fallback] | <code>string</code> | <code>&quot;&#x27;#000000&#x27;&quot;</code> | Fallback hex if parsing fails. |



### ui/theme.getThemeColors(id, [customThemes]) ⇒ <code>Object.&lt;string, string&gt;</code>
Returns the color palette dictionary for a given theme identifier.

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  
**Returns**: <code>Object.&lt;string, string&gt;</code> - Mapping of CSS variable names to hex colors.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | Theme identifier. |
| [customThemes] | <code>Object</code> | <code></code> | Optional dictionary of custom themes. |



### ui/theme.getThemeDisplayName(id) ⇒ <code>string</code>
Returns human-readable display label for a theme ID.

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  
**Returns**: <code>string</code> - Human readable label.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Theme identifier. |



### ui/theme.updateColorPaletteInputs(themeId)
Synchronizes the Custom Color Palette inputs (<input type="color">) to match the specified theme.

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  

| Param | Type | Description |
| --- | --- | --- |
| themeId | <code>string</code> | Theme identifier to pull colors from. |



### ui/theme.updateDeleteThemeBtnVisibility()
Updates the visibility of the delete theme button (🗑️).
Visible only for user-saved custom themes that are currently saved (not unsaved / preset).

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  


### ui/theme.updateUnsavedBadge()
Updates the visibility of the (unsaved) badge next to Active Theme label.

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  


### ui/theme.setThemeUnsaved(isUnsaved)
Sets the theme unsaved state and refreshes dropdown / badges.

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  

| Param | Type | Description |
| --- | --- | --- |
| isUnsaved | <code>boolean</code> | Whether changes are currently unsaved. |



### ui/theme.applyTheme(id, [customThemes])
Applies a specific theme ID to the document body.
Handles standard light/dark modes, preset themes, and custom CSS variable-based themes.

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | The unique identifier of the theme to apply. |
| [customThemes] | <code>Object</code> | <code></code> | Optional dictionary of custom themes. |



### ui/theme.populateThemeDropdown()
Populates the theme selector dropdown with preset, custom user themes, and unsaved indicators.
Utilizes setSafeHTML and DOM nodes for AMO compliance.

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  


### ui/theme.initThemeEngine()
Initializes the theme engine by loading the active theme and custom themes from storage.
Synchronizes the internal state and triggers theme application and dropdown population.

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  


### ui/theme.initViewerTheme()
Initializes and synchronizes theme for the full-screen Data Manager (viewer.html).
Loads current theme from storage, applies it, and listens for live updates.

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  


### ui/theme.saveCustomTheme()
Saves current custom palette under a user-defined theme name.
Validates against empty names and reserved presets.

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  


### ui/theme.deleteCustomTheme()
Deletes the currently selected custom theme and reverts to default dark.

**Kind**: static method of [<code>ui/theme</code>](#module_ui/theme)  
