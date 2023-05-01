const { app, BrowserWindow } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      preload: '',
      nodeIntegration: true,
    },
    resizable: false,
  });
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, 'src', 'index.html'));
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
