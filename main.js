const electron = require('electron');
const fs = require('fs');
const { app, BrowserWindow, Tray } = require('electron');

const devilImages = fs.readdirSync('./images/devils');


const createWindow = () => {
    const miniIconPath = './images/Lucifer_mini.png';
    const appIcon = new Tray(miniIconPath)
    let win = new BrowserWindow({
        width: 150,
        height: 150,
        icon: miniIconPath,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
};

app.whenReady().then(createWindow);


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});