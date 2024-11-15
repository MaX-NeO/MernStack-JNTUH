const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    pid: {
        type: String,
        required: true,
    },
    total: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
})

const Orders = mongoose.model("Orders", OrdersSchema)

module.exports = Orders



