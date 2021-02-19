const { Notification } = require ('electron')

function doNotify(){
    new Notification('Title', {
        body: 'Notification from the Renderer process'
    }).show();
     
 }
 