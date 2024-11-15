const express = require('express')
const router = express.Router();
const Products = require('../models/ProductsModel')
const { validateTokenAdmin } = require('../config/auth')
router.get('/count', validateTokenAdmin, async (req, res) => {
    try {
        const count = await Products.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})
// Method : GET  || API : localhost:3000/products/all
router.get('/all', async (req, res) => {
    try {
        const products = await Products.find()
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : POST  || API : localhost:3000/products/add
router.post('/add', validateTokenAdmin, async (req, res) => {
    try {
        const newproduct = new Products(req.body)
        const { title, img, price } = newproduct
        if (!title || !img || !price) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newproduct.save()
        return res.status(200).json(newproduct)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : PUT  || API : localhost:3000/products/edit/_id
router.put('/edit/:id', validateTokenAdmin, async (req, res) => {
    try {
        const id = req.params.id
        const existingproduct = await Products.findOne({ _id: id })
        if (!existingproduct) {
            return res.status(404).json({ message: "Product not found" })
        }
        const updatedproduct = await Products.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedproduct)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : DELETE  || API : localhost:3000/products/delete/_id
router.delete('/delete/:id', validateTokenAdmin, async (req, res) => {
    try {
        const id = req.params.id
        const existingproduct = await Products.findOne({ _id: id })
        if (!existingproduct) {
            res.status(404).json({ message: "Product not found" })
        }
        await Products.findByIdAndDelete(id)
        return res.status(200).json({ message: "Product Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router

// 1.GET
// 2.POST
// 3.PUT
// 4.DELETE

// 1.READ
// 2.CREATE
// 3.UPDATE
// 4.DELETE


// 200 -> OK
// 404 -> NOT FOUND
// 500 -> INTERNAL SERVER ERROR
// 201 -> CREATED
// 400 -> BAD Request
// 401 -> UnAuthorized
// 409 -> Conflict