const mongoose = require('mongoose')
const uri = 'mongodb+srv://pylypanda:parol1233214@cluster0-csnvf.mongodb.net/starchess?retryWrites=true&w=majority'

mongoose
    .connect(uri, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
