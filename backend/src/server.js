const express = require('express')
const routes = require('./routes')
const db = require('../database/database')

const app = express()
app.use(express.json())
app.use(routes)

app.listen(3333)