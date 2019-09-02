const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    user: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    date: {
        type: Date, default: Date.now
    },
})

module.exports = mongoose.model('User', schema);