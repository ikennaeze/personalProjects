const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const userSchema = new Schema({
    full_name: String,
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: String
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel