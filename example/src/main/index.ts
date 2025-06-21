import { app } from 'electron';

const userDataPath = app.getPath("userData");
console.log(userDataPath);

getBrowserWindowRuntime().webContents.openDevTools();

app.on('browser-window-focus', () => {
  console.log('browser-window-focus');
});
