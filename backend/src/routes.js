const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')


const routes = express.Router()
const upload = multer(uploadConfig)

/*
req.query = access query params (for filters)
req.params = access route params (PUT, DELETE)
req.body = access the body of the requisition (POST, PUT)
*/

routes.post('/users', SessionController.store)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)

module.exports = routes