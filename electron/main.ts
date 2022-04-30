import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import { platform } from 'process';
import fs from 'fs';

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1000,
        height: 700,
        minWidth: 700,
        minHeight: 500,
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

    ipcMain.handle('setTitle', async(_, ...args) => window.setTitle(args[0]));

    window.on('ready-to-show', () => window.show());
    window.removeMenu();

    if (app.isPackaged) {
        window.loadURL(`file://${ __dirname }/../index.html`);

    } else {
        window.loadURL("http://localhost:14968");
        
    }
}

app.whenReady().then(() => createWindow());

app.on('window-all-closed', () =>
    platform !== 'darwin' &&
        app.quit()
);
