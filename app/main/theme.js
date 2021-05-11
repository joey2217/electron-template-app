const { nativeTheme } = require('electron')
const store = require('./store')

function changeTheme(theme) {
    nativeTheme.themeSource = theme
    store.set('theme', theme)
}

function getTheme() {
    return store.get('theme') || 'system'
}

function setTheme() {
    const theme = getTheme()
    changeTheme(theme)
}

module.exports = {
    changeTheme,
    getTheme,
    setTheme,
}