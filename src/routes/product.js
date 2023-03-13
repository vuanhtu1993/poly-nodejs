import express from 'express'

const router = express.Router()

const books = [
    {id: 1, name: "Book 1", price: 100},
    {id: 2, name: "Book 2", price: 100},
    {id: 3, name: "Book 3", price: 100},
]

router.get('/products', (req, res) => {
    res.send(books)
    res.end()
})

router.get('/products/:id', (req, res) => {
    const id = req.params.id
    const book = books.find(item => item.id == id)
    if (book) {
        res.send(book)
    } else {
        res.status(404).send("Sản phẩm không tồn tại")
    }
    res.end()
})

router.post('/products', (req, res) => {
    const data = req.body
    res.send(data)
})

router.put('/products/:id', (req, res) => {
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

export default router