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
  
  
  *************************************************************************************
  notification doesnt work n windows 10 even followed exact steps of https://www.electronjs.org/docs/tutorial/notifications
  
   Windows, there's an issue with the Electron Notification module on Windows builds 1709 and later. The most accepted work-around is to use a builder module such as Electron-Builder, and then go through some set-up steps to create your installer. You'll need to create a "build" object in your package.json file with the property "appId" set to 'com.electron.Your-App-Name-Here'. Once you've done that, add this line to your main.js file: app.setAppUserModelId('com.electron.Your-App-Name-Here'). You'll need to replace "Your-App-Name-Here" with the actual name of your app from the package.json file. The only thing left to do is deploy your app as an installer. Follow instructions on how to do that based on the builder you selected. For instance, if you used Electron-Builder, you'd type 'yarn dist', which would create the installer's "dist" folder in your app's root directory. Install the app, then watch your notifications work. 
   
   a.  install electron builder
        npm i electron-builder
   b. add this to your script
        "scripts": {
        "start": "electron-forge start",
        "package": "electron-forge package",
        "make": "electron-forge make",
        "pack": "electron-builder --dir",
        "dist": "electron-builder",
        "postinstall": "electron-builder install-app-deps"
      },
   c. add build to package.json
        "build": {
          "appId": "com.electron.<your_project_name>"
        },
        
   d. Add this to your main.js/index.js file (before create window is called)
        app.setAppUserModelId('com.electron.notifications')
   e. Install yarn 
        npm install -g yarn
   f. Just enter yarn dist to build it 
        yarn dist
    
  
  
  
