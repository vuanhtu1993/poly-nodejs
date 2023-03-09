const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

// app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const products = [
    { id: 1, name: "iphone14", price: 1500 },
    { id: 2, name: "iphone13", price: 1000 }
]

app.get('/', (req, res) => {
    const html = fs.readFileSync(path.join(__dirname, "home.html"), "utf8")
    res.send(html)
})

app.get('/api/products', (req, res) => {
    res.send(products)
})

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id
    const product = products.find((item) => item.id == id)
    if (product) {
        res.send(product)
    } else {
        res.status(400).send("San phan khong ton tai")
    }
})

app.post('/api/products', (req, res) => {
    const body = req.body
    res.send(body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})