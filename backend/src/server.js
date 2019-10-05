const express = require('express')
const routes = require('./routes')
const db = require('../database/database')

const app = express()
const port = 3333
const uri = 'https://localhost:'


app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log(`You are good to go! 👍 ⤵\nAccess: ${uri}${port}`);
})