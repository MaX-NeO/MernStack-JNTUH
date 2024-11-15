const express = require('express')
const router = express.Router();
const Orders = require('../models/OrdersModel')
const { validateToken, validateTokenAdmin } = require('../config/auth')

router.get('/count', validateTokenAdmin, async (req, res) => {
    try {
        const count = await Orders.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.get('/all', validateTokenAdmin, async (req, res) => {
    try {
        const orders = await Orders.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/add', validateToken, async (req, res) => {
    try {
        const neworder = new Orders(req.body)
        const { uid, pid, phone, address, total } = neworder
        if (!uid || !pid || !phone || !address || !total) {
            res.status(400).json({ message: "All fields required" })
        }
        //TODO : Add User & Product Validation 
        await neworder.save()
        res.status(200).json(neworder)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', validateTokenAdmin, async (req, res) => {
    try {
        const id = req.params.id
        const existingorder = await Orders.findOne({ _id: id })
        if (!existingorder) {
            res.status(404).json({ message: "Order not found" })
        }
        const updatedorder = await Orders.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updatedorder)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', validateTokenAdmin, async (req, res) => {
    try {
        const id = req.params.id
        const existingorder = await Orders.findOne({ _id: id })
        if (!existingorder) {
            res.status(404).json({ message: "Order not found" })
        }
        await Orders.findByIdAndDelete(id)
        res.status(200).json({ message: "Order Deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router
