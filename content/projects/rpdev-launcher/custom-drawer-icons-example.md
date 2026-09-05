---
title: "Custom Drawer Folder Icons: Implementation & JSON Persistence"
description: "Code walkthrough of CustomizeFolderSheet.kt, EditGroupBottomSheet.kt, and JSON persistence."
---

# Custom Drawer Folder Icons: Implementation & JSON Persistence

RPDev Launcher extends AOSP drawer groupings by allowing users to assign custom icons and colors to folders in the App Drawer.

---

## 1. Bottom Sheet Controller (`CustomizeFolderSheet.kt`)

Long-pressing a folder in the all-apps drawer triggers the customization sheet:

```kotlin
// File: Omega/src/iamrp/dev/launcher/folder/CustomizeFolderSheet.kt

class CustomizeFolderSheet(context: Context, attrs: AttributeSet?) :
    AbstractFloatingView(context, attrs) {

    fun bind(folderInfo: FolderInfo) {
        val currentTitle = folderInfo.title.toString()
        titleEditText.setText(currentTitle)

        // Bind icon pack picker button
        iconPickerButton.setOnClickListener {
            val intent = Intent(context, IconPickerActivity::class.java)
            intent.putExtra(EXTRA_FOLDER_ID, folderInfo.id)
            launcher.startActivityForResult(intent, REQUEST_PICK_ICON)
        }

        // Save on confirmation
        saveButton.setOnClickListener {
            saveFolderCustomizations(folderInfo.id, titleEditText.text.toString())
            close(true)
        }
    }
}
```

---

## 2. JSON Serialization Engine

Customizations are stored in a dedicated JSON file within the launcher's protected app directory (`files/folder_customizations.json`):

```json
{
  "version": 1,
  "customizations": {
    "104": {
      "custom_label": "Media & Streaming",
      "icon_type": "PACKAGE_DRAWABLE",
      "package_name": "com.theme.lawnicons",
      "drawable_name": "ic_play_circle",
      "tint_override": "#4ddad7"
    }
  }
}
```

This prevents altering standard Android SQLite schema definitions while enabling instant export, import, and cloud-free backups.
