// FRAMEWORK
const express = require('express')
const fs = require("fs")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const data = [
    {id: 1, name: "Chuột", price: 100},
    {id: 2, name: "Bàn phím", price: 200},
    {id: 3, name: "Màn hình", price: 500},
]

// Routings
app.get('/', (req, res) => {
    // __dirname, __filename
    // require
    const html = fs.readFileSync(path.join(__dirname, "home.html"), "utf-8")
    res.send(html)
})
// Routings
app.get('/products', (req, res) => {
    res.send(data)
})

app.post('/products', (req, res) => {
    // console.log(req, "create product");
    const newData = req.body
    data.push(newData)
    res.send(data)
})
// Routings
// Get product by ID
app.get('/products/:id', (req, res) => {
    const id = req.params.id
    const product = data.find((item) => item.id == id)
    if (product) {
        res.send(product)
    } else {
        res.status(400).send("San pham khong ton tai!")
    }
})

app.get('/product/add', (req, res) => {
    const html = fs.readFileSync(path.join(__dirname, "product-add.html"), "utf-8")
    res.send(html)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})