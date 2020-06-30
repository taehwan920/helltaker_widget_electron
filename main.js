'use strict';
const electron = require('electron');
const fs = require('fs');
const { app, BrowserWindow, Tray, Menu } = require('electron');

const miniIconPath = './resources/app/images/Lucifer_mini.png';
let tray = null;

const createWindow = () => {
    let win = new BrowserWindow({
        width: 150,
        height: 150,
        icon: miniIconPath,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        skipTaskbar: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('./resources/app/index.html')
};

app.whenReady().then(createWindow);

app.on('ready', () => {
    tray = new Tray(miniIconPath);
    const ctxMenu = Menu.buildFromTemplate([
        { label: `또 봐!`, type: 'normal', role: 'quit' },
    ]);
    tray.setContextMenu(ctxMenu);
});

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