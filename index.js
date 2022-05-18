const express = require('express')
const axios = require('axios')
const parser = require('body-parser')
const app = express()
const port = 3000

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

app.get('/', async (req, res) => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    res.send(data)
})

app.post("/", async (req, res) => {
    const {data} = await axios.post('https://jsonplaceholder.typicode.com/users')
    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})