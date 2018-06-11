import { join } from 'path';
import { spawn } from 'child_process';
const { app/* , Menu*/, Tray, BrowserWindow, ipcMain } = require('electron');
const DEV_MODE = process.env.NODE_ENV === 'development';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
// tslint:disable-next-line:no-any
let mainWindow: any;

ipcMain.on('dropFile', (event, path) => {
    const job = spawn('ffmpeg', ['-i', path, '-f', 'mp3', `${path}.mp3`]);

    job.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    job.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    job.on('close', code => {
        console.log(`child process exited with code ${code}`);
    });
});

// tslint:disable-next-line:only-arrow-functions
const createWindow = () => {
    const windowConfiguration = {
        autoHideMenuBar: true,
        // tslint:disable-next-line:no-magic-numbers
        width: 700,
        // tslint:disable-next-line:no-magic-numbers
        height: 500,
    };

    if (process.platform === 'win32') {
        // tslint:disable-next-line:no-magic-numbers
        windowConfiguration.width *= 1.5;
        // tslint:disable-next-line:no-magic-numbers
        windowConfiguration.height *= 1.5;
    }

    // Create the browser window.
    mainWindow = new BrowserWindow(windowConfiguration);

    const mainUrl = process.env.MAIN_APP_URL || join('file://', __dirname, '/index.html');

    console.log(`Loading: ${mainUrl}`);

    mainWindow.loadURL(mainUrl);

    if (DEV_MODE) {
        console.log('Enable DevTools');
        mainWindow.webContents.openDevTools({ detach: true });
    }

    // Open the DevTools.
    // mainWindow.webContents.openDevTools({ detach: true });

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        // tslint:disable-next-line:no-null-keyword
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    // if (process.platform !== 'darwin') {
    app.quit();
    // }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
