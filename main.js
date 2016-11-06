const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object
let win = null;

app.on('ready', () => {
  win = new BrowserWindow({
    width: 500,
    height: 500
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:',
    slashes: true
  }));
});
