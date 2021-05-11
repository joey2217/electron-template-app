const { BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const store = require('../store')
const { show: showLoginWindow } = require('./login')

let win
let willQuitApp = false

function create() {
  win = new BrowserWindow({
    width: 600,
    height: 300,
    darkTheme: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    show: false,
    backgroundColor: '#fff'
  })

  win.on('ready-to-show', () => {
    show()
  })

  // 窗口假关闭
  win.on('close', (e) => {
    if (willQuitApp) {
      win = null
    } else {
      e.preventDefault()
      win.hide()
    }
  })

  if (isDev) {
    win.loadURL('http://localhost:3000')
  } else {
    win.loadFile(path.resolve(__dirname, '../../renderer/pages/main/index.html'))
  }
}

function send(channel, ...args) {
  win.webContents.send(channel, ...args)
}

function show() {
  const auth = store.get('auth')
  if (auth) {
    win.show()
  } else {
    showLoginWindow()
  }
}

function close() {
  willQuitApp = true
  win.close()
}

module.exports = { create, send, show, close }