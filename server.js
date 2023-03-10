const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const books = [
    {id: 1, name: "Book 1", price: 100},
    {id: 2, name: "Book 2", price: 100},
    {id: 3, name: "Book 3", price: 100},
]

app.get('/', (req, res) => {
    res.end("Successfully")
})

app.get('/products', (req, res) => {
    res.send(books)
    res.end()
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id
    const book = books.find(item => item.id == id)
    if (book) {
        res.send(book)
    } else {
        res.status(404).send("Sản phẩm không tồn tại")
    }
    res.end()
})

app.post('/products', (req, res) => {
    const data = req.body
    res.send(data)
})

app.put('/products/:id', (req, res) => {
    const id = req.params.id
    const data = req.body
    const bookIndex = books.findIndex(item => item.id == id)
    console.log(bookIndex);
    if(bookIndex !== -1) {
        books[bookIndex] = {...books[bookIndex], ...data}
        res.send(books[bookIndex])
    } else {
        res.status(404).send("Sản phẩm không tồn tại")
    }
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
})