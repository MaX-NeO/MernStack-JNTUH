const express = require('express')
const router = express.Router();
const Users = require('../models/UsersModel')

router.get('/all', async (req, res) => {
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/add', async (req, res) => {
    try {
        const newuser = new Users(req.body)
        const { name, email, phone, password } = newuser
        if (!name || !email || !phone || !password) {
            res.send(401).json({ message: "All fields required" })
        }

        //TODO : Add User Email & Phone Validation
        // const EmailCheck = await Users.findOne({ email: email })
        // if (EmailCheck) {
        //     res.send(500).json({ message: `User with ${email} already exists !` })
        // }
        await newuser.save()
        res.status(200).json(newuser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existinguser = await Users.findOne({ _id: id })
        if (!existinguser) {
            res.send(404).json({ message: "User not found" })
        }
        const updateduser = await Users.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updateduser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const existinguser = await Users.findOne({ _id: id })
        if (!existinguser) {
            res.send(404).json({ message: "User not found" })
        }
        await Users.findByIdAndDelete(id)
        res.status(200).json({ message: "User Deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router
