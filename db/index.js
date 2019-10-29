const mongoose = require('mongoose')

mongoose
    .connect('mongodb://heroku_2w3s0839:j2dfok4802tnf765ehtrt2ojet@ds141168.mlab.com:41168/heroku_2w3s0839', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
