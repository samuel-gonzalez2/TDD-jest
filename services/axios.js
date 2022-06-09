const axios = require('axios');
const instance = axios.default({
    baseURL: 'http://localhost:3000',
})

module.exports = instance