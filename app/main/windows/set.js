const { BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let win


function create() {
    win = new BrowserWindow({
        height: 500,
        width: 400,
        backgroundColor: '#ccc'
    })
    if (isDev) {
        win.loadURL('http://localhost:3001')
    }else{
        win.loadFile(path.resolve(__dirname, '../../renderer/pages/main/index.html'))
    }
}

module.exports = { create }
