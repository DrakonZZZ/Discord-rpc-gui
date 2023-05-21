const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // resizable: false,
  });
  // win.setMenuBarVisibility(false);
  win.loadFile('index.html');
};

app
  .whenReady()
  .then(() => {
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow;
    });
    console.log('logged in');
  })
  .catch((error) => console.error());

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
  console.log('logged out');
});
