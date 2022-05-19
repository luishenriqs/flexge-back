const mongoose = require('mongoose')

const Contract = mongoose.model('Contract', {
    country: String,
    state: String,
    city: String,
    documentNumber: Number,
    socialReason: String,
    address: String,
    district: String,
    number: Number,
    zipCode: String,
    email: String,
    phone: Number,
    startsIn: Date,
    endsIn: Date,
    dueDay: Date,
    company: String,
})

export { Contract }
