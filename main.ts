import { app, BrowserWindow } from 'electron';
import { platform } from 'process';

const createWindow = () => {
    const window = new BrowserWindow({
        width: 900,
        height: 560,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
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
