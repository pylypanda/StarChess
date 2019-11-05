const mongoose = require('mongoose')
const Schema = mongoose.Schema

const News = new Schema(
    {
        img: { type: String, required: true },
        title: { type: String, required: true },
        author: { type: String, required: true },
        link: { type: String, required: true },
        article: { type: String, required: true },
        date: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = mongoose.model('news', News)
