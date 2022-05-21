const mongoose = require('mongoose')

const User = mongoose.model('User', {
    userName: String,
    email: String,
    password: String,
    created_at: Date,
    updated_at: Date,
})

export { User }
