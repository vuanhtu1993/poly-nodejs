import express from 'express'
import authenticate from '../middleware/authenticate'

const productRouter = express.Router()

productRouter.get('/test', authenticate,(req, res) => {
    res.send({
        message: "Successfully"
    })
})

productRouter.post('/test', authenticate,(req, res) => {
    res.send({
        message: "Successfully"
    })
})

export default productRouter