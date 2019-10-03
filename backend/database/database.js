const mongoose = require('mongoose')

const dbuser = 'andreposman'
const pwd = 'abc%40123' //abc@123 => abc%40123

mongoose.connect(`mongodb://${dbuser}:${pwd}@ds355357.mlab.com:55357/posman`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose