const express = require('express')
const cors = require('cors')
const path = require('path')


const routes = require('./routes')
const db = require('../database/database')

const app = express()
const port = 3333
const uri = 'https://localhost:'


app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'assets', 'images')))
app.use(routes)
app.listen(3333, () => {
    console.log(`You are good to go! 👍 ⤵\nAccess: ${uri}${port}`);
})