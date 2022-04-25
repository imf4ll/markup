const { app, BrowserWindow } = require('electron');
const { platform } = require('process');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
        transparent: true,
        title: 'MarkUp',
        icon: "./assets/icon.png",
    });

    window.removeMenu();
    window.loadURL("http://localhost:3000");
}

app
    .whenReady().then(() => {
        createWindow();

    });

app
    .on('window-all-closed', () => {
        platform !== 'darwin' &&
            app.quit()

    });
