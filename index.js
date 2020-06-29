const electron = require('electron');
const fs = require('fs');
const { app, BrowserWindow, Tray } = require('electron');

const devilImages = fs.readdirSync('./images/devils');


const createWindow = () => {
    const miniIconPath = './images/Lucifer_mini.png';
    const appIcon = new Tray(miniIconPath)
    let win = new BrowserWindow({
        width: 156,
        height: 183,
        icon: miniIconPath,
        // frame: false,
        // transparent: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
};

app.whenReady().then(createWindow);