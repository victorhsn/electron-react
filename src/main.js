const {app, BrowserWindow} = require('electron');

let win;

app.on('ready', _ => {

  win = new BrowserWindow({
    width: 500,
    heigth: 500
  });

  win.loadURL(`file://${__dirname}/index.html`);
  
})
