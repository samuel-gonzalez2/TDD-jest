const axios = require('axios')

const handlers = {
    get: async (req, res) => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        res.send(data).status(200)
    }

    , post: function () {

    }

    , put: function () {

    }

    , delete: function () {

    }
}

module.exports = handlers