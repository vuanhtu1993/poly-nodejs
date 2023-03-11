// const express = require('express')
import express from 'express'
// const productRouter = require('./routers/product')
import productRouter from './routers/product.js'

const app = express()


app.get('/', (req, res) => {
    res.send("<h1>Hello world</h1>")
    res.end()
})
// Router
app.use('/api', productRouter)

app.listen(8000, () => {
    console.log("Server running on port 8000");
})