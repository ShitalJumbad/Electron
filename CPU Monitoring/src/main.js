const { app, BrowserWindow } = require('electron')

const os = require('os-utils')



function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './src/icon/icon.png',
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('./src/index.html')

  setInterval(() => { 
    os.cpuUsage(function(v){
      win.webContents.send('cpu',v*100);
      win.webContents.send('mem', os.freememPercentage()*100);
      win.webContents.send('total', os.totalmem()/1024)
    })
  }, 1000);

  
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
