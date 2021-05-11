const { BrowserWindow, app } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let win

function create() {
    win = new BrowserWindow({
        height: 500,
        width: 400,
        backgroundColor: '#fff',
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    if (isDev) {
        win.loadURL('http://localhost:3001')
    } else {
        win.loadFile(path.resolve(__dirname, '../../renderer/pages/login/index.html'))
    }
    win.on('close', () => {
        app.quit()
        win = null
    })
}

function show() {
    win.show()
}

function close() {
    win.hide()
}

module.exports = { create, show, close }
