# Electron

1. Import Electron Forge to your app folder:
npx @electron-forge/cli import
2. Create a distributable:
  npm run make
3.Electron-forge creates the out folder where your package will be located:

  // Example for MacOS
  out/
  ├── out/make/zip/darwin/x64/my-electron-app-darwin-x64-1.0.0.zip
  ├── ...
  └── out/my-electron-app-darwin-x64/my-electron-app.app/Contents/MacOS/my-electron-app
  
4. os-utils
  a. npm install os-utils
  
********************************************************
if do ' npm run make', your app will be packaged into executable file on your current machine platform.
app.exe file for windows looks good but for the installer, 
it's one click installer which immediately without any conmfirmation window or allow users to change the install pack.

So instead another package called electron builder ( npm install electron-builder)
1. add "build-installer": "electron-builder" to your scripts (package.json)
2. add build as following in package.json
  "build": {
    "appId": "electronApp",
    "win": {
      "target": ["nsis"],
      "icon":"./src/icon/icon.png"
    },
    "nsis": {
      "installerIcon": "./src/icon/icon.png",
      "uninstallerIcon": "./src/icon/icon.png",
      "uninstallDisplayName": "CPU Monitoring"
      "license": "license.txt"
      "oneClick": false,
      "allowToChangeInstallationDirectory": true
    }
  },
  
  
  
    
  
  
  
