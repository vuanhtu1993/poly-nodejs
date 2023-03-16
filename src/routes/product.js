import express from 'express'
import { createProduct, getProduct, getProductById } from '../controllers/product.js'

const router = express.Router()

router.get('/products', getProduct)

router.get('/products/:id', getProductById)

router.post('/products', createProduct)

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