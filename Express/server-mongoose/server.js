const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const db = require('./config/db')
const Products = require('./routes/ProductRoute')
const Users = require('./routes/UserRoute')
const Orders = require('./routes/OrderRoute')
const Auth = require('./routes/AuthRoute')
app.get('/', (req, res) => res.status(200).json({ message: "Welcome" }))
app.use('/products', Products)
app.use('/users', Users)
app.use('/orders', Orders)
app.use('/auth', Auth)

app.listen(port, (() => console.log(`Listening on ${port}`)))
