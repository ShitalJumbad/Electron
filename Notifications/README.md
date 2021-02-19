Notifications

*************************************************************************************
  notification doesnt work n windows 10 even followed exact steps of https://www.electronjs.org/docs/tutorial/notifications
  
   Windows, there's an issue with the Electron Notification module on Windows builds 1709 and later. The most accepted work-around is to use a builder module such as Electron-Builder, and then go through some set-up steps to create your installer. You'll need to create a "build" object in your package.json file with the property "appId" set to 'com.electron.Your-App-Name-Here'. Once you've done that, add this line to your main.js file: app.setAppUserModelId('com.electron.Your-App-Name-Here'). You'll need to replace "Your-App-Name-Here" with the actual name of your app from the package.json file. The only thing left to do is deploy your app as an installer. Follow instructions on how to do that based on the builder you selected. For instance, if you used Electron-Builder, you'd type 'yarn dist', which would create the installer's "dist" folder in your app's root directory. Install the app, then watch your notifications work. (https://coursetro.com/courses/22/Creating-Desktop-Apps-with-Electron-Tutorial/lessons/7)
   
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
   e. Move this ,
    "electron-builder": "^22.9.1"
    from dependencies to dev-dependencies
   f. Install yarn 
        npm install -g yarn
   g. Just enter yarn dist to build it 
        yarn dist
