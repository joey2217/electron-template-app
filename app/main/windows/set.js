const { BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const { getTheme } = require('../theme')

let win

function create() {
    win = new BrowserWindow({
        height: 500,
        width: 400,
        backgroundColor: '#fff',
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    if (isDev) {
        win.loadURL('http://localhost:3002')
    } else {
        win.loadFile(path.resolve(__dirname, '../../renderer/pages/main/index.html'))
    }
    win.on('ready-to-show', () => {
        setCurrentTheme()
    })
}

function send(channel, ...args) {
    win.webContents.send(channel, ...args)
}

function setCurrentTheme() {
    const theme = getTheme()
    send('current-theme', theme)
}

module.exports = { create, send, setCurrentTheme }
