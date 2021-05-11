const axios = require('axios')

const request = axios.create({
    baseURL: 'https://react-antd-admin-green.vercel.app/api'
})

function checkToken() {
    return request({
        url: "/user/user-info",
        method: 'GET',
    })
}

module.exports = {
    checkToken
}