const express = require('express')
const router = express.Router();
const Products = require('../models/ProductsModel')


router.get('/all',async(req,res)=>{
    try {
        const products = await Products.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error})        
    }
})


module.export = router

// 1.GET
// 2.POST
// 3.PUT
// 4.DELETE

// 1.READ
// 2.CREATE
// 3.UPDATE
// 4.DELETE