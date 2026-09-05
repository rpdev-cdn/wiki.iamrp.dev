---
title: "Nested Folders: Implementation & Code Examples"
description: "Comprehensive code walkthrough of cycle detection, recursive persistence, and preview rendering for nested folders."
---

# Nested Folders: Implementation & Code Examples

RPDev Launcher supports arbitrary folder-in-folder nesting while ensuring zero infinite loops, zero orphaned database records, and crystal-clear micro-previews.

---

## 1. Cycle Detection in `FolderInfo.java`

Before any folder can accept an item dragged onto it, it performs an exhaustive graph cycle check:

```java
// File: src/com/android/launcher3/model/data/FolderInfo.java

/**
 * Traverses child hierarchy to ensure 'child' does not contain 'this' folder anywhere
 * in its recursive subtree. Prevents circular references.
 */
public boolean wouldCreateCycle(FolderInfo child) {
    if (child == null || child == this || child.id == this.id) {
        return true;
    }
    for (ItemInfo item : child.contents) {
        if (item instanceof FolderInfo sub) {
            if (sub == this || sub.id == this.id || wouldCreateCycle(sub)) {
                return true;
            }
        }
    }
    return false;
}
```

---

## 2. Drop Acceptance Guard in `Folder.java`

When an item is hovered over an open or closed folder, `Folder.java` verifies the item type and calls the cycle guard:

```java
// File: src/com/android/launcher3/folder/Folder.java

public boolean acceptDrop(DragObject d) {
    final ItemInfo item = d.dragInfo;
    if (item instanceof FolderInfo subfolder) {
        // Prevent adding folder to itself or creating circular tree loops
        if (mInfo.wouldCreateCycle(subfolder)) {
            return false;
        }
    }
    return willAcceptItemType(item.itemType);
}
```

---

## 3. Subfolder Preview Compositing in `PreviewItemManager.java`

To display subfolders inside an outer folder's preview grid without blurring:

```java
// File: src/com/android/launcher3/folder/PreviewItemManager.java

public void onParamsChanged() {
    for (int i = 0; i < mIcon.getPreviewItems().size(); i++) {
        View v = mIcon.getPreviewItems().get(i);
        if (v.getTag() instanceof FolderInfo subfolder) {
            // Retrieve high-resolution cached icons for subfolder items
            for (ItemInfo child : subfolder.contents) {
                if (child instanceof WorkspaceItemInfo appItem) {
                    mIcon.verifyHighRes(appItem);
                }
            }
        }
    }
}
```

---

## 4. SQLite Persistence in `LoaderCursor.java`

Folders are stored with relational parent pointers:

```sql
SELECT _id, container, itemType, rank, title FROM favorites 
WHERE container = 142 ORDER BY rank ASC;
```

`WorkspaceItemProcessor.kt` loads parent containers first, sorting by depth so that top-level folders exist in memory before subfolders are populated.
