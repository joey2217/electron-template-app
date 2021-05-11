const { ipcMain } = require('electron')
const { show: showMainWindow } = require('./windows/main')
const { create: createSetWindow } = require('./windows/set')
const { close: closeLoginWindow } = require('./windows/login')
const store = require('./store')
const { changeTheme } = require('./theme')

module.exports = function () {
  // 登录
  ipcMain.handle('login-success', (e, { token }) => {
    console.log('login-success', token);
    store.set('token', token)
    store.set('auth', true)
    closeLoginWindow()
    showMainWindow()
  })

  // 暗黑模式
  ipcMain.handle('dark-mode:toggle', (e, theme) => {
    console.log('theme', theme);
    changeTheme(theme)
    // if (theme === 'system') {
    //   nativeTheme.themeSource = 'system'
    // } else {
    //   if (nativeTheme.shouldUseDarkColors) {
    //     nativeTheme.themeSource = 'light'
    //   } else {
    //     nativeTheme.themeSource = 'dark'
    //   }
    //   return nativeTheme.shouldUseDarkColors
    // }
  })


  ipcMain.handle('message', (e, a, b, c) => {
    console.log('on message', a, b, c);
    sendMainWindow('reply', 'Received')
  })

  ipcMain.on('reply', msg => {
    console.log('on reply', msg);
  })

  ipcMain.handle('open-set-window', e => {
    console.log('open-set-window');
    createSetWindow()
  })
}