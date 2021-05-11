const { app, Menu, Tray } = require('electron')
const path = require('path')
const { show: showMainWindow } = require('../windows/main')
const { create: createAboutWindow } = require('../windows/about')
const { create: createSetWindow } = require('../windows/set')

// 托盘
let tray
function setTray() {
  tray = new Tray(path.resolve(__dirname, './icon_darwin.png'))
  tray.on('click', () => {
    showMainWindow()
  })
  tray.on('right-click', () => {
    const contextMenu = Menu.buildFromTemplate([
      { label: '显示', click: showMainWindow },
      { label: '退出', click: app.quit },
    ])

    tray.popUpContextMenu(contextMenu)
  })
}

// 菜单
function setAppMenu() {
  let appMenu = Menu.buildFromTemplate([
    {
      label: app.name,
      submenu: [
        {
          label: 'About',
          click: createAboutWindow
        },
        {
          label: 'Setting',
          click: createSetWindow
        },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ],

    },
    { role: 'fileMenu' },
    { role: 'windowMenu' },
    { role: 'editMenu' }
  ]);
  app.applicationMenu = appMenu;
}

app.whenReady().then(() => {
  setTray()
  setAppMenu()
})