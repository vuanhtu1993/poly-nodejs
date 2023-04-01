import express from 'express'
import jwt from 'jsonwebtoken'
import authenticate from '../middleware/authenticate'

const productRouter = express.Router()

productRouter.get('/test', authenticate, (req, res) => {
    try {
        res.send({
            message: "Request thành công"
        })
    } catch (err) {
        res.send({
            message: err
        })
    }
})

productRouter.post('/test', authenticate, (req, res) => {
    try {
        res.send({
            message: "Request thành công",
        })
    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
})

export default productRouter