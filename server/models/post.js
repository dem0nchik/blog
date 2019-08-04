const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String, required: true
    },
    date: {
        type: Date, default: Date.now
    },
    views: {
        type: Number, default: 0
    },
    mainImg: {
        type: String, default: ''
    },
    body: [{
        title: {
            type: String, default: ''
        },
        text: {
            type: Array, default: []
        },
        img: {
            type: Array, default: []
        }
    }]
})

module.exports = mongoose.model('Post', schema);