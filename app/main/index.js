const { app } = require('electron')
const handleIPC = require('./ipc')
const isDev = require('electron-is-dev')
const { create: createMainWindow, show: showMainWindow, close: closeMainWindow } = require('./windows/main')
const { create: createLoginWindow,close:closeLoginWindow } = require('./windows/login')
const store = require('./store')
const {setTheme} = require('./theme')
const { checkToken } = require('./api/user')

if (require('electron-squirrel-startup')) app.quit() // window 更新
const single = app.requestSingleInstanceLock()
if (!single) {
  app.quit()
} else {
  app.on("second-instance", () => {
    // 禁止多开
    showMainWindow()
  })
  app.on('will-finish-launching', () => {
    if (!isDev) {
      require('./updater.js') //更新服务
    }
    require('./crash-reporter').init() // 崩溃监控
    // 验证token
    const token = store.get("token")
    console.log('token',token);
    if (token) {
      checkToken(token).then(res => {
        console.log('res');
        store.set('auth', true)
      }).catch(err => {
        console.error('err');
        store.set('auth', false)
      })
    } else {
      store.set('auth', false)
    }
  })
  app.on('ready', () => {
    createMainWindow()
    createLoginWindow()
    setTheme() //设置主题
    handleIPC()
    require('./trayAndMenu')
  })

  app.on('before-quit', () => {
    closeMainWindow()
    closeLoginWindow()
  })

  app.on('activate', () => {
    showMainWindow()
  })
}
