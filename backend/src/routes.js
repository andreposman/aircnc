const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')



const routes = express.Router()
const upload = multer(uploadConfig)

/*
req.query = access query params (for filters)
req.params = access route params (PUT, DELETE)
req.body = access the body of the requisition (POST, PUT)
*/

//#region Session/Users
routes.get('/users', SessionController.show)
routes.get('/users/all', SessionController.showAll)  //! FIX 
routes.post('/users', SessionController.store)
routes.delete('/users', SessionController.delete)
//#endregion

//#region Dashboard
routes.get('/dashboards', DashboardController.show)
//#endregion

//#region Spot
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.delete('/spots', SpotController.delete)
routes.get('/spots', SpotController.index)
routes.get('/spots/id', SpotController.show) //! FIX 

//#endregion

//#region Booking
// nested route
routes.post('/spots/:spot_id/bookings', BookingController.store)
//#endregion


module.exports = routes