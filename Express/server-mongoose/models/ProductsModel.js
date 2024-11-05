const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    title: { // Property/Filed title
        type: String, // Data type of the Property
        required: true // Nullable(false) or NotNullable(true) 
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        // unique:true
    },
})

const Products = mongoose.model("Products", ProductsSchema)

module.exports = Products



// name: string :required
// email: string: required : unique
// phone: number: required : unique
// address: string 