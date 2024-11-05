const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const db = require('./config/db')
const Products = require('./routes/ProductRoute')
app.get('/', (req, res) => res.status(200).json({ message: "Welcome" }))
app.use('/products', Products)
app.listen(port, (() => console.log(`Listening on ${port}`)))
