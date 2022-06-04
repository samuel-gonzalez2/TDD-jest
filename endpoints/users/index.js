const handlers = ({ axios }) => ({
    get: async (req, res) => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        res.send(data).status(200)
    }

    , post: async (req, res) => {
        const {body} = req
        const {data} = await axios.post('https://jsonplaceholder.typicode.com/users', body)
        res.send(data).status(201)
    }

    , put: async (req, res) => {
        const {body} = req
        const {id} = req.params
        await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body)
        res.sendStatus(204)
    }

    , delete: async (req, res) => {
        const {id} = req.params
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        res.sendStatus(204)
    }
})

module.exports = handlers