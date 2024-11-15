const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://maxneodev:1811321@in-aws.6mvyl.mongodb.net/storedb?retryWrites=true&w=majority&appName=In-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')