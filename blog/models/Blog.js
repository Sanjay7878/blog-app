const mongoose = require('mongoose')
const Schema = mongoose.Schema

let BlogDetails = new Schema(
    {
        blogId:{
            type: String,
            unique: true
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        bodyHtml: {
            type: String,
            default: ''
        },
        views:{
            type: Number,
            default: 0
        },
        tags: [],
        author: {
            type: String,
            default: ''
        },
        category: {
            type: String,
            default: ''
        },
        createdOn:{
            type: Date,
            default: Date.now()
        },
        modifiedOn: {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model('Blog', BlogDetails)