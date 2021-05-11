// https://github.com/sindresorhus/electron-store#readme
const Store = require('electron-store');

// https://ajv.js.org/json-type-definition.html#type-form
const schema = {
    token: {
        type: 'string',
    },
    auth: {
        type: 'boolean'
    },
    theme: {
        type: 'string',
        enum: ["system", "light", 'dark'],
    }
};

const store = new Store({ schema });

store.set("token", '')
// console.log(token);

module.exports = store

