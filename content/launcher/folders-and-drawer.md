---

<div style="display: flex; gap: 1.5rem; justify-content: center; margin: 1.5rem 0; flex-wrap: wrap;">
  <div style="text-align: center; max-width: 280px;">
    <img src="https://cdn.iamrp.dev/recordings/demo_drawer_swipe.gif" alt="App Drawer Swipe" style="border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.5); width: 100%;" />
    <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Swipe-up indexed app drawer</p>
  </div>
  <div style="text-align: center; max-width: 280px;">
    <img src="https://cdn.iamrp.dev/screenshots/launcher_folders.png" alt="Nested Folders" style="border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.5); width: 100%;" />
    <p style="font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">Nested folder management &amp; naming</p>
  </div>
</div>

title: "Folders & App Drawer"
description: "Master nested subfolders and custom drawer category icons in RPDev Launcher."
---

# 📁 Folders & App Drawer

Keep your device neat and tidy. RPDev Launcher includes two standout organization features: **Nested Folders** and **Custom Drawer Folder Icons**.

---

## 🗂️ 1. Recursive Nested Folders

Have you ever wanted to organize your "Games" folder into "Action", "Puzzles", and "Retro"? RPDev Launcher lets you put folders inside folders!

<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Create the First Folder</h4>
      <p>Drag an app onto another app on your home screen. A new folder is created.</p>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Drag Another Folder Inside</h4>
      <p>Simply drag another existing folder directly onto or inside your parent folder! The subfolder will open as a smooth sub-window.</p>
    </div>
  </div>

  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Automatic Loop Protection</h4>
      <p>Don't worry about accidentally dragging Folder A into Folder B and then Folder B into Folder A. RPDev Launcher's built-in <code>wouldCreateCycle</code> cycle detection prevents infinite loops automatically.</p>
    </div>
  </div>
</div>

---

## 🎨 2. Custom Drawer Category Icons

In the App Drawer, you can organize your apps into custom tabs or categories (such as *Work*, *Social*, *Tools*, or *Finance*).

### How to change a category icon:
1. Open your **App Drawer** by swiping up from the home screen.
2. Long-press on the folder or category tab you want to customize.
3. Tap **Customize Folder** in the pop-up menu.
4. A bottom sheet appears showing an icon picker.
5. Pick your favorite icon from your installed icon packs or system icons.
6. Tap **Save**. Your choice is instantly saved!

<details class="tech-spec">
  <summary>🛠️ Technical Specifications (For Developers)</summary>
  <div class="tech-content">
    <p><strong>Storage File:</strong> <code>/data/data/iamrp.dev.launcher/files/drawer_folder_customizations.json</code></p>
    <p><strong>Model:</strong> <code>CustomizeFolderSheet.kt</code> serializes customized folder metadata into JSON:</p>
    <pre><code class="language-json">{
  "folderId": 142,
  "displayName": "Developer Tools",
  "customIconPackage": "com.example.iconpack",
  "customIconResource": "ic_terminal",
  "accentColorHex": "#ffb870"
}</code></pre>
  </div>
</details>
