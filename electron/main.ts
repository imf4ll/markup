import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import fs from 'fs';
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
        show: false,
    });

    ipcMain.handle('showOpenDialog', async () => {
        const file = await dialog.showOpenDialog(window, {
            properties: [
                'openFile'
            ],
            title: 'Choose the Markdown file',
            filters: [{
                name: 'Markdown file', extensions: ['md'],
            }]
        });

        return file.filePaths[0];
    });

    ipcMain.handle('showSaveDialog', async (_, ...args) => {
        let filePath = '';

        await dialog.showSaveDialog(window, {
            title: 'Save file',
            buttonLabel: 'Save',
        }).then((r: any) => {
            fs.writeFileSync(r.filePath, args[0]);
            filePath = r.filePath;

        });

        return filePath;
    });

    window.on('ready-to-show', () => window.show());
    window.removeMenu();
    window.loadURL("http://localhost:14968");
}

app.whenReady().then(() => createWindow());

app.on('window-all-closed', () =>
    platform !== 'darwin' &&
        app.quit()
);
