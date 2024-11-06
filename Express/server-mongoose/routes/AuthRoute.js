const express = require('express')
const router = express.Router();
const Users = require('../models/UsersModel')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
    try {
        // const newuser = new Users(req.body)
        const { name, email, phone, password } = req.body
        if (!name || !email || !phone || !password) {
            return res.status(401).json({ message: "All fields required" })
        }

        //TODO : Add User Email & Phone Validation

        //Email
        const exisitingemail = await Users.findOne({email})
        if(exisitingemail) {
            return res.status(500).json({ message: `User with ${email} already exists !` })
        }

        //Phone
        const exisitingphone = await Users.findOne({phone})
        if(exisitingphone) {
            return res.status(500).json({ message: `User with ${phone} already exists !` })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)
        const newuser = new Users({
            name,
            email,
            phone,
            password: hashedpassword
        })
        await newuser.save()
        return res.status(200).json(newuser)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.post('/login', async (req, res) => {
    try {
        // const newuser = new Users(req.body)
        const {  email, password } = req.body
        if (!email || !password) {
            return res.status(401).json({ message: "All fields required" })
        }

        //TODO : Add User Email & Phone Validation

        //Email
        const user = await Users.findOne({email})
        if(!user) {
            return res.status(500).json({ message: `Invalid Email` })
        }
        const checkpassword = await bcrypt.compare(password,user.password)
        if(!checkpassword){
            return res.status(500).json({ message: `Invalid Password` })
        }
        


        return res.status(200).json({ message: "login success" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

module.exports = router